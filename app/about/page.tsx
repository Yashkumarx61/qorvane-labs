"use client";

import Image from "next/image";
import Link from "next/link";
import {
  MapPin,
  Building2,
  Users,
  Code2,
  ShieldCheck,
  Award,
  Globe,
  ArrowRight,
  Heart,
  CheckCircle2,
} from "lucide-react";

export default function AboutPage() {
  return (
    <div className="pt-32 pb-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Title Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-xs font-bold uppercase tracking-wider text-brand-600 dark:text-brand-400 px-3 py-1 rounded-full bg-brand-500/10 border border-brand-500/20">
            About Qorvane Labs
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Engineering Culture Built on Precision & Purpose
          </h1>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400">
            We are a team of software architects, data engineers, and product designers headquartered near IT Park, Dehradun—building high-velocity digital solutions for global and Indian brands.
          </p>
        </div>

        {/* Culture & Pillars grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="glass-card p-8 rounded-3xl border border-slate-200 dark:border-slate-800 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-brand-500/10 text-brand-600 dark:text-brand-400 flex items-center justify-center">
              <Code2 className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-slate-900 dark:text-white">
              Clean, Scalable Architecture
            </h3>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
              We write self-documenting, type-safe code designed for long-term maintainability. Zero superficial patches or technical debt shortcuts.
            </p>
          </div>

          <div className="glass-card p-8 rounded-3xl border border-slate-200 dark:border-slate-800 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-tealAccent-500/10 text-tealAccent-600 dark:text-tealAccent-400 flex items-center justify-center">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-slate-900 dark:text-white">
              ISO 27001 Security Hygiene
            </h3>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
              Every system we engineer adheres to strict security standards, automated CI/CD security scanning, and privacy compliance.
            </p>
          </div>

          <div className="glass-card p-8 rounded-3xl border border-slate-200 dark:border-slate-800 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-500 flex items-center justify-center">
              <Heart className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-slate-900 dark:text-white">
              Local Talent, Global Reach
            </h3>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
              We tap into the elite engineering talent pool of Dehradun and Uttarakhand to deliver Silicon-Valley grade velocity at high cost efficiency.
            </p>
          </div>
        </div>

        {/* Dehradun IT Park Feature Spotlight */}
        <div className="p-8 sm:p-12 rounded-3xl bg-slate-900 text-white border border-slate-800 shadow-2xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center space-x-2 text-brand-400 text-xs font-semibold uppercase tracking-wider">
              <MapPin className="w-4 h-4" />
              <span>Dehradun Operations Base</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
              Why Sahastradhara Road & IT Park, Dehradun?
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Dehradun is rapidly emerging as India's premier tech corridor in North India. Situated near premier institutions (IIT Roorkee, UPES, Graphic Era, DIT), our engineering center offers exceptional talent continuity, zero urban churn, and 100% focused project execution.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
              <div className="flex items-start space-x-2.5">
                <CheckCircle2 className="w-4 h-4 text-tealAccent-400 shrink-0 mt-0.5" />
                <span>State-of-the-art optical fiber fiber cloud connectivity</span>
              </div>
              <div className="flex items-start space-x-2.5">
                <CheckCircle2 className="w-4 h-4 text-tealAccent-400 shrink-0 mt-0.5" />
                <span>24/7 power redundancy & redundant SOC monitoring</span>
              </div>
              <div className="flex items-start space-x-2.5">
                <CheckCircle2 className="w-4 h-4 text-tealAccent-400 shrink-0 mt-0.5" />
                <span>Over 85% team retention rate year-over-year</span>
              </div>
              <div className="flex items-start space-x-2.5">
                <CheckCircle2 className="w-4 h-4 text-tealAccent-400 shrink-0 mt-0.5" />
                <span>Overlapping work hours for US EST, EU, and Gulf timezones</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 relative h-80 rounded-2xl overflow-hidden border border-slate-800">
            <Image
              src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1200&auto=format&fit=crop"
              alt="Qorvane Labs Dehradun Hub"
              fill
              className="object-cover opacity-90"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
            <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-slate-900/90 border border-slate-800 text-xs">
              <div className="font-bold text-white">Qorvane Labs Operations Hub</div>
              <div className="text-slate-400 text-[11px] mt-0.5">
                Sahastradhara Road, Near IT Park, Dehradun 248013
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center pt-8">
          <Link
            href="/contact"
            className="inline-flex items-center space-x-2 px-8 py-4 rounded-2xl bg-gradient-to-r from-brand-600 to-tealAccent-600 text-white font-bold text-sm shadow-xl shadow-brand-500/25 hover:from-brand-500 hover:to-tealAccent-500 transition-all"
          >
            <span>Schedule a Visit / Discovery Call</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
