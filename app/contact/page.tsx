"use client";

import { useState } from "react";
import { siteContact } from "@/data/contactData";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  MessageSquare,
  CheckCircle2,
  IndianRupee,
  DollarSign,
  Clock,
  Sparkles,
  Building,
} from "lucide-react";
import { motion } from "framer-motion";

export default function ContactPage() {
  const [currency, setCurrency] = useState<"INR" | "USD">("INR");
  const [submitted, setSubmitted] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    org: "",
    email: "",
    phone: "",
    services: [] as string[],
    budgetINR: "₹2,00,000 - ₹5,00,000",
    budgetUSD: "$3,000 - $8,000",
    timeline: "1 - 2 Months",
    details: "",
  });

  const availableServices = [
    "Web Development (Next.js)",
    "Mobile Apps (Flutter/React Native)",
    "AI & Intelligent Data (RAG / LLMs)",
    "Business Analytics & BI",
    "Dedicated Developer Pod",
    "Managed IT & Cloud Operations",
  ];

  const toggleService = (s: string) => {
    if (formData.services.includes(s)) {
      setFormData({
        ...formData,
        services: formData.services.filter((item) => item !== s),
      });
    } else {
      setFormData({ ...formData, services: [...formData.services, s] });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="pt-32 pb-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-bold uppercase tracking-wider text-brand-600 dark:text-brand-400 px-3 py-1 rounded-full bg-brand-500/10 border border-brand-500/20">
            Start Your Project Intake
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Let’s Build Something Exceptional
          </h1>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400">
            Tell us about your digital goals. Receive a technical architecture proposal and estimate within 24 hours.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Form Column */}
          <div className="lg:col-span-7">
            <div className="glass-card p-8 sm:p-10 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-2xl">
              {submitted ? (
                <div className="py-16 text-center space-y-4">
                  <div className="w-16 h-16 bg-emerald-500/10 text-emerald-500 rounded-full flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
                    Project Intake Received!
                  </h2>
                  <p className="text-sm text-slate-600 dark:text-slate-300 max-w-md mx-auto">
                    Thank you, <span className="font-semibold text-brand-600 dark:text-brand-400">{formData.name}</span>. A senior solution architect from our Dehradun hub will review your specifications and contact you at <span className="font-semibold text-brand-600 dark:text-brand-400">{formData.email}</span>.
                  </p>
                  <div className="pt-4">
                    <button
                      onClick={() => {
                        setSubmitted(false);
                        setFormData({
                          name: "",
                          org: "",
                          email: "",
                          phone: "",
                          services: [],
                          budgetINR: "₹2,00,000 - ₹5,00,000",
                          budgetUSD: "$3,000 - $8,000",
                          timeline: "1 - 2 Months",
                          details: "",
                        });
                      }}
                      className="px-6 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 text-xs font-bold text-slate-800 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800"
                    >
                      Submit Another Inquiry
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Currency Switcher */}
                  <div className="flex items-center justify-between pb-4 border-b border-slate-200 dark:border-slate-800">
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                      Project Intake Form
                    </h3>
                    <div className="inline-flex p-1 rounded-xl bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
                      <button
                        type="button"
                        onClick={() => setCurrency("INR")}
                        className={`px-3 py-1 rounded-lg text-xs font-bold transition-all ${
                          currency === "INR" ? "bg-white dark:bg-slate-900 text-brand-600 dark:text-brand-400 shadow-sm" : "text-slate-500"
                        }`}
                      >
                        ₹ INR (India)
                      </button>
                      <button
                        type="button"
                        onClick={() => setCurrency("USD")}
                        className={`px-3 py-1 rounded-lg text-xs font-bold transition-all ${
                          currency === "USD" ? "bg-white dark:bg-slate-900 text-brand-600 dark:text-brand-400 shadow-sm" : "text-slate-500"
                        }`}
                      >
                        $ USD (Global)
                      </button>
                    </div>
                  </div>

                  {/* Name & Org */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-slate-700 dark:text-slate-300 mb-1">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Rahul Gupta"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/60 text-slate-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-brand-500"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-slate-700 dark:text-slate-300 mb-1">
                        Organization / Company
                      </label>
                      <input
                        type="text"
                        placeholder="Company Ltd / Startup Name"
                        value={formData.org}
                        onChange={(e) => setFormData({ ...formData, org: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/60 text-slate-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-brand-500"
                      />
                    </div>
                  </div>

                  {/* Email & Phone */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-slate-700 dark:text-slate-300 mb-1">
                        Work Email *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="rahul@company.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/60 text-slate-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-brand-500"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-slate-700 dark:text-slate-300 mb-1">
                        Phone / WhatsApp
                      </label>
                      <input
                        type="tel"
                        placeholder="+91 98765 43210"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/60 text-slate-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-brand-500"
                      />
                    </div>
                  </div>

                  {/* Service Selection Multi-select */}
                  <div>
                    <label className="block text-xs font-medium text-slate-700 dark:text-slate-300 mb-2">
                      Required Services (Multi-select)
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {availableServices.map((srv) => {
                        const isChecked = formData.services.includes(srv);
                        return (
                          <button
                            type="button"
                            key={srv}
                            onClick={() => toggleService(srv)}
                            className={`p-2.5 rounded-xl border text-left text-xs font-medium transition-all flex items-center justify-between ${
                              isChecked
                                ? "border-brand-500 bg-brand-500/10 text-brand-600 dark:text-brand-400 font-bold"
                                : "border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:border-slate-400"
                            }`}
                          >
                            <span>{srv}</span>
                            {isChecked && <CheckCircle2 className="w-4 h-4 shrink-0" />}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Budget & Timeline */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-slate-700 dark:text-slate-300 mb-1">
                        Estimated Budget ({currency})
                      </label>
                      {currency === "INR" ? (
                        <select
                          value={formData.budgetINR}
                          onChange={(e) => setFormData({ ...formData, budgetINR: e.target.value })}
                          className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/60 text-slate-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-brand-500"
                        >
                          <option value="₹1,00,000 - ₹2,00,000">₹1,00,000 - ₹2,00,000</option>
                          <option value="₹2,00,000 - ₹5,00,000">₹2,00,000 - ₹5,00,000</option>
                          <option value="₹5,00,000 - ₹15,00,000">₹5,00,000 - ₹15,00,000</option>
                          <option value="₹15,00,000+ Enterprise">₹15,00,000+ Enterprise Scope</option>
                        </select>
                      ) : (
                        <select
                          value={formData.budgetUSD}
                          onChange={(e) => setFormData({ ...formData, budgetUSD: e.target.value })}
                          className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/60 text-slate-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-brand-500"
                        >
                          <option value="$1,500 - $3,000">$1,500 - $3,000</option>
                          <option value="$3,000 - $8,000">$3,000 - $8,000</option>
                          <option value="$8,000 - $20,000">$8,000 - $20,000</option>
                          <option value="$20,000+ Enterprise">$20,000+ Enterprise Scope</option>
                        </select>
                      )}
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-slate-700 dark:text-slate-300 mb-1">
                        Expected Timeline
                      </label>
                      <select
                        value={formData.timeline}
                        onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/60 text-slate-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-brand-500"
                      >
                        <option value="ASAP (Under 1 Month)">ASAP (Under 1 Month)</option>
                        <option value="1 - 2 Months">1 - 2 Months</option>
                        <option value="3 - 6 Months">3 - 6 Months</option>
                        <option value="Long Term Ongoing Pod">Long Term Ongoing Pod</option>
                      </select>
                    </div>
                  </div>

                  {/* Scope Details */}
                  <div>
                    <label className="block text-xs font-medium text-slate-700 dark:text-slate-300 mb-1">
                      Project Specifications & Goals
                    </label>
                    <textarea
                      rows={4}
                      placeholder="Outline core user flows, technical stack preferences, or integration requirements..."
                      value={formData.details}
                      onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/60 text-slate-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-brand-500"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 rounded-xl bg-gradient-to-r from-brand-600 via-brand-500 to-tealAccent-600 hover:from-brand-500 hover:to-tealAccent-500 text-white font-bold text-sm shadow-xl shadow-brand-500/25 flex items-center justify-center space-x-2 transition-all"
                  >
                    <Send className="w-4 h-4" />
                    <span>Submit Project Scope & Request Architecture Proposal</span>
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* Contact Details & Direct Connect */}
          <div className="lg:col-span-5 space-y-6">
            {/* Direct Cards */}
            <div className="glass-card p-6 sm:p-8 rounded-3xl border border-slate-200 dark:border-slate-800 space-y-6">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                Direct Contact Channels
              </h3>

              <div className="space-y-4 text-xs">
                <div className="flex items-start space-x-3 p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700">
                  <MapPin className="w-5 h-5 text-brand-500 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-slate-900 dark:text-white block">
                      Dehradun Engineering Hub
                    </span>
                    <span className="text-slate-600 dark:text-slate-400 mt-0.5 block">
                      {siteContact.address}
                    </span>
                  </div>
                </div>

                <div className="flex items-start space-x-3 p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700">
                  <Mail className="w-5 h-5 text-brand-500 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-slate-900 dark:text-white block">
                      Official Inquiry Email
                    </span>
                    <a
                      href={`mailto:${siteContact.email}`}
                      className="text-brand-600 dark:text-brand-400 font-semibold hover:underline"
                    >
                      {siteContact.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-3 p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700">
                  <Phone className="w-5 h-5 text-brand-500 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-slate-900 dark:text-white block">
                      Official Phone / Direct Call
                    </span>
                    <a
                      href={`tel:${siteContact.phoneRaw}`}
                      className="text-brand-600 dark:text-brand-400 font-semibold hover:underline"
                    >
                      {siteContact.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-3 p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700">
                  <MessageSquare className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-slate-900 dark:text-white block">
                      WhatsApp Quick Connect
                    </span>
                    <a
                      href={siteContact.whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-emerald-500 font-semibold hover:underline flex items-center gap-1 mt-0.5"
                    >
                      <span>Chat directly on WhatsApp ({siteContact.phone})</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Dehradun IT Park Interactive Office Map Placeholder */}
            <div className="p-6 rounded-3xl bg-slate-900 text-white border border-slate-800 space-y-4">
              <div className="flex items-center justify-between text-xs">
                <span className="font-bold text-brand-400 uppercase tracking-wider flex items-center gap-1.5">
                  <MapPin className="w-4 h-4" /> Dehradun Office Location
                </span>
                <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 font-medium text-[10px]">
                  Open 9 AM - 7 PM IST
                </span>
              </div>
              <div className="h-44 rounded-2xl bg-slate-800/90 border border-slate-700/80 flex items-center justify-center p-4 text-center relative overflow-hidden">
                <div className="space-y-2 z-10">
                  <div className="w-10 h-10 rounded-full bg-brand-600 text-white flex items-center justify-center mx-auto shadow-lg">
                    <MapPin className="w-5 h-5 animate-bounce" />
                  </div>
                  <div className="text-xs font-bold">Sahastradhara Road, Near IT Park</div>
                  <div className="text-[11px] text-slate-400">Dehradun, Uttarakhand 248013</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
