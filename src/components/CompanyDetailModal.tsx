import React, { useState } from 'react';
import { 
  X, 
  Globe, 
  ExternalLink, 
  Calendar, 
  TrendingUp, 
  Layers, 
  Bookmark,
  PlusCircle,
  FileText,
  PieChart,
  ShieldCheck,
  Lock
} from 'lucide-react';
import { useInvestor } from '../context/InvestorContext';
import { MetricsChart } from './MetricsChart';
import { UpdateCard } from './UpdateCard';
import { formatINR, formatStockPrice, formatPercentage, getHealthBadge } from '../utils/formatters';

export const CompanyDetailModal: React.FC = () => {
  const { 
    selectedStockId, 
    setSelectedStockId, 
    getStockById, 
    updates, 
    toggleWatchlist,
    setIsNewUpdateModalOpen,
    isOwnerAuthenticated,
    viewRole,
    triggerOwnerAction
  } = useInvestor();

  const [activeTab, setActiveTab] = useState<'financials' | 'shareholding' | 'corporate_actions' | 'updates'>('financials');

  if (!selectedStockId) return null;
  const stock = getStockById(selectedStockId);
  if (!stock) return null;

  const health = getHealthBadge(stock.healthStatus);
  const stockUpdates = updates.filter(u => u.stockId === stock.id);
  const isPositive = stock.changeRs >= 0;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-200">
      
      {/* Modal Dialog */}
      <div 
        className="glass-dropdown w-full max-w-4xl max-h-[92vh] overflow-y-auto rounded-3xl border border-slate-700/80 p-6 sm:p-8 relative no-scrollbar"
        onClick={(e) => e.stopPropagation()}
      >
        
        {/* Close Button */}
        <button
          onClick={() => setSelectedStockId(null)}
          className="absolute top-6 right-6 p-2 rounded-xl text-slate-400 hover:text-white bg-slate-900 border border-slate-800 hover:border-slate-700 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Stock Header */}
        <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-6 pr-10">
          <div className="flex items-start gap-4">
            <div className={`w-14 h-14 rounded-2xl bg-gradient-to-tr ${stock.logoColor} p-1 flex items-center justify-center text-white shrink-0 shadow-lg font-bold text-base`}>
              {stock.symbol.slice(0, 4)}
            </div>
            <div>
              <div className="flex items-center gap-3 flex-wrap">
                <h2 className="text-2xl font-extrabold text-white tracking-tight font-mono-numeric">
                  {stock.symbol}
                </h2>
                <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-slate-800 text-slate-300 border border-slate-700">
                  {stock.exchange}
                </span>
                <span className="text-xs font-mono-numeric px-2 py-0.5 rounded bg-slate-800 text-slate-400">
                  BSE: {stock.bseCode}
                </span>
                <span className={`text-xs font-medium px-2.5 py-0.5 rounded-full border flex items-center gap-1.5 ${health.color}`}>
                  <span className={`w-1.5 h-1.5 rounded-full ${health.dot}`} />
                  {health.label}
                </span>
              </div>
              <p className="text-sm text-slate-300 mt-1 font-semibold">{stock.name}</p>
              <p className="text-xs text-slate-400 mt-0.5">{stock.tagline}</p>

              {/* Website & External Links */}
              <div className="flex items-center gap-3 mt-2 text-xs text-slate-400 flex-wrap">
                <a 
                  href={stock.website} 
                  target="_blank" 
                  rel="noreferrer"
                  className="flex items-center gap-1 text-amber-400 hover:underline"
                >
                  <Globe className="w-3.5 h-3.5" />
                  <span>{stock.website.replace('https://', '')}</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
                <span>•</span>
                <span className="text-slate-300 font-medium">Sector: {stock.sector}</span>
                <span>•</span>
                <span className="text-amber-300 font-medium">{stock.marketCapCategory}</span>
              </div>
            </div>
          </div>

          {/* Action CTAs */}
          <div className="flex items-center gap-2 self-start sm:self-auto shrink-0">
            <button
              onClick={() => toggleWatchlist(stock.id)}
              className={`p-2 rounded-xl border text-xs font-medium flex items-center gap-1.5 transition-colors ${
                stock.isWatchlist 
                  ? 'bg-amber-500/15 border-amber-500/40 text-amber-300' 
                  : 'bg-slate-900 border-slate-800 text-slate-400 hover:text-slate-200'
              }`}
            >
              <Bookmark className={`w-4 h-4 ${stock.isWatchlist ? 'fill-amber-400 text-amber-400' : ''}`} />
              <span>{stock.isWatchlist ? 'In Watchlist' : 'Watchlist'}</span>
            </button>

            {isOwnerAuthenticated && viewRole === 'management_ir' && (
              <button
                onClick={() => setIsNewUpdateModalOpen(true)}
                className="flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-semibold bg-amber-500 hover:bg-amber-400 text-slate-950 transition-all shadow-md shadow-amber-500/20"
              >
                <PlusCircle className="w-4 h-4" />
                <span>Post Update</span>
              </button>
            )}
          </div>
        </div>

        {/* Live CMP & Trading Ribbon */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 p-4 rounded-2xl bg-slate-950/80 border border-slate-800/80 mb-6">
          <div>
            <div className="text-[10px] uppercase font-bold text-slate-500 tracking-wider">Current Market Price (CMP)</div>
            <div className="text-2xl font-extrabold text-white font-mono-numeric mt-0.5">
              {formatStockPrice(stock.cmp)}
            </div>
            <div className={`text-xs font-bold font-mono-numeric ${isPositive ? 'text-emerald-400' : 'text-rose-400'}`}>
              {isPositive ? '+' : ''}₹{Math.abs(stock.changeRs).toFixed(2)} ({isPositive ? '+' : ''}{stock.changePct.toFixed(2)}%)
            </div>
          </div>

          <div>
            <div className="text-[10px] uppercase font-bold text-slate-500 tracking-wider">Market Capitalization</div>
            <div className="text-xl font-extrabold text-white font-mono-numeric mt-0.5">
              {formatINR(stock.marketCapCr, true)}
            </div>
            <div className="text-xs text-slate-400">{stock.marketCapCategory}</div>
          </div>

          <div>
            <div className="text-[10px] uppercase font-bold text-slate-500 tracking-wider">Valuation (P/E)</div>
            <div className="text-xl font-extrabold text-amber-400 font-mono-numeric mt-0.5">
              {stock.peRatio.toFixed(1)}x
            </div>
            <div className="text-xs text-slate-400">Industry P/E: {stock.industryPe}x</div>
          </div>

          <div>
            <div className="text-[10px] uppercase font-bold text-slate-500 tracking-wider">Return Ratios (ROCE / ROE)</div>
            <div className="text-xl font-extrabold text-emerald-400 font-mono-numeric mt-0.5">
              {stock.roce}% / {stock.roe}%
            </div>
            <div className="text-xs text-slate-400">Div Yield: {stock.dividendYield}%</div>
          </div>
        </div>

        {/* Navigation Tabs within Modal */}
        <div className="flex items-center gap-2 border-b border-slate-800 mb-6">
          <button
            onClick={() => setActiveTab('financials')}
            className={`pb-3 px-2 text-sm font-semibold border-b-2 transition-colors ${
              activeTab === 'financials'
                ? 'border-amber-500 text-white'
                : 'border-transparent text-slate-400 hover:text-slate-200'
            }`}
          >
            Quarterly Trajectory & Charts
          </button>
          <button
            onClick={() => setActiveTab('shareholding')}
            className={`pb-3 px-2 text-sm font-semibold border-b-2 transition-colors ${
              activeTab === 'shareholding'
                ? 'border-amber-500 text-white'
                : 'border-transparent text-slate-400 hover:text-slate-200'
            }`}
          >
            Shareholding Pattern (FII / DII)
          </button>
          <button
            onClick={() => setActiveTab('corporate_actions')}
            className={`pb-3 px-2 text-sm font-semibold border-b-2 transition-colors ${
              activeTab === 'corporate_actions'
                ? 'border-amber-500 text-white'
                : 'border-transparent text-slate-400 hover:text-slate-200'
            }`}
          >
            Dividends & Demergers ({stock.corporateActions.length})
          </button>
          <button
            onClick={() => setActiveTab('updates')}
            className={`pb-3 px-2 text-sm font-semibold border-b-2 transition-colors ${
              activeTab === 'updates'
                ? 'border-amber-500 text-white'
                : 'border-transparent text-slate-400 hover:text-slate-200'
            }`}
          >
            Exchange Disclosures ({stockUpdates.length})
          </button>
        </div>

        {/* Tab 1: Financials Chart & 52-Week Range */}
        {activeTab === 'financials' && (
          <div className="space-y-6">
            <MetricsChart data={stock.quarterlyHistory} stockSymbol={stock.symbol} />

            {/* 52-Week Range Detailed */}
            <div className="p-4 rounded-2xl bg-slate-900/40 border border-slate-800/80">
              <div className="flex items-center justify-between text-xs mb-2">
                <span className="text-slate-400">52-Week Low: <strong className="text-white">₹{stock.low52w.toFixed(2)}</strong></span>
                <span className="text-amber-400 font-bold uppercase tracking-wider text-[11px]">Trading Band</span>
                <span className="text-slate-400">52-Week High: <strong className="text-white">₹{stock.high52w.toFixed(2)}</strong></span>
              </div>
              <div className="w-full h-2.5 bg-slate-800 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-gradient-to-r from-blue-500 via-amber-400 to-emerald-400 rounded-full"
                  style={{ width: `${Math.round(((stock.cmp - stock.low52w) / (stock.high52w - stock.low52w)) * 100)}%` }}
                />
              </div>
            </div>
          </div>
        )}

        {/* Tab 2: Shareholding Pattern (FII / DII / Promoter) */}
        {activeTab === 'shareholding' && (
          <div className="space-y-4">
            <div className="p-4 rounded-2xl bg-slate-900/60 border border-slate-800">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3 flex items-center gap-1.5">
                <PieChart className="w-4 h-4 text-amber-400" />
                Latest Quarter Shareholding Structure
              </h4>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-4">
                <div className="p-3 rounded-xl bg-slate-950 border border-slate-800">
                  <span className="text-[10px] text-slate-500 block uppercase font-bold">Promoter & Group</span>
                  <span className="text-xl font-extrabold text-white font-mono-numeric">{stock.shareholding.promoter}%</span>
                </div>
                <div className="p-3 rounded-xl bg-slate-950 border border-slate-800">
                  <span className="text-[10px] text-slate-500 block uppercase font-bold">FII (Foreign Inst)</span>
                  <span className="text-xl font-extrabold text-cyan-400 font-mono-numeric">{stock.shareholding.fii}%</span>
                </div>
                <div className="p-3 rounded-xl bg-slate-950 border border-slate-800">
                  <span className="text-[10px] text-slate-500 block uppercase font-bold">DII (Mutual Funds, LIC)</span>
                  <span className="text-xl font-extrabold text-emerald-400 font-mono-numeric">{stock.shareholding.dii}%</span>
                </div>
                <div className="p-3 rounded-xl bg-slate-950 border border-slate-800">
                  <span className="text-[10px] text-slate-500 block uppercase font-bold">Public / Retail</span>
                  <span className="text-xl font-extrabold text-amber-400 font-mono-numeric">{stock.shareholding.publicRetail}%</span>
                </div>
              </div>

              {/* Stacked bar */}
              <div className="w-full h-3 rounded-full flex overflow-hidden">
                <div style={{ width: `${stock.shareholding.promoter}%` }} className="bg-indigo-500" title={`Promoter: ${stock.shareholding.promoter}%`} />
                <div style={{ width: `${stock.shareholding.fii}%` }} className="bg-cyan-500" title={`FII: ${stock.shareholding.fii}%`} />
                <div style={{ width: `${stock.shareholding.dii}%` }} className="bg-emerald-500" title={`DII: ${stock.shareholding.dii}%`} />
                <div style={{ width: `${stock.shareholding.publicRetail}%` }} className="bg-amber-400" title={`Retail: ${stock.shareholding.publicRetail}%`} />
              </div>
            </div>
          </div>
        )}

        {/* Tab 3: Corporate Actions */}
        {activeTab === 'corporate_actions' && (
          <div className="space-y-3">
            {stock.corporateActions.map(action => (
              <div 
                key={action.id}
                className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 flex items-center justify-between gap-3"
              >
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-xs font-bold px-2 py-0.5 rounded bg-amber-500/15 text-amber-300 border border-amber-500/30">
                      {action.type}
                    </span>
                    {action.amount && (
                      <span className="text-xs font-bold text-emerald-400">
                        {action.amount}
                      </span>
                    )}
                  </div>
                  <p className="text-sm text-slate-200">{action.details}</p>
                </div>
                <div className="text-right text-xs text-slate-400 shrink-0">
                  <div className="text-[10px] text-slate-500 uppercase">Record Date</div>
                  <div className="font-mono-numeric font-bold text-slate-200">{action.recordDate}</div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Tab 4: Updates Stream */}
        {activeTab === 'updates' && (
          <div className="space-y-4">
            {stockUpdates.map(upd => (
              <UpdateCard key={upd.id} update={upd} />
            ))}
          </div>
        )}

      </div>

    </div>
  );
};
