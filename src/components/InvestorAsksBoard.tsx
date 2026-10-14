import React, { useState } from 'react';
import { 
  Mic, 
  TrendingUp, 
  AlertTriangle, 
  Layers, 
  Globe, 
  ExternalLink, 
  Filter,
  CheckCircle2,
  Calendar
} from 'lucide-react';
import { useInvestor } from '../context/InvestorContext';

export const InvestorAsksBoard: React.FC = () => {
  const { updates, setSelectedStockId } = useInvestor();
  const [filterType, setFilterType] = useState<string>('All');

  // Collect all management guidance & concall insights across all companies
  const concallItems: {
    id: string;
    stockSymbol: string;
    stockName: string;
    stockId: string;
    period: string;
    date: string;
    type: 'guidance' | 'order_capex' | 'risk';
    content: string;
  }[] = [];

  updates.forEach(upd => {
    upd.managementGuidance.forEach((g, idx) => {
      concallItems.push({
        id: `${upd.id}-g-${idx}`,
        stockSymbol: upd.stockSymbol,
        stockName: upd.stockName,
        stockId: upd.stockId,
        period: upd.period,
        date: upd.date,
        type: 'guidance',
        content: g
      });
    });

    upd.orderWinsOrCapex.forEach((c, idx) => {
      concallItems.push({
        id: `${upd.id}-c-${idx}`,
        stockSymbol: upd.stockSymbol,
        stockName: upd.stockName,
        stockId: upd.stockId,
        period: upd.period,
        date: upd.date,
        type: 'order_capex',
        content: c
      });
    });

    upd.headwindsAndRisks.forEach((r, idx) => {
      concallItems.push({
        id: `${upd.id}-r-${idx}`,
        stockSymbol: upd.stockSymbol,
        stockName: upd.stockName,
        stockId: upd.stockId,
        period: upd.period,
        date: upd.date,
        type: 'risk',
        content: r
      });
    });
  });

  const filteredItems = concallItems.filter(item => {
    if (filterType === 'All') return true;
    return item.type === filterType;
  });

  return (
    <div className="space-y-6">
      
      {/* Board Header Banner */}
      <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-slate-800 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-2xl relative z-10">
          <div className="flex items-center gap-2 text-amber-400 text-xs font-bold uppercase tracking-wider mb-2">
            <Mic className="w-4 h-4" />
            <span>Earnings Call Intelligence</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Management Guidance, Order Inflows & Capex Tracker
          </h2>
          <p className="text-sm text-slate-300 mt-2 leading-relaxed">
            Direct takeaways from quarterly earnings conference calls across NSE & BSE companies. Track forward revenue visibility, margin expansion targets, export contracts, and raw material headwinds.
          </p>
        </div>
      </div>

      {/* Filter Tabs */}
      <div className="flex items-center gap-2 overflow-x-auto pb-1 no-scrollbar">
        <span className="text-xs text-slate-500 flex items-center gap-1 mr-2">
          <Filter className="w-3.5 h-3.5" />
          Filter Commentary:
        </span>
        {[
          { id: 'All', label: 'All Concall Insights' },
          { id: 'guidance', label: 'Forward FY Guidance' },
          { id: 'order_capex', label: 'Order Inflows & Capex' },
          { id: 'risk', label: 'Headwinds & Margin Risks' }
        ].map(cat => (
          <button
            key={cat.id}
            onClick={() => setFilterType(cat.id)}
            className={`px-3 py-1.5 rounded-xl text-xs font-medium whitespace-nowrap transition-all ${
              filterType === cat.id
                ? 'bg-amber-500 text-slate-950 font-bold shadow-sm shadow-amber-500/30'
                : 'bg-slate-900/80 text-slate-400 border border-slate-800 hover:text-slate-200'
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Grid of Guidance & Insights */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {filteredItems.map(item => (
          <div 
            key={item.id}
            className="glass-panel p-5 rounded-2xl border border-slate-800 hover:border-slate-700 transition-all duration-300 flex flex-col justify-between"
          >
            <div>
              {/* Header */}
              <div className="flex items-center justify-between gap-3 mb-3">
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setSelectedStockId(item.stockId)}
                    className="font-extrabold text-white text-base hover:text-amber-400 font-mono-numeric flex items-center gap-1"
                  >
                    <span>{item.stockSymbol}</span>
                    <ExternalLink className="w-3 h-3 text-slate-500" />
                  </button>
                  <span className="text-xs text-slate-400">{item.stockName}</span>
                </div>

                <span className={`text-[10px] uppercase font-bold px-2 py-0.5 rounded-full border ${
                  item.type === 'guidance'
                    ? 'bg-blue-500/15 text-blue-300 border-blue-500/30'
                    : item.type === 'order_capex'
                    ? 'bg-purple-500/15 text-purple-300 border-purple-500/30'
                    : 'bg-rose-500/15 text-rose-300 border-rose-500/30'
                }`}>
                  {item.type === 'guidance' ? 'Management Guidance' : item.type === 'order_capex' ? 'Order Win / Capex' : 'Headwind Alert'}
                </span>
              </div>

              {/* Commentary Content */}
              <p className="text-sm text-slate-200 leading-relaxed font-normal">
                "{item.content}"
              </p>
            </div>

            {/* Footer */}
            <div className="border-t border-slate-800/80 pt-3 mt-4 flex items-center justify-between text-xs text-slate-500">
              <span className="flex items-center gap-1">
                <Calendar className="w-3 h-3" />
                Earnings Call: {item.period} ({item.date})
              </span>

              <button
                onClick={() => setSelectedStockId(item.stockId)}
                className="text-amber-400 hover:text-amber-300 font-semibold"
              >
                Stock Breakdown →
              </button>
            </div>

          </div>
        ))}

        {filteredItems.length === 0 && (
          <div className="col-span-full py-12 text-center text-slate-500 glass-panel rounded-2xl">
            <p>No concall insights matching the filter.</p>
          </div>
        )}
      </div>

    </div>
  );
};
