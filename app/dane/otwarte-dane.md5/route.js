import { createHash } from "node:crypto";
import { GET as getXml } from "../otwarte-dane.xml/route";

export const dynamic = "force-dynamic";
export const revalidate = 0;
export const runtime = "nodejs";

export async function GET() {
  try {
    const xmlResponse = await getXml();
    const xml = await xmlResponse.text();

    const hash = createHash("md5")
      .update(xml, "utf8")
      .digest("hex");

    const md5Content = `${hash}  otwarte-dane.xml\n`;

    return new Response(md5Content, {
      status: 200,
      headers: {
        "Content-Type": "text/plain; charset=utf-8",
        "Content-Disposition": 'inline; filename="otwarte-dane.md5"',
        "Cache-Control": "no-store, no-cache, must-revalidate",
        "Access-Control-Allow-Origin": "*",
      },
    });
  } catch (error) {
    console.error("Błąd generowania MD5:", error);

    return new Response("Nie udało się wygenerować pliku MD5.", {
      status: 500,
      headers: {
        "Content-Type": "text/plain; charset=utf-8",
      },
    });
  }
}