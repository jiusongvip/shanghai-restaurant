# Schema / Structured Data Findings
**Score: 68/100 (weight: 10%)**

## What's Working
- FAQPage schema on homepage with 6 questions -- eligible for rich results
- WebSite and Organization schemas with proper URLs on homepage
- Restaurant detail pages include LocalBusiness/Restaurant schema
- JSON-LD format used correctly (not Microdata)
- No schema validation errors detected in sample pages

## Findings

### [Medium] Schema coverage only 68% -- 12 of 38 pages lack structured data
Blog posts, best-restaurants listing, cuisine sub-pages, city pages lack structured data.
**Fix**: Add BlogPosting to blog posts, ItemList to /best-shanghai-restaurants/, CollectionPage to cuisine/city pages.

### [Medium] No BreadcrumbList on interior pages
Only the homepage has breadcrumb schema. Interior pages lack this easy rich-result.
**Fix**: Add dynamic BreadcrumbList to Layout.astro based on URL path segments.

### [Medium] Missing Review/AggregateRating schema on restaurant pages
Star ratings displayed as text (e.g. "4.8" with stars) lack corresponding schema.
**Fix**: Add AggregateRating schema to restaurant detail pages using existing rating data.

### [Low] No ImageObject schema for food photography
High-quality food photography missing ImageObject structured data.
**Fix**: Add ImageObject schema to featured images on restaurant and dish pages.
