# SEO Verification Report: shanghai-restaurant.com

**Date**: 2026-07-29
**Method**: Live HTTP audit (localhost:4322) + Source code analysis
**Health Score**: 84/100
**Pages Audited**: 38 (all 200 OK)
**Previous Audit Score**: 71/100 → **+13 points** (substantial improvements applied)

---

## Executive Summary

This is a follow-up audit after the initial 71/100 assessment. The site has seen **significant improvements** since the original audit — canonical tags, OG images, robots meta, BreadcrumbList schema, font preloading, sitemap lastmod, llms.txt, and AI crawler directives have all been added. The cuisine sub-pages have been expanded from ~70 chars to 300-500+ words. Blog H1 has been improved from "Blog" to a keyword-rich heading. BlogPosting schema has been added to all 5 blog posts. The AggregateRating schema is present on all restaurant pages.

The site is in **strong shape** and getting close to launch readiness. The remaining issues are lower-severity optimizations rather than critical blockers.

### Changes Applied Since Last Audit

| Original Finding | Status | What Changed |
|-----------------|--------|-------------|
| No canonical tags | ✅ FIXED | Self-referencing canonical in Layout.astro |
| No OG images | ✅ FIXED | Default + page-level OG images |
| No robots meta | ✅ FIXED | index,follow + noindex on privacy |
| No BreadcrumbList | ✅ FIXED | Dynamic breadcrumbs in Layout.astro |
| No font preloading | ✅ FIXED | Geist Sans woff2 preloaded |
| No sitemap lastmod | ✅ FIXED | serialize callback in astro.config.mjs |
| No llms.txt | ✅ FIXED | Properly formatted llms.txt |
| No AI crawler directives | ✅ FIXED | 5 AI bots allowed in robots.txt |
| Cuisine pages thin | ✅ FIXED | Expanded to 300-500+ words each |
| Blog H1 generic | ✅ FIXED | Now "Shanghai Restaurant Stories..." |
| No BlogPosting schema | ✅ FIXED | All 5 blog posts have schema |
| No ItemList schema | ✅ FIXED | On best-shanghai-restaurants page |
| No AggregateRating | ✅ FIXED | On all 9 restaurant pages |
| Missing image dimensions | ✅ FIXED | width/height on RestaurantCard images |
| No lazy loading | ✅ FIXED | loading="lazy" on index>=4 cards |

---

## Category Scores

| Category | Score | Weight | Weighted | Prev Score | Delta |
|----------|-------|--------|----------|------------|-------|
| Technical SEO | 85/100 | 25% | 21.3 | 65/100 | +20 |
| Schema | 85/100 | 15% | 12.8 | 68/100 | +17 |
| On-Page SEO | 88/100 | 25% | 22.0 | 70/100 | +18 |
| Content Quality | 82/100 | 20% | 16.4 | 78/100 | +4 |
| Performance | 78/100 | 10% | 7.8 | 72/100 | +6 |
| AI Search Readiness | 82/100 | 5% | 4.1 | 75/100 | +7 |
| **TOTAL** | **84/100** | **100%** | **84.2** | **71/100** | **+13** |

---

## Detailed Analysis

### Technical SEO (85/100) ↑ +20

**Strengths**: Self-referencing canonical tags on all 38 pages. robots.txt with explicit AI crawler directives (GPTBot, ChatGPT-User, anthropic-ai, PerplexityBot, OAI-SearchBot). XML sitemap with lastmod dates via `@astrojs/sitemap` serialize callback. Clean URL structure with `trailingSlash: never`. All pages return 200 OK. HTTPS site URL configured. Viewport meta present. lang="en" consistent. robots meta on all pages (privacy-policy correctly uses noindex).

**Issues found**:

| # | Severity | Issue | Detail |
|---|----------|-------|--------|
| 1 | Medium | No hreflang tags | City pages (NYC, LA, London, Sydney) serve English content to different geographic audiences but lack hreflang annotations. Add `en-us` for NYC/LA, `en-gb` for London, `en-au` for Sydney. |
| 2 | Medium | No RSS feed | `/rss.xml` returns 404. RSS boosts content discovery for blog-heavy sites. Add `@astrojs/rss` integration. |
| 3 | Medium | No security headers | Missing `_headers` (Netlify), `vercel.json` (Vercel), or equivalent. Add X-Content-Type-Options, X-Frame-Options, Referrer-Policy. |
| 4 | Low | 6 temp files in root | `temp_cuisine.html`, `temp_fd3.html`, `temp_la.html`, `temp_lon.html`, `temp_nyc.html`, `temp_syd.html` (~180KB total). Delete before deployment. |
| 5 | Low | 404 page test | Astro dev mode returns raw 404 without custom page. Production static deploy should serve `/404.html` correctly — verify after deployment. |

### Schema (85/100) ↑ +17

**Strengths**: BreadcrumbList on every page (dynamic, derived from URL path). Complete schema coverage:
- Restaurant + AggregateRating on all 9 restaurant detail pages
- BlogPosting on all 5 blog posts
- Article on all dish guide pages (xiaolongbao, shengjianbao, hairy crab, etc.)
- CollectionPage + Place on all 4 city pages
- CollectionPage on all 5 cuisine sub-pages
- ItemList + Restaurant on best-shanghai-restaurants listing
- All in JSON-LD format, properly structured

**Issues found**:

| # | Severity | Issue | Detail |
|---|----------|-------|--------|
| 1 | Medium | FAQPage schema missing on homepage | Homepage renders FAQ content via `<Faq items={faqs} />` but without `schema={true}`. Add `schema={true}` to enable FAQPage JSON-LD. Rich-result eligible. |
| 2 | Medium | Blog author is Organization | Article schema and BlogPosting schema use `{"@type": "Organization", "name": "Best Shanghai Restaurants"}` as author. E-E-A-T guidelines favor person names with credentials. Change to something like `{"@type": "Person", "name": "Li Wei, Food Critic"}` in `ArticleSchema.astro`. |
| 3 | Low | No WebSite schema | Missing `WebSite` with `SearchAction` (if search is planned) or `potentialAction`. Add to homepage or Layout.astro. |
| 4 | Low | No HowTo schema | The xiaolongbao page has a numbered step-by-step "How to Eat Xiaolongbao" section — perfect for HowTo schema eligibility. |

---

### On-Page SEO (88/100) ↑ +18

**Strengths**: Perfect coverage: 100% title tags, 100% meta descriptions, 100% OG images, 100% Twitter cards (`summary_large_image`), 100% image alt text. All pages have exactly 1 H1. Keyword placement in H1s is strong. Clean, descriptive URL structure. Internal linking network across 38 pages is solid.

**Issues found**:

| # | Severity | Issue | Detail |
|---|----------|-------|--------|
| 1 | Low | 13 titles under 50 chars | `/blog` (42), `/about` (42), `/cuisine/benbang` (43), `/xiaolongbao` (41), `/privacy-policy` (42), `/shengjianbao` (42), `/red-braised-pork` (42), `/shanghai-restaurant-los-angeles` (40), `/shanghai-restaurant-menu` (42), `/shanghai-restaurant-london` (47), `/shanghai-restaurant-sydney` (47), `/restaurant/din-tai-fung` (41), `/restaurant/yongfoo-elite` (42). Ideal range is 50-60 chars. Most can be expanded with " — Best Shanghai Restaurants" suffix or similar qualifiers. |
| 2 | Low | 2 metas over 160 chars | `/blog` (166 chars) and `/shanghai-restaurant-menu` (166 chars). Truncate to ~155 chars to avoid SERP cutoff. |
| 3 | Low | `/about` meta too short | 112 chars. Expand to at least 140 chars with more descriptive content. |
| 4 | Low | No srcset/sizes | Despite having multiple resolution image variants in `/images/`, pages use single `<img>` without `srcset`/`sizes`. Mobile users download same large images as desktop. |

### Content Quality (82/100) ↑ +4

**Strengths**: Strong long-form content on dish guide pages (hairy-crab: 400+ words, xiaolongbao: 350+ words). Cuisine sub-pages expanded to 300-500+ words with signature dishes and dining tips. Restaurant detail pages include specific recommendations, signature dishes, and best-for tags. About page demonstrates strong E-E-A-T with editorial independence statements. FAQ section is substantive and genuinely helpful. Internal linking is appropriate and contextual.

**Issues found**:

| # | Severity | Issue | Detail |
|---|----------|-------|--------|
| 1 | Medium | Blog posts lack author bylines | Blog detail pages show dates but no author name. Archive/index cards show dates but no bylines. Adding author attribution improves E-E-A-T signals. |
| 2 | Low | Blog author is Organization (E-E-A-T) | Both schema and visible content should use person names for food criticism content. "Reviewed by Li Wei, Shanghai Food Critic" carries more weight than organization attribution. |
| 3 | Low | No author page/bio | The about page describes the team but no individual author bios. For food journalism, individual credentials matter for E-E-A-T. |

### Performance (78/100) ↑ +6

**Strengths**: Astro static output = zero JS overhead. Single CSS file. WebP images throughout. Self-hosted fonts with woff2 preloading. No third-party scripts. width/height on all RestaurantCard images. Lazy loading on below-fold cards (index >= 4).

**Issues found**:

| # | Severity | Issue | Detail |
|---|----------|-------|--------|
| 1 | Medium | No responsive images | No `srcset`/`sizes` attributes. Multiple resolution WebP variants exist but are not referenced. Mobile users download full-size images unnecessarily. |
| 2 | Low | 6 temp HTML files | ~180KB of unused files in project root should be deleted before deployment. |
| 3 | Low | No preconnect hints | No `<link rel="dns-prefetch">` or `<link rel="preconnect">` for external origins (not currently needed since all assets are self-hosted). |

### AI Search Readiness (82/100) ↑ +7

**Strengths**: llms.txt properly formatted with site description and key page links. 5 AI crawler bots explicitly allowed in robots.txt. Semantic HTML throughout with clear heading hierarchy. Structured data coverage at 100% of pages (at least BreadcrumbList). FAQ content is well-structured and informative.

**Issues found**:

| # | Severity | Issue | Detail |
|---|----------|-------|--------|
| 1 | Medium | FAQPage schema not enabled | Homepage FAQ content is rich-result eligible but FAQPage schema is not output (schema prop not passed to Faq component). |
| 2 | Low | HowTo schema opportunity | Xiaolongbao page has step-by-step instructions perfect for HowTo rich results. |

---

## Must Fix (Launch Blockers)

> **No critical blockers remaining.** All previous critical issues (missing canonicals, missing OG images, missing robots meta) have been resolved.

## Should Fix (Before Next Sprint)

1. **Enable FAQPage schema on homepage** — Add `schema={true}` to `<Faq items={faqs} />` in `src/pages/index.astro` (line 88). Rich-result eligible, zero-effort win.
2. **Add hreflang to city pages** — Add `en-us`, `en-gb`, `en-au` annotations for NYC/LA, London, Sydney pages respectively.
3. **Add RSS feed** — Create `rss.xml.js` with `@astrojs/rss`. Blog content drives RSS subscriber discovery.
4. **Fix blog author attribution** — Change from Organization to Person in `ArticleSchema.astro` and `blog/[slug].astro`.
5. **Trim long metas** — `/blog` (166→155) and `/shanghai-restaurant-menu` (166→155).
6. **Delete temp files** — Remove 6 `temp_*` files from project root.
7. **Add security headers** — Create `public/_headers` for Netlify or `vercel.json` for Vercel with basic security headers.

## Nice to Have

1. **Expand short titles** — 13 pages with titles under 50 chars could benefit from expansion to 50-60 chars.
2. **Expand /about meta** — From 112 chars to 140+ chars.
3. **Add srcset/sizes to images** — Leverage existing WebP resolution variants for responsive loading.
4. **Add HowTo schema to xiaolongbao page** — The "How to Eat" section maps perfectly to HowTo structured data.
5. **Add WebSite schema** — With potentialAction for site search discoverability.
6. **Add author bylines to blog posts** — Visible author attribution on blog detail and index pages.
7. **Add individual author bio page** — Improves E-E-A-T for food journalism content.

---

## Site Structure (38 pages, all verified 200 OK)

| Section | Pages | Schema Types |
|---------|-------|--------------|
| Homepage | 1 | BreadcrumbList |
| City Pages | 4 (NYC, LA, London, Sydney) | BreadcrumbList, CollectionPage, Place |
| Cuisine Hubs | 5 (benbang, xiaolongbao, hairy crab, street food, fine dining) | BreadcrumbList, CollectionPage |
| Restaurant Detail | 9 | BreadcrumbList, Restaurant, AggregateRating |
| Dish Guides | 6 (xiaolongbao, shengjianbao, hairy crab, red-braised-pork, dim sum, prices) | BreadcrumbList, Article |
| Blog | 6 (index + 5 posts) | BreadcrumbList, BlogPosting, Organization |
| Static Pages | 6 (about, privacy, reservations, menu, cuisine guide, best restaurants) | BreadcrumbList, ItemList |
| SEO/Meta | 1 (robots.txt) | N/A |
| **Total** | **38** | **100% coverage** |

---

## Verification Checklist

| Check | Status |
|-------|--------|
| robots.txt allows crawling | ✅ |
| Sitemap exists and valid | ✅ 38 URLs |
| Canonical URLs self-referencing | ✅ |
| No noindex on important pages | ✅ |
| Title tags present and unique | ✅ |
| Title tags 50-60 chars | ⚠️ 13 pages under 50 |
| Meta descriptions present and unique | ✅ |
| Meta descriptions 150-160 chars | ⚠️ 3 pages out of range |
| Single H1 per page | ✅ |
| Heading hierarchy proper | ✅ |
| HTTPS configured | ✅ |
| Viewport meta tag | ✅ |
| lang attribute present | ✅ |
| OG images present | ✅ |
| Twitter cards present | ✅ |
| BreadcrumbList schema | ✅ |
| Article/BlogPosting schema | ✅ |
| Restaurant + AggregateRating schema | ✅ |
| FAQPage schema on FAQ content | ❌ Not enabled |
| hreflang on city pages | ❌ Missing |
| RSS feed | ❌ Missing |
| Security headers | ❌ Missing |
| AI crawler directives | ✅ |
| llms.txt | ✅ |
| JSON-LD format | ✅ |
| Image alt text | ✅ 100% |
| Lazy loading | ✅ On below-fold |
| Font preloading | ✅ |

---

## Score Trend

```
71 ──→ 84 (+13)
───────────────
Initial:  71/100 (source-code only audit)
Current:  84/100 (live HTTP audit after fixes)
Target:   90+/100 (recommended launch threshold)
Remaining gap: ~6 points (hreflang, RSS, FAQPage schema, security headers)
```

Estimated effort to reach 90+: ~3-4 hours across 7 should-fix items.
