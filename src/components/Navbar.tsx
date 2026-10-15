import React from 'react';
import { 
  Building2, 
  FileSpreadsheet, 
  Mic, 
  BarChart3, 
  PlusCircle, 
  FileDown, 
  RotateCcw,
  UserCheck,
  SlidersHorizontal,
  Bookmark,
  Lock,
  Unlock,
  ShieldCheck,
  ShieldAlert,
  Landmark
} from 'lucide-react';
import { useInvestor } from '../context/InvestorContext';
import { ActiveTab } from '../types/investor';

export const Navbar: React.FC = () => {
  const { 
    activeTab, 
    setActiveTab, 
    viewRole, 
    setViewRole, 
    stocks, 
    updates, 
    setIsNewUpdateModalOpen,
    setIsNewStockModalOpen,
    setIsExportModalOpen,
    resetToDemoData,
    filterWatchlistOnly,
    setFilterWatchlistOnly,
    isOwnerAuthenticated,
    lockOwnerAccess,
    triggerOwnerAction,
    setIsAuthModalOpen
  } = useInvestor();

  const watchlistCount = stocks.filter(s => s.isWatchlist).length;

  const navItems: { id: ActiveTab; label: string; icon: React.ComponentType<{ className?: string }>; badge?: number }[] = [
    { id: 'stocks', label: 'Tracked Equities', icon: Building2, badge: stocks.length },
    { id: 'updates', label: 'Quarterly Results & Filings', icon: FileSpreadsheet, badge: updates.length },
    { id: 'concalls', label: 'Concall Guidance & Outlook', icon: Mic },
    { id: 'peers', label: 'Peer Valuation Matrix', icon: BarChart3 },
    { id: 'fii_dii', label: 'FII & DII Activity', icon: Landmark }
  ];

  return (
    <header className="sticky top-0 z-40 w-full border-b border-slate-800/80 bg-slate-950/85 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 gap-4">
          
          {/* Logo & Platform Tag */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-amber-500 via-orange-600 to-indigo-500 p-[1.5px] shadow-lg shadow-orange-500/20">
              <div className="w-full h-full bg-slate-950 rounded-[10px] flex items-center justify-center font-bold text-amber-400 text-sm">
                ₹
              </div>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-extrabold text-lg text-white tracking-tight">InvestorEdge</span>
                <span className="text-[10px] uppercase font-bold tracking-wider px-1.5 py-0.5 rounded bg-amber-500/10 text-amber-400 border border-amber-500/30">
                  NSE • BSE
                </span>
              </div>
              <p className="text-xs text-slate-400 hidden sm:block">Indian Equities, Earnings & Concall Intelligence</p>
            </div>
          </div>

          {/* Role Switcher - Visible only when Owner is logged in */}
          {isOwnerAuthenticated && (
            <div className="hidden md:flex items-center bg-slate-900 border border-slate-800 p-1 rounded-xl">
              <button
                onClick={() => setViewRole('analyst_investor')}
                className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                  viewRole === 'analyst_investor'
                    ? 'bg-indigo-600 text-white shadow-sm shadow-indigo-500/30'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                <UserCheck className="w-3.5 h-3.5" />
                <span>Investor View</span>
              </button>
              <button
                onClick={() => setViewRole('management_ir')}
                title="Company IR & LODR Disclosures Desk"
                className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                  viewRole === 'management_ir'
                    ? 'bg-amber-600 text-white shadow-sm shadow-amber-500/30'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                <SlidersHorizontal className="w-3.5 h-3.5" />
                <span>Company IR Desk</span>
              </button>
            </div>
          )}

          {/* Action CTAs */}
          <div className="flex items-center gap-2">
            
            {/* Owner Permission Badge & Login Control */}
            {isOwnerAuthenticated ? (
              <div className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span className="font-bold text-[11px] hidden sm:inline">Owner: Ketan</span>
                <button
                  onClick={lockOwnerAccess}
                  title="Logout / Lock Owner Desk"
                  className="ml-1 p-0.5 hover:text-rose-400 rounded hover:bg-emerald-500/20 transition-colors flex items-center gap-1"
                >
                  <Lock className="w-3 h-3" />
                  <span className="text-[10px] hidden md:inline">Lock</span>
                </button>
              </div>
            ) : (
              <button
                onClick={() => setIsAuthModalOpen(true)}
                title="Owner Login (Protected Publisher Desk)"
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-amber-400 hover:border-slate-700 text-xs transition-colors"
              >
                <Lock className="w-3.5 h-3.5 text-amber-400/90" />
                <span className="font-semibold text-[11px]">Owner Login</span>
              </button>
            )}

            {/* Watchlist Filter Shortcut */}
            <button
              onClick={() => setFilterWatchlistOnly(prev => !prev)}
              title="Show Starred Watchlist Stocks"
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium border transition-colors ${
                filterWatchlistOnly
                  ? 'bg-amber-500/15 border-amber-500/40 text-amber-300'
                  : 'bg-slate-900/80 border-slate-800 text-slate-400 hover:text-slate-200 hover:border-slate-700'
              }`}
            >
              <Bookmark className={`w-3.5 h-3.5 ${filterWatchlistOnly ? 'fill-amber-400 text-amber-400' : ''}`} />
              <span className="hidden sm:inline">Watchlist</span>
              {watchlistCount > 0 && (
                <span className="px-1.5 py-0.2 rounded-full text-[10px] bg-amber-400/20 text-amber-300">
                  {watchlistCount}
                </span>
              )}
            </button>

            {/* Post Corporate Update - ONLY VISIBLE ON OWNER COMPANY IR DESK */}
            {isOwnerAuthenticated && viewRole === 'management_ir' && (
              <button
                onClick={() => setIsNewUpdateModalOpen(true)}
                className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-bold bg-amber-500 hover:bg-amber-400 text-slate-950 shadow-md shadow-amber-500/20 transition-all hover:scale-[1.02]"
              >
                <PlusCircle className="w-4 h-4" />
                <span>Post Update</span>
              </button>
            )}

            {/* Add Stock - ONLY VISIBLE ON OWNER COMPANY IR DESK */}
            {isOwnerAuthenticated && viewRole === 'management_ir' && (
              <button
                onClick={() => setIsNewStockModalOpen(true)}
                className="hidden lg:flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700/80 transition-all"
              >
                <Building2 className="w-3.5 h-3.5" />
                <span>+ Add Stock</span>
              </button>
            )}

            {/* Export Report */}
            <button
              onClick={() => setIsExportModalOpen(true)}
              title="Export Research & Earnings Memo"
              className="p-2 rounded-lg text-slate-400 hover:text-slate-200 bg-slate-900/80 border border-slate-800 hover:border-slate-700 transition-colors"
            >
              <FileDown className="w-4 h-4" />
            </button>

            {/* Reset Demo Data */}
            <button
              onClick={() => {
                if (window.confirm('Reset all Indian stocks and updates back to official sample data?')) {
                  resetToDemoData();
                }
              }}
              title="Reset to Demo Data"
              className="p-2 rounded-lg text-slate-500 hover:text-slate-300 bg-slate-900/60 border border-slate-800 hover:border-slate-700 transition-colors hidden sm:block"
            >
              <RotateCcw className="w-4 h-4" />
            </button>
          </div>

        </div>

        {/* Tab Navigation */}
        <nav className="flex space-x-1 sm:space-x-2 overflow-x-auto py-2 border-t border-slate-800/60 no-scrollbar">
          {navItems.map(item => {
            const Icon = item.icon;
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-xs sm:text-sm font-medium whitespace-nowrap transition-all ${
                  isActive
                    ? 'bg-slate-800 text-white font-semibold shadow-inner border border-slate-700'
                    : 'text-slate-400 hover:text-slate-200 hover:bg-slate-900/60'
                }`}
              >
                <Icon className={`w-4 h-4 ${isActive ? 'text-amber-400' : 'text-slate-400'}`} />
                <span>{item.label}</span>
                {item.badge !== undefined && (
                  <span
                    className={`ml-1 px-1.5 py-0.2 rounded-full text-[11px] font-mono-numeric ${
                      isActive
                        ? 'bg-amber-500/20 text-amber-300 border border-amber-500/30'
                        : 'bg-slate-800/90 text-slate-400'
                    }`}
                  >
                    {item.badge}
                  </span>
                )}
              </button>
            );
          })}
        </nav>

      </div>
    </header>
  );
};
