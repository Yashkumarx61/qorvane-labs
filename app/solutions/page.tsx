"use client";

import { PodConfigurator } from "@/components/PodConfigurator";
import Link from "next/link";
import {
  Briefcase,
  Users,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";

export default function SolutionsPage() {
  return (
    <div className="pt-32 pb-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-xs font-bold uppercase tracking-wider text-brand-600 px-3 py-1 rounded-full bg-brand-500/10 border border-brand-500/20">
            Flexible Collaboration Models
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
            Engagement Models & Pod Configurator
          </h1>
          <p className="text-sm sm:text-base text-slate-600">
            Whether you need a turn-key web app delivery or a dedicated pod of senior engineers, choose the model that fits your velocity and budget.
          </p>
        </div>

        {/* Detailed Comparison Table / Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Card 1: Fixed Scope */}
          <div className="glass-card p-8 sm:p-10 rounded-3xl border border-slate-200 space-y-6 shadow-xl">
            <div className="w-12 h-12 rounded-2xl bg-brand-500/10 text-brand-600 flex items-center justify-center">
              <Briefcase className="w-6 h-6" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-slate-900">
                Fixed-Scope Project Delivery
              </h2>
              <p className="text-xs text-slate-600 mt-1">
                Turnkey development with guaranteed scope, timeline, and budget.
              </p>
            </div>

            <div className="space-y-3 pt-2 text-xs">
              <div className="p-3 rounded-xl bg-slate-100 border border-slate-200">
                <span className="font-semibold text-slate-900">Best For:</span>
                <span className="text-slate-600 ml-1">
                  MVPs, corporate websites, e-commerce stores, and well-defined portal redesigns.
                </span>
              </div>
              <div className="p-3 rounded-xl bg-slate-100 border border-slate-200">
                <span className="font-semibold text-slate-900">Billing Model:</span>
                <span className="text-slate-600 ml-1">
                  Milestone-based payments (25% Upfront, 50% Beta, 25% Production Launch).
                </span>
              </div>
              <div className="p-3 rounded-xl bg-slate-100 border border-slate-200">
                <span className="font-semibold text-slate-900">Project Ownership:</span>
                <span className="text-slate-600 ml-1">
                  Qorvane Labs PM handles sprint management & delivery sign-off.
                </span>
              </div>
            </div>

            <ul className="space-y-2 text-xs text-slate-700 pt-2">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>Zero budget overflow risk</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>30-day post-launch bug warranty</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>Complete IP & codebase handover</span>
              </li>
            </ul>

            <Link
              href="/contact?model=fixed"
              className="w-full py-3 rounded-xl bg-slate-900 text-white text-xs font-bold flex items-center justify-center space-x-2"
            >
              <span>Get Fixed Scope Estimate</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Card 2: Dedicated Pods */}
          <div className="glass-card p-8 sm:p-10 rounded-3xl border border-brand-500/40 bg-brand-500/5 space-y-6 shadow-xl">
            <div className="w-12 h-12 rounded-2xl bg-tealAccent-500/10 text-tealAccent-600 flex items-center justify-center">
              <Users className="w-6 h-6" />
            </div>
            <div>
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold text-slate-900">
                  Dedicated Engineering Pods
                </h2>
                <span className="px-3 py-1 rounded-full bg-brand-600 text-white text-[10px] font-bold uppercase">
                  Agile Pods
                </span>
              </div>
              <p className="text-xs text-slate-600 mt-1">
                Full-time developer team extension managed out of Dehradun IT Park hub.
              </p>
            </div>

            <div className="space-y-3 pt-2 text-xs">
              <div className="p-3 rounded-xl bg-slate-100 border border-slate-200">
                <span className="font-semibold text-slate-900">Best For:</span>
                <span className="text-slate-600 ml-1">
                  Fast-scaling SaaS platforms, evolving AI pipelines, and continuous product roadmaps.
                </span>
              </div>
              <div className="p-3 rounded-xl bg-slate-100 border border-slate-200">
                <span className="font-semibold text-slate-900">Billing Model:</span>
                <span className="text-slate-600 ml-1">
                  Flat monthly rate per engineer with zero hidden HR overhead.
                </span>
              </div>
              <div className="p-3 rounded-xl bg-slate-100 border border-slate-200">
                <span className="font-semibold text-slate-900">Direct Access:</span>
                <span className="text-slate-600 ml-1">
                  Direct Slack/Teams channel, daily Jira standups, GitHub commits.
                </span>
              </div>
            </div>

            <ul className="space-y-2 text-xs text-slate-700 pt-2">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-brand-500 shrink-0" />
                <span>Pivot requirements with zero change-order fees</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-brand-500 shrink-0" />
                <span>Senior technical lead supervision included</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-brand-500 shrink-0" />
                <span>Flexible 2-week notice scaling</span>
              </li>
            </ul>

            <a
              href="#configurator"
              className="w-full py-3 rounded-xl bg-gradient-to-r from-brand-600 to-tealAccent-600 text-white text-xs font-bold flex items-center justify-center space-x-2 shadow-lg"
            >
              <span>Configure Your Pod Below</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Interactive Configurator Section */}
        <div id="configurator" className="pt-8">
          <PodConfigurator />
        </div>
      </div>
    </div>
  );
}
