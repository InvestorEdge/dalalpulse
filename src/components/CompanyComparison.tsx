import React, { useState } from 'react';
import { 
  BarChart3, 
  ArrowUpDown, 
  Building2, 
  ExternalLink 
} from 'lucide-react';
import { useInvestor } from '../context/InvestorContext';
import { formatINR, formatStockPrice, formatPercentage, getHealthBadge } from '../utils/formatters';

type SortField = 'marketCap' | 'cmp' | 'pe' | 'roce' | 'pat' | 'patGrowth' | 'divYield';

export const CompanyComparison: React.FC = () => {
  const { stocks, setSelectedStockId } = useInvestor();
  const [sortField, setSortField] = useState<SortField>('marketCap');
  const [sortAsc, setSortAsc] = useState(false);

  const handleSort = (field: SortField) => {
    if (sortField === field) {
      setSortAsc(!sortAsc);
    } else {
      setSortField(field);
      setSortAsc(false);
    }
  };

  const sortedStocks = [...stocks].sort((a, b) => {
    let valA = 0;
    let valB = 0;
    switch (sortField) {
      case 'marketCap':
        valA = a.marketCapCr;
        valB = b.marketCapCr;
        break;
      case 'cmp':
        valA = a.cmp;
        valB = b.cmp;
        break;
      case 'pe':
        valA = a.peRatio;
        valB = b.peRatio;
        break;
      case 'roce':
        valA = a.roce;
        valB = b.roce;
        break;
      case 'pat':
        valA = a.quarterlyPatCr;
        valB = b.quarterlyPatCr;
        break;
      case 'patGrowth':
        valA = a.yoyPatGrowthPct;
        valB = b.yoyPatGrowthPct;
        break;
      case 'divYield':
        valA = a.dividendYield;
        valB = b.dividendYield;
        break;
    }
    return sortAsc ? valA - valB : valB - valA;
  });

  return (
    <div className="space-y-6">
      
      {/* Header */}
      <div className="glass-panel p-6 rounded-3xl border border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 text-amber-400 text-xs font-bold uppercase tracking-wider mb-1">
            <BarChart3 className="w-4 h-4" />
            <span>Valuation & Financial Benchmark Matrix</span>
          </div>
          <h2 className="text-2xl font-extrabold text-white tracking-tight">
            Indian Equities Peer Comparison (NSE & BSE)
          </h2>
          <p className="text-xs sm:text-sm text-slate-400 mt-1">
            Compare valuation multiples (P/E, P/B), capital efficiency (ROCE/ROE), quarterly earnings, and dividend yields.
          </p>
        </div>

        <div className="text-xs text-slate-400 bg-slate-900 border border-slate-800 px-4 py-2 rounded-xl self-start sm:self-auto">
          Sorted by: <strong className="text-amber-400 uppercase font-mono-numeric">{sortField} ({sortAsc ? 'Asc' : 'Desc'})</strong>
        </div>
      </div>

      {/* Comparison Table */}
      <div className="glass-panel rounded-2xl border border-slate-800 overflow-hidden shadow-xl">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs sm:text-sm">
            <thead className="bg-slate-950/80 border-b border-slate-800 text-slate-400 font-semibold uppercase text-[11px] tracking-wider">
              <tr>
                <th className="py-4 px-4 sm:px-6">Stock Symbol</th>
                <th className="py-4 px-3">Sector</th>
                <th 
                  onClick={() => handleSort('cmp')}
                  className="py-4 px-3 cursor-pointer hover:text-white transition-colors"
                >
                  <div className="flex items-center gap-1">
                    <span>CMP (₹)</span>
                    <ArrowUpDown className="w-3 h-3" />
                  </div>
                </th>
                <th 
                  onClick={() => handleSort('marketCap')}
                  className="py-4 px-3 cursor-pointer hover:text-white transition-colors"
                >
                  <div className="flex items-center gap-1">
                    <span>Market Cap</span>
                    <ArrowUpDown className="w-3 h-3" />
                  </div>
                </th>
                <th 
                  onClick={() => handleSort('pe')}
                  className="py-4 px-3 cursor-pointer hover:text-white transition-colors"
                >
                  <div className="flex items-center gap-1">
                    <span>P/E (Stock / Ind)</span>
                    <ArrowUpDown className="w-3 h-3" />
                  </div>
                </th>
                <th 
                  onClick={() => handleSort('roce')}
                  className="py-4 px-3 cursor-pointer hover:text-white transition-colors"
                >
                  <div className="flex items-center gap-1">
                    <span>ROCE / ROE</span>
                    <ArrowUpDown className="w-3 h-3" />
                  </div>
                </th>
                <th 
                  onClick={() => handleSort('pat')}
                  className="py-4 px-3 cursor-pointer hover:text-white transition-colors"
                >
                  <div className="flex items-center gap-1">
                    <span>Qtr PAT</span>
                    <ArrowUpDown className="w-3 h-3" />
                  </div>
                </th>
                <th 
                  onClick={() => handleSort('patGrowth')}
                  className="py-4 px-3 cursor-pointer hover:text-white transition-colors"
                >
                  <div className="flex items-center gap-1">
                    <span>YoY PAT %</span>
                    <ArrowUpDown className="w-3 h-3" />
                  </div>
                </th>
                <th className="py-4 px-4 text-right">Health Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/60 font-medium">
              {sortedStocks.map(stock => {
                const health = getHealthBadge(stock.healthStatus);

                return (
                  <tr 
                    key={stock.id}
                    onClick={() => setSelectedStockId(stock.id)}
                    className="hover:bg-slate-900/60 cursor-pointer transition-colors group"
                  >
                    {/* Stock Symbol */}
                    <td className="py-4 px-4 sm:px-6">
                      <div className="flex items-center gap-3">
                        <div className={`w-8 h-8 rounded-lg bg-gradient-to-tr ${stock.logoColor} p-0.5 flex items-center justify-center text-white shrink-0 font-bold text-xs`}>
                          {stock.symbol.slice(0, 3)}
                        </div>
                        <div>
                          <div className="font-extrabold text-white group-hover:text-amber-400 transition-colors flex items-center gap-1 font-mono-numeric">
                            <span>{stock.symbol}</span>
                            <ExternalLink className="w-3 h-3 text-slate-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                          </div>
                          <div className="text-[11px] text-slate-400 line-clamp-1">{stock.name}</div>
                        </div>
                      </div>
                    </td>

                    {/* Sector */}
                    <td className="py-4 px-3">
                      <div className="flex flex-col gap-0.5">
                        <span className="text-xs font-semibold text-slate-200">
                          {stock.sector}
                        </span>
                        <span className="text-[10px] text-amber-300">
                          {stock.marketCapCategory}
                        </span>
                      </div>
                    </td>

                    {/* CMP */}
                    <td className="py-4 px-3">
                      <div className="font-extrabold text-white font-mono-numeric">
                        {formatStockPrice(stock.cmp)}
                      </div>
                      <div className={`text-[11px] font-mono-numeric ${stock.changeRs >= 0 ? 'text-emerald-400' : 'text-rose-400'}`}>
                        {stock.changeRs >= 0 ? '+' : ''}{stock.changePct.toFixed(2)}%
                      </div>
                    </td>

                    {/* Market Cap */}
                    <td className="py-4 px-3">
                      <div className="font-bold text-slate-200 font-mono-numeric">
                        {formatINR(stock.marketCapCr, true)}
                      </div>
                    </td>

                    {/* P/E Ratio */}
                    <td className="py-4 px-3">
                      <div className="font-bold text-amber-400 font-mono-numeric">
                        {stock.peRatio.toFixed(1)}x
                      </div>
                      <div className="text-[10px] text-slate-400">
                        Ind: {stock.industryPe}x
                      </div>
                    </td>

                    {/* ROCE / ROE */}
                    <td className="py-4 px-3">
                      <div className="font-bold text-emerald-400 font-mono-numeric">
                        {stock.roce}%
                      </div>
                      <div className="text-[10px] text-slate-400">
                        ROE: {stock.roe}%
                      </div>
                    </td>

                    {/* Quarterly PAT */}
                    <td className="py-4 px-3">
                      <div className="font-extrabold text-white font-mono-numeric">
                        {formatINR(stock.quarterlyPatCr, true)}
                      </div>
                      <div className="text-[10px] text-slate-400">
                        Rev: {formatINR(stock.quarterlyRevenueCr, true)}
                      </div>
                    </td>

                    {/* YoY PAT Growth */}
                    <td className="py-4 px-3">
                      <span className="font-bold text-emerald-400 font-mono-numeric">
                        +{stock.yoyPatGrowthPct}%
                      </span>
                    </td>

                    {/* Health Status */}
                    <td className="py-4 px-4 text-right">
                      <span className={`inline-flex items-center gap-1.5 text-xs font-semibold px-2.5 py-0.5 rounded-full border ${health.color}`}>
                        <span className={`w-1.5 h-1.5 rounded-full ${health.dot}`} />
                        {health.label}
                      </span>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>

    </div>
  );
};
