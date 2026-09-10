import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./providers";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { AiChatWidget } from "@/components/AiChatWidget";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Qorvane Labs | Digital Engineering, Intelligent Automation & Software Hub",
  description:
    "End-to-end digital engineering, intelligent AI automation, custom web/mobile platforms, and dedicated software development pods near IT Park, Dehradun, India.",
  keywords: [
    "Qorvane Labs",
    "Dehradun IT Park",
    "Sahastradhara Road Software Company",
    "Custom Web Development Next.js",
    "Mobile App Engineering Flutter",
    "AI RAG LLM Integration",
    "Dedicated Engineering Pods",
    "Business Analytics Dashboard",
  ],
  authors: [{ name: "Qorvane Labs Engineering" }],
  openGraph: {
    title: "Qorvane Labs | Enterprise Digital Engineering Hub",
    description:
      "Engineering resilient software, intelligent data pipelines, and high-performance web experiences. Dehradun IT Park operations.",
    url: "https://qorvane.com",
    siteName: "Qorvane Labs",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="light" style={{ colorScheme: "light" }}>
      <body className={`${inter.variable} font-sans antialiased bg-[#F8FAFC] text-slate-900 min-h-screen flex flex-col`}>
        <ThemeProvider>
          <Header />
          <main className="flex-grow">{children}</main>
          <Footer />
          <AiChatWidget />
        </ThemeProvider>
      </body>
    </html>
  );
}
