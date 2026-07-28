export const dynamic = "force-dynamic";
export const revalidate = 0;

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

  return {
    iso: `${values.year}-${values.month}-${values.day}`,
    display: `${values.day}.${values.month}.${values.year}`,
  };
}

export async function GET() {
  const today = getWarsawDate();

  // Stała wartość przez cały dzień.
  // Dzięki temu XML i jego suma MD5 zawsze będą identyczne.
  const now = `${today.iso}T00:00:00Z`;

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<p:datasets
  xmlns:p="urn:otwarte-dane:harvester:1.13"
  xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
  xsi:schemaLocation="urn:otwarte-dane:harvester:1.13 https://dane.gov.pl/static/xml/otwarte_dane_latest.xsd">

  <dataset status="published">
    <extIdent>novaduo-ceny</extIdent>
    <intIdent>37001</intIdent>

    <title>
      <polish>Ceny ofertowe lokali mieszkalnych – NovaDuo w Pogroszewie</polish>
    </title>

    <description>
      <polish>Zbiór zawiera informacje o aktualnych cenach ofertowych lokali mieszkalnych w inwestycji NovaDuo realizowanej przez JPJ Concept Sp. z o.o. przy ul. Nowowiejskiej 58 w Pogroszewie, gmina Ożarów Mazowiecki. Dane obejmują numery lokali, powierzchnie użytkowe, ceny za m², ceny lokali, ceny łączne wraz z prawami niezbędnymi do korzystania z lokali oraz daty obowiązywania cen.</polish>
    </description>

    <url>https://novaduo.pl/</url>
    <updateFrequency>daily</updateFrequency>

    <categories>
      <category>ECON</category>
    </categories>

    <conditions>
      <dbOrCopyrightedLicenseChosen>CC BY 4.0</dbOrCopyrightedLicenseChosen>
    </conditions>

    <resources>
      <resource status="published">
        <extIdent>novaduo-ceny-${today.iso}</extIdent>

        <url>https://novaduo.pl/dane/novaduo-ceny.csv</url>

        <title>
          <polish>Ceny ofertowe lokali mieszkalnych – NovaDuo – ${today.display}</polish>
        </title>

        <description>
          <polish>Dane dotyczące cen ofertowych lokali mieszkalnych w inwestycji NovaDuo, aktualne na dzień ${today.display}. Plik CSV jest generowany automatycznie i udostępniany zgodnie z art. 19b ust. 1 ustawy o ochronie praw nabywcy lokalu mieszkalnego lub domu jednorodzinnego oraz Deweloperskim Funduszu Gwarancyjnym.</polish>
        </description>

        <availability>remote</availability>
        <dataDate>${today.iso}</dataDate>
        <lastUpdateDate>${now}</lastUpdateDate>

        <hasDynamicData>false</hasDynamicData>
        <hasHighValueData>true</hasHighValueData>
        <hasHighValueDataFromEuropeanCommissionList>false</hasHighValueDataFromEuropeanCommissionList>
        <hasResearchData>false</hasResearchData>
        <containsProtectedData>false</containsProtectedData>
      </resource>
    </resources>

    <tags>
      <tag lang="pl">ceny mieszkań</tag>
      <tag lang="pl">nieruchomości</tag>
      <tag lang="pl">lokale mieszkalne</tag>
      <tag lang="pl">deweloper</tag>
      <tag lang="pl">NovaDuo</tag>
      <tag lang="pl">Pogroszew</tag>

      <tag lang="en">housing prices</tag>
      <tag lang="en">real estate</tag>
      <tag lang="en">residential units</tag>
      <tag lang="en">developer</tag>
      <tag lang="en">NovaDuo</tag>
      <tag lang="en">Pogroszew</tag>
    </tags>

    <lastUpdateDate>${now}</lastUpdateDate>
    <hasDynamicData>false</hasDynamicData>
    <hasHighValueData>true</hasHighValueData>
    <hasHighValueDataFromEuropeanCommissionList>false</hasHighValueDataFromEuropeanCommissionList>
    <hasResearchData>false</hasResearchData>
  </dataset>
</p:datasets>`;

  return new Response(xml, {
    status: 200,
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Content-Disposition": 'inline; filename="otwarte-dane.xml"',
      "Cache-Control": "no-store, no-cache, must-revalidate, max-age=0",
      Pragma: "no-cache",
      Expires: "0",
      "Access-Control-Allow-Origin": "*",
    },
  });
}
