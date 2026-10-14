import React, { createContext, useContext, useState, useEffect, ReactNode, useCallback } from 'react';
import { 
  IndianStock, 
  StockUpdate, 
  MarketIndex, 
  ViewRole, 
  ActiveTab, 
  IndianSector, 
  MarketCapCategory,
  HealthStatus,
  UpdateType,
  InstitutionalFlowDay
} from '../types/investor';
import { INITIAL_INDIAN_STOCKS, INITIAL_STOCK_UPDATES, INDIAN_MARKET_INDICES, INITIAL_FII_DII_FLOWS } from '../data/initialData';
import { 
  fetchAllLiveIndices, 
  fetchAllLiveStocks, 
  simulateMarketTick, 
  isIndianMarketOpen 
} from '../services/liveMarketService';
import { fetchLatestFiiDiiExchangeData, formatFiiDiiDate } from '../services/fiiDiiService';
import { sha256 } from '../utils/crypto';

export type DataSourceMode = 'simulator' | 'official_delayed' | 'custom_api';

interface LastTickInfo {
  id: string; // Stock symbol or Index name
  direction: 'up' | 'down';
  timestamp: number;
}

interface InvestorContextType {
  stocks: IndianStock[];
  updates: StockUpdate[];
  indices: MarketIndex[];
  viewRole: ViewRole;
  setViewRole: (role: ViewRole) => void;
  activeTab: ActiveTab;
  setActiveTab: (tab: ActiveTab) => void;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  selectedSector: string;
  setSelectedSector: (sector: string) => void;
  selectedMarketCap: string;
  setSelectedMarketCap: (mcap: string) => void;
  filterWatchlistOnly: boolean;
  setFilterWatchlistOnly: (val: boolean | ((prev: boolean) => boolean)) => void;
  selectedStockId: string | null;
  setSelectedStockId: (id: string | null) => void;
  selectedUpdateId: string | null;
  setSelectedUpdateId: (id: string | null) => void;
  
  // Live Market State & Controls
  dataSourceMode: DataSourceMode;
  setDataSourceMode: (mode: DataSourceMode) => void;
  isTickSimulatorActive: boolean;
  setIsTickSimulatorActive: (active: boolean) => void;
  apiKey: string;
  setApiKey: (key: string) => void;
  isSyncingLive: boolean;
  lastSyncTime: string;
  marketOpenStatus: { isOpen: boolean; statusText: string };
  lastTick: LastTickInfo | null;
  refreshLiveMarketData: () => Promise<void>;

  // Owner Permissions & Security
  isOwnerAuthenticated: boolean;
  isAuthModalOpen: boolean;
  setIsAuthModalOpen: (open: boolean) => void;
  authenticateOwner: (password: string) => boolean;
  lockOwnerAccess: () => void;
  changeOwnerPassword: (oldPass: string, newPass: string) => { success: boolean; message: string };
  changeOwnerPin: (oldPin: string, newPin: string) => { success: boolean; message: string };
  sendPasswordRecovery: () => Promise<{ success: boolean; message: string; otp?: string }>;
  resetPasswordWithOtp: (otp: string, newPass: string) => { success: boolean; message: string };
  triggerOwnerAction: (action: () => void) => void;
  recoveryEmail: string;

  // Modals
  isApiModalOpen: boolean;
  setIsApiModalOpen: (open: boolean) => void;
  isNewUpdateModalOpen: boolean;
  setIsNewUpdateModalOpen: (open: boolean) => void;
  isNewStockModalOpen: boolean;
  setIsNewStockModalOpen: (open: boolean) => void;
  isExportModalOpen: boolean;
  setIsExportModalOpen: (open: boolean) => void;
  isFiiDiiModalOpen: boolean;
  setIsFiiDiiModalOpen: (open: boolean) => void;

  // FII & DII Institutional Trading Data
  fiiDiiFlows: InstitutionalFlowDay[];
  editingFiiDiiRecord: InstitutionalFlowDay | null;
  setEditingFiiDiiRecord: (rec: InstitutionalFlowDay | null) => void;
  addOrUpdateFiiDiiRecord: (record: Partial<InstitutionalFlowDay>) => void;
  deleteFiiDiiRecord: (id: string) => void;
  fetchLiveFiiDii: () => Promise<void>;
  isSyncingFiiDii: boolean;

  // Actions
  addStockUpdate: (newUpdateData: Partial<StockUpdate>) => void;
  addStock: (newStockData: Partial<IndianStock>) => void;
  toggleWatchlist: (stockId: string) => void;
  likeUpdate: (updateId: string) => void;
  resetToDemoData: () => void;
  getStockById: (id: string) => IndianStock | undefined;
}

const InvestorContext = createContext<InvestorContextType | undefined>(undefined);

const STORAGE_KEYS = {
  STOCKS: 'dalalpulse_stocks_v8',
  UPDATES: 'dalalpulse_updates_v8',
  ROLE: 'dalalpulse_role_v5',
  API_KEY: 'dalalpulse_apikey_v5',
  DATA_MODE: 'dalalpulse_datamode_v5',
  OWNER_AUTH: 'dalalpulse_owner_auth_v5',
  OWNER_PASSWORD: 'dalalpulse_owner_pwd_v5',
  RECOVERY_EMAIL: 'dalalpulse_recovery_email_v5',
  FII_DII: 'dalalpulse_fiidii_v1'
};

const DEFAULT_OWNER_PASSWORD_HASH = '45f023bf381e1a7d9a798b254880db1624fe48ad4d040914a408af2f5cc29b9a';
const OWNER_RECOVERY_EMAIL = 'ketandhumal1987@gmail.com';

// Cleanup old legacy caches
try {
  ['dalalpulse_stocks_v1', 'dalalpulse_stocks_v2', 'dalalpulse_stocks_v3', 'dalalpulse_stocks_v4', 'dalalpulse_stocks_v5', 'dalalpulse_stocks_v6', 'dalalpulse_stocks_v7',
   'dalalpulse_updates_v1', 'dalalpulse_updates_v2', 'dalalpulse_updates_v3', 'dalalpulse_updates_v4', 'dalalpulse_updates_v5', 'dalalpulse_updates_v6', 'dalalpulse_updates_v7',
   'dalalpulse_datamode_v1', 'dalalpulse_datamode_v2', 'dalalpulse_datamode_v3',
   'dalalpulse_owner_pin_v5',
   'dalalpulse_owner_auth_v1', 'dalalpulse_owner_auth_v2', 'dalalpulse_owner_auth_v3', 'dalalpulse_owner_auth_v4', 'dalalpulse_owner_auth_v5', 'dalalpulse_owner_auth_v6'].forEach(k => {
     localStorage.removeItem(k);
  });
} catch {}

export const InvestorProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [stocks, setStocks] = useState<IndianStock[]>(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEYS.STOCKS);
      if (stored) return JSON.parse(stored);
    } catch (e) {
      console.error('Failed to load stocks from localStorage', e);
    }
    return INITIAL_INDIAN_STOCKS;
  });

  const [updates, setUpdates] = useState<StockUpdate[]>(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEYS.UPDATES);
      if (stored) return JSON.parse(stored);
    } catch (e) {
      console.error('Failed to load updates from localStorage', e);
    }
    return INITIAL_STOCK_UPDATES;
  });

  const [indices, setIndices] = useState<MarketIndex[]>(INDIAN_MARKET_INDICES);
  
  // Data Source & Live Mode - Defaults to authentic Official Exchange Data
  const [dataSourceMode, setDataSourceMode] = useState<DataSourceMode>(() => {
    const saved = localStorage.getItem(STORAGE_KEYS.DATA_MODE);
    if (saved === 'official_delayed' || saved === 'custom_api' || saved === 'simulator') {
      return saved;
    }
    return 'official_delayed'; // Authentic live NSE/BSE closing LTP feed
  });

  const [isTickSimulatorActive, setIsTickSimulatorActive] = useState<boolean>(false);
  const [apiKey, setApiKey] = useState<string>(() => localStorage.getItem(STORAGE_KEYS.API_KEY) || '');
  const [isSyncingLive, setIsSyncingLive] = useState(false);
  const [lastSyncTime, setLastSyncTime] = useState<string>('Live Exchange Feed');
  const [lastTick, setLastTick] = useState<LastTickInfo | null>(null);

  // OWNER PERMISSION STATE (Protected via irreversible SHA-256 hash)
  const [isOwnerAuthenticated, setIsOwnerAuthenticated] = useState<boolean>(() => {
    try {
      return sessionStorage.getItem('dalalpulse_owner_session') === 'true';
    } catch {
      return false;
    }
  });

  const [ownerPasswordHash, setOwnerPasswordHash] = useState<string>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEYS.OWNER_PASSWORD);
      if (saved) return saved;
    } catch {}
    return DEFAULT_OWNER_PASSWORD_HASH;
  });

  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [pendingAction, setPendingAction] = useState<(() => void) | null>(null);
  const [recoveryOtp, setRecoveryOtp] = useState<{ otp: string; expiresAt: number } | null>(null);

  const [isApiModalOpen, setIsApiModalOpen] = useState(false);
  const [isNewUpdateModalOpen, setIsNewUpdateModalOpen] = useState(false);
  const [isNewStockModalOpen, setIsNewStockModalOpen] = useState(false);
  const [isExportModalOpen, setIsExportModalOpen] = useState(false);
  const [isFiiDiiModalOpen, setIsFiiDiiModalOpen] = useState(false);
  const [editingFiiDiiRecord, setEditingFiiDiiRecord] = useState<InstitutionalFlowDay | null>(null);
  const [isSyncingFiiDii, setIsSyncingFiiDii] = useState(false);

  // FII & DII Flows State
  const [fiiDiiFlows, setFiiDiiFlows] = useState<InstitutionalFlowDay[]>(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEYS.FII_DII);
      if (stored) return JSON.parse(stored);
    } catch (e) {
      console.error('Failed to load fiiDiiFlows from localStorage', e);
    }
    return INITIAL_FII_DII_FLOWS;
  });

  const marketOpenStatus = isIndianMarketOpen();

  const [viewRole, setViewRoleState] = useState<ViewRole>(() => {
    try {
      const isAuth = sessionStorage.getItem('dalalpulse_owner_session') === 'true';
      if (isAuth) {
        const stored = sessionStorage.getItem('dalalpulse_role_session');
        if (stored === 'management_ir' || stored === 'analyst_investor') return stored;
      }
    } catch {}
    return 'analyst_investor';
  });

  const setViewRole = (role: ViewRole) => {
    if (!isOwnerAuthenticated && role === 'management_ir') {
      setIsAuthModalOpen(true);
      return;
    }
    setViewRoleState(role);
    try {
      sessionStorage.setItem('dalalpulse_role_session', role);
    } catch {}
  };

  const [activeTab, setActiveTab] = useState<ActiveTab>('overview');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedSector, setSelectedSector] = useState('All');
  const [selectedMarketCap, setSelectedMarketCap] = useState('All');
  const [filterWatchlistOnly, setFilterWatchlistOnly] = useState(false);

  const [selectedStockId, setSelectedStockId] = useState<string | null>(null);
  const [selectedUpdateId, setSelectedUpdateId] = useState<string | null>(null);

  // Sync to localStorage
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEYS.STOCKS, JSON.stringify(stocks));
    } catch (e) {
      console.error(e);
    }
  }, [stocks]);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEYS.UPDATES, JSON.stringify(updates));
    } catch (e) {
      console.error(e);
    }
  }, [updates]);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEYS.FII_DII, JSON.stringify(fiiDiiFlows));
    } catch (e) {
      console.error(e);
    }
  }, [fiiDiiFlows]);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEYS.DATA_MODE, dataSourceMode);
    } catch {}
  }, [dataSourceMode]);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEYS.API_KEY, apiKey);
    } catch {}
  }, [apiKey]);

  // Refresh live prices from official proxy
  const refreshLiveMarketData = useCallback(async () => {
    setIsSyncingLive(true);
    try {
      const [freshIndices, freshStocks] = await Promise.all([
        fetchAllLiveIndices(INDIAN_MARKET_INDICES),
        fetchAllLiveStocks(INITIAL_INDIAN_STOCKS)
      ]);

      if (freshIndices && freshIndices.length > 0) {
        setIndices(freshIndices);
      }
      if (freshStocks && freshStocks.length > 0) {
        setStocks(freshStocks);
      }
      
      const timeStr = new Date().toLocaleTimeString('en-IN', { hour12: false });
      setLastSyncTime(`${timeStr} IST`);
    } catch (err) {
      console.error('Error refreshing live market data', err);
    } finally {
      setIsSyncingLive(false);
    }
  }, []);

  // AUTO-SYNC ON MOUNT & PERIODIC REFRESH (every 25 seconds)
  useEffect(() => {
    // Initial fetch on mount
    refreshLiveMarketData();

    // Periodic refresh
    const autoSyncInterval = setInterval(() => {
      refreshLiveMarketData();
    }, 25000);

    return () => clearInterval(autoSyncInterval);
  }, [refreshLiveMarketData]);

  // OPTIONAL TICK SIMULATOR: Only active if user explicitly enables simulator mode
  useEffect(() => {
    if (dataSourceMode !== 'simulator' || !isTickSimulatorActive) return;

    const interval = setInterval(() => {
      const shouldTickIndex = Math.random() > 0.45;

      if (shouldTickIndex && indices.length > 0) {
        const randomIdx = Math.floor(Math.random() * indices.length);
        const target = indices[randomIdx];
        const tick = simulateMarketTick(target.value, 0.08);

        setIndices(prev =>
          prev.map((item, idx) => {
            if (idx === randomIdx) {
              const newChange = Number((item.change + tick.diff).toFixed(2));
              const prevClose = item.value - item.change;
              const newChangePct = prevClose > 0 ? Number(((newChange / prevClose) * 100).toFixed(2)) : item.changePct;

              return {
                ...item,
                value: tick.newPrice,
                change: newChange,
                changePct: newChangePct
              };
            }
            return item;
          })
        );

        setLastTick({
          id: target.name,
          direction: tick.diff >= 0 ? 'up' : 'down',
          timestamp: Date.now()
        });
      } else if (stocks.length > 0) {
        const randomStockIdx = Math.floor(Math.random() * stocks.length);
        const target = stocks[randomStockIdx];
        const tick = simulateMarketTick(target.cmp, 0.15);

        setStocks(prev =>
          prev.map((s, idx) => {
            if (idx === randomStockIdx) {
              const newChangeRs = Number((s.changeRs + tick.diff).toFixed(2));
              const prevClose = s.cmp - s.changeRs;
              const newChangePct = prevClose > 0 ? Number(((newChangeRs / prevClose) * 100).toFixed(2)) : s.changePct;
              const newMcap = Math.round(s.marketCapCr * (tick.newPrice / s.cmp));

              return {
                ...s,
                cmp: tick.newPrice,
                changeRs: newChangeRs,
                changePct: newChangePct,
                marketCapCr: newMcap > 0 ? newMcap : s.marketCapCr,
                high52w: Math.max(s.high52w, tick.newPrice),
                low52w: Math.min(s.low52w, tick.newPrice)
              };
            }
            return s;
          })
        );

        setLastTick({
          id: target.symbol,
          direction: tick.diff >= 0 ? 'up' : 'down',
          timestamp: Date.now()
        });
      }

      const timeStr = new Date().toLocaleTimeString('en-IN', { hour12: false });
      setLastSyncTime(`${timeStr} IST`);
    }, 2500);

    return () => clearInterval(interval);
  }, [dataSourceMode, isTickSimulatorActive, indices, stocks]);

  const getStockById = (id: string) => {
    return stocks.find(s => s.id === id);
  };

  const toggleWatchlist = (stockId: string) => {
    setStocks(prev =>
      prev.map(s => (s.id === stockId ? { ...s, isWatchlist: !s.isWatchlist } : s))
    );
  };

  const likeUpdate = (updateId: string) => {
    setUpdates(prev =>
      prev.map(upd =>
        upd.id === updateId ? { ...upd, likesCount: (upd.likesCount || 0) + 1 } : upd
      )
    );
  };

  const addStockUpdate = (newUpdateData: Partial<StockUpdate>) => {
    const targetStock = stocks.find(s => s.id === newUpdateData.stockId);
    const newUpdate: StockUpdate = {
      id: `upd-${Date.now()}`,
      stockId: newUpdateData.stockId || 'stock-1',
      stockSymbol: targetStock?.symbol || newUpdateData.stockSymbol || 'TICKER',
      stockName: targetStock?.name || newUpdateData.stockName || 'NSE Listed Co',
      sector: targetStock?.sector || 'IT & Software',
      logoColor: targetStock?.logoColor || 'from-indigo-600 to-blue-700',
      title: newUpdateData.title || 'Corporate Announcement / Earnings Brief',
      date: new Date().toISOString().split('T')[0],
      period: newUpdateData.period || 'Q2 FY27',
      type: (newUpdateData.type as UpdateType) || 'quarterly_results',
      summary: newUpdateData.summary || '',
      kpiSnapshot: newUpdateData.kpiSnapshot || {
        revenueCr: targetStock?.quarterlyRevenueCr || 5000,
        yoyRevGrowthPct: 15,
        ebitdaCr: targetStock?.quarterlyEbitdaCr || 800,
        ebitdaMarginPct: targetStock?.ebitdaMarginPct || 16,
        patCr: targetStock?.quarterlyPatCr || 500,
        yoyPatGrowthPct: 20,
        epsRs: 12.5
      },
      keyHighlights: newUpdateData.keyHighlights || [],
      managementGuidance: newUpdateData.managementGuidance || [],
      headwindsAndRisks: newUpdateData.headwindsAndRisks || [],
      orderWinsOrCapex: newUpdateData.orderWinsOrCapex || [],
      filings: newUpdateData.filings || [
        { title: `${targetStock?.symbol || 'Company'} - Investor Briefing.pdf`, type: 'presentation' }
      ],
      likesCount: 0,
      bookmarkedByInvestors: 1
    };

    setUpdates(prev => [newUpdate, ...prev]);

    if (newUpdateData.stockId && newUpdateData.kpiSnapshot) {
      setStocks(prev =>
        prev.map(s => {
          if (s.id === newUpdateData.stockId) {
            const snap = newUpdateData.kpiSnapshot!;
            const updatedHistory = [...s.quarterlyHistory];
            updatedHistory.push({
              quarter: newUpdate.period,
              revenueCr: snap.revenueCr,
              ebitdaCr: snap.ebitdaCr,
              patCr: snap.patCr,
              ebitdaMargin: snap.ebitdaMarginPct
            });

            return {
              ...s,
              quarterlyRevenueCr: snap.revenueCr,
              quarterlyPatCr: snap.patCr,
              quarterlyEbitdaCr: snap.ebitdaCr,
              ebitdaMarginPct: snap.ebitdaMarginPct,
              yoyPatGrowthPct: snap.yoyPatGrowthPct,
              quarterlyHistory: updatedHistory
            };
          }
          return s;
        })
      );
    }
  };

  const addStock = (newStockData: Partial<IndianStock>) => {
    const id = `stock-${Date.now()}`;
    const symbol = (newStockData.symbol || 'STOCK').toUpperCase();
    const cmp = newStockData.cmp || 500;
    const mcapCr = newStockData.marketCapCr || 15000;

    let mcapCat: MarketCapCategory = 'Mid Cap';
    if (mcapCr >= 50000) mcapCat = 'Large Cap';
    else if (mcapCr < 5000) mcapCat = 'Small Cap';

    const newStock: IndianStock = {
      id,
      symbol,
      bseCode: newStockData.bseCode || '500000',
      name: newStockData.name || `${symbol} Ltd`,
      tagline: newStockData.tagline || 'Pioneering leader in Indian industry',
      sector: (newStockData.sector as IndianSector) || 'Automobile & EV',
      marketCapCategory: mcapCat,
      exchange: 'NSE & BSE',
      cmp,
      changeRs: newStockData.changeRs || 5.0,
      changePct: newStockData.changePct || 1.0,
      high52w: newStockData.high52w || cmp * 1.25,
      low52w: newStockData.low52w || cmp * 0.75,
      marketCapCr: mcapCr,
      peRatio: newStockData.peRatio || 25,
      industryPe: newStockData.industryPe || 22,
      pbRatio: newStockData.pbRatio || 3.5,
      roe: newStockData.roe || 18,
      roce: newStockData.roce || 20,
      dividendYield: newStockData.dividendYield || 0.8,
      debtToEquity: newStockData.debtToEquity || 0.2,
      quarterlyRevenueCr: newStockData.quarterlyRevenueCr || 2500,
      quarterlyPatCr: newStockData.quarterlyPatCr || 320,
      quarterlyEbitdaCr: newStockData.quarterlyEbitdaCr || 480,
      ebitdaMarginPct: 19.2,
      yoyPatGrowthPct: 22.5,
      orderBookCr: newStockData.orderBookCr,
      shareholding: {
        promoter: 52.0,
        fii: 18.0,
        dii: 15.0,
        publicRetail: 15.0
      },
      quarterlyHistory: [
        { quarter: 'Q1 FY26', revenueCr: Math.round((newStockData.quarterlyRevenueCr || 2500) * 0.8), ebitdaCr: 380, patCr: 240, ebitdaMargin: 18.0 },
        { quarter: 'Q2 FY26', revenueCr: Math.round((newStockData.quarterlyRevenueCr || 2500) * 0.85), ebitdaCr: 410, patCr: 260, ebitdaMargin: 18.2 },
        { quarter: 'Q3 FY26', revenueCr: Math.round((newStockData.quarterlyRevenueCr || 2500) * 0.92), ebitdaCr: 440, patCr: 290, ebitdaMargin: 18.8 },
        { quarter: 'Q4 FY26', revenueCr: newStockData.quarterlyRevenueCr || 2500, ebitdaCr: 480, patCr: 320, ebitdaMargin: 19.2 }
      ],
      corporateActions: [
        { id: `ca-${Date.now()}`, type: 'AGM / EGM', details: 'Annual General Meeting & Audited FY Financial Statements approval', recordDate: '2026-08-30' }
      ],
      isWatchlist: false,
      healthStatus: (newStockData.healthStatus as HealthStatus) || 'outperforming',
      logoColor: newStockData.logoColor || 'from-indigo-600 to-purple-700',
      website: newStockData.website || 'https://nseindia.com'
    };

    setStocks(prev => [newStock, ...prev]);

    addStockUpdate({
      stockId: id,
      stockSymbol: newStock.symbol,
      stockName: newStock.name,
      sector: newStock.sector,
      logoColor: newStock.logoColor,
      title: `${newStock.name} (${newStock.symbol}) Added to Indian Equity Watchlist`,
      period: 'Onboarding',
      type: 'regulatory_lodr',
      summary: `Initial tracking initiated for ${newStock.name} (NSE: ${newStock.symbol}). Market cap at ₹${newStock.marketCapCr.toLocaleString('en-IN')} Cr with latest quarterly PAT of ₹${newStock.quarterlyPatCr} Cr.`,
      kpiSnapshot: {
        revenueCr: newStock.quarterlyRevenueCr,
        yoyRevGrowthPct: 18.5,
        ebitdaCr: newStock.quarterlyEbitdaCr,
        ebitdaMarginPct: newStock.ebitdaMarginPct,
        patCr: newStock.quarterlyPatCr,
        yoyPatGrowthPct: newStock.yoyPatGrowthPct,
        epsRs: 14.2
      },
      keyHighlights: [
        'Stock initiated under active investor coverage.',
        `Current trading valuation: P/E ${newStock.peRatio}x vs Industry ${newStock.industryPe}x.`
      ],
      managementGuidance: [],
      headwindsAndRisks: [],
      orderWinsOrCapex: []
    });
  };

  const addOrUpdateFiiDiiRecord = (record: Partial<InstitutionalFlowDay>) => {
    const targetDate = record.date || new Date().toISOString().split('T')[0];
    const formatted = record.formattedDate || formatFiiDiiDate(targetDate);
    const fiiBuy = Number(record.fiiGrossBuyCr || 0);
    const fiiSell = Number(record.fiiGrossSellCr || 0);
    const fiiNet = Number((record.fiiNetCr !== undefined ? record.fiiNetCr : (fiiBuy - fiiSell)).toFixed(2));
    const diiBuy = Number(record.diiGrossBuyCr || 0);
    const diiSell = Number(record.diiGrossSellCr || 0);
    const diiNet = Number((record.diiNetCr !== undefined ? record.diiNetCr : (diiBuy - diiSell)).toFixed(2));
    const totalNet = Number((fiiNet + diiNet).toFixed(2));

    let marketImpact: InstitutionalFlowDay['marketImpact'] = record.marketImpact || 'Strong DII Absorption';
    if (!record.marketImpact) {
      if (fiiNet > 0 && diiNet > 0) marketImpact = 'Both Buying (Bullish)';
      else if (fiiNet < 0 && diiNet < 0) marketImpact = 'Both Selling (Bearish)';
      else if (fiiNet < -2000) marketImpact = 'FII Heavy Selling';
    }

    const newRecord: InstitutionalFlowDay = {
      id: record.id || `fii-dii-${targetDate}-${Date.now()}`,
      date: targetDate,
      formattedDate: formatted,
      fiiGrossBuyCr: fiiBuy,
      fiiGrossSellCr: fiiSell,
      fiiNetCr: fiiNet,
      diiGrossBuyCr: diiBuy,
      diiGrossSellCr: diiSell,
      diiNetCr: diiNet,
      totalNetCr: totalNet,
      category: record.category || 'Cash Market',
      marketImpact,
      notes: record.notes || `Cash Market FII Net: ₹${fiiNet} Cr, DII Net: ₹${diiNet} Cr.`
    };

    setFiiDiiFlows(prev => {
      const existingIdx = prev.findIndex(item => item.id === record.id || item.date === targetDate);
      if (existingIdx >= 0) {
        const copy = [...prev];
        copy[existingIdx] = { ...copy[existingIdx], ...newRecord };
        return copy;
      }
      return [newRecord, ...prev];
    });
  };

  const deleteFiiDiiRecord = (id: string) => {
    setFiiDiiFlows(prev => prev.filter(item => item.id !== id));
  };

  const fetchLiveFiiDii = async () => {
    setIsSyncingFiiDii(true);
    try {
      const data = await fetchLatestFiiDiiExchangeData();
      if (data) {
        addOrUpdateFiiDiiRecord(data);
      }
    } catch (err) {
      console.error('Error fetching live FII/DII data', err);
    } finally {
      setIsSyncingFiiDii(false);
    }
  };

  const triggerOwnerAction = (action: () => void) => {
    if (isOwnerAuthenticated) {
      action();
    } else {
      setPendingAction(() => action);
      setIsAuthModalOpen(true);
    }
  };

  const authenticateOwner = (enteredPassword: string): boolean => {
    const enteredHash = sha256(enteredPassword);
    if (enteredHash === ownerPasswordHash) {
      setIsOwnerAuthenticated(true);
      setViewRoleState('management_ir');
      try {
        sessionStorage.setItem('dalalpulse_owner_session', 'true');
        sessionStorage.setItem('dalalpulse_role_session', 'management_ir');
        localStorage.removeItem('dalalpulse_owner_auth_v5');
      } catch {}
      setIsAuthModalOpen(false);
      if (pendingAction) {
        pendingAction();
        setPendingAction(null);
      }
      return true;
    }
    return false;
  };

  const lockOwnerAccess = () => {
    setIsOwnerAuthenticated(false);
    setViewRoleState('analyst_investor');
    try {
      sessionStorage.removeItem('dalalpulse_owner_session');
      sessionStorage.removeItem('dalalpulse_role_session');
      localStorage.removeItem('dalalpulse_owner_auth_v5');
    } catch {}
  };

  const changeOwnerPassword = (oldPass: string, newPass: string) => {
    const oldHash = sha256(oldPass);
    if (oldHash !== ownerPasswordHash) {
      return { success: false, message: 'Current password is incorrect.' };
    }
    if (newPass.length < 6) {
      return { success: false, message: 'New password must be at least 6 characters.' };
    }
    const newHash = sha256(newPass);
    setOwnerPasswordHash(newHash);
    try {
      localStorage.setItem(STORAGE_KEYS.OWNER_PASSWORD, newHash);
    } catch {}
    return { success: true, message: 'Owner password successfully updated!' };
  };

  const changeOwnerPin = (oldPin: string, newPin: string) => {
    return changeOwnerPassword(oldPin, newPin);
  };

  const sendPasswordRecovery = async (): Promise<{ success: boolean; message: string; otp?: string }> => {
    // Generate secure 6-digit OTP
    const generatedOtp = Math.floor(100000 + Math.random() * 900000).toString();
    const expiresAt = Date.now() + 10 * 60 * 1000; // 10 minutes
    setRecoveryOtp({ otp: generatedOtp, expiresAt });

    // Open user's default email client prefilled with recovery verification if clicked
    try {
      const subject = encodeURIComponent('DalalPulse Owner Password Recovery');
      const body = encodeURIComponent(
        `Hello Ketan,\n\nYour DalalPulse security verification code is: ${generatedOtp}\n\nThis OTP is valid for 10 minutes to reset your owner password.\n\nRegistered to: ${OWNER_RECOVERY_EMAIL}`
      );
      const mailtoUrl = `mailto:${OWNER_RECOVERY_EMAIL}?subject=${subject}&body=${body}`;
      const a = document.createElement('a');
      a.href = mailtoUrl;
      a.target = '_blank';
      a.click();
    } catch (e) {
      console.warn('Mailto link error', e);
    }

    return {
      success: true,
      message: `Security recovery verification code sent to ${OWNER_RECOVERY_EMAIL}`,
      otp: generatedOtp
    };
  };

  const resetPasswordWithOtp = (otp: string, newPass: string): { success: boolean; message: string } => {
    if (!recoveryOtp) {
      return { success: false, message: 'No active recovery request found. Please request a new code.' };
    }
    if (Date.now() > recoveryOtp.expiresAt) {
      return { success: false, message: 'Verification code expired. Please request a new recovery email.' };
    }
    if (otp.trim() !== recoveryOtp.otp) {
      return { success: false, message: 'Invalid verification code. Please check your email.' };
    }
    if (newPass.length < 6) {
      return { success: false, message: 'New password must be at least 6 characters.' };
    }

    const newHash = sha256(newPass);
    setOwnerPasswordHash(newHash);
    try {
      localStorage.setItem(STORAGE_KEYS.OWNER_PASSWORD, newHash);
    } catch {}
    setRecoveryOtp(null);
    return { success: true, message: 'Password successfully reset! You can now log in.' };
  };

  const resetToDemoData = () => {
    localStorage.removeItem(STORAGE_KEYS.STOCKS);
    localStorage.removeItem(STORAGE_KEYS.UPDATES);
    setStocks(INITIAL_INDIAN_STOCKS);
    setUpdates(INITIAL_STOCK_UPDATES);
    setIndices(INDIAN_MARKET_INDICES);
    setDataSourceMode('official_delayed');
    setIsTickSimulatorActive(false);
    refreshLiveMarketData();
  };

  return (
    <InvestorContext.Provider
      value={{
        stocks,
        updates,
        indices,
        viewRole,
        setViewRole,
        activeTab,
        setActiveTab,
        searchQuery,
        setSearchQuery,
        selectedSector,
        setSelectedSector,
        selectedMarketCap,
        setSelectedMarketCap,
        filterWatchlistOnly,
        setFilterWatchlistOnly,
        selectedStockId,
        setSelectedStockId,
        selectedUpdateId,
        setSelectedUpdateId,
        dataSourceMode,
        setDataSourceMode,
        isTickSimulatorActive,
        setIsTickSimulatorActive,
        apiKey,
        setApiKey,
        isSyncingLive,
        lastSyncTime,
        marketOpenStatus,
        lastTick,
        refreshLiveMarketData,
        isOwnerAuthenticated,
        isAuthModalOpen,
        setIsAuthModalOpen,
        authenticateOwner,
        lockOwnerAccess,
        changeOwnerPassword,
        changeOwnerPin,
        sendPasswordRecovery,
        resetPasswordWithOtp,
        triggerOwnerAction,
        recoveryEmail: OWNER_RECOVERY_EMAIL,
        isApiModalOpen,
        setIsApiModalOpen,
        isNewUpdateModalOpen,
        setIsNewUpdateModalOpen,
        isNewStockModalOpen,
        setIsNewStockModalOpen,
        isExportModalOpen,
        setIsExportModalOpen,
        isFiiDiiModalOpen,
        setIsFiiDiiModalOpen,
        fiiDiiFlows,
        editingFiiDiiRecord,
        setEditingFiiDiiRecord,
        addOrUpdateFiiDiiRecord,
        deleteFiiDiiRecord,
        fetchLiveFiiDii,
        isSyncingFiiDii,
        addStockUpdate,
        addStock,
        toggleWatchlist,
        likeUpdate,
        resetToDemoData,
        getStockById
      }}
    >
      {children}
    </InvestorContext.Provider>
  );
};

export const useInvestor = () => {
  const context = useContext(InvestorContext);
  if (!context) {
    throw new Error('useInvestor must be used within an InvestorProvider');
  }
  return context;
};
