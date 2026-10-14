import React from 'react';
import { 
  Building2, 
  Bookmark, 
  ArrowUpRight, 
  ArrowDownRight, 
  TrendingUp, 
  Layers, 
  FileText, 
  ExternalLink,
  ShieldCheck
} from 'lucide-react';
import { IndianStock } from '../types/investor';
import { useInvestor } from '../context/InvestorContext';
import { formatINR, formatStockPrice, formatPercentage, getHealthBadge } from '../utils/formatters';

export const CompanyCard: React.FC<{ stock: IndianStock }> = ({ stock }) => {
  const { toggleWatchlist, setSelectedStockId, updates, lastTick } = useInvestor();
  
  const health = getHealthBadge(stock.healthStatus);
  const isPositive = stock.changeRs >= 0;
  const isTicked = lastTick?.id === stock.symbol && (Date.now() - lastTick.timestamp) < 1500;
  
  // Find latest update for this stock
  const stockUpdates = updates.filter(u => u.stockId === stock.id);
  const latestUpdate = stockUpdates[0];

  // 52-Week Range position percentage
  const rangeSpan = stock.high52w - stock.low52w;
  const currentPosPct = rangeSpan > 0 
    ? Math.min(100, Math.max(0, Math.round(((stock.cmp - stock.low52w) / rangeSpan) * 100))) 
    : 50;

  return (
    <div 
      className="glass-panel rounded-2xl p-5 hover:border-slate-700/80 transition-all duration-300 flex flex-col justify-between group hover:shadow-xl hover:shadow-black/40"
    >
      <div>
        
        {/* Header: Symbol, Name, CMP & Watchlist */}
        <div className="flex items-start justify-between gap-3 mb-3">
          <div className="flex items-center gap-3">
            <div className={`w-11 h-11 rounded-xl bg-gradient-to-tr ${stock.logoColor} p-0.5 shadow-md flex items-center justify-center text-white shrink-0 font-bold text-xs`}>
              {stock.symbol.slice(0, 3)}
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 
                  onClick={() => setSelectedStockId(stock.id)}
                  className="font-bold text-base text-white hover:text-amber-400 cursor-pointer transition-colors"
                >
                  {stock.symbol}
                </h3>
                <span className="text-[10px] font-semibold px-1.5 py-0.2 rounded bg-slate-800 text-slate-300 border border-slate-700/60">
                  {stock.exchange}
                </span>
                <span className="text-[10px] font-semibold px-1.5 py-0.2 rounded bg-slate-800 text-slate-400">
                  BSE: {stock.bseCode}
                </span>
              </div>
              <p className="text-xs text-slate-400 line-clamp-1">{stock.name}</p>
            </div>
          </div>

          <button
            onClick={(e) => {
              e.stopPropagation();
              toggleWatchlist(stock.id);
            }}
            title={stock.isWatchlist ? 'Remove from Watchlist' : 'Add to Watchlist'}
            className="p-1.5 text-slate-400 hover:text-amber-400 transition-colors rounded-lg hover:bg-slate-800/60"
          >
            <Bookmark className={`w-4 h-4 ${stock.isWatchlist ? 'fill-amber-400 text-amber-400' : ''}`} />
          </button>
        </div>

        {/* Current Market Price (CMP) & Day's Gain/Loss */}
        <div className={`flex items-baseline justify-between p-3 rounded-xl border transition-all duration-300 mb-3 ${
          isTicked 
            ? (lastTick?.direction === 'up' ? 'bg-emerald-950/40 border-emerald-500/70 shadow-lg shadow-emerald-500/10' : 'bg-rose-950/40 border-rose-500/70 shadow-lg shadow-rose-500/10')
            : 'bg-slate-950/70 border-slate-800/60'
        }`}>
          <div>
            <div className="text-[10px] uppercase font-bold text-slate-500 tracking-wider flex items-center gap-1.5">
              <span>Current Market Price (CMP)</span>
              <span className="flex h-1.5 w-1.5 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500"></span>
              </span>
            </div>
            <div className="text-xl font-extrabold text-white font-mono-numeric mt-0.5">
              {formatStockPrice(stock.cmp)}
            </div>
          </div>

          <div className="text-right">
            <div className={`flex items-center justify-end gap-1 text-xs font-bold font-mono-numeric ${isPositive ? 'text-emerald-400' : 'text-rose-400'}`}>
              {isPositive ? <ArrowUpRight className="w-3.5 h-3.5" /> : <ArrowDownRight className="w-3.5 h-3.5" />}
              <span>{isPositive ? '+' : ''}₹{Math.abs(stock.changeRs).toFixed(2)} ({isPositive ? '+' : ''}{stock.changePct.toFixed(2)}%)</span>
            </div>
            <div className="text-[10px] text-slate-400 mt-0.5">
              M-Cap: <strong className="text-slate-200">{formatINR(stock.marketCapCr, true)}</strong>
            </div>
          </div>
        </div>

        {/* Sector & Health Badges */}
        <div className="flex items-center gap-2 mb-3 flex-wrap">
          <span className={`text-[11px] font-medium px-2 py-0.5 rounded-full border flex items-center gap-1.5 ${health.color}`}>
            <span className={`w-1.5 h-1.5 rounded-full ${health.dot}`} />
            {health.label}
          </span>
          <span className="text-[11px] font-medium px-2 py-0.5 rounded-full bg-slate-900 text-slate-300 border border-slate-800">
            {stock.sector}
          </span>
          <span className="text-[11px] font-medium px-2 py-0.5 rounded-full bg-slate-900 text-amber-300 border border-amber-500/20">
            {stock.marketCapCategory}
          </span>
        </div>

        {/* Fundamental Ratios Grid */}
        <div className="grid grid-cols-3 gap-2 p-2.5 rounded-xl bg-slate-950/50 border border-slate-800/60 mb-3 text-xs">
          <div>
            <span className="text-[10px] text-slate-500 block">Stock P/E</span>
            <span className="font-bold text-white font-mono-numeric">{stock.peRatio.toFixed(1)}x</span>
            <span className="text-[9px] text-slate-400 block">Ind: {stock.industryPe}x</span>
          </div>
          <div>
            <span className="text-[10px] text-slate-500 block">ROCE / ROE</span>
            <span className="font-bold text-emerald-400 font-mono-numeric">{stock.roce}%</span>
            <span className="text-[9px] text-slate-400 block">ROE: {stock.roe}%</span>
          </div>
          <div>
            <span className="text-[10px] text-slate-500 block">Qtr PAT</span>
            <span className="font-bold text-white font-mono-numeric">{formatINR(stock.quarterlyPatCr, true)}</span>
            <span className="text-[9px] text-emerald-400 block">+{stock.yoyPatGrowthPct}% YoY</span>
          </div>
        </div>

        {/* 52-Week Range Bar */}
        <div className="mb-3">
          <div className="flex items-center justify-between text-[10px] text-slate-400 mb-1 font-mono-numeric">
            <span>52W Low: ₹{stock.low52w.toFixed(0)}</span>
            <span className="font-bold text-amber-400">52-Week Range</span>
            <span>52W High: ₹{stock.high52w.toFixed(0)}</span>
          </div>
          <div className="w-full h-1.5 bg-slate-800 rounded-full overflow-hidden relative">
            <div 
              className="h-full bg-gradient-to-r from-blue-500 via-amber-400 to-emerald-400 rounded-full"
              style={{ width: `${currentPosPct}%` }}
            />
          </div>
        </div>

        {/* Order Book Pill if applicable */}
        {stock.orderBookCr && (
          <div className="mb-2.5 p-2 rounded-lg bg-blue-500/10 border border-blue-500/20 text-xs flex items-center justify-between">
            <span className="text-blue-300 flex items-center gap-1.5">
              <Layers className="w-3.5 h-3.5 text-blue-400 shrink-0" />
              <span>Confirmed Order Book:</span>
            </span>
            <span className="font-bold font-mono-numeric text-blue-200">
              {formatINR(stock.orderBookCr, true)}
            </span>
          </div>
        )}

        {/* Latest announcement snippet */}
        {latestUpdate && (
          <div className="text-xs text-slate-400 border-t border-slate-800/80 pt-2 mt-2">
            <div className="text-[11px] font-bold text-slate-300 mb-0.5 line-clamp-1">
              {latestUpdate.title}
            </div>
            <p className="line-clamp-2 text-slate-400 text-[11px]">
              {latestUpdate.summary}
            </p>
          </div>
        )}

      </div>

      {/* Card Footer Actions */}
      <div className="border-t border-slate-800/80 pt-3 mt-3 flex items-center justify-between">
        <span className="text-xs text-slate-500">
          Promoter: <strong className="text-slate-300">{stock.shareholding.promoter}%</strong>
        </span>

        <button
          onClick={() => setSelectedStockId(stock.id)}
          className="flex items-center gap-1 text-xs font-semibold text-amber-400 hover:text-amber-300 group-hover:translate-x-0.5 transition-all"
        >
          <span>Research Brief</span>
          <ArrowUpRight className="w-3.5 h-3.5" />
        </button>
      </div>

    </div>
  );
};
