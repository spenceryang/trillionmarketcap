const HOUR = 60 * 60;

const FALLBACK_UPDATED_AT = "2026-05-20T21:30:00.000Z";

const fallbackAssets = [
  publicAsset("Gold", "XAU", "metal", 31_000_000_000_000, "The world's original store of value.", "World Gold Council", "https://www.gold.org/goldhub/research/market-primer/gold-market-primer-market-size-and-structure", "estimated commodity value", "Global", "Antiquity", "1980s", [30.5, 30.9, 31.2, 31.0, 31.4, 31.1, 31.0], 0.2, 3.8, ["Store of Value"]),
  publicAsset("NVIDIA", "NVDA", "tech", 5_412_000_000_000, "The picks and shovels of the AI infrastructure buildout.", "CompaniesMarketCap", "https://companiesmarketcap.com/nvidia/marketcap/", "live public market cap", "Santa Clara, CA", 1993, "May 2023", [5.04, 5.11, 5.19, 5.22, 5.31, 5.34, 5.41], 1.3, 16.5, ["Mag 7", "MANGO", "AI Infrastructure"]),
  publicAsset("Alphabet", "GOOGL", "tech", 4_663_000_000_000, "Search, ads, cloud, AI models, autonomy, and quantum research.", "CompaniesMarketCap", "https://companiesmarketcap.com/alphabet-google/marketcap/", "live public market cap", "Mountain View, CA", 1998, "Sept 2021", [4.31, 4.39, 4.42, 4.48, 4.55, 4.62, 4.66], 0.0, 8.4, ["Mag 7", "MANGO", "AI Infrastructure"]),
  publicAsset("Apple", "AAPL", "tech", 4_439_000_000_000, "The most profitable consumer technology brand ever built.", "CompaniesMarketCap", "https://companiesmarketcap.com/apple/marketcap/", "live public market cap", "Cupertino, CA", 1976, "Aug 2018", [4.22, 4.18, 4.26, 4.31, 4.34, 4.39, 4.44], 1.1, 5.2, ["Mag 7"]),
  publicAsset("Microsoft", "MSFT", "tech", 3_127_000_000_000, "Azure, Office, Windows, GitHub, LinkedIn, and the OpenAI partnership.", "CompaniesMarketCap", "https://companiesmarketcap.com/microsoft/marketcap/", "live public market cap", "Redmond, WA", 1975, "April 2019", [3.02, 3.04, 3.01, 3.08, 3.09, 3.10, 3.13], 0.87, 2.0, ["Mag 7", "MANGO", "AI Infrastructure"]),
  publicAsset("Amazon", "AMZN", "tech", 2_850_000_000_000, "E-commerce, AWS, advertising, logistics, Prime, and satellites.", "CompaniesMarketCap", "https://companiesmarketcap.com/amazon/marketcap/", "live public market cap", "Seattle, WA", 1994, "Sept 2018", [2.61, 2.64, 2.71, 2.74, 2.78, 2.79, 2.85], 2.19, 10.5, ["Mag 7", "Cloud"]),
  publicAsset("Silver", "XAG", "metal", 2_000_000_000_000, "The industrial precious metal. The value depends heavily on what above-ground stock definition is used.", "Silver Institute / spot estimate", "https://silverinstitute.org/research/world-silver-survey/", "estimated commodity value", "Global", "Antiquity", "2025", [1.82, 1.87, 1.91, 1.96, 2.04, 2.01, 2.0], -0.5, 12.0, ["Store of Value", "Industrial Metal"]),
  publicAsset("TSMC", "TSM", "tech", 2_082_000_000_000, "The foundry that manufactures the world's most advanced chips.", "CompaniesMarketCap", "https://companiesmarketcap.com/tsmc/marketcap/", "live public market cap", "Hsinchu, Taiwan", 1987, "2024", [1.94, 1.96, 2.01, 2.02, 2.03, 2.04, 2.08], 2.29, 7.7, ["AI Infrastructure", "Semiconductors"]),
  publicAsset("SpaceX", "SPCEX", "private", 2_000_000_000_000, "Rocket launch, Starlink, Starship, xAI, and the largest expected IPO in history.", "Bloomberg / Axios / Kiplinger reports", "https://www.kiplinger.com/investing/stocks/spacex-stock-should-you-buy-the-biggest-ipo-ever", "target IPO valuation", "Starbase, TX", 2002, "Feb 2026", [1.25, 1.25, 1.5, 1.75, 1.75, 2.0, 2.0], 0, 60.0, ["MANGO Adjacent", "Private AI", "Space"]),
  publicAsset("Broadcom", "AVGO", "tech", 1_977_000_000_000, "Networking chips, custom AI silicon, and enterprise software.", "CompaniesMarketCap", "https://companiesmarketcap.com/broadcom/marketcap/", "live public market cap", "Palo Alto, CA", 1991, "Dec 2024", [1.73, 1.77, 1.82, 1.88, 1.91, 1.95, 1.98], 1.63, 14.0, ["AI Infrastructure", "Semiconductors"]),
  publicAsset("Saudi Aramco", "2222.SR", "energy", 1_796_000_000_000, "The world's largest oil producer and one of history's most profitable companies.", "CompaniesMarketCap", "https://companiesmarketcap.com/saudi-aramco/marketcap/", "live public market cap", "Dhahran, Saudi Arabia", 1933, "Dec 2019", [1.78, 1.77, 1.79, 1.8, 1.79, 1.78, 1.8], 0.36, -4.0, ["Energy"]),
  publicAsset("Tesla", "TSLA", "consumer", 1_567_000_000_000, "Electric vehicles, batteries, autonomous driving, charging, and robotics.", "CompaniesMarketCap", "https://companiesmarketcap.com/tesla/marketcap/", "live public market cap", "Austin, TX", 2003, "Oct 2021", [1.42, 1.44, 1.49, 1.51, 1.52, 1.55, 1.57], 3.25, 9.0, ["Mag 7", "AI Infrastructure"]),
  publicAsset("Bitcoin", "BTC", "crypto", 1_556_000_000_000, "A fixed-supply digital monetary asset settled by a global proof-of-work network.", "CoinMarketCap", "https://coinmarketcap.com/currencies/bitcoin/", "live crypto market cap", "Decentralized", 2009, "Feb 2021", [1.53, 1.55, 1.62, 1.61, 1.58, 1.55, 1.56], 0.96, -2.0, ["Store of Value", "Crypto"]),
  publicAsset("Meta Platforms", "META", "tech", 1_535_000_000_000, "Social networks, messaging, open AI models, and virtual reality.", "CompaniesMarketCap", "https://companiesmarketcap.com/meta-platforms/marketcap/", "live public market cap", "Menlo Park, CA", 2004, "June 2021", [1.49, 1.51, 1.5, 1.54, 1.53, 1.54, 1.54], 0.41, 3.1, ["Mag 7", "AI Infrastructure"]),
  publicAsset("Samsung", "005930.KS", "tech", 1_211_000_000_000, "Memory, devices, displays, foundry capacity, and global electronics scale.", "CompaniesMarketCap", "https://companiesmarketcap.com/samsung/marketcap/", "live public market cap", "Suwon, South Korea", 1938, "May 2026", [1.08, 1.1, 1.13, 1.16, 1.19, 1.2, 1.21], 0.18, 12.0, ["Semiconductors", "AI Infrastructure"]),
  publicAsset("Walmart", "WMT", "retail", 1_043_000_000_000, "Global retail, grocery, marketplace, membership, logistics, and advertising.", "CompaniesMarketCap", "https://companiesmarketcap.com/walmart/marketcap/", "live public market cap", "Bentonville, AR", 1962, "Feb 2026", [0.95, 0.97, 0.99, 1.0, 1.01, 1.02, 1.04], 2.5, 9.8, ["Retail"]),
  publicAsset("Berkshire Hathaway", "BRK.B", "finance", 1_037_000_000_000, "Insurance, railroads, energy, operating businesses, and public equity holdings.", "CompaniesMarketCap", "https://companiesmarketcap.com/berkshire-hathaway/marketcap/", "live public market cap", "Omaha, NE", 1839, "Aug 2024", [1.02, 1.01, 1.03, 1.04, 1.04, 1.04, 1.04], 0.09, 1.5, ["Financial Compounder"]),
  publicAsset("OpenAI", "—", "private", 852_000_000_000, "The frontier AI company behind ChatGPT, Codex, Sora, and a major developer platform.", "OpenAI", "https://openai.com/index/accelerating-the-next-phase-ai/", "reported private valuation", "San Francisco, CA", 2015, "—", [0.73, 0.73, 0.78, 0.83, 0.85, 0.85, 0.85], 0, 16.7, ["MANGO", "Private AI", "Watchlist"], true),
  publicAsset("Anthropic", "—", "private", 900_000_000_000, "Enterprise-first frontier AI lab and Claude model developer.", "El País / May 2026 reports", "https://elpais.com/economia/2026-05-13/anthropic-desafia-a-openai-tambien-en-precio-negocia-una-nueva-ronda-con-una-valoracion-de-900000-millones.html", "reported funding negotiation", "San Francisco, CA", 2021, "—", [0.38, 0.38, 0.55, 0.7, 0.85, 0.9, 0.9], 0, 137.0, ["MANGO", "Private AI", "Watchlist"], true),
  publicAsset("Eli Lilly", "LLY", "health", 908_560_000_000, "Pharmaceutical giant powered by diabetes, obesity, and metabolic therapies.", "CompaniesMarketCap", "https://companiesmarketcap.com/eli-lilly/marketcap/", "live public market cap", "Indianapolis, IN", 1876, "2024", [0.92, 0.91, 0.9, 0.91, 0.9, 0.91, 0.91], 0.25, -5.0, ["Watchlist"]),
  publicAsset("JPMorgan Chase", "JPM", "finance", 809_150_000_000, "The largest United States bank by assets and a global financial infrastructure layer.", "CompaniesMarketCap", "https://companiesmarketcap.com/jp-morgan-chase/marketcap/", "live public market cap", "New York, NY", 1799, "2025", [0.78, 0.79, 0.79, 0.8, 0.79, 0.8, 0.81], 2.12, 4.5, ["Watchlist", "Financial"]),
  publicAsset("Visa", "V", "finance", 629_000_000_000, "The toll booth on global commerce and the world's largest payment network.", "CompaniesMarketCap", "https://companiesmarketcap.com/visa/marketcap/", "live public market cap", "San Francisco, CA", 1958, "2025", [0.64, 0.63, 0.63, 0.62, 0.63, 0.63, 0.63], 0.25, -2.0, ["Watchlist", "Payments"])
];

function publicAsset(name, ticker, sector, marketCap, lead, sourceName, sourceUrl, dataStatus, hq, founded, firstT, sparkline, change1d, change30d, groups, isPrivate = false) {
  return {
    name,
    ticker,
    sector,
    marketCap,
    lead,
    sourceName,
    sourceUrl,
    dataStatus,
    hq,
    founded,
    firstT,
    sparkline,
    change1d,
    change30d,
    groups,
    private: isPrivate || sector === "private"
  };
}

module.exports = async function handler(req, res) {
  res.setHeader("Cache-Control", `s-maxage=${HOUR}, stale-while-revalidate=${HOUR * 6}`);

  const updatedAt = new Date().toISOString();
  const assets = await hydrateFromApis(fallbackAssets);

  res.status(200).json({
    updatedAt,
    nextUpdateAt: new Date(Date.now() + HOUR * 1000).toISOString(),
    cacheSeconds: HOUR,
    mode: hasApiKeys() ? "api-with-fallback" : "curated-fallback",
    notes: [
      "Public-company rows can be refreshed from market-data APIs when keys are configured.",
      "Private companies use curated source-backed valuations or target valuations.",
      "Commodity rows are estimates based on above-ground stock methodology and spot-price assumptions."
    ],
    assets
  });
};

async function hydrateFromApis(assets) {
  let next = assets.map((asset) => ({ ...asset, updatedAt: FALLBACK_UPDATED_AT }));

  if (process.env.CMC_API_KEY) {
    next = await withBitcoin(next);
  }

  if (process.env.EODHD_API_KEY) {
    next = await withEodhdEquities(next);
  }

  return next.sort((a, b) => b.marketCap - a.marketCap);
}

function hasApiKeys() {
  return Boolean(process.env.CMC_API_KEY || process.env.EODHD_API_KEY || process.env.ALPHA_VANTAGE_API_KEY);
}

async function withBitcoin(assets) {
  try {
    const url = "https://pro-api.coinmarketcap.com/v3/cryptocurrency/quotes/latest?id=1&convert=USD";
    const response = await fetch(url, { headers: { "X-CMC_PRO_API_KEY": process.env.CMC_API_KEY } });
    if (!response.ok) return assets;
    const json = await response.json();
    const quote = json?.data?.["1"]?.quote?.USD;
    if (!quote?.market_cap) return assets;

    return assets.map((asset) => asset.name === "Bitcoin" ? {
      ...asset,
      marketCap: Math.round(quote.market_cap),
      change1d: round(quote.percent_change_24h),
      change30d: round(quote.percent_change_30d),
      updatedAt: json.status?.timestamp || new Date().toISOString(),
      dataStatus: "live crypto market cap"
    } : asset);
  } catch {
    return assets;
  }
}

async function withEodhdEquities(assets) {
  const symbols = {
    NVDA: "NVDA.US",
    GOOGL: "GOOGL.US",
    AAPL: "AAPL.US",
    MSFT: "MSFT.US",
    AMZN: "AMZN.US",
    TSM: "TSM.US",
    AVGO: "AVGO.US",
    TSLA: "TSLA.US",
    META: "META.US",
    WMT: "WMT.US",
    "BRK.B": "BRK-B.US",
    LLY: "LLY.US",
    JPM: "JPM.US",
    V: "V.US",
    "005930.KS": "005930.KO",
    "2222.SR": "2222.SR"
  };

  const updates = await Promise.all(Object.entries(symbols).map(async ([ticker, symbol]) => {
    try {
      const fundamentalUrl = `https://eodhd.com/api/fundamentals/${symbol}?api_token=${process.env.EODHD_API_KEY}&fmt=json`;
      const eodUrl = `https://eodhd.com/api/eod/${symbol}?api_token=${process.env.EODHD_API_KEY}&fmt=json&period=d&order=d&limit=31`;
      const [fundamentalResponse, eodResponse] = await Promise.all([fetch(fundamentalUrl), fetch(eodUrl)]);
      if (!fundamentalResponse.ok) return null;
      const fundamentals = await fundamentalResponse.json();
      const marketCap = Number(fundamentals?.Highlights?.MarketCapitalization);
      const eod = eodResponse.ok ? await eodResponse.json() : [];
      if (!marketCap) return null;
      const sparkline = Array.isArray(eod) && eod.length ? eod.slice(-7).map((day) => Number(day.adjusted_close || day.close)).filter(Boolean) : undefined;
      const change1d = priceChange(eod, 1);
      const change30d = priceChange(eod, 30);
      return { ticker, marketCap, sparkline, change1d, change30d, updatedAt: new Date().toISOString() };
    } catch {
      return null;
    }
  }));

  const updateMap = new Map(updates.filter(Boolean).map((update) => [update.ticker, update]));

  return assets.map((asset) => {
    const update = updateMap.get(asset.ticker);
    if (!update) return asset;
    return {
      ...asset,
      marketCap: update.marketCap,
      sparkline: update.sparkline || asset.sparkline,
      change1d: update.change1d ?? asset.change1d,
      change30d: update.change30d ?? asset.change30d,
      updatedAt: update.updatedAt,
      dataStatus: "live public market cap"
    };
  });
}

function priceChange(series, days) {
  if (!Array.isArray(series) || series.length < days + 1) return undefined;
  const latest = Number(series[series.length - 1]?.adjusted_close || series[series.length - 1]?.close);
  const previous = Number(series[Math.max(0, series.length - 1 - days)]?.adjusted_close || series[Math.max(0, series.length - 1 - days)]?.close);
  if (!latest || !previous) return undefined;
  return round(((latest - previous) / previous) * 100);
}

function round(value) {
  return Number.isFinite(value) ? Math.round(value * 100) / 100 : undefined;
}
