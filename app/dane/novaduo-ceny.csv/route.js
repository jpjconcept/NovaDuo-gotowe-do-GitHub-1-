import { supabase } from "@/lib/supabase";

export const dynamic = "force-dynamic";

const taskOneUnits = new Set(["58/1", "58/3", "58/5", "58/7"]);

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

function csvValue(value) {
  const text = value === null || value === undefined ? "" : String(value);
  return `"${text.replaceAll('"', '""')}"`;
}

function formatNumber(value) {
  if (value === null || value === undefined || value === "") return "";
  return String(Number(value)).replace(".", ",");
}

function getPolishDate() {
  const parts = new Intl.DateTimeFormat("pl-PL", {
    timeZone: "Europe/Warsaw",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).formatToParts(new Date());

  const year = parts.find((part) => part.type === "year").value;
  const month = parts.find((part) => part.type === "month").value;
  const day = parts.find((part) => part.type === "day").value;

  return `${year}-${month}-${day}`;
}

export async function GET() {
  const { data, error } = await supabase
    .from("units")
    .select(
      "id, usable_area, net_area, garden_area, plot_no, total_price, status"
    );

  if (error) {
    return Response.json(
      { error: "Nie udało się pobrać danych lokali." },
      { status: 500 }
    );
  }

  const units = [...(data ?? [])].sort(
    (first, second) =>
      displayOrder.indexOf(first.id) - displayOrder.indexOf(second.id)
  );

  const headers = [
    "nazwa_dewelopera",
    "adres_siedziby",
    "adres_biura_sprzedazy",
    "kontakt_z_deweloperem",
    "lokalizacja_inwestycji",
    "rodzaj_nieruchomosci",
    "zadanie_inwestycyjne",
    "numer_lokalu",
    "powierzchnia_uzytkowa_m2",
    "powierzchnia_netto_m2",
    "powierzchnia_ogrodu_m2",
    "numer_dzialki",
    "cena_m2_brutto_pln",
    "cena_calkowita_brutto_pln",
    "pomieszczenia_przynalezne_lub_prawa",
    "cena_pomieszczen_lub_praw_brutto_pln",
    "inne_swiadczenia_pieniezne",
    "data_obowiazywania_ceny",
    "status_oferty",
    "prospekt_url",
    "strona_oferty_url",
    "waluta",
    "data_wygenerowania",
  ];

  const today = getPolishDate();
  const generatedAt = new Date().toISOString();

  const rows = units.map((unit) => {
    const taskOne = taskOneUnits.has(unit.id);
    const usableArea = Number(unit.usable_area);
    const totalPrice = Number(unit.total_price);
    const pricePerSquareMeter =
      usableArea > 0 ? (totalPrice / usableArea).toFixed(2) : "";

    return [
      "JPJ Concept Sp. z o.o.",
      "ul. Nowowiejska 58A, Pogroszew, 05-850 Ożarów Mazowiecki",
      "ul. Nowowiejska 58A, Pogroszew, 05-850 Ożarów Mazowiecki",
      "tel. 600 397 399, e-mail: kontakt@jpjconcept.pl",
      "ul. Nowowiejska 58, Pogroszew, 05-850 Ożarów Mazowiecki",
      "lokal mieszkalny",
      taskOne ? "Zadanie inwestycyjne 1" : "Zadanie inwestycyjne 2",
      unit.id,
      formatNumber(unit.usable_area),
      formatNumber(unit.net_area),
      formatNumber(unit.garden_area),
      unit.plot_no,
      formatNumber(pricePerSquareMeter),
      formatNumber(unit.total_price),
      "garaż w cenie lokalu",
      "0",
      "brak",
      today,
      unit.status,
      taskOne
        ? "https://novaduo.pl/prospekt-novaduo-zadanie-1-do-publikacji.pdf"
        : "https://novaduo.pl/prospekt-novaduo-zadanie-2-do-publikacji.pdf",
      "https://novaduo.pl/",
      "PLN",
      generatedAt,
    ]
      .map(csvValue)
      .join(";");
  });

  const csv = `\uFEFF${[
    headers.map(csvValue).join(";"),
    ...rows,
  ].join("\r\n")}`;

  return new Response(csv, {
    status: 200,
    headers: {
      "Content-Type": "text/csv; charset=utf-8",
      "Content-Disposition": 'inline; filename="novaduo-ceny.csv"',
      "Cache-Control": "no-store",
      "Access-Control-Allow-Origin": "*",
    },
  });
}