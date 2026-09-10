"use client";

import { motion } from "framer-motion";

export function TechTicker() {
  const techStack = [
    { name: "Next.js", category: "Web Framework" },
    { name: "Python", category: "AI & Data ML" },
    { name: "Flutter", category: "Cross-Platform" },
    { name: "React Native", category: "Mobile Apps" },
    { name: "Node.js", category: "Backend Microservices" },
    { name: "AWS Cloud", category: "DevOps & Cloud" },
    { name: "Docker", category: "Containerization" },
    { name: "PowerBI", category: "Analytics & Telemetry" },
    { name: "PostgreSQL", category: "Relational DB" },
    { name: "Pinecone Vector DB", category: "RAG & AI Embeddings" },
    { name: "TypeScript", category: "Type-Safe Architecture" },
    { name: "Tailwind CSS", category: "UI & Design System" },
  ];

  // Duplicate list to achieve continuous loop
  const marqueeList = [...techStack, ...techStack];

  return (
    <div className="w-full overflow-hidden bg-slate-100/70 dark:bg-slate-900/60 border-y border-slate-200 dark:border-slate-800/80 py-4 relative">
      <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-slate-100 dark:from-[#090d16] to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-slate-100 dark:from-[#090d16] to-transparent z-10 pointer-events-none" />

      <div className="flex w-max animate-infinite-scroll space-x-6">
        {marqueeList.map((tech, index) => (
          <div
            key={`${tech.name}-${index}`}
            className="flex items-center space-x-2.5 px-4 py-2 rounded-xl bg-white dark:bg-slate-800/80 border border-slate-200/80 dark:border-slate-700/60 shadow-sm shrink-0"
          >
            <span className="w-2 h-2 rounded-full bg-brand-500 animate-pulse" />
            <span className="text-xs font-bold text-slate-800 dark:text-slate-200">
              {tech.name}
            </span>
            <span className="text-[10px] text-slate-500 dark:text-slate-400 font-medium px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-900">
              {tech.category}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
