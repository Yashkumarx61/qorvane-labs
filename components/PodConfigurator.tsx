"use client";

import { useState } from "react";
import { Users, Shield, Cpu, Code2, Plus, Minus, ArrowRight, CheckCircle2 } from "lucide-react";

export function PodConfigurator() {
  const [currency, setCurrency] = useState<"INR" | "USD">("INR");
  const [durationMonths, setDurationMonths] = useState<number>(3);

  const [roles, setRoles] = useState<{ [key: string]: number }>({
    fullstack: 2,
    aiSpecialist: 1,
    mobileDev: 0,
    devops: 1,
    qaAutomation: 1,
  });

  const rolePricing: Record<
    string,
    { title: string; desc: string; monthlyINR: number; monthlyUSD: number; icon: any }
  > = {
    fullstack: {
      title: "Senior Full-Stack Engineer",
      desc: "Next.js, React, Node.js, TypeScript, PostgreSQL",
      monthlyINR: 140000,
      monthlyUSD: 2400,
      icon: Code2,
    },
    aiSpecialist: {
      title: "AI / ML Data Architect",
      desc: "Python, LangChain, PyTorch, Vector DBs, RAG",
      monthlyINR: 180000,
      monthlyUSD: 3000,
      icon: Cpu,
    },
    mobileDev: {
      title: "Cross-Platform Mobile Dev",
      desc: "Flutter, React Native, Swift/Kotlin native modules",
      monthlyINR: 135000,
      monthlyUSD: 2200,
      icon: Users,
    },
    devops: {
      title: "DevOps & Cloud Lead",
      desc: "AWS, Docker, Kubernetes, CI/CD, Terraform",
      monthlyINR: 150000,
      monthlyUSD: 2500,
      icon: Shield,
    },
    qaAutomation: {
      title: "QA Automation Engineer",
      desc: "Playwright, Cypress, Jest, API Integration testing",
      monthlyINR: 100000,
      monthlyUSD: 1600,
      icon: CheckCircle2,
    },
  };

  const updateRoleCount = (key: string, delta: number) => {
    setRoles((prev) => {
      const current = prev[key] || 0;
      const updated = Math.max(0, current + delta);
      return { ...prev, [key]: updated };
    });
  };

  // Calculate monthly total
  let totalMonthlyINR = 0;
  let totalMonthlyUSD = 0;
  let totalEngineers = 0;

  Object.entries(roles).forEach(([key, count]) => {
    if (rolePricing[key]) {
      totalMonthlyINR += rolePricing[key].monthlyINR * count;
      totalMonthlyUSD += rolePricing[key].monthlyUSD * count;
      totalEngineers += count;
    }
  });

  const totalContractINR = totalMonthlyINR * durationMonths;
  const totalContractUSD = totalMonthlyUSD * durationMonths;

  return (
    <div className="glass-card rounded-3xl border border-slate-200 p-6 sm:p-10 shadow-xl bg-white">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between pb-6 border-b border-slate-200 gap-4">
        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-brand-600">
            Plug-and-Play Pod Configurator
          </span>
          <h3 className="text-2xl font-bold text-slate-900 mt-1">
            Build Your Custom Engineering Pod
          </h3>
          <p className="text-xs text-slate-600 mt-1">
            Scale up or down dedicated talent managed out of our Dehradun IT Park hub.
          </p>
        </div>

        {/* Currency Switcher */}
        <div className="flex items-center space-x-2">
          <div className="inline-flex p-1 rounded-xl bg-slate-100 border border-slate-200">
            <button
              onClick={() => setCurrency("INR")}
              className={`px-3 py-1 rounded-lg text-xs font-bold transition-all ${
                currency === "INR" ? "bg-white text-brand-600 shadow-sm" : "text-slate-500"
              }`}
            >
              ₹ INR
            </button>
            <button
              onClick={() => setCurrency("USD")}
              className={`px-3 py-1 rounded-lg text-xs font-bold transition-all ${
                currency === "USD" ? "bg-white text-brand-600 shadow-sm" : "text-slate-500"
              }`}
            >
              $ USD
            </button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-6">
        {/* Role Selectors */}
        <div className="lg:col-span-7 space-y-4">
          <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500">
            Select Engineers to Include in Pod
          </h4>

          {Object.entries(rolePricing).map(([key, info]) => {
            const count = roles[key] || 0;
            const IconComp = info.icon;
            return (
              <div
                key={key}
                className={`p-4 rounded-2xl border flex items-center justify-between transition-all ${
                  count > 0
                    ? "border-brand-500/50 bg-brand-500/5"
                    : "border-slate-200"
                }`}
              >
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-xl bg-brand-500/10 text-brand-600 flex items-center justify-center shrink-0">
                    <IconComp className="w-5 h-5" />
                  </div>
                  <div>
                    <h5 className="text-sm font-bold text-slate-900">
                      {info.title}
                    </h5>
                    <p className="text-xs text-slate-500 mt-0.5">
                      {info.desc}
                    </p>
                    <span className="text-[11px] font-semibold text-brand-600 mt-1 block">
                      {currency === "INR"
                        ? `₹${info.monthlyINR.toLocaleString("en-IN")} / mo per dev`
                        : `$${info.monthlyUSD.toLocaleString("en-US")} / mo per dev`}
                    </span>
                  </div>
                </div>

                <div className="flex items-center space-x-3 bg-white p-1.5 rounded-xl border border-slate-200 shadow-sm shrink-0">
                  <button
                    onClick={() => updateRoleCount(key, -1)}
                    disabled={count === 0}
                    className="w-7 h-7 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 disabled:opacity-40 flex items-center justify-center transition-colors"
                  >
                    <Minus className="w-3.5 h-3.5" />
                  </button>
                  <span className="text-sm font-bold text-slate-900 min-w-[20px] text-center">
                    {count}
                  </span>
                  <button
                    onClick={() => updateRoleCount(key, 1)}
                    className="w-7 h-7 rounded-lg bg-brand-600 text-white hover:bg-brand-500 flex items-center justify-center transition-colors shadow-sm"
                  >
                    <Plus className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}

          {/* Duration Selector */}
          <div className="pt-4 border-t border-slate-200">
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
              Engagement Commitment Duration ({durationMonths} Months)
            </label>
            <div className="grid grid-cols-4 gap-2">
              {[1, 3, 6, 12].map((m) => (
                <button
                  key={m}
                  onClick={() => setDurationMonths(m)}
                  className={`py-2 rounded-xl text-xs font-bold border transition-all ${
                    durationMonths === m
                      ? "border-brand-500 bg-brand-600 text-white shadow-md"
                      : "border-slate-200 text-slate-700 hover:border-slate-400"
                  }`}
                >
                  {m} {m === 1 ? "Month" : "Months"}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Pod Summary Card */}
        <div className="lg:col-span-5 p-6 rounded-2xl bg-slate-900 text-white border border-slate-800 flex flex-col justify-between shadow-2xl">
          <div className="space-y-4">
            <div className="text-xs font-bold uppercase tracking-wider text-tealAccent-400">
              Pod Capacity & Velocity Summary
            </div>

            <div className="p-4 rounded-xl bg-slate-800 border border-slate-700 space-y-3">
              <div className="flex items-center justify-between text-xs">
                <span className="text-slate-300">Total Engineering Capacity:</span>
                <span className="font-bold text-white text-sm">{totalEngineers} Full-Time Devs</span>
              </div>
              <div className="flex items-center justify-between text-xs">
                <span className="text-slate-300">Agile Sprint Velocity:</span>
                <span className="font-bold text-tealAccent-400">{totalEngineers * 35} Story Pts / Mo</span>
              </div>
              <div className="flex items-center justify-between text-xs">
                <span className="text-slate-300">Management & QA Lead:</span>
                <span className="font-bold text-emerald-400">Included Free</span>
              </div>
            </div>

            <div className="py-4 border-y border-slate-800">
              <div className="text-xs text-slate-400">Monthly Pod Burn Rate</div>
              <div className="text-3xl font-extrabold text-white mt-0.5">
                {currency === "INR"
                  ? `₹${totalMonthlyINR.toLocaleString("en-IN")} / mo`
                  : `$${totalMonthlyUSD.toLocaleString("en-US")} / mo`}
              </div>

              <div className="mt-3 text-xs text-slate-400 flex items-center justify-between">
                <span>Total Contract ({durationMonths} Mo):</span>
                <span className="font-bold text-white">
                  {currency === "INR"
                    ? `₹${totalContractINR.toLocaleString("en-IN")}`
                    : `$${totalContractUSD.toLocaleString("en-US")}`}
                </span>
              </div>
            </div>
          </div>

          <div className="pt-4">
            <a
              href="/contact?type=pod"
              className="w-full py-3 rounded-xl bg-gradient-to-r from-brand-600 to-tealAccent-600 hover:from-brand-500 hover:to-tealAccent-500 text-white font-semibold text-xs flex items-center justify-center space-x-2 shadow-lg shadow-brand-500/20"
            >
              <span>Deploy This Pod Workspace</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
