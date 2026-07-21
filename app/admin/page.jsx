"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";

const displayOrder = [
  "58/1",
  "58/3",
  "58/5",
  "58/7",
  "58/2",
  "58/4",
  "58/6",
  "58/8",
];

export default function AdminPage() {
  const [user, setUser] = useState(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginMessage, setLoginMessage] = useState("");
  const [panelMessage, setPanelMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [checkingSession, setCheckingSession] = useState(true);
  const [loadingUnits, setLoadingUnits] = useState(false);
  const [savingId, setSavingId] = useState(null);
  const [units, setUnits] = useState([]);

  useEffect(() => {
    supabase.auth.getSession().then(({ data }) => {
      setUser(data.session?.user ?? null);
      setCheckingSession(false);
    });

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);

      if (!session) {
        setUnits([]);
      }
    });

    return () => subscription.unsubscribe();
  }, []);

  useEffect(() => {
    if (!user) {
      return;
    }

    async function loadUnits() {
      setLoadingUnits(true);
      setPanelMessage("");

      const { data, error } = await supabase
        .from("units")
        .select(
          "id, usable_area, net_area, garden_area, plot_no, total_price, status"
        );

      if (error) {
        setPanelMessage(`Nie udało się pobrać lokali: ${error.message}`);
        setLoadingUnits(false);
        return;
      }

      const sortedUnits = [...data]
        .sort(
          (first, second) =>
            displayOrder.indexOf(first.id) -
            displayOrder.indexOf(second.id)
        )
        .map((unit) => ({
          ...unit,
          total_price: String(unit.total_price ?? ""),
        }));

      setUnits(sortedUnits);
      setLoadingUnits(false);
    }

    loadUnits();
  }, [user]);

  async function handleLogin(event) {
    event.preventDefault();
    setLoading(true);
    setLoginMessage("");

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      setLoginMessage("Nieprawidłowy adres e-mail lub hasło.");
    }

    setLoading(false);
  }

  async function handleLogout() {
    await supabase.auth.signOut();
    setUser(null);
  }

  function updateUnit(id, field, value) {
    setUnits((currentUnits) =>
      currentUnits.map((unit) =>
        unit.id === id ? { ...unit, [field]: value } : unit
      )
    );
  }

  async function saveUnit(unit) {
    setSavingId(unit.id);
    setPanelMessage("");

    const price = Number(unit.total_price);

    if (!Number.isFinite(price) || price <= 0) {
      setPanelMessage(`Wpisz prawidłową cenę lokalu ${unit.id}.`);
      setSavingId(null);
      return;
    }

    const { data, error } = await supabase
      .from("units")
      .update({
        total_price: price,
        status: unit.status,
      })
      .eq("id", unit.id)
      .select("id");

    if (error) {
      setPanelMessage(`Nie udało się zapisać lokalu ${unit.id}: ${error.message}`);
      setSavingId(null);
      return;
    }

    if (!data || data.length === 0) {
      setPanelMessage(
        `Nie zapisano lokalu ${unit.id}. Sprawdź uprawnienia administratora.`
      );
      setSavingId(null);
      return;
    }

    setPanelMessage(`Lokal ${unit.id} został zapisany.`);
    setSavingId(null);
  }

  if (checkingSession) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-[#f4f1e8]">
        <p>Sprawdzanie logowania...</p>
      </main>
    );
  }

  if (!user) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-[#f4f1e8] px-6">
        <form
          onSubmit={handleLogin}
          className="w-full max-w-md rounded-3xl bg-white p-8 shadow-xl"
        >
          <p className="text-sm uppercase tracking-[0.25em] text-black/50">
            NovaDuo
          </p>

          <h1 className="mt-3 text-3xl font-semibold">
            Panel administratora
          </h1>

          <p className="mt-2 text-black/60">
            Zaloguj się, aby zmieniać ceny i statusy lokali.
          </p>

          <label className="mt-8 block text-sm font-medium">
            Adres e-mail
          </label>

          <input
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            required
            className="mt-2 w-full rounded-xl border border-black/20 px-4 py-3 outline-none focus:border-black"
          />

          <label className="mt-5 block text-sm font-medium">
            Hasło
          </label>

          <input
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            required
            className="mt-2 w-full rounded-xl border border-black/20 px-4 py-3 outline-none focus:border-black"
          />

          {loginMessage && (
            <p className="mt-4 rounded-xl bg-red-50 p-3 text-sm text-red-700">
              {loginMessage}
            </p>
          )}

          <button
            type="submit"
            disabled={loading}
            className="mt-6 w-full rounded-full bg-[#1f3d2b] px-5 py-3 font-medium text-white disabled:opacity-60"
          >
            {loading ? "Logowanie..." : "Zaloguj się"}
          </button>
        </form>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#f4f1e8] px-4 py-8 md:px-6 md:py-12">
      <div className="mx-auto max-w-6xl rounded-3xl bg-white p-6 shadow-xl md:p-8">
        <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.25em] text-black/50">
              NovaDuo
            </p>

            <h1 className="mt-2 text-3xl font-semibold">
              Panel administratora
            </h1>

            <p className="mt-2 text-black/60">
              Zalogowano jako: {user.email}
            </p>
          </div>

          <button
            onClick={handleLogout}
            className="self-start rounded-full bg-black px-5 py-3 text-white"
          >
            Wyloguj
          </button>
        </div>

        <div className="mt-8 border-t border-black/10 pt-8">
          <h2 className="text-2xl font-semibold">Ceny i statusy lokali</h2>

          <p className="mt-2 text-black/60">
            Zmień dane wybranego lokalu i kliknij „Zapisz”.
          </p>

          {panelMessage && (
            <p className="mt-5 rounded-xl bg-[#eef5ef] p-4 text-[#1f3d2b]">
              {panelMessage}
            </p>
          )}

          {loadingUnits ? (
            <p className="mt-8">Pobieranie lokali...</p>
          ) : (
            <div className="mt-8 overflow-x-auto">
              <table className="w-full min-w-[900px] border-collapse">
                <thead>
                  <tr className="border-b border-black/10 text-left text-sm text-black/60">
                    <th className="px-3 py-4">Lokal</th>
                    <th className="px-3 py-4">Pow. użytkowa</th>
                    <th className="px-3 py-4">Pow. netto</th>
                    <th className="px-3 py-4">Ogród</th>
                    <th className="px-3 py-4">Działka</th>
                    <th className="px-3 py-4">Cena brutto</th>
                    <th className="px-3 py-4">Status</th>
                    <th className="px-3 py-4"></th>
                  </tr>
                </thead>

                <tbody>
                  {units.map((unit) => (
                    <tr
                      key={unit.id}
                      className="border-b border-black/10"
                    >
                      <td className="px-3 py-4 font-semibold">{unit.id}</td>
                      <td className="px-3 py-4">{unit.usable_area} m²</td>
                      <td className="px-3 py-4">{unit.net_area} m²</td>
                      <td className="px-3 py-4">{unit.garden_area} m²</td>
                      <td className="px-3 py-4">{unit.plot_no}</td>

                      <td className="px-3 py-4">
                        <input
                          type="number"
                          min="1"
                          step="1"
                          value={unit.total_price}
                          onChange={(event) =>
                            updateUnit(
                              unit.id,
                              "total_price",
                              event.target.value
                            )
                          }
                          className="w-40 rounded-xl border border-black/20 px-3 py-2"
                        />
                      </td>

                      <td className="px-3 py-4">
                        <select
                          value={unit.status}
                          onChange={(event) =>
                            updateUnit(unit.id, "status", event.target.value)
                          }
                          className="w-40 rounded-xl border border-black/20 bg-white px-3 py-2"
                        >
                          <option value="Dostępny">Dostępny</option>
                          <option value="Rezerwacja">Rezerwacja</option>
                          <option value="Sprzedany">Sprzedany</option>
                        </select>
                      </td>

                      <td className="px-3 py-4 text-right">
                        <button
                          onClick={() => saveUnit(unit)}
                          disabled={savingId === unit.id}
                          className="rounded-full bg-[#1f3d2b] px-5 py-2 text-white disabled:opacity-60"
                        >
                          {savingId === unit.id
                            ? "Zapisywanie..."
                            : "Zapisz"}
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}