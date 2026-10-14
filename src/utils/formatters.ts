import { HealthStatus } from '../types/investor';

// Format in Indian numbering system (Lakhs and Crores)
export const formatINR = (val: number, compact: boolean = false): string => {
  if (compact) {
    if (Math.abs(val) >= 1000) {
      return `₹${(val / 1).toLocaleString('en-IN', { maximumFractionDigits: 0 })} Cr`;
    }
    return `₹${val.toLocaleString('en-IN', { maximumFractionDigits: 1 })} Cr`;
  }

  return `₹${val.toLocaleString('en-IN', { maximumFractionDigits: 2 })}`;
};

export const formatStockPrice = (val: number): string => {
  return `₹${val.toLocaleString('en-IN', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
};

export const formatPercentage = (val: number): string => {
  const sign = val > 0 ? '+' : '';
  return `${sign}${val.toFixed(2)}%`;
};

export const formatChange = (val: number, isPercent: boolean = false): string => {
  const sign = val > 0 ? '+' : '';
  if (isPercent) {
    return `${sign}${val.toFixed(2)}%`;
  }
  return `${sign}₹${Math.abs(val).toFixed(2)}`;
};

export const getHealthBadge = (status: HealthStatus) => {
  switch (status) {
    case 'outperforming':
      return {
        label: 'Outperforming',
        color: 'text-emerald-400 bg-emerald-500/10 border-emerald-500/20',
        dot: 'bg-emerald-400'
      };
    case 'high_growth':
      return {
        label: 'High Growth',
        color: 'text-cyan-400 bg-cyan-500/10 border-cyan-500/20',
        dot: 'bg-cyan-400'
      };
    case 'in_line':
      return {
        label: 'In-Line',
        color: 'text-blue-400 bg-blue-500/10 border-blue-500/20',
        dot: 'bg-blue-400'
      };
    case 'under_pressure':
      return {
        label: 'Under Margin Pressure',
        color: 'text-amber-400 bg-amber-500/10 border-amber-500/20',
        dot: 'bg-amber-400'
      };
    default:
      return {
        label: 'Neutral',
        color: 'text-slate-400 bg-slate-500/10 border-slate-500/20',
        dot: 'bg-slate-400'
      };
  }
};
