"use client";

import Link from "next/link";
import { servicesData } from "@/data/servicesData";
import {
  Globe,
  Smartphone,
  Sparkles,
  BarChart3,
  ShieldCheck,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

export default function ServicesPage() {
  return (
    <div className="pt-32 pb-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-bold uppercase tracking-wider text-brand-600 px-3 py-1 rounded-full bg-brand-500/10 border border-brand-500/20">
            Services & Capabilities
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
            Enterprise Digital Engineering Services
          </h1>
          <p className="text-sm sm:text-base text-slate-600">
            From modern Next.js web applications to custom AI pipelines and 24/7 cloud management, explore our full suite of technical capabilities.
          </p>
        </div>

        <div className="space-y-12">
          {servicesData.map((service, index) => {
            const isEven = index % 2 === 0;
            return (
              <div
                key={service.id}
                id={service.slug}
                className="glass-card p-8 sm:p-12 rounded-3xl border border-slate-200 shadow-xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
              >
                <div className={`lg:col-span-7 space-y-6 ${!isEven ? "lg:order-2" : ""}`}>
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 rounded-2xl bg-brand-500/10 text-brand-600 flex items-center justify-center shrink-0">
                      {service.slug === "web-development" && <Globe className="w-6 h-6" />}
                      {service.slug === "mobile-apps" && <Smartphone className="w-6 h-6" />}
                      {service.slug === "ai-data" && <Sparkles className="w-6 h-6" />}
                      {service.slug === "business-analytics" && <BarChart3 className="w-6 h-6" />}
                      {service.slug === "managed-it" && <ShieldCheck className="w-6 h-6" />}
                    </div>
                    <div>
                      <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
                        {service.title}
                      </h2>
                      <span className="text-xs font-semibold text-brand-600">
                        {service.metrics}
                      </span>
                    </div>
                  </div>

                  <p className="text-sm text-slate-600 leading-relaxed">
                    {service.fullDesc}
                  </p>

                  <div className="space-y-2">
                    <div className="text-xs font-bold uppercase tracking-wider text-slate-500">
                      Core Features:
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {service.features.map((feat) => (
                        <div key={feat} className="flex items-center space-x-2 text-xs text-slate-700">
                          <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-2">
                    <Link
                      href={`/services/${service.slug}`}
                      className="inline-flex items-center space-x-2 px-6 py-3 rounded-xl bg-brand-600 hover:bg-brand-500 text-white font-semibold text-xs shadow-md transition-all"
                    >
                      <span>Explore Technical Architecture</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>

                <div className={`lg:col-span-5 ${!isEven ? "lg:order-1" : ""}`}>
                  <div className="p-6 rounded-2xl bg-slate-900 text-white border border-slate-800 space-y-4">
                    <div className="text-xs font-bold uppercase tracking-wider text-brand-400">
                      Technology Stack
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {service.technologies.map((t) => (
                        <span key={t} className="px-2.5 py-1 rounded-md bg-slate-800 text-xs font-medium text-slate-200">
                          {t}
                        </span>
                      ))}
                    </div>

                    <div className="pt-4 border-t border-slate-800 space-y-2">
                      <div className="text-xs font-bold uppercase tracking-wider text-tealAccent-400">
                        Deliverable Package Includes:
                      </div>
                      <ul className="space-y-1 text-xs text-slate-300 list-disc pl-4">
                        {service.deliverables.map((d) => (
                          <li key={d}>{d}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
