import React, { useState } from 'react';
import { 
  ResponsiveContainer, 
  AreaChart, 
  Area, 
  XAxis, 
  YAxis, 
  Tooltip, 
  CartesianGrid, 
  Legend,
  BarChart,
  Bar
} from 'recharts';
import { QuarterlyMetricPoint } from '../types/investor';
import { formatINR } from '../utils/formatters';

interface MetricsChartProps {
  data: QuarterlyMetricPoint[];
  stockSymbol: string;
}

export const MetricsChart: React.FC<MetricsChartProps> = ({ data, stockSymbol }) => {
  const [chartView, setChartView] = useState<'revenue_ebitda' | 'pat_margins'>('revenue_ebitda');

  const customTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="glass-dropdown p-3 rounded-xl border border-slate-700 text-xs">
          <p className="font-bold text-slate-200 mb-1">{label} Financial Performance</p>
          {payload.map((entry: any, index: number) => (
            <p key={`item-${index}`} className="flex items-center gap-2" style={{ color: entry.color }}>
              <span className="font-medium">{entry.name}:</span>
              <span className="font-mono-numeric font-bold">
                {entry.dataKey === 'ebitdaMargin' ? `${entry.value}%` : formatINR(entry.value, true)}
              </span>
            </p>
          ))}
        </div>
      );
    }
    return null;
  };

  return (
    <div className="glass-panel p-5 rounded-2xl border border-slate-800">
      
      {/* Header & Controls */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6">
        <div>
          <h4 className="text-sm font-bold text-white tracking-tight">
            Quarterly Trajectory & Margin Velocity ({stockSymbol})
          </h4>
          <p className="text-xs text-slate-400">Quarter-on-Quarter audited financial progression (in ₹ Crores)</p>
        </div>

        {/* View Toggle */}
        <div className="flex items-center bg-slate-900 border border-slate-800 p-0.5 rounded-lg self-start sm:self-auto">
          <button
            onClick={() => setChartView('revenue_ebitda')}
            className={`px-3 py-1 rounded-md text-xs font-semibold transition-all ${
              chartView === 'revenue_ebitda'
                ? 'bg-amber-500 text-slate-950 font-bold shadow-sm'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            Topline & EBITDA
          </button>
          <button
            onClick={() => setChartView('pat_margins')}
            className={`px-3 py-1 rounded-md text-xs font-semibold transition-all ${
              chartView === 'pat_margins'
                ? 'bg-emerald-600 text-white shadow-sm'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            PAT (Net Profit)
          </button>
        </div>
      </div>

      {/* Chart Canvas */}
      <div className="h-64 w-full">
        <ResponsiveContainer width="100%" height="100%">
          {chartView === 'revenue_ebitda' ? (
            <AreaChart data={data} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
              <defs>
                <linearGradient id="colorRev" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#f59e0b" stopOpacity={0.4} />
                  <stop offset="95%" stopColor="#f59e0b" stopOpacity={0.0} />
                </linearGradient>
                <linearGradient id="colorEbitda" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#10b981" stopOpacity={0.3} />
                  <stop offset="95%" stopColor="#10b981" stopOpacity={0.0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" vertical={false} />
              <XAxis dataKey="quarter" stroke="#64748b" fontSize={11} tickLine={false} />
              <YAxis 
                stroke="#64748b" 
                fontSize={11} 
                tickLine={false}
                tickFormatter={(val) => `₹${val >= 1000 ? `${(val/1000).toFixed(0)}k` : val}Cr`}
              />
              <Tooltip content={customTooltip} />
              <Legend 
                wrapperStyle={{ fontSize: '11px', paddingTop: '10px' }} 
                iconType="circle"
              />
              <Area 
                type="monotone" 
                dataKey="revenueCr" 
                name="Revenue from Operations" 
                stroke="#f59e0b" 
                strokeWidth={2.5}
                fillOpacity={1} 
                fill="url(#colorRev)" 
              />
              <Area 
                type="monotone" 
                dataKey="ebitdaCr" 
                name="Operating EBITDA" 
                stroke="#10b981" 
                strokeWidth={2}
                fillOpacity={1} 
                fill="url(#colorEbitda)" 
              />
            </AreaChart>
          ) : (
            <BarChart data={data} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" vertical={false} />
              <XAxis dataKey="quarter" stroke="#64748b" fontSize={11} tickLine={false} />
              <YAxis 
                stroke="#64748b" 
                fontSize={11} 
                tickLine={false}
                tickFormatter={(val) => `₹${val}Cr`}
              />
              <Tooltip content={customTooltip} />
              <Legend wrapperStyle={{ fontSize: '11px', paddingTop: '10px' }} />
              <Bar 
                dataKey="patCr" 
                name="Profit After Tax (PAT)" 
                fill="#38bdf8" 
                radius={[4, 4, 0, 0]}
              />
            </BarChart>
          )}
        </ResponsiveContainer>
      </div>

      <div className="mt-3 flex items-center justify-between text-[11px] text-slate-500 border-t border-slate-800/80 pt-2">
        <span>Source: Stock Exchanges (NSE/BSE) Audited Filings</span>
        <span>Figures in ₹ Crores (INR)</span>
      </div>

    </div>
  );
};
