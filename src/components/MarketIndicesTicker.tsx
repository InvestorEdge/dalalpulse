import React from 'react';
import { 
  TrendingUp, 
  TrendingDown, 
  RotateCw, 
  Zap, 
  Clock, 
  Settings,
  AlertCircle
} from 'lucide-react';
import { useInvestor } from '../context/InvestorContext';

export const MarketIndicesTicker: React.FC = () => {
  const { 
    indices, 
    isSyncingLive, 
    lastSyncTime, 
    refreshLiveMarketData,
    dataSourceMode,
    isTickSimulatorActive,
    setIsTickSimulatorActive,
    marketOpenStatus,
    lastTick,
    setIsApiModalOpen
  } = useInvestor();

  return (
    <div className="w-full bg-slate-950/95 border-b border-slate-800/80 text-[11px] py-1.5 px-3 sm:px-6 overflow-x-auto no-scrollbar flex items-center justify-between gap-4">
      
      {/* Left: Mode Badge & Controls */}
      <div className="flex items-center gap-2.5 shrink-0">
        
        {/* Pulsing Live indicator */}
        <div className={`flex items-center gap-1.5 px-2.5 py-0.5 rounded-full font-bold ${
          dataSourceMode === 'simulator' 
            ? 'bg-amber-500/15 border border-amber-500/40 text-amber-300' 
            : 'bg-emerald-500/15 border border-emerald-500/40 text-emerald-400'
        }`}>
          <span className="flex h-2 w-2 relative">
            <span className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${dataSourceMode === 'simulator' ? 'bg-amber-400' : 'bg-emerald-400'}`}></span>
            <span className={`relative inline-flex rounded-full h-2 w-2 ${dataSourceMode === 'simulator' ? 'bg-amber-500' : 'bg-emerald-500'}`}></span>
          </span>
          <span className="tracking-wider text-[10px] uppercase font-extrabold">
            {dataSourceMode === 'simulator' ? '⚡ SIMULATOR (DEMO)' : 'LIVE NSE · BSE'}
          </span>
        </div>

        {/* Exchange Timing & Status Note */}
        <span className="text-[10px] text-slate-400 hidden xl:inline font-medium">
          {marketOpenStatus.statusText}
        </span>

        {/* Manual Refresh CTA */}
        <button
          onClick={() => refreshLiveMarketData()}
          disabled={isSyncingLive}
          title="Fetch fresh live quotes directly from exchange feed"
          className="flex items-center gap-1 px-2.5 py-0.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:border-slate-700 transition-colors disabled:opacity-50"
        >
          <RotateCw className={`w-3 h-3 text-emerald-400 ${isSyncingLive ? 'animate-spin' : ''}`} />
          <span className="text-[10px] font-semibold hidden sm:inline">
            {isSyncingLive ? 'Syncing...' : 'Sync Live'}
          </span>
        </button>

        {/* Auto Sync Pill */}
        <span className="hidden md:inline-flex items-center gap-1 text-[10px] text-slate-400 px-2 py-0.5 bg-slate-900/60 rounded border border-slate-800/80">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
          <span>Auto: 25s</span>
        </span>

        {/* Settings CTA */}
        <button
          onClick={() => setIsApiModalOpen(true)}
          title="Configure Market Data Source & API Keys"
          className="flex items-center gap-1 px-2 py-0.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 hover:text-amber-400 hover:border-slate-700 transition-colors"
        >
          <Settings className="w-3 h-3 text-slate-400" />
          <span className="text-[10px] font-semibold hidden lg:inline">Data Source</span>
        </button>

      </div>

      {/* Center: Live Benchmark Indices */}
      <div className="flex items-center gap-4 sm:gap-6 shrink-0">
        {indices.map(index => {
          const isPositive = index.change >= 0;
          const isTicked = lastTick?.id === index.name && (Date.now() - lastTick.timestamp) < 1500;
          const tickColor = lastTick?.direction === 'up' ? 'bg-emerald-500/20 text-emerald-300 border-emerald-500/50' : 'bg-rose-500/20 text-rose-300 border-rose-500/50';

          return (
            <div 
              key={index.name} 
              className={`flex items-center gap-1.5 whitespace-nowrap px-1.5 py-0.5 rounded-lg transition-all duration-300 border border-transparent ${
                isTicked ? tickColor : ''
              }`}
            >
              <span className="font-bold text-slate-400 text-[10px]">{index.name}</span>
              <span className="font-mono-numeric font-extrabold text-white">
                {index.value.toLocaleString('en-IN', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
              </span>
              <span className={`flex items-center gap-0.5 font-mono-numeric font-bold text-[10px] ${isPositive ? 'text-emerald-400' : 'text-rose-400'}`}>
                {isPositive ? <TrendingUp className="w-3 h-3" /> : <TrendingDown className="w-3 h-3" />}
                {isPositive ? '+' : ''}{index.change.toFixed(2)} ({isPositive ? '+' : ''}{index.changePct.toFixed(2)}%)
              </span>
            </div>
          );
        })}
      </div>

      {/* Right: Timestamp */}
      <div className="hidden lg:flex items-center gap-1.5 text-slate-400 text-[10px] shrink-0 font-mono-numeric">
        <Clock className="w-3 h-3 text-slate-500" />
        <span>Stream: <strong className="text-slate-200">{lastSyncTime}</strong></span>
      </div>

    </div>
  );
};
