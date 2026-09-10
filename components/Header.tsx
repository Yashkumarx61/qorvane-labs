"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { DiscoveryModal } from "./DiscoveryModal";
import { ClientPortalModal } from "./ClientPortalModal";
import {
  Globe,
  Smartphone,
  Sparkles,
  BarChart3,
  ShieldCheck,
  ChevronDown,
  Menu,
  X,
  Calendar,
  Lock,
  ArrowRight,
} from "lucide-react";

export function Header() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Active mega menu dropdowns
  const [activeMenu, setActiveMenu] = useState<string | null>(null);

  // Modals state
  const [isDiscoveryOpen, setIsDiscoveryOpen] = useState(false);
  const [isPortalOpen, setIsPortalOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const servicesList = [
    {
      title: "Web Development",
      href: "/services/web-development",
      desc: "Enterprise Next.js web platforms & headless portals.",
      icon: Globe,
    },
    {
      title: "Mobile App Engineering",
      href: "/services/mobile-apps",
      desc: "Cross-platform Flutter & native iOS/Android apps.",
      icon: Smartphone,
    },
    {
      title: "AI & Intelligent Data",
      href: "/services/ai-data",
      desc: "LLM fine-tuning, RAG agents & custom automation.",
      icon: Sparkles,
    },
    {
      title: "Business Analytics & BI",
      href: "/services/business-analytics",
      desc: "Real-time KPI dashboards & data warehousing.",
      icon: BarChart3,
    },
    {
      title: "Managed IT & Cloud",
      href: "/services/managed-it",
      desc: "24/7 infrastructure uptime, DevOps & security.",
      icon: ShieldCheck,
    },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? "glass-nav py-3 shadow-sm bg-white/90 backdrop-blur-md"
            : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Brand Logo */}
            <Link
              href="/"
              className="flex items-center space-x-3 group"
              onClick={() => setActiveMenu(null)}
            >
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-brand-600 via-brand-500 to-tealAccent-500 flex items-center justify-center text-white font-bold text-xl shadow-lg shadow-brand-500/25 group-hover:scale-105 transition-transform duration-300">
                Q
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-bold tracking-tight text-slate-900 group-hover:text-brand-600 transition-colors">
                  Qorvane<span className="text-brand-600">.Labs</span>
                </span>
                <span className="text-[10px] uppercase font-semibold text-slate-500 tracking-wider">
                  Digital Engineering Hub
                </span>
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center space-x-1">
              {/* Services Mega Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setActiveMenu("services")}
                onMouseLeave={() => setActiveMenu(null)}
              >
                <button
                  className={`flex items-center space-x-1.5 px-4 py-2 rounded-xl text-sm font-medium transition-colors ${
                    pathname?.startsWith("/services")
                      ? "text-brand-600 bg-brand-500/10"
                      : "text-slate-700 hover:text-brand-600"
                  }`}
                >
                  <span>Services</span>
                  <ChevronDown
                    className={`w-4 h-4 transition-transform duration-200 ${
                      activeMenu === "services" ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {/* Mega Dropdown Menu */}
                {activeMenu === "services" && (
                  <div className="absolute top-full left-0 w-[540px] pt-3 animate-in fade-in slide-in-from-top-2 duration-200">
                    <div className="p-4 rounded-2xl glass-card border border-slate-200 bg-white/95 backdrop-blur-xl shadow-2xl grid grid-cols-1 gap-2">
                      <div className="px-3 py-1.5 border-b border-slate-100 flex items-center justify-between">
                        <span className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                          Engineering Capabilities
                        </span>
                        <Link
                          href="/services"
                          onClick={() => setActiveMenu(null)}
                          className="text-xs font-semibold text-brand-600 hover:underline flex items-center gap-1"
                        >
                          View All <ArrowRight className="w-3 h-3" />
                        </Link>
                      </div>
                      <div className="grid grid-cols-2 gap-2 pt-1">
                        {servicesList.map((item) => {
                          const IconComp = item.icon;
                          return (
                            <Link
                              key={item.href}
                              href={item.href}
                              onClick={() => setActiveMenu(null)}
                              className="p-3 rounded-xl hover:bg-slate-100/80 transition-colors group/item flex items-start space-x-3"
                            >
                              <div className="w-8 h-8 rounded-lg bg-brand-500/10 text-brand-600 flex items-center justify-center shrink-0 group-hover/item:scale-110 transition-transform">
                                <IconComp className="w-4 h-4" />
                              </div>
                              <div>
                                <h4 className="text-xs font-semibold text-slate-900 group-hover/item:text-brand-600 transition-colors">
                                  {item.title}
                                </h4>
                                <p className="text-[11px] text-slate-500 line-clamp-2 mt-0.5">
                                  {item.desc}
                                </p>
                              </div>
                            </Link>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Engagement Models Link */}
              <Link
                href="/solutions"
                className={`px-4 py-2 rounded-xl text-sm font-medium transition-colors ${
                  pathname === "/solutions"
                    ? "text-brand-600 bg-brand-500/10"
                    : "text-slate-700 hover:text-brand-600"
                }`}
              >
                Engagement Models
              </Link>

              {/* Work / Case Studies Link */}
              <Link
                href="/portfolio"
                className={`px-4 py-2 rounded-xl text-sm font-medium transition-colors ${
                  pathname === "/portfolio"
                    ? "text-brand-600 bg-brand-500/10"
                    : "text-slate-700 hover:text-brand-600"
                }`}
              >
                Case Studies
              </Link>

              {/* Company / Dehradun Hub Link */}
              <Link
                href="/about"
                className={`px-4 py-2 rounded-xl text-sm font-medium transition-colors ${
                  pathname === "/about"
                    ? "text-brand-600 bg-brand-500/10"
                    : "text-slate-700 hover:text-brand-600"
                }`}
              >
                Dehradun Hub
              </Link>

              {/* Contact Link */}
              <Link
                href="/contact"
                className={`px-4 py-2 rounded-xl text-sm font-medium transition-colors ${
                  pathname === "/contact"
                    ? "text-brand-600 bg-brand-500/10"
                    : "text-slate-700 hover:text-brand-600"
                }`}
              >
                Contact
              </Link>
            </nav>

            {/* Header Utilities */}
            <div className="hidden sm:flex items-center space-x-3">
              {/* Client Portal Button */}
              <button
                onClick={() => setIsPortalOpen(true)}
                className="px-3.5 py-2 rounded-xl border border-slate-200 bg-white/80 text-xs font-semibold text-slate-700 hover:border-slate-400 flex items-center space-x-1.5 transition-all shadow-sm"
              >
                <Lock className="w-3.5 h-3.5 text-brand-600" />
                <span>Client Portal</span>
              </button>

              {/* Schedule Discovery Call CTA */}
              <button
                onClick={() => setIsDiscoveryOpen(true)}
                className="px-4 py-2.5 rounded-xl bg-gradient-to-r from-brand-600 to-tealAccent-600 hover:from-brand-500 hover:to-tealAccent-500 text-white text-xs font-semibold shadow-lg shadow-brand-500/25 flex items-center space-x-2 transition-all transform hover:-translate-y-0.5"
              >
                <Calendar className="w-4 h-4" />
                <span>Discovery Call</span>
              </button>
            </div>

            {/* Mobile Hamburger Toggle */}
            <div className="flex sm:hidden items-center space-x-2">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2.5 rounded-xl border border-slate-200 text-slate-700"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Slide-down Menu */}
        {mobileMenuOpen && (
          <div className="sm:hidden glass-card border-b border-slate-200 bg-white/95 px-4 pt-4 pb-6 space-y-3 mt-3 animate-in fade-in duration-200">
            <Link
              href="/"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-lg text-sm font-medium text-slate-900 hover:bg-slate-100"
            >
              Home
            </Link>

            <div className="space-y-1 pl-3 border-l-2 border-brand-500/30">
              <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider py-1">
                Services
              </div>
              {servicesList.map((s) => (
                <Link
                  key={s.href}
                  href={s.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block px-3 py-1.5 text-xs text-slate-700 hover:text-brand-500"
                >
                  {s.title}
                </Link>
              ))}
            </div>

            <Link
              href="/solutions"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-lg text-sm font-medium text-slate-900 hover:bg-slate-100"
            >
              Engagement Models
            </Link>

            <Link
              href="/portfolio"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-lg text-sm font-medium text-slate-900 hover:bg-slate-100"
            >
              Case Studies
            </Link>

            <Link
              href="/about"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-lg text-sm font-medium text-slate-900 hover:bg-slate-100"
            >
              Dehradun Hub
            </Link>

            <Link
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-lg text-sm font-medium text-slate-900 hover:bg-slate-100"
            >
              Contact
            </Link>

            <div className="pt-3 border-t border-slate-200 flex flex-col space-y-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  setIsPortalOpen(true);
                }}
                className="w-full py-2.5 rounded-xl border border-slate-200 text-xs font-semibold text-slate-700 flex items-center justify-center space-x-2"
              >
                <Lock className="w-3.5 h-3.5" />
                <span>Client Portal</span>
              </button>

              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  setIsDiscoveryOpen(true);
                }}
                className="w-full py-3 rounded-xl bg-gradient-to-r from-brand-600 to-tealAccent-600 text-white text-xs font-semibold flex items-center justify-center space-x-2 shadow-lg"
              >
                <Calendar className="w-4 h-4" />
                <span>Schedule Discovery Call</span>
              </button>
            </div>
          </div>
        )}
      </header>

      {/* Popups */}
      <DiscoveryModal isOpen={isDiscoveryOpen} onClose={() => setIsDiscoveryOpen(false)} />
      <ClientPortalModal isOpen={isPortalOpen} onClose={() => setIsPortalOpen(false)} />
    </>
  );
}
