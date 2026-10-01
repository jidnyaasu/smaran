# स्मरण — Prayer Library

Astro-based static prayer library.

Content lives as Markdown in `src/content/stotra`, `src/content/aarti`, and `src/content/mantra-shloka`. Each file has metadata for deity, festival, aliases and language. Search uses that metadata.

Run with `npm install`, then `npm run dev`. Build with `npm run build`; deploy the generated `dist/` to Cloudflare Pages.
