import React from 'react';
import { Search, X, SlidersHorizontal } from 'lucide-react';
import { useInvestor } from '../context/InvestorContext';
import { IndianSector, MarketCapCategory } from '../types/investor';

const SECTORS: ('All' | IndianSector)[] = [
  'All',
  'Banking & Financials',
  'Defense & Aerospace',
  'Electronics & EMS',
  'Automobile & EV',
  'IT & Software',
  'Green Energy & Infra',
  'Consumer & Retail',
  'Pharmaceuticals & Healthcare',
  'Specialty Chemicals',
  'Conglomerate & Energy'
];

const MCAP_CATEGORIES: ('All' | MarketCapCategory)[] = [
  'All',
  'Large Cap',
  'Mid Cap',
  'Small Cap'
];

export const FiltersBar: React.FC = () => {
  const {
    searchQuery,
    setSearchQuery,
    selectedSector,
    setSelectedSector,
    selectedMarketCap,
    setSelectedMarketCap,
    filterWatchlistOnly,
    setFilterWatchlistOnly
  } = useInvestor();

  const isFiltered = 
    searchQuery !== '' || 
    selectedSector !== 'All' || 
    selectedMarketCap !== 'All' || 
    filterWatchlistOnly;

  const handleClearFilters = () => {
    setSearchQuery('');
    setSelectedSector('All');
    setSelectedMarketCap('All');
    setFilterWatchlistOnly(false);
  };

  return (
    <div className="space-y-3 mb-6">
      
      {/* Search Bar + Market Cap Selector */}
      <div className="flex flex-col sm:flex-row gap-3 items-stretch sm:items-center justify-between">
        
        {/* Search */}
        <div className="relative flex-1">
          <Search className="w-4 h-4 text-slate-500 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search by Symbol (e.g. TATAMOTORS, HAL, DIXON), Company, or Theme..."
            className="w-full bg-slate-900/90 border border-slate-800 text-sm text-slate-100 placeholder-slate-500 pl-10 pr-4 py-2 rounded-xl focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-all"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-500 hover:text-slate-300"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>

        {/* Dropdowns */}
        <div className="flex items-center gap-2">
          
          <select
            value={selectedMarketCap}
            onChange={(e) => setSelectedMarketCap(e.target.value)}
            aria-label="Filter by Market Capitalization"
            className="bg-slate-900/90 border border-slate-800 text-xs sm:text-sm text-slate-300 px-3 py-2 rounded-xl focus:outline-none focus:border-amber-500 cursor-pointer"
          >
            {MCAP_CATEGORIES.map(mcap => (
              <option key={mcap} value={mcap}>
                Market Cap: {mcap}
              </option>
            ))}
          </select>

          {/* Reset Filters */}
          {isFiltered && (
            <button
              onClick={handleClearFilters}
              className="flex items-center gap-1 px-3 py-2 text-xs font-semibold text-rose-400 bg-rose-500/10 border border-rose-500/20 rounded-xl hover:bg-rose-500/20 transition-colors"
            >
              <X className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Reset</span>
            </button>
          )}

        </div>

      </div>

      {/* Sector Pills Horizontal Scroll */}
      <div className="flex items-center gap-2 overflow-x-auto pb-1 no-scrollbar">
        <span className="text-xs text-slate-500 flex items-center gap-1 mr-1">
          <SlidersHorizontal className="w-3 h-3" />
          Sector:
        </span>
        {SECTORS.map(sector => {
          const isSelected = selectedSector === sector;
          return (
            <button
              key={sector}
              onClick={() => setSelectedSector(sector)}
              className={`px-3 py-1 rounded-full text-xs font-medium whitespace-nowrap transition-all ${
                isSelected
                  ? 'bg-amber-500 text-slate-950 font-bold shadow-sm shadow-amber-500/30'
                  : 'bg-slate-900/80 text-slate-400 border border-slate-800 hover:text-slate-200 hover:border-slate-700'
              }`}
            >
              {sector}
            </button>
          );
        })}
      </div>

    </div>
  );
};
