"use client";

import { motion } from "framer-motion";

export function HeroBackground() {
  // Config for floating 3D glass panel cards
  const glassCards = [
    {
      id: 1,
      className: "top-12 left-4 lg:left-10 w-44 h-28 rotate-[-12deg] skew-y-3",
      floatRange: [-14, 10],
      duration: 7,
      delay: 0,
      title: "AI Pipeline",
      stat: "Sub-Second RAG",
    },
    {
      id: 2,
      className: "top-48 left-8 lg:left-24 w-36 h-36 rotate-[15deg] skew-x-2",
      floatRange: [-10, 14],
      duration: 8.5,
      delay: 1.2,
      title: "Real-time POS",
      stat: "45% Faster",
    },
    {
      id: 3,
      className: "bottom-16 left-6 lg:left-16 w-48 h-24 rotate-[-8deg]",
      floatRange: [-12, 12],
      duration: 6.8,
      delay: 2.1,
      title: "Cloud Infrastructure",
      stat: "99.99% SLA",
    },
    {
      id: 4,
      className: "top-16 right-6 lg:right-12 w-48 h-32 rotate-[12deg] skew-y-[-4deg]",
      floatRange: [-12, 16],
      duration: 7.5,
      delay: 0.5,
      title: "Next.js 14 SSR",
      stat: "0.6s Page Speed",
    },
    {
      id: 5,
      className: "top-52 right-8 lg:right-28 w-36 h-36 rotate-[-16deg]",
      floatRange: [-14, 8],
      duration: 9,
      delay: 1.8,
      title: "D2C E-Commerce",
      stat: "2.8x Order Growth",
    },
    {
      id: 6,
      className: "bottom-20 right-6 lg:right-20 w-44 h-28 rotate-[10deg] skew-x-3",
      floatRange: [-8, 14],
      duration: 6.2,
      delay: 2.8,
      title: "Dehradun Hub",
      stat: "Sahastradhara Base",
    },
  ];

  // Dispersed constellation nodes
  const nodes = [
    { x: "12%", y: "22%" },
    { x: "24%", y: "48%" },
    { x: "14%", y: "78%" },
    { x: "86%", y: "20%" },
    { x: "76%", y: "54%" },
    { x: "87%", y: "82%" },
    { x: "50%", y: "14%" },
  ];

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {/* 1. Base Canvas Radial Gradient Glows (z-0) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[950px] h-[600px] bg-gradient-radial from-[rgba(20,184,166,0.15)] via-[rgba(59,130,246,0.09)] to-transparent blur-3xl pointer-events-none -z-10" />

      {/* 2. Geometric Constellation & Wireframe SVG Layer (z-0) */}
      <svg
        className="absolute inset-0 w-full h-full opacity-65 dark:opacity-40 pointer-events-none z-0"
        xmlns="http://www.w3.org/2000/svg"
      >
        <line x1="12%" y1="22%" x2="24%" y2="48%" stroke="rgba(14, 165, 233, 0.22)" strokeWidth="1" strokeDasharray="4 4" />
        <line x1="24%" y1="48%" x2="14%" y2="78%" stroke="rgba(20, 184, 166, 0.22)" strokeWidth="1" />
        <line x1="86%" y1="20%" x2="76%" y2="54%" stroke="rgba(14, 165, 233, 0.22)" strokeWidth="1" strokeDasharray="4 4" />
        <line x1="76%" y1="54%" x2="87%" y2="82%" stroke="rgba(20, 184, 166, 0.22)" strokeWidth="1" />
        <line x1="12%" y1="22%" x2="50%" y2="14%" stroke="rgba(59, 130, 246, 0.16)" strokeWidth="1" />
        <line x1="86%" y1="20%" x2="50%" y2="14%" stroke="rgba(59, 130, 246, 0.16)" strokeWidth="1" />
      </svg>

      {/* Glowing Pulse Nodes */}
      {nodes.map((node, i) => (
        <div
          key={i}
          className="absolute z-0 pointer-events-none flex items-center justify-center"
          style={{ left: node.x, top: node.y }}
        >
          <span className="w-2.5 h-2.5 rounded-full bg-teal-400 shadow-[0_0_14px_#14b8a6] animate-pulse" />
          <span className="absolute w-6 h-6 rounded-full border border-teal-400/30 animate-ping" />
        </div>
      ))}

      {/* 3. Floating 3D Frosted Glass Panels (z-10, pointer-events-none) */}
      <div className="absolute inset-0 z-10 pointer-events-none hidden md:block">
        {glassCards.map((card) => (
          <motion.div
            key={card.id}
            initial={{ y: 0, rotate: 0 }}
            animate={{
              y: card.floatRange,
              rotate: [0, 3, -3, 0],
            }}
            transition={{
              duration: card.duration,
              delay: card.delay,
              repeat: Infinity,
              repeatType: "mirror",
              ease: "easeInOut",
            }}
            className={`absolute ${card.className} p-4 rounded-3xl backdrop-blur-md border border-white/80 dark:border-slate-700/60 shadow-[0_8px_32px_0_rgba(0,180,216,0.12)] flex flex-col justify-between overflow-hidden`}
            style={{
              background:
                "linear-gradient(135deg, rgba(255, 255, 255, 0.7) 0%, rgba(204, 251, 241, 0.3) 100%)",
            }}
          >
            <div className="w-8 h-8 rounded-xl bg-white/70 dark:bg-slate-800/70 backdrop-blur-md flex items-center justify-center shadow-sm">
              <span className="w-2.5 h-2.5 rounded-full bg-teal-500 animate-pulse" />
            </div>
            <div>
              <div className="text-[10px] font-bold uppercase tracking-wider text-slate-600 dark:text-slate-300">
                {card.title}
              </div>
              <div className="text-sm font-extrabold text-slate-900 dark:text-white">
                {card.stat}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
