# AI Search Readiness (GEO) Findings
**Score: 75/100 (weight: 10%)**

## What's Working
- Well-structured content with clear H1/H2/H3 hierarchy for LLM extraction
- FAQPage structured data provides ready-made Q&A for AI overviews
- Strong entity signals: specific restaurant names, dish names, locations
- Descriptive alt text on all images aids multimodal AI understanding
- Clean, semantic HTML without excessive div nesting

## Findings

### [Medium] No llms.txt file -- missed AI crawler optimization
The site lacks an /llms.txt file that AI crawlers (ChatGPT, Claude, Perplexity) use to discover and prioritize content. This is a fast-growing SEO signal.
**Fix**: Create /llms.txt with site description and links to key pages. Follow llmstxt.org spec.

### [Medium] No generative AI crawler directives in robots.txt
robots.txt is minimal with no directives for AI-specific crawlers like GPTBot, ChatGPT-User, anthropic-ai, or PerplexityBot.
**Fix**: Add explicit Allow directives for major AI crawlers you want indexing.

### [Low] Maintain entity-rich content pattern
The site's content naturally includes specific entities (Jia Jia Tang Bao, Fu He Hui, xiaolongbao). This makes it highly citable by AI search systems.
