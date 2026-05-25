const DEFAULT_UPDATED_AT = "2026-05-20T21:30:00.000Z";

const fallbackAssets = [
  asset("Gold", "XAU", "metal", 31_000_000_000_000, "The world's original store of value.", "World Gold Council", "https://www.gold.org/goldhub/research/market-primer/gold-market-primer-market-size-and-structure", "estimated commodity value", "Global", "Antiquity", "1980s", [30.5, 30.9, 31.2, 31.0, 31.4, 31.1, 31.0], 0.2, 3.8, ["Store of Value"]),
  asset("NVIDIA", "NVDA", "tech", 5_412_000_000_000, "The picks and shovels of the AI infrastructure buildout.", "CompaniesMarketCap", "https://companiesmarketcap.com/nvidia/marketcap/", "live public market cap", "Santa Clara, CA", 1993, "May 2023", [5.04, 5.11, 5.19, 5.22, 5.31, 5.34, 5.41], 1.3, 16.5, ["Mag 7", "MANGO", "AI Infrastructure"]),
  asset("Alphabet", "GOOGL", "tech", 4_663_000_000_000, "Search, ads, cloud, AI models, autonomy, and quantum research.", "CompaniesMarketCap", "https://companiesmarketcap.com/alphabet-google/marketcap/", "live public market cap", "Mountain View, CA", 1998, "Sept 2021", [4.31, 4.39, 4.42, 4.48, 4.55, 4.62, 4.66], 0, 8.4, ["Mag 7", "MANGO", "AI Infrastructure"]),
  asset("Apple", "AAPL", "tech", 4_439_000_000_000, "The most profitable consumer technology brand ever built.", "CompaniesMarketCap", "https://companiesmarketcap.com/apple/marketcap/", "live public market cap", "Cupertino, CA", 1976, "Aug 2018", [4.22, 4.18, 4.26, 4.31, 4.34, 4.39, 4.44], 1.1, 5.2, ["Mag 7"]),
  asset("Microsoft", "MSFT", "tech", 3_127_000_000_000, "Azure, Office, Windows, GitHub, LinkedIn, and the OpenAI partnership.", "CompaniesMarketCap", "https://companiesmarketcap.com/microsoft/marketcap/", "live public market cap", "Redmond, WA", 1975, "April 2019", [3.02, 3.04, 3.01, 3.08, 3.09, 3.10, 3.13], 0.87, 2.0, ["Mag 7", "MANGO", "AI Infrastructure"]),
  asset("Amazon", "AMZN", "tech", 2_850_000_000_000, "E-commerce, AWS, advertising, logistics, Prime, and satellites.", "CompaniesMarketCap", "https://companiesmarketcap.com/amazon/marketcap/", "live public market cap", "Seattle, WA", 1994, "Sept 2018", [2.61, 2.64, 2.71, 2.74, 2.78, 2.79, 2.85], 2.19, 10.5, ["Mag 7", "Cloud"]),
  asset("Silver", "XAG", "metal", 2_000_000_000_000, "The industrial precious metal. The value depends heavily on what above-ground stock definition is used.", "Silver Institute / spot estimate", "https://silverinstitute.org/research/world-silver-survey/", "estimated commodity value", "Global", "Antiquity", "2025", [1.82, 1.87, 1.91, 1.96, 2.04, 2.01, 2.0], -0.5, 12.0, ["Store of Value", "Industrial Metal"]),
  asset("TSMC", "TSM", "tech", 2_082_000_000_000, "The foundry that manufactures the world's most advanced chips.", "CompaniesMarketCap", "https://companiesmarketcap.com/tsmc/marketcap/", "live public market cap", "Hsinchu, Taiwan", 1987, "2024", [1.94, 1.96, 2.01, 2.02, 2.03, 2.04, 2.08], 2.29, 7.7, ["AI Infrastructure", "Semiconductors"]),
  asset("SpaceX", "SPCEX", "private", 2_000_000_000_000, "Rocket launch, Starlink, Starship, xAI, and the largest expected IPO in history.", "Bloomberg / Axios / Kiplinger reports", "https://www.kiplinger.com/investing/stocks/spacex-stock-should-you-buy-the-biggest-ipo-ever", "target IPO valuation", "Starbase, TX", 2002, "Feb 2026", [1.25, 1.25, 1.5, 1.75, 1.75, 2.0, 2.0], 0, 60, ["MANGO Adjacent", "Private AI", "Space"], true),
  asset("Broadcom", "AVGO", "tech", 1_977_000_000_000, "Networking chips, custom AI silicon, and enterprise software.", "CompaniesMarketCap", "https://companiesmarketcap.com/broadcom/marketcap/", "live public market cap", "Palo Alto, CA", 1991, "Dec 2024", [1.73, 1.77, 1.82, 1.88, 1.91, 1.95, 1.98], 1.63, 14, ["AI Infrastructure", "Semiconductors"]),
  asset("Saudi Aramco", "2222.SR", "energy", 1_796_000_000_000, "The world's largest oil producer and one of history's most profitable companies.", "CompaniesMarketCap", "https://companiesmarketcap.com/saudi-aramco/marketcap/", "live public market cap", "Dhahran, Saudi Arabia", 1933, "Dec 2019", [1.78, 1.77, 1.79, 1.8, 1.79, 1.78, 1.8], 0.36, -4, ["Energy"]),
  asset("Tesla", "TSLA", "consumer", 1_567_000_000_000, "Electric vehicles, batteries, autonomous driving, charging, and robotics.", "CompaniesMarketCap", "https://companiesmarketcap.com/tesla/marketcap/", "live public market cap", "Austin, TX", 2003, "Oct 2021", [1.42, 1.44, 1.49, 1.51, 1.52, 1.55, 1.57], 3.25, 9, ["Mag 7", "AI Infrastructure"]),
  asset("Bitcoin", "BTC", "crypto", 1_556_000_000_000, "A fixed-supply digital monetary asset settled by a global proof-of-work network.", "CoinMarketCap", "https://coinmarketcap.com/currencies/bitcoin/", "live crypto market cap", "Decentralized", 2009, "Feb 2021", [1.53, 1.55, 1.62, 1.61, 1.58, 1.55, 1.56], 0.96, -2, ["Store of Value", "Crypto"]),
  asset("Meta Platforms", "META", "tech", 1_535_000_000_000, "Social networks, messaging, open AI models, and virtual reality.", "CompaniesMarketCap", "https://companiesmarketcap.com/meta-platforms/marketcap/", "live public market cap", "Menlo Park, CA", 2004, "June 2021", [1.49, 1.51, 1.5, 1.54, 1.53, 1.54, 1.54], 0.41, 3.1, ["Mag 7", "AI Infrastructure"]),
  asset("Samsung", "005930.KS", "tech", 1_211_000_000_000, "Memory, devices, displays, foundry capacity, and global electronics scale.", "CompaniesMarketCap", "https://companiesmarketcap.com/samsung/marketcap/", "live public market cap", "Suwon, South Korea", 1938, "May 2026", [1.08, 1.1, 1.13, 1.16, 1.19, 1.2, 1.21], 0.18, 12, ["Semiconductors", "AI Infrastructure"]),
  asset("Walmart", "WMT", "retail", 1_043_000_000_000, "Global retail, grocery, marketplace, membership, logistics, and advertising.", "CompaniesMarketCap", "https://companiesmarketcap.com/walmart/marketcap/", "live public market cap", "Bentonville, AR", 1962, "Feb 2026", [0.95, 0.97, 0.99, 1.0, 1.01, 1.02, 1.04], 2.5, 9.8, ["Retail"]),
  asset("Berkshire Hathaway", "BRK.B", "finance", 1_037_000_000_000, "Insurance, railroads, energy, operating businesses, and public equity holdings.", "CompaniesMarketCap", "https://companiesmarketcap.com/berkshire-hathaway/marketcap/", "live public market cap", "Omaha, NE", 1839, "Aug 2024", [1.02, 1.01, 1.03, 1.04, 1.04, 1.04, 1.04], 0.09, 1.5, ["Financial Compounder"]),
  asset("OpenAI", "—", "private", 852_000_000_000, "The frontier AI company behind ChatGPT, Codex, Sora, and a major developer platform.", "OpenAI", "https://openai.com/index/accelerating-the-next-phase-ai/", "reported private valuation", "San Francisco, CA", 2015, "—", [0.73, 0.73, 0.78, 0.83, 0.85, 0.85, 0.85], 0, 16.7, ["MANGO", "Private AI", "Watchlist"], true),
  asset("Anthropic", "—", "private", 900_000_000_000, "Enterprise-first frontier AI lab and Claude model developer.", "El País / May 2026 reports", "https://elpais.com/economia/2026-05-13/anthropic-desafia-a-openai-tambien-en-precio-negocia-una-nueva-ronda-con-una-valoracion-de-900000-millones.html", "reported funding negotiation", "San Francisco, CA", 2021, "—", [0.38, 0.38, 0.55, 0.7, 0.85, 0.9, 0.9], 0, 137, ["MANGO", "Private AI", "Watchlist"], true),
  asset("Eli Lilly", "LLY", "health", 908_560_000_000, "Pharmaceutical giant powered by diabetes, obesity, and metabolic therapies.", "CompaniesMarketCap", "https://companiesmarketcap.com/eli-lilly/marketcap/", "live public market cap", "Indianapolis, IN", 1876, "2024", [0.92, 0.91, 0.9, 0.91, 0.9, 0.91, 0.91], 0.25, -5, ["Watchlist"]),
  asset("JPMorgan Chase", "JPM", "finance", 809_150_000_000, "The largest United States bank by assets and a global financial infrastructure layer.", "CompaniesMarketCap", "https://companiesmarketcap.com/jp-morgan-chase/marketcap/", "live public market cap", "New York, NY", 1799, "2025", [0.78, 0.79, 0.79, 0.8, 0.79, 0.8, 0.81], 2.12, 4.5, ["Watchlist", "Financial"]),
  asset("Visa", "V", "finance", 629_000_000_000, "The toll booth on global commerce and the world's largest payment network.", "CompaniesMarketCap", "https://companiesmarketcap.com/visa/marketcap/", "live public market cap", "San Francisco, CA", 1958, "2025", [0.64, 0.63, 0.63, 0.62, 0.63, 0.63, 0.63], 0.25, -2, ["Watchlist", "Payments"])
];

function asset(name, ticker, sector, marketCap, lead, sourceName, sourceUrl, dataStatus, hq, founded, firstT, sparkline, change1d, change30d, groups, isPrivate = false) {
  return { name, ticker, sector, marketCap, lead, sourceName, sourceUrl, dataStatus, hq, founded, firstT, sparkline, change1d, change30d, groups, private: isPrivate || sector === "private", updatedAt: DEFAULT_UPDATED_AT };
}

let assets = fallbackAssets;
let activeFilter = "all";
let activeGroup = "all";

const listEl = document.querySelector("#assetList");
const filterGroup = document.querySelector("#filterGroup");
const sortSelect = document.querySelector("#sortSelect");
const timelineEl = document.querySelector("#timelineList");
const statusEl = document.querySelector("#dataStatus");
const groupEl = document.querySelector("#groupFilter");

async function init() {
  const data = await loadRegistry();
  assets = data.assets.map((item) => ({ ...item, updatedAt: item.updatedAt || data.updatedAt }));
  renderGroupFilters();
  renderStats(data);
  renderRegistry();
  renderTimeline();
  renderStructuredData(data);
}

async function loadRegistry() {
  try {
    const response = await fetch("/api/registry", { cache: "no-store" });
    if (!response.ok) throw new Error("API unavailable");
    return await response.json();
  } catch {
    return {
      updatedAt: DEFAULT_UPDATED_AT,
      nextUpdateAt: null,
      mode: "static-fallback",
      cacheSeconds: 3600,
      notes: ["Static fallback loaded. Vercel API route will refresh hourly when deployed."],
      assets: fallbackAssets
    };
  }
}

function renderGroupFilters() {
  const groups = [...new Set(assets.flatMap((item) => item.groups || []))].sort();
  groupEl.innerHTML = [
    `<button class="filter-btn active" type="button" data-group="all">All groups</button>`,
    ...groups.map((group) => `<button class="filter-btn" type="button" data-group="${escapeAttr(group)}">${group}</button>`)
  ].join("");
}

function sectorLabel(sector) {
  return {
    tech: "Technology",
    metal: "Precious metal",
    crypto: "Cryptoasset",
    finance: "Financial",
    energy: "Energy",
    health: "Healthcare",
    consumer: "Consumer",
    retail: "Retail",
    private: "Private"
  }[sector] || sector;
}

function sortedAssets() {
  const data = assets.filter((item) => {
    const sectorMatch = activeFilter === "all" || item.sector === activeFilter;
    const groupMatch = activeGroup === "all" || item.groups?.includes(activeGroup);
    return sectorMatch && groupMatch;
  });
  const sort = sortSelect.value;

  return [...data].sort((a, b) => {
    if (sort === "cap-asc") return a.marketCap - b.marketCap;
    if (sort === "alpha") return a.name.localeCompare(b.name);
    if (sort === "founded") return foundedValue(a) - foundedValue(b);
    if (sort === "firstT") return firstTValue(a) - firstTValue(b);
    if (sort === "change-1d") return (b.change1d ?? -Infinity) - (a.change1d ?? -Infinity);
    if (sort === "change-30d") return (b.change30d ?? -Infinity) - (a.change30d ?? -Infinity);
    return b.marketCap - a.marketCap;
  });
}

function foundedValue(item) {
  return typeof item.founded === "number" ? item.founded : 0;
}

function firstTValue(item) {
  if (item.firstT === "—") return 9999;
  const year = String(item.firstT).match(/\d{4}|\d{2}s/);
  if (!year) return 0;
  if (year[0] === "1980s") return 1980;
  return Number(year[0]);
}

function renderRegistry() {
  const data = sortedAssets();
  const inClub = data.filter((item) => item.marketCap >= 1_000_000_000_000);
  const watchlist = data.filter((item) => item.marketCap < 1_000_000_000_000);
  listEl.innerHTML = "";

  inClub.forEach((item, index) => listEl.appendChild(createAssetRow(item, index + 1)));

  if (watchlist.length) {
    const divider = document.createElement("div");
    divider.className = "watch-divider";
    divider.innerHTML = `
      <div aria-hidden="true">↓</div>
      <div>
        <strong>Approaching $1T</strong>
        <p>Assets below the threshold but close enough to track. Private valuations are source-backed estimates or negotiations, not live public market caps.</p>
      </div>
      <div></div>
    `;
    listEl.appendChild(divider);
    watchlist.forEach((item, index) => listEl.appendChild(createAssetRow(item, inClub.length + index + 1)));
  }
}

function createAssetRow(item, rank) {
  const row = document.createElement("article");
  row.className = `asset-row${item.marketCap < 1_000_000_000_000 ? " is-watch" : ""}`;
  row.setAttribute("aria-label", `${item.name}, value ${formatPlainCap(item.marketCap)}`);
  row.innerHTML = `
    <div class="asset-cell asset-rank">${String(rank).padStart(2, "0")}</div>
    <div class="asset-cell">
      <div class="asset-name-line">
        <h3>${item.name}</h3>
        ${item.ticker !== "—" ? `<span class="asset-badge">${item.ticker}</span>` : ""}
        ${item.private ? `<span class="asset-badge asset-private">Private</span>` : ""}
      </div>
      <p class="asset-summary">${item.lead}</p>
      <div class="asset-meta">
        <span>Founded <b>${item.founded}</b></span>
        <span>HQ <b>${item.hq}</b></span>
        <span>Crossed $1T <b>${item.firstT}</b></span>
        <span class="sector-pill ${item.sector}">${sectorLabel(item.sector)}</span>
      </div>
      <div class="group-tags">${(item.groups || []).map((group) => `<span>${group}</span>`).join("")}</div>
    </div>
    <div class="asset-cell asset-value">
      <span class="cap-number">${formatCap(item.marketCap)}</span>
      ${sparklineSvg(item.sparkline)}
      <div class="change-row">
        ${changePill("1D", item.change1d)}
        ${changePill("30D", item.change30d)}
      </div>
      <a class="asset-source" href="${item.sourceUrl}" target="_blank" rel="noopener">${item.dataStatus} · ${item.sourceName}</a>
    </div>
  `;
  return row;
}

function changePill(label, value) {
  const className = value > 0 ? "pos" : value < 0 ? "neg" : "flat";
  const sign = value > 0 ? "+" : "";
  const display = Number.isFinite(value) ? `${sign}${value.toFixed(Math.abs(value) < 10 ? 2 : 1)}%` : "n/a";
  return `<span class="change-pill ${className}">${label} ${display}</span>`;
}

function sparklineSvg(values = []) {
  if (!values.length) return `<div class="sparkline empty" aria-hidden="true"></div>`;
  const min = Math.min(...values);
  const max = Math.max(...values);
  const range = max - min || 1;
  const points = values.map((value, index) => {
    const x = (index / (values.length - 1 || 1)) * 120;
    const y = 34 - ((value - min) / range) * 28;
    return `${x.toFixed(1)},${y.toFixed(1)}`;
  }).join(" ");
  const up = values[values.length - 1] >= values[0];
  return `
    <svg class="sparkline ${up ? "up" : "down"}" viewBox="0 0 120 40" role="img" aria-label="Recent value trend">
      <polyline points="${points}" fill="none" stroke="currentColor" stroke-width="3" vector-effect="non-scaling-stroke"></polyline>
    </svg>
  `;
}

function renderTimeline() {
  const timeline = assets
    .filter((item) => item.marketCap >= 1_000_000_000_000 && item.firstT !== "—")
    .sort((a, b) => firstTValue(a) - firstTValue(b));

  timelineEl.innerHTML = timeline.map((item) => `
    <article class="timeline-item">
      <span class="timeline-year">${item.firstT}</span>
      <strong>${item.name}</strong>
      <small>${sectorLabel(item.sector)} · ${formatPlainCap(item.marketCap)}</small>
    </article>
  `).join("");
}

function renderStats(data) {
  const members = assets.filter((item) => item.marketCap >= 1_000_000_000_000);
  const combined = members.reduce((sum, item) => sum + item.marketCap, 0);
  document.querySelector("#statMembers").textContent = members.length;
  document.querySelector("#statCap").textContent = formatPlainCap(combined);
  statusEl.innerHTML = `
    <span>Data mode</span>
    <b>${data.mode}</b>
    <span>Updated</span>
    <b>${formatTimestamp(data.updatedAt)}</b>
    <span>Next refresh</span>
    <b>${data.nextUpdateAt ? formatTimestamp(data.nextUpdateAt) : "on deploy API"}</b>
  `;
}

function renderStructuredData(data) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Dataset",
    name: "Trillion Market Cap Registry",
    description: "A source-backed registry of assets worth one trillion United States dollars or more.",
    url: "https://trillionmarketcap.com/",
    dateModified: data.updatedAt,
    temporalCoverage: data.updatedAt.slice(0, 10),
    creator: { "@type": "Organization", name: "Trillion Market Cap" },
    hasPart: {
      "@type": "ItemList",
      itemListElement: assets.filter((item) => item.marketCap >= 1_000_000_000_000).map((item, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: item.name,
        description: `${item.name}: ${formatPlainCap(item.marketCap)}. ${item.dataStatus}. Source: ${item.sourceName}.`
      }))
    }
  };

  document.querySelector("#structuredData").textContent = JSON.stringify(structuredData);
}

function formatCap(value) {
  if (value < 1_000_000_000_000) return `$${Math.round(value / 1_000_000_000)}<small>B</small>`;
  const trillions = value / 1_000_000_000_000;
  const [whole, decimal] = trillions.toFixed(2).split(".");
  return `$${whole}<small>.${decimal}T</small>`;
}

function formatPlainCap(value) {
  if (value < 1_000_000_000_000) return `$${Math.round(value / 1_000_000_000)}B`;
  return `$${(value / 1_000_000_000_000).toFixed(2)}T`;
}

function formatTimestamp(value) {
  return new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "numeric",
    hour: "numeric",
    minute: "2-digit",
    timeZoneName: "short"
  }).format(new Date(value));
}

function escapeAttr(value) {
  return String(value).replace(/"/g, "&quot;");
}

filterGroup.addEventListener("click", (event) => {
  const button = event.target.closest(".filter-btn");
  if (!button) return;
  filterGroup.querySelectorAll(".filter-btn").forEach((item) => item.classList.remove("active"));
  button.classList.add("active");
  activeFilter = button.dataset.filter;
  renderRegistry();
});

groupEl.addEventListener("click", (event) => {
  const button = event.target.closest(".filter-btn");
  if (!button) return;
  groupEl.querySelectorAll(".filter-btn").forEach((item) => item.classList.remove("active"));
  button.classList.add("active");
  activeGroup = button.dataset.group;
  renderRegistry();
});

sortSelect.addEventListener("change", renderRegistry);

init();
