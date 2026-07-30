# SEO Audit Report: bestshanghairestaurants.com

**Date**: 2026-07-29
**Health Score**: 71/100
**Business Type**: Content Publisher / Directory -- curated Shanghai restaurant guide
**Pages Audited**: 38 (static HTML)
**Audit Method**: Source-code analysis (site not yet deployed)

---

## Executive Summary

bestshanghairestaurants.com is a well-built Astro static site with strong content foundations. The site has excellent on-page SEO fundamentals -- every page has unique title tags, meta descriptions, and image alt text. Content quality is high with genuine food expertise, Michelin references, and substantive dish guides.

However, the site has several critical gaps that will significantly limit search visibility once deployed: **no canonical tags, no OG images, and oversized image payloads**. These are the highest-priority fixes. Additionally, structured data coverage is patchy (68%) and the cuisine category pages are too thin to rank competitively.

Once these issues are resolved, the site has strong potential to rank for Shanghai restaurant queries across multiple cities and dish types. The content strategy -- pillar pages for major dishes, city hubs for local discovery, and blog posts for topical freshness -- is fundamentally sound.

### Top 5 Critical Issues
1. **Missing canonical tags** on all 38 pages (index dilution risk)
2. **Zero OG image tags** -- no social previews for a photography-driven site
3. **Site not deployed** -- DNS does not resolve
4. **Large images** -- 2MB total payload, single images up to 365KB
5. **Inconsistent schema coverage** -- only 68% of pages have structured data

### Top 5 Quick Wins
1. Add canonical tags to Layout.astro (fixes all pages in one edit)
2. Add OG image and Twitter image to Layout.astro (fixes social previews site-wide)
3. Remove 3 temp_* JPG files from production build
4. Add BreadcrumbList schema to Layout.astro for all interior pages
5. Add lastmod dates to sitemap entries

---

## Category Scores

| Category | Score | Weight | Weighted |
|----------|-------|--------|----------|
| Technical SEO | 65/100 | 22% | 14.3 |
| Content Quality | 78/100 | 23% | 17.9 |
| On-Page SEO | 70/100 | 20% | 14.0 |
| Schema | 68/100 | 10% | 6.8 |
| Performance | 72/100 | 10% | 7.2 |
| AI Search Readiness | 75/100 | 10% | 7.5 |
| Images | 70/100 | 5% | 3.5 |
| **TOTAL** | **71/100** | **100%** | **71.2** |

---

## Detailed Analysis

### Technical SEO (65/100)

**Strengths**: Clean URLs, proper robots.txt, XML sitemap via Astro integration, no duplicate paths, static generation for fast crawl.

**Critical**: No canonical tags. This is the most impactful single fix -- add self-referencing canonicals to the shared layout template to protect against indexing dilution and content scraping.

**Critical**: Site not deployed. DNS doesn't resolve for the domain.

**High**: No robots meta directives. Add explicit index/follow signals.

**Medium**: Sitemap lacks lastmod dates. Add via @astrojs/sitemap serialize callback.

**Medium**: No hreflang for international city pages (NYC/LA vs London vs Sydney).

### Content Quality (78/100)

**Strengths**: Strong E-E-A-T signals throughout. The cuisine guide, xiaolongbao, and shengjianbao pages are genuinely valuable long-form content. FAQ section is well-crafted. Restaurant detail pages include specific, actionable recommendations.

**Medium**: Cuisine sub-pages (benbang, fine-dining, etc.) are too thin at ~70-character descriptions. Expand to 300-500 words.

**Medium**: Blog index H1 is just "Blog" -- too generic. Align with the stronger title tag.

**Low**: Blog posts lack visible publication dates and author bylines.

### On-Page SEO (70/100)

**Strengths**: 100% coverage on titles, descriptions, and image alt text. All pages have OG title/description and Twitter cards. Consistent H1 per page. 1,013 internal links across 38 pages.

**Critical**: Zero OG image tags. For a food site where photography sells the experience, every social share without a preview image is a lost visitor.

**Critical**: Missing canonical tags (see Technical SEO).

**High**: No Twitter image tags (falls back to OG image, which is also missing).

### Schema (68/100)

**Strengths**: FAQPage rich-result eligible on homepage. WebSite and Organization schemas. Restaurant pages have appropriate LocalBusiness schema. JSON-LD format is correct.

**Medium**: 12 of 38 pages lack any structured data -- blog posts, cuisine pages, city pages all have clear schema opportunities.

**Medium**: No BreadcrumbList on interior pages.

**Medium**: No AggregateRating schema despite visible star ratings on restaurant pages.

### Performance (72/100)

**Strengths**: Astro static output means zero JS overhead. Single CSS file. WebP format. No third-party scripts. Self-hosted fonts.

**High**: Image payload of ~2MB with single files up to 365KB will dominate LCP on mobile.

**Medium**: 3 temp JPG files in production, no font preloading, missing width/height on images.

### AI Search Readiness (75/100)

**Strengths**: Well-structured heading hierarchy, extended FAQ schema, strong entity signals in content, clean semantic HTML.

**Medium**: No llms.txt file and no AI crawler directives in robots.txt. These are increasingly important for LLM search visibility.

### Images (70/100)

**Strengths**: 100% alt text coverage (excellent). WebP format. Self-hosted assets.

**Medium**: No responsive image variants -- mobile downloads same files as desktop.

**Low**: temp_* files in production, no lazy loading on below-fold images.

---

## Appendix

### Site Structure (38 pages)

| Section | Pages | Schema Coverage |
|---------|-------|-----------------|
| Homepage | 1 | Yes (WebSite, Org, FAQPage, BreadcrumbList) |
| City Pages | 4 (NYC, LA, London, Sydney) | Partial |
| Cuisine Hubs | 5 (benbang, xlb, hairy crab, street food, fine dining) | None |
| Restaurant Detail | 9 | Yes (Restaurant/LocalBusiness) |
| Dish Guides | 6 (xiaolongbao, shengjianbao, hairy crab, red-braised-pork, dim sum, prices) | 4/6 |
| Blog | 6 (index + 5 posts) | None |
| Static Pages | 5 (about, privacy, reservations, menu, cuisine guide) | 1/5 |
| Best Restaurants | 1 | None |
| Robots.txt | 1 | N/A |
| **Total** | **38** | **26/38 (68%)** |

### Image Summary
- 15 primary WebP images: 16KB-336KB, total ~2MB
- 3 temp JPG files to remove
- 1 favicon SVG
- All images have alt text
- No srcset/sizes anywhere
- No AVIF variants
