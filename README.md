# Trillion Market Cap

A static, Vercel-ready website for a Swiss data registry of assets with market capitalizations of one trillion United States dollars or more.

## Run locally

```bash
npm run dev
```

## Deploy to Vercel

Import this folder as a Vercel project. No build command is required because the site is static.

The API route at `/api/registry` refreshes market-backed rows hourly through Vercel cache headers. Add these environment variables in Vercel when available:

```text
EODHD_API_KEY=
CMC_API_KEY=
ALPHA_VANTAGE_API_KEY=
```

Without keys, the site uses the curated fallback dataset and still shows source/timestamp status.

Recommended production domain:

```text
trillionmarketcap.com
```
