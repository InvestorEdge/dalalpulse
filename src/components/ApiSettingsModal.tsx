import React, { useState } from 'react';
import { 
  X, 
  Key, 
  Zap, 
  Radio, 
  Clock, 
  Check, 
  AlertCircle, 
  ExternalLink,
  ShieldAlert,
  Server
} from 'lucide-react';
import { useInvestor } from '../context/InvestorContext';

export const ApiSettingsModal: React.FC<{ isOpen: boolean; onClose: () => void }> = ({ isOpen, onClose }) => {
  const { 
    dataSourceMode, 
    setDataSourceMode, 
    apiKey, 
    setApiKey,
    isTickSimulatorActive,
    setIsTickSimulatorActive
  } = useInvestor();

  const [tempApiKey, setTempApiKey] = useState(apiKey || '');
  const [savedSuccess, setSavedSuccess] = useState(false);

  if (!isOpen) return null;

  const handleSave = () => {
    setApiKey(tempApiKey.trim());
    setSavedSuccess(true);
    setTimeout(() => setSavedSuccess(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-200">
      
      <div 
        className="glass-dropdown w-full max-w-xl rounded-3xl border border-slate-700/80 p-6 sm:p-8 relative no-scrollbar"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 rounded-xl text-slate-400 hover:text-white bg-slate-900 border border-slate-800 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-2 text-amber-400 text-xs font-bold uppercase tracking-wider mb-1">
          <Server className="w-4 h-4" />
          <span>Market Data Feeds & API Configuration</span>
        </div>
        <h2 className="text-2xl font-extrabold text-white tracking-tight mb-4">
          Live Data Feed Settings
        </h2>

        {/* Market Hours Notice */}
        <div className="p-3.5 rounded-xl bg-amber-500/10 border border-amber-500/30 text-xs text-amber-200 mb-6 flex items-start gap-2.5">
          <AlertCircle className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
          <div>
            <strong className="text-white block mb-0.5">Indian Exchange Trading Hours Notice:</strong>
            <span>
              NSE & BSE regular trading is active <strong>Monday to Friday, 9:15 AM – 3:30 PM IST</strong>. Outside these hours, official exchanges are closed. Turn on the <strong>Live Ticking Simulator</strong> below to experience real-time sub-second price fluctuations and green/red tick updates 24/7!
            </span>
          </div>
        </div>

        {/* Data Source Selector */}
        <div className="space-y-3 mb-6">
          <label className="block text-xs font-bold uppercase tracking-wider text-slate-400">
            Select Active Data Feed Mode
          </label>

          {/* Mode 1: Official NSE / BSE Direct Live Feed (Default & Recommended) */}
          <div 
            onClick={() => {
              setDataSourceMode('official_delayed');
              setIsTickSimulatorActive(false);
            }}
            className={`p-4 rounded-xl border cursor-pointer transition-all ${
              dataSourceMode === 'official_delayed'
                ? 'bg-emerald-500/15 border-emerald-500/50 shadow-md ring-1 ring-emerald-500/30'
                : 'bg-slate-900/60 border-slate-800 hover:border-slate-700'
            }`}
          >
            <div className="flex items-center justify-between mb-1">
              <div className="flex items-center gap-2">
                <span className="p-1.5 rounded-lg bg-emerald-500/20 text-emerald-400">
                  <Server className="w-4 h-4" />
                </span>
                <span className="font-bold text-sm text-white">Direct Live NSE & BSE Exchange Feed (Recommended)</span>
              </div>
              <span className="text-[10px] uppercase font-bold px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300">
                Live & Verified
              </span>
            </div>
            <p className="text-xs text-slate-300 pl-8">
              Pulls genuine live exchange quotes directly from National Stock Exchange (NSE) and Bombay Stock Exchange (BSE). Auto-syncs every 25s with official intraday ticks and closing LTP settlement.
            </p>
          </div>

          {/* Mode 2: Broker / Provider API Key */}
          <div 
            onClick={() => setDataSourceMode('custom_api')}
            className={`p-4 rounded-xl border cursor-pointer transition-all ${
              dataSourceMode === 'custom_api'
                ? 'bg-purple-500/15 border-purple-500/50 shadow-md ring-1 ring-purple-500/30'
                : 'bg-slate-900/60 border-slate-800 hover:border-slate-700'
            }`}
          >
            <div className="flex items-center justify-between mb-1">
              <div className="flex items-center gap-2">
                <span className="p-1.5 rounded-lg bg-purple-500/20 text-purple-400">
                  <Key className="w-4 h-4" />
                </span>
                <span className="font-bold text-sm text-white">Connect Indian Broker API (Zerodha / Upstox / Alpha Vantage)</span>
              </div>
              <span className="text-[10px] uppercase font-bold px-2 py-0.5 rounded bg-purple-500/20 text-purple-300">
                PRO / Broker
              </span>
            </div>
            <p className="text-xs text-slate-300 pl-8">
              Connect your Zerodha Kite Connect, Upstox, Angel One SmartAPI, or Alpha Vantage API key for dedicated institutional streaming sockets.
            </p>

            {dataSourceMode === 'custom_api' && (
              <div className="mt-3 pt-3 border-t border-slate-800 space-y-2" onClick={(e) => e.stopPropagation()}>
                <label className="block text-[11px] text-slate-400">API Key / Token</label>
                <div className="flex gap-2">
                  <input
                    type="password"
                    value={tempApiKey}
                    onChange={(e) => setTempApiKey(e.target.value)}
                    placeholder="Enter Broker / Data API Key..."
                    className="flex-1 bg-slate-950 border border-slate-800 rounded-lg p-2 text-xs text-white focus:outline-none focus:border-amber-500"
                  />
                  <button
                    onClick={handleSave}
                    className="px-3 py-1.5 bg-amber-500 text-slate-950 font-bold rounded-lg text-xs"
                  >
                    {savedSuccess ? 'Saved!' : 'Save Key'}
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Mode 3: Offline Demo Simulator */}
          <div 
            onClick={() => {
              setDataSourceMode('simulator');
              setIsTickSimulatorActive(true);
            }}
            className={`p-4 rounded-xl border cursor-pointer transition-all ${
              dataSourceMode === 'simulator'
                ? 'bg-amber-500/15 border-amber-500/50 shadow-md ring-1 ring-amber-500/30'
                : 'bg-slate-900/60 border-slate-800 hover:border-slate-700'
            }`}
          >
            <div className="flex items-center justify-between mb-1">
              <div className="flex items-center gap-2">
                <span className="p-1.5 rounded-lg bg-amber-500/20 text-amber-400">
                  <Zap className="w-4 h-4" />
                </span>
                <span className="font-bold text-sm text-white">Offline Market Simulator (Weekend / Demo Testing)</span>
              </div>
              <span className="text-[10px] uppercase font-bold px-2 py-0.5 rounded bg-slate-800 text-slate-400">
                Demo Only
              </span>
            </div>
            <p className="text-xs text-slate-300 pl-8">
              Simulates synthetic micro-ticks for UI testing when markets are closed or when developing offline without network connection.
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="flex justify-end gap-3 pt-4 border-t border-slate-800">
          <button
            onClick={onClose}
            className="px-5 py-2.5 rounded-xl text-xs font-bold bg-amber-500 hover:bg-amber-400 text-slate-950 transition-all shadow-md shadow-amber-500/30"
          >
            Done
          </button>
        </div>

      </div>

    </div>
  );
};

