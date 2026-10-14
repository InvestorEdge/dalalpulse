import { MarketIndex, IndianStock } from '../types/investor';

const SYMBOL_MAP: Record<string, string> = {
  'TATAMOTORS': 'TMCV.NS',
  'TMCV': 'TMCV.NS',
  'DIXON': 'DIXON.NS',
  'HAL': 'HAL.NS',
  'TRENT': 'TRENT.NS',
  'HDFCBANK': 'HDFCBANK.NS',
  'KPITTECH': 'KPITTECH.NS',
  'RELIANCE': 'RELIANCE.NS',
  'TCS': 'TCS.NS',
  'INFY': 'INFY.NS',
  'ICICIBANK': 'ICICIBANK.NS',
  'SBIN': 'SBIN.NS',
  'BHARTIARTL': 'BHARTIARTL.NS',
  'ITC': 'ITC.NS',
  'LT': 'LT.NS',
  'BEL': 'BEL.NS',
  'SUNPHARMA': 'SUNPHARMA.NS',
  'MARUTI': 'MARUTI.NS',
  'TATAPOWER': 'TATAPOWER.NS',
  'BAJFINANCE': 'BAJFINANCE.NS',
  'ZOMATO': 'ZOMATO.NS'
};

const INDEX_MAP: Record<string, string> = {
  'NIFTY 50': '^NSEI',
  'SENSEX': '^BSESN',
  'NIFTY BANK': '^NSEBANK',
  'NIFTY IT': '^CNXIT',
  'NIFTY AUTO': '^CNXAUTO',
  'INDIA VIX': '^INDIAVIX'
};

export interface LiveQuoteResult {
  symbol: string;
  price: number;
  changeRs: number;
  changePct: number;
  high52w?: number;
  low52w?: number;
  dayHigh?: number;
  dayLow?: number;
  timestamp: number;
}

// Check if Indian market is currently open (Mon-Fri 9:15 AM - 3:30 PM IST)
export function isIndianMarketOpen(): { isOpen: boolean; statusText: string } {
  const now = new Date();
  const utc = now.getTime() + (now.getTimezoneOffset() * 60000);
  const ist = new Date(utc + (3600000 * 5.5));
  
  const day = ist.getDay(); // 0 is Sun, 6 is Sat
  const hours = ist.getHours();
  const minutes = ist.getMinutes();
  const totalMins = (hours * 60) + minutes;

  const marketOpenMins = (9 * 60) + 15; // 9:15 AM
  const marketCloseMins = (15 * 60) + 30; // 3:30 PM

  if (day === 0 || day === 6) {
    return { isOpen: false, statusText: 'Market Closed (Weekend)' };
  }

  if (totalMins >= marketOpenMins && totalMins <= marketCloseMins) {
    return { isOpen: true, statusText: 'Market Open (Active Trading 9:15 AM - 3:30 PM IST)' };
  }

  if (totalMins < marketOpenMins && totalMins >= (9 * 60)) {
    return { isOpen: false, statusText: 'Pre-Market Session (9:00 - 9:15 AM IST)' };
  }

  return { isOpen: false, statusText: 'Market Closed (Official Closing LTP Settled)' };
}

// Fetch single quote with accurate change and percentage parsing directly from exchange feed
export async function fetchLiveQuote(rawSymbol: string): Promise<LiveQuoteResult | null> {
  const queryTicker = SYMBOL_MAP[rawSymbol.toUpperCase()] || (rawSymbol.includes('.') || rawSymbol.startsWith('^') ? rawSymbol : `${rawSymbol.toUpperCase()}.NS`);

  try {
    const res = await fetch(`/api/yahoo/v8/finance/chart/${encodeURIComponent(queryTicker)}?interval=1d`);
    if (!res.ok) return null;
    const data = await res.json();
    const meta = data.chart?.result?.[0]?.meta;

    if (meta && typeof meta.regularMarketPrice === 'number') {
      const price = Number(meta.regularMarketPrice.toFixed(2));
      
      // Real change in INR / Index points
      let changeRs = 0;
      if (typeof meta.fulldayChange === 'number') {
        changeRs = Number(meta.fulldayChange.toFixed(2));
      } else if (typeof meta.regularMarketChange === 'number') {
        changeRs = Number(meta.regularMarketChange.toFixed(2));
      } else if (typeof meta.chartPreviousClose === 'number') {
        changeRs = Number((price - meta.chartPreviousClose).toFixed(2));
      }

      // Real percentage change
      let changePct = 0;
      if (typeof meta.regularMarketChangePercent === 'number') {
        changePct = Number(meta.regularMarketChangePercent.toFixed(2));
      } else if (typeof meta.fulldayChangePercent === 'number') {
        changePct = Number(meta.fulldayChangePercent.toFixed(2));
      } else {
        const prevPrice = price - changeRs;
        changePct = prevPrice > 0 ? Number(((changeRs / prevPrice) * 100).toFixed(2)) : 0;
      }

      return {
        symbol: rawSymbol,
        price,
        changeRs,
        changePct,
        high52w: meta.fiftyTwoWeekHigh,
        low52w: meta.fiftyTwoWeekLow,
        dayHigh: meta.regularMarketDayHigh,
        dayLow: meta.regularMarketDayLow,
        timestamp: Date.now()
      };
    }
  } catch (err) {
    console.warn(`Error fetching live quote for ${rawSymbol}:`, err);
  }

  return null;
}

// Generate realistic live micro-tick fluctuation for simulation mode
export function simulateMarketTick(val: number, maxSpreadPct: number = 0.12): { newPrice: number; diff: number; diffPct: number } {
  const pctDelta = (Math.random() * 2 - 0.98) * (maxSpreadPct / 100);
  const diff = val * pctDelta;
  const newPrice = Number((val + diff).toFixed(2));
  const diffPct = Number((pctDelta * 100).toFixed(2));
  return { newPrice, diff, diffPct };
}

// Fetch all live market indices
export async function fetchAllLiveIndices(currentIndices: MarketIndex[]): Promise<MarketIndex[]> {
  const updated = await Promise.all(
    currentIndices.map(async (idx) => {
      const ticker = INDEX_MAP[idx.name] || idx.name;
      const quote = await fetchLiveQuote(ticker);
      if (quote) {
        return {
          ...idx,
          value: quote.price,
          change: quote.changeRs,
          changePct: quote.changePct
        };
      }
      return idx;
    })
  );

  return updated;
}

// Fetch live quotes for an array of stocks
export async function fetchAllLiveStocks(currentStocks: IndianStock[]): Promise<IndianStock[]> {
  const updated = await Promise.all(
    currentStocks.map(async (stock) => {
      const quote = await fetchLiveQuote(stock.symbol);
      if (quote) {
        const oldPrice = stock.cmp || quote.price;
        const priceRatio = oldPrice > 0 ? quote.price / oldPrice : 1;
        const newMcapCr = Math.round(stock.marketCapCr * priceRatio);

        return {
          ...stock,
          cmp: quote.price,
          changeRs: quote.changeRs,
          changePct: quote.changePct,
          marketCapCr: newMcapCr > 0 ? newMcapCr : stock.marketCapCr,
          high52w: quote.high52w ? Math.max(stock.high52w, quote.high52w) : stock.high52w,
          low52w: quote.low52w ? Math.min(stock.low52w, quote.low52w) : stock.low52w
        };
      }
      return stock;
    })
  );

  return updated;
}
