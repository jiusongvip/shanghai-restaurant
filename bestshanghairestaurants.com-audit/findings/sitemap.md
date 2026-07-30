# Sitemap Analysis
**Score: 65/100**

## What's Working
- XML sitemap present and referenced in robots.txt
- All 37 pages listed with proper absolute URLs
- Sitemap index structure with sitemap-index.xml pointing to sitemap-0.xml
- Generated via @astrojs/sitemap integration

## Findings

### [Medium] Missing lastmod, changefreq, and priority attributes
All entries are bare <url><loc>...</loc></url> blocks. No temporal or priority signals for crawlers.

### [Low] Sitemap index overkill for 37 pages
A sitemap index is unnecessary for a site this size. A single sitemap-0.xml would suffice.
**Fix**: Either simplify to single sitemap or add more sitemaps as the site grows.

### [Low] No image sitemap entries
Despite 15+ food images, no <image:image> entries in the sitemap to help Google discover and index them.
**Fix**: Use @astrojs/sitemap custom serialization to add image entries for pages with food photography.
