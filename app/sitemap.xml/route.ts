import { properties } from '@/data/properties';

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || 'https://expertinvestment.com';

export async function GET() {
  const currentDate = new Date().toISOString();

  // Static pages
  const staticPages = [
    { url: '', changefreq: 'daily', priority: '1.0' },
    { url: '/properties', changefreq: 'daily', priority: '0.9' },
    { url: '/investors', changefreq: 'daily', priority: '0.9' },
    { url: '/opportunities', changefreq: 'weekly', priority: '0.7' },
    { url: '/proposals', changefreq: 'weekly', priority: '0.7' },
    { url: '/tasks', changefreq: 'weekly', priority: '0.7' },
    { url: '/settings', changefreq: 'monthly', priority: '0.5' },
    { url: '/guides', changefreq: 'monthly', priority: '0.8' },
  ];

  // Dynamic property pages
  const propertyPages = properties
    .filter(p => p.status === 'active')
    .map(property => ({
      url: `/properties/${property.id}`,
      changefreq: 'weekly',
      priority: '0.8',
    }));

  const allPages = [...staticPages, ...propertyPages];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:news="http://www.google.com/schemas/sitemap-news/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml"
        xmlns:mobile="http://www.google.com/schemas/sitemap-mobile/1.0"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"
        xmlns:video="http://www.google.com/schemas/sitemap-video/1.1">
${allPages
  .map(
    (page) => `  <url>
    <loc>${BASE_URL}${page.url}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`
  )
  .join('\n')}
</urlset>`;

  return new Response(sitemap, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=3600, s-maxage=3600',
    },
  });
}
