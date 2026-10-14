import { IndianStock, StockUpdate, MarketIndex, InstitutionalFlowDay } from '../types/investor';

export const INDIAN_MARKET_INDICES: MarketIndex[] = [
  { name: 'NIFTY 50', value: 22622.70, change: -99.25, changePct: -0.44 },
  { name: 'SENSEX', value: 72781.89, change: -251.89, changePct: -0.35 },
  { name: 'NIFTY BANK', value: 55316.00, change: -165.05, changePct: -0.30 },
  { name: 'NIFTY IT', value: 30171.00, change: 340.90, changePct: 1.14 },
  { name: 'NIFTY AUTO', value: 25156.75, change: -235.10, changePct: -0.93 },
  { name: 'INDIA VIX', value: 14.63, change: 0.51, changePct: 3.58 }
];

export const INITIAL_INDIAN_STOCKS: IndianStock[] = [
  {
    id: 'stock-1',
    symbol: 'TATAMOTORS',
    bseCode: '500570',
    name: 'Tata Motors Ltd (Commercial Vehicles)',
    tagline: 'Leading Indian commercial vehicle manufacturer across heavy haulage, intermediate trucks, and electric fleet buses',
    sector: 'Automobile & EV',
    marketCapCategory: 'Large Cap',
    exchange: 'NSE & BSE',
    cmp: 415.25,
    changeRs: -1.70,
    changePct: -0.41,
    high52w: 509.00,
    low52w: 306.30,
    marketCapCr: 153000,
    peRatio: 12.8,
    industryPe: 24.2,
    pbRatio: 2.9,
    roe: 24.4,
    roce: 19.8,
    dividendYield: 1.45,
    debtToEquity: 0.28,
    quarterlyRevenueCr: 108048,
    quarterlyPatCr: 5566,
    quarterlyEbitdaCr: 15785,
    ebitdaMarginPct: 14.6,
    yoyPatGrowthPct: 73.8,
    healthStatus: 'outperforming',
    logoColor: 'from-blue-600 to-indigo-700',
    website: 'https://tatamotors.com',
    isWatchlist: true,
    shareholding: { promoter: 46.36, fii: 19.24, dii: 16.12, publicRetail: 18.28 },
    quarterlyHistory: [
      { quarter: 'Q1 FY26', revenueCr: 98500, ebitdaCr: 13200, patCr: 3200, ebitdaMargin: 13.4 },
      { quarter: 'Q2 FY26', revenueCr: 102200, ebitdaCr: 14100, patCr: 3760, ebitdaMargin: 13.8 },
      { quarter: 'Q3 FY26', revenueCr: 106000, ebitdaCr: 14900, patCr: 4400, ebitdaMargin: 14.0 },
      { quarter: 'Q4 FY26', revenueCr: 110200, ebitdaCr: 15800, patCr: 5100, ebitdaMargin: 14.3 },
      { quarter: 'Q1 FY27', revenueCr: 105000, ebitdaCr: 15200, patCr: 5200, ebitdaMargin: 14.5 },
      { quarter: 'Q2 FY27', revenueCr: 108048, ebitdaCr: 15785, patCr: 5566, ebitdaMargin: 14.6 }
    ],
    corporateActions: [
      { id: 'ca-1', type: 'Dividend', details: 'Final Dividend declared ₹3.00 + Special Dividend ₹3.00 per share', recordDate: '2026-06-11', amount: '₹6.00' },
      { id: 'ca-2', type: 'Stock Split', details: 'Demerger of Commercial Vehicles and Passenger Vehicles into two separate listed entities', recordDate: '2026-11-20' }
    ]
  },
  {
    id: 'stock-2',
    symbol: 'DIXON',
    bseCode: '540699',
    name: 'Dixon Technologies (India) Ltd',
    tagline: 'Premier electronic manufacturing services (EMS) powerhouse; smartphone, telecom, and consumer appliances giant',
    sector: 'Electronics & EMS',
    marketCapCategory: 'Large Cap',
    exchange: 'NSE & BSE',
    cmp: 12820.00,
    changeRs: 80.00,
    changePct: 0.63,
    high52w: 16999.00,
    low52w: 9600.00,
    marketCapCr: 76700,
    peRatio: 88.4,
    industryPe: 62.0,
    pbRatio: 24.5,
    roe: 31.8,
    roce: 38.4,
    dividendYield: 0.08,
    debtToEquity: 0.18,
    quarterlyRevenueCr: 6580,
    quarterlyPatCr: 140,
    quarterlyEbitdaCr: 256,
    ebitdaMarginPct: 3.9,
    yoyPatGrowthPct: 108.4,
    orderBookCr: 18500,
    healthStatus: 'high_growth',
    logoColor: 'from-emerald-500 to-teal-700',
    website: 'https://dixoninfo.com',
    isWatchlist: true,
    shareholding: { promoter: 33.74, fii: 22.85, dii: 24.18, publicRetail: 19.23 },
    quarterlyHistory: [
      { quarter: 'Q1 FY26', revenueCr: 3200, ebitdaCr: 130, patCr: 67, ebitdaMargin: 4.0 },
      { quarter: 'Q2 FY26', revenueCr: 4100, ebitdaCr: 165, patCr: 84, ebitdaMargin: 4.0 },
      { quarter: 'Q3 FY26', revenueCr: 4800, ebitdaCr: 190, patCr: 97, ebitdaMargin: 3.9 },
      { quarter: 'Q4 FY26', revenueCr: 5400, ebitdaCr: 212, patCr: 110, ebitdaMargin: 3.9 },
      { quarter: 'Q1 FY27', revenueCr: 5900, ebitdaCr: 232, patCr: 125, ebitdaMargin: 3.9 },
      { quarter: 'Q2 FY27', revenueCr: 6580, ebitdaCr: 256, patCr: 140, ebitdaMargin: 3.9 }
    ],
    corporateActions: [
      { id: 'ca-201', type: 'Dividend', details: 'Interim Dividend ₹5.00 per share declared', recordDate: '2026-09-18', amount: '₹5.00' }
    ]
  },
  {
    id: 'stock-3',
    symbol: 'HAL',
    bseCode: '541154',
    name: 'Hindustan Aeronautics Ltd',
    tagline: 'Navratna defense PSU monopolizing military aircraft, LCA Tejas fighters, combat helicopters, and aero-engine overhaul',
    sector: 'Defense & Aerospace',
    marketCapCategory: 'Large Cap',
    exchange: 'NSE & BSE',
    cmp: 3950.00,
    changeRs: 35.50,
    changePct: 0.91,
    high52w: 5675.00,
    low52w: 2900.00,
    marketCapCr: 264000,
    peRatio: 34.2,
    industryPe: 45.0,
    pbRatio: 8.5,
    roe: 28.5,
    roce: 36.2,
    dividendYield: 1.15,
    debtToEquity: 0.00,
    quarterlyRevenueCr: 6200,
    quarterlyPatCr: 1510,
    quarterlyEbitdaCr: 1920,
    ebitdaMarginPct: 31.0,
    yoyPatGrowthPct: 22.1,
    orderBookCr: 124000,
    healthStatus: 'outperforming',
    logoColor: 'from-amber-500 to-orange-700',
    website: 'https://hal-india.co.in',
    isWatchlist: true,
    shareholding: { promoter: 71.64, fii: 12.92, dii: 10.84, publicRetail: 4.60 },
    quarterlyHistory: [
      { quarter: 'Q1 FY26', revenueCr: 4325, ebitdaCr: 1250, patCr: 990, ebitdaMargin: 28.9 },
      { quarter: 'Q2 FY26', revenueCr: 5800, ebitdaCr: 1720, patCr: 1237, ebitdaMargin: 29.6 },
      { quarter: 'Q3 FY26', revenueCr: 6050, ebitdaCr: 1810, patCr: 1350, ebitdaMargin: 29.9 },
      { quarter: 'Q4 FY26', revenueCr: 14750, ebitdaCr: 5120, patCr: 4308, ebitdaMargin: 34.7 },
      { quarter: 'Q1 FY27', revenueCr: 4850, ebitdaCr: 1450, patCr: 1180, ebitdaMargin: 29.9 },
      { quarter: 'Q2 FY27', revenueCr: 6200, ebitdaCr: 1920, patCr: 1510, ebitdaMargin: 31.0 }
    ],
    corporateActions: [
      { id: 'ca-301', type: 'Dividend', details: 'Final Dividend declared ₹13.00 per share', recordDate: '2026-08-21', amount: '₹13.00' }
    ]
  },
  {
    id: 'stock-4',
    symbol: 'TRENT',
    bseCode: '500251',
    name: 'Trent Ltd (Tata Retail)',
    tagline: 'Hyper-growth retail disruptor operating Zudio value fashion, Westside lifestyle stores, and Star Bazaar supermarkets',
    sector: 'Consumer & Retail',
    marketCapCategory: 'Large Cap',
    exchange: 'NSE & BSE',
    cmp: 5880.00,
    changeRs: -42.00,
    changePct: -0.71,
    high52w: 8345.00,
    low52w: 4310.00,
    marketCapCr: 209000,
    peRatio: 124.0,
    industryPe: 68.0,
    pbRatio: 36.2,
    roe: 34.5,
    roce: 38.2,
    dividendYield: 0.06,
    debtToEquity: 0.12,
    quarterlyRevenueCr: 4250,
    quarterlyPatCr: 412,
    quarterlyEbitdaCr: 680,
    ebitdaMarginPct: 16.0,
    yoyPatGrowthPct: 82.0,
    healthStatus: 'high_growth',
    logoColor: 'from-pink-600 to-rose-700',
    website: 'https://mywestside.com',
    isWatchlist: true,
    shareholding: { promoter: 37.01, fii: 27.84, dii: 16.55, publicRetail: 18.60 },
    quarterlyHistory: [
      { quarter: 'Q1 FY26', revenueCr: 2628, ebitdaCr: 367, patCr: 166, ebitdaMargin: 14.0 },
      { quarter: 'Q2 FY26', revenueCr: 2982, ebitdaCr: 461, patCr: 228, ebitdaMargin: 15.5 },
      { quarter: 'Q3 FY26', revenueCr: 3460, ebitdaCr: 575, patCr: 310, ebitdaMargin: 16.6 },
      { quarter: 'Q4 FY26', revenueCr: 3298, ebitdaCr: 512, patCr: 280, ebitdaMargin: 15.5 },
      { quarter: 'Q1 FY27', revenueCr: 3950, ebitdaCr: 620, patCr: 370, ebitdaMargin: 15.7 },
      { quarter: 'Q2 FY27', revenueCr: 4250, ebitdaCr: 680, patCr: 412, ebitdaMargin: 16.0 }
    ],
    corporateActions: [
      { id: 'ca-401', type: 'Dividend', details: 'Dividend declared ₹3.20 per equity share', recordDate: '2026-05-22', amount: '₹3.20' }
    ]
  },
  {
    id: 'stock-5',
    symbol: 'HDFCBANK',
    bseCode: '500180',
    name: 'HDFC Bank Ltd',
    tagline: 'India’s largest private sector financial institution serving over 90 million retail and corporate accounts nationwide',
    sector: 'Banking & Financials',
    marketCapCategory: 'Large Cap',
    exchange: 'NSE & BSE',
    cmp: 1782.50,
    changeRs: 6.80,
    changePct: 0.38,
    high52w: 1910.00,
    low52w: 1363.55,
    marketCapCr: 1358000,
    peRatio: 18.6,
    industryPe: 16.8,
    pbRatio: 2.7,
    roe: 16.2,
    roce: 14.8,
    dividendYield: 1.25,
    debtToEquity: 6.8,
    quarterlyRevenueCr: 42100,
    quarterlyPatCr: 16821,
    quarterlyEbitdaCr: 24100,
    ebitdaMarginPct: 57.2,
    yoyPatGrowthPct: 18.2,
    healthStatus: 'in_line',
    logoColor: 'from-blue-700 to-indigo-800',
    website: 'https://hdfcbank.com',
    isWatchlist: false,
    shareholding: { promoter: 0.00, fii: 54.30, dii: 31.20, publicRetail: 14.50 },
    quarterlyHistory: [
      { quarter: 'Q1 FY26', revenueCr: 35000, ebitdaCr: 19800, patCr: 12400, ebitdaMargin: 56.5 },
      { quarter: 'Q2 FY26', revenueCr: 37200, ebitdaCr: 21200, patCr: 13800, ebitdaMargin: 57.0 },
      { quarter: 'Q3 FY26', revenueCr: 39500, ebitdaCr: 22600, patCr: 15200, ebitdaMargin: 57.2 },
      { quarter: 'Q4 FY26', revenueCr: 41200, ebitdaCr: 23500, patCr: 16511, ebitdaMargin: 57.1 },
      { quarter: 'Q1 FY27', revenueCr: 41500, ebitdaCr: 23800, patCr: 16175, ebitdaMargin: 57.3 },
      { quarter: 'Q2 FY27', revenueCr: 42100, ebitdaCr: 24100, patCr: 16821, ebitdaMargin: 57.2 }
    ],
    corporateActions: [
      { id: 'ca-501', type: 'Dividend', details: 'Dividend declared ₹19.50 per share', recordDate: '2026-05-10', amount: '₹19.50' }
    ]
  },
  {
    id: 'stock-6',
    symbol: 'KPITTECH',
    bseCode: '542651',
    name: 'KPIT Technologies Ltd',
    tagline: 'Pure-play Software Defined Vehicle (SDV), powertrain, and autonomous mobility engineering partner for global OEMs',
    sector: 'IT & Software',
    marketCapCategory: 'Mid Cap',
    exchange: 'NSE & BSE',
    cmp: 523.80,
    changeRs: 10.05,
    changePct: 1.96,
    high52w: 1284.90,
    low52w: 470.10,
    marketCapCr: 14300,
    peRatio: 38.5,
    industryPe: 32.5,
    pbRatio: 11.4,
    roe: 32.6,
    roce: 39.8,
    dividendYield: 0.65,
    debtToEquity: 0.08,
    quarterlyRevenueCr: 1365,
    quarterlyPatCr: 204,
    quarterlyEbitdaCr: 284,
    ebitdaMarginPct: 20.8,
    yoyPatGrowthPct: 44.8,
    healthStatus: 'outperforming',
    logoColor: 'from-cyan-600 to-blue-600',
    website: 'https://kpit.com',
    isWatchlist: false,
    shareholding: { promoter: 39.47, fii: 24.12, dii: 13.88, publicRetail: 22.53 },
    quarterlyHistory: [
      { quarter: 'Q1 FY26', revenueCr: 1098, ebitdaCr: 220, patCr: 134, ebitdaMargin: 20.0 },
      { quarter: 'Q2 FY26', revenueCr: 1180, ebitdaCr: 240, patCr: 148, ebitdaMargin: 20.3 },
      { quarter: 'Q3 FY26', revenueCr: 1250, ebitdaCr: 256, patCr: 165, ebitdaMargin: 20.5 },
      { quarter: 'Q4 FY26', revenueCr: 1318, ebitdaCr: 272, patCr: 182, ebitdaMargin: 20.6 },
      { quarter: 'Q1 FY27', revenueCr: 1340, ebitdaCr: 278, patCr: 195, ebitdaMargin: 20.7 },
      { quarter: 'Q2 FY27', revenueCr: 1365, ebitdaCr: 284, patCr: 204, ebitdaMargin: 20.8 }
    ],
    corporateActions: [
      { id: 'ca-601', type: 'Dividend', details: 'Final Dividend declared ₹3.10 per share', recordDate: '2026-07-15', amount: '₹3.10' }
    ]
  },
  {
    id: 'stock-7',
    symbol: 'RELIANCE',
    bseCode: '500325',
    name: 'Reliance Industries Ltd',
    tagline: 'Conglomerate powerhouse spanning Oil-to-Chemicals, Jio telecom 5G, Reliance Retail, and Green Energy Gigafactories',
    sector: 'Conglomerate & Energy',
    marketCapCategory: 'Large Cap',
    exchange: 'NSE & BSE',
    cmp: 1174.60,
    changeRs: 7.90,
    changePct: 0.68,
    high52w: 1611.80,
    low52w: 1152.20,
    marketCapCr: 1590000,
    peRatio: 23.4,
    industryPe: 22.0,
    pbRatio: 2.1,
    roe: 10.4,
    roce: 11.8,
    dividendYield: 0.85,
    debtToEquity: 0.42,
    quarterlyRevenueCr: 235000,
    quarterlyPatCr: 19400,
    quarterlyEbitdaCr: 42500,
    ebitdaMarginPct: 18.1,
    yoyPatGrowthPct: 11.2,
    healthStatus: 'in_line',
    logoColor: 'from-blue-800 to-indigo-900',
    website: 'https://ril.com',
    isWatchlist: true,
    shareholding: { promoter: 50.30, fii: 21.80, dii: 16.40, publicRetail: 11.50 },
    quarterlyHistory: [
      { quarter: 'Q1 FY26', revenueCr: 210000, ebitdaCr: 38000, patCr: 16000, ebitdaMargin: 18.0 },
      { quarter: 'Q2 FY26', revenueCr: 218000, ebitdaCr: 39500, patCr: 17200, ebitdaMargin: 18.1 },
      { quarter: 'Q3 FY26', revenueCr: 225000, ebitdaCr: 40500, patCr: 18100, ebitdaMargin: 18.0 },
      { quarter: 'Q4 FY26', revenueCr: 230000, ebitdaCr: 41800, patCr: 18900, ebitdaMargin: 18.2 },
      { quarter: 'Q1 FY27', revenueCr: 232000, ebitdaCr: 42000, patCr: 19100, ebitdaMargin: 18.1 },
      { quarter: 'Q2 FY27', revenueCr: 235000, ebitdaCr: 42500, patCr: 19400, ebitdaMargin: 18.1 }
    ],
    corporateActions: [
      { id: 'ca-701', type: 'Bonus', details: 'Bonus Issue in 1:1 ratio approved by shareholders', recordDate: '2026-10-28' }
    ]
  },
  {
    id: 'stock-8',
    symbol: 'TCS',
    bseCode: '532540',
    name: 'Tata Consultancy Services Ltd',
    tagline: 'Global technology consulting and IT services leader with record digital transformation & AI order bookings',
    sector: 'IT & Software',
    marketCapCategory: 'Large Cap',
    exchange: 'NSE & BSE',
    cmp: 3950.40,
    changeRs: 32.10,
    changePct: 0.82,
    high52w: 4585.00,
    low52w: 3680.00,
    marketCapCr: 1429000,
    peRatio: 28.6,
    industryPe: 27.4,
    pbRatio: 14.2,
    roe: 48.5,
    roce: 58.2,
    dividendYield: 1.85,
    debtToEquity: 0.00,
    quarterlyRevenueCr: 64259,
    quarterlyPatCr: 11909,
    quarterlyEbitdaCr: 16180,
    ebitdaMarginPct: 25.2,
    yoyPatGrowthPct: 5.0,
    orderBookCr: 84000,
    healthStatus: 'outperforming',
    logoColor: 'from-blue-600 to-cyan-700',
    website: 'https://tcs.com',
    isWatchlist: true,
    shareholding: { promoter: 71.77, fii: 12.35, dii: 10.42, publicRetail: 5.46 },
    quarterlyHistory: [
      { quarter: 'Q1 FY26', revenueCr: 59381, ebitdaCr: 14600, patCr: 11074, ebitdaMargin: 24.6 },
      { quarter: 'Q2 FY26', revenueCr: 60583, ebitdaCr: 15100, patCr: 11342, ebitdaMargin: 24.9 },
      { quarter: 'Q3 FY26', revenueCr: 61445, ebitdaCr: 15400, patCr: 11735, ebitdaMargin: 25.1 },
      { quarter: 'Q4 FY26', revenueCr: 62613, ebitdaCr: 15900, patCr: 12434, ebitdaMargin: 25.4 },
      { quarter: 'Q1 FY27', revenueCr: 63575, ebitdaCr: 16000, patCr: 12105, ebitdaMargin: 25.2 },
      { quarter: 'Q2 FY27', revenueCr: 64259, ebitdaCr: 16180, patCr: 11909, ebitdaMargin: 25.2 }
    ],
    corporateActions: [
      { id: 'ca-801', type: 'Dividend', details: 'Second Interim Dividend declared ₹10.00 per share', recordDate: '2026-10-18', amount: '₹10.00' }
    ]
  },
  {
    id: 'stock-9',
    symbol: 'INFY',
    bseCode: '500209',
    name: 'Infosys Ltd',
    tagline: 'Next-generation digital services and consulting major with proprietary generative AI suite Topaz',
    sector: 'IT & Software',
    marketCapCategory: 'Large Cap',
    exchange: 'NSE & BSE',
    cmp: 1845.20,
    changeRs: 18.40,
    changePct: 1.01,
    high52w: 1991.00,
    low52w: 1358.00,
    marketCapCr: 766000,
    peRatio: 26.8,
    industryPe: 27.4,
    pbRatio: 8.8,
    roe: 31.2,
    roce: 39.5,
    dividendYield: 2.15,
    debtToEquity: 0.05,
    quarterlyRevenueCr: 40986,
    quarterlyPatCr: 6506,
    quarterlyEbitdaCr: 9850,
    ebitdaMarginPct: 24.0,
    yoyPatGrowthPct: 4.7,
    orderBookCr: 42000,
    healthStatus: 'in_line',
    logoColor: 'from-blue-500 to-indigo-600',
    website: 'https://infosys.com',
    isWatchlist: false,
    shareholding: { promoter: 14.60, fii: 33.20, dii: 35.80, publicRetail: 16.40 },
    quarterlyHistory: [
      { quarter: 'Q1 FY26', revenueCr: 37923, ebitdaCr: 8900, patCr: 5945, ebitdaMargin: 23.5 },
      { quarter: 'Q2 FY26', revenueCr: 38994, ebitdaCr: 9300, patCr: 6212, ebitdaMargin: 23.9 },
      { quarter: 'Q3 FY26', revenueCr: 38821, ebitdaCr: 9200, patCr: 6106, ebitdaMargin: 23.7 },
      { quarter: 'Q4 FY26', revenueCr: 37923, ebitdaCr: 9100, patCr: 7969, ebitdaMargin: 24.0 },
      { quarter: 'Q1 FY27', revenueCr: 39315, ebitdaCr: 9400, patCr: 6368, ebitdaMargin: 23.9 },
      { quarter: 'Q2 FY27', revenueCr: 40986, ebitdaCr: 9850, patCr: 6506, ebitdaMargin: 24.0 }
    ],
    corporateActions: [
      { id: 'ca-901', type: 'Dividend', details: 'Interim Dividend declared ₹21.00 per share', recordDate: '2026-10-29', amount: '₹21.00' }
    ]
  },
  {
    id: 'stock-10',
    symbol: 'ICICIBANK',
    bseCode: '532174',
    name: 'ICICI Bank Ltd',
    tagline: 'Private banking titan leading in retail underwriting, digital iMobile platform, and lowest gross NPA levels',
    sector: 'Banking & Financials',
    marketCapCategory: 'Large Cap',
    exchange: 'NSE & BSE',
    cmp: 1270.00,
    changeRs: 9.40,
    changePct: 0.75,
    high52w: 1334.00,
    low52w: 978.00,
    marketCapCr: 894000,
    peRatio: 17.5,
    industryPe: 16.8,
    pbRatio: 2.8,
    roe: 18.5,
    roce: 16.8,
    dividendYield: 0.85,
    debtToEquity: 5.9,
    quarterlyRevenueCr: 45200,
    quarterlyPatCr: 11746,
    quarterlyEbitdaCr: 21800,
    ebitdaMarginPct: 48.2,
    yoyPatGrowthPct: 14.5,
    healthStatus: 'outperforming',
    logoColor: 'from-orange-600 to-amber-700',
    website: 'https://icicibank.com',
    isWatchlist: true,
    shareholding: { promoter: 0.00, fii: 44.50, dii: 45.20, publicRetail: 10.30 },
    quarterlyHistory: [
      { quarter: 'Q1 FY26', revenueCr: 38700, ebitdaCr: 18200, patCr: 9648, ebitdaMargin: 47.0 },
      { quarter: 'Q2 FY26', revenueCr: 40600, ebitdaCr: 19400, patCr: 10261, ebitdaMargin: 47.8 },
      { quarter: 'Q3 FY26', revenueCr: 42100, ebitdaCr: 20200, patCr: 10850, ebitdaMargin: 48.0 },
      { quarter: 'Q4 FY26', revenueCr: 43500, ebitdaCr: 20900, patCr: 11340, ebitdaMargin: 48.0 },
      { quarter: 'Q1 FY27', revenueCr: 44200, ebitdaCr: 21300, patCr: 11059, ebitdaMargin: 48.2 },
      { quarter: 'Q2 FY27', revenueCr: 45200, ebitdaCr: 21800, patCr: 11746, ebitdaMargin: 48.2 }
    ],
    corporateActions: [
      { id: 'ca-1001', type: 'Dividend', details: 'Dividend declared ₹10.00 per share', recordDate: '2026-06-18', amount: '₹10.00' }
    ]
  },
  {
    id: 'stock-11',
    symbol: 'SBIN',
    bseCode: '500112',
    name: 'State Bank of India',
    tagline: 'Premier sovereign public sector bank anchor with dominant retail loan book, YONO app, and nationwide network',
    sector: 'Banking & Financials',
    marketCapCategory: 'Large Cap',
    exchange: 'NSE & BSE',
    cmp: 840.50,
    changeRs: 3.20,
    changePct: 0.38,
    high52w: 912.00,
    low52w: 590.00,
    marketCapCr: 750000,
    peRatio: 10.4,
    industryPe: 12.0,
    pbRatio: 1.6,
    roe: 19.2,
    roce: 15.6,
    dividendYield: 1.65,
    debtToEquity: 12.0,
    quarterlyRevenueCr: 112000,
    quarterlyPatCr: 18331,
    quarterlyEbitdaCr: 32000,
    ebitdaMarginPct: 28.6,
    yoyPatGrowthPct: 28.0,
    healthStatus: 'outperforming',
    logoColor: 'from-blue-700 to-cyan-800',
    website: 'https://sbi.co.in',
    isWatchlist: false,
    shareholding: { promoter: 57.49, fii: 10.85, dii: 24.12, publicRetail: 7.54 },
    quarterlyHistory: [
      { quarter: 'Q1 FY26', revenueCr: 95000, ebitdaCr: 26000, patCr: 14317, ebitdaMargin: 27.4 },
      { quarter: 'Q2 FY26', revenueCr: 98000, ebitdaCr: 27500, patCr: 14330, ebitdaMargin: 28.1 },
      { quarter: 'Q3 FY26', revenueCr: 102000, ebitdaCr: 28900, patCr: 15200, ebitdaMargin: 28.3 },
      { quarter: 'Q4 FY26', revenueCr: 108000, ebitdaCr: 30500, patCr: 20698, ebitdaMargin: 28.2 },
      { quarter: 'Q1 FY27', revenueCr: 109500, ebitdaCr: 31000, patCr: 17035, ebitdaMargin: 28.3 },
      { quarter: 'Q2 FY27', revenueCr: 112000, ebitdaCr: 32000, patCr: 18331, ebitdaMargin: 28.6 }
    ],
    corporateActions: [
      { id: 'ca-1101', type: 'Dividend', details: 'Dividend declared ₹13.70 per share', recordDate: '2026-05-22', amount: '₹13.70' }
    ]
  },
  {
    id: 'stock-12',
    symbol: 'BHARTIARTL',
    bseCode: '532454',
    name: 'Bharti Airtel Ltd',
    tagline: 'Leading global telecom provider with highest ARPU in Indian mobile, enterprise cloud Airtel IQ, and African operations',
    sector: 'IT & Software',
    marketCapCategory: 'Large Cap',
    exchange: 'NSE & BSE',
    cmp: 1680.00,
    changeRs: 12.00,
    changePct: 0.72,
    high52w: 1780.00,
    low52w: 920.00,
    marketCapCr: 958000,
    peRatio: 52.0,
    industryPe: 45.0,
    pbRatio: 7.2,
    roe: 19.8,
    roce: 18.5,
    dividendYield: 0.50,
    debtToEquity: 1.8,
    quarterlyRevenueCr: 41500,
    quarterlyPatCr: 3590,
    quarterlyEbitdaCr: 22100,
    ebitdaMarginPct: 53.2,
    yoyPatGrowthPct: 168.0,
    healthStatus: 'high_growth',
    logoColor: 'from-red-600 to-rose-700',
    website: 'https://airtel.in',
    isWatchlist: true,
    shareholding: { promoter: 53.10, fii: 24.20, dii: 15.60, publicRetail: 7.10 },
    quarterlyHistory: [
      { quarter: 'Q1 FY26', revenueCr: 35000, ebitdaCr: 18200, patCr: 1340, ebitdaMargin: 52.0 },
      { quarter: 'Q2 FY26', revenueCr: 37000, ebitdaCr: 19500, patCr: 1540, ebitdaMargin: 52.7 },
      { quarter: 'Q3 FY26', revenueCr: 37900, ebitdaCr: 20000, patCr: 2442, ebitdaMargin: 52.8 },
      { quarter: 'Q4 FY26', revenueCr: 38500, ebitdaCr: 20400, patCr: 2072, ebitdaMargin: 53.0 },
      { quarter: 'Q1 FY27', revenueCr: 39500, ebitdaCr: 21100, patCr: 4160, ebitdaMargin: 53.4 },
      { quarter: 'Q2 FY27', revenueCr: 41500, ebitdaCr: 22100, patCr: 3590, ebitdaMargin: 53.2 }
    ],
    corporateActions: [
      { id: 'ca-1201', type: 'Dividend', details: 'Dividend declared ₹8.00 per share', recordDate: '2026-07-28', amount: '₹8.00' }
    ]
  },
  {
    id: 'stock-13',
    symbol: 'LT',
    bseCode: '500510',
    name: 'Larsen & Toubro Ltd',
    tagline: 'Engineering, procurement, and defense conglomerate building India’s critical infra, bullet trains, and green hydrogen electrolyzers',
    sector: 'Defense & Aerospace',
    marketCapCategory: 'Large Cap',
    exchange: 'NSE & BSE',
    cmp: 3560.00,
    changeRs: 24.00,
    changePct: 0.68,
    high52w: 3948.00,
    low52w: 2880.00,
    marketCapCr: 489000,
    peRatio: 36.8,
    industryPe: 34.0,
    pbRatio: 5.1,
    roe: 15.6,
    roce: 18.2,
    dividendYield: 0.95,
    debtToEquity: 1.1,
    quarterlyRevenueCr: 61555,
    quarterlyPatCr: 3395,
    quarterlyEbitdaCr: 6360,
    ebitdaMarginPct: 10.3,
    yoyPatGrowthPct: 5.4,
    orderBookCr: 510000,
    healthStatus: 'outperforming',
    logoColor: 'from-amber-600 to-yellow-700',
    website: 'https://larsentoubro.com',
    isWatchlist: true,
    shareholding: { promoter: 0.00, fii: 25.40, dii: 38.60, publicRetail: 36.00 },
    quarterlyHistory: [
      { quarter: 'Q1 FY26', revenueCr: 47882, ebitdaCr: 4860, patCr: 2493, ebitdaMargin: 10.1 },
      { quarter: 'Q2 FY26', revenueCr: 51024, ebitdaCr: 5630, patCr: 3223, ebitdaMargin: 11.0 },
      { quarter: 'Q3 FY26', revenueCr: 55128, ebitdaCr: 5750, patCr: 2947, ebitdaMargin: 10.4 },
      { quarter: 'Q4 FY26', revenueCr: 67079, ebitdaCr: 7230, patCr: 4396, ebitdaMargin: 10.8 },
      { quarter: 'Q1 FY27', revenueCr: 55120, ebitdaCr: 5610, patCr: 2786, ebitdaMargin: 10.2 },
      { quarter: 'Q2 FY27', revenueCr: 61555, ebitdaCr: 6360, patCr: 3395, ebitdaMargin: 10.3 }
    ],
    corporateActions: [
      { id: 'ca-1301', type: 'Dividend', details: 'Final Dividend declared ₹28.00 per share', recordDate: '2026-06-20', amount: '₹28.00' }
    ]
  },
  {
    id: 'stock-14',
    symbol: 'BEL',
    bseCode: '500049',
    name: 'Bharat Electronics Ltd',
    tagline: 'Navratna defense electronics powerhouse designing radar systems, electronic warfare, Akash missile avionics, and naval sonars',
    sector: 'Defense & Aerospace',
    marketCapCategory: 'Large Cap',
    exchange: 'NSE & BSE',
    cmp: 285.40,
    changeRs: 3.80,
    changePct: 1.35,
    high52w: 340.50,
    low52w: 127.00,
    marketCapCr: 208600,
    peRatio: 48.2,
    industryPe: 45.0,
    pbRatio: 12.8,
    roe: 28.5,
    roce: 37.8,
    dividendYield: 0.80,
    debtToEquity: 0.00,
    quarterlyRevenueCr: 4580,
    quarterlyPatCr: 1092,
    quarterlyEbitdaCr: 1240,
    ebitdaMarginPct: 27.1,
    yoyPatGrowthPct: 38.4,
    orderBookCr: 76000,
    healthStatus: 'high_growth',
    logoColor: 'from-blue-600 to-indigo-700',
    website: 'https://bel-india.in',
    isWatchlist: true,
    shareholding: { promoter: 51.14, fii: 17.50, dii: 19.80, publicRetail: 11.56 },
    quarterlyHistory: [
      { quarter: 'Q1 FY26', revenueCr: 3511, ebitdaCr: 664, patCr: 531, ebitdaMargin: 18.9 },
      { quarter: 'Q2 FY26', revenueCr: 4009, ebitdaCr: 1006, patCr: 789, ebitdaMargin: 25.1 },
      { quarter: 'Q3 FY26', revenueCr: 4162, ebitdaCr: 1072, patCr: 860, ebitdaMargin: 25.8 },
      { quarter: 'Q4 FY26', revenueCr: 8564, ebitdaCr: 2470, patCr: 1786, ebitdaMargin: 28.8 },
      { quarter: 'Q1 FY27', revenueCr: 4199, ebitdaCr: 948, patCr: 776, ebitdaMargin: 22.6 },
      { quarter: 'Q2 FY27', revenueCr: 4580, ebitdaCr: 1240, patCr: 1092, ebitdaMargin: 27.1 }
    ],
    corporateActions: [
      { id: 'ca-1401', type: 'Dividend', details: 'Final Dividend declared ₹0.80 per share', recordDate: '2026-08-14', amount: '₹0.80' }
    ]
  },
  {
    id: 'stock-15',
    symbol: 'ITC',
    bseCode: '500875',
    name: 'ITC Ltd',
    tagline: 'Diversified consumer giant spanning Aashirvaad & Sunfeast FMCG, cigarettes, paperboards, agri-business, and demerged hotels',
    sector: 'Consumer & Retail',
    marketCapCategory: 'Large Cap',
    exchange: 'NSE & BSE',
    cmp: 472.10,
    changeRs: -2.30,
    changePct: -0.48,
    high52w: 528.00,
    low52w: 399.00,
    marketCapCr: 589000,
    peRatio: 28.5,
    industryPe: 38.0,
    pbRatio: 8.2,
    roe: 29.8,
    roce: 38.9,
    dividendYield: 2.95,
    debtToEquity: 0.00,
    quarterlyRevenueCr: 19300,
    quarterlyPatCr: 5078,
    quarterlyEbitdaCr: 6780,
    ebitdaMarginPct: 35.1,
    yoyPatGrowthPct: 3.2,
    healthStatus: 'in_line',
    logoColor: 'from-amber-700 to-yellow-800',
    website: 'https://itcportal.com',
    isWatchlist: false,
    shareholding: { promoter: 0.00, fii: 41.20, dii: 44.80, publicRetail: 14.00 },
    quarterlyHistory: [
      { quarter: 'Q1 FY26', revenueCr: 16995, ebitdaCr: 6250, patCr: 4903, ebitdaMargin: 36.8 },
      { quarter: 'Q2 FY26', revenueCr: 17774, ebitdaCr: 6450, patCr: 4927, ebitdaMargin: 36.3 },
      { quarter: 'Q3 FY26', revenueCr: 18600, ebitdaCr: 6520, patCr: 5335, ebitdaMargin: 35.1 },
      { quarter: 'Q4 FY26', revenueCr: 17900, ebitdaCr: 6160, patCr: 5020, ebitdaMargin: 34.4 },
      { quarter: 'Q1 FY27', revenueCr: 18220, ebitdaCr: 6290, patCr: 4917, ebitdaMargin: 34.5 },
      { quarter: 'Q2 FY27', revenueCr: 19300, ebitdaCr: 6780, patCr: 5078, ebitdaMargin: 35.1 }
    ],
    corporateActions: [
      { id: 'ca-1501', type: 'Stock Split', details: 'Demerger of ITC Hotels Ltd into separate listed entity completed', recordDate: '2026-08-01' }
    ]
  },
  {
    id: 'stock-16',
    symbol: 'SUNPHARMA',
    bseCode: '524715',
    name: 'Sun Pharmaceutical Industries Ltd',
    tagline: 'India’s largest global pharmaceutical company leading in specialty dermatology, ophthalmology, and oncology formulations',
    sector: 'Pharmaceuticals & Healthcare',
    marketCapCategory: 'Large Cap',
    exchange: 'NSE & BSE',
    cmp: 1890.00,
    changeRs: 15.00,
    changePct: 0.80,
    high52w: 1960.00,
    low52w: 1105.00,
    marketCapCr: 453000,
    peRatio: 41.5,
    industryPe: 35.0,
    pbRatio: 6.8,
    roe: 17.5,
    roce: 21.0,
    dividendYield: 0.75,
    debtToEquity: 0.05,
    quarterlyRevenueCr: 13291,
    quarterlyPatCr: 3040,
    quarterlyEbitdaCr: 3940,
    ebitdaMarginPct: 29.6,
    yoyPatGrowthPct: 28.0,
    healthStatus: 'outperforming',
    logoColor: 'from-orange-500 to-amber-600',
    website: 'https://sunpharma.com',
    isWatchlist: false,
    shareholding: { promoter: 54.48, fii: 17.90, dii: 19.30, publicRetail: 8.32 },
    quarterlyHistory: [
      { quarter: 'Q1 FY26', revenueCr: 11940, ebitdaCr: 3330, patCr: 2022, ebitdaMargin: 27.9 },
      { quarter: 'Q2 FY26', revenueCr: 12192, ebitdaCr: 3210, patCr: 2375, ebitdaMargin: 26.3 },
      { quarter: 'Q3 FY26', revenueCr: 12380, ebitdaCr: 3470, patCr: 2524, ebitdaMargin: 28.0 },
      { quarter: 'Q4 FY26', revenueCr: 11982, ebitdaCr: 3030, patCr: 2655, ebitdaMargin: 25.3 },
      { quarter: 'Q1 FY27', revenueCr: 12653, ebitdaCr: 3610, patCr: 2836, ebitdaMargin: 28.5 },
      { quarter: 'Q2 FY27', revenueCr: 13291, ebitdaCr: 3940, patCr: 3040, ebitdaMargin: 29.6 }
    ],
    corporateActions: [
      { id: 'ca-1601', type: 'Dividend', details: 'Dividend declared ₹5.00 per share', recordDate: '2026-07-25', amount: '₹5.00' }
    ]
  },
  {
    id: 'stock-17',
    symbol: 'MARUTI',
    bseCode: '532500',
    name: 'Maruti Suzuki India Ltd',
    tagline: 'India’s undisputed passenger car volume leader with over 41% market share and expanding hybrid / EV vehicle lineup',
    sector: 'Automobile & EV',
    marketCapCategory: 'Large Cap',
    exchange: 'NSE & BSE',
    cmp: 12240.00,
    changeRs: -85.00,
    changePct: -0.69,
    high52w: 13680.00,
    low52w: 9980.00,
    marketCapCr: 384000,
    peRatio: 26.2,
    industryPe: 24.2,
    pbRatio: 4.1,
    roe: 17.8,
    roce: 22.4,
    dividendYield: 1.05,
    debtToEquity: 0.00,
    quarterlyRevenueCr: 37200,
    quarterlyPatCr: 3102,
    quarterlyEbitdaCr: 4410,
    ebitdaMarginPct: 11.9,
    yoyPatGrowthPct: -17.0,
    healthStatus: 'under_pressure',
    logoColor: 'from-blue-700 to-red-600',
    website: 'https://marutisuzuki.com',
    isWatchlist: false,
    shareholding: { promoter: 58.19, fii: 19.80, dii: 17.50, publicRetail: 4.51 },
    quarterlyHistory: [
      { quarter: 'Q1 FY26', revenueCr: 32327, ebitdaCr: 2980, patCr: 2485, ebitdaMargin: 9.2 },
      { quarter: 'Q2 FY26', revenueCr: 37062, ebitdaCr: 4780, patCr: 3716, ebitdaMargin: 12.9 },
      { quarter: 'Q3 FY26', revenueCr: 33309, ebitdaCr: 3900, patCr: 3130, ebitdaMargin: 11.7 },
      { quarter: 'Q4 FY26', revenueCr: 38235, ebitdaCr: 4710, patCr: 3878, ebitdaMargin: 12.3 },
      { quarter: 'Q1 FY27', revenueCr: 35531, ebitdaCr: 4430, patCr: 3650, ebitdaMargin: 12.5 },
      { quarter: 'Q2 FY27', revenueCr: 37200, ebitdaCr: 4410, patCr: 3102, ebitdaMargin: 11.9 }
    ],
    corporateActions: [
      { id: 'ca-1701', type: 'Dividend', details: 'Dividend declared ₹125.00 per share', recordDate: '2026-08-02', amount: '₹125.00' }
    ]
  },
  {
    id: 'stock-18',
    symbol: 'TATAPOWER',
    bseCode: '500400',
    name: 'Tata Power Company Ltd',
    tagline: 'Integrated power major accelerating India’s clean energy transition across solar rooftop EPC, EV charging, and transmission',
    sector: 'Green Energy & Infra',
    marketCapCategory: 'Large Cap',
    exchange: 'NSE & BSE',
    cmp: 432.40,
    changeRs: 5.60,
    changePct: 1.31,
    high52w: 494.85,
    low52w: 230.75,
    marketCapCr: 138000,
    peRatio: 33.5,
    industryPe: 30.0,
    pbRatio: 4.2,
    roe: 13.8,
    roce: 15.2,
    dividendYield: 0.48,
    debtToEquity: 1.4,
    quarterlyRevenueCr: 15697,
    quarterlyPatCr: 1533,
    quarterlyEbitdaCr: 3808,
    ebitdaMarginPct: 24.3,
    yoyPatGrowthPct: 7.5,
    orderBookCr: 18200,
    healthStatus: 'high_growth',
    logoColor: 'from-emerald-600 to-teal-800',
    website: 'https://tatapower.com',
    isWatchlist: true,
    shareholding: { promoter: 46.86, fii: 10.40, dii: 15.80, publicRetail: 26.94 },
    quarterlyHistory: [
      { quarter: 'Q1 FY26', revenueCr: 14930, ebitdaCr: 3005, patCr: 1141, ebitdaMargin: 20.1 },
      { quarter: 'Q2 FY26', revenueCr: 15442, ebitdaCr: 3087, patCr: 1017, ebitdaMargin: 20.0 },
      { quarter: 'Q3 FY26', revenueCr: 14651, ebitdaCr: 3250, patCr: 1076, ebitdaMargin: 22.2 },
      { quarter: 'Q4 FY26', revenueCr: 15846, ebitdaCr: 3350, patCr: 1045, ebitdaMargin: 21.1 },
      { quarter: 'Q1 FY27', revenueCr: 17293, ebitdaCr: 3587, patCr: 1188, ebitdaMargin: 20.7 },
      { quarter: 'Q2 FY27', revenueCr: 15697, ebitdaCr: 3808, patCr: 1533, ebitdaMargin: 24.3 }
    ],
    corporateActions: [
      { id: 'ca-1801', type: 'Dividend', details: 'Dividend declared ₹2.00 per share', recordDate: '2026-07-04', amount: '₹2.00' }
    ]
  },
  {
    id: 'stock-19',
    symbol: 'ZOMATO',
    bseCode: '543320',
    name: 'Zomato Ltd (Eternal)',
    tagline: 'Leading consumer internet tech titan dominating food delivery and ultra-fast grocery delivery with Blinkit',
    sector: 'Consumer & Retail',
    marketCapCategory: 'Large Cap',
    exchange: 'NSE & BSE',
    cmp: 264.20,
    changeRs: 4.10,
    changePct: 1.58,
    high52w: 298.00,
    low52w: 101.50,
    marketCapCr: 233000,
    peRatio: 115.0,
    industryPe: 80.0,
    pbRatio: 10.8,
    roe: 9.8,
    roce: 12.4,
    dividendYield: 0.00,
    debtToEquity: 0.02,
    quarterlyRevenueCr: 4799,
    quarterlyPatCr: 176,
    quarterlyEbitdaCr: 226,
    ebitdaMarginPct: 4.7,
    yoyPatGrowthPct: 389.0,
    healthStatus: 'high_growth',
    logoColor: 'from-rose-600 to-red-600',
    website: 'https://zomato.com',
    isWatchlist: true,
    shareholding: { promoter: 0.00, fii: 54.10, dii: 22.80, publicRetail: 23.10 },
    quarterlyHistory: [
      { quarter: 'Q1 FY26', revenueCr: 2416, ebitdaCr: 12, patCr: 2, ebitdaMargin: 0.5 },
      { quarter: 'Q2 FY26', revenueCr: 2848, ebitdaCr: 41, patCr: 36, ebitdaMargin: 1.4 },
      { quarter: 'Q3 FY26', revenueCr: 3288, ebitdaCr: 125, patCr: 138, ebitdaMargin: 3.8 },
      { quarter: 'Q4 FY26', revenueCr: 3562, ebitdaCr: 194, patCr: 175, ebitdaMargin: 5.4 },
      { quarter: 'Q1 FY27', revenueCr: 4206, ebitdaCr: 299, patCr: 253, ebitdaMargin: 7.1 },
      { quarter: 'Q2 FY27', revenueCr: 4799, ebitdaCr: 226, patCr: 176, ebitdaMargin: 4.7 }
    ],
    corporateActions: [
      { id: 'ca-1901', type: 'AGM / EGM', details: 'Fund raise via QIP approved for expansion of dark store network', recordDate: '2026-10-10' }
    ]
  },
  {
    id: 'stock-20',
    symbol: 'BAJFINANCE',
    bseCode: '500034',
    name: 'Bajaj Finance Ltd',
    tagline: 'Leading diversified retail NBFC titan with extensive cross-sell franchise and high-velocity digital EMI loan network',
    sector: 'Banking & Financials',
    marketCapCategory: 'Large Cap',
    exchange: 'NSE & BSE',
    cmp: 6920.00,
    changeRs: 48.00,
    changePct: 0.70,
    high52w: 7890.00,
    low52w: 6380.00,
    marketCapCr: 428000,
    peRatio: 27.2,
    industryPe: 22.0,
    pbRatio: 4.8,
    roe: 22.1,
    roce: 18.5,
    dividendYield: 0.52,
    debtToEquity: 3.8,
    quarterlyRevenueCr: 17095,
    quarterlyPatCr: 4014,
    quarterlyEbitdaCr: 9800,
    ebitdaMarginPct: 57.3,
    yoyPatGrowthPct: 13.0,
    healthStatus: 'outperforming',
    logoColor: 'from-blue-800 to-indigo-900',
    website: 'https://bajajfinserv.in',
    isWatchlist: false,
    shareholding: { promoter: 54.71, fii: 20.80, dii: 14.40, publicRetail: 10.09 },
    quarterlyHistory: [
      { quarter: 'Q1 FY26', revenueCr: 12500, ebitdaCr: 7200, patCr: 3437, ebitdaMargin: 57.6 },
      { quarter: 'Q2 FY26', revenueCr: 13380, ebitdaCr: 7700, patCr: 3551, ebitdaMargin: 57.5 },
      { quarter: 'Q3 FY26', revenueCr: 14160, ebitdaCr: 8100, patCr: 3639, ebitdaMargin: 57.2 },
      { quarter: 'Q4 FY26', revenueCr: 14930, ebitdaCr: 8600, patCr: 3825, ebitdaMargin: 57.6 },
      { quarter: 'Q1 FY27', revenueCr: 16100, ebitdaCr: 9200, patCr: 3912, ebitdaMargin: 57.1 },
      { quarter: 'Q2 FY27', revenueCr: 17095, ebitdaCr: 9800, patCr: 4014, ebitdaMargin: 57.3 }
    ],
    corporateActions: [
      { id: 'ca-2001', type: 'Dividend', details: 'Dividend declared ₹36.00 per share', recordDate: '2026-06-21', amount: '₹36.00' }
    ]
  },
  {
    id: 'stock-21',
    symbol: 'AXISBANK',
    bseCode: '532215',
    name: 'Axis Bank Ltd',
    tagline: 'Leading private sector bank with fast-growing retail loan book and digital transformation franchise',
    sector: 'Banking & Financials',
    marketCapCategory: 'Large Cap',
    exchange: 'NSE & BSE',
    cmp: 1185.00,
    changeRs: 8.50,
    changePct: 0.72,
    high52w: 1339.00,
    low52w: 980.00,
    marketCapCr: 367000,
    peRatio: 14.2,
    industryPe: 16.8,
    pbRatio: 2.1,
    roe: 17.5,
    roce: 15.2,
    dividendYield: 0.08,
    debtToEquity: 6.2,
    quarterlyRevenueCr: 32000,
    quarterlyPatCr: 6917,
    quarterlyEbitdaCr: 10400,
    ebitdaMarginPct: 32.5,
    yoyPatGrowthPct: 18.0,
    healthStatus: 'outperforming',
    logoColor: 'from-rose-700 to-pink-800',
    website: 'https://axisbank.com',
    isWatchlist: false,
    shareholding: { promoter: 8.20, fii: 54.10, dii: 27.50, publicRetail: 10.20 },
    quarterlyHistory: [
      { quarter: 'Q1 FY26', revenueCr: 28000, ebitdaCr: 8900, patCr: 5797, ebitdaMargin: 31.8 },
      { quarter: 'Q2 FY26', revenueCr: 29500, ebitdaCr: 9400, patCr: 5863, ebitdaMargin: 31.9 },
      { quarter: 'Q3 FY26', revenueCr: 30400, ebitdaCr: 9800, patCr: 6071, ebitdaMargin: 32.2 },
      { quarter: 'Q4 FY26', revenueCr: 31200, ebitdaCr: 10100, patCr: 7129, ebitdaMargin: 32.4 },
      { quarter: 'Q1 FY27', revenueCr: 31500, ebitdaCr: 10200, patCr: 6035, ebitdaMargin: 32.4 },
      { quarter: 'Q2 FY27', revenueCr: 32000, ebitdaCr: 10400, patCr: 6917, ebitdaMargin: 32.5 }
    ],
    corporateActions: [
      { id: 'ca-2101', type: 'Dividend', details: 'Dividend declared ₹1.00 per share', recordDate: '2026-07-12', amount: '₹1.00' }
    ]
  },
  {
    id: 'stock-22',
    symbol: 'KOTAKBANK',
    bseCode: '500247',
    name: 'Kotak Mahindra Bank Ltd',
    tagline: 'Premier private bank with industry-leading CASA ratio, wealth management, and conservative underwriting',
    sector: 'Banking & Financials',
    marketCapCategory: 'Large Cap',
    exchange: 'NSE & BSE',
    cmp: 1790.00,
    changeRs: 11.20,
    changePct: 0.63,
    high52w: 1908.00,
    low52w: 1543.00,
    marketCapCr: 356000,
    peRatio: 19.8,
    industryPe: 16.8,
    pbRatio: 2.5,
    roe: 14.5,
    roce: 13.8,
    dividendYield: 0.12,
    debtToEquity: 4.8,
    quarterlyRevenueCr: 16500,
    quarterlyPatCr: 4133,
    quarterlyEbitdaCr: 6800,
    ebitdaMarginPct: 41.2,
    yoyPatGrowthPct: 15.0,
    healthStatus: 'in_line',
    logoColor: 'from-red-700 to-rose-800',
    website: 'https://kotak.com',
    isWatchlist: false,
    shareholding: { promoter: 25.90, fii: 36.80, dii: 24.50, publicRetail: 12.80 },
    quarterlyHistory: [
      { quarter: 'Q1 FY26', revenueCr: 13500, ebitdaCr: 5600, patCr: 3452, ebitdaMargin: 41.5 },
      { quarter: 'Q2 FY26', revenueCr: 14200, ebitdaCr: 5900, patCr: 3191, ebitdaMargin: 41.5 },
      { quarter: 'Q3 FY26', revenueCr: 14800, ebitdaCr: 6200, patCr: 3005, ebitdaMargin: 41.9 },
      { quarter: 'Q4 FY26', revenueCr: 15200, ebitdaCr: 6400, patCr: 4133, ebitdaMargin: 42.1 },
      { quarter: 'Q1 FY27', revenueCr: 15800, ebitdaCr: 6500, patCr: 3520, ebitdaMargin: 41.1 },
      { quarter: 'Q2 FY27', revenueCr: 16500, ebitdaCr: 6800, patCr: 4133, ebitdaMargin: 41.2 }
    ],
    corporateActions: [
      { id: 'ca-2201', type: 'Dividend', details: 'Dividend declared ₹2.00 per share', recordDate: '2026-07-20', amount: '₹2.00' }
    ]
  },
  {
    id: 'stock-23',
    symbol: 'M&M',
    bseCode: '500520',
    name: 'Mahindra & Mahindra Ltd',
    tagline: 'Leading automotive and farm equipment giant dominating domestic SUVs (Thar, Scorpio, XUV700) and tractors',
    sector: 'Automobile & EV',
    marketCapCategory: 'Large Cap',
    exchange: 'NSE & BSE',
    cmp: 3120.00,
    changeRs: 38.00,
    changePct: 1.23,
    high52w: 3220.00,
    low52w: 1490.00,
    marketCapCr: 388000,
    peRatio: 30.5,
    industryPe: 24.2,
    pbRatio: 5.8,
    roe: 22.4,
    roce: 26.8,
    dividendYield: 0.68,
    debtToEquity: 1.2,
    quarterlyRevenueCr: 37924,
    quarterlyPatCr: 3283,
    quarterlyEbitdaCr: 5420,
    ebitdaMarginPct: 14.3,
    yoyPatGrowthPct: 35.0,
    orderBookCr: 21500,
    healthStatus: 'outperforming',
    logoColor: 'from-red-600 to-amber-700',
    website: 'https://mahindra.com',
    isWatchlist: true,
    shareholding: { promoter: 19.32, fii: 41.20, dii: 27.80, publicRetail: 11.68 },
    quarterlyHistory: [
      { quarter: 'Q1 FY26', revenueCr: 29890, ebitdaCr: 3980, patCr: 2774, ebitdaMargin: 13.3 },
      { quarter: 'Q2 FY26', revenueCr: 34436, ebitdaCr: 4860, patCr: 2431, ebitdaMargin: 14.1 },
      { quarter: 'Q3 FY26', revenueCr: 35299, ebitdaCr: 5120, patCr: 2658, ebitdaMargin: 14.5 },
      { quarter: 'Q4 FY26', revenueCr: 35452, ebitdaCr: 5210, patCr: 2754, ebitdaMargin: 14.7 },
      { quarter: 'Q1 FY27', revenueCr: 37218, ebitdaCr: 5310, patCr: 2613, ebitdaMargin: 14.3 },
      { quarter: 'Q2 FY27', revenueCr: 37924, ebitdaCr: 5420, patCr: 3283, ebitdaMargin: 14.3 }
    ],
    corporateActions: [
      { id: 'ca-2301', type: 'Dividend', details: 'Dividend declared ₹21.10 per share', recordDate: '2026-07-05', amount: '₹21.10' }
    ]
  },
  {
    id: 'stock-24',
    symbol: 'TATASTEEL',
    bseCode: '500470',
    name: 'Tata Steel Ltd',
    tagline: 'Global steel manufacturing pioneer with domestic capacity expansion at Kalinganagar and green transition in UK',
    sector: 'Conglomerate & Energy',
    marketCapCategory: 'Large Cap',
    exchange: 'NSE & BSE',
    cmp: 154.50,
    changeRs: 1.80,
    changePct: 1.18,
    high52w: 184.60,
    low52w: 114.20,
    marketCapCr: 192800,
    peRatio: 45.0,
    industryPe: 18.0,
    pbRatio: 2.1,
    roe: 6.8,
    roce: 9.5,
    dividendYield: 2.30,
    debtToEquity: 0.85,
    quarterlyRevenueCr: 53905,
    quarterlyPatCr: 833,
    quarterlyEbitdaCr: 6220,
    ebitdaMarginPct: 11.5,
    yoyPatGrowthPct: 118.0,
    healthStatus: 'in_line',
    logoColor: 'from-blue-600 to-slate-700',
    website: 'https://tatasteel.com',
    isWatchlist: false,
    shareholding: { promoter: 33.19, fii: 19.80, dii: 23.40, publicRetail: 23.61 },
    quarterlyHistory: [
      { quarter: 'Q1 FY26', revenueCr: 59490, ebitdaCr: 5174, patCr: 525, ebitdaMargin: 8.7 },
      { quarter: 'Q2 FY26', revenueCr: 55682, ebitdaCr: 4268, patCr: -6511, ebitdaMargin: 7.7 },
      { quarter: 'Q3 FY26', revenueCr: 55312, ebitdaCr: 6263, patCr: 522, ebitdaMargin: 11.3 },
      { quarter: 'Q4 FY26', revenueCr: 58687, ebitdaCr: 6631, patCr: 611, ebitdaMargin: 11.3 },
      { quarter: 'Q1 FY27', revenueCr: 54771, ebitdaCr: 6694, patCr: 919, ebitdaMargin: 12.2 },
      { quarter: 'Q2 FY27', revenueCr: 53905, ebitdaCr: 6220, patCr: 833, ebitdaMargin: 11.5 }
    ],
    corporateActions: [
      { id: 'ca-2401', type: 'Dividend', details: 'Dividend declared ₹3.60 per share', recordDate: '2026-06-21', amount: '₹3.60' }
    ]
  },
  {
    id: 'stock-25',
    symbol: 'MAZDOCK',
    bseCode: '543237',
    name: 'Mazagon Dock Shipbuilders Ltd',
    tagline: 'Premier defense shipyard building Scorpène submarines, stealth destroyers, and naval frigates for the Indian Navy',
    sector: 'Defense & Aerospace',
    marketCapCategory: 'Large Cap',
    exchange: 'NSE & BSE',
    cmp: 4420.00,
    changeRs: 65.00,
    changePct: 1.49,
    high52w: 5860.00,
    low52w: 1780.00,
    marketCapCr: 89150,
    peRatio: 38.0,
    industryPe: 45.0,
    pbRatio: 12.5,
    roe: 38.2,
    roce: 48.5,
    dividendYield: 0.85,
    debtToEquity: 0.00,
    quarterlyRevenueCr: 2357,
    quarterlyPatCr: 696,
    quarterlyEbitdaCr: 812,
    ebitdaMarginPct: 34.4,
    yoyPatGrowthPct: 121.0,
    orderBookCr: 38500,
    healthStatus: 'high_growth',
    logoColor: 'from-blue-700 to-cyan-600',
    website: 'https://mazagondock.in',
    isWatchlist: true,
    shareholding: { promoter: 84.83, fii: 3.40, dii: 3.80, publicRetail: 7.97 },
    quarterlyHistory: [
      { quarter: 'Q1 FY26', revenueCr: 2172, ebitdaCr: 410, patCr: 314, ebitdaMargin: 18.9 },
      { quarter: 'Q2 FY26', revenueCr: 1828, ebitdaCr: 440, patCr: 333, ebitdaMargin: 24.1 },
      { quarter: 'Q3 FY26', revenueCr: 2362, ebitdaCr: 680, patCr: 627, ebitdaMargin: 28.8 },
      { quarter: 'Q4 FY26', revenueCr: 3103, ebitdaCr: 890, patCr: 663, ebitdaMargin: 28.7 },
      { quarter: 'Q1 FY27', revenueCr: 2357, ebitdaCr: 812, patCr: 696, ebitdaMargin: 34.4 },
      { quarter: 'Q2 FY27', revenueCr: 2580, ebitdaCr: 890, patCr: 750, ebitdaMargin: 34.5 }
    ],
    corporateActions: [
      { id: 'ca-2501', type: 'Stock Split', details: 'Stock split in 1:2 ratio approved by board', recordDate: '2026-11-15' }
    ]
  },
  {
    id: 'stock-26',
    symbol: 'COCHINSHIP',
    bseCode: '540678',
    name: 'Cochin Shipyard Ltd',
    tagline: 'Shipbuilding & ship repair giant; builder of INS Vikrant aircraft carrier and European zero-emission electric cargo vessels',
    sector: 'Defense & Aerospace',
    marketCapCategory: 'Large Cap',
    exchange: 'NSE & BSE',
    cmp: 1680.00,
    changeRs: 28.50,
    changePct: 1.73,
    high52w: 2979.00,
    low52w: 435.00,
    marketCapCr: 44200,
    peRatio: 48.5,
    industryPe: 45.0,
    pbRatio: 8.9,
    roe: 19.5,
    roce: 25.8,
    dividendYield: 0.65,
    debtToEquity: 0.00,
    quarterlyRevenueCr: 1143,
    quarterlyPatCr: 189,
    quarterlyEbitdaCr: 265,
    ebitdaMarginPct: 23.2,
    yoyPatGrowthPct: 65.0,
    orderBookCr: 22000,
    healthStatus: 'high_growth',
    logoColor: 'from-cyan-600 to-blue-800',
    website: 'https://cochinshipyard.in',
    isWatchlist: true,
    shareholding: { promoter: 72.86, fii: 4.80, dii: 6.20, publicRetail: 16.14 },
    quarterlyHistory: [
      { quarter: 'Q1 FY26', revenueCr: 587, ebitdaCr: 78, patCr: 99, ebitdaMargin: 13.3 },
      { quarter: 'Q2 FY26', revenueCr: 1012, ebitdaCr: 248, patCr: 181, ebitdaMargin: 24.5 },
      { quarter: 'Q3 FY26', revenueCr: 1056, ebitdaCr: 278, patCr: 244, ebitdaMargin: 26.3 },
      { quarter: 'Q4 FY26', revenueCr: 1286, ebitdaCr: 340, patCr: 259, ebitdaMargin: 26.4 },
      { quarter: 'Q1 FY27', revenueCr: 771, ebitdaCr: 178, patCr: 174, ebitdaMargin: 23.1 },
      { quarter: 'Q2 FY27', revenueCr: 1143, ebitdaCr: 265, patCr: 189, ebitdaMargin: 23.2 }
    ],
    corporateActions: [
      { id: 'ca-2601', type: 'Dividend', details: 'Dividend declared ₹4.00 per share', recordDate: '2026-09-20', amount: '₹4.00' }
    ]
  },
  {
    id: 'stock-27',
    symbol: 'SUZLON',
    bseCode: '532667',
    name: 'Suzlon Energy Ltd',
    tagline: 'Turnaround green energy champion with 3.14 MW wind turbines and 5+ GW order book with zero debt',
    sector: 'Green Energy & Infra',
    marketCapCategory: 'Large Cap',
    exchange: 'NSE & BSE',
    cmp: 64.20,
    changeRs: 1.10,
    changePct: 1.74,
    high52w: 86.00,
    low52w: 30.50,
    marketCapCr: 87500,
    peRatio: 72.0,
    industryPe: 50.0,
    pbRatio: 18.2,
    roe: 28.5,
    roce: 32.1,
    dividendYield: 0.00,
    debtToEquity: 0.00,
    quarterlyRevenueCr: 2093,
    quarterlyPatCr: 201,
    quarterlyEbitdaCr: 294,
    ebitdaMarginPct: 14.0,
    yoyPatGrowthPct: 96.0,
    orderBookCr: 5100,
    healthStatus: 'high_growth',
    logoColor: 'from-emerald-500 to-green-600',
    website: 'https://suzlon.com',
    isWatchlist: true,
    shareholding: { promoter: 13.29, fii: 23.40, dii: 10.80, publicRetail: 52.51 },
    quarterlyHistory: [
      { quarter: 'Q1 FY26', revenueCr: 1348, ebitdaCr: 199, patCr: 101, ebitdaMargin: 14.8 },
      { quarter: 'Q2 FY26', revenueCr: 1417, ebitdaCr: 225, patCr: 102, ebitdaMargin: 15.9 },
      { quarter: 'Q3 FY26', revenueCr: 1553, ebitdaCr: 248, patCr: 203, ebitdaMargin: 16.0 },
      { quarter: 'Q4 FY26', revenueCr: 2179, ebitdaCr: 354, patCr: 254, ebitdaMargin: 16.2 },
      { quarter: 'Q1 FY27', revenueCr: 2016, ebitdaCr: 370, patCr: 302, ebitdaMargin: 18.4 },
      { quarter: 'Q2 FY27', revenueCr: 2093, ebitdaCr: 294, patCr: 201, ebitdaMargin: 14.0 }
    ],
    corporateActions: [
      { id: 'ca-2701', type: 'AGM / EGM', details: 'Board approval for acquisition of Renom Energy Services', recordDate: '2026-09-08' }
    ]
  },
  {
    id: 'stock-28',
    symbol: 'IREDA',
    bseCode: '544026',
    name: 'Indian Renewable Energy Development Agency',
    tagline: 'Navratna green financing non-banking financial PSU funding solar parks, wind farms, green hydrogen, and EV infrastructure',
    sector: 'Green Energy & Infra',
    marketCapCategory: 'Large Cap',
    exchange: 'NSE & BSE',
    cmp: 218.40,
    changeRs: 3.50,
    changePct: 1.63,
    high52w: 310.00,
    low52w: 96.50,
    marketCapCr: 58700,
    peRatio: 38.5,
    industryPe: 22.0,
    pbRatio: 6.2,
    roe: 17.8,
    roce: 15.5,
    dividendYield: 0.00,
    debtToEquity: 5.8,
    quarterlyRevenueCr: 1577,
    quarterlyPatCr: 388,
    quarterlyEbitdaCr: 1420,
    ebitdaMarginPct: 90.0,
    yoyPatGrowthPct: 36.2,
    orderBookCr: 65000,
    healthStatus: 'high_growth',
    logoColor: 'from-green-600 to-teal-700',
    website: 'https://ireda.in',
    isWatchlist: true,
    shareholding: { promoter: 75.00, fii: 2.10, dii: 1.80, publicRetail: 21.10 },
    quarterlyHistory: [
      { quarter: 'Q1 FY26', revenueCr: 1144, ebitdaCr: 1020, patCr: 295, ebitdaMargin: 89.2 },
      { quarter: 'Q2 FY26', revenueCr: 1177, ebitdaCr: 1060, patCr: 285, ebitdaMargin: 90.1 },
      { quarter: 'Q3 FY26', revenueCr: 1253, ebitdaCr: 1120, patCr: 336, ebitdaMargin: 89.4 },
      { quarter: 'Q4 FY26', revenueCr: 1391, ebitdaCr: 1240, patCr: 337, ebitdaMargin: 89.1 },
      { quarter: 'Q1 FY27', revenueCr: 1511, ebitdaCr: 1360, patCr: 384, ebitdaMargin: 90.0 },
      { quarter: 'Q2 FY27', revenueCr: 1577, ebitdaCr: 1420, patCr: 388, ebitdaMargin: 90.0 }
    ],
    corporateActions: [
      { id: 'ca-2801', type: 'AGM / EGM', details: 'Fund raise of ₹4,500 Cr via QIP approved by board', recordDate: '2026-09-22' }
    ]
  },
  {
    id: 'stock-29',
    symbol: 'TITAN',
    bseCode: '500114',
    name: 'Titan Company Ltd',
    tagline: 'Consumer lifestyle powerhouse with Tanishq, Mia, Fastrack, Titan Eye+, and international jewelry expansion',
    sector: 'Consumer & Retail',
    marketCapCategory: 'Large Cap',
    exchange: 'NSE & BSE',
    cmp: 3480.00,
    changeRs: 22.00,
    changePct: 0.64,
    high52w: 3886.00,
    low52w: 3055.00,
    marketCapCr: 308900,
    peRatio: 88.5,
    industryPe: 68.0,
    pbRatio: 28.5,
    roe: 32.4,
    roce: 38.6,
    dividendYield: 0.32,
    debtToEquity: 1.1,
    quarterlyRevenueCr: 13473,
    quarterlyPatCr: 704,
    quarterlyEbitdaCr: 1350,
    ebitdaMarginPct: 10.0,
    yoyPatGrowthPct: -23.0,
    healthStatus: 'in_line',
    logoColor: 'from-yellow-600 to-amber-700',
    website: 'https://titancompany.in',
    isWatchlist: false,
    shareholding: { promoter: 52.90, fii: 18.40, dii: 11.20, publicRetail: 17.50 },
    quarterlyHistory: [
      { quarter: 'Q1 FY26', revenueCr: 10106, ebitdaCr: 1100, patCr: 756, ebitdaMargin: 10.9 },
      { quarter: 'Q2 FY26', revenueCr: 11660, ebitdaCr: 1355, patCr: 916, ebitdaMargin: 11.6 },
      { quarter: 'Q3 FY26', revenueCr: 13052, ebitdaCr: 1450, patCr: 1040, ebitdaMargin: 11.1 },
      { quarter: 'Q4 FY26', revenueCr: 11257, ebitdaCr: 1190, patCr: 771, ebitdaMargin: 10.6 },
      { quarter: 'Q1 FY27', revenueCr: 12223, ebitdaCr: 1205, patCr: 715, ebitdaMargin: 9.9 },
      { quarter: 'Q2 FY27', revenueCr: 13473, ebitdaCr: 1350, patCr: 704, ebitdaMargin: 10.0 }
    ],
    corporateActions: [
      { id: 'ca-2901', type: 'Dividend', details: 'Dividend declared ₹11.00 per share', recordDate: '2026-06-27', amount: '₹11.00' }
    ]
  },
  {
    id: 'stock-30',
    symbol: 'POLYCAB',
    bseCode: '542652',
    name: 'Polycab India Ltd',
    tagline: 'India’s #1 wires, cables and FMEG manufacturer riding domestic infrastructure, real estate, and export boom',
    sector: 'Electronics & EMS',
    marketCapCategory: 'Large Cap',
    exchange: 'NSE & BSE',
    cmp: 6850.00,
    changeRs: 72.00,
    changePct: 1.06,
    high52w: 7590.00,
    low52w: 4620.00,
    marketCapCr: 103000,
    peRatio: 52.0,
    industryPe: 45.0,
    pbRatio: 12.8,
    roe: 28.5,
    roce: 35.8,
    dividendYield: 0.45,
    debtToEquity: 0.05,
    quarterlyRevenueCr: 5498,
    quarterlyPatCr: 440,
    quarterlyEbitdaCr: 680,
    ebitdaMarginPct: 12.4,
    yoyPatGrowthPct: 3.5,
    orderBookCr: 14200,
    healthStatus: 'outperforming',
    logoColor: 'from-red-600 to-orange-700',
    website: 'https://polycab.com',
    isWatchlist: false,
    shareholding: { promoter: 65.24, fii: 12.80, dii: 14.50, publicRetail: 7.46 },
    quarterlyHistory: [
      { quarter: 'Q1 FY26', revenueCr: 3889, ebitdaCr: 549, patCr: 403, ebitdaMargin: 14.1 },
      { quarter: 'Q2 FY26', revenueCr: 4218, ebitdaCr: 609, patCr: 430, ebitdaMargin: 14.4 },
      { quarter: 'Q3 FY26', revenueCr: 4340, ebitdaCr: 570, patCr: 416, ebitdaMargin: 13.1 },
      { quarter: 'Q4 FY26', revenueCr: 5586, ebitdaCr: 762, patCr: 546, ebitdaMargin: 13.6 },
      { quarter: 'Q1 FY27', revenueCr: 4698, ebitdaCr: 589, patCr: 401, ebitdaMargin: 12.5 },
      { quarter: 'Q2 FY27', revenueCr: 5498, ebitdaCr: 680, patCr: 440, ebitdaMargin: 12.4 }
    ],
    corporateActions: [
      { id: 'ca-3001', type: 'Dividend', details: 'Dividend declared ₹30.00 per share', recordDate: '2026-07-09', amount: '₹30.00' }
    ]
  }
];

export const INITIAL_STOCK_UPDATES: StockUpdate[] = [
  {
    id: 'upd-1',
    stockId: 'stock-3',
    stockSymbol: 'HAL',
    stockName: 'Hindustan Aeronautics Ltd',
    sector: 'Defense & Aerospace',
    logoColor: 'from-amber-500 to-orange-700',
    title: 'MoD Seals ₹26,000 Cr Deal for 240 AL-31FP Aero-Engines for Sukhoi-30 MKI Fleet',
    date: '2026-10-14',
    period: 'Q2 FY27',
    type: 'order_win',
    summary: 'Cabinet Committee on Security (CCS) officially awards HAL a mega contract worth ₹26,000 Cr to manufacture 240 AL-31FP aero-engines with over 54% indigenous content at its Koraput Division.',
    kpiSnapshot: {
      revenueCr: 6200,
      yoyRevGrowthPct: 11.0,
      ebitdaCr: 1920,
      ebitdaMarginPct: 31.0,
      patCr: 1510,
      yoyPatGrowthPct: 22.1,
      epsRs: 22.58
    },
    keyHighlights: [
      'Order book escalates past ₹1,24,000 Cr (~4x trailing 12-month revenue).',
      'Indigenous content on Sukhoi engine program reaches 54% vs 0% originally.',
      'LCA Tejas Mk1A deliveries initiated to Indian Air Force.'
    ],
    managementGuidance: [
      'Double-digit revenue CAGR targeted over the next 5 years.',
      'Export pipeline includes Light Combat Helicopter (Prachand) to Southeast Asian and African allies.'
    ],
    headwindsAndRisks: [
      'GE 404 aero-engine supply delays from US partner remain a key monitorable.'
    ],
    orderWinsOrCapex: [
      '₹26,000 Cr Sukhoi engine contract signed with Indian Air Force.',
      'Upcoming ₹60,000 Cr tender for 97 additional LCA Tejas Mk1A jets in final negotiations.'
    ],
    filings: [
      { title: 'HAL - Exchange Disclosure SEBI Reg 30 (Engine Deal).pdf', type: 'sebi_lodr', size: '850 KB' },
      { title: 'HAL Investor Presentation Q2.pdf', type: 'presentation', size: '2.4 MB' }
    ],
    likesCount: 142,
    bookmarkedByInvestors: 260
  },
  {
    id: 'upd-2',
    stockId: 'stock-2',
    stockSymbol: 'DIXON',
    stockName: 'Dixon Technologies (India) Ltd',
    sector: 'Electronics & EMS',
    logoColor: 'from-emerald-500 to-teal-700',
    title: 'Q2 Net Profit Surges 108% YoY to ₹140 Cr; Smartphone Volumes Double on Ismartu Integration',
    date: '2026-10-14',
    period: 'Q2 FY27',
    type: 'quarterly_results',
    summary: 'Consolidated revenue climbed 60% YoY to ₹6,580 Cr driven by exponential mobile phone manufacturing ramp-up for Motorola, Xiaomi, and Transsion brands.',
    kpiSnapshot: {
      revenueCr: 6580,
      yoyRevGrowthPct: 60.5,
      ebitdaCr: 256,
      ebitdaMarginPct: 3.9,
      patCr: 140,
      yoyPatGrowthPct: 108.4,
      epsRs: 23.40
    },
    keyHighlights: [
      'Smartphone production run-rate reached 3.5 million units per month.',
      'IT hardware (laptops & tablets) PLI plant commenced pilot trial run.'
    ],
    managementGuidance: [
      'On track to achieve ₹30,000 Cr annual revenue milestone in FY27.',
      'Component localization (display modules, camera modules) will expand EBITDA margins by 60-80 bps.'
    ],
    headwindsAndRisks: [
      'Customer concentration in smartphone vertical requires continuous diversification into white goods.'
    ],
    orderWinsOrCapex: [
      'Signed definitive contract with global PC brand for laptop assembly at Noida facility.'
    ],
    filings: [
      { title: 'Dixon Tech - Audited Q2 FY27 Financial Statements.pdf', type: 'financial_results', size: '1.8 MB' }
    ],
    likesCount: 94,
    bookmarkedByInvestors: 188
  },
  {
    id: 'upd-3',
    stockId: 'stock-1',
    stockSymbol: 'TATAMOTORS',
    stockName: 'Tata Motors Ltd',
    sector: 'Automobile & EV',
    logoColor: 'from-blue-600 to-indigo-700',
    title: 'Demerger of Commercial & Passenger Vehicle Arms Enters Final Phase; JLR Free Cash Flow ₹6,800 Cr',
    date: '2026-10-14',
    period: 'Q2 FY27',
    type: 'regulatory_lodr',
    summary: 'Tata Motors confirms NCLT hearing completion for demerger into two independent listed companies: Commercial Vehicles (CV) and Passenger Vehicles / Electric Vehicles (PV+EV+JLR).',
    kpiSnapshot: {
      revenueCr: 108048,
      yoyRevGrowthPct: 5.7,
      ebitdaCr: 15785,
      ebitdaMarginPct: 14.6,
      patCr: 5566,
      yoyPatGrowthPct: 73.8,
      epsRs: 15.12
    },
    keyHighlights: [
      'JLR net debt reduced to under £1.2 Billion on path to net cash positive by end of fiscal.',
      'Domestic heavy commercial vehicle market share maintained at 48.2%.'
    ],
    managementGuidance: [
      'JLR EBIT margin guidance reaffirmed at 8.5% for FY27.',
      'Curvv EV and Sierra EV launches expected to solidify >65% domestic electric car market share.'
    ],
    headwindsAndRisks: [
      'UK port aluminum logistics disruption caused minor JLR production deferral.'
    ],
    orderWinsOrCapex: [
      'Won CESL tender for 3,000 electric commercial transit buses across Delhi and Mumbai.'
    ],
    filings: [
      { title: 'Tata Motors - Demerger Scheme Investor Note.pdf', type: 'sebi_lodr', size: '3.1 MB' }
    ],
    likesCount: 88,
    bookmarkedByInvestors: 215
  },
  {
    id: 'upd-4',
    stockId: 'stock-4',
    stockSymbol: 'TRENT',
    stockName: 'Trent Ltd',
    sector: 'Consumer & Retail',
    logoColor: 'from-pink-600 to-rose-700',
    title: 'Zudio Store Count Crosses 600 Across India; Q2 PAT Up 82% YoY at ₹412 Cr',
    date: '2026-10-14',
    period: 'Q2 FY27',
    type: 'quarterly_results',
    summary: 'Trent delivered industry-leading same-store sales growth (SSSG) of 12% alongside aggressive pan-India store rollouts across Tier-2 and Tier-3 cities.',
    kpiSnapshot: {
      revenueCr: 4250,
      yoyRevGrowthPct: 42.5,
      ebitdaCr: 680,
      ebitdaMarginPct: 16.0,
      patCr: 412,
      yoyPatGrowthPct: 82.0,
      epsRs: 11.60
    },
    keyHighlights: [
      'Opened 65 new Zudio stores and 8 Westside stores in the quarter.',
      'Star Bazaar food retail joint venture recorded 4th consecutive quarter of positive operating profit.'
    ],
    managementGuidance: [
      'On track to add 200+ Zudio stores and 30+ Westside stores in full fiscal FY27.',
      'Piloting Zudio international expansion in UAE / GCC region.'
    ],
    headwindsAndRisks: [
      'High competition from regional value-fashion players copying the Zudio private label playbook.'
    ],
    orderWinsOrCapex: [
      'Commissioned 2 new automated regional distribution centers in Bengaluru and Kolkata.'
    ],
    filings: [
      { title: 'Trent Ltd - Q2 FY27 Earnings Press Release.pdf', type: 'financial_results', size: '1.2 MB' },
      { title: 'Trent - Shareholder Letter Q2.pdf', type: 'presentation', size: '3.4 MB' }
    ],
    likesCount: 115,
    bookmarkedByInvestors: 240
  },
  {
    id: 'upd-5',
    stockId: 'stock-8',
    stockSymbol: 'TCS',
    stockName: 'Tata Consultancy Services Ltd',
    sector: 'IT & Software',
    logoColor: 'from-blue-600 to-cyan-700',
    title: 'Q2 Net Profit Rises to ₹11,909 Cr; AI Deal TCV Crosses $1.2 Billion with Major Global Banks',
    date: '2026-10-14',
    period: 'Q2 FY27',
    type: 'quarterly_results',
    summary: 'TCS reported consolidated revenue of ₹64,259 Cr (+8.2% YoY in constant currency) driven by broad-based growth across BFSI and Manufacturing, alongside declaring ₹10/share interim dividend.',
    kpiSnapshot: {
      revenueCr: 64259,
      yoyRevGrowthPct: 8.2,
      ebitdaCr: 16180,
      ebitdaMarginPct: 25.2,
      patCr: 11909,
      yoyPatGrowthPct: 5.0,
      epsRs: 32.80
    },
    keyHighlights: [
      'Total Contract Value (TCV) stood robust at $8.6 Billion.',
      'AI pipeline expanded 120% with enterprise clients piloting generative AI workflows.',
      'Attrition stabilized at 12.3% with employee utilization above 85%.'
    ],
    managementGuidance: [
      'Expect acceleration in discretionary BFSI tech spend going into calendar year 2027.',
      'Operating margins targeted within 26-28% long-term corridor.'
    ],
    headwindsAndRisks: [
      'European industrial clients taking longer conversion cycles for new digital transformation contracts.'
    ],
    orderWinsOrCapex: [
      'Signed multi-million dollar core banking transformation deal with top-tier Scandinavian banking group.'
    ],
    filings: [
      { title: 'TCS - Audited Q2 FY27 Financial Results.pdf', type: 'financial_results', size: '2.1 MB' }
    ],
    likesCount: 168,
    bookmarkedByInvestors: 310
  },
  {
    id: 'upd-6',
    stockId: 'stock-14',
    stockSymbol: 'BEL',
    stockName: 'Bharat Electronics Ltd',
    sector: 'Defense & Aerospace',
    logoColor: 'from-blue-600 to-indigo-700',
    title: 'Bags Fresh Orders Worth ₹3,200 Cr for Coastal Surveillance Radars & Electronic Warfare Suites',
    date: '2026-10-14',
    period: 'Q2 FY27',
    type: 'order_win',
    summary: 'Bharat Electronics secures major defense contracts for indigenous EW systems, battlefield surveillance radars, and tank fire control systems from Indian Army and Indian Coast Guard.',
    kpiSnapshot: {
      revenueCr: 4580,
      yoyRevGrowthPct: 14.2,
      ebitdaCr: 1240,
      ebitdaMarginPct: 27.1,
      patCr: 1092,
      yoyPatGrowthPct: 38.4,
      epsRs: 1.49
    },
    keyHighlights: [
      'Cumulative order book reaches record ₹76,000 Cr (~3.8x FY26 turnover).',
      'Non-defense electronics vertical (civilian air traffic systems & medical tech) grew 28% YoY.'
    ],
    managementGuidance: [
      'Annual revenue guidance upgraded to 15-18% YoY growth with sustained 25%+ EBITDA margins.',
      'Exports targeted to reach 10% of total sales within 3 years.'
    ],
    headwindsAndRisks: [
      'Global semiconductor component delivery lead times require elevated inventory stocking.'
    ],
    orderWinsOrCapex: [
      'Won ₹1,150 Cr contract for Next-Gen EW suite for front-line warships.'
    ],
    filings: [
      { title: 'BEL - Exchange Circular (New Defense Orders).pdf', type: 'sebi_lodr', size: '640 KB' }
    ],
    likesCount: 92,
    bookmarkedByInvestors: 175
  },
  {
    id: 'upd-7',
    stockId: 'stock-18',
    stockSymbol: 'TATAPOWER',
    stockName: 'Tata Power Company Ltd',
    sector: 'Green Energy & Infra',
    logoColor: 'from-emerald-600 to-teal-800',
    title: 'Solar Cell & Module Gigafactory in Tamil Nadu Achieves 4.3 GW Peak Commercial Production',
    date: '2026-10-14',
    period: 'Q2 FY27',
    type: 'capacity_expansion',
    summary: 'Tata Power Renewable Energy completes commissioning of its 4.3 GW greenfield solar cell and bifacial module manufacturing facility in Tirunelveli, Tamil Nadu, reducing import dependence.',
    kpiSnapshot: {
      revenueCr: 15697,
      yoyRevGrowthPct: 8.5,
      ebitdaCr: 3808,
      ebitdaMarginPct: 24.3,
      patCr: 1533,
      yoyPatGrowthPct: 7.5,
      epsRs: 4.80
    },
    keyHighlights: [
      'Installed renewable capacity surpassed 10 GW across solar, wind, and pumped hydro.',
      'Public EV charging network crossed 100,000 home and commercial charging points.'
    ],
    managementGuidance: [
      'Capital expenditure plan of ₹20,000 Cr committed for FY27 across green energy and transmission.',
      'Targeting 70% clean and green portfolio by 2030.'
    ],
    headwindsAndRisks: [
      'Intermittent renewable grid curtailment in western corridor requires pumped storage acceleration.'
    ],
    orderWinsOrCapex: [
      'Commissioned 4.3 GW Tirunelveli solar gigafactory with ₹4,300 Cr total capital outlay.'
    ],
    filings: [
      { title: 'Tata Power - Gigafactory Press Release.pdf', type: 'presentation', size: '1.9 MB' }
    ],
    likesCount: 84,
    bookmarkedByInvestors: 160
  },
  {
    id: 'upd-8',
    stockId: 'stock-19',
    stockSymbol: 'ZOMATO',
    stockName: 'Zomato Ltd',
    sector: 'Consumer & Retail',
    logoColor: 'from-rose-600 to-red-600',
    title: 'Blinkit Dark Store Network Crosses 800; Q2 GOV Climbs 122% YoY as Quick Commerce Surges',
    date: '2026-10-14',
    period: 'Q2 FY27',
    type: 'quarterly_results',
    summary: 'Consolidated revenue rose to ₹4,799 Cr while Blinkit turned adjusted EBITDA positive across major metro clusters, driven by rapid SKU expansion into consumer electronics and beauty.',
    kpiSnapshot: {
      revenueCr: 4799,
      yoyRevGrowthPct: 68.5,
      ebitdaCr: 226,
      ebitdaMarginPct: 4.7,
      patCr: 176,
      yoyPatGrowthPct: 389.0,
      epsRs: 0.20
    },
    keyHighlights: [
      'Blinkit Gross Order Value (GOV) reached ₹6,100 Cr in a single quarter.',
      'Food delivery Gross Order Value expanded 21% YoY with stable 3.2% contribution margins.',
      'District (going-out vertical) launched combining dining out and live events.'
    ],
    managementGuidance: [
      'Aiming for 2,000 Blinkit dark stores across top 50 Indian cities by end of calendar 2026.',
      'Quick commerce segment on track to match food delivery revenue within 12 months.'
    ],
    headwindsAndRisks: [
      'Fierce competitive land-grab in dark store warehouse leasing driving short-term metro rental costs.'
    ],
    orderWinsOrCapex: [
      'Acquisition of Paytm ticketing and entertainment business consolidated into District app.'
    ],
    filings: [
      { title: 'Zomato Ltd - Q2 FY27 Shareholder Letter.pdf', type: 'presentation', size: '4.2 MB' }
    ],
    likesCount: 135,
    bookmarkedByInvestors: 290
  },
  {
    id: 'upd-9',
    stockId: 'stock-5',
    stockSymbol: 'HDFCBANK',
    stockName: 'HDFC Bank Ltd',
    sector: 'Banking & Financials',
    logoColor: 'from-blue-700 to-slate-800',
    title: 'Q2 Net Profit Advances 16.8% YoY to ₹16,821 Cr; Core Net Interest Margin Stabilizes at 3.47%',
    date: '2026-10-14',
    period: 'Q2 FY27',
    type: 'quarterly_results',
    summary: 'HDFC Bank announced robust Q2 FY27 results with Net Interest Income rising to ₹30,114 Cr. Loan-to-deposit ratio (LDR) improved further by 210 bps following disciplined deposit accretion of ₹1.22 Lakh Cr in the quarter.',
    kpiSnapshot: {
      revenueCr: 85500,
      yoyRevGrowthPct: 15.2,
      ebitdaCr: 24200,
      ebitdaMarginPct: 28.3,
      patCr: 16821,
      yoyPatGrowthPct: 16.8,
      epsRs: 22.10
    },
    keyHighlights: [
      'Gross NPA declined 8 bps QoQ to 1.25%; Net NPA stood pristine at 0.35%.',
      'Retail deposits grew 18.2% YoY, driving total deposit base past ₹25.1 Lakh Cr.',
      'Operating profit (PPOP) rose 14.3% YoY to ₹23,590 Cr.'
    ],
    managementGuidance: [
      'Targeting steady return on assets (RoA) between 1.9% and 2.0% as merger synergies materialize.',
      'Branch addition pace calibrated to 600-800 new branches for full fiscal year.'
    ],
    headwindsAndRisks: [
      'System-wide competition for CASA deposits exerting mild upward pressure on cost of funds.'
    ],
    orderWinsOrCapex: [
      'Invested ₹1,400 Cr in next-gen digital core and AI risk underwriting infrastructure.'
    ],
    filings: [
      { title: 'HDFC Bank - Q2 FY27 Audited Results & Press Release.pdf', type: 'financial_results', size: '2.8 MB' },
      { title: 'HDFC Bank Investor Presentation Q2.pdf', type: 'presentation', size: '4.5 MB' }
    ],
    likesCount: 195,
    bookmarkedByInvestors: 340
  },
  {
    id: 'upd-10',
    stockId: 'stock-7',
    stockSymbol: 'RELIANCE',
    stockName: 'Reliance Industries Ltd',
    sector: 'Conglomerate & Energy',
    logoColor: 'from-amber-600 to-red-700',
    title: 'Q2 PAT at ₹19,323 Cr; Jio 5G Monetization Accelerates and Retail Footfall Hits 310 Million',
    date: '2026-10-14',
    period: 'Q2 FY27',
    type: 'quarterly_results',
    summary: 'Reliance posted consolidated quarterly EBITDA of ₹43,934 Cr with stellar contributions from Consumer businesses (Jio and Retail) offsetting planned maintenance shutdowns in the Oil-to-Chemicals (O2C) refining segment.',
    kpiSnapshot: {
      revenueCr: 240357,
      yoyRevGrowthPct: 6.8,
      ebitdaCr: 43934,
      ebitdaMarginPct: 18.3,
      patCr: 19323,
      yoyPatGrowthPct: -2.1,
      epsRs: 28.58
    },
    keyHighlights: [
      'Reliance Jio Q2 net profit reached ₹5,447 Cr with ARPU increasing to ₹195.10.',
      'Reliance Retail gross revenue topped ₹76,306 Cr across 18,918 retail stores nationwide.',
      'JioAirFiber installations scaled to 1.4 million homes.'
    ],
    managementGuidance: [
      'Solar giga-factory at Jamnagar on schedule for phase-1 commercial rollout in late 2026.',
      'Capex discipline prioritized to maintain negative net-debt across consumer subsidiaries.'
    ],
    headwindsAndRisks: [
      'Global refining crack margins softened due to higher middle distillate export supply from East Asia.'
    ],
    orderWinsOrCapex: [
      'New Energy Capex of ₹5,200 Cr deployed toward battery and electrolyzer manufacturing facilities.'
    ],
    filings: [
      { title: 'Reliance Industries - Q2 FY27 Financial Statements.pdf', type: 'financial_results', size: '5.2 MB' },
      { title: 'RIL Media Release & Operating Review.pdf', type: 'presentation', size: '3.6 MB' }
    ],
    likesCount: 220,
    bookmarkedByInvestors: 410
  },
  {
    id: 'upd-11',
    stockId: 'stock-9',
    stockSymbol: 'INFY',
    stockName: 'Infosys Ltd',
    sector: 'IT & Software',
    logoColor: 'from-blue-500 to-indigo-600',
    title: 'Infosys Raises FY27 CC Revenue Guidance to 4.5-5.0%; Q2 PAT Jumps 5% YoY to ₹6,506 Cr',
    date: '2026-10-14',
    period: 'Q2 FY27',
    type: 'quarterly_results',
    summary: 'Infosys delivered strong constant currency revenue growth of 3.1% QoQ, powered by large AI transformation deals and expanding Topaz generative AI deployments across global Fortune 500 enterprises.',
    kpiSnapshot: {
      revenueCr: 40986,
      yoyRevGrowthPct: 5.1,
      ebitdaCr: 9850,
      ebitdaMarginPct: 24.0,
      patCr: 6506,
      yoyPatGrowthPct: 4.8,
      epsRs: 15.68
    },
    keyHighlights: [
      'Large deal Total Contract Value (TCV) stood at $2.4 Billion with 52% net new wins.',
      'Operating margin expanded 30 bps QoQ to 21.1%.',
      'Declared interim dividend of ₹21.00 per share.'
    ],
    managementGuidance: [
      'FY27 revenue guidance upgraded from 3.0-4.0% to 4.5-5.0% in constant currency.',
      'Operating margin guidance maintained in the band of 20-22%.'
    ],
    headwindsAndRisks: [
      'Discretionary software projects in European manufacturing vertical remain cautious.'
    ],
    orderWinsOrCapex: [
      'Signed 5-year digital transformation pact with leading British insurance and wealth manager.'
    ],
    filings: [
      { title: 'Infosys - Audited IFRS Financial Results Q2 FY27.pdf', type: 'financial_results', size: '2.5 MB' },
      { title: 'Infosys Fact Sheet & Management Commentary.pdf', type: 'presentation', size: '1.7 MB' }
    ],
    likesCount: 150,
    bookmarkedByInvestors: 280
  },
  {
    id: 'upd-12',
    stockId: 'stock-6',
    stockSymbol: 'KPITTECH',
    stockName: 'KPIT Technologies Ltd',
    sector: 'IT & Software',
    logoColor: 'from-cyan-600 to-blue-600',
    title: 'Revenue Crosses ₹1,365 Cr; Secures $140M SDV Software Architecture Contract from European OEM',
    date: '2026-10-14',
    period: 'Q2 FY27',
    type: 'order_win',
    summary: 'KPIT Technologies secures a landmark $140 Million multi-year software defined vehicle (SDV) program from a marquee European automotive OEM, covering autonomous driving middleware and electrification stack.',
    kpiSnapshot: {
      revenueCr: 1365,
      yoyRevGrowthPct: 15.7,
      ebitdaCr: 284,
      ebitdaMarginPct: 20.8,
      patCr: 204,
      yoyPatGrowthPct: 44.8,
      epsRs: 7.48
    },
    keyHighlights: [
      'Won strategic multi-year SDV production contract with top German automotive group.',
      'Operating EBITDA margin reached 20.8%, expanding 80 bps YoY.',
      'Cash & liquid equivalents increased to ₹1,150 Cr.'
    ],
    managementGuidance: [
      'Reaffirming FY27 CC revenue growth guidance in 18-22% range with sustained 20.5%+ EBITDA margins.',
      'Expanding engineering hubs in Munich and Detroit to service OEM engagements.'
    ],
    headwindsAndRisks: [
      'Delays in commercial EV model launches by select European automotive customers.'
    ],
    orderWinsOrCapex: [
      '$140M SDV engagement won with tier-1 European automotive conglomerate.'
    ],
    filings: [
      { title: 'KPIT Tech - Exchange Announcement (SDV Contract Win).pdf', type: 'sebi_lodr', size: '520 KB' }
    ],
    likesCount: 110,
    bookmarkedByInvestors: 190
  },
  {
    id: 'upd-13',
    stockId: 'stock-10',
    stockSymbol: 'ICICIBANK',
    stockName: 'ICICI Bank Ltd',
    sector: 'Banking & Financials',
    logoColor: 'from-orange-600 to-amber-700',
    title: 'Q2 Net Profit Surges 14.5% YoY to ₹11,746 Cr; Net NPA Drops to Multi-Year Low of 0.42%',
    date: '2026-10-14',
    period: 'Q2 FY27',
    type: 'quarterly_results',
    summary: 'ICICI Bank delivered another market-beating performance with Net Interest Income advancing 9.5% YoY to ₹20,048 Cr. Domestic loan portfolio expanded 15.7% YoY driven by business banking and rural lending.',
    kpiSnapshot: {
      revenueCr: 45200,
      yoyRevGrowthPct: 11.3,
      ebitdaCr: 21800,
      ebitdaMarginPct: 48.2,
      patCr: 11746,
      yoyPatGrowthPct: 14.5,
      epsRs: 16.70
    },
    keyHighlights: [
      'Provision coverage ratio (PCR) stood industry-leading at 82.4%.',
      'Retail loan book grew 14.2% YoY, constituting 54% of total advances.',
      'Return on Equity (RoE) annualized at 18.5% with RoA at 2.36%.'
    ],
    managementGuidance: [
      'Underwriting standards remain risk-calibrated with zero appetite for unhedged sub-prime retail lending.',
      'Technology spend to remain steady at 9.0% to 9.5% of total operating expenses.'
    ],
    headwindsAndRisks: [
      'Unsecured personal loan portfolio seeing minor moderation in growth due to RBI risk-weight norms.'
    ],
    orderWinsOrCapex: [
      'Expanded iMobile Pay ecosystem with 12 million non-ICICI Bank registered users.'
    ],
    filings: [
      { title: 'ICICI Bank - Unaudited Financial Results Q2 FY27.pdf', type: 'financial_results', size: '2.1 MB' }
    ],
    likesCount: 162,
    bookmarkedByInvestors: 295
  },
  {
    id: 'upd-14',
    stockId: 'stock-11',
    stockSymbol: 'SBIN',
    stockName: 'State Bank of India',
    sector: 'Banking & Financials',
    logoColor: 'from-blue-700 to-cyan-800',
    title: 'SBI Registers Record Q2 Net Profit of ₹18,331 Cr; Advances Cross ₹39 Lakh Cr Mark',
    date: '2026-10-14',
    period: 'Q2 FY27',
    type: 'quarterly_results',
    summary: 'State Bank of India reported a 28% YoY surge in standalone net profit. Credit growth was led by SME loans (+20.1% YoY) and agriculture advances (+17.5% YoY) while corporate loans gathered momentum.',
    kpiSnapshot: {
      revenueCr: 112000,
      yoyRevGrowthPct: 14.3,
      ebitdaCr: 32000,
      ebitdaMarginPct: 28.6,
      patCr: 18331,
      yoyPatGrowthPct: 28.0,
      epsRs: 20.54
    },
    keyHighlights: [
      'Gross NPA ratio plummeted to 2.13%, lowest in over 12 years.',
      'YONO mobile app registered over 85 million onboarded customers.',
      'Slippage ratio contained at 0.51% for the second consecutive quarter.'
    ],
    managementGuidance: [
      'Targeting credit growth of 14-16% for FY27 while keeping credit costs under 0.50%.',
      'Capital Adequacy Ratio (CRAR) at 13.86% comfortably above regulatory minimums.'
    ],
    headwindsAndRisks: [
      'Cost of deposits climbed 24 bps YoY, keeping domestic NIM around 3.22%.'
    ],
    orderWinsOrCapex: [
      'Sanctioned ₹42,000 Cr in green infrastructure and renewable power projects in H1 FY27.'
    ],
    filings: [
      { title: 'SBI - Q2 FY27 Press Release & Performance Analysis.pdf', type: 'financial_results', size: '3.4 MB' }
    ],
    likesCount: 180,
    bookmarkedByInvestors: 320
  },
  {
    id: 'upd-15',
    stockId: 'stock-12',
    stockSymbol: 'BHARTIARTL',
    stockName: 'Bharti Airtel Ltd',
    sector: 'IT & Software',
    logoColor: 'from-red-600 to-rose-700',
    title: 'Mobile ARPU Expands to ₹233; Airtel Business Enters $2 Billion Cloud Security Partnership',
    date: '2026-10-14',
    period: 'Q2 FY27',
    type: 'concall_guidance',
    summary: 'Bharti Airtel posted industry-leading ARPU expansion of 15% YoY driven by premiumization, 5G data pack upgrades, and postpaid customer additions. African consolidated revenue in constant currency grew 19.8% YoY.',
    kpiSnapshot: {
      revenueCr: 41500,
      yoyRevGrowthPct: 12.2,
      ebitdaCr: 22100,
      ebitdaMarginPct: 53.2,
      patCr: 3590,
      yoyPatGrowthPct: 168.0,
      epsRs: 6.20
    },
    keyHighlights: [
      'Mobile ARPU reached ₹233 vs ₹203 in the corresponding quarter last year.',
      'Added 28 million 5G unique smartphone customers in the quarter.',
      'Homes broadband business grew 26% YoY, adding 480,000 net subscribers.'
    ],
    managementGuidance: [
      'Long-term ARPU target reaffirmed at ₹300 for healthy industry return on capital.',
      'India mobile 5G capex has peaked; future capex tilting toward data centers (Nxtra) and enterprise cloud.'
    ],
    headwindsAndRisks: [
      'Currency devaluations in Nigerian Naira and East African operating jurisdictions.'
    ],
    orderWinsOrCapex: [
      'Nxtra by Airtel commenced work on 120 MW hyperscale green data center in Navi Mumbai.'
    ],
    filings: [
      { title: 'Bharti Airtel - Quarterly Report Q2 FY27.pdf', type: 'financial_results', size: '2.9 MB' }
    ],
    likesCount: 138,
    bookmarkedByInvestors: 265
  },
  {
    id: 'upd-16',
    stockId: 'stock-13',
    stockSymbol: 'LT',
    stockName: 'Larsen & Toubro Ltd',
    sector: 'Defense & Aerospace',
    logoColor: 'from-amber-600 to-yellow-700',
    title: 'L&T Heavy Engineering Bags ₹4,200 Cr International Hydrocarbon & Nuclear Equipment Orders',
    date: '2026-10-14',
    period: 'Q2 FY27',
    type: 'order_win',
    summary: 'Larsen & Toubro’s Energy and Heavy Engineering divisions secure multiple export orders across Middle East and North America for critical reactors and pressurized heavy water nuclear reactor equipment.',
    kpiSnapshot: {
      revenueCr: 61555,
      yoyRevGrowthPct: 20.6,
      ebitdaCr: 6360,
      ebitdaMarginPct: 10.3,
      patCr: 3395,
      yoyPatGrowthPct: 5.4,
      epsRs: 24.70
    },
    keyHighlights: [
      'Consolidated order book breached the historic ₹5.1 Lakh Cr milestone (~3.0x FY26 sales).',
      'International orders comprised 38% of total order inflow during the quarter.',
      'Working capital to sales ratio contained at 12.2%.'
    ],
    managementGuidance: [
      'Order inflow growth guidance of 15% YoY reaffirmed for FY27.',
      'Core EPC operating margins expected to trend upward to 9.2-9.5% in H2 FY27.'
    ],
    headwindsAndRisks: [
      'Geopolitical tensions in the Middle East impacting ocean shipping freight rates.'
    ],
    orderWinsOrCapex: [
      'Won ₹4,200 Cr gas compression and offshore pipeline package from Saudi Aramco.'
    ],
    filings: [
      { title: 'L&T - Corporate Order Win Announcement SEBI Reg 30.pdf', type: 'sebi_lodr', size: '690 KB' }
    ],
    likesCount: 144,
    bookmarkedByInvestors: 275
  },
  {
    id: 'upd-17',
    stockId: 'stock-15',
    stockSymbol: 'ITC',
    stockName: 'ITC Ltd',
    sector: 'Consumer & Retail',
    logoColor: 'from-amber-700 to-yellow-800',
    title: 'ITC Reports Q2 PAT of ₹5,078 Cr; Agri-Export Recovery & FMCG Margin Expansion Lead',
    date: '2026-10-14',
    period: 'Q2 FY27',
    type: 'quarterly_results',
    summary: 'ITC delivered steady earnings with FMCG-Others revenue rising 8.3% YoY backed by snacks, dairy, and personal care. Cigarette segment posted 6.5% YoY revenue growth with stable tax policy continuity.',
    kpiSnapshot: {
      revenueCr: 19300,
      yoyRevGrowthPct: 8.6,
      ebitdaCr: 6780,
      ebitdaMarginPct: 35.1,
      patCr: 5078,
      yoyPatGrowthPct: 3.2,
      epsRs: 4.08
    },
    keyHighlights: [
      'FMCG-Others EBITDA margin expanded 60 bps YoY to 11.6%.',
      'Agri-Business revenue grew 24% YoY on government easing of select commodity exports.',
      'Demerger of ITC Hotels into separate listed company completed successfully.'
    ],
    managementGuidance: [
      'Targeting steady mid-single digit cigarette volume growth supported by differentiated product launches.',
      'FMCG-Others segment to sustain double-digit operating profit CAGR.'
    ],
    headwindsAndRisks: [
      'Paperboards & Packaging segment faced muted realizations due to cheap wood pulp imports from China.'
    ],
    orderWinsOrCapex: [
      'Commissioned new integrated food manufacturing and logistics facility in Khordha, Odisha.'
    ],
    filings: [
      { title: 'ITC - Audited Financial Results Q2 FY27.pdf', type: 'financial_results', size: '1.9 MB' }
    ],
    likesCount: 120,
    bookmarkedByInvestors: 230
  },
  {
    id: 'upd-18',
    stockId: 'stock-16',
    stockSymbol: 'SUNPHARMA',
    stockName: 'Sun Pharmaceutical Industries Ltd',
    sector: 'Pharmaceuticals & Healthcare',
    logoColor: 'from-orange-500 to-amber-600',
    title: 'Sun Pharma Receives US FDA Approval for Leqselvi Alopecia Drug; Q2 PAT Up 28% YoY',
    date: '2026-10-14',
    period: 'Q2 FY27',
    type: 'regulatory_lodr',
    summary: 'Sun Pharma announced US FDA approval for its proprietary oral JAK inhibitor Leqselvi (deuruxolitinib) for severe alopecia areata, alongside posting 28% YoY growth in consolidated Q2 net profit.',
    kpiSnapshot: {
      revenueCr: 13291,
      yoyRevGrowthPct: 9.0,
      ebitdaCr: 3940,
      ebitdaMarginPct: 29.6,
      patCr: 3040,
      yoyPatGrowthPct: 28.0,
      epsRs: 12.67
    },
    keyHighlights: [
      'Global innovative specialty revenue climbed 19.2% YoY to $315 Million.',
      'India formulations business grew 11.0% YoY, maintaining #1 market position with 8.5% market share.',
      'R&D expenditure stood at ₹780 Cr (5.9% of total sales).'
    ],
    managementGuidance: [
      'High single-digit consolidated top-line growth guided for FY27 with specialty contributing >20% of sales.',
      'Ilumya (psoriasis) and Winlevi (acne) prescription trends continuing strong upward trajectory.'
    ],
    headwindsAndRisks: [
      'Ongoing patent litigation trial in US Federal Court for deuruxolitinib.'
    ],
    orderWinsOrCapex: [
      'Completed acquisition of Checkpoint Therapeutics to augment immuno-oncology pipeline.'
    ],
    filings: [
      { title: 'Sun Pharma - Press Release US FDA Leqselvi Approval.pdf', type: 'sebi_lodr', size: '920 KB' }
    ],
    likesCount: 130,
    bookmarkedByInvestors: 245
  },
  {
    id: 'upd-19',
    stockId: 'stock-17',
    stockSymbol: 'MARUTI',
    stockName: 'Maruti Suzuki India Ltd',
    sector: 'Automobile & EV',
    logoColor: 'from-blue-700 to-red-600',
    title: 'Festive Bookings Cross 4.5 Lakh Units; Hybrid SUV Share Reaches Record 22% in Urban Markets',
    date: '2026-10-14',
    period: 'Q2 FY27',
    type: 'concall_guidance',
    summary: 'Maruti Suzuki reported strong retail festival demand across Brezza, Grand Vitara, and Fronx. Grand Vitara strong-hybrid models and CNG portfolio accounted for over 38% of total monthly sales.',
    kpiSnapshot: {
      revenueCr: 37200,
      yoyRevGrowthPct: 0.4,
      ebitdaCr: 4410,
      ebitdaMarginPct: 11.9,
      patCr: 3102,
      yoyPatGrowthPct: -17.0,
      epsRs: 98.70
    },
    keyHighlights: [
      'CNG vehicle sales grew 22% YoY, maintaining over 72% market share in CNG passenger cars.',
      'Export volumes climbed 14% YoY to 78,000 units in the quarter.',
      'Commenced initial pre-series production of eVX electric SUV at Gujarat plant.'
    ],
    managementGuidance: [
      'First dedicated battery electric vehicle (eVX) world premiere scheduled for early 2027.',
      'Annual production capacity expansion to 4 million units by 2030 proceeding on schedule.'
    ],
    headwindsAndRisks: [
      'Entry-level small hatchback segment continues to face affordability resistance in rural markets.'
    ],
    orderWinsOrCapex: [
      'Invested ₹3,200 Cr in Kharkhoda, Haryana greenfield manufacturing facility phase-1.'
    ],
    filings: [
      { title: 'Maruti Suzuki - Q2 Concall Transcript & Volume Note.pdf', type: 'presentation', size: '2.2 MB' }
    ],
    likesCount: 105,
    bookmarkedByInvestors: 195
  },
  {
    id: 'upd-20',
    stockId: 'stock-20',
    stockSymbol: 'BAJFINANCE',
    stockName: 'Bajaj Finance Ltd',
    sector: 'Banking & Financials',
    logoColor: 'from-blue-800 to-indigo-900',
    title: 'AUM Expands 29% YoY to ₹3.73 Lakh Cr; Customer Franchise Crosses 92 Million Milestone',
    date: '2026-10-14',
    period: 'Q2 FY27',
    type: 'quarterly_results',
    summary: 'Bajaj Finance reported 13% YoY growth in consolidated Q2 net profit to ₹4,014 Cr, driven by strong new customer additions of 3.8 million in the quarter and aggressive expansion of rural B2B lending.',
    kpiSnapshot: {
      revenueCr: 17095,
      yoyRevGrowthPct: 27.8,
      ebitdaCr: 9800,
      ebitdaMarginPct: 57.3,
      patCr: 4014,
      yoyPatGrowthPct: 13.0,
      epsRs: 64.90
    },
    keyHighlights: [
      'Assets under management (AUM) grew by ₹84,000 Cr YoY to ₹3,73,900 Cr.',
      'Gross NPA and Net NPA stood stable at 1.06% and 0.46% respectively.',
      'Bajaj Housing Finance subsidiary IPO delivered substantial listing capital accretion.'
    ],
    managementGuidance: [
      'AUM growth guided at 26-28% for FY27 with return on assets (RoA) maintained in 4.2-4.4% range.',
      'Credit costs expected to normalize back down to 1.75-1.85% in H2 FY27.'
    ],
    headwindsAndRisks: [
      'Elevated loan-loss provisions in rural micro-finance and unsecured personal loans.'
    ],
    orderWinsOrCapex: [
      'Omnichannel digital app registered 58 million active users with 42% digital sales origination.'
    ],
    filings: [
      { title: 'Bajaj Finance - Investor Presentation Q2 FY27.pdf', type: 'presentation', size: '4.8 MB' },
      { title: 'Bajaj Finance Q2 Financial Statements.pdf', type: 'financial_results', size: '1.9 MB' }
    ],
    likesCount: 155,
    bookmarkedByInvestors: 285
  },
  {
    id: 'upd-21',
    stockId: 'stock-21',
    stockSymbol: 'AXISBANK',
    stockName: 'Axis Bank Ltd',
    sector: 'Banking & Financials',
    logoColor: 'from-rose-700 to-pink-800',
    title: 'Q2 Net Profit Up 18% YoY to ₹6,917 Cr; Retail Asset Quality Robust with PCR at 78%',
    date: '2026-10-14',
    period: 'Q2 FY27',
    type: 'quarterly_results',
    summary: 'Axis Bank posted an 18% rise in Q2 net profit supported by healthy growth in retail loans and credit cards. Net interest margin was maintained at 3.99% despite high deposit competition.',
    kpiSnapshot: {
      revenueCr: 32000,
      yoyRevGrowthPct: 8.5,
      ebitdaCr: 10400,
      ebitdaMarginPct: 32.5,
      patCr: 6917,
      yoyPatGrowthPct: 18.0,
      epsRs: 22.40
    },
    keyHighlights: [
      'Gross NPA declined 29 bps YoY to 1.44%; Net NPA stood at 0.34%.',
      'Integration of Citibank consumer business completed with 94% retention of affluent wealth clients.',
      'Retail disbursements rose 15% YoY with home loans and auto loans leading.'
    ],
    managementGuidance: [
      'Aiming for 300-400 bps faster loan growth than industry average over the medium term.',
      'Consolidated RoE targeted at sustained 18% level.'
    ],
    headwindsAndRisks: [
      'CASA ratio moderated slightly to 41.2% as depositors migrated to high-yield fixed deposits.'
    ],
    orderWinsOrCapex: [
      'Launched Project Neo for digital-first corporate treasury and trade finance automation.'
    ],
    filings: [
      { title: 'Axis Bank - Financial Results & Investor Presentation Q2.pdf', type: 'financial_results', size: '3.7 MB' }
    ],
    likesCount: 112,
    bookmarkedByInvestors: 210
  },
  {
    id: 'upd-22',
    stockId: 'stock-22',
    stockSymbol: 'KOTAKBANK',
    stockName: 'Kotak Mahindra Bank Ltd',
    sector: 'Banking & Financials',
    logoColor: 'from-red-700 to-rose-800',
    title: 'Consolidated Q2 PAT Reaches ₹4,133 Cr; CASA Ratio Maintained at 46.2% Amid Rising Term Deposits',
    date: '2026-10-14',
    period: 'Q2 FY27',
    type: 'quarterly_results',
    summary: 'Kotak Mahindra Bank reported solid operating profit growth of 16% YoY. The bank successfully resolved RBI IT supervisory observations and resumed onboarding of new credit card and online banking clients.',
    kpiSnapshot: {
      revenueCr: 16500,
      yoyRevGrowthPct: 16.2,
      ebitdaCr: 6800,
      ebitdaMarginPct: 41.2,
      patCr: 4133,
      yoyPatGrowthPct: 15.0,
      epsRs: 20.80
    },
    keyHighlights: [
      'Net Interest Margin (NIM) stood resilient at 4.91%, highest among private sector large banks.',
      'CASA ratio remained an industry benchmark at 46.2%.',
      'Capital Adequacy Ratio (CRAR) stood fortress-like at 20.6%.'
    ],
    managementGuidance: [
      'Targeting loan growth of 16-18% in FY27 supported by accelerated digital customer acquisition.',
      'Technology infrastructure audit successfully cleared with global third-party certification.'
    ],
    headwindsAndRisks: [
      'Temporary digital customer onboarding hiatus in prior quarters impacted credit card interchange fees.'
    ],
    orderWinsOrCapex: [
      'Invested ₹850 Cr in cloud resilience and cybersecurity disaster recovery center in Hyderabad.'
    ],
    filings: [
      { title: 'Kotak Bank - Q2 Earnings Release & Audited Accounts.pdf', type: 'financial_results', size: '2.6 MB' }
    ],
    likesCount: 125,
    bookmarkedByInvestors: 235
  },
  {
    id: 'upd-23',
    stockId: 'stock-23',
    stockSymbol: 'M&M',
    stockName: 'Mahindra & Mahindra Ltd',
    sector: 'Automobile & EV',
    logoColor: 'from-red-600 to-rose-800',
    title: 'Mahindra Auto Sells Record 87,839 SUVs in Single Month; Thar ROXX Bookings Exceed 1.76 Lakh',
    date: '2026-10-14',
    period: 'Q2 FY27',
    type: 'order_win',
    summary: 'Mahindra & Mahindra reported an unprecedented customer response for the newly launched 5-door Thar ROXX with over 1,76,000 bookings in the first 60 minutes, solidifying M&M’s leadership in the mid-size SUV segment.',
    kpiSnapshot: {
      revenueCr: 37500,
      yoyRevGrowthPct: 12.0,
      ebitdaCr: 5600,
      ebitdaMarginPct: 14.9,
      patCr: 3171,
      yoyPatGrowthPct: 13.2,
      epsRs: 26.30
    },
    keyHighlights: [
      'SUV market revenue share climbed to 21.6%, ranking #1 in Indian utility vehicle revenue.',
      'Tractor sales grew 9% YoY supported by above-normal monsoon rainfall across agricultural belts.',
      'EV division (Mahindra Electric Automobiles) raised ₹1,200 Cr in second tranche from Temasek.'
    ],
    managementGuidance: [
      'Targeting monthly SUV production run-rate of 54,000 units by end of FY27 to curtail customer waiting periods.',
      'Born Electric (BE.05 and XUV.e9) electric SUV models slated for commercial unveiling in early 2027.'
    ],
    headwindsAndRisks: [
      'Raw material commodity price inflation in rare-earth magnets and battery cells.'
    ],
    orderWinsOrCapex: [
      'Capex of ₹27,000 Cr committed over FY25-FY27 for ICE SUVs, Born EVs, and farm machinery.'
    ],
    filings: [
      { title: 'M&M - Volume Dispatch & Booking Disclosure (Thar ROXX).pdf', type: 'sebi_lodr', size: '540 KB' },
      { title: 'M&M Q2 Investor Presentation.pdf', type: 'presentation', size: '3.8 MB' }
    ],
    likesCount: 160,
    bookmarkedByInvestors: 310
  },
  {
    id: 'upd-24',
    stockId: 'stock-24',
    stockSymbol: 'TATASTEEL',
    stockName: 'Tata Steel Ltd',
    sector: 'Green Energy & Infra',
    logoColor: 'from-blue-700 to-slate-800',
    title: 'Port Talbot Green Steel Electric Arc Furnace Transition Commences; Domestic India Steel Sales Up 6%',
    date: '2026-10-14',
    period: 'Q2 FY27',
    type: 'capacity_expansion',
    summary: 'Tata Steel signed the formal Grant Funding Agreement with the UK Government for £500 Million to construct a 3.2 MTPA low-carbon Electric Arc Furnace at Port Talbot, while India operations delivered record quarterly crude steel production.',
    kpiSnapshot: {
      revenueCr: 53905,
      yoyRevGrowthPct: -3.2,
      ebitdaCr: 6141,
      ebitdaMarginPct: 11.4,
      patCr: 759,
      yoyPatGrowthPct: 112.0,
      epsRs: 0.61
    },
    keyHighlights: [
      'India crude steel capacity expansion at Kalinganagar phase-2 (5 MTPA) commissioned successfully.',
      'Domestic deliveries reached 5.10 million tonnes, driven by automotive and engineering sectors.',
      'Turned net profit positive compared to net loss in corresponding quarter last year.'
    ],
    managementGuidance: [
      'India capacity on path to reach 40 MTPA by 2030.',
      'UK operations expected to turn cash-neutral post closure of blast furnaces in calendar 2027.'
    ],
    headwindsAndRisks: [
      'Chinese steel dumping in international markets suppressing global hot-rolled coil prices.'
    ],
    orderWinsOrCapex: [
      'Secured £500M grant support from UK government for £1.25B green steel transformation.'
    ],
    filings: [
      { title: 'Tata Steel - UK Transition Agreement Press Release.pdf', type: 'sebi_lodr', size: '820 KB' }
    ],
    likesCount: 88,
    bookmarkedByInvestors: 170
  },
  {
    id: 'upd-25',
    stockId: 'stock-25',
    stockSymbol: 'MAZDOCK',
    stockName: 'Mazagon Dock Shipbuilders Ltd',
    sector: 'Defense & Aerospace',
    logoColor: 'from-blue-600 to-cyan-800',
    title: 'MoD Awards ₹4,800 Cr Medium Refit Life Certification (MRLC) Contract for Scorpene Submarines',
    date: '2026-10-14',
    period: 'Q2 FY27',
    type: 'order_win',
    summary: 'Ministry of Defence signs a landmark ₹4,800 Cr contract with Mazagon Dock Shipbuilders for major refit, stealth coating, and combat management system modernization of Indian Navy Scorpene attack submarines.',
    kpiSnapshot: {
      revenueCr: 2750,
      yoyRevGrowthPct: 28.5,
      ebitdaCr: 690,
      ebitdaMarginPct: 25.1,
      patCr: 585,
      yoyPatGrowthPct: 34.0,
      epsRs: 28.90
    },
    keyHighlights: [
      'Total order book stands at ₹40,500 Cr (~4.2x FY26 turnover).',
      'Delivery of 4th Stealth Guided Missile Destroyer (Project 15B) completed ahead of schedule.',
      'Cash balance and bank deposits exceed ₹4,500 Cr with zero bank borrowings.'
    ],
    managementGuidance: [
      'Upcoming ₹70,000 Cr tender for 3 additional Kalvari-class Scorpene submarines with Naval Group expected by end of fiscal.',
      'EBITDA margins guided in the 22-25% range backed by milestone completions.'
    ],
    headwindsAndRisks: [
      'Specialized marine grade steel and combat suite imports subject to foreign government export clearances.'
    ],
    orderWinsOrCapex: [
      '₹4,800 Cr MRLC submarine refit contract awarded by MoD.'
    ],
    filings: [
      { title: 'Mazagon Dock - SEBI LODR Intimation (Submarine MRLC Contract).pdf', type: 'sebi_lodr', size: '560 KB' }
    ],
    likesCount: 140,
    bookmarkedByInvestors: 270
  },
  {
    id: 'upd-26',
    stockId: 'stock-26',
    stockSymbol: 'COCHINSHIP',
    stockName: 'Cochin Shipyard Ltd',
    sector: 'Defense & Aerospace',
    logoColor: 'from-teal-600 to-blue-800',
    title: 'Signs International Contract with European Shipping Major for 4 Hybrid Green Feeder Vessels',
    date: '2026-10-14',
    period: 'Q2 FY27',
    type: 'order_win',
    summary: 'Cochin Shipyard signs a definitive shipbuilding contract with a prominent European maritime operator for construction of 4 zero-emission hybrid feeder vessels with an option for 4 additional vessels.',
    kpiSnapshot: {
      revenueCr: 1143,
      yoyRevGrowthPct: 38.0,
      ebitdaCr: 245,
      ebitdaMarginPct: 21.4,
      patCr: 189,
      yoyPatGrowthPct: 42.0,
      epsRs: 7.18
    },
    keyHighlights: [
      'Order book exceeds ₹22,500 Cr with commercial export share growing to 28%.',
      'Commissioned new 310-meter dry dock and International Ship Repair Facility (ISRF) in Kochi.',
      'Ship repair revenue grew 46% YoY driven by naval and commercial ship overhauls.'
    ],
    managementGuidance: [
      'Revenue growth targeted at 25-30% CAGR over next 3 years leveraging the new drydock capacity.',
      'Bidding for upcoming Indian Navy Next Generation Corvettes (NGC) program worth ₹36,000 Cr.'
    ],
    headwindsAndRisks: [
      'High dependence on Indian Navy and Coast Guard capital budget procurement timelines.'
    ],
    orderWinsOrCapex: [
      'Commissioned ₹2,800 Cr new dry dock and ship repair facility.'
    ],
    filings: [
      { title: 'Cochin Shipyard - European Green Vessel Order Intimation.pdf', type: 'sebi_lodr', size: '610 KB' }
    ],
    likesCount: 118,
    bookmarkedByInvestors: 225
  },
  {
    id: 'upd-27',
    stockId: 'stock-27',
    stockSymbol: 'SUZLON',
    stockName: 'Suzlon Energy Ltd',
    sector: 'Green Energy & Infra',
    logoColor: 'from-emerald-600 to-green-700',
    title: 'Secures India’s Largest 1,166 MW Wind Power Order from NTPC Green Energy; Order Book at 5.4 GW',
    date: '2026-10-14',
    period: 'Q2 FY27',
    type: 'order_win',
    summary: 'Suzlon Energy wins India’s single largest wind turbine order of 1,166 MW from NTPC Green Energy to supply 370 units of S144 wind turbines with hybrid lattice tubular towers in Gujarat.',
    kpiSnapshot: {
      revenueCr: 2093,
      yoyRevGrowthPct: 47.7,
      ebitdaCr: 294,
      ebitdaMarginPct: 14.0,
      patCr: 201,
      yoyPatGrowthPct: 97.0,
      epsRs: 0.15
    },
    keyHighlights: [
      'Order book climbed to an all-time record 5.4 GW (~3 years of manufacturing visibility).',
      'Company is completely debt-free with net cash reserves of over ₹1,200 Cr.',
      'Completed acquisition of 76% stake in Renom Energy Services for multi-brand renewable O&M.'
    ],
    managementGuidance: [
      'Deliveries to scale to 2.5-3.0 GW annually by FY28 as commercial and industrial (C&I) demand peaks.',
      'Operation & Maintenance service margins remain robust at >35%.'
    ],
    headwindsAndRisks: [
      'Grid evacuation infrastructure transmission delays by state DISCOMs.'
    ],
    orderWinsOrCapex: [
      '1,166 MW wind power order awarded by NTPC Green Energy Ltd.'
    ],
    filings: [
      { title: 'Suzlon - Exchange Disclosure NTPC 1166 MW Mega Order.pdf', type: 'sebi_lodr', size: '750 KB' }
    ],
    likesCount: 175,
    bookmarkedByInvestors: 330
  },
  {
    id: 'upd-28',
    stockId: 'stock-28',
    stockSymbol: 'IREDA',
    stockName: 'Indian Renewable Energy Development Agency',
    sector: 'Green Energy & Infra',
    logoColor: 'from-green-600 to-teal-700',
    title: 'Q2 Net Profit Jumps 36.2% YoY to ₹388 Cr; Loan Book Surges Past ₹64,500 Cr Mark',
    date: '2026-10-14',
    period: 'Q2 FY27',
    type: 'quarterly_results',
    summary: 'Navratna PSU IREDA posted a 36.2% rise in net profit to ₹388 Cr for Q2 FY27. Loan sanctions surged 205% YoY to ₹8,720 Cr while loan disbursements rose 56% to ₹4,460 Cr.',
    kpiSnapshot: {
      revenueCr: 1577,
      yoyRevGrowthPct: 34.0,
      ebitdaCr: 1420,
      ebitdaMarginPct: 90.0,
      patCr: 388,
      yoyPatGrowthPct: 36.2,
      epsRs: 1.44
    },
    keyHighlights: [
      'Total loan book reached a record ₹64,500 Cr, up 35.8% YoY.',
      'Net NPA dropped 46 bps YoY to 1.19%; Gross NPA improved to 2.19%.',
      'Net worth expanded to ₹9,340 Cr following successful equity QIP issuance.'
    ],
    managementGuidance: [
      'Loan book targeted to breach ₹1,00,000 Cr by FY28 as green hydrogen and battery storage projects take off.',
      'Spreads guided to sustain comfortably between 2.8% and 3.2%.'
    ],
    headwindsAndRisks: [
      'Interest rate cycle sensitivity on foreign currency borrowing hedges.'
    ],
    orderWinsOrCapex: [
      'Sanctioned ₹8,720 Cr in fresh loans for solar, wind, and pumped storage projects.'
    ],
    filings: [
      { title: 'IREDA - Audited Q2 FY27 Financial Statements & Investor Presentation.pdf', type: 'financial_results', size: '2.4 MB' }
    ],
    likesCount: 152,
    bookmarkedByInvestors: 290
  },
  {
    id: 'upd-29',
    stockId: 'stock-29',
    stockSymbol: 'TITAN',
    stockName: 'Titan Company Ltd',
    sector: 'Consumer & Retail',
    logoColor: 'from-yellow-600 to-amber-700',
    title: 'Festive Jewelry Demand Surges 25% YoY; Tanishq International Flagship Stores Open in Singapore & London',
    date: '2026-10-14',
    period: 'Q2 FY27',
    type: 'concall_guidance',
    summary: 'Titan Company reported 25% YoY consumer jewelry sales growth in the festive quarter following custom duty rationalization on gold bullion. Watches & wearables segment recorded 15% revenue growth.',
    kpiSnapshot: {
      revenueCr: 13473,
      yoyRevGrowthPct: 15.5,
      ebitdaCr: 1350,
      ebitdaMarginPct: 10.0,
      patCr: 704,
      yoyPatGrowthPct: -23.0,
      epsRs: 7.92
    },
    keyHighlights: [
      'Added 75 new stores during the quarter, taking total retail network to 3,171 stores.',
      'Tanishq international stores in US, UK, and GCC witnessed 60% YoY revenue expansion.',
      'Customs duty inventory impact of ₹290 Cr absorbed fully in the reported quarter.'
    ],
    managementGuidance: [
      'Underlying jewelry demand extremely robust with buyer growth leading value growth.',
      'EBIT margin expected to rebound back above 11.5% in H2 FY27 as duty inventory effect washes out.'
    ],
    headwindsAndRisks: [
      'Gold price volatility causing temporary fluctuations in retail consumer purchase timing.'
    ],
    orderWinsOrCapex: [
      'Opened 75 net new stores across Tanishq, Mia, Fastrack, and Titan Eye+.'
    ],
    filings: [
      { title: 'Titan - Q2 Quarterly Business Update & Management Concall.pdf', type: 'presentation', size: '2.8 MB' }
    ],
    likesCount: 115,
    bookmarkedByInvestors: 220
  },
  {
    id: 'upd-30',
    stockId: 'stock-30',
    stockSymbol: 'POLYCAB',
    stockName: 'Polycab India Ltd',
    sector: 'Electronics & EMS',
    logoColor: 'from-red-600 to-orange-700',
    title: 'Cables & Wires Q2 Exports Surge 34% YoY; Revenue Tops ₹5,490 Cr on Domestic Infra Surge',
    date: '2026-10-14',
    period: 'Q2 FY27',
    type: 'quarterly_results',
    summary: 'Polycab India delivered strong double-digit volume growth in cables and wires supported by high-voltage underground transmission and real estate demand. Fast-moving electric goods (FMEG) turned EBIT positive.',
    kpiSnapshot: {
      revenueCr: 5498,
      yoyRevGrowthPct: 30.3,
      ebitdaCr: 680,
      ebitdaMarginPct: 12.4,
      patCr: 440,
      yoyPatGrowthPct: 3.5,
      epsRs: 29.30
    },
    keyHighlights: [
      'Cables and wires segment registered 28% volume growth, outperforming overall industry by 2x.',
      'International exports contributed 9.2% of total revenue with strong shipments to US and Europe.',
      'EHV (Extra High Voltage) plant in Halol commenced commercial supply.'
    ],
    managementGuidance: [
      'Project Leap on track to achieve ₹20,000 Cr annual revenue target well ahead of FY27 deadline.',
      'EBITDA margins targeted within 12.0% to 14.0% sustainable band.'
    ],
    headwindsAndRisks: [
      'Copper and aluminum global LME spot price volatility requiring frequent price revisions.'
    ],
    orderWinsOrCapex: [
      'Annual Capex of ₹1,000 Cr committed for special purpose cables and automated distribution centers.'
    ],
    filings: [
      { title: 'Polycab - Financial Results Q2 FY27 & Press Release.pdf', type: 'financial_results', size: '2.3 MB' }
    ],
    likesCount: 104,
    bookmarkedByInvestors: 200
  }
];

export const INITIAL_FII_DII_FLOWS: InstitutionalFlowDay[] = [
  {
    id: 'fii-dii-2026-10-14',
    date: '2026-10-14',
    formattedDate: '14 Oct 2026',
    fiiGrossBuyCr: 12450.80,
    fiiGrossSellCr: 14293.40,
    fiiNetCr: -1842.60,
    diiGrossBuyCr: 15320.15,
    diiGrossSellCr: 12909.30,
    diiNetCr: 2410.85,
    totalNetCr: 568.25,
    category: 'Cash Market',
    marketImpact: 'Strong DII Absorption',
    notes: 'Domestic institutional mutual funds absorbed foreign portfolio selling with ₹2,410 Cr net infusion, supported by monthly SIP inflows.'
  },
  {
    id: 'fii-dii-2026-10-13',
    date: '2026-10-13',
    formattedDate: '13 Oct 2026',
    fiiGrossBuyCr: 10820.50,
    fiiGrossSellCr: 12935.90,
    fiiNetCr: -2115.40,
    diiGrossBuyCr: 14850.60,
    diiGrossSellCr: 11960.50,
    diiNetCr: 2890.10,
    totalNetCr: 774.70,
    category: 'Cash Market',
    marketImpact: 'Strong DII Absorption',
    notes: 'DIIs continued steady accumulation in high-growth manufacturing, auto components, and defense electronics.'
  },
  {
    id: 'fii-dii-2026-10-10',
    date: '2026-10-10',
    formattedDate: '10 Oct 2026',
    fiiGrossBuyCr: 16210.40,
    fiiGrossSellCr: 15365.20,
    fiiNetCr: 845.20,
    diiGrossBuyCr: 13540.20,
    diiGrossSellCr: 12309.70,
    diiNetCr: 1230.50,
    totalNetCr: 2075.70,
    category: 'Cash Market',
    marketImpact: 'Both Buying (Bullish)',
    notes: 'Dual institutional buying triggered broad-based rally across Nifty 50 and BSE Sensex.'
  },
  {
    id: 'fii-dii-2026-10-09',
    date: '2026-10-09',
    formattedDate: '09 Oct 2026',
    fiiGrossBuyCr: 11400.00,
    fiiGrossSellCr: 12320.30,
    fiiNetCr: -920.30,
    diiGrossBuyCr: 12980.40,
    diiGrossSellCr: 11330.40,
    diiNetCr: 1650.00,
    totalNetCr: 729.70,
    category: 'Cash Market',
    marketImpact: 'Strong DII Absorption',
    notes: 'Mild foreign rebalancing in IT sector was comfortably offset by domestic mutual fund buying.'
  },
  {
    id: 'fii-dii-2026-10-08',
    date: '2026-10-08',
    formattedDate: '08 Oct 2026',
    fiiGrossBuyCr: 15890.30,
    fiiGrossSellCr: 14459.50,
    fiiNetCr: 1430.80,
    diiGrossBuyCr: 11240.60,
    diiGrossSellCr: 10420.20,
    diiNetCr: 820.40,
    totalNetCr: 2251.20,
    category: 'Cash Market',
    marketImpact: 'Both Buying (Bullish)',
    notes: 'Risk-on global sentiment supported strong foreign inflows into Indian blue-chips and private banking majors.'
  },
  {
    id: 'fii-dii-2026-10-07',
    date: '2026-10-07',
    formattedDate: '07 Oct 2026',
    fiiGrossBuyCr: 13200.00,
    fiiGrossSellCr: 16610.00,
    fiiNetCr: -3410.00,
    diiGrossBuyCr: 17850.50,
    diiGrossSellCr: 13930.00,
    diiNetCr: 3920.50,
    totalNetCr: 510.50,
    category: 'Cash Market',
    marketImpact: 'Strong DII Absorption',
    notes: 'High foreign selling absorbed entirely by record single-day domestic fund buying of ₹3,920 Cr.'
  },
  {
    id: 'fii-dii-2026-10-06',
    date: '2026-10-06',
    formattedDate: '06 Oct 2026',
    fiiGrossBuyCr: 10950.20,
    fiiGrossSellCr: 12190.70,
    fiiNetCr: -1240.50,
    diiGrossBuyCr: 13620.00,
    diiGrossSellCr: 11839.80,
    diiNetCr: 1780.20,
    totalNetCr: 539.70,
    category: 'Cash Market',
    marketImpact: 'Strong DII Absorption',
    notes: 'DIIs provided downside support near key moving averages amid global oil price volatility.'
  },
  {
    id: 'fii-dii-2026-10-03',
    date: '2026-10-03',
    formattedDate: '03 Oct 2026',
    fiiGrossBuyCr: 14750.60,
    fiiGrossSellCr: 12600.30,
    fiiNetCr: 2150.30,
    diiGrossBuyCr: 10540.00,
    diiGrossSellCr: 10130.00,
    diiNetCr: 410.00,
    totalNetCr: 2560.30,
    category: 'Cash Market',
    marketImpact: 'Both Buying (Bullish)',
    notes: 'Substantial foreign capital deployment in green energy and capital goods themes.'
  },
  {
    id: 'fii-dii-2026-10-01',
    date: '2026-10-01',
    formattedDate: '01 Oct 2026',
    fiiGrossBuyCr: 11800.40,
    fiiGrossSellCr: 13360.60,
    fiiNetCr: -1560.20,
    diiGrossBuyCr: 14320.80,
    diiGrossSellCr: 12220.00,
    diiNetCr: 2100.80,
    totalNetCr: 540.60,
    category: 'Cash Market',
    marketImpact: 'Strong DII Absorption',
    notes: 'Monthly opening trading session with strong institutional participation across mid & large caps.'
  }
];
