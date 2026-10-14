import React, { useState, useEffect } from 'react';
import { 
  X, 
  Landmark, 
  TrendingUp, 
  TrendingDown, 
  Sparkles, 
  Check, 
  Calendar, 
  Layers, 
  ShieldCheck, 
  RefreshCw 
} from 'lucide-react';
import { useInvestor } from '../context/InvestorContext';
import { InstitutionalFlowDay } from '../types/investor';
import { fetchLatestFiiDiiExchangeData, formatFiiDiiDate } from '../services/fiiDiiService';

export const FiiDiiAdminModal: React.FC = () => {
  const { 
    isFiiDiiModalOpen, 
    setIsFiiDiiModalOpen, 
    editingFiiDiiRecord, 
    setEditingFiiDiiRecord, 
    addOrUpdateFiiDiiRecord,
    isOwnerAuthenticated 
  } = useInvestor();

  const todayStr = new Date().toISOString().split('T')[0];

  const [date, setDate] = useState(todayStr);
  const [category, setCategory] = useState<'Cash Market' | 'F&O Segment' | 'Debt Market'>('Cash Market');
  const [fiiBuy, setFiiBuy] = useState<number>(12500);
  const [fiiSell, setFiiSell] = useState<number>(14200);
  const [diiBuy, setDiiBuy] = useState<number>(15200);
  const [diiSell, setDiiSell] = useState<number>(12800);
  const [marketImpact, setMarketImpact] = useState<InstitutionalFlowDay['marketImpact']>('Strong DII Absorption');
  const [notes, setNotes] = useState('');
  const [isFetchingEstimates, setIsFetchingEstimates] = useState(false);

  useEffect(() => {
    if (editingFiiDiiRecord) {
      setDate(editingFiiDiiRecord.date);
      setCategory(editingFiiDiiRecord.category || 'Cash Market');
      setFiiBuy(editingFiiDiiRecord.fiiGrossBuyCr);
      setFiiSell(editingFiiDiiRecord.fiiGrossSellCr);
      setDiiBuy(editingFiiDiiRecord.diiGrossBuyCr);
      setDiiSell(editingFiiDiiRecord.diiGrossSellCr);
      setMarketImpact(editingFiiDiiRecord.marketImpact || 'Strong DII Absorption');
      setNotes(editingFiiDiiRecord.notes || '');
    } else {
      setDate(todayStr);
      setCategory('Cash Market');
      setFiiBuy(12500);
      setFiiSell(14200);
      setDiiBuy(15200);
      setDiiSell(12800);
      setMarketImpact('Strong DII Absorption');
      setNotes('Domestic institutional mutual funds absorbed foreign portfolio selling with healthy net investment.');
    }
  }, [editingFiiDiiRecord, isFiiDiiModalOpen, todayStr]);

  if (!isFiiDiiModalOpen || !isOwnerAuthenticated) return null;

  const fiiNet = Number((fiiBuy - fiiSell).toFixed(2));
  const diiNet = Number((diiBuy - diiSell).toFixed(2));
  const totalNet = Number((fiiNet + diiNet).toFixed(2));

  const handleAutoFillFromExchange = async () => {
    setIsFetchingEstimates(true);
    try {
      const data = await fetchLatestFiiDiiExchangeData();
      if (data) {
        setDate(data.date);
        setFiiBuy(data.fiiGrossBuyCr);
        setFiiSell(data.fiiGrossSellCr);
        setDiiBuy(data.diiGrossBuyCr);
        setDiiSell(data.diiGrossSellCr);
        if (data.marketImpact) setMarketImpact(data.marketImpact);
        if (data.notes) setNotes(data.notes);
      }
    } finally {
      setIsFetchingEstimates(false);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    addOrUpdateFiiDiiRecord({
      id: editingFiiDiiRecord ? editingFiiDiiRecord.id : undefined,
      date,
      formattedDate: formatFiiDiiDate(date),
      fiiGrossBuyCr: Number(fiiBuy),
      fiiGrossSellCr: Number(fiiSell),
      fiiNetCr: fiiNet,
      diiGrossBuyCr: Number(diiBuy),
      diiGrossSellCr: Number(diiSell),
      diiNetCr: diiNet,
      totalNetCr: totalNet,
      category,
      marketImpact,
      notes: notes.trim()
    });

    setIsFiiDiiModalOpen(false);
    setEditingFiiDiiRecord(null);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/85 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-200">
      
      <div 
        className="glass-dropdown w-full max-w-2xl max-h-[92vh] overflow-y-auto rounded-3xl border border-slate-700/80 p-6 sm:p-8 relative no-scrollbar shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={() => {
            setIsFiiDiiModalOpen(false);
            setEditingFiiDiiRecord(null);
          }}
          className="absolute top-6 right-6 p-2 rounded-xl text-slate-400 hover:text-white bg-slate-900 border border-slate-800 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="flex items-center gap-3 mb-6">
          <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-amber-500/20 to-orange-500/20 border border-amber-500/30 flex items-center justify-center text-amber-400 shrink-0">
            <Landmark className="w-6 h-6" />
          </div>
          <div>
            <div className="flex items-center gap-1.5 text-amber-400 text-xs font-bold uppercase tracking-wider">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Admin Filing Desk</span>
            </div>
            <h2 className="text-xl font-extrabold text-white tracking-tight">
              {editingFiiDiiRecord ? 'Edit Daily FII & DII Data' : 'Post Daily FII & DII Institutional Flows'}
            </h2>
          </div>
        </div>

        {/* Fast Action: Auto Fetch */}
        <div className="mb-5 p-3 rounded-2xl bg-slate-900/80 border border-slate-800 flex items-center justify-between gap-3">
          <div className="text-xs text-slate-300">
            <span className="font-bold text-white block">Official Exchange Provisional Feed</span>
            <span className="text-[11px] text-slate-400">Pre-fill today's cash turnover numbers from market data.</span>
          </div>
          <button
            type="button"
            onClick={handleAutoFillFromExchange}
            disabled={isFetchingEstimates}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-amber-400 hover:text-amber-300 text-xs font-semibold border border-slate-700 transition-colors disabled:opacity-50 shrink-0"
          >
            <RefreshCw className={`w-3.5 h-3.5 ${isFetchingEstimates ? 'animate-spin' : ''}`} />
            <span>{isFetchingEstimates ? 'Fetching...' : 'Auto-Fill Today'}</span>
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          
          {/* Date & Category */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold text-slate-300 mb-1 flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5 text-amber-400" />
                <span>Trading Session Date</span>
              </label>
              <input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                required
                className="w-full bg-slate-950 border border-slate-700/80 rounded-xl px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-amber-500 font-mono"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-300 mb-1 flex items-center gap-1.5">
                <Layers className="w-3.5 h-3.5 text-amber-400" />
                <span>Market Segment</span>
              </label>
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value as any)}
                className="w-full bg-slate-950 border border-slate-700/80 rounded-xl px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-amber-500"
              >
                <option value="Cash Market">Cash Market (NSE & BSE Equities)</option>
                <option value="F&O Segment">F&O Segment (Futures & Options)</option>
                <option value="Debt Market">Debt / Government Securities</option>
              </select>
            </div>
          </div>

          {/* FII Section */}
          <div className="p-4 rounded-2xl bg-slate-900/60 border border-slate-800">
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-bold text-cyan-400 uppercase tracking-wider flex items-center gap-1.5">
                <span>FII / FPI (Foreign Institutional Investors)</span>
              </span>
              <span className={`text-xs font-bold font-mono px-2 py-0.5 rounded ${fiiNet >= 0 ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/30' : 'bg-rose-500/10 text-rose-400 border border-rose-500/30'}`}>
                Net: {fiiNet >= 0 ? '+' : ''}₹{fiiNet.toLocaleString('en-IN')} Cr
              </span>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-[11px] text-slate-400 mb-1 font-medium">Gross Buy (₹ Cr)</label>
                <input
                  type="number"
                  step="0.01"
                  value={fiiBuy}
                  onChange={(e) => setFiiBuy(Number(e.target.value))}
                  required
                  className="w-full bg-slate-950 border border-slate-700 rounded-xl px-3 py-2 text-xs text-white font-mono focus:outline-none focus:border-cyan-500"
                />
              </div>

              <div>
                <label className="block text-[11px] text-slate-400 mb-1 font-medium">Gross Sell (₹ Cr)</label>
                <input
                  type="number"
                  step="0.01"
                  value={fiiSell}
                  onChange={(e) => setFiiSell(Number(e.target.value))}
                  required
                  className="w-full bg-slate-950 border border-slate-700 rounded-xl px-3 py-2 text-xs text-white font-mono focus:outline-none focus:border-cyan-500"
                />
              </div>
            </div>
          </div>

          {/* DII Section */}
          <div className="p-4 rounded-2xl bg-slate-900/60 border border-slate-800">
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider flex items-center gap-1.5">
                <span>DII (Domestic Mutual Funds & Insurance)</span>
              </span>
              <span className={`text-xs font-bold font-mono px-2 py-0.5 rounded ${diiNet >= 0 ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/30' : 'bg-rose-500/10 text-rose-400 border border-rose-500/30'}`}>
                Net: {diiNet >= 0 ? '+' : ''}₹{diiNet.toLocaleString('en-IN')} Cr
              </span>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-[11px] text-slate-400 mb-1 font-medium">Gross Buy (₹ Cr)</label>
                <input
                  type="number"
                  step="0.01"
                  value={diiBuy}
                  onChange={(e) => setDiiBuy(Number(e.target.value))}
                  required
                  className="w-full bg-slate-950 border border-slate-700 rounded-xl px-3 py-2 text-xs text-white font-mono focus:outline-none focus:border-emerald-500"
                />
              </div>

              <div>
                <label className="block text-[11px] text-slate-400 mb-1 font-medium">Gross Sell (₹ Cr)</label>
                <input
                  type="number"
                  step="0.01"
                  value={diiSell}
                  onChange={(e) => setDiiSell(Number(e.target.value))}
                  required
                  className="w-full bg-slate-950 border border-slate-700 rounded-xl px-3 py-2 text-xs text-white font-mono focus:outline-none focus:border-emerald-500"
                />
              </div>
            </div>
          </div>

          {/* Combined Balance Banner */}
          <div className="p-3.5 rounded-2xl bg-slate-950 border border-slate-800 flex items-center justify-between">
            <div>
              <span className="text-[10px] text-slate-500 uppercase font-bold block">Combined Net Liquidity</span>
              <span className="text-xs text-slate-300">Net institutional market impact</span>
            </div>
            <div className={`text-base font-extrabold font-mono flex items-center gap-1 ${totalNet >= 0 ? 'text-emerald-400' : 'text-rose-400'}`}>
              {totalNet >= 0 ? <TrendingUp className="w-4 h-4" /> : <TrendingDown className="w-4 h-4" />}
              <span>{totalNet >= 0 ? '+' : ''}₹{totalNet.toLocaleString('en-IN')} Cr</span>
            </div>
          </div>

          {/* Market Impact & Notes */}
          <div>
            <label className="block text-xs font-bold text-slate-300 mb-1">
              Market Sentiment / Classification
            </label>
            <select
              value={marketImpact}
              onChange={(e) => setMarketImpact(e.target.value as any)}
              className="w-full bg-slate-950 border border-slate-700/80 rounded-xl px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-amber-500 mb-3"
            >
              <option value="Strong DII Absorption">Strong DII Absorption (Mutual Fund SIP cushion)</option>
              <option value="Both Buying (Bullish)">Both Buying (Bullish institutional momentum)</option>
              <option value="FII Heavy Selling">FII Heavy Selling (Foreign outflow pressure)</option>
              <option value="Both Selling (Bearish)">Both Selling (Bearish risk-off liquidation)</option>
              <option value="Neutral / Mixed">Neutral / Mixed Trading Balance</option>
            </select>

            <label className="block text-xs font-bold text-slate-300 mb-1">
              Market Analyst Commentary & Takeaway
            </label>
            <textarea
              rows={2}
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              placeholder="e.g. Domestic mutual funds heavily absorbed foreign selling with ₹2,410 Cr net infusion..."
              className="w-full bg-slate-950 border border-slate-700/80 rounded-xl p-3 text-xs text-white placeholder:text-slate-600 focus:outline-none focus:border-amber-500"
            />
          </div>

          {/* Action Buttons */}
          <div className="flex items-center justify-end gap-3 pt-3 border-t border-slate-800">
            <button
              type="button"
              onClick={() => {
                setIsFiiDiiModalOpen(false);
                setEditingFiiDiiRecord(null);
              }}
              className="px-4 py-2.5 rounded-xl border border-slate-800 text-xs font-semibold text-slate-400 hover:text-white hover:bg-slate-900 transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-5 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 text-xs font-bold shadow-md shadow-amber-500/20 transition-all flex items-center gap-1.5"
            >
              <Check className="w-4 h-4" />
              <span>{editingFiiDiiRecord ? 'Save Changes' : 'Publish FII/DII Data'}</span>
            </button>
          </div>

        </form>

      </div>

    </div>
  );
};

