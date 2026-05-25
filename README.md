# Trillion Market Cap

Assets too large for intuition.

[Trillion Market Cap](https://trillionmarketcap.com) is a source-backed registry of assets, companies, commodities, crypto networks, and private valuations large enough to be measured in trillions of United States dollars.

The site is built as a fast static frontend with a small Vercel API route for hourly market-data refreshes.

## Live Site

```text
https://trillionmarketcap.com
```

## What It Tracks

- Public companies with trillion-dollar market capitalizations
- Commodity value estimates, such as above-ground gold and silver
- Cryptoasset market capitalizations
- Private-company valuations, funding marks, and reported IPO targets
- Groupings such as Mag 7, MANGO, AI Infrastructure, Semiconductors, Store of Value, and Watchlist

## Data Model

Every row is labeled by data status:

- `live public market cap`
- `live crypto market cap`
- `estimated commodity value`
- `reported private valuation`
- `target IPO valuation`

Public equities and Bitcoin can be refreshed through APIs. Commodities are methodology estimates. Private companies are source-backed estimates and are not live market prices.

## API

The registry endpoint is:

```text
/api/registry
```

On Vercel, the endpoint uses cache headers to refresh roughly once per hour:

```http
Cache-Control: s-maxage=3600, stale-while-revalidate=21600
```

If API keys are not configured, the API returns the curated fallback dataset.

## Environment Variables

Create environment variables in Vercel Project Settings when available:

```text
EODHD_API_KEY=
CMC_API_KEY=
ALPHA_VANTAGE_API_KEY=
```

Only `EODHD_API_KEY` and `CMC_API_KEY` are currently used by the API route. `ALPHA_VANTAGE_API_KEY` is reserved for future commodity/market-data expansion.

## Run Locally

```bash
npm run dev
```

Then open:

```text
http://127.0.0.1:4173
```

Local static preview will usually load the curated fallback dataset because Vercel serverless routing is not running through `python3 -m http.server`.

## Deploy

The project is Vercel-ready.

```bash
npx vercel --prod
```

No framework build step is required. The site is static, with serverless files under `api/`.

## Project Structure

```text
.
├── api/registry.js       # Vercel API route for normalized registry data
├── favicon.svg           # Site favicon
├── index.html            # Main page
├── privacy.html          # Privacy policy
├── script.js             # Frontend rendering and filters
├── styles.css            # Swiss-style visual system
├── terms.html            # Terms of service
├── robots.txt
├── sitemap.xml
└── vercel.json
```

## Notes

This project is informational only. It does not provide investment, legal, tax, accounting, or financial advice. Values may be delayed, estimated, incomplete, or inaccurate. Private-company valuations are especially uncertain and should be read as reported estimates rather than liquid market prices.
