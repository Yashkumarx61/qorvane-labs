"use client";

import { useState } from "react";
import Image from "next/image";
import { portfolioData, CaseStudy } from "@/data/portfolioData";
import {
  TrendingUp,
  ArrowRight,
  CheckCircle2,
  ExternalLink,
  Quote,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function PortfolioPage() {
  const [filter, setFilter] = useState<string>("All");
  const [selectedCase, setSelectedCase] = useState<CaseStudy | null>(null);

  const categories = ["All", "Retail POS", "D2C E-Commerce", "Automotive Studio"];

  const filteredData = portfolioData.filter((item) => {
    if (filter === "All") return true;
    if (filter === "Retail POS") return item.id === "red-chilli";
    if (filter === "D2C E-Commerce") return item.id === "basking-bakery";
    if (filter === "Automotive Studio") return item.id === "detailing-raja";
    return true;
  });

  return (
    <div className="pt-32 pb-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <span className="text-xs font-bold uppercase tracking-wider text-brand-600 px-3 py-1 rounded-full bg-brand-500/10 border border-brand-500/20">
            Verified Client Deliveries
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
            Our Portfolio & Live Client Projects
          </h1>
          <p className="text-sm sm:text-base text-slate-600">
            Explore our verified client platforms featuring live interactive previews, measurable business growth metrics, and full-stack software architecture.
          </p>

          {/* Filter Pills */}
          <div className="pt-4 flex flex-wrap items-center justify-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
                  filter === cat
                    ? "bg-brand-600 text-white shadow-md shadow-brand-500/20"
                    : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Portfolio Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {filteredData.map((cs) => (
            <motion.div
              layout
              key={cs.id}
              className="bg-white border border-slate-200 rounded-3xl overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Image Banner */}
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
                  {/* Role / Deliverable */}
                  <div className="text-xs text-slate-500 font-medium">
                    <span className="font-bold text-slate-700">Deliverable:</span>{" "}
                    {cs.role}
                  </div>

                  <p className="text-xs text-slate-600 leading-relaxed">
                    {cs.summary}
                  </p>

                  {/* Impact Metric Banner */}
                  <div className="p-3.5 rounded-2xl bg-brand-500/10 border border-brand-500/20">
                    <div className="text-[10px] font-bold uppercase tracking-wider text-slate-500">
                      Primary Impact Metric:
                    </div>
                    <div className="text-sm font-extrabold text-brand-600 mt-0.5 flex items-center gap-1.5">
                      <TrendingUp className="w-4 h-4 text-tealAccent-500 shrink-0" />
                      <span>{cs.keyMetric}</span>
                    </div>
                  </div>

                  {/* Tech stack tags */}
                  <div className="pt-1 flex flex-wrap gap-1.5">
                    {cs.technologies.map((t) => (
                      <span
                        key={t}
                        className="px-2.5 py-1 rounded-lg bg-slate-100 text-[11px] font-semibold text-slate-700"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="p-6 pt-0 border-t border-slate-100 mt-4 space-y-2">
                {cs.liveUrl && (
                  <a
                    href={cs.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-2.5 px-4 rounded-xl bg-gradient-to-r from-brand-600 to-tealAccent-600 hover:from-brand-500 hover:to-tealAccent-500 text-white font-bold text-xs flex items-center justify-center space-x-1.5 shadow-md transition-all"
                  >
                    <span>
                      {cs.id === "red-chilli"
                        ? "View Live Dashboard"
                        : cs.id === "basking-bakery"
                        ? "Visit Live Site"
                        : "View Live Portal"}
                    </span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                )}

                <button
                  onClick={() => setSelectedCase(cs)}
                  className="w-full py-2 px-4 rounded-xl border border-slate-200 hover:bg-slate-100 text-slate-800 font-semibold text-xs flex items-center justify-center space-x-1.5 transition-colors"
                >
                  <span>Architecture Breakdown</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Case Study Detail Modal */}
      <AnimatePresence>
        {selectedCase && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedCase(null)}
              className="fixed inset-0 bg-slate-950/80 backdrop-blur-md"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative w-full max-w-3xl max-h-[85vh] bg-white border border-slate-200 rounded-3xl shadow-2xl overflow-y-auto z-10 p-6 sm:p-10 space-y-6"
            >
              <button
                onClick={() => setSelectedCase(null)}
                className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-600 rounded-full"
              >
                ✕
              </button>

              <div className="space-y-2">
                <span className="px-3 py-1 rounded-full bg-brand-500/10 text-brand-600 text-xs font-bold uppercase">
                  {selectedCase.industry}
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                  {selectedCase.title}
                </h2>
                <div className="text-xs text-slate-500">Client: {selectedCase.client}</div>
              </div>

              {/* Challenge vs Solution */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 rounded-2xl bg-amber-500/10 border border-amber-500/20 text-xs space-y-1">
                  <h4 className="font-bold text-amber-600 uppercase">The Challenge:</h4>
                  <p className="text-slate-700 leading-relaxed">{selectedCase.challenge}</p>
                </div>
                <div className="p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 text-xs space-y-1">
                  <h4 className="font-bold text-emerald-600 uppercase">The Solution:</h4>
                  <p className="text-slate-700 leading-relaxed">{selectedCase.solution}</p>
                </div>
              </div>

              {/* Architecture Highlights */}
              <div className="space-y-2">
                <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500">
                  Architecture & Engineering Highlights
                </h3>
                <ul className="space-y-2 text-xs text-slate-700">
                  {selectedCase.architectureHighlights.map((arch) => (
                    <li key={arch} className="flex items-start space-x-2">
                      <CheckCircle2 className="w-4 h-4 text-brand-500 shrink-0 mt-0.5" />
                      <span>{arch}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Testimonial if available */}
              {selectedCase.testimonial && (
                <div className="p-5 rounded-2xl bg-slate-100 border border-slate-200 space-y-2">
                  <Quote className="w-6 h-6 text-brand-500" />
                  <p className="text-xs sm:text-sm italic text-slate-800">
                    &ldquo;{selectedCase.testimonial.quote}&rdquo;
                  </p>
                  <div className="text-[11px] font-bold text-slate-900 pt-1">
                    — {selectedCase.testimonial.author}, {selectedCase.testimonial.role}
                  </div>
                </div>
              )}

              <div className="pt-4 flex items-center justify-between">
                {selectedCase.liveUrl ? (
                  <a
                    href={selectedCase.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-2.5 rounded-xl bg-brand-600 hover:bg-brand-500 text-white font-bold text-xs flex items-center gap-1.5 shadow-md"
                  >
                    <span>Open Live Project</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                ) : (
                  <div />
                )}
                <button
                  onClick={() => setSelectedCase(null)}
                  className="px-6 py-2.5 rounded-xl bg-slate-900 text-white text-xs font-bold"
                >
                  Close Specification
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
