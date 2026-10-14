import React from 'react';
import { 
  Building2, 
  TrendingUp, 
  FileCheck, 
  Layers, 
  ArrowUpRight,
  Sparkles,
  Award
} from 'lucide-react';
import { useInvestor } from '../context/InvestorContext';
import { formatINR } from '../utils/formatters';

export const PortfolioStats: React.FC = () => {
  const { stocks, updates, setActiveTab } = useInvestor();

  const totalMarketCapCr = stocks.reduce((acc, s) => acc + s.marketCapCr, 0);
  const totalQuarterlyRevenueCr = stocks.reduce((acc, s) => acc + s.quarterlyRevenueCr, 0);
  const totalQuarterlyPatCr = stocks.reduce((acc, s) => acc + s.quarterlyPatCr, 0);
  const totalOrderBookCr = stocks.reduce((acc, s) => acc + (s.orderBookCr || 0), 0);
  const totalCorporateActions = stocks.reduce((acc, s) => acc + s.corporateActions.length, 0);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
      
      {/* Total Tracked Market Cap */}
      <div className="glass-panel p-5 rounded-2xl relative overflow-hidden group hover:border-slate-700 transition-all duration-300">
        <div className="absolute top-0 right-0 w-24 h-24 bg-amber-500/10 rounded-full blur-2xl group-hover:bg-amber-500/20 transition-all" />
        <div className="flex items-center justify-between text-slate-400 text-xs font-medium mb-3">
          <span>Tracked Market Capitalization</span>
          <span className="p-2 rounded-xl bg-amber-500/10 text-amber-400 border border-amber-500/20">
            <Building2 className="w-4 h-4" />
          </span>
        </div>
        <div className="flex items-baseline gap-2">
          <span className="text-2xl lg:text-3xl font-extrabold text-white font-mono-numeric tracking-tight">
            ₹{(totalMarketCapCr / 100000).toFixed(2)} Lakh Cr
          </span>
        </div>
        <div className="mt-3 flex items-center justify-between text-xs text-slate-400">
          <span>Across {stocks.length} NSE & BSE listed firms</span>
          <span className="text-amber-400 font-medium">India Growth Theme</span>
        </div>
      </div>

      {/* Cumulative Quarterly Net Profit (PAT) */}
      <div className="glass-panel p-5 rounded-2xl relative overflow-hidden group hover:border-slate-700 transition-all duration-300">
        <div className="absolute top-0 right-0 w-24 h-24 bg-emerald-500/10 rounded-full blur-2xl group-hover:bg-emerald-500/20 transition-all" />
        <div className="flex items-center justify-between text-slate-400 text-xs font-medium mb-3">
          <span>Quarterly Net Profit (PAT)</span>
          <span className="p-2 rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
            <TrendingUp className="w-4 h-4" />
          </span>
        </div>
        <div className="flex items-baseline gap-2">
          <span className="text-2xl lg:text-3xl font-extrabold text-white font-mono-numeric tracking-tight">
            {formatINR(totalQuarterlyPatCr, true)}
          </span>
          <span className="flex items-center text-xs font-semibold text-emerald-400 bg-emerald-500/10 px-1.5 py-0.5 rounded border border-emerald-500/20">
            <ArrowUpRight className="w-3 h-3" />
            +42.5% YoY
          </span>
        </div>
        <div className="mt-3 flex items-center justify-between text-xs text-slate-400">
          <span>Quarterly Topline: <strong>{formatINR(totalQuarterlyRevenueCr, true)}</strong></span>
          <span className="text-slate-500">Q2 FY27</span>
        </div>
      </div>

      {/* Total Confirmed Order Book */}
      <div 
        onClick={() => setActiveTab('stocks')}
        className="glass-panel p-5 rounded-2xl relative overflow-hidden cursor-pointer group hover:border-slate-700 transition-all duration-300"
      >
        <div className="absolute top-0 right-0 w-24 h-24 bg-blue-500/10 rounded-full blur-2xl group-hover:bg-blue-500/20 transition-all" />
        <div className="flex items-center justify-between text-slate-400 text-xs font-medium mb-3">
          <span>Confirmed Order Book (Capex/Defense)</span>
          <span className="p-2 rounded-xl bg-blue-500/10 text-blue-400 border border-blue-500/20">
            <Layers className="w-4 h-4" />
          </span>
        </div>
        <div className="flex items-baseline gap-2">
          <span className="text-2xl lg:text-3xl font-extrabold text-white font-mono-numeric tracking-tight">
            {formatINR(totalOrderBookCr, true)}
          </span>
        </div>
        <div className="mt-3 flex items-center justify-between text-xs text-slate-400">
          <span>HAL, Dixon & EMS Pipeline</span>
          <span className="text-indigo-400 group-hover:underline">Explore →</span>
        </div>
      </div>

      {/* Corporate Actions & Dividends */}
      <div 
        onClick={() => setActiveTab('updates')}
        className="glass-panel p-5 rounded-2xl relative overflow-hidden cursor-pointer group hover:border-slate-700 transition-all duration-300"
      >
        <div className="absolute top-0 right-0 w-24 h-24 bg-purple-500/10 rounded-full blur-2xl group-hover:bg-purple-500/20 transition-all" />
        <div className="flex items-center justify-between text-slate-400 text-xs font-medium mb-3">
          <span>Corporate Actions & Filings</span>
          <span className="p-2 rounded-xl bg-purple-500/10 text-purple-400 border border-purple-500/20">
            <FileCheck className="w-4 h-4" />
          </span>
        </div>
        <div className="flex items-baseline gap-2">
          <span className="text-2xl lg:text-3xl font-extrabold text-white font-mono-numeric tracking-tight">
            {totalCorporateActions} Actions
          </span>
          <span className="text-xs text-purple-300 bg-purple-500/10 px-2 py-0.5 rounded border border-purple-500/20">
            Active
          </span>
        </div>
        <div className="mt-3 flex items-center justify-between text-xs text-slate-400">
          <span>Dividends, Demergers & SEBI Filings</span>
          <span className="text-indigo-400 group-hover:underline">View filings →</span>
        </div>
      </div>

    </div>
  );
};
