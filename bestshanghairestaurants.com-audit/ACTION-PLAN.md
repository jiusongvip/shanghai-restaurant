# Action Plan: bestshanghairestaurants.com

**Audit Date**: 2026-07-29 | **Health Score**: 71/100

---

## Phase 1: Critical Fixes (Week 1)

These issues block or severely limit search performance. Fix immediately after deployment.

| # | Action | Effort | Impact | File(s) |
|---|--------|--------|--------|---------|
| 1.1 | **Deploy site** -- push dist/ to hosting, configure DNS for bestshanghairestaurants.com | 2h | Critical | N/A |
| 1.2 | **Add canonical tags** -- add <link rel="canonical"> to Layout.astro template | 15m | Critical | src/layouts/Layout.astro |
| 1.3 | **Add OG images** -- add og:image and twitter:image meta tags to Layout.astro with a default branded image | 30m | Critical | src/layouts/Layout.astro |
| 1.4 | **Add robots meta** -- add <meta name="robots" content="index, follow"> to Layout.astro | 10m | High | src/layouts/Layout.astro |
| 1.5 | **Set up Google Search Console** -- verify domain and submit sitemap | 30m | High | N/A |

**Phase 1 Checklist**: [ ] Deploy site [ ] Canonicals [ ] OG images [ ] Robots meta [ ] GSC setup

---

## Phase 2: High-Impact Improvements (Weeks 2-3)

These changes significantly improve search visibility and user experience.

| # | Action | Effort | Impact |
|---|--------|--------|--------|
| 2.1 | **Responsive images** -- switch to Astro Image component with srcset/sizes, generate 480w/800w/1200w variants | 3h | High |
| 2.2 | **Compress oversized images** -- reduce photo-1551218808 (336KB), temp_xrj.jpg (365KB), and others to <100KB on mobile viewports | 1h | High |
| 2.3 | **Add BreadcrumbList schema** -- dynamic breadcrumb structured data in Layout.astro | 1h | Medium |
| 2.4 | **Add AggregateRating schema** -- add to all restaurant detail pages using existing rating data | 1h | Medium |
| 2.5 | **Expand cuisine sub-pages** -- benbang, fine-dining, hairy-crab, street-food, xiaolongbao to 300-500 words each | 3h | Medium |
| 2.6 | **Remove temp_* images** -- delete temp_jjtb.jpg, temp_xlb.jpg, temp_xrj.jpg from public/images/ | 10m | Low |

**Phase 2 Checklist**: [ ] Responsive images [ ] Image compression [ ] BreadcrumbList [ ] Ratings schema [ ] Expanded cuisine pages [ ] Remove temp images

---

## Phase 3: Content & Authority (Month 2)

These changes build long-term ranking strength and AI search visibility.

| # | Action | Effort | Impact |
|---|--------|--------|--------|
| 3.1 | **Create llms.txt** -- follow llmstxt.org spec with site description and key page links | 30m | Medium |
| 3.2 | **Add AI crawler directives** -- GPTBot, ChatGPT-User, anthropic-ai, PerplexityBot to robots.txt | 15m | Medium |
| 3.3 | **Add hreflang tags** -- en-us for NYC/LA pages, en-gb for London, en-au for Sydney | 1h | Medium |
| 3.4 | **Add BlogPosting schema** -- to all 5 blog posts | 1h | Medium |
| 3.5 | **Add ItemList schema** -- to /best-shanghai-restaurants/ listing page | 30m | Medium |
| 3.6 | **Add CollectionPage schema** -- to cuisine and city directory pages | 30m | Medium |
| 3.7 | **Visible dates and bylines** -- add publication date and author to blog posts | 1h | Low |
| 3.8 | **Improve blog H1** -- change from "Blog" to a keyword-rich heading | 10m | Low |
| 3.9 | **Add lastmod to sitemap** -- configure @astrojs/sitemap serialize callback | 30m | Medium |

**Phase 3 Checklist**: [ ] llms.txt [ ] AI crawler directives [ ] Hreflang [ ] BlogPosting schema [ ] ItemList schema [ ] CollectionPage schema [ ] Blog dates/byline [ ] Blog H1 [ ] Sitemap lastmod

---

## Phase 4: Monitoring & Iteration (Ongoing)

These items improve baseline quality and prevent future regressions.

| # | Action | Effort | Impact |
|---|--------|--------|--------|
| 4.1 | **Monitor Core Web Vitals** -- track LCP, INP, CLS via CrUX dashboard post-deployment | Setup 1h | High |
| 4.2 | **Add AVIF support** -- generate AVIF variants alongside WebP | 2h | Low |
| 4.3 | **Font preloading** -- add preload link for Geist Sans woff2 | 15m | Medium |
| 4.4 | **Image dimensions** -- add width/height to all img tags for CLS prevention | 1h | Medium |
| 4.5 | **Lazy loading** -- set loading="lazy" on below-fold images | 30m | Low |
| 4.6 | **SEO drift baseline** -- capture and store baseline for future comparison | 30m | Low |
| 4.7 | **ImageObject schema** -- add for featured food photography | 1h | Low |
| 4.8 | **Mobile menu resilience** -- consider CSS-only fallback for hamburger menu | 1h | Low |
| 4.9 | **Add noindex to privacy policy** -- prevent utility pages from consuming crawl budget | 10m | Low |

**Phase 4 Checklist**: [ ] CWV monitoring [ ] AVIF [ ] Font preload [ ] Image dims [ ] Lazy loading [ ] Drift baseline [ ] ImageObject schema [ ] Mobile menu [ ] Privacy noindex

---

## Estimated Total Effort

| Phase | Time | Priority |
|-------|------|----------|
| Phase 1: Critical Fixes | ~3.5h | IMMEDIATE |
| Phase 2: High-Impact | ~9.5h | Week 2-3 |
| Phase 3: Content & Authority | ~6h | Month 2 |
| Phase 4: Monitoring | ~7.5h | Ongoing |
| **Total** | **~26.5h** | |

---

## Expected Impact

With all critical and high-impact fixes implemented, this site should:
- Achieve proper indexing within days of deployment
- Rank competitively for "Shanghai restaurant [city]" and "[dish] Shanghai" queries
- Generate social traffic via proper OG image previews
- Load with sub-2.5s LCP on mobile (down from estimated 4-6s)
- Gain AI overview citations for FAQ and entity-rich content
