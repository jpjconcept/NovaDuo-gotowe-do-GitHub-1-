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

  return (price / area).toFixed(6);
}

function buildRow(unit) {
  const basePrice = Number(unit.total_price);
  const validFrom = dateTime(unit.price_valid_from);
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

export async function GET() {
  try {
    const { data, error } = await supabase
      .from("units")
      .select("id, usable_area, total_price, price_valid_from");

    if (error) {
      throw new Error(error.message);
    }

    const units = [...(data ?? [])].sort(
      (first, second) =>
        displayOrder.indexOf(first.id) - displayOrder.indexOf(second.id)
    );

    if (units.length !== displayOrder.length) {
      throw new Error(
        `Oczekiwano ${displayOrder.length} lokali, pobrano ${units.length}.`
      );
    }

    const rows = units.map(buildRow);

    if (rows.some((row) => row.length !== HEADERS.length)) {
      throw new Error("Nieprawidłowa liczba kolumn raportu.");
    }

    const csv =
      "\ufeff" + [csvLine(HEADERS), ...rows.map(csvLine)].join("\r\n");

    return new Response(csv, {
      status: 200,
      headers: {
        "Content-Type": "text/csv; charset=utf-8",
        "Content-Disposition": 'inline; filename="novaduo-ceny.csv"',
        "Cache-Control": "no-store, no-cache, must-revalidate, max-age=0",
        Pragma: "no-cache",
        Expires: "0",
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
