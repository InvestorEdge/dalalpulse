import React, { useState } from 'react';
import { 
  Landmark, 
  TrendingUp, 
  TrendingDown, 
  ArrowUpRight, 
  ArrowDownRight, 
  RefreshCw, 
  PlusCircle, 
  Edit3, 
  Trash2, 
  Search, 
  Info, 
  Calendar, 
  Layers, 
  ShieldCheck, 
  ArrowLeftRight 
} from 'lucide-react';
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  Tooltip, 
  ResponsiveContainer, 
  ReferenceLine, 
  CartesianGrid, 
  Legend 
} from 'recharts';
import { useInvestor } from '../context/InvestorContext';
import { InstitutionalFlowDay } from '../types/investor';
import { formatINR } from '../utils/formatters';

export const FiiDiiActivityBoard: React.FC = () => {
  const { 
    fiiDiiFlows, 
    setIsFiiDiiModalOpen, 
    setEditingFiiDiiRecord, 
    deleteFiiDiiRecord, 
    fetchLiveFiiDii, 
    isSyncingFiiDii, 
    isOwnerAuthenticated, 
    viewRole 
  } = useInvestor();

  const [searchDate, setSearchDate] = useState('');
  const [filterSegment, setFilterSegment] = useState<'All' | 'Cash Market' | 'F&O Segment'>('All');

  const isOwnerDesk = isOwnerAuthenticated && viewRole === 'management_ir';

  // Latest trading session (first entry)
  const latest = fiiDiiFlows[0] || {
    id: 'empty',
    date: '2026-10-14',
    formattedDate: '14 Oct 2026',
    fiiGrossBuyCr: 12450,
    fiiGrossSellCr: 14293,
    fiiNetCr: -1842.6,
    diiGrossBuyCr: 15320,
    diiGrossSellCr: 12909,
    diiNetCr: 2410.8,
    totalNetCr: 568.2,
    category: 'Cash Market',
    marketImpact: 'Strong DII Absorption',
    notes: 'Domestic mutual funds absorbed foreign portfolio selling with healthy net investment.'
  };

  // Month-to-date calculation (all records belonging to current month)
  const currentMonth = latest.date.slice(0, 7); // e.g. "2026-10"
  const mtdRecords = fiiDiiFlows.filter(r => r.date.startsWith(currentMonth));
  const mtdFiiNetCr = mtdRecords.reduce((acc, r) => acc + r.fiiNetCr, 0);
  const mtdDiiNetCr = mtdRecords.reduce((acc, r) => acc + r.diiNetCr, 0);
  const mtdTotalNetCr = mtdFiiNetCr + mtdDiiNetCr;

  // Chart data: chronological order (oldest to newest for visual flow)
  const chartData = [...fiiDiiFlows]
    .slice(0, 10)
    .reverse()
    .map(item => ({
      date: item.formattedDate || item.date.slice(5),
      'FII Net': item.fiiNetCr,
      'DII Net': item.diiNetCr,
      'Total Net': item.totalNetCr
    }));

  // Filtered table rows
  const filteredRows = fiiDiiFlows.filter(row => {
    if (filterSegment !== 'All' && row.category !== filterSegment) return false;
    if (searchDate) {
      const q = searchDate.toLowerCase();
      const matchDate = row.date.toLowerCase().includes(q) || (row.formattedDate && row.formattedDate.toLowerCase().includes(q));
      const matchNotes = row.notes && row.notes.toLowerCase().includes(q);
      const matchImpact = row.marketImpact && row.marketImpact.toLowerCase().includes(q);
      return matchDate || matchNotes || matchImpact;
    }
    return true;
  });

  const getImpactBadge = (impact?: InstitutionalFlowDay['marketImpact']) => {
    switch (impact) {
      case 'Both Buying (Bullish)':
        return 'bg-emerald-500/15 text-emerald-300 border-emerald-500/30';
      case 'Strong DII Absorption':
        return 'bg-blue-500/15 text-blue-300 border-blue-500/30';
      case 'FII Heavy Selling':
        return 'bg-rose-500/15 text-rose-300 border-rose-500/30';
      case 'Both Selling (Bearish)':
        return 'bg-red-600/20 text-red-300 border-red-500/40';
      default:
        return 'bg-slate-800 text-slate-300 border-slate-700';
    }
  };

  return (
    <div className="space-y-8 animate-in fade-in duration-200">
      
      {/* 1. Header Banner */}
      <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-slate-800 relative overflow-hidden flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
        
        <div className="max-w-2xl relative z-10">
          <div className="flex items-center gap-2 text-amber-400 text-xs font-bold uppercase tracking-wider mb-2">
            <Landmark className="w-4 h-4" />
            <span>Institutional Capital Flow Intelligence</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            FII & DII Trading Activity (NSE & BSE)
          </h1>
          <p className="text-sm text-slate-300 mt-2 leading-relaxed">
            Daily gross purchases, sales, and net inflows/outflows by Foreign Institutional Investors (FII / FPI) and Domestic Institutional Investors (Mutual Funds, LIC, Insurance) in Indian equity markets.
          </p>
        </div>

        {/* Action Controls */}
        <div className="flex items-center gap-3 relative z-10 self-start md:self-auto flex-wrap">
          <button
            onClick={fetchLiveFiiDii}
            disabled={isSyncingFiiDii}
            title="Fetch latest provisional data from exchange feed"
            className="flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-semibold bg-slate-900 border border-slate-800 hover:border-slate-700 text-slate-200 hover:text-white transition-all disabled:opacity-50"
          >
            <RefreshCw className={`w-3.5 h-3.5 text-amber-400 ${isSyncingFiiDii ? 'animate-spin' : ''}`} />
            <span>{isSyncingFiiDii ? 'Syncing...' : 'Fetch Exchange Feed'}</span>
          </button>

          {/* Post/Edit button ONLY visible to Owner on IR Desk */}
          {isOwnerDesk && (
            <button
              onClick={() => {
                setEditingFiiDiiRecord(null);
                setIsFiiDiiModalOpen(true);
              }}
              className="flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold bg-amber-500 hover:bg-amber-400 text-slate-950 shadow-md shadow-amber-500/20 transition-all hover:scale-[1.02]"
            >
              <PlusCircle className="w-4 h-4" />
              <span>+ Post Daily FII/DII Data</span>
            </button>
          )}
        </div>
      </div>

      {/* 2. Top Summary Metrics Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        
        {/* Today's FII Net Flow */}
        <div className="glass-panel p-5 rounded-2xl relative overflow-hidden border border-slate-800">
          <div className="flex items-center justify-between text-slate-400 text-xs font-medium mb-3">
            <span className="flex items-center gap-1.5 font-bold text-cyan-400 uppercase tracking-wider text-[11px]">
              <span>FII / FPI Net Flow</span>
            </span>
            <span className={`px-2 py-0.5 rounded text-[10px] font-bold uppercase ${latest.fiiNetCr >= 0 ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/30' : 'bg-rose-500/10 text-rose-400 border border-rose-500/30'}`}>
              {latest.fiiNetCr >= 0 ? 'Net Buyer' : 'Net Seller'}
            </span>
          </div>

          <div className="flex items-baseline gap-2">
            <span className={`text-2xl lg:text-3xl font-extrabold font-mono-numeric tracking-tight ${latest.fiiNetCr >= 0 ? 'text-emerald-400' : 'text-rose-400'}`}>
              {latest.fiiNetCr >= 0 ? '+' : ''}₹{latest.fiiNetCr.toLocaleString('en-IN')} Cr
            </span>
          </div>

          <div className="mt-3 pt-2 border-t border-slate-800/80 flex items-center justify-between text-[11px] text-slate-400">
            <span>Buy: ₹{latest.fiiGrossBuyCr.toLocaleString('en-IN')} Cr</span>
            <span>Sell: ₹{latest.fiiGrossSellCr.toLocaleString('en-IN')} Cr</span>
          </div>
        </div>

        {/* Today's DII Net Flow */}
        <div className="glass-panel p-5 rounded-2xl relative overflow-hidden border border-slate-800">
          <div className="flex items-center justify-between text-slate-400 text-xs font-medium mb-3">
            <span className="flex items-center gap-1.5 font-bold text-emerald-400 uppercase tracking-wider text-[11px]">
              <span>DII Net Flow (Mutual Funds)</span>
            </span>
            <span className={`px-2 py-0.5 rounded text-[10px] font-bold uppercase ${latest.diiNetCr >= 0 ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/30' : 'bg-rose-500/10 text-rose-400 border border-rose-500/30'}`}>
              {latest.diiNetCr >= 0 ? 'Net Buyer' : 'Net Seller'}
            </span>
          </div>

          <div className="flex items-baseline gap-2">
            <span className={`text-2xl lg:text-3xl font-extrabold font-mono-numeric tracking-tight ${latest.diiNetCr >= 0 ? 'text-emerald-400' : 'text-rose-400'}`}>
              {latest.diiNetCr >= 0 ? '+' : ''}₹{latest.diiNetCr.toLocaleString('en-IN')} Cr
            </span>
          </div>

          <div className="mt-3 pt-2 border-t border-slate-800/80 flex items-center justify-between text-[11px] text-slate-400">
            <span>Buy: ₹{latest.diiGrossBuyCr.toLocaleString('en-IN')} Cr</span>
            <span>Sell: ₹{latest.diiGrossSellCr.toLocaleString('en-IN')} Cr</span>
          </div>
        </div>

        {/* Combined Institutional Balance */}
        <div className="glass-panel p-5 rounded-2xl relative overflow-hidden border border-slate-800">
          <div className="flex items-center justify-between text-slate-400 text-xs font-medium mb-3">
            <span className="font-bold text-amber-400 uppercase tracking-wider text-[11px]">
              Session Net Balance
            </span>
            <span className="text-[10px] text-slate-400 font-mono">{latest.formattedDate || latest.date}</span>
          </div>

          <div className="flex items-baseline gap-2">
            <span className={`text-2xl lg:text-3xl font-extrabold font-mono-numeric tracking-tight ${latest.totalNetCr >= 0 ? 'text-emerald-400' : 'text-rose-400'}`}>
              {latest.totalNetCr >= 0 ? '+' : ''}₹{latest.totalNetCr.toLocaleString('en-IN')} Cr
            </span>
          </div>

          <div className="mt-3 pt-2 border-t border-slate-800/80 text-[11px] text-slate-400 truncate">
            {latest.marketImpact || 'Strong DII Absorption'}
          </div>
        </div>

        {/* MTD Cumulative Flow */}
        <div className="glass-panel p-5 rounded-2xl relative overflow-hidden border border-slate-800">
          <div className="flex items-center justify-between text-slate-400 text-xs font-medium mb-3">
            <span className="font-bold text-purple-400 uppercase tracking-wider text-[11px]">
              Month-to-Date (MTD) Net
            </span>
            <span className="text-[10px] text-slate-400">{mtdRecords.length} sessions</span>
          </div>

          <div className="flex items-baseline gap-2">
            <span className={`text-2xl lg:text-3xl font-extrabold font-mono-numeric tracking-tight ${mtdTotalNetCr >= 0 ? 'text-emerald-400' : 'text-rose-400'}`}>
              {mtdTotalNetCr >= 0 ? '+' : ''}₹{mtdTotalNetCr.toLocaleString('en-IN')} Cr
            </span>
          </div>

          <div className="mt-3 pt-2 border-t border-slate-800/80 flex items-center justify-between text-[11px] text-slate-400">
            <span>FII: <strong className={mtdFiiNetCr >= 0 ? 'text-emerald-400' : 'text-rose-400'}>{mtdFiiNetCr >= 0 ? '+' : ''}₹{Math.round(mtdFiiNetCr)} Cr</strong></span>
            <span>DII: <strong className={mtdDiiNetCr >= 0 ? 'text-emerald-400' : 'text-rose-400'}>{mtdDiiNetCr >= 0 ? '+' : ''}₹{Math.round(mtdDiiNetCr)} Cr</strong></span>
          </div>
        </div>

      </div>

      {/* 3. Trend Visual Chart */}
      <div className="glass-panel p-6 rounded-3xl border border-slate-800">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-6">
          <div>
            <h2 className="text-lg font-bold text-white flex items-center gap-2">
              <TrendingUp className="w-4 h-4 text-amber-400" />
              <span>FII vs DII Net Trading Flow Trajectory (Last 10 Sessions)</span>
            </h2>
            <p className="text-xs text-slate-400">Visual comparison of foreign institutional capital vs domestic mutual fund inflows in ₹ Crores</p>
          </div>
          <div className="flex items-center gap-4 text-xs font-medium">
            <div className="flex items-center gap-1.5">
              <span className="w-3 h-3 rounded bg-cyan-400 inline-block" />
              <span className="text-slate-300">FII Net (₹ Cr)</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="w-3 h-3 rounded bg-emerald-400 inline-block" />
              <span className="text-slate-300">DII Net (₹ Cr)</span>
            </div>
          </div>
        </div>

        <div className="h-72 w-full">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={chartData} margin={{ top: 10, right: 10, left: 10, bottom: 0 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" vertical={false} />
              <XAxis dataKey="date" stroke="#64748b" fontSize={11} tickLine={false} />
              <YAxis 
                stroke="#64748b" 
                fontSize={11} 
                tickLine={false} 
                tickFormatter={(val) => `₹${val}`}
              />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: '#090d16', 
                  borderColor: '#334155', 
                  borderRadius: '12px',
                  fontSize: '12px',
                  color: '#f8fafc'
                }}
                formatter={(value: any) => [`₹${Number(value).toLocaleString('en-IN')} Cr`, '']}
              />
              <ReferenceLine y={0} stroke="#475569" strokeDasharray="2 2" />
              <Bar dataKey="FII Net" fill="#22d3ee" radius={[4, 4, 0, 0]} maxBarSize={36} />
              <Bar dataKey="DII Net" fill="#10b981" radius={[4, 4, 0, 0]} maxBarSize={36} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* 4. Historical Ledger Table */}
      <div className="space-y-4">
        
        {/* Table Filters & Search */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div>
            <h2 className="text-lg font-bold text-white flex items-center gap-2">
              <Calendar className="w-4 h-4 text-emerald-400" />
              <span>Historical Daily Cash Turnover Ledger</span>
            </h2>
            <p className="text-xs text-slate-400">Audited daily provisional figures reported by Indian stock exchanges (NSE & BSE)</p>
          </div>

          <div className="flex items-center gap-3">
            <div className="relative">
              <Search className="w-3.5 h-3.5 text-slate-500 absolute left-3 top-2.5" />
              <input
                type="text"
                value={searchDate}
                onChange={(e) => setSearchDate(e.target.value)}
                placeholder="Search date or notes..."
                className="bg-slate-900 border border-slate-800 rounded-xl pl-8 pr-3 py-1.5 text-xs text-white placeholder:text-slate-500 focus:outline-none focus:border-amber-500 w-48 sm:w-60"
              />
            </div>
          </div>
        </div>

        {/* Ledger Table */}
        <div className="glass-panel rounded-2xl overflow-hidden border border-slate-800">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead className="bg-slate-950/80 text-slate-400 border-b border-slate-800 uppercase tracking-wider font-semibold text-[10px]">
                <tr>
                  <th className="py-3 px-4">Date</th>
                  <th className="py-3 px-4">Segment</th>
                  <th className="py-3 px-4 text-right">FII Gross Buy</th>
                  <th className="py-3 px-4 text-right">FII Gross Sell</th>
                  <th className="py-3 px-4 text-right text-cyan-400">FII Net Flow</th>
                  <th className="py-3 px-4 text-right">DII Gross Buy</th>
                  <th className="py-3 px-4 text-right">DII Gross Sell</th>
                  <th className="py-3 px-4 text-right text-emerald-400">DII Net Flow</th>
                  <th className="py-3 px-4 text-right">Combined Total</th>
                  <th className="py-3 px-4">Market Impact & Commentary</th>
                  {isOwnerDesk && <th className="py-3 px-4 text-center">Admin</th>}
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/60 font-mono-numeric">
                {filteredRows.map((row) => {
                  const isFiiPositive = row.fiiNetCr >= 0;
                  const isDiiPositive = row.diiNetCr >= 0;
                  const isTotalPositive = row.totalNetCr >= 0;

                  return (
                    <tr key={row.id} className="hover:bg-slate-900/40 transition-colors">
                      <td className="py-3.5 px-4 font-bold text-white whitespace-nowrap">
                        {row.formattedDate || row.date}
                      </td>
                      <td className="py-3.5 px-4 text-slate-400 font-sans whitespace-nowrap">
                        <span className="px-2 py-0.5 rounded-full bg-slate-900 border border-slate-800 text-[10px] text-slate-300">
                          {row.category || 'Cash Market'}
                        </span>
                      </td>
                      <td className="py-3.5 px-4 text-right text-slate-300 whitespace-nowrap">
                        ₹{row.fiiGrossBuyCr.toLocaleString('en-IN')} Cr
                      </td>
                      <td className="py-3.5 px-4 text-right text-slate-400 whitespace-nowrap">
                        ₹{row.fiiGrossSellCr.toLocaleString('en-IN')} Cr
                      </td>
                      <td className="py-3.5 px-4 text-right whitespace-nowrap font-bold">
                        <span className={`px-2 py-0.5 rounded text-[11px] ${isFiiPositive ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20' : 'bg-rose-500/10 text-rose-400 border border-rose-500/20'}`}>
                          {isFiiPositive ? '+' : ''}₹{row.fiiNetCr.toLocaleString('en-IN')} Cr
                        </span>
                      </td>
                      <td className="py-3.5 px-4 text-right text-slate-300 whitespace-nowrap">
                        ₹{row.diiGrossBuyCr.toLocaleString('en-IN')} Cr
                      </td>
                      <td className="py-3.5 px-4 text-right text-slate-400 whitespace-nowrap">
                        ₹{row.diiGrossSellCr.toLocaleString('en-IN')} Cr
                      </td>
                      <td className="py-3.5 px-4 text-right whitespace-nowrap font-bold">
                        <span className={`px-2 py-0.5 rounded text-[11px] ${isDiiPositive ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20' : 'bg-rose-500/10 text-rose-400 border border-rose-500/20'}`}>
                          {isDiiPositive ? '+' : ''}₹{row.diiNetCr.toLocaleString('en-IN')} Cr
                        </span>
                      </td>
                      <td className={`py-3.5 px-4 text-right whitespace-nowrap font-extrabold ${isTotalPositive ? 'text-emerald-400' : 'text-rose-400'}`}>
                        {isTotalPositive ? '+' : ''}₹{row.totalNetCr.toLocaleString('en-IN')} Cr
                      </td>
                      <td className="py-3.5 px-4 text-slate-300 font-sans max-w-xs">
                        <div className="flex items-center gap-1.5 mb-0.5">
                          <span className={`text-[10px] font-semibold px-1.5 py-0.2 rounded border ${getImpactBadge(row.marketImpact)}`}>
                            {row.marketImpact || 'Institutional Activity'}
                          </span>
                        </div>
                        <p className="text-[11px] text-slate-400 line-clamp-1">{row.notes || '-'}</p>
                      </td>
                      {isOwnerDesk && (
                        <td className="py-3.5 px-4 text-center whitespace-nowrap">
                          <div className="flex items-center justify-center gap-1">
                            <button
                              onClick={() => {
                                setEditingFiiDiiRecord(row);
                                setIsFiiDiiModalOpen(true);
                              }}
                              title="Edit this session"
                              className="p-1 hover:text-amber-400 text-slate-500 transition-colors"
                            >
                              <Edit3 className="w-3.5 h-3.5" />
                            </button>
                            <button
                              onClick={() => {
                                if (window.confirm(`Delete record for ${row.date}?`)) {
                                  deleteFiiDiiRecord(row.id);
                                }
                              }}
                              title="Delete record"
                              className="p-1 hover:text-rose-400 text-slate-500 transition-colors"
                            >
                              <Trash2 className="w-3.5 h-3.5" />
                            </button>
                          </div>
                        </td>
                      )}
                    </tr>
                  );
                })}

                {filteredRows.length === 0 && (
                  <tr>
                    <td colSpan={isOwnerDesk ? 11 : 10} className="py-12 text-center text-slate-500 font-sans">
                      No institutional records found matching your filter.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* 5. Institutional Knowledge Callout */}
      <div className="p-5 rounded-2xl bg-slate-900/40 border border-slate-800 text-xs text-slate-400 space-y-2">
        <div className="flex items-center gap-2 text-slate-200 font-bold">
          <Info className="w-4 h-4 text-amber-400 shrink-0" />
          <span>Understanding FII & DII Flows in Indian Capital Markets</span>
        </div>
        <p className="leading-relaxed">
          <strong>FII (Foreign Institutional Investors) / FPI:</strong> Represents international hedge funds, foreign sovereign wealth funds, and global asset managers. Foreign flows reflect global macro liquidity, US Treasury yield movements, and global emerging market allocations.
        </p>
        <p className="leading-relaxed">
          <strong>DII (Domestic Institutional Investors):</strong> Consists of Indian mutual funds (SBI MF, HDFC MF, ICICI Prudential), domestic life insurance companies (LIC), and pension funds. In recent years, robust Indian retail Systematic Investment Plans (SIPs) exceeding ₹20,000+ Cr monthly have transformed DIIs into strong counter-cyclical pillars that absorb volatile foreign institutional selloffs.
        </p>
      </div>

    </div>
  );
};

