# Technical SEO Findings
**Score: 65/100 (weight: 22%)**

## What's Working
- Clean URL structure with trailing-slash consistency across all 38 pages
- robots.txt correctly configured with sitemap reference
- XML sitemap properly generated via @astrojs/sitemap with all 37 URLs listed
- No duplicate content paths detected -- each URL maps to a single page
- Astro static generation ensures fast server-side rendering and crawlability

## Findings

### [Critical] Missing canonical tags on all pages
No `<link rel="canonical">` tag found on any of the 38 pages. Without self-referencing canonicals, search engines may index variations and dilute ranking signals.

**Fix**: Add to Layout.astro: `<link rel="canonical" href={new URL(Astro.url.pathname, site).href} />`

### [Critical] Site not yet deployed -- DNS does not resolve
Neither bestshanghairestaurants.com nor www variant resolves. The site cannot be crawled or indexed.

**Fix**: Deploy dist/ folder to a hosting provider and configure DNS.

### [High] No robots meta tags on any page
No <meta name="robots"> directives. Explicit tags prevent accidental noindex inheritance.

**Fix**: Add <meta name="robots" content="index, follow"> to Layout.astro.

### [Medium] Sitemap missing lastmod and changefreq
Sitemap contains only <loc> entries with no temporal signals for crawlers.

**Fix**: Configure @astrojs/sitemap serialize callback to add lastmod dates.

### [Medium] No hreflang for international city pages
NYC, LA, London, Sydney pages target different regions in same language.

**Fix**: Add hreflang: en-us for US city pages, en-gb for London, en-au for Sydney.
