# Performance (Core Web Vitals) Findings
**Score: 72/100 (weight: 10%)**

## What's Working
- Astro static generation -- zero JS framework overhead on most pages
- Single CSS file (19KB) -- no render-blocking stylesheet cascade
- WebP image format used for all primary images
- No third-party script dependencies visible in source
- Font is self-hosted (Geist Sans woff2, 33KB)

## Findings

### [High] Large images -- up to 365KB single file, ~2MB total payload
Individual WebP images range 16KB-365KB. Largest: photo-1551218808 (336KB), temp_xrj.jpg (365KB), photo-1625220194771 (172KB).
**Fix**: Generate responsive image variants (480w, 800w, 1200w). Target <100KB on mobile.

### [Medium] 3 leftover temp JPGs in production
temp_jjtb.jpg, temp_xlb.jpg, temp_xrj.jpg -- development artifacts.
**Fix**: Remove from build or convert to WebP and rename properly.

### [Medium] No font preloading
Geist Sans (33KB woff2) discovered late via CSS @font-face.
**Fix**: Add '<link rel="preload" as="font" crossorigin>' for primary woff2.

### [Medium] Images lack explicit width/height attributes
CSS sizing without HTML dimensions risks Cumulative Layout Shift.
**Fix**: Add width/height attributes matching aspect ratio containers.

### [Low] No AVIF format support
AVIF offers 20-30% better compression. All modern browsers support it.
**Fix**: Generate AVIF variants alongside WebP using picture/source.
