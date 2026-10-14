import React, { useState } from 'react';
import { 
  Building2, 
  Calendar, 
  CheckCircle2, 
  AlertCircle, 
  Mic, 
  Heart, 
  Share2, 
  FileText, 
  TrendingUp, 
  Layers, 
  Check,
  ChevronDown,
  ChevronUp,
  FileCheck
} from 'lucide-react';
import { StockUpdate, UpdateType } from '../types/investor';
import { useInvestor } from '../context/InvestorContext';
import { formatINR, formatPercentage } from '../utils/formatters';

export const UpdateCard: React.FC<{ update: StockUpdate }> = ({ update }) => {
  const { likeUpdate, setSelectedStockId } = useInvestor();
  const [copied, setCopied] = useState(false);
  const [expanded, setExpanded] = useState(true);

  const handleShare = () => {
    navigator.clipboard.writeText(
      `DalalPulse Update: ${update.stockSymbol} (${update.period}) - ${update.title}\n\nKey Summary: ${update.summary}`
    );
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const getTypeBadge = (type: UpdateType) => {
    switch (type) {
      case 'quarterly_results':
        return { label: 'Quarterly Earnings (Financials)', color: 'bg-emerald-500/10 text-emerald-300 border-emerald-500/30' };
      case 'concall_guidance':
        return { label: 'Concall & Forward Guidance', color: 'bg-blue-500/10 text-blue-300 border-blue-500/30' };
      case 'order_win':
        return { label: 'Major Order Win / Contract', color: 'bg-purple-500/10 text-purple-300 border-purple-500/30' };
      case 'regulatory_lodr':
        return { label: 'SEBI LODR Reg 30 Disclosure', color: 'bg-amber-500/10 text-amber-300 border-amber-500/30' };
      case 'dividend_action':
        return { label: 'Dividend & Corporate Action', color: 'bg-pink-500/10 text-pink-300 border-pink-500/30' };
      case 'credit_rating':
        return { label: 'Credit Rating Revision', color: 'bg-cyan-500/10 text-cyan-300 border-cyan-500/30' };
      case 'joint_venture_mna':
        return { label: 'M&A / Joint Venture', color: 'bg-indigo-500/10 text-indigo-300 border-indigo-500/30' };
      case 'management_change':
        return { label: 'Board & Leadership Change', color: 'bg-orange-500/10 text-orange-300 border-orange-500/30' };
      case 'capacity_expansion':
        return { label: 'Capacity Expansion / Plant', color: 'bg-teal-500/10 text-teal-300 border-teal-500/30' };
      case 'general_announcement':
        return { label: 'Corporate Announcement', color: 'bg-violet-500/10 text-violet-300 border-violet-500/30' };
      default:
        return { label: 'Exchange Filing', color: 'bg-slate-800 text-slate-300 border-slate-700' };
    }
  };

  const typeBadge = getTypeBadge(update.type);

  return (
    <article className="glass-panel rounded-2xl overflow-hidden hover:border-slate-700/80 transition-all duration-300 mb-6">
      
      {/* Header */}
      <div className="p-5 sm:p-6 border-b border-slate-800/80 bg-slate-950/40">
        
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-3">
          
          <div className="flex items-center gap-3">
            <div className={`w-10 h-10 rounded-xl bg-gradient-to-tr ${update.logoColor} p-0.5 flex items-center justify-center text-white shrink-0 shadow-md font-bold text-xs`}>
              {update.stockSymbol.slice(0, 3)}
            </div>
            <div>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setSelectedStockId(update.stockId)}
                  className="font-bold text-white hover:text-amber-400 transition-colors text-base text-left font-mono-numeric"
                >
                  {update.stockSymbol}
                </button>
                <span className="text-xs text-slate-400 font-medium">({update.stockName})</span>
                <span className="text-[11px] font-medium px-2 py-0.5 rounded-full bg-slate-900 text-slate-400 border border-slate-800">
                  {update.sector}
                </span>
              </div>
              <div className="flex items-center gap-2 text-xs text-slate-400 mt-0.5">
                <span className="flex items-center gap-1">
                  <Calendar className="w-3 h-3 text-slate-500" />
                  {update.date}
                </span>
                <span>•</span>
                <span className="text-amber-400 font-semibold">{update.period}</span>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2 self-start sm:self-auto">
            <span className={`text-xs font-semibold px-2.5 py-1 rounded-full border ${typeBadge.color}`}>
              {typeBadge.label}
            </span>
          </div>

        </div>

        {/* Update Title */}
        <h2 className="text-lg sm:text-xl font-bold text-white tracking-tight mb-2">
          {update.title}
        </h2>

      </div>

      {/* Financial KPI Snapshot Ribbon */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3 p-4 sm:p-5 bg-slate-950/80 border-b border-slate-800/80">
        
        {/* Revenue */}
        <div className="p-2.5 rounded-xl bg-slate-900/60 border border-slate-800/60">
          <div className="text-[10px] uppercase font-bold text-slate-500 tracking-wider">Revenue from Ops</div>
          <div className="text-base font-extrabold text-white font-mono-numeric mt-0.5">
            {formatINR(update.kpiSnapshot.revenueCr, true)}
          </div>
          <div className="text-[10px] text-emerald-400 font-medium">
            {formatPercentage(update.kpiSnapshot.yoyRevGrowthPct)} YoY
          </div>
        </div>

        {/* EBITDA & Margin */}
        <div className="p-2.5 rounded-xl bg-slate-900/60 border border-slate-800/60">
          <div className="text-[10px] uppercase font-bold text-slate-500 tracking-wider">Operating EBITDA</div>
          <div className="text-base font-extrabold text-slate-200 font-mono-numeric mt-0.5">
            {formatINR(update.kpiSnapshot.ebitdaCr, true)}
          </div>
          <div className="text-[10px] text-slate-400">
            Margin: <strong className="text-slate-200">{update.kpiSnapshot.ebitdaMarginPct}%</strong>
          </div>
        </div>

        {/* PAT (Net Profit) */}
        <div className="p-2.5 rounded-xl bg-slate-900/60 border border-slate-800/60">
          <div className="text-[10px] uppercase font-bold text-slate-500 tracking-wider">Profit After Tax (PAT)</div>
          <div className="text-base font-extrabold text-emerald-400 font-mono-numeric mt-0.5 flex items-center gap-1">
            <TrendingUp className="w-3.5 h-3.5" />
            {formatINR(update.kpiSnapshot.patCr, true)}
          </div>
          <div className="text-[10px] text-emerald-400 font-medium">
            {formatPercentage(update.kpiSnapshot.yoyPatGrowthPct)} YoY
          </div>
        </div>

        {/* EPS */}
        <div className="p-2.5 rounded-xl bg-slate-900/60 border border-slate-800/60">
          <div className="text-[10px] uppercase font-bold text-slate-500 tracking-wider">Quarterly EPS</div>
          <div className="text-base font-extrabold text-white font-mono-numeric mt-0.5">
            ₹{update.kpiSnapshot.epsRs.toFixed(2)}
          </div>
          <div className="text-[10px] text-slate-400">Per equity share</div>
        </div>

      </div>

      {/* Main Content Body */}
      <div className="p-5 sm:p-6 space-y-6">
        
        {/* Executive Summary */}
        <div className="p-4 rounded-xl bg-slate-900/40 border border-slate-800/60">
          <span className="text-xs font-bold uppercase tracking-wider text-amber-400 block mb-1">
            Executive Brief / Analyst Takeaway
          </span>
          <p className="text-sm sm:text-base text-slate-200 leading-relaxed font-normal">
            {update.summary}
          </p>
        </div>

        {/* Collapsible Details */}
        {expanded && (
          <div className="space-y-6">
            
            {/* Key Highlights */}
            {update.keyHighlights && update.keyHighlights.length > 0 && (
              <div>
                <h3 className="text-xs font-bold uppercase tracking-wider text-emerald-400 flex items-center gap-1.5 mb-2.5">
                  <CheckCircle2 className="w-4 h-4" />
                  Key Operational & Financial Highlights
                </h3>
                <ul className="space-y-2">
                  {update.keyHighlights.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-sm text-slate-300">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-2 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Management Commentary & Guidance */}
            {update.managementGuidance && update.managementGuidance.length > 0 && (
              <div className="p-4 rounded-xl bg-blue-950/20 border border-blue-500/30">
                <h3 className="text-xs font-bold uppercase tracking-wider text-blue-300 flex items-center gap-1.5 mb-2.5">
                  <Mic className="w-4 h-4 text-blue-400" />
                  Management Concall Commentary & FY Forward Guidance
                </h3>
                <ul className="space-y-2">
                  {update.managementGuidance.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-1.5 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Order Wins & Capex */}
            {update.orderWinsOrCapex && update.orderWinsOrCapex.length > 0 && (
              <div>
                <h3 className="text-xs font-bold uppercase tracking-wider text-purple-400 flex items-center gap-1.5 mb-2.5">
                  <Layers className="w-4 h-4" />
                  Order Inflows, Contracts & Capex Commissioning
                </h3>
                <ul className="space-y-2">
                  {update.orderWinsOrCapex.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-sm text-slate-300">
                      <span className="w-1.5 h-1.5 rounded-full bg-purple-400 mt-2 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Headwinds & Margin Risks */}
            {update.headwindsAndRisks && update.headwindsAndRisks.length > 0 && (
              <div>
                <h3 className="text-xs font-bold uppercase tracking-wider text-rose-400 flex items-center gap-1.5 mb-2.5">
                  <AlertCircle className="w-4 h-4" />
                  Headwinds, Margin Risks & Input Cost Inflation
                </h3>
                <ul className="space-y-2">
                  {update.headwindsAndRisks.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-sm text-slate-300">
                      <span className="w-1.5 h-1.5 rounded-full bg-rose-400 mt-2 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Attached Disclosures & SEBI Filings */}
            {update.filings && update.filings.length > 0 && (
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2 flex items-center gap-1">
                  <FileText className="w-3.5 h-3.5" />
                  Official SEBI / Exchange Filings & Presentations
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {update.filings.map((doc, idx) => (
                    <div 
                      key={idx}
                      className="flex items-center justify-between p-2.5 rounded-lg bg-slate-900/70 border border-slate-800 text-xs hover:border-slate-700 transition-colors"
                    >
                      <div className="flex items-center gap-2 truncate pr-2">
                        <FileCheck className="w-4 h-4 text-amber-400 shrink-0" />
                        <span className="text-slate-200 truncate font-medium">{doc.title}</span>
                      </div>
                      <span className="text-[11px] text-slate-500 shrink-0">{doc.size || 'PDF'}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

          </div>
        )}

      </div>

      {/* Card Footer Interactions */}
      <div className="px-5 py-3.5 bg-slate-950/60 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400">
        
        <div className="flex items-center gap-4">
          <button
            onClick={() => likeUpdate(update.id)}
            className="flex items-center gap-1.5 text-slate-400 hover:text-rose-400 transition-colors"
          >
            <Heart className={`w-4 h-4 ${(update.likesCount || 0) > 0 ? 'text-rose-400 fill-rose-400/20' : ''}`} />
            <span>{update.likesCount || 0} Upvotes</span>
          </button>

          <span className="text-slate-500 hidden sm:inline">
            Tracked by {update.bookmarkedByInvestors || 1} institutional & retail investors
          </span>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={handleShare}
            className="flex items-center gap-1 text-slate-400 hover:text-slate-200 transition-colors"
          >
            {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Share2 className="w-3.5 h-3.5" />}
            <span>{copied ? 'Copied Link' : 'Share'}</span>
          </button>

          <button
            onClick={() => setExpanded(!expanded)}
            className="flex items-center gap-1 text-amber-400 hover:text-amber-300 font-medium"
          >
            <span>{expanded ? 'Collapse' : 'Expand Details'}</span>
            {expanded ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
          </button>
        </div>

      </div>

    </article>
  );
};
