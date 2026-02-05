/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || 'https://expertinvestment.com',
  generateRobotsTxt: false, // Using custom robots.txt route
  generateIndexSitemap: false,
  exclude: ['/api/*', '/_next/*', '/private/*'],
  changefreq: 'weekly',
  priority: 0.7,
  transform: async (config, path) => {
    // Custom priorities for different page types
    let priority = 0.7;
    let changefreq = 'weekly';

    if (path === '/') {
      priority = 1.0;
      changefreq = 'daily';
    } else if (path.startsWith('/properties') || path.startsWith('/investors')) {
      priority = 0.9;
      changefreq = 'daily';
    } else if (path.startsWith('/guides')) {
      priority = 0.8;
      changefreq = 'monthly';
    } else if (path.startsWith('/opportunities') || path.startsWith('/proposals')) {
      priority = 0.7;
      changefreq = 'weekly';
    }

    return {
      loc: path,
      changefreq,
      priority,
      lastmod: new Date().toISOString(),
    };
  },
};
