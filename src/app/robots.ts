export const runtime = "edge"; // Optional for better performance

export async function GET() {
  const content = `User-agent: *
Disallow: /admin
Allow: /

Sitemap: https://yourwebsite.com/sitemap.xml`;

  return new Response(content, {
    headers: {
      "Content-Type": "text/plain",
    },
  });
}
