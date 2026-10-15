export type MarketCapCategory = 'Large Cap' | 'Mid Cap' | 'Small Cap' | 'Micro Cap';

export type IndianSector = 
  | 'Automobile & EV'
  | 'Defense & Aerospace'
  | 'Banking & Financials'
  | 'IT & Software'
  | 'Consumer & Retail'
  | 'Electronics & EMS'
  | 'Pharmaceuticals & Healthcare'
  | 'Green Energy & Infra'
  | 'Conglomerate & Energy';

export type Exchange = 'NSE' | 'BSE' | 'NSE & BSE';

export type HealthStatus = 'outperforming' | 'in_line' | 'under_pressure' | 'high_growth';

export type UpdateType = 
  | 'quarterly_results'
  | 'order_win'
  | 'concall_guidance'
  | 'dividend_action'
  | 'regulatory_lodr'
  | 'credit_rating'
  | 'joint_venture_mna'
  | 'management_change'
  | 'capacity_expansion'
  | 'general_announcement';

export interface QuarterlyMetricPoint {
  quarter: string; // e.g. "Q1 FY26", "Q2 FY26", "Q3 FY26", "Q4 FY26", "Q1 FY27", "Q2 FY27"
  revenueCr: number;
  ebitdaCr: number;
  patCr: number;
  ebitdaMargin: number;
}

export interface ShareholdingPattern {
  promoter: number; // in %
  fii: number; // Foreign Institutional Investors %
  dii: number; // Domestic Institutional Investors (Mutual Funds, LIC) %
  publicRetail: number; // %
}

export interface CorporateAction {
  id: string;
  type: 'Dividend' | 'Bonus' | 'Stock Split' | 'Rights Issue' | 'AGM / EGM';
  details: string;
  recordDate: string;
  amount?: string;
}

export interface IndianStock {
  id: string;
  symbol: string; // e.g. "TATAMOTORS", "DIXON", "HDFCBANK"
  bseCode: string; // e.g. "500570"
  name: string;
  tagline: string;
  sector: IndianSector;
  marketCapCategory: MarketCapCategory;
  exchange: Exchange;
  
  // Market Trading Data
  cmp: number; // Current Market Price (₹)
  changeRs: number;
  changePct: number;
  high52w: number;
  low52w: number;
  
  // Valuation & Fundamentals
  marketCapCr: number; // In ₹ Crores
  peRatio: number;
  industryPe: number;
  pbRatio: number;
  roe: number; // %
  roce: number; // %
  dividendYield: number; // %
  debtToEquity: number;
  
  // Latest Quarterly Financials (in ₹ Crores)
  quarterlyRevenueCr: number;
  quarterlyPatCr: number;
  quarterlyEbitdaCr: number;
  ebitdaMarginPct: number;
  yoyPatGrowthPct: number;
  orderBookCr?: number; // Crucial for defense, infra, EMS

  shareholding: ShareholdingPattern;
  quarterlyHistory: QuarterlyMetricPoint[];
  corporateActions: CorporateAction[];
  
  isWatchlist?: boolean;
  healthStatus: HealthStatus;
  logoColor: string;
  website: string;
}

export interface StockUpdate {
  id: string;
  stockId: string;
  stockSymbol: string;
  stockName: string;
  sector: IndianSector;
  logoColor: string;
  title: string;
  date: string;
  period: string; // e.g. "Q2 FY27"
  type: UpdateType;
  
  summary: string;
  
  // Key Financial metrics reported for this period
  kpiSnapshot: {
    revenueCr: number;
    yoyRevGrowthPct: number;
    ebitdaCr: number;
    ebitdaMarginPct: number;
    patCr: number; // Profit After Tax
    yoyPatGrowthPct: number;
    epsRs: number;
  };

  // Indian Concall & Management Highlights
  managementGuidance: string[];
  keyHighlights: string[];
  headwindsAndRisks: string[];
  orderWinsOrCapex: string[];

  // Documents (SEBI Filings, Investor Presentation, Concall Audio/PDF)
  filings: {
    title: string;
    type: 'presentation' | 'financial_results' | 'concall_transcript' | 'sebi_lodr';
    size?: string;
  }[];

  likesCount?: number;
  bookmarkedByInvestors?: number;
}

export interface MarketIndex {
  name: string;
  value: number;
  change: number;
  changePct: number;
}

export interface InstitutionalFlowDay {
  id: string;
  date: string; // e.g. "2026-10-14"
  formattedDate?: string; // e.g. "14 Oct 2026"
  fiiGrossBuyCr: number;
  fiiGrossSellCr: number;
  fiiNetCr: number; // positive = net buy, negative = net sell
  diiGrossBuyCr: number;
  diiGrossSellCr: number;
  diiNetCr: number; // positive = net buy, negative = net sell
  totalNetCr: number; // fiiNetCr + diiNetCr
  category?: 'Cash Market' | 'F&O Segment' | 'Debt Market';
  marketImpact?: 'FII Heavy Selling' | 'Strong DII Absorption' | 'Both Buying (Bullish)' | 'Both Selling (Bearish)' | 'Neutral / Mixed';
  notes?: string;
}

export type ViewRole = 'analyst_investor' | 'management_ir';
export type ActiveTab = 'stocks' | 'updates' | 'concalls' | 'fii_dii';

