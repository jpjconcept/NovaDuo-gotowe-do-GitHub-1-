import { createHash } from "node:crypto";
import { GET as getXml } from "../otwarte-dane.xml/route";

export const dynamic = "force-dynamic";
export const revalidate = 0;
export const runtime = "nodejs";

export async function GET() {
  try {
    const xmlResponse = await getXml();

    if (!xmlResponse.ok) {
      throw new Error(
        `Generator XML zwrócił status ${xmlResponse.status}.`
      );
    }

    const xmlBuffer = Buffer.from(await xmlResponse.arrayBuffer());

    const hash = createHash("md5")
      .update(xmlBuffer)
      .digest("hex");

    const md5Content = `${hash}  otwarte-dane.xml\n`;

    return new Response(md5Content, {
      status: 200,
      headers: {
        "Content-Type": "text/plain; charset=utf-8",
        "Content-Disposition": 'inline; filename="otwarte-dane.md5"',
        "Cache-Control": "no-store, no-cache, must-revalidate, max-age=0",
        Pragma: "no-cache",
        Expires: "0",
        "Access-Control-Allow-Origin": "*",
      },
    });
  } catch (error) {
    console.error("Błąd generowania MD5:", error);

    return new Response(
      `Nie udało się wygenerować pliku MD5: ${error.message}`,
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
