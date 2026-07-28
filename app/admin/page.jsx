"use client";

import { useEffect, useMemo, useState } from "react";
import { supabase } from "@/lib/supabase";

const DISPLAY_ORDER = [
  "58/1",
  "58/3",
  "58/5",
  "58/7",
  "58/2",
  "58/4",
  "58/6",
  "58/8",
];

const ROAD_TOTAL_PRICE = 2;

function getWarsawDate() {
  const parts = new Intl.DateTimeFormat("en-CA", {
    timeZone: "Europe/Warsaw",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).formatToParts(new Date());

  const values = Object.fromEntries(
    parts
      .filter((part) => part.type !== "literal")
      .map((part) => [part.type, part.value])
  );

  return `${values.year}-${values.month}-${values.day}`;
}

function formatMoney(value) {
  if (value === null || value === undefined || value === "") {
    return "—";
  }

  return `${Number(value).toLocaleString("pl-PL", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  })} zł`;
}

function formatArea(value) {
  const number = Number(value);

  if (!Number.isFinite(number)) {
    return "—";
  }

  return `${number.toLocaleString("pl-PL", {
    minimumFractionDigits: Number.isInteger(number) ? 0 : 2,
    maximumFractionDigits: 2,
  })} m²`;
}

function formatPricePerSquareMeter(totalPrice, usableArea) {
  const price = Number(totalPrice);
  const area = Number(usableArea);

  if (!Number.isFinite(price) || !Number.isFinite(area) || area <= 0) {
    return "—";
  }

  return `${(price / area).toLocaleString("pl-PL", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  })} zł/m²`;
}

function formatDate(value) {
  const isoDate = String(value ?? "").slice(0, 10);
  const [year, month, day] = isoDate.split("-");

  if (!year || !month || !day) {
    return "—";
  }

  return `${day}.${month}.${year}`;
}

function formatDateTime(value) {
  if (!value) {
    return "—";
  }

  return new Intl.DateTimeFormat("pl-PL", {
    dateStyle: "short",
    timeStyle: "short",
    timeZone: "Europe/Warsaw",
  }).format(new Date(value));
}

function csvEscape(value) {
  const text = String(value ?? "");
  return `"${text.replaceAll('"', '""')}"`;
}

function downloadCsv(filename, rows) {
  if (!rows.length) {
    return;
  }

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
  const [downloadingReport, setDownloadingReport] = useState(false);
  const [units, setUnits] = useState([]);
  const [savedUnits, setSavedUnits] = useState({});
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
        setSavedUnits({});
        setHistory([]);
      }
    });

    return () => subscription.unsubscribe();
  }, []);

  async function fetchHistory() {
    const { data, error } = await supabase
      .from("unit_price_history")
      .select(
        "id, unit_id, old_total_price, new_total_price, old_status, new_status, changed_at"
      )
      .order("changed_at", { ascending: false });

    if (error) {
      throw new Error(error.message);
    }

    setHistory(data ?? []);
  }

  useEffect(() => {
    if (!user) {
      return;
    }

    async function loadData() {
      setLoadingData(true);
      setPanelMessage("");

      const [unitsResult, historyResult] = await Promise.all([
        supabase
          .from("units")
          .select(
            "id, usable_area, net_area, garden_area, plot_no, total_price, status, price_valid_from"
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
              DISPLAY_ORDER.indexOf(first.id) -
              DISPLAY_ORDER.indexOf(second.id)
          )
          .map((unit) => ({
            ...unit,
            total_price: String(unit.total_price ?? ""),
          }));

        setUnits(sortedUnits);

        setSavedUnits(
          Object.fromEntries(
            sortedUnits.map((unit) => [
              unit.id,
              {
                total_price: Number(unit.total_price),
                status: unit.status,
                price_valid_from: unit.price_valid_from,
              },
            ])
          )
        );
      }

      if (historyResult.error) {
        setPanelMessage((current) =>
          current
            ? `${current} Nie udało się pobrać historii: ${historyResult.error.message}`
            : `Nie udało się pobrać historii: ${historyResult.error.message}`
        );
      } else {
        setHistory(historyResult.data ?? []);
      }

      setLoadingData(false);
    }

    loadData();
  }, [user]);

  const priceHistory = useMemo(
    () =>
      history.filter(
        (entry) =>
          entry.old_total_price === null ||
          Number(entry.old_total_price) !== Number(entry.new_total_price)
      ),
    [history]
  );

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

    const savedUnit = savedUnits[unit.id];
    const price = Number(unit.total_price);

    if (!savedUnit) {
      setPanelMessage(
        `Nie znaleziono zapisanych danych lokalu ${unit.id}. Odśwież panel.`
      );

      setSavingId(null);
      return;
    }

    if (!Number.isFinite(price) || price <= 0) {
      setPanelMessage(`Wpisz prawidłową cenę lokalu ${unit.id}.`);

      setSavingId(null);
      return;
    }

    const priceChanged = price !== Number(savedUnit.total_price);
    const statusChanged = unit.status !== savedUnit.status;

    if (!priceChanged && !statusChanged) {
      setPanelMessage(`W lokalu ${unit.id} nie wprowadzono żadnych zmian.`);

      setSavingId(null);
      return;
    }

    const updatePayload = {};

    if (priceChanged) {
      updatePayload.total_price = price;
      updatePayload.price_valid_from = getWarsawDate();
    }

    if (statusChanged) {
      updatePayload.status = unit.status;
    }

    const { data, error } = await supabase
      .from("units")
      .update(updatePayload)
      .eq("id", unit.id)
      .select(
        "id, usable_area, net_area, garden_area, plot_no, total_price, status, price_valid_from"
      );

    if (error) {
      setPanelMessage(
        `Nie udało się zapisać lokalu ${unit.id}: ${error.message}`
      );

      setSavingId(null);
      return;
    }

    const savedRow = data?.[0];

    if (!savedRow) {
      setPanelMessage(
        `Nie zapisano lokalu ${unit.id}. Sprawdź uprawnienia administratora.`
      );

      setSavingId(null);
      return;
    }

    setUnits((currentUnits) =>
      currentUnits.map((currentUnit) =>
        currentUnit.id === unit.id
          ? {
              ...savedRow,
              total_price: String(savedRow.total_price ?? ""),
            }
          : currentUnit
      )
    );

    setSavedUnits((current) => ({
      ...current,

      [unit.id]: {
        total_price: Number(savedRow.total_price),
        status: savedRow.status,
        price_valid_from: savedRow.price_valid_from,
      },
    }));

    try {
      await fetchHistory();
    } catch (historyError) {
      console.error("Nie udało się odświeżyć historii:", historyError);
    }

    if (priceChanged && statusChanged) {
      setPanelMessage(
        `Cena i status lokalu ${unit.id} zostały zapisane. Nowa cena obowiązuje od ${formatDate(
          savedRow.price_valid_from
        )}.`
      );
    } else if (priceChanged) {
      setPanelMessage(
        `Cena lokalu ${unit.id} została zapisana i obowiązuje od ${formatDate(
          savedRow.price_valid_from
        )}.`
      );
    } else {
      setPanelMessage(
        `Status lokalu ${unit.id} został zapisany. Data obowiązywania ceny nie została zmieniona.`
      );
    }

    setSavingId(null);
  }

  async function downloadOfficialReport() {
    setDownloadingReport(true);
    setPanelMessage("");

    try {
      const response = await fetch(
        `/dane/novaduo-ceny.csv?time=${Date.now()}`,
        {
          cache: "no-store",
        }
      );

      if (!response.ok) {
        throw new Error(`Serwer zwrócił status ${response.status}.`);
      }

      const blob = await response.blob();
      const url = URL.createObjectURL(blob);
      const link = document.createElement("a");

      link.href = url;
      link.download = `novaduo-ceny-${getWarsawDate()}.csv`;

      document.body.appendChild(link);
      link.click();
      link.remove();

      URL.revokeObjectURL(url);

      setPanelMessage(
        "Pobrano oficjalny raport CSV w układzie 58 kolumn."
      );
    } catch (error) {
      setPanelMessage(`Nie udało się pobrać raportu: ${error.message}`);
    }

    setDownloadingReport(false);
  }

  function downloadPriceHistory() {
    const rows = priceHistory.map((entry) => {
      const unit = units.find((item) => item.id === entry.unit_id);
      const usableArea = Number(unit?.usable_area ?? 0);

      const oldPrice =
        entry.old_total_price === null
          ? null
          : Number(entry.old_total_price);

      const newPrice = Number(entry.new_total_price);

      return {
        data_i_czas_zmiany: entry.changed_at,
        numer_lokalu: entry.unit_id,

        stara_cena_lokalu_brutto_pln:
          oldPrice === null ? "" : oldPrice.toFixed(2),

        nowa_cena_lokalu_brutto_pln: newPrice.toFixed(2),

        stara_cena_m2_brutto_pln:
          oldPrice === null || !usableArea
            ? ""
            : (oldPrice / usableArea).toFixed(6),

        nowa_cena_m2_brutto_pln: usableArea
          ? (newPrice / usableArea).toFixed(6)
          : "",

        prawa_drogowe_brutto_pln: ROAD_TOTAL_PRICE.toFixed(2),

        stara_cena_laczna_brutto_pln:
          oldPrice === null
            ? ""
            : (oldPrice + ROAD_TOTAL_PRICE).toFixed(2),

        nowa_cena_laczna_brutto_pln: (
          newPrice + ROAD_TOTAL_PRICE
        ).toFixed(2),
      };
    });

    downloadCsv(
      `novaduo-historia-cen-${getWarsawDate()}.csv`,
      rows
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
      <div className="mx-auto max-w-7xl rounded-3xl bg-white p-6 shadow-xl md:p-8">
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
            type="button"
            onClick={handleLogout}
            className="self-start rounded-full bg-black px-5 py-3 text-white"
          >
            Wyloguj
          </button>
        </div>

        <div className="mt-8 rounded-2xl border border-[#1f3d2b]/15 bg-[#eef5ef] p-5 text-sm leading-6 text-[#1f3d2b]">
          Zmiana samego statusu nie zmienia daty obowiązywania ceny. Nowa
          data jest zapisywana wyłącznie wtedy, gdy rzeczywiście zmienisz
          cenę lokalu.
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
                type="button"
                onClick={downloadOfficialReport}
                disabled={downloadingReport}
                className="rounded-full bg-[#1f3d2b] px-5 py-2 text-white disabled:opacity-60"
              >
                {downloadingReport
                  ? "Pobieranie..."
                  : "Oficjalny raport CSV – 58 kolumn"}
              </button>

              <button
                type="button"
                onClick={downloadPriceHistory}
                disabled={priceHistory.length === 0}
                className="rounded-full border border-[#1f3d2b] px-5 py-2 text-[#1f3d2b] disabled:opacity-40"
              >
                Historia cen CSV
              </button>

              <a
                href="/historia-cen"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-black/20 px-5 py-2"
              >
                Publiczna historia cen
              </a>
            </div>
          </div>

          {panelMessage && (
            <p className="mt-5 rounded-xl bg-[#eef5ef] p-4 text-[#1f3d2b]">
              {panelMessage}
            </p>
          )}

          {loadingData ? (
            <p className="mt-8">Pobieranie danych...</p>
          ) : (
            <div className="mt-8 overflow-x-auto">
              <table className="w-full min-w-[1250px] border-collapse">
                <thead>
                  <tr className="border-b border-black/10 text-left text-sm text-black/60">
                    <th className="px-3 py-4">Lokal</th>
                    <th className="px-3 py-4">Pow. użytkowa</th>
                    <th className="px-3 py-4">Pow. netto</th>
                    <th className="px-3 py-4">Ogród</th>
                    <th className="px-3 py-4">Działka</th>
                    <th className="px-3 py-4">Cena za 1 m²</th>
                    <th className="px-3 py-4">Cena lokalu</th>
                    <th className="px-3 py-4">Cena łączna</th>
                    <th className="px-3 py-4">Cena obowiązuje od</th>
                    <th className="px-3 py-4">Status</th>
                    <th className="px-3 py-4"></th>
                  </tr>
                </thead>

                <tbody>
                  {units.map((unit) => (
                    <tr
                      key={unit.id}
                      className="border-b border-black/10 align-top"
                    >
                      <td className="px-3 py-4 font-semibold">
                        {unit.id}
                      </td>

                      <td className="px-3 py-4">
                        {formatArea(unit.usable_area)}
                      </td>

                      <td className="px-3 py-4">
                        {formatArea(unit.net_area)}
                      </td>

                      <td className="px-3 py-4">
                        {formatArea(unit.garden_area)}
                      </td>

                      <td className="px-3 py-4">
                        {unit.plot_no}
                      </td>

                      <td className="px-3 py-4 font-medium text-[#1f3d2b]">
                        {formatPricePerSquareMeter(
                          unit.total_price,
                          unit.usable_area
                        )}
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

                      <td className="px-3 py-4 font-semibold">
                        {formatMoney(
                          Number(unit.total_price) + ROAD_TOTAL_PRICE
                        )}
                      </td>

                      <td className="px-3 py-4">
                        {formatDate(unit.price_valid_from)}
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
                          type="button"
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
            Historia zmian cen
          </h2>

          <p className="mt-2 text-black/60">
            Poniżej wyświetlane są wyłącznie rzeczywiste zmiany cen.
            Zmiany samego statusu nie są pokazywane jako historia ceny.
          </p>

          <div className="mt-6 space-y-3">
            {priceHistory.length === 0 && (
              <p className="rounded-xl bg-black/5 p-4">
                Brak zapisanej historii zmian cen.
              </p>
            )}

            {priceHistory.slice(0, 30).map((entry) => (
              <div
                key={entry.id}
                className="grid gap-3 rounded-2xl border border-black/10 p-4 md:grid-cols-[100px_170px_1fr] md:items-center"
              >
                <strong>{entry.unit_id}</strong>

                <span className="text-sm text-black/60">
                  {formatDateTime(entry.changed_at)}
                </span>

                <span>
                  {entry.old_total_price === null ? (
                    <>
                      Cena początkowa:{" "}
                      {formatMoney(entry.new_total_price)}; cena łączna:{" "}
                      {formatMoney(
                        Number(entry.new_total_price) +
                          ROAD_TOTAL_PRICE
                      )}
                    </>
                  ) : (
                    <>
                      {formatMoney(entry.old_total_price)} →{" "}
                      {formatMoney(entry.new_total_price)}; cena łączna:{" "}
                      {formatMoney(
                        Number(entry.new_total_price) +
                          ROAD_TOTAL_PRICE
                      )}
                    </>
                  )}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
