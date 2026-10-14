# DalalPulse — Indian Stock Market (NSE & BSE) Live Investor Relations & Earnings Hub

**DalalPulse** is an institutional-grade equities intelligence platform tailored specifically for the **Indian Stock Market (NSE & BSE)** featuring **Real-Time Live Market Data Syncing**. It enables retail investors, HNIs, fund managers, and equity research analysts to track live market prices, audited quarterly earnings, management concall guidance, SEBI LODR disclosures, order books, and fundamental ratios in **₹ Crores**.

---

## ⚡ Live Market Data Features

### 1. 🔴 Real-Time NSE & BSE Live Stream
- **Benchmark Indices Streamed Live**:
  - **NIFTY 50** (`^NSEI`)
  - **BSE SENSEX** (`^BSESN`)
  - **NIFTY BANK** (`^NSEBANK`)
  - **NIFTY IT** (`^CNXIT`)
  - **INDIA VIX** (`^INDIAVIX`)
- **Direct Live Stock Quotes**:
  - Live CMP (Current Market Price), Day's Gain/Loss (₹ and %), 52-Week High & Low.
  - Dynamically updates market capitalization in **₹ Crores** in real time as stock prices move.
  - Supported symbols include: `TMCV.NS` (Tata Motors), `DIXON.NS` (Dixon), `HAL.NS` (HAL), `TRENT.NS` (Trent), `HDFCBANK.NS` (HDFC Bank), `KPITTECH.NS` (KPIT Tech), `RELIANCE.NS`, `TCS.NS`, `INFY.NS`, and any newly added Indian ticker!

### 2. ⚡ Live Auto-Refresh & Manual Sync Controls
- **Auto-Sync Engine (15s)**: Background timer that periodically fetches the latest market ticks from the exchanges.
- **⚡ "Sync Live" Button**: Instantly refresh all prices and indices with one click.
- **Timestamp Tracker**: Shows precise IST sync time (e.g. `18:45:10 IST`).
- **Pulsing Live Indicator**: Visual real-time indicator on all stock cards and the top ticker bar.

---

## 🌟 Indian Stock Market Specific Features

### 1. 🇮🇳 Native Indian Financial Scale & Currency
- All metrics formatted in the Indian numbering system: **₹ Crores (Cr)**, **₹ Lakhs (L)**, and **Rupees (₹)**.
- Covers **Large-Cap**, **Mid-Cap**, and **Small-Cap** Indian companies across key sectors.

### 2. 📑 Audited Quarterly Earnings & SEBI LODR Filings Feed
- **Quarterly Results**: Revenue from Operations, Operating EBITDA, PAT (Net Profit), EBITDA Margins, and EPS in ₹.
- **SEBI LODR Regulation 30 Disclosures**: Demergers, large order wins, factory commissioning.
- **Official Exchange Documents**: Investor Presentations, Concall Transcripts, and Audited Financial Results.

### 3. 🎙️ Concall Guidance & Management Outlook Hub
- **Forward FY Revenue & Margin Guidance** from management.
- **Confirmed Order Inflows & Capex** (e.g. ₹26,000 Cr contract for HAL; ₹450 Cr display assembly for Dixon).
- **Input Cost & Margin Headwinds** (raw material inflation, foreign exchange impact).

### 4. 📊 Deep-Dive Equities Research & Valuation Modals
- **52-Week Range Band**: Visual gauge showing where the stock is trading between its 52-week Low and 52-week High.
- **Fundamental Valuation**: Stock P/E vs. Industry P/E, P/B Ratio, ROCE %, ROE %, Dividend Yield %, and Debt-to-Equity.
- **Shareholding Pattern Tracker**: Visual breakdown of **Promoter Group**, **FII (Foreign Institutional Investors)**, **DII (Mutual Funds, LIC)**, and **Public/Retail**.
- **Interactive Recharts Graphs**: 6-quarter revenue, EBITDA, and PAT progression.

### 5. ⚖️ Peer Valuation & Benchmark Matrix
- Side-by-side comparison table sortable by Market Cap, CMP, P/E vs Industry, ROCE, ROE, Qtr PAT, and Dividend Yield.

### 6. ✍️ Company IR / Corporate Announcement Desk
- Role switcher between **Investor / Analyst Mode** and **Company IR / Filing Desk**.
- Add custom corporate updates, audited quarterly earnings, concall guidance, and new stock additions.

### 7. 📄 Institutional Research Memo & LP Report
- One-click printable memo for fund managers, family offices, or angel networks.
- Includes **Print / Save as PDF** and **Copy Markdown**.

### 8. 💾 Offline-First Local Persistence
- All custom stock updates, newly added NSE/BSE stocks, and watchlists persist in browser `localStorage`.
- Includes a **Reset to Official Data** button in the top navigation.

---

## 🚀 Running the Platform

### Start Development Server
```bash
npm run dev
```
Open **[http://127.0.0.1:5173/](http://127.0.0.1:5173/)** in your browser.

### Production Build
```bash
npm run build
```
