# Images Findings
**Score: 70/100 (weight: 5%)**

## What's Working
- 100% alt text coverage -- all 37 images have descriptive alt attributes
- WebP format used for all primary images
- Images served from own domain -- no third-party hosting dependency
- Aspect ratio containers (aspect-[4/3]) provide stable dimensions

## Image Inventory (from dist/images/)

| File | Size | Status |
|------|------|--------|
| photo-1551218808-94e220e084d2.webp | 335.8 KB | Oversized |
| temp_xrj.jpg | 365.2 KB | JPG format, oversized, temp file |
| photo-1504674900247-0877df9cc836.webp | 194.3 KB | Oversized |
| photo-1625220194771-7ebdea0b70b9.webp | 171.7 KB | Oversized |
| photo-1534604973900-c43ab4c2e0ab.webp | 144.6 KB | Moderate |
| photo-1559339352-11d035aa65de.webp | 145.4 KB | Moderate |
| photo-1517248135467-4c7edcad34c4.webp | 135.3 KB | Moderate |
| photo-1563379926898-05f4575a45d8.webp | 133.0 KB | Moderate |
| photo-1547592166-23ac45744acd.webp | 111.0 KB | Moderate |
| photo-1598515214211-89d3c73ae83b.webp | 105.9 KB | Acceptable |
| photo-1414235077428-338989a2e8c0.webp | 73.7 KB | Acceptable |
| photo-1582450871972-ab5ca72a1f7a.webp | 59.4 KB | Acceptable |
| photo-1565557623262-b51c2513a641.webp | 56.4 KB | Acceptable |
| photo-1550966871-3ed3cdb51f3a.webp | 49.4 KB | Acceptable |
| photo-1496116218417-1a781b1c416c.webp | 36.0 KB | Good |
| photo-1541696490-8744a5dc0228.webp | 15.9 KB | Good |
| temp_jjtb.jpg | 0.3 KB | Temp file |
| temp_xlb.jpg | 0.6 KB | Temp file |
| favicon.svg | 0.6 KB | Good |

## Findings

### [Medium] No responsive image variants (srcset/sizes)
All images served at single resolution regardless of viewport. Mobile users download same large images as desktop.
**Fix**: Use Astro Image component with widths=[480, 800, 1200] and sizes attribute.

### [Low] 3 temp_* files in production
temp_jjtb.jpg, temp_xlb.jpg, temp_xrj.jpg should not ship to production.
**Fix**: Remove from public/images/ and rebuild.

### [Low] Below-fold images use eager loading
Hero images correctly use loading="eager", but below-fold restaurant card images also eager-load.
**Fix**: Set loading="lazy" on images below the first viewport.
