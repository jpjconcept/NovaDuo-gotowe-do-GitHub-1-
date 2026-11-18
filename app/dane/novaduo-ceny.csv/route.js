
import { supabase } from "@/lib/supabase";

export const dynamic = "force-dynamic";
export const revalidate = 0;

const START = "2026-07-23";
const NEW_FORMAT = "2026-11-11";
const INITIAL_TIME = `${START} 00:00:00`;

const IDS = [
  "58/1", "58/3", "58/5", "58/7",
  "58/2", "58/4", "58/6", "58/8",
];

const INITIAL = {
  "58/1": 1279000,
  "58/3": 1090000,
  "58/5": 1179000,
  "58/7": 1279000,
  "58/2": 1279000,
  "58/4": 1179000,
  "58/6": 1179000,
  "58/8": 1279000,
};

const AREAS = Object.fromEntries(
  IDS.map(id => [
    id,
    id === "58/7" ? 123.62 : 118.48,
  ])
);

const TASK_ONE = new Set([
  "58/1", "58/3", "58/5", "58/7",
]);

const RIGHT_1 =
  "Udział we współwłasności działki ewid. 24/10 – droga wewnętrzna";

const RIGHT_2 =
  "Udział we współwłasności działki ewid. 24/3 – droga dojazdowa do drogi publicznej";

const CONTACT =
  "Telefon: +48 600 397 399; e-mail: kontakt@jpjconcept.pl";

const OLD_HEADERS = [
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

const NEW_HEADERS = [
  "Firma",
  "Numer identyfikacji podatkowej (NIP)",
  "Województwo adresu siedziby albo głównego miejsca wykonywania działalności gospodarczej",
  "Powiat adresu siedziby albo głównego miejsca wykonywania działalności gospodarczej",
  "Gmina adresu siedziby albo głównego miejsca wykonywania działalności gospodarczej",
  "Miejscowość adresu siedziby albo głównego miejsca wykonywania działalności gospodarczej",
  "Ulica adresu siedziby albo głównego miejsca wykonywania działalności gospodarczej",
  "Numer nieruchomości adresu siedziby albo głównego miejsca wykonywania działalności gospodarczej",
  "Numer lokalu adresu siedziby albo głównego miejsca wykonywania działalności gospodarczej",
  "Kod pocztowy adresu siedziby albo głównego miejsca wykonywania działalności gospodarczej",
  "Województwo adresu lokalu, w którym jest prowadzona sprzedaż",
  "Powiat adresu lokalu, w którym jest prowadzona sprzedaż",
  "Gmina adresu lokalu, w którym jest prowadzona sprzedaż",
  "Miejscowość adresu lokalu, w którym jest prowadzona sprzedaż",
  "Ulica adresu lokalu, w którym jest prowadzona sprzedaż",
  "Numer nieruchomości adresu lokalu, w którym jest prowadzona sprzedaż",
  "Numer lokalu adresu lokalu, w którym jest prowadzona sprzedaż",
  "Kod pocztowy adresu lokalu, w którym jest prowadzona sprzedaż",
  "Dodatkowe lokalizacje, w których jest prowadzona sprzedaż",
  "Sposób kontaktu nabywcy z podmiotem obowiązanym",
  "Województwo lokalizacji przedsięwzięcia deweloperskiego lub zadania inwestycyjnego",
  "Powiat lokalizacji przedsięwzięcia deweloperskiego lub zadania inwestycyjnego",
  "Gmina lokalizacji przedsięwzięcia deweloperskiego lub zadania inwestycyjnego",
  "Miejscowość lokalizacji przedsięwzięcia deweloperskiego lub zadania inwestycyjnego",
  "Ulica lokalizacji przedsięwzięcia deweloperskiego lub zadania inwestycyjnego",
  "Numer nieruchomości lokalizacji przedsięwzięcia deweloperskiego lub zadania inwestycyjnego",
  "Kod pocztowy lokalizacji przedsięwzięcia deweloperskiego lub zadania inwestycyjnego",
  "Długość geograficzna punktu określającego lokalizację przestrzenną przedsięwzięcia deweloperskiego lub zadania inwestycyjnego",
  "Szerokość geograficzna punktu określającego lokalizację przestrzenną przedsięwzięcia deweloperskiego lub zadania inwestycyjnego",
  "Rodzaj nieruchomości",
  "Identyfikator lokalu mieszkalnego albo domu jednorodzinnego",
  "Cena 1 m2 powierzchni użytkowej lokalu mieszkalnego albo domu jednorodzinnego",
  "Data i czas, od których obowiązuje cena 1 m2 powierzchni użytkowej lokalu mieszkalnego albo domu jednorodzinnego",
  "Cena lokalu mieszkalnego albo domu jednorodzinnego lub ich części będących przedmiotem umowy",
  "Data i czas, od których obowiązuje cena lokalu mieszkalnego albo domu jednorodzinnego lub ich części",
  "Rodzaj pomieszczenia przynależnego, o którym mowa w art. 2 ust. 4 ustawy z dnia 24 czerwca 1994 r. o własności lokali",
  "Identyfikator pomieszczenia przynależnego, o którym mowa w art. 2 ust. 4 ustawy z dnia 24 czerwca 1994 r. o własności lokali",
  "Cena pomieszczenia przynależnego, o którym mowa w art. 2 ust. 4 ustawy z dnia 24 czerwca 1994 r. o własności lokali",
  "Data i czas, od których obowiązuje cena pomieszczenia przynależnego, o którym mowa w art. 2 ust. 4 ustawy z dnia 24 czerwca 1994 r. o własności lokali",
  "Identyfikator lokalu mieszkalnego albo domu jednorodzinnego dla pomieszczenia przynależnego",
  "Wyszczególnienie praw niezbędnych do korzystania z lokalu mieszkalnego albo domu jednorodzinnego",
  "Wartość praw niezbędnych do korzystania z lokalu mieszkalnego albo domu jednorodzinnego",
  "Data i czas, od których obowiązuje wartość praw niezbędnych do korzystania z lokalu mieszkalnego albo domu jednorodzinnego",
  "Identyfikator lokalu mieszkalnego albo domu jednorodzinnego dla prawa niezbędnego",
  "Wyszczególnienie rodzaju innego świadczenia pieniężnego, które nabywca jest zobowiązany spełnić na rzecz podmiotu obowiązanego w wykonaniu umowy przenoszącej własność",
  "Wartość innego świadczenia pieniężnego, które nabywca jest zobowiązany spełnić na rzecz podmiotu obowiązanego w wykonaniu umowy przenoszącej własność",
  "Data i czas, od których obowiązuje wartość innego świadczenia pieniężnego, które nabywca jest zobowiązany spełnić na rzecz podmiotu obowiązanego w wykonaniu umowy przenoszącej własność",
  "Identyfikator lokalu mieszkalnego albo domu jednorodzinnego dla innego świadczenia",
];

// Czas polski
const formatter = new Intl.DateTimeFormat("en-GB", {
  timeZone: "Europe/Warsaw",
  year: "numeric",
  month: "2-digit",
  day: "2-digit",
  hour: "2-digit",
  minute: "2-digit",
  second: "2-digit",
  hourCycle: "h23",
});

function warsawTime(value) {
  const p = Object.fromEntries(
    formatter
      .formatToParts(new Date(value))
      .map(x => [x.type, x.value])
  );

  return `${p.year}-${p.month}-${p.day} ${p.hour}:${p.minute}:${p.second}`;
}

function historyTime(value) {
  const text = String(value ?? "").trim();

  if (
    !/^\d{4}-\d{2}-\d{2}[T ]\d{2}:\d{2}:\d{2}/.test(text)
  ) {
    throw new Error(
      "Brak pełnego czasu zmiany ceny w historii."
    );
  }

  if (/(Z|[+-]\d{2}(?::?\d{2})?)$/i.test(text)) {
    return warsawTime(
      text
        .replace(" ", "T")
        .replace(/([+-]\d{2})$/, "$1:00")
    );
  }

  // Znacznik bez strefy czasowej traktujemy
  // jako lokalny czas zapisany w bazie.
  return text.replace("T", " ").slice(0, 19);
}

function validDate(date) {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(date)) {
    return false;
  }

  const t = new Date(`${date}T12:00:00Z`);

  return (
    Number.isFinite(t.getTime()) &&
    t.toISOString().slice(0, 10) === date
  );
}

function money(n, places = 2, polish = true) {
  const s = Number(n).toFixed(places);

  return polish ? s.replace(".", ",") : s;
}

function csvLine(values) {
  return values
    .map(v => `"${String(v).replaceAll('"', '""')}"`)
    .join(";");
}

function address(
  number,
  legacy = false,
  includeUnit = true
) {
  const a = [
    legacy ? "Mazowieckie" : "mazowieckie",
    "warszawski zachodni",
    "Ożarów Mazowiecki",
    "Pogroszew",
    legacy ? "Nowowiejska" : "ul. Nowowiejska",
    number,
  ];

  if (includeUnit) {
    a.push(legacy ? "x" : "X");
  }

  return [...a, "05-850"];
}

// STARY FORMAT – DO 10.11.2026
function legacyRow(unit) {
  const p = unit.price;
  const date = unit.time.slice(0, 10) + " 00:00";

  const task = TASK_ONE.has(unit.id) ? 1 : 2;

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

    ...address("58A", true),
    ...address("58A", true),

    "x",
    CONTACT,

    ...address("58", true, false),

    "lokal mieszkalny",
    unit.id,

    money(p / unit.area, 6, false),
    date,

    money(p, 2, false),
    date,

    money(p + 2, 2, false),
    date,

    ...Array(8).fill("x"),

    `${RIGHT_1}: 1,00 zł; ${RIGHT_2}: 1,00 zł`,

    "2.00",
    `${START} 00:00`,

    ...Array(3).fill("x"),

    `https://novaduo.pl/prospekt-novaduo-zadanie-${task}-do-publikacji.pdf`,
  ];
}

// NOWY FORMAT – OD 11.11.2026
function newRows(unit) {
  const common = [
    "JPJ Concept Sp. z o.o.",
    "1182300374",

    ...address("58A"),
    ...address("58A"),

    "X",
    CONTACT,

    ...address("58", false, false),

    // Współrzędne geograficzne NovaDuo
    "20,742219",
    "52,231223",

    "lokal mieszkalny",
    unit.id,

    money(unit.price / unit.area),
    unit.time,

    money(unit.price),
    unit.time,

    // Pomieszczenia przynależne
    ...Array(5).fill("X"),
  ];

  // Każde prawo drogowe otrzymuje osobny
  // wiersz i identyfikator właściwego lokalu.
  return [RIGHT_1, RIGHT_2].map(right => [
    ...common,

    right,
    "1,00",
    INITIAL_TIME,
    unit.id,

    // Inne świadczenia pieniężne
    ...Array(4).fill("X"),
  ]);
}

// POBIERANIE HISTORII CEN Z SUPABASE
async function getHistory() {
  const all = [];

  for (let offset = 0; ; offset += 500) {
    const { data, error } = await supabase
      .from("unit_price_history")
      .select(
        "id, unit_id, old_total_price, new_total_price, changed_at"
      )
      .in("unit_id", IDS)
      .order("changed_at", { ascending: true })
      .order("id", { ascending: true })
      .range(offset, offset + 499);

    if (error) {
      throw new Error(error.message);
    }

    all.push(...(data ?? []));

    if (!data || data.length < 500) {
      return all;
    }
  }
}

// GENEROWANIE RAPORTU CSV
export async function GET(request) {
  try {
    const now = warsawTime(new Date());
    const today = now.slice(0, 10);

    const date =
      new URL(request.url).searchParams.get("date") ??
      today;

    if (
      !validDate(date) ||
      date < START ||
      date > today
    ) {
      return new Response(
        "Nieprawidłowa data raportu.",
        { status: 400 }
      );
    }

    const cutoff =
      date === today
        ? now
        : `${date} 23:59:59`;

    const { data, error } = await supabase
      .from("units")
      .select(
        "id, usable_area, total_price, price_valid_from"
      );

    if (error) {
      throw new Error(error.message);
    }

    const units = new Map(
      (data ?? []).map(u => [u.id, u])
    );

    if (
      units.size !== IDS.length ||
      IDS.some(id => !units.has(id))
    ) {
      throw new Error(
        "Nieprawidłowa lista lokali w bazie."
      );
    }

    const history = await getHistory();

    const latest = new Map(
      IDS.map(id => [
        id,
        {
          price: INITIAL[id],
          time: INITIAL_TIME,
        },
      ])
    );

    const snapshot = new Map(latest);

    for (const event of history) {
      if (
        event.old_total_price == null ||
        Number(event.old_total_price) ===
          Number(event.new_total_price)
      ) {
        continue;
      }

      const time = historyTime(event.changed_at);

      if (time < INITIAL_TIME) {
        continue;
      }

      const state = latest.get(event.unit_id);

      if (
        !state ||
        event.new_total_price == null ||
        !Number.isFinite(
          Number(event.new_total_price)
        ) ||
        Number(event.new_total_price) <= 0 ||
        state.price !== Number(event.old_total_price)
      ) {
        throw new Error(
          `Niespójna historia cen: ${event.unit_id}.`
        );
      }

      const value = {
        price: Number(event.new_total_price),
        time,
      };

      latest.set(event.unit_id, value);

      if (time <= cutoff) {
        snapshot.set(event.unit_id, value);
      }
    }

    const report = IDS.map(id => {
      const unit = units.get(id);
      const current = latest.get(id);

      if (
        Number(unit.total_price) !== current.price ||
        Number(unit.usable_area) !== AREAS[id]
      ) {
        throw new Error(
          `Rozbieżność ceny lub powierzchni lokalu ${id}.`
        );
      }

      if (
        String(unit.price_valid_from ?? "").slice(0, 10) !==
        current.time.slice(0, 10)
      ) {
        throw new Error(
          `Sprawdź datę obowiązywania ceny lokalu ${id}.`
        );
      }

      return {
        id,
        area: AREAS[id],
        ...snapshot.get(id),
      };
    });

    // Automatyczny wybór formatu
    // na podstawie daty raportu.
    const legacy = date < NEW_FORMAT;

    const headers =
      legacy ? OLD_HEADERS : NEW_HEADERS;

    const rows =
      legacy
        ? report.map(legacyRow)
        : report.flatMap(newRows);

    if (
      rows.some(
        row => row.length !== headers.length
      )
    ) {
      throw new Error(
        "Nieprawidłowa liczba kolumn raportu."
      );
    }

    const csv =
      "\ufeff" +
      [
        csvLine(headers),
        ...rows.map(csvLine),
      ].join("\r\n");

    return new Response(csv, {
      status: 200,
      headers: {
        "Content-Type": "text/csv; charset=utf-8",

        "Content-Disposition":
          'inline; filename="novaduo-ceny.csv"',

        "Cache-Control":
          "no-store, no-cache, must-revalidate, max-age=0",

        Pragma: "no-cache",
        Expires: "0",
      },
    });

  } catch (error) {
    console.error(
      "Błąd generowania CSV NovaDuo:",
      error
    );

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
