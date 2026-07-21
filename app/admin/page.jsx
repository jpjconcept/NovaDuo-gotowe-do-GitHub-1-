"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";

const displayOrder = [
  "58/1", "58/3", "58/5", "58/7",
  "58/2", "58/4", "58/6", "58/8",
];

const taskOneUnits = new Set(["58/1", "58/3", "58/5", "58/7"]);

const company = {
  developerName: "JPJ Concept Sp. z o.o.",
  registeredAddress:
    "ul. Nowowiejska 58A, Pogroszew, 05-850 Ożarów Mazowiecki",
  salesAddress:
    "ul. Nowowiejska 58A, Pogroszew, 05-850 Ożarów Mazowiecki",
  contact: "tel. 600 397 399, e-mail: kontakt@jpjconcept.pl",
  investmentLocation:
    "ul. Nowowiejska 58, Pogroszew, 05-850 Ożarów Mazowiecki",
  offerUrl: "https://novaduo.pl/",
  prospectusUrlTask1:
    "https://novaduo.pl/prospekt-novaduo-zadanie-1-do-publikacji.pdf",
  prospectusUrlTask2:
    "https://novaduo.pl/prospekt-novaduo-zadanie-2-do-publikacji.pdf",
  currency: "PLN",
};

const today = () => new Date().toISOString().slice(0, 10);

function csvEscape(value) {
  const text = String(value ?? "");
  return `"${text.replaceAll('"', '""')}"`;
}

function downloadCsv(filename, rows) {
  if (!rows.length) return;

  const headers = Object.keys(rows[0]);
  const csv =
    "\ufeff" +
    [
      headers.map(csvEscape).join(";"),
      ...rows.map((row) =>
        headers.map((header) => csvEscape(row[header])).join(";")
      ),
    ].join("\r\n");

  const blob = new Blob([csv], {
    type: "text/csv;charset=utf-8",
  });

  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");

  link.href = url;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  link.remove();

  URL.revokeObjectURL(url);
}

function taskFor(unitId) {
  return taskOneUnits.has(unitId) ? 1 : 2;
}

function prospectusFor(unitId) {
  return taskFor(unitId) === 1
    ? company.prospectusUrlTask1
    : company.prospectusUrlTask2;
}

function formatMoney(value) {
  if (value === null || value === undefined || value === "") {
    return "—";
  }

  return `${Number(value).toLocaleString("pl-PL")} PLN`;
}

function formatDateTime(value) {
  return new Intl.DateTimeFormat("pl-PL", {
    dateStyle: "short",
    timeStyle: "short",
  }).format(new Date(value));
}

export default function AdminPage() {
  const [user, setUser] = useState(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginMessage, setLoginMessage] = useState("");
  const [panelMessage, setPanelMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [checkingSession, setCheckingSession] = useState(true);
  const [loadingData, setLoadingData] = useState(false);
  const [savingId, setSavingId] = useState(null);
  const [units, setUnits] = useState([]);
  const [history, setHistory] = useState([]);

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
        setHistory([]);
      }
    });

    return () => subscription.unsubscribe();
  }, []);

  useEffect(() => {
    if (!user) return;

    async function loadData() {
      setLoadingData(true);
      setPanelMessage("");

      const [unitsResult, historyResult] = await Promise.all([
        supabase
          .from("units")
          .select(
            "id, usable_area, net_area, garden_area, plot_no, total_price, status"
          ),
        supabase
          .from("unit_price_history")
          .select(
            "id, unit_id, old_total_price, new_total_price, old_status, new_status, changed_at"
          )
          .order("changed_at", { ascending: false }),
      ]);

      if (unitsResult.error) {
        setPanelMessage(
          `Nie udało się pobrać lokali: ${unitsResult.error.message}`
        );
      } else {
        const sortedUnits = [...(unitsResult.data ?? [])]
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
      }

      if (historyResult.error) {
        setPanelMessage(
          `Nie udało się pobrać historii: ${historyResult.error.message}`
        );
      } else {
        setHistory(historyResult.data ?? []);
      }

      setLoadingData(false);
    }

    loadData();
  }, [user]);

  async function refreshHistory() {
    const { data, error } = await supabase
      .from("unit_price_history")
      .select(
        "id, unit_id, old_total_price, new_total_price, old_status, new_status, changed_at"
      )
      .order("changed_at", { ascending: false });

    if (!error) {
      setHistory(data ?? []);
    }
  }

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
      setPanelMessage(
        `Nie udało się zapisać lokalu ${unit.id}: ${error.message}`
      );
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

    await refreshHistory();
    setPanelMessage(`Lokal ${unit.id} został zapisany.`);
    setSavingId(null);
  }

  function latestPriceDate(unitId) {
    const latestEntry = history.find(
      (entry) => entry.unit_id === unitId
    );

    return latestEntry?.changed_at?.slice(0, 10) ?? today();
  }

  function buildCurrentRows() {
    return units.map((unit) => ({
      nazwa_dewelopera: company.developerName,
      adres_siedziby: company.registeredAddress,
      adres_biura_sprzedazy: company.salesAddress,
      kontakt_z_deweloperem: company.contact,
      lokalizacja_inwestycji: company.investmentLocation,
      rodzaj_nieruchomosci:
        "lokal mieszkalny w budynku jednorodzinnym dwulokalowym",
      zadanie_inwestycyjne: `Zadanie nr ${taskFor(unit.id)}`,
      numer_lokalu: unit.id,
      powierzchnia_uzytkowa_m2:
        Number(unit.usable_area).toFixed(2),
      powierzchnia_netto_m2:
        Number(unit.net_area).toFixed(2),
      powierzchnia_ogrodu_m2:
        Number(unit.garden_area).toFixed(2),
      numer_dzialki: unit.plot_no,
      cena_m2_brutto_pln: (
        Number(unit.total_price) / Number(unit.usable_area)
      ).toFixed(2),
      cena_calkowita_brutto_pln:
        Number(unit.total_price).toFixed(2),
      pomieszczenia_przynalezne_lub_prawa:
        "Garaż w bryle — wliczony w cenę",
      cena_pomieszczen_lub_praw_brutto_pln: "0.00",
      inne_swiadczenia_pieniezne: "Brak",
      data_obowiazywania_ceny:
        latestPriceDate(unit.id),
      status_oferty: unit.status,
      prospekt_url: prospectusFor(unit.id),
      strona_oferty_url: company.offerUrl,
      waluta: company.currency,
      data_wygenerowania: today(),
    }));
  }

  function buildHistoryRows() {
    return history.map((entry, index) => {
      const unit = units.find(
        (item) => item.id === entry.unit_id
      );

      const usableArea = Number(
        unit?.usable_area ?? 0
      );

      const olderEntry = history
        .slice(index + 1)
        .find(
          (item) => item.unit_id === entry.unit_id
        );

      const priceChanged =
        entry.old_total_price !== null &&
        Number(entry.old_total_price) !==
          Number(entry.new_total_price);

      const statusChanged =
        entry.old_status !== null &&
        entry.old_status !== entry.new_status;

      let changeType = "stan początkowy";

      if (priceChanged && statusChanged) {
        changeType = "cena i status";
      } else if (priceChanged) {
        changeType = "cena";
      } else if (statusChanged) {
        changeType = "status";
      }

      return {
        data_i_czas_zmiany: entry.changed_at,
        numer_lokalu: entry.unit_id,
        rodzaj_zmiany: changeType,
        stara_cena_calkowita_brutto_pln:
          entry.old_total_price === null
            ? ""
            : Number(entry.old_total_price).toFixed(2),
        nowa_cena_calkowita_brutto_pln:
          Number(entry.new_total_price).toFixed(2),
        stara_cena_m2_brutto_pln:
          entry.old_total_price === null || !usableArea
            ? ""
            : (
                Number(entry.old_total_price) /
                usableArea
              ).toFixed(2),
        nowa_cena_m2_brutto_pln:
          usableArea
            ? (
                Number(entry.new_total_price) /
                usableArea
              ).toFixed(2)
            : "",
        stary_status: entry.old_status ?? "",
        nowy_status: entry.new_status,
        poprzednia_data_obowiazywania:
          olderEntry?.changed_at?.slice(0, 10) ?? "",
        nowa_data_obowiazywania:
          entry.changed_at.slice(0, 10),
        data_wygenerowania: today(),
      };
    });
  }

  function downloadCurrent() {
    downloadCsv(
      `novaduo-ceny-${today()}.csv`,
      buildCurrentRows()
    );
  }

  function downloadHistory() {
    downloadCsv(
      `novaduo-ceny-historia-${today()}.csv`,
      buildHistoryRows()
    );
  }

  function prepareReport() {
    downloadCsv(
      `novaduo-raport-dzienny-${today()}.csv`,
      buildCurrentRows()
    );
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
            onChange={(event) =>
              setEmail(event.target.value)
            }
            required
            className="mt-2 w-full rounded-xl border border-black/20 px-4 py-3 outline-none focus:border-black"
          />

          <label className="mt-5 block text-sm font-medium">
            Hasło
          </label>

          <input
            type="password"
            value={password}
            onChange={(event) =>
              setPassword(event.target.value)
            }
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
          <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <h2 className="text-2xl font-semibold">
                Ceny i statusy lokali
              </h2>

              <p className="mt-2 text-black/60">
                Zmień dane wybranego lokalu i kliknij „Zapisz”.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <button
                onClick={downloadCurrent}
                className="rounded-full border border-[#1f3d2b] px-5 py-2 text-[#1f3d2b]"
              >
                Aktualne ceny CSV
              </button>

              <button
                onClick={downloadHistory}
                className="rounded-full border border-[#1f3d2b] px-5 py-2 text-[#1f3d2b]"
              >
                Historia CSV
              </button>

              <button
                onClick={prepareReport}
                className="rounded-full bg-[#1f3d2b] px-5 py-2 text-white"
              >
                Raport dzienny CSV
              </button>
            </div>
          </div>

          {panelMessage && (
            <p className="mt-5 rounded-xl bg-[#eef5ef] p-4 text-[#1f3d2b]">
              {panelMessage}
            </p>
          )}

          {loadingData ? (
            <p className="mt-8">
              Pobieranie danych...
            </p>
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
                      <td className="px-3 py-4 font-semibold">
                        {unit.id}
                      </td>

                      <td className="px-3 py-4">
                        {unit.usable_area} m²
                      </td>

                      <td className="px-3 py-4">
                        {unit.net_area} m²
                      </td>

                      <td className="px-3 py-4">
                        {unit.garden_area} m²
                      </td>

                      <td className="px-3 py-4">
                        {unit.plot_no}
                      </td>

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
                            updateUnit(
                              unit.id,
                              "status",
                              event.target.value
                            )
                          }
                          className="w-40 rounded-xl border border-black/20 bg-white px-3 py-2"
                        >
                          <option value="Dostępny">
                            Dostępny
                          </option>
                          <option value="Rezerwacja">
                            Rezerwacja
                          </option>
                          <option value="Sprzedany">
                            Sprzedany
                          </option>
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

        <div className="mt-12 border-t border-black/10 pt-8">
          <h2 className="text-2xl font-semibold">
            Historia zmian
          </h2>

          <p className="mt-2 text-black/60">
            Ostatnie zapisane ceny i statusy lokali.
          </p>

          <div className="mt-6 space-y-3">
            {history.length === 0 && (
              <p className="rounded-xl bg-black/5 p-4">
                Brak zapisanej historii.
              </p>
            )}

            {history.slice(0, 20).map((entry) => (
              <div
                key={entry.id}
                className="grid gap-2 rounded-2xl border border-black/10 p-4 md:grid-cols-[100px_160px_1fr] md:items-center"
              >
                <strong>{entry.unit_id}</strong>

                <span className="text-sm text-black/60">
                  {formatDateTime(entry.changed_at)}
                </span>

                <span>
                  {entry.old_total_price === null
                    ? `Stan początkowy: ${formatMoney(
                        entry.new_total_price
                      )}, ${entry.new_status}`
                    : `${formatMoney(
                        entry.old_total_price
                      )} → ${formatMoney(
                        entry.new_total_price
                      )}; ${entry.old_status} → ${entry.new_status}`}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}