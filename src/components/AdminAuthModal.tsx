import React, { useState } from 'react';
import { 
  X, 
  ShieldCheck, 
  ShieldAlert, 
  Lock, 
  Unlock, 
  KeyRound, 
  Check, 
  AlertCircle,
  Eye,
  EyeOff,
  Mail,
  Send,
  RefreshCw,
  ExternalLink
} from 'lucide-react';
import { useInvestor } from '../context/InvestorContext';

export const AdminAuthModal: React.FC = () => {
  const { 
    isAuthModalOpen, 
    setIsAuthModalOpen, 
    authenticateOwner, 
    changeOwnerPassword,
    sendPasswordRecovery,
    resetPasswordWithOtp,
    recoveryEmail
  } = useInvestor();

  const [passwordInput, setPasswordInput] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [activeTab, setActiveTab] = useState<'login' | 'recovery' | 'change_password'>('login');

  // Change Password state
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [changeStatus, setChangeStatus] = useState<{ success: boolean; message: string } | null>(null);

  // Password Recovery state
  const [isSendingRecovery, setIsSendingRecovery] = useState(false);
  const [recoverySent, setRecoverySent] = useState(false);
  const [recoveryNotice, setRecoveryNotice] = useState('');
  const [otpInput, setOtpInput] = useState('');
  const [resetNewPassword, setResetNewPassword] = useState('');
  const [resetStatus, setResetStatus] = useState<{ success: boolean; message: string } | null>(null);

  if (!isAuthModalOpen) return null;

  const handleLogin = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (!passwordInput) {
      setErrorMessage('Please enter your owner password');
      return;
    }

    const success = authenticateOwner(passwordInput);
    if (success) {
      setPasswordInput('');
      setErrorMessage('');
    } else {
      setErrorMessage('Incorrect password. Please verify and try again.');
    }
  };

  const handleSendRecovery = async () => {
    setIsSendingRecovery(true);
    setRecoveryNotice('');
    try {
      const result = await sendPasswordRecovery();
      setRecoverySent(true);
      setRecoveryNotice(result.message);
    } catch {
      setRecoveryNotice('Failed to dispatch recovery request. Please try again.');
    } finally {
      setIsSendingRecovery(false);
    }
  };

  const handleResetWithOtp = (e: React.FormEvent) => {
    e.preventDefault();
    if (!otpInput.trim()) {
      setResetStatus({ success: false, message: 'Please enter the 6-digit verification code sent to your email.' });
      return;
    }
    if (!resetNewPassword || resetNewPassword.length < 6) {
      setResetStatus({ success: false, message: 'New password must be at least 6 characters.' });
      return;
    }

    const result = resetPasswordWithOtp(otpInput.trim(), resetNewPassword);
    setResetStatus(result);

    if (result.success) {
      setTimeout(() => {
        setActiveTab('login');
        setRecoverySent(false);
        setOtpInput('');
        setResetNewPassword('');
        setResetStatus(null);
      }, 2000);
    }
  };

  const handleChangePassword = (e: React.FormEvent) => {
    e.preventDefault();
    if (newPassword !== confirmPassword) {
      setChangeStatus({ success: false, message: 'New password and confirmation do not match.' });
      return;
    }

    const result = changeOwnerPassword(oldPassword, newPassword);
    setChangeStatus(result);

    if (result.success) {
      setOldPassword('');
      setNewPassword('');
      setConfirmPassword('');
      setTimeout(() => {
        setActiveTab('login');
        setChangeStatus(null);
      }, 1800);
    }
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/85 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-200">
      
      <div 
        className="glass-dropdown w-full max-w-md rounded-3xl border border-slate-700/80 p-6 sm:p-8 relative no-scrollbar shadow-2xl shadow-black/80"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={() => {
            setIsAuthModalOpen(false);
            setErrorMessage('');
            setPasswordInput('');
          }}
          className="absolute top-6 right-6 p-2 rounded-xl text-slate-400 hover:text-white bg-slate-900 border border-slate-800 hover:border-slate-700 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 rounded-2xl bg-amber-500/15 border border-amber-500/40 flex items-center justify-center text-amber-400 shrink-0 shadow-lg shadow-amber-500/10">
            <Lock className="w-6 h-6" />
          </div>
          <div>
            <div className="flex items-center gap-1.5 text-amber-400 text-xs font-bold uppercase tracking-wider">
              <ShieldAlert className="w-3.5 h-3.5" />
              <span>Permission Protected</span>
            </div>
            <h2 className="text-xl font-extrabold text-white tracking-tight">
              Owner Authorization
            </h2>
          </div>
        </div>

        <p className="text-xs text-slate-300 mb-5 leading-relaxed">
          Posting corporate results, concall guidance, and SEBI disclosures is strictly restricted to the authorized administrator to safeguard investors against unauthorized postings.
        </p>

        {/* Navigation Tabs */}
        <div className="flex gap-1.5 p-1 bg-slate-900/80 rounded-xl border border-slate-800 mb-5 text-xs font-semibold">
          <button
            onClick={() => {
              setActiveTab('login');
              setErrorMessage('');
            }}
            className={`flex-1 py-1.5 rounded-lg transition-all flex items-center justify-center gap-1.5 ${
              activeTab === 'login' 
                ? 'bg-amber-500 text-slate-950 font-bold shadow-sm' 
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <KeyRound className="w-3.5 h-3.5" />
            <span>Login</span>
          </button>

          <button
            onClick={() => {
              setActiveTab('recovery');
              setErrorMessage('');
            }}
            className={`flex-1 py-1.5 rounded-lg transition-all flex items-center justify-center gap-1.5 ${
              activeTab === 'recovery' 
                ? 'bg-amber-500 text-slate-950 font-bold shadow-sm' 
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <Mail className="w-3.5 h-3.5" />
            <span>Recovery</span>
          </button>

          <button
            onClick={() => {
              setActiveTab('change_password');
              setErrorMessage('');
            }}
            className={`flex-1 py-1.5 rounded-lg transition-all flex items-center justify-center gap-1.5 ${
              activeTab === 'change_password' 
                ? 'bg-amber-500 text-slate-950 font-bold shadow-sm' 
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Change</span>
          </button>
        </div>

        {/* TAB 1: OWNER LOGIN */}
        {activeTab === 'login' && (
          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <div className="flex items-center justify-between mb-1.5">
                <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider">
                  Owner Password
                </label>
                <button
                  type="button"
                  onClick={() => setActiveTab('recovery')}
                  className="text-xs text-amber-400 hover:underline"
                >
                  Forgot Password?
                </button>
              </div>
              
              <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={passwordInput}
                  onChange={(e) => {
                    setPasswordInput(e.target.value);
                    if (errorMessage) setErrorMessage('');
                  }}
                  autoFocus
                  placeholder="Enter administrator password..."
                  className="w-full bg-slate-950 border border-slate-700/80 focus:border-amber-500 rounded-xl px-4 py-3 text-sm text-white font-mono placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-amber-500/20 pr-10"
                />
                
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-3.5 text-slate-500 hover:text-slate-300 transition-colors"
                >
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>

              {errorMessage && (
                <div className="flex items-center gap-1.5 text-xs text-rose-400 mt-2 font-medium">
                  <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                  <span>{errorMessage}</span>
                </div>
              )}
            </div>

            <div className="flex items-center gap-3 pt-3 border-t border-slate-800">
              <button
                type="button"
                onClick={() => setIsAuthModalOpen(false)}
                className="flex-1 py-2.5 rounded-xl border border-slate-800 text-xs font-semibold text-slate-400 hover:text-white hover:bg-slate-900 transition-colors"
              >
                Cancel
              </button>

              <button
                type="submit"
                className="flex-1 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 text-xs font-bold shadow-lg shadow-amber-500/20 transition-all flex items-center justify-center gap-2"
              >
                <Unlock className="w-4 h-4" />
                <span>Unlock & Post</span>
              </button>
            </div>
          </form>
        )}

        {/* TAB 2: PASSWORD RECOVERY (SENDS TO ketandhumal1987@gmail.com) */}
        {activeTab === 'recovery' && (
          <div className="space-y-4">
            <div className="p-3.5 rounded-xl bg-slate-900/90 border border-slate-800 text-xs text-slate-300">
              <div className="flex items-center gap-2 text-amber-400 font-bold mb-1">
                <Mail className="w-4 h-4" />
                <span>Official Recovery Email</span>
              </div>
              <p className="text-slate-400 text-[11px] mb-2">
                Password reset verification codes are dispatched strictly to your verified recovery address:
              </p>
              <div className="p-2 rounded-lg bg-slate-950 border border-slate-800 font-mono text-amber-300 font-bold text-xs select-all flex items-center justify-between">
                <span>{recoveryEmail}</span>
                <span className="text-[10px] uppercase font-semibold text-emerald-400 bg-emerald-500/10 px-1.5 py-0.5 rounded">
                  Verified
                </span>
              </div>
            </div>

            {!recoverySent ? (
              <div className="space-y-3">
                <button
                  type="button"
                  onClick={handleSendRecovery}
                  disabled={isSendingRecovery}
                  className="w-full py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 text-xs font-bold shadow-md shadow-amber-500/20 transition-all flex items-center justify-center gap-2 disabled:opacity-50"
                >
                  {isSendingRecovery ? <RefreshCw className="w-4 h-4 animate-spin" /> : <Send className="w-4 h-4" />}
                  <span>{isSendingRecovery ? 'Sending Code...' : `Send Recovery Code to ${recoveryEmail}`}</span>
                </button>

                <p className="text-[11px] text-slate-500 text-center">
                  Clicking send will dispatch a secure 6-digit verification code to your mailbox.
                </p>
              </div>
            ) : (
              <form onSubmit={handleResetWithOtp} className="space-y-3 border-t border-slate-800 pt-3">
                {recoveryNotice && (
                  <div className="p-2.5 rounded-xl bg-emerald-500/15 border border-emerald-500/30 text-emerald-300 text-xs flex items-center gap-2">
                    <Check className="w-4 h-4 shrink-0" />
                    <span>{recoveryNotice}</span>
                  </div>
                )}

                <div>
                  <label className="block text-xs font-bold text-slate-300 mb-1">
                    Enter 6-Digit Email Code (OTP)
                  </label>
                  <input
                    type="text"
                    value={otpInput}
                    onChange={(e) => setOtpInput(e.target.value)}
                    placeholder="Enter code from email..."
                    maxLength={6}
                    className="w-full bg-slate-950 border border-slate-700/80 rounded-xl px-3.5 py-2.5 text-xs text-white font-mono text-center tracking-widest text-sm focus:outline-none focus:border-amber-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-300 mb-1">
                    Create New Password
                  </label>
                  <input
                    type="password"
                    value={resetNewPassword}
                    onChange={(e) => setResetNewPassword(e.target.value)}
                    placeholder="Enter new password (min 6 characters)..."
                    className="w-full bg-slate-950 border border-slate-700/80 rounded-xl px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-amber-500"
                  />
                </div>

                {resetStatus && (
                  <div className={`p-2 rounded-xl text-xs flex items-center gap-2 ${
                    resetStatus.success ? 'bg-emerald-500/15 text-emerald-300' : 'bg-rose-500/15 text-rose-300'
                  }`}>
                    {resetStatus.success ? <Check className="w-3.5 h-3.5" /> : <AlertCircle className="w-3.5 h-3.5" />}
                    <span>{resetStatus.message}</span>
                  </div>
                )}

                <div className="flex gap-2 pt-2">
                  <button
                    type="button"
                    onClick={handleSendRecovery}
                    className="py-2 px-3 rounded-xl border border-slate-800 text-xs text-slate-400 hover:text-white"
                  >
                    Resend Code
                  </button>

                  <button
                    type="submit"
                    className="flex-1 py-2 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs rounded-xl shadow-md"
                  >
                    Set New Password & Login
                  </button>
                </div>
              </form>
            )}

            <div className="pt-2 text-center">
              <button
                type="button"
                onClick={() => setActiveTab('login')}
                className="text-xs text-slate-400 hover:text-white"
              >
                &larr; Back to Password Login
              </button>
            </div>
          </div>
        )}

        {/* TAB 3: CHANGE PASSWORD */}
        {activeTab === 'change_password' && (
          <form onSubmit={handleChangePassword} className="space-y-3.5">
            <div>
              <label className="block text-xs font-bold text-slate-300 mb-1">Current Password</label>
              <input
                type="password"
                value={oldPassword}
                onChange={(e) => setOldPassword(e.target.value)}
                placeholder="Enter current password..."
                className="w-full bg-slate-950 border border-slate-700/80 rounded-xl px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-amber-500"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-300 mb-1">New Password</label>
              <input
                type="password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                placeholder="Enter at least 6 characters..."
                className="w-full bg-slate-950 border border-slate-700/80 rounded-xl px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-amber-500"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-300 mb-1">Confirm New Password</label>
              <input
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder="Re-enter new password..."
                className="w-full bg-slate-950 border border-slate-700/80 rounded-xl px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-amber-500"
              />
            </div>

            {changeStatus && (
              <div className={`p-2.5 rounded-xl border text-xs flex items-center gap-2 ${
                changeStatus.success 
                  ? 'bg-emerald-500/15 border-emerald-500/40 text-emerald-300' 
                  : 'bg-rose-500/15 border-rose-500/40 text-rose-300'
              }`}>
                {changeStatus.success ? <Check className="w-4 h-4 shrink-0" /> : <AlertCircle className="w-4 h-4 shrink-0" />}
                <span>{changeStatus.message}</span>
              </div>
            )}

            <div className="flex items-center gap-3 pt-3 border-t border-slate-800">
              <button
                type="button"
                onClick={() => setActiveTab('login')}
                className="flex-1 py-2.5 rounded-xl border border-slate-800 text-xs font-semibold text-slate-400 hover:text-white hover:bg-slate-900 transition-colors"
              >
                Back
              </button>

              <button
                type="submit"
                className="flex-1 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 text-xs font-bold shadow-lg shadow-amber-500/20 transition-all"
              >
                Save Password
              </button>
            </div>
          </form>
        )}

      </div>

    </div>
  );
};
