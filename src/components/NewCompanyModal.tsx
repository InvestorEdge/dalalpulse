import React, { useState } from 'react';
import { 
  X, 
  Building2, 
  DollarSign, 
  TrendingUp, 
  Globe 
} from 'lucide-react';
import { useInvestor } from '../context/InvestorContext';
import { IndianSector, MarketCapCategory, HealthStatus } from '../types/investor';

const GRADIENTS = [
  { label: 'Blue / Indigo', value: 'from-blue-600 to-indigo-700' },
  { label: 'Amber / Orange', value: 'from-amber-500 to-orange-700' },
  { label: 'Emerald / Teal', value: 'from-emerald-500 to-teal-700' },
  { label: 'Purple / Pink', value: 'from-purple-600 to-pink-600' },
  { label: 'Cyan / Blue', value: 'from-cyan-600 to-blue-600' }
];

export const NewCompanyModal: React.FC = () => {
  const { isNewStockModalOpen, setIsNewStockModalOpen, addStock, isOwnerAuthenticated } = useInvestor();

  const [symbol, setSymbol] = useState('');
  const [bseCode, setBseCode] = useState('500000');
  const [name, setName] = useState('');
  const [tagline, setTagline] = useState('');
  const [sector, setSector] = useState<IndianSector>('Automobile & EV');
  const [cmp, setCmp] = useState<number>(850);
  const [changeRs, setChangeRs] = useState<number>(12);
  const [changePct, setChangePct] = useState<number>(1.4);
  const [marketCapCr, setMarketCapCr] = useState<number>(45000);
  const [peRatio, setPeRatio] = useState<number>(24.5);
  const [industryPe, setIndustryPe] = useState<number>(22.0);
  const [roce, setRoce] = useState<number>(21.5);
  const [roe, setRoe] = useState<number>(19.0);
  const [dividendYield, setDividendYield] = useState<number>(0.8);
  const [high52w, setHigh52w] = useState<number>(980);
  const [low52w, setLow52w] = useState<number>(620);
  const [quarterlyRevenueCr, setQuarterlyRevenueCr] = useState<number>(3800);
  const [quarterlyPatCr, setQuarterlyPatCr] = useState<number>(420);
  const [orderBookCr, setOrderBookCr] = useState<number>(0);
  const [website, setWebsite] = useState('https://');
  const [logoColor, setLogoColor] = useState(GRADIENTS[0].value);
  const [healthStatus, setHealthStatus] = useState<HealthStatus>('outperforming');

  if (!isNewStockModalOpen || !isOwnerAuthenticated) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!symbol.trim() || !name.trim()) return;

    addStock({
      symbol: symbol.trim().toUpperCase(),
      bseCode: bseCode.trim(),
      name: name.trim(),
      tagline: tagline.trim() || `${name} is an established listed entity on NSE & BSE.`,
      sector,
      cmp: Number(cmp),
      changeRs: Number(changeRs),
      changePct: Number(changePct),
      marketCapCr: Number(marketCapCr),
      peRatio: Number(peRatio),
      industryPe: Number(industryPe),
      roce: Number(roce),
      roe: Number(roe),
      dividendYield: Number(dividendYield),
      high52w: Number(high52w),
      low52w: Number(low52w),
      quarterlyRevenueCr: Number(quarterlyRevenueCr),
      quarterlyPatCr: Number(quarterlyPatCr),
      orderBookCr: orderBookCr > 0 ? Number(orderBookCr) : undefined,
      website: website.trim(),
      logoColor,
      healthStatus
    });

    setIsNewStockModalOpen(false);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-200">
      
      <div 
        className="glass-dropdown w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-3xl border border-slate-700/80 p-6 sm:p-8 relative no-scrollbar"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={() => setIsNewStockModalOpen(false)}
          className="absolute top-6 right-6 p-2 rounded-xl text-slate-400 hover:text-white bg-slate-900 border border-slate-800 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-2 text-amber-400 text-xs font-bold uppercase tracking-wider mb-1">
          <Building2 className="w-4 h-4" />
          <span>NSE & BSE Equity Coverage</span>
        </div>
        <h2 className="text-2xl font-extrabold text-white tracking-tight mb-6">
          Track New Indian Stock
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          
          {/* Symbol & Name */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1">NSE Symbol *</label>
              <input
                type="text"
                value={symbol}
                onChange={(e) => setSymbol(e.target.value.toUpperCase())}
                placeholder="e.g. INFY, BEL, ZOMATO"
                required
                className="w-full bg-slate-900 border border-slate-800 text-xs sm:text-sm rounded-xl p-2.5 text-white font-mono-numeric focus:border-amber-500 focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1">BSE Security Code</label>
              <input
                type="text"
                value={bseCode}
                onChange={(e) => setBseCode(e.target.value)}
                placeholder="e.g. 500209"
                className="w-full bg-slate-900 border border-slate-800 text-xs sm:text-sm rounded-xl p-2.5 text-white font-mono-numeric focus:border-amber-500 focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1">Sector *</label>
              <select
                value={sector}
                onChange={(e) => setSector(e.target.value as IndianSector)}
                className="w-full bg-slate-900 border border-slate-800 text-xs sm:text-sm rounded-xl p-2.5 text-white focus:border-amber-500 focus:outline-none"
              >
                <option value="Automobile & EV">Automobile & EV</option>
                <option value="Defense & Aerospace">Defense & Aerospace</option>
                <option value="Electronics & EMS">Electronics & EMS</option>
                <option value="Banking & Financials">Banking & Financials</option>
                <option value="IT & Software">IT & Software</option>
                <option value="Consumer & Retail">Consumer & Retail</option>
                <option value="Green Energy & Infra">Green Energy & Infra</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-300 mb-1">Full Company Name *</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="e.g. Bharat Electronics Ltd"
              required
              className="w-full bg-slate-900 border border-slate-800 text-xs sm:text-sm rounded-xl p-2.5 text-white focus:border-amber-500 focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-300 mb-1">Core Business / Tagline</label>
            <input
              type="text"
              value={tagline}
              onChange={(e) => setTagline(e.target.value)}
              placeholder="e.g. Navratna defense electronics, radar, and naval communication systems"
              className="w-full bg-slate-900 border border-slate-800 text-xs sm:text-sm rounded-xl p-2.5 text-white focus:border-amber-500 focus:outline-none"
            />
          </div>

          {/* Price & Valuation (in ₹) */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 p-3.5 rounded-xl bg-slate-950/60 border border-slate-800">
            <div>
              <label className="block text-[11px] text-slate-400 mb-1">Current Price (CMP ₹)</label>
              <input
                type="number"
                step="0.05"
                value={cmp}
                onChange={(e) => setCmp(Number(e.target.value))}
                className="w-full bg-slate-900 border border-slate-800 text-xs rounded-lg p-2 text-white font-mono-numeric"
              />
            </div>

            <div>
              <label className="block text-[11px] text-slate-400 mb-1">Market Cap (₹ Crores)</label>
              <input
                type="number"
                value={marketCapCr}
                onChange={(e) => setMarketCapCr(Number(e.target.value))}
                className="w-full bg-slate-900 border border-slate-800 text-xs rounded-lg p-2 text-white font-mono-numeric"
              />
            </div>

            <div>
              <label className="block text-[11px] text-slate-400 mb-1">Stock P/E Ratio</label>
              <input
                type="number"
                step="0.1"
                value={peRatio}
                onChange={(e) => setPeRatio(Number(e.target.value))}
                className="w-full bg-slate-900 border border-slate-800 text-xs rounded-lg p-2 text-amber-400 font-mono-numeric"
              />
            </div>

            <div>
              <label className="block text-[11px] text-slate-400 mb-1">Industry P/E</label>
              <input
                type="number"
                step="0.1"
                value={industryPe}
                onChange={(e) => setIndustryPe(Number(e.target.value))}
                className="w-full bg-slate-900 border border-slate-800 text-xs rounded-lg p-2 text-white font-mono-numeric"
              />
            </div>
          </div>

          {/* Return Ratios & Financials */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 p-3.5 rounded-xl bg-slate-950/60 border border-slate-800">
            <div>
              <label className="block text-[11px] text-slate-400 mb-1">ROCE (%)</label>
              <input
                type="number"
                step="0.1"
                value={roce}
                onChange={(e) => setRoce(Number(e.target.value))}
                className="w-full bg-slate-900 border border-slate-800 text-xs rounded-lg p-2 text-emerald-400 font-mono-numeric"
              />
            </div>

            <div>
              <label className="block text-[11px] text-slate-400 mb-1">ROE (%)</label>
              <input
                type="number"
                step="0.1"
                value={roe}
                onChange={(e) => setRoe(Number(e.target.value))}
                className="w-full bg-slate-900 border border-slate-800 text-xs rounded-lg p-2 text-emerald-400 font-mono-numeric"
              />
            </div>

            <div>
              <label className="block text-[11px] text-slate-400 mb-1">Qtr Revenue (₹ Cr)</label>
              <input
                type="number"
                value={quarterlyRevenueCr}
                onChange={(e) => setQuarterlyRevenueCr(Number(e.target.value))}
                className="w-full bg-slate-900 border border-slate-800 text-xs rounded-lg p-2 text-white font-mono-numeric"
              />
            </div>

            <div>
              <label className="block text-[11px] text-slate-400 mb-1">Qtr PAT (₹ Cr)</label>
              <input
                type="number"
                value={quarterlyPatCr}
                onChange={(e) => setQuarterlyPatCr(Number(e.target.value))}
                className="w-full bg-slate-900 border border-slate-800 text-xs rounded-lg p-2 text-emerald-400 font-mono-numeric"
              />
            </div>
          </div>

          {/* 52W Range & Order Book */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1">52-Week High (₹)</label>
              <input
                type="number"
                step="0.1"
                value={high52w}
                onChange={(e) => setHigh52w(Number(e.target.value))}
                className="w-full bg-slate-900 border border-slate-800 text-xs rounded-xl p-2.5 text-white font-mono-numeric"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1">52-Week Low (₹)</label>
              <input
                type="number"
                step="0.1"
                value={low52w}
                onChange={(e) => setLow52w(Number(e.target.value))}
                className="w-full bg-slate-900 border border-slate-800 text-xs rounded-xl p-2.5 text-white font-mono-numeric"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1">Order Book (₹ Cr, optional)</label>
              <input
                type="number"
                value={orderBookCr}
                onChange={(e) => setOrderBookCr(Number(e.target.value))}
                placeholder="e.g. 76000"
                className="w-full bg-slate-900 border border-slate-800 text-xs rounded-xl p-2.5 text-white font-mono-numeric"
              />
            </div>
          </div>

          {/* Website & Logo Color */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1">Investor Relations Website</label>
              <input
                type="text"
                value={website}
                onChange={(e) => setWebsite(e.target.value)}
                placeholder="https://company.com"
                className="w-full bg-slate-900 border border-slate-800 text-xs rounded-xl p-2.5 text-white"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1">Badge Accent Color</label>
              <div className="flex gap-2 pt-1">
                {GRADIENTS.map(grad => (
                  <button
                    key={grad.value}
                    type="button"
                    onClick={() => setLogoColor(grad.value)}
                    className={`w-7 h-7 rounded-lg bg-gradient-to-tr ${grad.value} border-2 transition-transform ${
                      logoColor === grad.value ? 'border-white scale-110 shadow-md' : 'border-transparent opacity-70'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Submit */}
          <div className="flex justify-end gap-3 pt-4 border-t border-slate-800">
            <button
              type="button"
              onClick={() => setIsNewStockModalOpen(false)}
              className="px-4 py-2 rounded-xl text-xs font-semibold text-slate-400 hover:text-white"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-5 py-2.5 rounded-xl text-xs font-bold bg-amber-500 hover:bg-amber-400 text-slate-950 transition-all shadow-md shadow-amber-500/30"
            >
              Add Stock to Coverage
            </button>
          </div>

        </form>

      </div>

    </div>
  );
};
