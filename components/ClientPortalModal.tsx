"use client";

import { useState } from "react";
import { siteContact } from "@/data/contactData";
import { X, Lock, Key, ArrowRight, ShieldCheck, Building } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface ClientPortalModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ClientPortalModal({ isOpen, onClose }: ClientPortalModalProps) {
  const [tenantId, setTenantId] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (!tenantId || !password) {
      setErrorMsg("Please enter both Client Workspace ID and Password.");
      return;
    }
    setErrorMsg("Demo Portal Access: Verification required. Contact your Qorvane Labs account manager for SSO key.");
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-slate-950/70 backdrop-blur-md"
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative w-full max-w-md bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl shadow-2xl overflow-hidden z-10 p-6 sm:p-8"
          >
            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center space-x-2 text-brand-600 dark:text-brand-400 text-xs font-semibold uppercase tracking-wider mb-2">
              <ShieldCheck className="w-4 h-4" />
              <span>Secure Client Portal</span>
            </div>

            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-1">
              Client Portal Login
            </h2>
            <p className="text-xs text-slate-600 dark:text-slate-400 mb-6">
              Access real-time project milestone tracking, Jira telemetry, and sprint deliverables.
            </p>

            <form onSubmit={handleLogin} className="space-y-4">
              <div>
                <label className="block text-xs font-medium text-slate-700 dark:text-slate-300 mb-1 flex items-center gap-1">
                  <Building className="w-3.5 h-3.5 text-slate-400" />
                  Client Workspace ID / Org Code
                </label>
                <input
                  type="text"
                  placeholder="e.g. REDCHILLI-IN or BASKING-D2C"
                  value={tenantId}
                  onChange={(e) => {
                    setTenantId(e.target.value);
                    setErrorMsg("");
                  }}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/60 text-slate-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-brand-500"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-700 dark:text-slate-300 mb-1 flex items-center gap-1">
                  <Lock className="w-3.5 h-3.5 text-slate-400" />
                  Password / Access Token
                </label>
                <input
                  type="password"
                  placeholder="••••••••••••"
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                    setErrorMsg("");
                  }}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/60 text-slate-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-brand-500"
                />
              </div>

              {errorMsg && (
                <div className="p-3 bg-amber-500/10 border border-amber-500/20 text-amber-600 dark:text-amber-400 text-xs rounded-xl">
                  {errorMsg}
                </div>
              )}

              <button
                type="submit"
                className="w-full py-3 px-5 rounded-xl bg-slate-900 dark:bg-slate-100 hover:bg-slate-800 dark:hover:bg-white text-white dark:text-slate-900 font-semibold text-sm shadow-md flex items-center justify-center space-x-2 transition-all duration-200"
              >
                <span>Authenticate & Access Workspace</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <div className="pt-2 text-center text-xs text-slate-500 dark:text-slate-400">
                Need single sign-on (SSO) help? <br />
                Email{" "}
                <a
                  href={`mailto:${siteContact.email}`}
                  className="text-brand-600 dark:text-brand-400 font-medium hover:underline"
                >
                  {siteContact.email}
                </a>
              </div>
            </form>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
