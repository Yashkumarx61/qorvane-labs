import Link from "next/link";
import { servicesData } from "@/data/servicesData";
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  Check,
  Code2,
  Terminal,
  Zap,
} from "lucide-react";

export async function generateStaticParams() {
  return servicesData.map((s) => ({
    slug: s.slug,
  }));
}

interface ServiceDetailPageProps {
  params: {
    slug: string;
  };
}

export default function ServiceDetailPage({ params }: ServiceDetailPageProps) {
  const { slug } = params;
  const service = servicesData.find((s) => s.slug === slug);

  if (!service) {
    return (
      <div className="pt-40 pb-24 text-center max-w-xl mx-auto space-y-4">
        <h1 className="text-3xl font-bold">Service Not Found</h1>
        <p className="text-slate-500">The requested service specification could not be located.</p>
        <Link href="/services" className="text-brand-600 font-semibold hover:underline inline-flex items-center gap-1">
          <ArrowLeft className="w-4 h-4" /> Back to Services
        </Link>
      </div>
    );
  }

  return (
    <div className="pt-32 pb-24 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Back link */}
        <div>
          <Link
            href="/services"
            className="inline-flex items-center space-x-1.5 text-xs font-semibold text-brand-600 hover:underline"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to All Capabilities</span>
          </Link>
        </div>

        {/* Header section */}
        <div className="space-y-4">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-brand-500/10 text-brand-600 text-xs font-semibold uppercase tracking-wider border border-brand-500/20">
            <span>{service.badge || "Core Service"}</span>
          </div>

          <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
            {service.title}
          </h1>

          <p className="text-base sm:text-lg text-slate-600 max-w-3xl leading-relaxed">
            {service.fullDesc}
          </p>

          <div className="p-4 rounded-2xl bg-brand-500/10 border border-brand-500/20 text-brand-600 text-sm font-semibold flex items-center space-x-2">
            <Zap className="w-5 h-5 shrink-0" />
            <span>Benchmark SLA: {service.metrics}</span>
          </div>
        </div>

        {/* Detailed Breakdown Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Capabilities */}
          <div className="glass-card p-8 rounded-3xl border border-slate-200 space-y-4">
            <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
              <Code2 className="w-5 h-5 text-brand-500" /> Key Engineering Features
            </h3>
            <ul className="space-y-3">
              {service.features.map((f) => (
                <li key={f} className="flex items-start space-x-2.5 text-xs text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                  <span>{f}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Deliverables */}
          <div className="glass-card p-8 rounded-3xl border border-slate-200 space-y-4">
            <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
              <Terminal className="w-5 h-5 text-tealAccent-500" /> Deliverables & Assets
            </h3>
            <ul className="space-y-3">
              {service.deliverables.map((d) => (
                <li key={d} className="flex items-start space-x-2.5 text-xs text-slate-700">
                  <Check className="w-4 h-4 text-brand-500 shrink-0 mt-0.5" />
                  <span>{d}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Technologies card */}
        <div className="p-8 rounded-3xl bg-slate-900 text-white border border-slate-800 space-y-4">
          <h3 className="text-lg font-bold text-white">Recommended Stack & Tooling</h3>
          <div className="flex flex-wrap gap-2.5">
            {service.technologies.map((tech) => (
              <span
                key={tech}
                className="px-3.5 py-1.5 rounded-xl bg-slate-800 border border-slate-700 text-xs font-semibold text-brand-300"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Action Banner */}
        <div className="p-8 rounded-3xl bg-gradient-to-r from-brand-600 via-brand-500 to-tealAccent-600 text-white flex flex-col sm:flex-row items-center justify-between gap-6 shadow-2xl">
          <div>
            <h3 className="text-2xl font-bold">Ready to implement {service.title}?</h3>
            <p className="text-xs text-brand-100 mt-1">
              Talk directly with our solution architect at the Dehradun IT Park hub.
            </p>
          </div>
          <Link
            href={`/contact?service=${encodeURIComponent(service.title)}`}
            className="px-6 py-3 rounded-xl bg-white text-slate-900 font-bold text-xs hover:bg-slate-100 transition-colors shrink-0 flex items-center gap-2"
          >
            <span>Start Technical Intake</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
