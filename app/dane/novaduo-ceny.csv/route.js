import { supabase } from "@/lib/supabase";

export const dynamic = "force-dynamic";
export const revalidate = 0;

const REPORTING_START = "2026-07-23";
const ROAD_VALID_FROM = "2026-07-23";
const ROAD_TOTAL_PRICE = 2;

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

const taskOneUnits = new Set(["58/1", "58/3", "58/5", "58/7"]);

const INITIAL_PRICES = {
  "58/1": 1279000,
  "58/3": 1090000,
  "58/5": 1179000,
  "58/7": 1279000,
  "58/2": 1279000,
  "58/4": 1179000,
  "58/6": 1179000,
  "58/8": 1279000,
};

const HEADERS = [
  "Nazwa dewelopera",
  "Forma prawna dewelopera",
  "Nr KRS",
  "Nr wpisu do CEiDG",
  "Nr NIP",
  "Nr REGON",
  "Nr telefonu",
  "Adres poczty elektronicznej",
  "Nr faxu",
  "Adres strony internetowej dewelopera",
  "Województwo adresu siedziby/głównego miejsca wykonywania działalności gospodarczej dewelopera",
  "Powiat adresu siedziby/głównego miejsca wykonywania działalności gospodarczej dewelopera",
  "Gmina adresu siedziby/głównego miejsca wykonywania działalności gospodarczej dewelopera",
  "Miejscowość adresu siedziby/głównego miejsca wykonywania działalności gospodarczej dewelopera",
  "Ulica adresu siedziby/głównego miejsca wykonywania działalności gospodarczej dewelopera",
  "Nr nieruchomości adresu siedziby/głównego miejsca wykonywania działalności gospodarczej dewelopera",
  "Nr lokalu adresu siedziby/głównego miejsca wykonywania działalności gospodarczej dewelopera",
  "Kod pocztowy adresu siedziby/głównego miejsca wykonywania działalności gospodarczej dewelopera",
  "Województwo adresu lokalu, w którym prowadzona jest sprzedaż",
  "Powiat adresu lokalu, w którym prowadzona jest sprzedaż",
  "Gmina adresu lokalu, w którym prowadzona jest sprzedaż",
  "Miejscowość adresu lokalu, w którym prowadzona jest sprzedaż",
  "Ulica adresu lokalu, w którym prowadzona jest sprzedaż",
  "Nr nieruchomości adresu lokalu, w którym prowadzona jest sprzedaż",
  "Nr lokalu adresu lokalu, w którym prowadzona jest sprzedaż",
  "Kod pocztowy adresu lokalu, w którym prowadzona jest sprzedaż",
  "Dodatkowe lokalizacje, w których prowadzona jest sprzedaż",
  "Sposób kontaktu nabywcy z deweloperem",
  "Województwo lokalizacji przedsięwzięcia deweloperskiego lub zadania inwestycyjnego",
  "Powiat lokalizacji przedsięwzięcia deweloperskiego lub zadania inwestycyjnego",
  "Gmina lokalizacji przedsięwzięcia deweloperskiego lub zadania inwestycyjnego",
  "Miejscowość lokalizacji przedsięwzięcia deweloperskiego lub zadania inwestycyjnego",
  "Ulica lokalizacji przedsięwzięcia deweloperskiego lub zadania inwestycyjnego",
  "Nr nieruchomości lokalizacji przedsięwzięcia deweloperskiego lub zadania inwestycyjnego",
  "Kod pocztowy lokalizacji przedsięwzięcia deweloperskiego lub zadania inwestycyjnego",
  "Rodzaj nieruchomości: lokal mieszkalny, dom jednorodzinny",
  "Nr lokalu lub domu jednorodzinnego nadany przez dewelopera",
  "Cena m 2 powierzchni użytkowej lokalu mieszkalnego / domu jednorodzinnego [zł]",
  "Data od której cena obowiązuje cena m 2 powierzchni użytkowej lokalu mieszkalnego / domu jednorodzinnego",
  "Cena lokalu mieszkalnego lub domu jednorodzinnego będących przedmiotem umowy stanowiąca iloczyn ceny m2 oraz powierzchni [zł]",
  "Data od której cena obowiązuje cena lokalu mieszkalnego lub domu jednorodzinnego będących przedmiotem umowy stanowiąca iloczyn ceny m2 oraz powierzchni",
  "Cena lokalu mieszkalnego lub domu jednorodzinnego uwzględniająca cenę lokalu stanowiącą iloczyn powierzchni oraz metrażu i innych składowych ceny, o których mowa w art. 19a ust. 1 pkt 1), 2) lub 3) [zł]",
  "Data od której obowiązuje cena lokalu mieszkalnego lub domu jednorodzinnego uwzględniająca cenę lokalu stanowiącą iloczyn powierzchni oraz metrażu i innych składowych ceny, o których mowa w art. 19a ust. 1 pkt 1), 2) lub 3)",
  "Rodzaj części nieruchomości będących przedmiotem umowy",
  "Oznaczenie części nieruchomości nadane przez dewelopera",
  "Cena części nieruchomości, będących przedmiotem umowy [zł]",
  "Data od której obowiązuje cena części nieruchomości, będących przedmiotem umowy",
  "Rodzaj pomieszczeń przynależnych, o których mowa w art. 2 ust. 4 ustawy z dnia 24 czerwca 1994 r. o własności lokali",
  "Oznaczenie pomieszczeń przynależnych, o których mowa w art. 2 ust. 4 ustawy z dnia 24 czerwca 1994 r. o własności lokali",
  "Wyszczególnienie cen pomieszczeń przynależnych, o których mowa w art. 2 ust. 4 ustawy z dnia 24 czerwca 1994 r. o własności lokali [zł]",
  "Data od której obowiązuje cena wyszczególnionych pomieszczeń przynależnych, o których mowa w art. 2 ust. 4 ustawy z dnia 24 czerwca 1994 r. o własności lokali",
  "Wyszczególnienie praw niezbędnych do korzystania z lokalu mieszkalnego lub domu jednorodzinnego",
  "Wartość praw niezbędnych do korzystania z lokalu mieszkalnego lub domu jednorodzinnego [zł]",
  "Data od której obowiązuje cena wartości praw niezbędnych do korzystania z lokalu mieszkalnego lub domu jednorodzinnego",
  "Wyszczególnienie rodzajów innych świadczeń pieniężnych, które nabywca zobowiązany jest spełnić na rzecz dewelopera w wykonaniu umowy przenoszącej własność",
  "Wartość innych świadczeń pieniężnych, które nabywca zobowiązany jest spełnić na rzecz dewelopera w wykonaniu umowy przenoszącej własność [zł]",
  "Data od której obowiązuje cena wartości innych świadczeń pieniężnych, które nabywca zobowiązany jest spełnić na rzecz dewelopera w wykonaniu umowy przenoszącej własność",
  "Adres strony internetowej, pod którym dostępny jest prospekt informacyjny",
];

function csvEscape(value) {
  const text = String(value ?? "x");
  return `"${text.replaceAll('"', '""')}"`;
}

function csvLine(values) {
  return values.map(csvEscape).join(";");
}

function getWarsawDate(value = new Date()) {
  const parts = new Intl.DateTimeFormat("en-CA", {
    timeZone: "Europe/Warsaw",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).formatToParts(value);

  const values = Object.fromEntries(
    parts
      .filter((part) => part.type !== "literal")
      .map((part) => [part.type, part.value])
  );

  return `${values.year}-${values.month}-${values.day}`;
}

function isValidIsoDate(value) {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(String(value ?? ""))) {
    return false;
  }

  const date = new Date(`${value}T12:00:00Z`);

  return (
    !Number.isNaN(date.getTime()) &&
    date.toISOString().slice(0, 10) === value
  );
}

function dateTime(value, fallback = REPORTING_START) {
  const date = String(value || fallback).slice(0, 10);
  return `${date} 00:00`;
}

function taskFor(unitId) {
  return taskOneUnits.has(unitId) ? 1 : 2;
}

function prospectusFor(unitId) {
  return taskFor(unitId) === 1
    ? "https://novaduo.pl/prospekt-novaduo-zadanie-1-do-publikacji.pdf"
    : "https://novaduo.pl/prospekt-novaduo-zadanie-2-do-publikacji.pdf";
}

function pricePerSquareMeter(totalPrice, usableArea) {
  const price = Number(totalPrice);
  const area = Number(usableArea);

  if (!Number.isFinite(price) || !Number.isFinite(area) || area <= 0) {
    throw new Error("Nieprawidłowa cena albo powierzchnia użytkowa.");
  }

  return (price / area).toFixed(2);
}

function buildSnapshots(history, reportDate) {
  const snapshots = Object.fromEntries(
    displayOrder.map((unitId) => [
      unitId,
      {
        totalPrice: INITIAL_PRICES[unitId],
        validFrom: REPORTING_START,
      },
    ])
  );

  for (const entry of history) {
    const unitId = String(entry.unit_id ?? "");

    if (!snapshots[unitId]) {
      continue;
    }

    const newPrice = Number(entry.new_total_price);

    if (!Number.isFinite(newPrice) || newPrice <= 0) {
      continue;
    }

    const oldPrice =
      entry.old_total_price === null
        ? null
        : Number(entry.old_total_price);

    if (
      oldPrice !== null &&
      Number.isFinite(oldPrice) &&
      oldPrice === newPrice
    ) {
      continue;
    }

    const changedAt = new Date(entry.changed_at);

    if (Number.isNaN(changedAt.getTime())) {
      continue;
    }

    const changeDate = getWarsawDate(changedAt);

    if (
      changeDate < REPORTING_START ||
      changeDate > reportDate
    ) {
      continue;
    }

    snapshots[unitId] = {
      totalPrice: newPrice,
      validFrom: changeDate,
    };
  }

  return snapshots;
}

function buildRow(unit, snapshot) {
  const basePrice = Number(snapshot.totalPrice);
  const validFrom = dateTime(snapshot.validFrom);
  const totalWithRoads = basePrice + ROAD_TOTAL_PRICE;

  return [
    "JPJ Concept Sp. z o.o.",
    "spółka z ograniczoną odpowiedzialnością",
    "0001156346",
    "x",
    "1182300374",
    "540927078",
    "+48 600 397 399",
    "kontakt@jpjconcept.pl",
    "x",
    "https://novaduo.pl/",
    "Mazowieckie",
    "warszawski zachodni",
    "Ożarów Mazowiecki",
    "Pogroszew",
    "Nowowiejska",
    "58A",
    "x",
    "05-850",
    "Mazowieckie",
    "warszawski zachodni",
    "Ożarów Mazowiecki",
    "Pogroszew",
    "Nowowiejska",
    "58A",
    "x",
    "05-850",
    "x",
    "Telefon: +48 600 397 399; e-mail: kontakt@jpjconcept.pl; agent nieruchomości: Anna Bieńka, +48 886 200 190; e-mail biura sprzedaży: info@bienka-nieruchomosci.pl",
    "Mazowieckie",
    "warszawski zachodni",
    "Ożarów Mazowiecki",
    "Pogroszew",
    "Nowowiejska",
    "58",
    "05-850",
    "lokal mieszkalny",
    unit.id,
    pricePerSquareMeter(basePrice, unit.usable_area),
    validFrom,
    basePrice.toFixed(2),
    validFrom,
    totalWithRoads.toFixed(2),
    validFrom,
    "x",
    "x",
    "x",
    "x",
    "x",
    "x",
    "x",
    "x",
    "Udział we współwłasności działki ewid. 24/10 – droga wewnętrzna: 1,00 zł; udział we współwłasności działki ewid. 24/3 – droga dojazdowa do drogi publicznej: 1,00 zł",
    ROAD_TOTAL_PRICE.toFixed(2),
    dateTime(ROAD_VALID_FROM),
    "x",
    "x",
    "x",
    prospectusFor(unit.id),
  ];
}

export async function GET(request) {
  try {
    const today = getWarsawDate();
    const requestUrl = new URL(request.url);

    const reportDate =
      requestUrl.searchParams.get("date") || today;

    if (!isValidIsoDate(reportDate)) {
      return new Response(
        "Nieprawidłowy format daty. Użyj formatu RRRR-MM-DD.",
        {
          status: 400,
          headers: {
            "Content-Type": "text/plain; charset=utf-8",
            "Cache-Control": "no-store",
          },
        }
      );
    }

    if (reportDate < REPORTING_START) {
      return new Response(
        `Historia raportów rozpoczyna się ${REPORTING_START}.`,
        {
          status: 400,
          headers: {
            "Content-Type": "text/plain; charset=utf-8",
            "Cache-Control": "no-store",
          },
        }
      );
    }

    if (reportDate > today) {
      return new Response(
        "Nie można wygenerować raportu dla przyszłej daty.",
        {
          status: 400,
          headers: {
            "Content-Type": "text/plain; charset=utf-8",
            "Cache-Control": "no-store",
          },
        }
      );
    }

    const [unitsResult, historyResult] = await Promise.all([
      supabase
        .from("units")
        .select("id, usable_area"),

      supabase
        .from("unit_price_history")
        .select(
          "id, unit_id, old_total_price, new_total_price, changed_at"
        )
        .order("changed_at", { ascending: true }),
    ]);

    if (unitsResult.error) {
      throw new Error(unitsResult.error.message);
    }

    if (historyResult.error) {
      throw new Error(historyResult.error.message);
    }

    const units = [...(unitsResult.data ?? [])].sort(
      (first, second) =>
        displayOrder.indexOf(first.id) -
        displayOrder.indexOf(second.id)
    );

    if (units.length !== displayOrder.length) {
      throw new Error(
        `Oczekiwano ${displayOrder.length} lokali, pobrano ${units.length}.`
      );
    }

    const snapshots = buildSnapshots(
      historyResult.data ?? [],
      reportDate
    );

    const rows = units.map((unit) => {
      const snapshot = snapshots[unit.id];

      if (!snapshot) {
        throw new Error(
          `Nie udało się odtworzyć ceny lokalu ${unit.id}.`
        );
      }

      return buildRow(unit, snapshot);
    });

    if (rows.some((row) => row.length !== HEADERS.length)) {
      throw new Error("Nieprawidłowa liczba kolumn raportu.");
    }

    const csv =
      "\ufeff" +
      [csvLine(HEADERS), ...rows.map(csvLine)].join("\r\n");

    return new Response(csv, {
      status: 200,
      headers: {
        "Content-Type": "text/csv; charset=utf-8",
        "Content-Disposition": `inline; filename="novaduo-ceny-${reportDate}.csv"`,
        "Cache-Control":
          "no-store, no-cache, must-revalidate, max-age=0",
        Pragma: "no-cache",
        Expires: "0",
        "Access-Control-Allow-Origin": "*",
        "X-NovaDuo-Data-Date": reportDate,
      },
    });
  } catch (error) {
    console.error("Błąd generowania CSV NovaDuo:", error);

    return new Response(
      `Nie udało się wygenerować pliku CSV: ${error.message}`,
      {
        status: 500,
        headers: {
          "Content-Type": "text/plain; charset=utf-8",
          "Cache-Control": "no-store",
        },
      }
    );
  }
}
