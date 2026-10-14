import React, { useState } from 'react';
import { 
  X, 
  Trash2, 
  CheckCircle2, 
  AlertCircle, 
  Mic, 
  Eye, 
  Send,
  Building2,
  TrendingUp,
  Layers
} from 'lucide-react';
import { useInvestor } from '../context/InvestorContext';
import { StockUpdate, UpdateType } from '../types/investor';
import { UpdateCard } from './UpdateCard';

export const NewUpdateModal: React.FC = () => {
  const { 
    isNewUpdateModalOpen, 
    setIsNewUpdateModalOpen, 
    stocks, 
    addStockUpdate,
    selectedStockId,
    isOwnerAuthenticated 
  } = useInvestor();

  const [stockId, setStockId] = useState(selectedStockId || (stocks[0]?.id || ''));
  const [title, setTitle] = useState('');
  const [period, setPeriod] = useState('Q2 FY27');
  const [updateType, setUpdateType] = useState<UpdateType>('quarterly_results');
  const [summary, setSummary] = useState('');

  // Financial KPIs (in ₹ Crores)
  const targetStock = stocks.find(s => s.id === stockId);
  const [revenueCr, setRevenueCr] = useState<number>(targetStock?.quarterlyRevenueCr || 5000);
  const [yoyRevGrowthPct, setYoyRevGrowthPct] = useState<number>(18.5);
  const [ebitdaCr, setEbitdaCr] = useState<number>(targetStock?.quarterlyEbitdaCr || 850);
  const [ebitdaMarginPct, setEbitdaMarginPct] = useState<number>(targetStock?.ebitdaMarginPct || 17.0);
  const [patCr, setPatCr] = useState<number>(targetStock?.quarterlyPatCr || 520);
  const [yoyPatGrowthPct, setYoyPatGrowthPct] = useState<number>(targetStock?.yoyPatGrowthPct || 25.0);
  const [epsRs, setEpsRs] = useState<number>(14.50);

  // Dynamic Bullet lists
  const [highlights, setHighlights] = useState<string[]>([
    'EBITDA margins expanded 180 bps YoY due to favorable product mix.',
    'Domestic retail market share increased to 28%.'
  ]);
  const [newHighlight, setNewHighlight] = useState('');

  const [guidance, setGuidance] = useState<string[]>([
    'FY27 revenue growth expected at 18-20% YoY.',
    'Commercial commissioning of new capacity planned for Q4.'
  ]);
  const [newGuidance, setNewGuidance] = useState('');

  const [orderWins, setOrderWins] = useState<string[]>([
    'Bagged major multi-year supply contract worth ₹1,200 Cr.'
  ]);
  const [newOrderWin, setNewOrderWin] = useState('');

  const [headwinds, setHeadwinds] = useState<string[]>([]);
  const [newHeadwind, setNewHeadwind] = useState('');

  const [isPreview, setIsPreview] = useState(false);

  // Sync defaults when stock changes
  const handleStockChange = (id: string) => {
    setStockId(id);
    const s = stocks.find(st => st.id === id);
    if (s) {
      setRevenueCr(s.quarterlyRevenueCr);
      setEbitdaCr(s.quarterlyEbitdaCr);
      setEbitdaMarginPct(s.ebitdaMarginPct);
      setPatCr(s.quarterlyPatCr);
      setYoyPatGrowthPct(s.yoyPatGrowthPct);
    }
  };

  if (!isNewUpdateModalOpen || !isOwnerAuthenticated) return null;

  const handleAddHighlight = () => {
    if (!newHighlight.trim()) return;
    setHighlights([...highlights, newHighlight.trim()]);
    setNewHighlight('');
  };

  const handleAddGuidance = () => {
    if (!newGuidance.trim()) return;
    setGuidance([...guidance, newGuidance.trim()]);
    setNewGuidance('');
  };

  const handleAddOrderWin = () => {
    if (!newOrderWin.trim()) return;
    setOrderWins([...orderWins, newOrderWin.trim()]);
    setNewOrderWin('');
  };

  const handleAddHeadwind = () => {
    if (!newHeadwind.trim()) return;
    setHeadwinds([...headwinds, newHeadwind.trim()]);
    setNewHeadwind('');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const s = stocks.find(st => st.id === stockId) || stocks[0];

    addStockUpdate({
      stockId: s.id,
      stockSymbol: s.symbol,
      stockName: s.name,
      sector: s.sector,
      logoColor: s.logoColor,
      title: title.trim() || `${s.symbol} ${period} Corporate Update & Earnings Results`,
      period: period.trim() || 'Q2 FY27',
      type: updateType,
      summary: summary.trim() || `${s.name} reported Q2 FY27 performance with revenue of ₹${revenueCr} Cr and PAT of ₹${patCr} Cr (+${yoyPatGrowthPct}% YoY).`,
      kpiSnapshot: {
        revenueCr: Number(revenueCr),
        yoyRevGrowthPct: Number(yoyRevGrowthPct),
        ebitdaCr: Number(ebitdaCr),
        ebitdaMarginPct: Number(ebitdaMarginPct),
        patCr: Number(patCr),
        yoyPatGrowthPct: Number(yoyPatGrowthPct),
        epsRs: Number(epsRs)
      },
      keyHighlights: highlights,
      managementGuidance: guidance,
      orderWinsOrCapex: orderWins,
      headwindsAndRisks: headwinds,
      filings: [
        { title: `${s.symbol} - ${period} Financial Results Filing.pdf`, type: 'financial_results' }
      ]
    });

    setIsNewUpdateModalOpen(false);
  };

  const selectedStockObj = stocks.find(st => st.id === stockId);

  const previewUpdate: StockUpdate = {
    id: 'preview',
    stockId: stockId,
    stockSymbol: selectedStockObj?.symbol || 'STOCK',
    stockName: selectedStockObj?.name || 'Company Name',
    sector: selectedStockObj?.sector || 'Automobile & EV',
    logoColor: selectedStockObj?.logoColor || 'from-indigo-600 to-blue-700',
    title: title.trim() || `${selectedStockObj?.symbol || 'STOCK'} ${period} Results Brief`,
    date: new Date().toISOString().split('T')[0],
    period: period,
    type: updateType,
    summary: summary || 'Executive summary of quarterly results, margin performance, and concall guidance.',
    kpiSnapshot: {
      revenueCr: Number(revenueCr),
      yoyRevGrowthPct: Number(yoyRevGrowthPct),
      ebitdaCr: Number(ebitdaCr),
      ebitdaMarginPct: Number(ebitdaMarginPct),
      patCr: Number(patCr),
      yoyPatGrowthPct: Number(yoyPatGrowthPct),
      epsRs: Number(epsRs)
    },
    keyHighlights: highlights,
    managementGuidance: guidance,
    orderWinsOrCapex: orderWins,
    headwindsAndRisks: headwinds,
    filings: [
      { title: `${selectedStockObj?.symbol || 'Stock'} - ${period} Briefing.pdf`, type: 'presentation' }
    ],
    likesCount: 0,
    bookmarkedByInvestors: 0
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-200">
      
      <div 
        className="glass-dropdown w-full max-w-3xl max-h-[92vh] overflow-y-auto rounded-3xl border border-slate-700/80 p-6 sm:p-8 relative no-scrollbar"
        onClick={(e) => e.stopPropagation()}
      >
        
        {/* Close Button */}
        <button
          onClick={() => setIsNewUpdateModalOpen(false)}
          className="absolute top-6 right-6 p-2 rounded-xl text-slate-400 hover:text-white bg-slate-900 border border-slate-800 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="flex items-center justify-between gap-4 mb-6 pr-12">
          <div>
            <div className="flex items-center gap-2 text-amber-400 text-xs font-bold uppercase tracking-wider mb-1">
              <Building2 className="w-4 h-4" />
              <span>NSE / BSE Corporate Filing Desk</span>
            </div>
            <h2 className="text-2xl font-extrabold text-white tracking-tight">
              Post Company Update / Earnings Results
            </h2>
          </div>

          <button
            type="button"
            onClick={() => setIsPreview(!isPreview)}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold border transition-all ${
              isPreview
                ? 'bg-amber-500 text-slate-950 border-amber-400 font-bold'
                : 'bg-slate-900 text-slate-300 border-slate-800 hover:border-slate-700'
            }`}
          >
            <Eye className="w-3.5 h-3.5" />
            <span>{isPreview ? 'Edit Form' : 'Live Preview'}</span>
          </button>
        </div>

        {isPreview ? (
          <div className="space-y-4">
            <div className="p-3 bg-amber-500/10 border border-amber-500/20 rounded-xl text-xs text-amber-300">
              Live Preview: This is how investors and institutional analysts will see your announcement:
            </div>
            <UpdateCard update={previewUpdate} />
            <div className="flex justify-end gap-3 pt-4">
              <button
                type="button"
                onClick={() => setIsPreview(false)}
                className="px-4 py-2 rounded-xl text-xs font-semibold bg-slate-900 border border-slate-800 text-slate-300 hover:text-white"
              >
                Back to Edit
              </button>
              <button
                type="button"
                onClick={handleSubmit}
                className="px-5 py-2 rounded-xl text-xs font-bold bg-amber-500 hover:bg-amber-400 text-slate-950 transition-all shadow-md shadow-amber-500/20"
              >
                Publish Now
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            
            {/* Step 1: Stock & Period */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">
                  Listed Stock *
                </label>
                <select
                  value={stockId}
                  onChange={(e) => handleStockChange(e.target.value)}
                  className="w-full bg-slate-900 border border-slate-800 text-slate-200 text-xs sm:text-sm rounded-xl p-2.5 focus:border-amber-500 focus:outline-none"
                >
                  {stocks.map(s => (
                    <option key={s.id} value={s.id}>
                      {s.symbol} — {s.name}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">
                  Period / Quarter *
                </label>
                <input
                  type="text"
                  value={period}
                  onChange={(e) => setPeriod(e.target.value)}
                  placeholder="e.g. Q2 FY27"
                  required
                  className="w-full bg-slate-900 border border-slate-800 text-slate-200 text-xs sm:text-sm rounded-xl p-2.5 focus:border-amber-500 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">
                  Announcement Type *
                </label>
                <select
                  value={updateType}
                  onChange={(e) => setUpdateType(e.target.value as UpdateType)}
                  className="w-full bg-slate-900 border border-slate-800 text-slate-200 text-xs sm:text-sm rounded-xl p-2.5 focus:border-amber-500 focus:outline-none"
                >
                  <option value="quarterly_results">Quarterly Financial Results</option>
                  <option value="concall_guidance">Concall & Forward Guidance</option>
                  <option value="order_win">Major Order Win / Contract</option>
                  <option value="regulatory_lodr">SEBI LODR Reg 30 Disclosure</option>
                  <option value="dividend_action">Dividend & Corporate Action</option>
                  <option value="credit_rating">Credit Rating Revision (CRISIL/ICRA)</option>
                  <option value="joint_venture_mna">Merger / Acquisition / Joint Venture</option>
                  <option value="management_change">Board & Leadership Appointment</option>
                  <option value="capacity_expansion">Capacity Expansion / Plant Launch</option>
                  <option value="general_announcement">General Corporate Announcement</option>
                </select>
              </div>
            </div>

            {/* Title */}
            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1">
                Headline / Subject Line *
              </label>
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="e.g. Q2 FY27 PAT Rises 45% YoY to ₹1,437 Cr; Order Book hits Record ₹1.24 Lakh Cr"
                required
                className="w-full bg-slate-900 border border-slate-800 text-slate-100 text-xs sm:text-sm rounded-xl p-2.5 focus:border-amber-500 focus:outline-none"
              />
            </div>

            {/* Financials (in ₹ Crores) */}
            <div className="p-4 rounded-2xl bg-slate-950/60 border border-slate-800">
              <span className="text-xs font-bold uppercase tracking-wider text-amber-400 block mb-3">
                Quarterly Audited Financials (in ₹ Crores)
              </span>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                <div>
                  <label className="block text-[11px] text-slate-400 mb-1">Revenue from Ops (₹ Cr)</label>
                  <input
                    type="number"
                    value={revenueCr}
                    onChange={(e) => setRevenueCr(Number(e.target.value))}
                    className="w-full bg-slate-900 border border-slate-800 text-xs rounded-lg p-2 text-white font-mono-numeric"
                  />
                </div>

                <div>
                  <label className="block text-[11px] text-slate-400 mb-1">YoY Revenue Growth (%)</label>
                  <input
                    type="number"
                    step="0.1"
                    value={yoyRevGrowthPct}
                    onChange={(e) => setYoyRevGrowthPct(Number(e.target.value))}
                    className="w-full bg-slate-900 border border-slate-800 text-xs rounded-lg p-2 text-emerald-400 font-mono-numeric"
                  />
                </div>

                <div>
                  <label className="block text-[11px] text-slate-400 mb-1">Operating EBITDA (₹ Cr)</label>
                  <input
                    type="number"
                    value={ebitdaCr}
                    onChange={(e) => setEbitdaCr(Number(e.target.value))}
                    className="w-full bg-slate-900 border border-slate-800 text-xs rounded-lg p-2 text-white font-mono-numeric"
                  />
                </div>

                <div>
                  <label className="block text-[11px] text-slate-400 mb-1">EBITDA Margin (%)</label>
                  <input
                    type="number"
                    step="0.1"
                    value={ebitdaMarginPct}
                    onChange={(e) => setEbitdaMarginPct(Number(e.target.value))}
                    className="w-full bg-slate-900 border border-slate-800 text-xs rounded-lg p-2 text-emerald-400 font-mono-numeric"
                  />
                </div>

                <div>
                  <label className="block text-[11px] text-slate-400 mb-1">Profit After Tax / PAT (₹ Cr)</label>
                  <input
                    type="number"
                    value={patCr}
                    onChange={(e) => setPatCr(Number(e.target.value))}
                    className="w-full bg-slate-900 border border-slate-800 text-xs rounded-lg p-2 text-emerald-400 font-mono-numeric"
                  />
                </div>

                <div>
                  <label className="block text-[11px] text-slate-400 mb-1">YoY PAT Growth (%)</label>
                  <input
                    type="number"
                    step="0.1"
                    value={yoyPatGrowthPct}
                    onChange={(e) => setYoyPatGrowthPct(Number(e.target.value))}
                    className="w-full bg-slate-900 border border-slate-800 text-xs rounded-lg p-2 text-emerald-400 font-mono-numeric"
                  />
                </div>

                <div>
                  <label className="block text-[11px] text-slate-400 mb-1">Quarterly EPS (₹)</label>
                  <input
                    type="number"
                    step="0.01"
                    value={epsRs}
                    onChange={(e) => setEpsRs(Number(e.target.value))}
                    className="w-full bg-slate-900 border border-slate-800 text-xs rounded-lg p-2 text-white font-mono-numeric"
                  />
                </div>
              </div>
            </div>

            {/* Summary */}
            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1">
                Executive Brief / Analyst Takeaway *
              </label>
              <textarea
                rows={3}
                value={summary}
                onChange={(e) => setSummary(e.target.value)}
                placeholder="High-level narrative of quarterly performance, volume drivers, and balance sheet strength..."
                required
                className="w-full bg-slate-900 border border-slate-800 text-slate-200 text-xs sm:text-sm rounded-xl p-2.5 focus:border-amber-500 focus:outline-none"
              />
            </div>

            {/* Operational Highlights */}
            <div>
              <label className="text-xs font-semibold text-emerald-400 flex items-center gap-1 mb-1">
                <CheckCircle2 className="w-4 h-4" />
                Operational & Financial Highlights
              </label>
              <div className="space-y-2 mb-2">
                {highlights.map((h, i) => (
                  <div key={i} className="flex items-center gap-2 bg-slate-900/60 p-2 rounded-xl text-xs text-slate-200 border border-slate-800">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shrink-0" />
                    <span className="flex-1">{h}</span>
                    <button type="button" onClick={() => setHighlights(highlights.filter((_, idx) => idx !== i))} className="text-slate-500 hover:text-rose-400">
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                ))}
              </div>
              <div className="flex gap-2">
                <input
                  type="text"
                  value={newHighlight}
                  onChange={(e) => setNewHighlight(e.target.value)}
                  placeholder="Add a win (e.g. Export volume rose 35%, new factory commissioned)..."
                  className="flex-1 bg-slate-900 border border-slate-800 text-xs rounded-xl p-2 text-slate-200 focus:outline-none"
                  onKeyDown={(e) => { if (e.key === 'Enter') { e.preventDefault(); handleAddHighlight(); } }}
                />
                <button type="button" onClick={handleAddHighlight} className="px-3 py-1.5 bg-slate-800 hover:bg-slate-700 text-xs font-semibold text-emerald-400 rounded-xl">
                  Add Highlight
                </button>
              </div>
            </div>

            {/* Management Guidance */}
            <div className="p-4 rounded-2xl bg-blue-950/20 border border-blue-500/30">
              <label className="text-xs font-bold uppercase tracking-wider text-blue-300 flex items-center gap-1.5 mb-2">
                <Mic className="w-4 h-4 text-blue-400" />
                Management Concall Guidance (Forward Outlook)
              </label>
              <div className="space-y-2 mb-3">
                {guidance.map((g, i) => (
                  <div key={i} className="flex items-start justify-between gap-2 p-2 rounded-xl bg-slate-900 border border-slate-800 text-xs text-slate-200">
                    <span>{g}</span>
                    <button type="button" onClick={() => setGuidance(guidance.filter((_, idx) => idx !== i))} className="text-slate-500 hover:text-rose-400">
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                ))}
              </div>
              <div className="flex gap-2">
                <input
                  type="text"
                  value={newGuidance}
                  onChange={(e) => setNewGuidance(e.target.value)}
                  placeholder="Add guidance (e.g. Targeting 20% topline growth in FY27)..."
                  className="flex-1 bg-slate-900 border border-slate-800 text-xs rounded-xl p-2 text-slate-200 focus:outline-none"
                  onKeyDown={(e) => { if (e.key === 'Enter') { e.preventDefault(); handleAddGuidance(); } }}
                />
                <button type="button" onClick={handleAddGuidance} className="px-3 py-1.5 bg-blue-600 hover:bg-blue-500 text-xs font-semibold text-white rounded-xl">
                  + Add Guidance
                </button>
              </div>
            </div>

            {/* Order Inflows & Capex */}
            <div>
              <label className="text-xs font-semibold text-purple-400 flex items-center gap-1 mb-1">
                <Layers className="w-4 h-4" />
                Order Inflows, Contracts & Capex
              </label>
              <div className="space-y-2 mb-2">
                {orderWins.map((o, i) => (
                  <div key={i} className="flex items-center gap-2 bg-slate-900/60 p-2 rounded-xl text-xs text-slate-200 border border-slate-800">
                    <span className="w-1.5 h-1.5 rounded-full bg-purple-400 shrink-0" />
                    <span className="flex-1">{o}</span>
                    <button type="button" onClick={() => setOrderWins(orderWins.filter((_, idx) => idx !== i))} className="text-slate-500 hover:text-rose-400">
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                ))}
              </div>
              <div className="flex gap-2">
                <input
                  type="text"
                  value={newOrderWin}
                  onChange={(e) => setNewOrderWin(e.target.value)}
                  placeholder="e.g. Secured ₹4,500 Cr railway electrification contract..."
                  className="flex-1 bg-slate-900 border border-slate-800 text-xs rounded-xl p-2 text-slate-200 focus:outline-none"
                  onKeyDown={(e) => { if (e.key === 'Enter') { e.preventDefault(); handleAddOrderWin(); } }}
                />
                <button type="button" onClick={handleAddOrderWin} className="px-3 py-1.5 bg-slate-800 hover:bg-slate-700 text-xs font-semibold text-purple-400 rounded-xl">
                  Add Contract
                </button>
              </div>
            </div>

            {/* Submit */}
            <div className="flex items-center justify-end gap-3 pt-4 border-t border-slate-800">
              <button
                type="button"
                onClick={() => setIsNewUpdateModalOpen(false)}
                className="px-4 py-2 rounded-xl text-xs font-semibold text-slate-400 hover:text-white"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold bg-amber-500 hover:bg-amber-400 text-slate-950 transition-all shadow-lg shadow-amber-500/25"
              >
                <Send className="w-4 h-4" />
                <span>Publish Announcement to Investors</span>
              </button>
            </div>

          </form>
        )}

      </div>

    </div>
  );
};
