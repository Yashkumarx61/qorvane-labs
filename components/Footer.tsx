"use client";

import Link from "next/link";
import { useState } from "react";
import { siteContact } from "@/data/contactData";
import {
  MapPin,
  Mail,
  Phone,
  ShieldCheck,
  Send,
  Linkedin,
  Github,
  Twitter,
  ArrowUpRight,
  CheckCircle2,
} from "lucide-react";

export function Footer() {
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (newsletterEmail) {
      setSubscribed(true);
      setTimeout(() => {
        setSubscribed(false);
        setNewsletterEmail("");
      }, 3000);
    }
  };

  return (
    <footer className="border-t border-slate-200 bg-white text-slate-700 pt-16 pb-12 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-200">
          {/* Brand & Address Column */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="flex items-center space-x-3">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-brand-600 to-tealAccent-500 flex items-center justify-center text-white font-bold text-lg">
                Q
              </div>
              <span className="text-xl font-bold tracking-tight text-slate-900">
                Qorvane<span className="text-brand-600">.Labs</span>
              </span>
            </Link>

            <p className="text-xs text-slate-600 leading-relaxed max-w-sm">
              End-to-end digital engineering, intelligent automation, and bespoke software solutions empowering fast-growing Indian enterprises and global clients.
            </p>

            {/* Dehradun IT Park HQ Card */}
            <div className="p-3.5 rounded-xl border border-slate-200 bg-slate-50 space-y-2 text-xs">
              <div className="flex items-center space-x-2 text-brand-600 font-semibold">
                <MapPin className="w-4 h-4 shrink-0" />
                <span>Engineering Operations Hub</span>
              </div>
              <p className="text-slate-600 pl-6">
                {siteContact.address}
              </p>
              <div className="pl-6 flex flex-wrap items-center gap-3 text-[11px] text-slate-500 pt-1">
                <a
                  href={`mailto:${siteContact.email}`}
                  className="flex items-center gap-1 hover:text-brand-600 transition-colors"
                >
                  <Mail className="w-3 h-3 text-brand-500" /> {siteContact.email}
                </a>
                <a
                  href={`tel:${siteContact.phoneRaw}`}
                  className="flex items-center gap-1 hover:text-brand-600 transition-colors"
                >
                  <Phone className="w-3 h-3 text-brand-500" /> {siteContact.phone}
                </a>
              </div>
            </div>

            {/* Compliance & Security Badges */}
            <div className="flex items-center space-x-3 pt-2">
              <div className="flex items-center space-x-1.5 text-[11px] text-slate-600 px-2.5 py-1 rounded-md border border-slate-200 bg-slate-100">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" />
                <span>ISO 27001 Certified</span>
              </div>
              <div className="flex items-center space-x-1.5 text-[11px] text-slate-600 px-2.5 py-1 rounded-md border border-slate-200 bg-slate-100">
                <ShieldCheck className="w-3.5 h-3.5 text-brand-500" />
                <span>GDPR & SOC2 Ready</span>
              </div>
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900">
              Engineering Services
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="/services/web-development" className="hover:text-brand-600 transition-colors">
                  Custom Web Development
                </Link>
              </li>
              <li>
                <Link href="/services/mobile-apps" className="hover:text-brand-600 transition-colors">
                  Mobile App Engineering
                </Link>
              </li>
              <li>
                <Link href="/services/ai-data" className="hover:text-brand-600 transition-colors">
                  AI & Intelligent Data
                </Link>
              </li>
              <li>
                <Link href="/services/business-analytics" className="hover:text-brand-600 transition-colors">
                  Business Analytics & BI
                </Link>
              </li>
              <li>
                <Link href="/services/managed-it" className="hover:text-brand-600 transition-colors">
                  Managed IT & Cloud Operations
                </Link>
              </li>
            </ul>
          </div>

          {/* Solutions & Engagement Column */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900">
              Engagement & Work
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="/solutions" className="hover:text-brand-600 transition-colors">
                  Project-Based Delivery
                </Link>
              </li>
              <li>
                <Link href="/solutions" className="hover:text-brand-600 transition-colors">
                  Dedicated Developer Pods
                </Link>
              </li>
              <li>
                <Link href="/portfolio" className="hover:text-brand-600 transition-colors flex items-center justify-between">
                  <span>Red Chilli POS Case Study</span>
                  <ArrowUpRight className="w-3 h-3 text-slate-400" />
                </Link>
              </li>
              <li>
                <Link href="/portfolio" className="hover:text-brand-600 transition-colors flex items-center justify-between">
                  <span>Basking Bakery Showcase</span>
                  <ArrowUpRight className="w-3 h-3 text-slate-400" />
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-brand-600 transition-colors">
                  Dehradun Engineering Hub
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter Column */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900">
              Tech Insights Newsletter
            </h4>
            <p className="text-xs text-slate-600">
              Get quarterly briefings on AI automation, cloud cost reduction, and web architecture.
            </p>

            {subscribed ? (
              <div className="p-3 bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 text-xs rounded-xl flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 shrink-0" />
                <span>Subscribed to Tech Insights!</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="space-y-2">
                <input
                  type="email"
                  required
                  placeholder="name@company.com"
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  className="w-full px-3.5 py-2 rounded-xl border border-slate-200 bg-slate-50 text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-brand-500"
                />
                <button
                  type="submit"
                  className="w-full py-2 px-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-semibold text-xs transition-colors flex items-center justify-center space-x-1.5"
                >
                  <span>Subscribe Briefing</span>
                  <Send className="w-3 h-3" />
                </button>
              </form>
            )}

            {/* Social Handles */}
            <div className="pt-2 flex items-center space-x-3">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-lg border border-slate-200 hover:text-brand-500 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-lg border border-slate-200 hover:text-brand-500 transition-colors"
                aria-label="GitHub"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-lg border border-slate-200 hover:text-brand-500 transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Rights Notice */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 space-y-3 sm:space-y-0">
          <div>
            © {new Date().getFullYear()} Qorvane Labs LLP. All rights reserved. Sahastradhara Road, Dehradun.
          </div>
          <div className="flex space-x-6">
            <Link href="/privacy" className="hover:underline">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:underline">
              Terms of Service
            </Link>
            <Link href="/security" className="hover:underline">
              Security Hygiene
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
