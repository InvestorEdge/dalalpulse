import React, { useState } from 'react';
import { 
  Building2, 
  FileSpreadsheet, 
  PlusCircle, 
  Sparkles, 
  Mic, 
  ArrowUpRight,
  TrendingUp,
  BarChart3,
  Award,
  Layers,
  Lock,
  Zap,
  Filter,
  CheckCircle2
} from 'lucide-react';
import { InvestorProvider, useInvestor } from './context/InvestorContext';
import { MarketIndicesTicker } from './components/MarketIndicesTicker';
import { Navbar } from './components/Navbar';
import { FiltersBar } from './components/FiltersBar';
import { CompanyCard } from './components/CompanyCard';
import { UpdateCard } from './components/UpdateCard';
import { InvestorAsksBoard } from './components/InvestorAsksBoard';
import { CompanyComparison } from './components/CompanyComparison';
import { CompanyDetailModal } from './components/CompanyDetailModal';
import { NewUpdateModal } from './components/NewUpdateModal';
import { NewCompanyModal } from './components/NewCompanyModal';
import { ExportReportModal } from './components/ExportReportModal';
import { ApiSettingsModal } from './components/ApiSettingsModal';
import { AdminAuthModal } from './components/AdminAuthModal';
import { FiiDiiActivityBoard } from './components/FiiDiiActivityBoard';
import { FiiDiiAdminModal } from './components/FiiDiiAdminModal';

const DashboardContent: React.FC = () => {
  const { 
    activeTab, 
    setActiveTab, 
    stocks, 
    updates, 
    searchQuery, 
    selectedSector, 
    selectedMarketCap, 
    filterWatchlistOnly,
    setIsNewUpdateModalOpen,
    setIsNewStockModalOpen,
    isApiModalOpen,
    setIsApiModalOpen,
    viewRole,
    isOwnerAuthenticated,
    triggerOwnerAction
  } = useInvestor();

  const [filterTodayOnly, setFilterTodayOnly] = useState<boolean>(false);
  const [filterUpdateType, setFilterUpdateType] = useState<string>('All');

  const todayCount = updates.filter(u => u.date === '2026-10-14').length;
  const resultsCount = updates.filter(u => u.type === 'quarterly_results').length;
  const ordersCount = updates.filter(u => u.type === 'order_win' || u.type === 'capacity_expansion').length;
  const concallCount = updates.filter(u => u.type === 'concall_guidance').length;
  const lodrCount = updates.filter(u => u.type === 'regulatory_lodr').length;

  // Filter stocks
  const filteredStocks = stocks.filter(s => {
    if (filterWatchlistOnly && !s.isWatchlist) return false;
    if (selectedSector !== 'All' && s.sector !== selectedSector) return false;
    if (selectedMarketCap !== 'All' && s.marketCapCategory !== selectedMarketCap) return false;
    if (searchQuery) {
      const q = searchQuery.toLowerCase();
      const matchSymbol = s.symbol.toLowerCase().includes(q);
      const matchName = s.name.toLowerCase().includes(q);
      const matchBse = s.bseCode.includes(q);
      const matchSector = s.sector.toLowerCase().includes(q);
      return matchSymbol || matchName || matchBse || matchSector;
    }
    return true;
  });

  // Filter updates
  const filteredUpdates = updates.filter(u => {
    const s = stocks.find(st => st.id === u.stockId);
    if (filterWatchlistOnly && s && !s.isWatchlist) return false;
    if (selectedSector !== 'All' && u.sector !== selectedSector) return false;
    if (selectedMarketCap !== 'All' && s && s.marketCapCategory !== selectedMarketCap) return false;
    if (filterTodayOnly && u.date !== '2026-10-14') return false;
    if (filterUpdateType !== 'All') {
      if (filterUpdateType === 'quarterly_results' && u.type !== 'quarterly_results') return false;
      if (filterUpdateType === 'order_win' && (u.type !== 'order_win' && u.type !== 'capacity_expansion')) return false;
      if (filterUpdateType === 'concall_guidance' && u.type !== 'concall_guidance') return false;
      if (filterUpdateType === 'regulatory_lodr' && u.type !== 'regulatory_lodr') return false;
    }
    if (searchQuery) {
      const q = searchQuery.toLowerCase();
      const matchSymbol = u.stockSymbol.toLowerCase().includes(q);
      const matchName = u.stockName.toLowerCase().includes(q);
      const matchTitle = u.title.toLowerCase().includes(q);
      const matchSummary = u.summary.toLowerCase().includes(q);
      return matchSymbol || matchName || matchTitle || matchSummary;
    }
    return true;
  });

  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      
      {/* Context Welcome Ribbon */}
      <div className="mb-6 p-4 sm:p-5 rounded-2xl glass-panel-subtle border border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 shrink-0 font-bold text-base">
            ₹
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h1 className="text-sm sm:text-base font-bold text-white">
                {viewRole === 'analyst_investor' ? 'Indian Equities Investor & Research Portal' : 'Corporate Filing & Investor Relations (SEBI LODR)'}
              </h1>
              <span className="text-[10px] font-semibold uppercase px-2 py-0.5 rounded-full bg-amber-500/15 text-amber-300 border border-amber-500/30">
                {viewRole === 'analyst_investor' ? 'NSE & BSE Coverage' : 'Exchange Filing Desk'}
              </span>
            </div>
            <p className="text-xs text-slate-400">
              {viewRole === 'analyst_investor' 
                ? 'Track quarterly corporate results, concall guidance, order books, and audited exchange disclosures.' 
                : 'Post quarterly earnings letters, regulatory SEBI LODR announcements, and forward FY guidance.'}
            </p>
          </div>
        </div>

        {isOwnerAuthenticated && viewRole === 'management_ir' && (
          <div className="flex items-center gap-2 self-start sm:self-auto">
            <button
              onClick={() => setIsNewUpdateModalOpen(true)}
              className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-bold bg-amber-500 hover:bg-amber-400 text-slate-950 shadow-md shadow-amber-500/20 transition-all hover:scale-[1.02]"
            >
              <PlusCircle className="w-3.5 h-3.5" />
              <span>Post Update / Results</span>
            </button>
          </div>
        )}
      </div>

      {/* 1. TRACKED EQUITIES DIRECTORY (FIRST PLACE) */}
      {activeTab === 'stocks' && (
        <section className="space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-2">
            <div>
              <h2 className="text-2xl font-extrabold text-white tracking-tight flex items-center gap-2.5">
                <Building2 className="w-6 h-6 text-emerald-400" />
                Tracked Indian Equities Directory (NSE & BSE)
              </h2>
              <p className="text-xs sm:text-sm text-slate-400">
                Live prices, fundamental valuation multiples, promoter/FII/DII shareholding patterns, 52-week ranges, and order books.
              </p>
            </div>

            {isOwnerAuthenticated && viewRole === 'management_ir' && (
              <button
                onClick={() => setIsNewStockModalOpen(true)}
                className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-bold bg-amber-500 hover:bg-amber-400 text-slate-950 transition-all self-start sm:self-auto shadow-md shadow-amber-500/20"
              >
                <Building2 className="w-4 h-4" />
                <span>+ Track Stock</span>
              </button>
            )}
          </div>

          <FiltersBar />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {filteredStocks.map(stock => (
              <CompanyCard key={stock.id} stock={stock} />
            ))}

            {filteredStocks.length === 0 && (
              <div className="col-span-full text-center py-16 glass-panel rounded-3xl text-slate-400 space-y-3">
                <Building2 className="w-8 h-8 text-slate-600 mx-auto" />
                <h3 className="font-bold text-slate-200">No stocks found</h3>
                <p className="text-xs text-slate-500">
                  Try adjusting your search query, sector, or market-cap filters.
                </p>
              </div>
            )}
          </div>
        </section>
      )}

      {/* 2. QUARTERLY RESULTS & FILINGS FEED */}
      {activeTab === 'updates' && (
        <section className="space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-2">
            <div>
              <h2 className="text-2xl font-extrabold text-white tracking-tight flex items-center gap-2.5">
                <FileSpreadsheet className="w-6 h-6 text-amber-400" />
                Quarterly Earnings & Exchange Disclosures Feed
              </h2>
              <p className="text-xs sm:text-sm text-slate-400">
                Audited Topline, Operating EBITDA, Net Profit (PAT), and official investor presentations across Indian market leaders.
              </p>
            </div>

            {isOwnerAuthenticated && viewRole === 'management_ir' && (
              <button
                onClick={() => setIsNewUpdateModalOpen(true)}
                className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-bold bg-amber-500 hover:bg-amber-400 text-slate-950 transition-all self-start sm:self-auto shadow-md shadow-amber-500/20"
              >
                <PlusCircle className="w-4 h-4" />
                <span>+ Post Result / Filing</span>
              </button>
            )}
          </div>

          {/* Earnings Season & Today's Radar Banner */}
          <div className="p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-amber-500/10 via-slate-900 to-indigo-500/10 border border-slate-800">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="flex h-2.5 w-2.5 relative">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
                  </span>
                  <span className="text-xs font-bold uppercase tracking-wider text-emerald-400">
                    Live Indian Market Earnings Radar • Q2 FY27 Season
                  </span>
                </div>
                <h3 className="text-lg font-extrabold text-white">
                  Corporate Disclosures & Audited Results Stream
                </h3>
                <p className="text-xs text-slate-400 mt-0.5">
                  Real-time SEBI LODR Regulation 30 announcements, quarterly profit reports, and institutional concall guidance across NSE & BSE listed equities.
                </p>
              </div>

              {/* Metrics Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 text-center">
                <div className="p-2.5 rounded-xl bg-slate-900/90 border border-slate-800">
                  <div className="text-lg font-black text-amber-400 font-mono-numeric">{todayCount}</div>
                  <div className="text-[10px] font-medium text-slate-400">Declared Today</div>
                </div>
                <div className="p-2.5 rounded-xl bg-slate-900/90 border border-slate-800">
                  <div className="text-lg font-black text-emerald-400 font-mono-numeric">{stocks.length}</div>
                  <div className="text-[10px] font-medium text-slate-400">Total Equities</div>
                </div>
                <div className="p-2.5 rounded-xl bg-slate-900/90 border border-slate-800">
                  <div className="text-lg font-black text-cyan-400 font-mono-numeric">{resultsCount}</div>
                  <div className="text-[10px] font-medium text-slate-400">Q2 Financials</div>
                </div>
                <div className="p-2.5 rounded-xl bg-slate-900/90 border border-slate-800">
                  <div className="text-lg font-black text-purple-400 font-mono-numeric">{ordersCount}</div>
                  <div className="text-[10px] font-medium text-slate-400">Mega Orders</div>
                </div>
              </div>
            </div>

            {/* Quick Filter Buttons */}
            <div className="flex items-center gap-2 overflow-x-auto pt-4 mt-3 border-t border-slate-800/80 no-scrollbar">
              <span className="text-xs text-slate-500 font-semibold mr-1 flex items-center gap-1 shrink-0">
                <Filter className="w-3 h-3" /> Filter:
              </span>
              <button
                onClick={() => { setFilterTodayOnly(false); setFilterUpdateType('All'); }}
                className={`px-3 py-1 rounded-full text-xs font-semibold whitespace-nowrap transition-all ${
                  !filterTodayOnly && filterUpdateType === 'All'
                    ? 'bg-amber-500 text-slate-950 shadow-sm shadow-amber-500/20'
                    : 'bg-slate-900 text-slate-400 border border-slate-800 hover:text-white'
                }`}
              >
                All Announcements ({updates.length})
              </button>
              <button
                onClick={() => { setFilterTodayOnly(true); setFilterUpdateType('All'); }}
                className={`flex items-center gap-1 px-3 py-1 rounded-full text-xs font-semibold whitespace-nowrap transition-all ${
                  filterTodayOnly && filterUpdateType === 'All'
                    ? 'bg-emerald-500 text-slate-950 shadow-sm shadow-emerald-500/20'
                    : 'bg-slate-900 text-emerald-400 border border-emerald-500/30 hover:bg-emerald-500/10'
                }`}
              >
                <Zap className="w-3 h-3" />
                <span>Today's Disclosures ({todayCount})</span>
              </button>
              <button
                onClick={() => { setFilterTodayOnly(false); setFilterUpdateType('quarterly_results'); }}
                className={`px-3 py-1 rounded-full text-xs font-semibold whitespace-nowrap transition-all ${
                  filterUpdateType === 'quarterly_results'
                    ? 'bg-cyan-500 text-slate-950 shadow-sm shadow-cyan-500/20'
                    : 'bg-slate-900 text-slate-400 border border-slate-800 hover:text-white'
                }`}
              >
                Financial Results ({resultsCount})
              </button>
              <button
                onClick={() => { setFilterTodayOnly(false); setFilterUpdateType('order_win'); }}
                className={`px-3 py-1 rounded-full text-xs font-semibold whitespace-nowrap transition-all ${
                  filterUpdateType === 'order_win'
                    ? 'bg-purple-500 text-white shadow-sm shadow-purple-500/20'
                    : 'bg-slate-900 text-slate-400 border border-slate-800 hover:text-white'
                }`}
              >
                Order Wins & Capex ({ordersCount})
              </button>
              <button
                onClick={() => { setFilterTodayOnly(false); setFilterUpdateType('concall_guidance'); }}
                className={`px-3 py-1 rounded-full text-xs font-semibold whitespace-nowrap transition-all ${
                  filterUpdateType === 'concall_guidance'
                    ? 'bg-amber-400 text-slate-950 shadow-sm shadow-amber-400/20'
                    : 'bg-slate-900 text-slate-400 border border-slate-800 hover:text-white'
                }`}
              >
                Concall Guidance ({concallCount})
              </button>
              <button
                onClick={() => { setFilterTodayOnly(false); setFilterUpdateType('regulatory_lodr'); }}
                className={`px-3 py-1 rounded-full text-xs font-semibold whitespace-nowrap transition-all ${
                  filterUpdateType === 'regulatory_lodr'
                    ? 'bg-blue-500 text-white shadow-sm shadow-blue-500/20'
                    : 'bg-slate-900 text-slate-400 border border-slate-800 hover:text-white'
                }`}
              >
                SEBI LODR Reg 30 ({lodrCount})
              </button>
            </div>
          </div>

          <FiltersBar />

          <div className="space-y-6">
            {filteredUpdates.map(update => (
              <UpdateCard key={update.id} update={update} />
            ))}

            {filteredUpdates.length === 0 && (
              <div className="text-center py-16 glass-panel rounded-3xl text-slate-400 space-y-3">
                <FileSpreadsheet className="w-8 h-8 text-slate-600 mx-auto" />
                <h3 className="font-bold text-slate-200">No filings found</h3>
                <p className="text-xs text-slate-500 max-w-sm mx-auto">
                  No company announcements match your current filter criteria or keywords.
                </p>
                {isOwnerAuthenticated && viewRole === 'management_ir' && (
                  <button
                    onClick={() => setIsNewUpdateModalOpen(true)}
                    className="px-4 py-2 bg-amber-500 text-slate-950 rounded-xl text-xs font-bold inline-flex items-center gap-1.5"
                  >
                    <PlusCircle className="w-3.5 h-3.5" />
                    <span>Post Announcement</span>
                  </button>
                )}
              </div>
            )}
          </div>
        </section>
      )}



      {/* 4. CONCALL GUIDANCE HUB */}
      {activeTab === 'concalls' && <InvestorAsksBoard />}

      {/* 5. PEER MATRIX */}
      {activeTab === 'peers' && <CompanyComparison />}

      {/* 6. FII & DII INSTITUTIONAL FLOWS */}
      {activeTab === 'fii_dii' && <FiiDiiActivityBoard />}

      {/* Modals */}
      <CompanyDetailModal />
      <NewUpdateModal />
      <NewCompanyModal />
      <ExportReportModal />
      <ApiSettingsModal isOpen={isApiModalOpen} onClose={() => setIsApiModalOpen(false)} />
      <AdminAuthModal />
      <FiiDiiAdminModal />

    </main>
  );
};

export function App() {
  return (
    <InvestorProvider>
      <div className="min-h-screen bg-[#070b13] text-slate-100 flex flex-col font-sans selection:bg-amber-500/30 selection:text-amber-200">
        <MarketIndicesTicker />
        <Navbar />
        <div className="flex-1">
          <DashboardContent />
        </div>
        
        {/* Footer */}
        <footer className="border-t border-slate-900 bg-slate-950/90 py-8 text-center text-xs text-slate-500">
          <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <span className="font-extrabold text-white">InvestorEdge</span>
              <span>— Indian Stock Market Investor Relations & Earnings Intelligence (NSE • BSE)</span>
            </div>
            <div className="flex items-center gap-4 text-slate-400">
              <span>SEBI LODR Reg 30 Filings</span>
              <span>•</span>
              <span>Figures in ₹ Crores</span>
              <span>•</span>
              <span>Offline-First Persistence</span>
            </div>
          </div>
        </footer>
      </div>
    </InvestorProvider>
  );
}

export default App;
