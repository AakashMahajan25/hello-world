export const runtime = "edge"; // Optional for better performance

export async function GET() {
  const baseUrl = "https://yourwebsite.com";

  const staticPages = [
    "",
    "/products",
    "/about",
    "/gallery",
    "/contact",
    "/warranty/register",
    "/warranty/status",
  ];

  const urls = staticPages
    .map((page) => `<url><loc>${baseUrl}${page}</loc></url>`)
    .join("");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${urls}
</urlset>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml",
    },
  });
}
