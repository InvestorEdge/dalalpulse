import React, { useState } from 'react';
import { 
  X, 
  Printer, 
  Copy, 
  Check, 
  FileText 
} from 'lucide-react';
import { useInvestor } from '../context/InvestorContext';
import { formatINR, formatStockPrice } from '../utils/formatters';

export const ExportReportModal: React.FC = () => {
  const { isExportModalOpen, setIsExportModalOpen, stocks, updates, indices } = useInvestor();
  const [copied, setCopied] = useState(false);

  if (!isExportModalOpen) return null;

  const totalMarketCapCr = stocks.reduce((acc, s) => acc + s.marketCapCr, 0);
  const totalQuarterlyPatCr = stocks.reduce((acc, s) => acc + s.quarterlyPatCr, 0);
  const totalQuarterlyRevCr = stocks.reduce((acc, s) => acc + s.quarterlyRevenueCr, 0);

  const handlePrint = () => {
    window.print();
  };

  const handleCopyMarkdown = () => {
    let md = `# DalalPulse - Indian Equities & Earnings Research Memo\n`;
    md += `**Date:** ${new Date().toLocaleDateString('en-IN')} | **Exchange:** NSE & BSE Coverage\n\n`;
    
    md += `### Benchmark Indices Snapshot\n`;
    indices.forEach(idx => {
      md += `- **${idx.name}:** ${idx.value.toLocaleString('en-IN')} (${idx.change >= 0 ? '+' : ''}${idx.changePct.toFixed(2)}%)\n`;
    });
    md += `\n`;

    md += `### Aggregate Coverage Financials\n`;
    md += `- **Total Tracked Market Cap:** ₹${(totalMarketCapCr / 100000).toFixed(2)} Lakh Cr\n`;
    md += `- **Combined Quarterly Revenue:** ${formatINR(totalQuarterlyRevCr, true)}\n`;
    md += `- **Combined Quarterly Net Profit (PAT):** ${formatINR(totalQuarterlyPatCr, true)}\n\n`;

    md += `### Stock Valuation & Fundamentals Summary\n\n`;
    stocks.forEach(s => {
      md += `#### ${s.symbol} (${s.name}) — ${s.sector} [${s.marketCapCategory}]\n`;
      md += `- **CMP:** ${formatStockPrice(s.cmp)} | **52W Range:** ₹${s.low52w} - ₹${s.high52w}\n`;
      md += `- **P/E:** ${s.peRatio.toFixed(1)}x (Industry: ${s.industryPe}x) | **ROCE:** ${s.roce}% | **ROE:** ${s.roe}%\n`;
      md += `- **Qtr Revenue:** ${formatINR(s.quarterlyRevenueCr, true)} | **Qtr PAT:** ${formatINR(s.quarterlyPatCr, true)} (+${s.yoyPatGrowthPct}% YoY)\n`;
      if (s.orderBookCr) {
        md += `- **Confirmed Order Book:** ${formatINR(s.orderBookCr, true)}\n`;
      }
      md += `\n`;
    });

    md += `### Key Concall & Earnings Disclosures\n\n`;
    updates.slice(0, 3).forEach(u => {
      md += `**${u.stockSymbol} (${u.period}) - ${u.title}**\n`;
      md += `> ${u.summary}\n\n`;
    });

    navigator.clipboard.writeText(md);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-200">
      
      <div 
        className="glass-dropdown w-full max-w-3xl max-h-[92vh] overflow-y-auto rounded-3xl border border-slate-700/80 p-6 sm:p-8 relative no-scrollbar"
        onClick={(e) => e.stopPropagation()}
      >
        
        {/* Close Button */}
        <button
          onClick={() => setIsExportModalOpen(false)}
          className="absolute top-6 right-6 p-2 rounded-xl text-slate-400 hover:text-white bg-slate-900 border border-slate-800 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 pr-12">
          <div>
            <div className="flex items-center gap-2 text-amber-400 text-xs font-bold uppercase tracking-wider mb-1">
              <FileText className="w-4 h-4" />
              <span>Institutional Research Note</span>
            </div>
            <h2 className="text-2xl font-extrabold text-white tracking-tight">
              Indian Equities Portfolio Memo
            </h2>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleCopyMarkdown}
              className="flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-semibold bg-slate-900 border border-slate-800 text-slate-300 hover:text-white transition-all"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? 'Copied Markdown' : 'Copy Markdown'}</span>
            </button>

            <button
              onClick={handlePrint}
              className="flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold bg-amber-500 hover:bg-amber-400 text-slate-950 transition-all shadow-md shadow-amber-500/30"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / PDF</span>
            </button>
          </div>
        </div>

        {/* Memo Sheet */}
        <div className="bg-slate-950 p-6 sm:p-8 rounded-2xl border border-slate-800 space-y-6 text-slate-200 text-sm">
          
          <div className="border-b border-slate-800 pb-4 flex items-center justify-between">
            <div>
              <h3 className="font-extrabold text-lg text-white">DalalPulse Indian Equity Intelligence</h3>
              <p className="text-xs text-slate-400">Quarterly Earnings Review & Valuation Tracker</p>
            </div>
            <div className="text-right text-xs text-slate-400">
              <div>Date: {new Date().toLocaleDateString('en-IN')}</div>
              <div>Coverage: {stocks.length} NSE & BSE Stocks</div>
            </div>
          </div>

          {/* Indices Ribbon */}
          <div className="flex items-center gap-3 overflow-x-auto pb-2 text-xs border-b border-slate-800/80">
            {indices.map(idx => (
              <span key={idx.name} className="px-2.5 py-1 rounded bg-slate-900 border border-slate-800 whitespace-nowrap">
                <strong>{idx.name}:</strong> {idx.value.toLocaleString('en-IN')} ({idx.change >= 0 ? '+' : ''}{idx.changePct.toFixed(2)}%)
              </span>
            ))}
          </div>

          {/* Aggregate Stats */}
          <div className="grid grid-cols-3 gap-3 p-4 rounded-xl bg-slate-900/60 border border-slate-800/80">
            <div>
              <div className="text-[10px] uppercase font-bold text-slate-400">Total Market Cap</div>
              <div className="text-base font-bold text-white font-mono-numeric mt-0.5">
                ₹{(totalMarketCapCr / 100000).toFixed(2)} Lakh Cr
              </div>
            </div>
            <div>
              <div className="text-[10px] uppercase font-bold text-slate-400">Combined Qtr Revenue</div>
              <div className="text-base font-bold text-white font-mono-numeric mt-0.5">
                {formatINR(totalQuarterlyRevCr, true)}
              </div>
            </div>
            <div>
              <div className="text-[10px] uppercase font-bold text-slate-400">Combined Qtr PAT</div>
              <div className="text-base font-bold text-emerald-400 font-mono-numeric mt-0.5">
                {formatINR(totalQuarterlyPatCr, true)}
              </div>
            </div>
          </div>

          {/* Stocks Status */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
              Stock Coverage & Valuation Ratios
            </h4>
            <div className="space-y-2.5">
              {stocks.map(s => (
                <div key={s.id} className="p-3 rounded-xl bg-slate-900/40 border border-slate-800/80 flex items-center justify-between text-xs">
                  <div>
                    <div className="font-bold text-white flex items-center gap-2">
                      <span className="font-mono-numeric text-amber-400">{s.symbol}</span>
                      <span className="text-slate-300 font-normal">({s.name})</span>
                      <span className="text-[10px] px-1.5 py-0.2 rounded bg-slate-800 text-slate-300">
                        {s.sector}
                      </span>
                    </div>
                    <div className="text-slate-400 text-[11px] mt-0.5">
                      P/E: {s.peRatio.toFixed(1)}x • ROCE: {s.roce}% • 52W: ₹{s.low52w.toFixed(0)} - ₹{s.high52w.toFixed(0)}
                    </div>
                  </div>

                  <div className="text-right font-mono-numeric">
                    <div className="font-bold text-white">{formatStockPrice(s.cmp)}</div>
                    <div className="text-slate-400 text-[11px]">M-Cap: {formatINR(s.marketCapCr, true)}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Recent Filings */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
              Key Earnings Disclosures & Concall Insights
            </h4>
            <div className="space-y-3">
              {updates.slice(0, 3).map(u => (
                <div key={u.id} className="p-3.5 rounded-xl bg-slate-900/30 border border-slate-800/60 text-xs">
                  <div className="flex items-center justify-between font-bold text-white mb-1">
                    <span>{u.stockSymbol} — {u.title}</span>
                    <span className="text-slate-400 font-normal">{u.date}</span>
                  </div>
                  <p className="text-slate-300 italic mb-2">"{u.summary}"</p>
                  <div className="text-emerald-400 font-medium">
                    PAT: {formatINR(u.kpiSnapshot.patCr, true)} (+{u.kpiSnapshot.yoyPatGrowthPct}% YoY) • Revenue: {formatINR(u.kpiSnapshot.revenueCr, true)}
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>

    </div>
  );
};
