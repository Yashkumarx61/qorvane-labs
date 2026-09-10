"use client";

import { useState } from "react";
import {
  Calculator,
  CheckCircle2,
  DollarSign,
  IndianRupee,
  Clock,
  Sparkles,
  ArrowRight,
  RotateCcw,
  Send,
  Layers,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function ProjectEstimator() {
  const [currency, setCurrency] = useState<"INR" | "USD">("INR");
  const [step, setStep] = useState(1);

  // Form selections
  const [projectType, setProjectType] = useState<string>("web");
  const [selectedFeatures, setSelectedFeatures] = useState<string[]>([
    "auth",
    "payments",
  ]);
  const [timelineSpeed, setTimelineSpeed] = useState<string>("standard");

  const [submitted, setSubmitted] = useState(false);
  const [contactEmail, setContactEmail] = useState("");

  // Base pricing configurations
  const basePrices: Record<string, { inr: number; usd: number; weeks: number }> = {
    web: { inr: 150000, usd: 2500, weeks: 4 },
    mobile: { inr: 220000, usd: 3500, weeks: 5 },
    ai: { inr: 300000, usd: 4500, weeks: 6 },
    analytics: { inr: 180000, usd: 2800, weeks: 4 },
    ecosystem: { inr: 500000, usd: 7500, weeks: 8 },
  };

  const featurePricing: Record<
    string,
    { title: string; inr: number; usd: number; weeks: number }
  > = {
    auth: { title: "Role-Based Auth & SSO", inr: 25000, usd: 400, weeks: 0.5 },
    payments: { title: "Payment Gateway (Stripe/Razorpay)", inr: 35000, usd: 500, weeks: 0.5 },
    aiAgent: { title: "Custom RAG & LLM Integration", inr: 90000, usd: 1200, weeks: 1.5 },
    realtime: { title: "WebSocket Real-time Telemetry", inr: 45000, usd: 700, weeks: 1 },
    offline: { title: "Offline PWA & Local Sync", inr: 40000, usd: 600, weeks: 1 },
    cms: { title: "Headless CMS & Admin Panel", inr: 30000, usd: 450, weeks: 0.5 },
  };

  const speedMultipliers: Record<string, { multiplier: number; weekFactor: number; label: string }> = {
    standard: { multiplier: 1.0, weekFactor: 1.0, label: "Standard Delivery (Normal Velocity)" },
    accelerated: { multiplier: 1.25, weekFactor: 0.7, label: "Accelerated Sprint (-30% Time)" },
    pod: { multiplier: 1.5, weekFactor: 0.5, label: "Dedicated Pod (2x Velocity & Priority)" },
  };

  // Calculate totals
  const base = basePrices[projectType] || basePrices.web;
  let totalINR = base.inr;
  let totalUSD = base.usd;
  let totalWeeks = base.weeks;

  selectedFeatures.forEach((fKey) => {
    if (featurePricing[fKey]) {
      totalINR += featurePricing[fKey].inr;
      totalUSD += featurePricing[fKey].usd;
      totalWeeks += featurePricing[fKey].weeks;
    }
  });

  const speedInfo = speedMultipliers[timelineSpeed] || speedMultipliers.standard;
  totalINR = Math.round(totalINR * speedInfo.multiplier);
  totalUSD = Math.round(totalUSD * speedInfo.multiplier);
  totalWeeks = Math.max(2, Math.round(totalWeeks * speedInfo.weekFactor));

  const toggleFeature = (key: string) => {
    if (selectedFeatures.includes(key)) {
      setSelectedFeatures(selectedFeatures.filter((item) => item !== key));
    } else {
      setSelectedFeatures([...selectedFeatures, key]);
    }
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (contactEmail) {
      setSubmitted(true);
    }
  };

  return (
    <section id="estimator" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-brand-500/10 text-brand-600 dark:text-brand-400 text-xs font-semibold uppercase tracking-wider mb-4 border border-brand-500/20">
            <Calculator className="w-3.5 h-3.5" />
            <span>Interactive Project Estimator</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Estimate Your Project Scope, Budget & Delivery Timeline
          </h2>
          <p className="mt-3 text-slate-600 dark:text-slate-400 text-sm sm:text-base">
            Get an instant, transparent estimate for your custom web app, mobile build, or AI integration. Tailored for both Indian SMBs and global clients.
          </p>

          {/* Currency Switcher */}
          <div className="mt-6 inline-flex items-center p-1 rounded-xl bg-slate-200/80 dark:bg-slate-800/80 border border-slate-300 dark:border-slate-700">
            <button
              onClick={() => setCurrency("INR")}
              className={`flex items-center space-x-1.5 px-4 py-1.5 rounded-lg text-xs font-bold transition-all ${
                currency === "INR"
                  ? "bg-white dark:bg-slate-900 text-brand-600 dark:text-brand-400 shadow-md"
                  : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
              }`}
            >
              <IndianRupee className="w-3.5 h-3.5" />
              <span>INR (₹ India)</span>
            </button>
            <button
              onClick={() => setCurrency("USD")}
              className={`flex items-center space-x-1.5 px-4 py-1.5 rounded-lg text-xs font-bold transition-all ${
                currency === "USD"
                  ? "bg-white dark:bg-slate-900 text-brand-600 dark:text-brand-400 shadow-md"
                  : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
              }`}
            >
              <DollarSign className="w-3.5 h-3.5" />
              <span>USD ($ International)</span>
            </button>
          </div>
        </div>

        {/* Main Interactive Card */}
        <div className="glass-card rounded-3xl border border-slate-200 dark:border-slate-800 p-6 sm:p-10 shadow-2xl grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left Column: Interactive Steps */}
          <div className="lg:col-span-7 space-y-6">
            {/* Step Indicators */}
            <div className="flex items-center space-x-2 border-b border-slate-200 dark:border-slate-800 pb-4 text-xs font-semibold text-slate-500">
              <button
                onClick={() => setStep(1)}
                className={`flex items-center gap-1.5 px-3 py-1 rounded-lg transition-colors ${
                  step === 1 ? "bg-brand-500/10 text-brand-600 dark:text-brand-400" : ""
                }`}
              >
                <span className="w-5 h-5 rounded-full bg-slate-200 dark:bg-slate-800 flex items-center justify-center text-[10px]">1</span>
                <span>Project Scope</span>
              </button>
              <span>/</span>
              <button
                onClick={() => setStep(2)}
                className={`flex items-center gap-1.5 px-3 py-1 rounded-lg transition-colors ${
                  step === 2 ? "bg-brand-500/10 text-brand-600 dark:text-brand-400" : ""
                }`}
              >
                <span className="w-5 h-5 rounded-full bg-slate-200 dark:bg-slate-800 flex items-center justify-center text-[10px]">2</span>
                <span>Key Modules</span>
              </button>
              <span>/</span>
              <button
                onClick={() => setStep(3)}
                className={`flex items-center gap-1.5 px-3 py-1 rounded-lg transition-colors ${
                  step === 3 ? "bg-brand-500/10 text-brand-600 dark:text-brand-400" : ""
                }`}
              >
                <span className="w-5 h-5 rounded-full bg-slate-200 dark:bg-slate-800 flex items-center justify-center text-[10px]">3</span>
                <span>Velocity</span>
              </button>
            </div>

            {/* Step 1: Core Type */}
            {step === 1 && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-4">
                <h3 className="text-base font-bold text-slate-900 dark:text-white">
                  Step 1: Select Primary Deliverable
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {[
                    { id: "web", title: "Custom Web Application", sub: "Next.js, SSR, Enterprise Web" },
                    { id: "mobile", title: "Mobile App (iOS/Android)", sub: "Flutter / React Native" },
                    { id: "ai", title: "AI Model & RAG Pipeline", sub: "LLM Fine-tuning & Agents" },
                    { id: "analytics", title: "Business Analytics & BI", sub: "Real-time PowerBI / Dashboards" },
                    { id: "ecosystem", title: "Full Digital Ecosystem", sub: "Web + Mobile + AI Integration" },
                  ].map((item) => (
                    <button
                      key={item.id}
                      onClick={() => setProjectType(item.id)}
                      className={`p-4 rounded-2xl border text-left transition-all ${
                        projectType === item.id
                          ? "border-brand-500 bg-brand-500/10 shadow-md"
                          : "border-slate-200 dark:border-slate-800 hover:border-slate-400"
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <h4 className="text-sm font-bold text-slate-900 dark:text-white">
                          {item.title}
                        </h4>
                        {projectType === item.id && (
                          <CheckCircle2 className="w-4 h-4 text-brand-600 dark:text-brand-400" />
                        )}
                      </div>
                      <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">{item.sub}</p>
                    </button>
                  ))}
                </div>
                <div className="pt-2 flex justify-end">
                  <button
                    onClick={() => setStep(2)}
                    className="px-5 py-2.5 rounded-xl bg-brand-600 text-white text-xs font-semibold flex items-center space-x-1 hover:bg-brand-500"
                  >
                    <span>Next: Choose Modules</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </motion.div>
            )}

            {/* Step 2: Feature Modules */}
            {step === 2 && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-4">
                <h3 className="text-base font-bold text-slate-900 dark:text-white">
                  Step 2: Add Modular Capability Requirements
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {Object.entries(featurePricing).map(([key, info]) => {
                    const isChecked = selectedFeatures.includes(key);
                    return (
                      <button
                        key={key}
                        onClick={() => toggleFeature(key)}
                        className={`p-3.5 rounded-xl border text-left flex items-start justify-between transition-all ${
                          isChecked
                            ? "border-brand-500 bg-brand-500/10 shadow-sm"
                            : "border-slate-200 dark:border-slate-800 hover:border-slate-400"
                        }`}
                      >
                        <div>
                          <span className="text-xs font-semibold text-slate-900 dark:text-white block">
                            {info.title}
                          </span>
                          <span className="text-[11px] text-slate-500 mt-0.5 block">
                            + {currency === "INR" ? `₹${info.inr.toLocaleString("en-IN")}` : `$${info.usd}`}
                          </span>
                        </div>
                        <div
                          className={`w-5 h-5 rounded-md border flex items-center justify-center ${
                            isChecked ? "bg-brand-600 border-brand-600 text-white" : "border-slate-300 dark:border-slate-700"
                          }`}
                        >
                          {isChecked && <CheckCircle2 className="w-3.5 h-3.5" />}
                        </div>
                      </button>
                    );
                  })}
                </div>
                <div className="pt-2 flex justify-between">
                  <button
                    onClick={() => setStep(1)}
                    className="px-4 py-2 rounded-xl text-xs font-medium text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800"
                  >
                    Back
                  </button>
                  <button
                    onClick={() => setStep(3)}
                    className="px-5 py-2.5 rounded-xl bg-brand-600 text-white text-xs font-semibold flex items-center space-x-1 hover:bg-brand-500"
                  >
                    <span>Next: Select Velocity</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </motion.div>
            )}

            {/* Step 3: Velocity & Speed */}
            {step === 3 && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-4">
                <h3 className="text-base font-bold text-slate-900 dark:text-white">
                  Step 3: Delivery Speed & Team Allocation
                </h3>
                <div className="space-y-3">
                  {Object.entries(speedMultipliers).map(([key, info]) => (
                    <button
                      key={key}
                      onClick={() => setTimelineSpeed(key)}
                      className={`w-full p-4 rounded-xl border text-left flex items-center justify-between transition-all ${
                        timelineSpeed === key
                          ? "border-brand-500 bg-brand-500/10 shadow-sm"
                          : "border-slate-200 dark:border-slate-800 hover:border-slate-400"
                      }`}
                    >
                      <div>
                        <h4 className="text-xs font-bold text-slate-900 dark:text-white">
                          {info.label}
                        </h4>
                        <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">
                          {key === "standard" && "Dedicated agile sprints with standard code reviews."}
                          {key === "accelerated" && "Parallel sprint tracks to fast-track launch."}
                          {key === "pod" && "Dedicated Dehradun pod developers assigned solely to your project."}
                        </p>
                      </div>
                      {timelineSpeed === key && (
                        <CheckCircle2 className="w-5 h-5 text-brand-600 dark:text-brand-400 shrink-0" />
                      )}
                    </button>
                  ))}
                </div>
                <div className="pt-2 flex justify-between">
                  <button
                    onClick={() => setStep(2)}
                    className="px-4 py-2 rounded-xl text-xs font-medium text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800"
                  >
                    Back
                  </button>
                </div>
              </motion.div>
            )}
          </div>

          {/* Right Column: Live Estimate Summary Box */}
          <div className="lg:col-span-5 p-6 rounded-2xl bg-slate-900 text-white flex flex-col justify-between shadow-xl relative overflow-hidden border border-slate-800">
            <div className="absolute top-0 right-0 w-32 h-32 bg-brand-500/10 rounded-full blur-2xl pointer-events-none" />

            <div>
              <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                <span className="text-xs font-bold uppercase tracking-wider text-brand-400 flex items-center gap-1.5">
                  <Sparkles className="w-4 h-4" /> Live Estimate Summary
                </span>
                <button
                  onClick={() => {
                    setProjectType("web");
                    setSelectedFeatures(["auth", "payments"]);
                    setTimelineSpeed("standard");
                    setStep(1);
                  }}
                  className="text-[11px] text-slate-400 hover:text-white flex items-center gap-1"
                >
                  <RotateCcw className="w-3 h-3" /> Reset
                </button>
              </div>

              {/* Price Numbers Display */}
              <div className="py-6">
                <div className="text-xs text-slate-400 uppercase font-semibold tracking-wider">
                  Estimated Project Investment
                </div>
                <div className="text-3xl sm:text-4xl font-extrabold text-white mt-1 flex items-baseline gap-2">
                  <span>
                    {currency === "INR"
                      ? `₹${totalINR.toLocaleString("en-IN")}`
                      : `$${totalUSD.toLocaleString("en-US")}`}
                  </span>
                  <span className="text-xs font-normal text-slate-400">
                    ({currency === "INR" ? "INR + GST" : "USD Flat"})
                  </span>
                </div>

                <div className="mt-4 pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs">
                  <span className="text-slate-400 flex items-center gap-1.5">
                    <Clock className="w-4 h-4 text-tealAccent-400" />
                    Estimated Timeline:
                  </span>
                  <span className="font-bold text-tealAccent-400 text-sm">
                    ~ {totalWeeks} Weeks
                  </span>
                </div>
              </div>

              {/* Scope Breakdown list */}
              <div className="space-y-2 py-3 border-t border-slate-800 text-xs">
                <div className="text-slate-400 font-medium">Included Specifications:</div>
                <ul className="space-y-1 text-slate-300 pl-4 list-disc">
                  <li>Base: {projectType.toUpperCase()} Core Architecture</li>
                  <li>
                    {selectedFeatures.length} Modular Features ({selectedFeatures.join(", ")})
                  </li>
                  <li>Delivery Mode: {speedInfo.label.split(" ")[0]}</li>
                  <li>Full source code ownership & CI/CD deployment</li>
                </ul>
              </div>
            </div>

            {/* Instant Inbound Request */}
            <div className="pt-4 border-t border-slate-800">
              {submitted ? (
                <div className="p-3 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs rounded-xl flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 shrink-0 text-emerald-400" />
                  <span>Estimate sent! Check your inbox for detailed PDF proposal.</span>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit} className="space-y-2">
                  <label className="block text-[11px] text-slate-400 font-medium">
                    Lock in this estimate & get a detailed technical PDF:
                  </label>
                  <div className="flex gap-2">
                    <input
                      type="email"
                      required
                      placeholder="Enter work email"
                      value={contactEmail}
                      onChange={(e) => setContactEmail(e.target.value)}
                      className="w-full px-3 py-2 rounded-xl bg-slate-800 border border-slate-700 text-white text-xs focus:outline-none focus:ring-2 focus:ring-brand-500"
                    />
                    <button
                      type="submit"
                      className="px-3.5 py-2 rounded-xl bg-brand-500 hover:bg-brand-400 text-white font-semibold text-xs shrink-0 flex items-center gap-1"
                    >
                      <span>Send PDF</span>
                      <Send className="w-3 h-3" />
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
