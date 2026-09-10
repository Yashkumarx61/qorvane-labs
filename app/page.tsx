"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { TechTicker } from "@/components/TechTicker";
import { ProjectEstimator } from "@/components/ProjectEstimator";
import { HeroBackground } from "@/components/HeroBackground";
import { servicesData } from "@/data/servicesData";
import { portfolioData } from "@/data/portfolioData";
import {
  ArrowRight,
  Sparkles,
  ShieldCheck,
  Zap,
  Globe,
  MapPin,
  CheckCircle2,
  Users,
  Briefcase,
  Layers,
  BarChart3,
  Smartphone,
  Code,
  TrendingUp,
  ExternalLink,
} from "lucide-react";
import { motion } from "framer-motion";

export default function HomePage() {
  const featuredCases = portfolioData;

  return (
    <div className="relative overflow-hidden bg-[#F8FAFC] dark:bg-[#090D16]">
      {/* 1. HERO SECTION WITH 3D GLASS SHARDS & CONSTELLATION MESH */}
      <section className="pt-32 sm:pt-40 pb-16 sm:pb-24 relative overflow-hidden min-h-[90vh] flex flex-col justify-center">
        {/* Background Visual Layer (Glows, Constellation SVG & Floating 3D Glass Cards) */}
        <HeroBackground />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
          <div className="text-center max-w-4xl mx-auto space-y-6">
            {/* Pill Badge */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center space-x-2.5 px-4 py-1.5 rounded-full bg-slate-900/5 dark:bg-white/10 border border-slate-200 dark:border-slate-800 text-slate-800 dark:text-slate-200 text-xs font-semibold shadow-sm backdrop-blur-md"
            >
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
              <MapPin className="w-3.5 h-3.5 text-brand-600 dark:text-brand-400" />
              <span>Operations Base: Sahastradhara Road, Dehradun IT Park</span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-[1.1]"
            >
              Engineering Resilient Software,{" "}
              <span className="text-gradient">Intelligent Data,</span> & Modern Web Experiences.
            </motion.h1>

            {/* Subhead */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-base sm:text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto font-normal leading-relaxed"
            >
              Bridging enterprise-tier engineering with high-velocity delivery for global brands and ambitious Indian businesses. Powered by dedicated development pods near IT Park, Dehradun.
            </motion.p>

            {/* Dual CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <Link
                href="/contact"
                className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-gradient-to-r from-brand-600 via-brand-500 to-tealAccent-600 hover:from-brand-500 hover:to-tealAccent-500 text-white font-bold text-sm shadow-xl shadow-brand-500/25 flex items-center justify-center space-x-2.5 transition-all transform hover:-translate-y-0.5"
              >
                <Zap className="w-4 h-4" />
                <span>Start Your Project</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <Link
                href="/solutions"
                className="w-full sm:w-auto px-8 py-4 rounded-2xl border border-slate-300 dark:border-slate-700 bg-white/80 dark:bg-slate-900/80 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-900 dark:text-white font-bold text-sm backdrop-blur-md flex items-center justify-center space-x-2 transition-all shadow-sm"
              >
                <Users className="w-4 h-4 text-brand-600 dark:text-brand-400" />
                <span>Hire a Dedicated Team</span>
              </Link>
            </motion.div>

            {/* Quick Metrics Bar */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="pt-10 grid grid-cols-2 sm:grid-cols-4 gap-4 border-t border-slate-200/80 dark:border-slate-800/80 max-w-3xl mx-auto text-left"
            >
              <div className="p-3">
                <div className="text-2xl font-extrabold text-slate-900 dark:text-white">45%</div>
                <div className="text-xs text-slate-500 font-medium">Faster Queue Speeds (POS)</div>
              </div>
              <div className="p-3">
                <div className="text-2xl font-extrabold text-slate-900 dark:text-white">2.8x</div>
                <div className="text-xs text-slate-500 font-medium">Direct Inbound Order Growth</div>
              </div>
              <div className="p-3">
                <div className="text-2xl font-extrabold text-slate-900 dark:text-white">99.99%</div>
                <div className="text-xs text-slate-500 font-medium">Infrastructure Uptime SLA</div>
              </div>
              <div className="p-3">
                <div className="text-2xl font-extrabold text-slate-900 dark:text-white">Dehradun</div>
                <div className="text-xs text-slate-500 font-medium">IT Park Engineering Hub</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* TECH TICKER MARQUEE */}
      <TechTicker />

      {/* 2. SERVICE PILLARS OVERVIEW */}
      <section className="py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-brand-600 dark:text-brand-400">
                Core Capabilities
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight mt-1">
                Full-Lifecycle Software & AI Engineering
              </h2>
            </div>
            <Link
              href="/services"
              className="text-xs font-bold text-brand-600 dark:text-brand-400 hover:underline flex items-center gap-1 shrink-0"
            >
              Explore All 5 Service Pillars <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {servicesData.map((service) => (
              <div
                key={service.id}
                className="glass-card p-8 rounded-3xl border border-slate-200 dark:border-slate-800 hover:border-brand-500/40 transition-all duration-300 group flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-brand-500/10 text-brand-600 dark:text-brand-400 flex items-center justify-center group-hover:scale-110 transition-transform">
                      {service.slug === "web-development" && <Globe className="w-6 h-6" />}
                      {service.slug === "mobile-apps" && <Smartphone className="w-6 h-6" />}
                      {service.slug === "ai-data" && <Sparkles className="w-6 h-6" />}
                      {service.slug === "business-analytics" && <BarChart3 className="w-6 h-6" />}
                      {service.slug === "managed-it" && <ShieldCheck className="w-6 h-6" />}
                    </div>
                    {service.badge && (
                      <span className="px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-[11px] font-semibold text-slate-600 dark:text-slate-300">
                        {service.badge}
                      </span>
                    )}
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-brand-600 dark:group-hover:text-brand-400 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-xs text-slate-600 dark:text-slate-400 mt-2 leading-relaxed">
                    {service.shortDesc}
                  </p>

                  <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800/80 space-y-2">
                    <div className="text-[11px] font-semibold uppercase tracking-wider text-slate-400">
                      Key Standard:
                    </div>
                    <div className="text-xs font-semibold text-brand-600 dark:text-brand-400 flex items-center gap-1.5">
                      <TrendingUp className="w-3.5 h-3.5" />
                      <span>{service.metrics}</span>
                    </div>
                  </div>
                </div>

                <div className="pt-8">
                  <Link
                    href={`/services/${service.slug}`}
                    className="w-full py-2.5 rounded-xl border border-slate-200 dark:border-slate-800 text-xs font-semibold text-slate-800 dark:text-slate-200 hover:bg-brand-600 hover:text-white hover:border-brand-600 flex items-center justify-center space-x-2 transition-all"
                  >
                    <span>View Specifications</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. FEATURED CLIENT PROJECTS SPOTLIGHT */}
      <section className="py-20 bg-slate-50/50 dark:bg-slate-900/40 border-y border-slate-200 dark:border-slate-800 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-brand-600 dark:text-brand-400">
                Verified Deliveries
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight mt-1">
                Featured Client Projects & Live Portals
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-2">
                Explore real full-stack builds deployed for food & beverage, e-commerce, and automotive studio clients.
              </p>
            </div>
            <Link
              href="/portfolio"
              className="text-xs font-bold text-brand-600 dark:text-brand-400 hover:underline flex items-center gap-1 shrink-0"
            >
              Explore Full Portfolio <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {featuredCases.map((cs) => (
              <div
                key={cs.id}
                className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="relative h-56 w-full bg-slate-900 overflow-hidden">
                    <Image
                      src={cs.image}
                      alt={cs.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500 opacity-85"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent" />
                    <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                      <span className="px-3 py-1 rounded-full bg-brand-600/90 text-white text-[10px] font-extrabold uppercase tracking-wider backdrop-blur-md shadow-md">
                        {cs.industry.split("/")[0]}
                      </span>
                    </div>
                    <div className="absolute bottom-4 left-6 right-6">
                      <span className="text-[11px] text-slate-300 font-semibold block">
                        Client: {cs.client}
                      </span>
                      <h3 className="text-lg font-extrabold text-white mt-0.5 leading-snug">
                        {cs.title}
                      </h3>
                    </div>
                  </div>

                  <div className="p-6 space-y-4">
                    <div className="text-xs text-slate-500 dark:text-slate-400 font-medium">
                      <span className="font-bold text-slate-700 dark:text-slate-300">Deliverable:</span>{" "}
                      {cs.role}
                    </div>

                    <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                      {cs.summary}
                    </p>

                    <div className="p-3.5 rounded-2xl bg-brand-500/10 border border-brand-500/20">
                      <div className="text-[10px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                        Primary Impact Metric:
                      </div>
                      <div className="text-sm font-extrabold text-brand-600 dark:text-brand-400 mt-0.5 flex items-center gap-1.5">
                        <TrendingUp className="w-4 h-4 text-tealAccent-500 shrink-0" />
                        <span>{cs.keyMetric}</span>
                      </div>
                    </div>

                    <div className="pt-1 flex flex-wrap gap-1.5">
                      {cs.technologies.map((t) => (
                        <span
                          key={t}
                          className="px-2.5 py-1 rounded-lg bg-slate-100 dark:bg-slate-800 text-[11px] font-semibold text-slate-700 dark:text-slate-300"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="p-6 pt-0 border-t border-slate-100 dark:border-slate-800 mt-4 space-y-2">
                  {cs.liveUrl && (
                    <a
                      href={cs.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full py-2.5 px-4 rounded-xl bg-gradient-to-r from-brand-600 to-tealAccent-600 hover:from-brand-500 hover:to-tealAccent-500 text-white font-bold text-xs flex items-center justify-center space-x-1.5 shadow-md transition-all"
                    >
                      <span>
                        {cs.id === "red-chilli"
                          ? "View Live Dashboard ↗"
                          : cs.id === "basking-bakery"
                          ? "Visit Live Site ↗"
                          : "View Live Portal ↗"}
                      </span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. ENGAGEMENT MODELS */}
      <section className="py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-600 dark:text-brand-400">
              Structured Engagement
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight mt-1">
              Choose How We Collaborate
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-2">
              Flexible delivery frameworks suited for turn-key product builds or team augmentation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Project Based Delivery */}
            <div className="glass-card p-8 sm:p-10 rounded-3xl border border-slate-200 dark:border-slate-800 relative overflow-hidden flex flex-col justify-between">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-brand-500/10 text-brand-600 dark:text-brand-400 flex items-center justify-center">
                  <Briefcase className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                  Fixed-Scope Project Delivery
                </h3>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                  Ideal for turnkey websites, mobile apps, and custom software MVPs with clear specifications and fixed milestones.
                </p>

                <ul className="space-y-2.5 pt-4 text-xs text-slate-700 dark:text-slate-300">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                    <span>Guaranteed fixed timeline & milestone budget</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                    <span>Complete solution architecture & UX design included</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                    <span>30-day post-launch warranty & SLA support</span>
                  </li>
                </ul>
              </div>

              <div className="pt-8">
                <Link
                  href="/contact?type=fixed"
                  className="w-full py-3 rounded-xl bg-slate-900 dark:bg-white text-white dark:text-slate-900 text-xs font-bold flex items-center justify-center space-x-2"
                >
                  <span>Request Fixed-Scope Quote</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Dedicated Pods */}
            <div className="glass-card p-8 sm:p-10 rounded-3xl border border-brand-500/40 bg-brand-500/5 dark:bg-brand-500/10 relative overflow-hidden flex flex-col justify-between">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-tealAccent-500/10 text-tealAccent-600 dark:text-tealAccent-400 flex items-center justify-center">
                  <Users className="w-6 h-6" />
                </div>
                <div className="flex items-center justify-between">
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                    Dedicated Engineering Pods
                  </h3>
                  <span className="px-3 py-1 rounded-full bg-brand-600 text-white text-[10px] font-bold uppercase">
                    High Speed
                  </span>
                </div>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                  Plug-and-play developers, AI architects, and QA leads working exclusively as an extension of your in-house team.
                </p>

                <ul className="space-y-2.5 pt-4 text-xs text-slate-700 dark:text-slate-300">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-brand-600 dark:text-brand-400" />
                    <span>Direct Slack / Teams daily agile standup sync</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-brand-600 dark:text-brand-400" />
                    <span>Scale up or swap tech stacks with 2 weeks notice</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-brand-600 dark:text-brand-400" />
                    <span>Managed out of Dehradun IT Park hub</span>
                  </li>
                </ul>
              </div>

              <div className="pt-8">
                <Link
                  href="/solutions"
                  className="w-full py-3 rounded-xl bg-gradient-to-r from-brand-600 to-tealAccent-600 text-white text-xs font-bold flex items-center justify-center space-x-2 shadow-lg"
                >
                  <span>Configure Dedicated Pod</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. LOCAL ROOTS, GLOBAL REACH */}
      <section className="py-20 bg-slate-900 text-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center space-x-2 text-brand-400 text-xs font-semibold uppercase tracking-wider">
                <MapPin className="w-4 h-4" />
                <span>Dehradun IT Park Engineering Hub</span>
              </div>
              <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
                Local Roots in Dehradun. <br />
                <span className="text-gradient">Global Delivery Standards.</span>
              </h2>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Situated near the IT Park on Sahastradhara Road, Dehradun, Qorvane Labs combines access to top-tier engineering talent with world-class cloud standards. We empower local Indian enterprises and international businesses with high-velocity engineering.
              </p>

              <div className="grid grid-cols-2 gap-4 pt-4 text-xs">
                <div className="p-4 rounded-2xl bg-slate-800/80 border border-slate-700">
                  <div className="text-lg font-bold text-white">Dehradun HQ</div>
                  <div className="text-slate-400 mt-1">Sahastradhara Road, near IT Park</div>
                </div>
                <div className="p-4 rounded-2xl bg-slate-800/80 border border-slate-700">
                  <div className="text-lg font-bold text-white">24/7 Operations</div>
                  <div className="text-slate-400 mt-1">IST / EST / CET Timezone Coverage</div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 relative">
              <div className="p-8 rounded-3xl bg-slate-950 border border-slate-800 shadow-2xl space-y-6">
                <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                  <span className="text-xs font-bold text-slate-400">Hub Telemetry</span>
                  <span className="px-2.5 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-[10px] font-bold">
                    Active Operations
                  </span>
                </div>
                <div className="space-y-3 text-xs">
                  <div className="flex items-center justify-between p-3 rounded-xl bg-slate-900 border border-slate-800">
                    <span className="text-slate-300">Engineering Talent Pool</span>
                    <span className="font-bold text-white">Dehradun & North India</span>
                  </div>
                  <div className="flex items-center justify-between p-3 rounded-xl bg-slate-900 border border-slate-800">
                    <span className="text-slate-300">Primary Tech Stack</span>
                    <span className="font-bold text-brand-400">Next.js, Python, Flutter</span>
                  </div>
                  <div className="flex items-center justify-between p-3 rounded-xl bg-slate-900 border border-slate-800">
                    <span className="text-slate-300">Client Footprint</span>
                    <span className="font-bold text-tealAccent-400">India, US, UK, Middle East</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. DYNAMIC LEAD MAGNET / INTERACTIVE ESTIMATOR */}
      <ProjectEstimator />
    </div>
  );
}
