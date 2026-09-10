"use client";

import { useState, useRef, useEffect } from "react";
import {
  Bot,
  Sparkles,
  Send,
  X,
  RotateCcw,
  ChevronDown,
  ExternalLink,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { siteContact } from "@/data/contactData";

interface Message {
  id: string;
  role: "user" | "assistant";
  content: string;
  timestamp: string;
}

export function AiChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [hasUnread, setHasUnread] = useState(true);

  const initialMessage: Message = {
    id: "init-1",
    role: "assistant",
    content: `Hello! 👋 I'm **Qorvane AI**, your technical assistant. 

How can I help you today? Ask me about:
* 🌐 **Engineering Services** (Web, Mobile, AI/RAG, Managed IT)
* 📁 **Verified Projects** (Red Chilli POS, Basking Bakery, Detailing Raja)
* 👥 **Dedicated Developer Pods**
* 🧮 **Custom Estimates & Pricing**`,
    timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
  };

  const [messages, setMessages] = useState<Message[]>([initialMessage]);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
      setHasUnread(false);
    }
  }, [messages, isOpen]);

  const quickPrompts = [
    "What services do you offer?",
    "Show past projects (Red Chilli, Basking Bakery, Detailing Raja)",
    "Hire a dedicated engineering team",
    "Get a custom project estimate",
  ];

  const handleSendMessage = async (textToSend?: string) => {
    const query = (textToSend || input).trim();
    if (!query || isLoading) return;

    const userMsg: Message = {
      id: Date.now().toString(),
      role: "user",
      content: query,
      timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    };

    setMessages((prev) => [...prev, userMsg]);
    if (!textToSend) setInput("");
    setIsLoading(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          messages: messages.concat(userMsg).map((m) => ({
            role: m.role,
            content: m.content,
          })),
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to fetch response");
      }

      const data = await response.json();

      const aiReply: Message = {
        id: (Date.now() + 1).toString(),
        role: "assistant",
        content: data.reply || "Thank you for reaching out. Please feel free to email us at qorvanelabs@gmail.com.",
        timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
      };

      setMessages((prev) => [...prev, aiReply]);
    } catch (err) {
      console.error("Error sending message:", err);
      const errorMsg: Message = {
        id: (Date.now() + 1).toString(),
        role: "assistant",
        content: `I'm having trouble connecting to the network right now. You can reach our engineering team directly at **[${siteContact.email}](mailto:${siteContact.email})** or call **[${siteContact.phone}](tel:${siteContact.phoneRaw})**.`,
        timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
      };
      setMessages((prev) => [...prev, errorMsg]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleClearChat = () => {
    setMessages([initialMessage]);
  };

  // Helper renderer for basic markdown formatting
  const renderFormattedContent = (content: string) => {
    const lines = content.split("\n");
    return lines.map((line, idx) => {
      if (line.startsWith("### ")) {
        return (
          <h4 key={idx} className="font-bold text-xs uppercase tracking-wider text-brand-600 mt-1 mb-1">
            {line.replace("### ", "")}
          </h4>
        );
      }

      const formattedText = line.split(/(\*\*.*?\*\*|\[.*?\]\(.*?\))/g).map((part, pIdx) => {
        if (part.startsWith("**") && part.endsWith("**")) {
          return <strong key={pIdx} className="font-bold text-slate-900">{part.slice(2, -2)}</strong>;
        }
        if (part.startsWith("[") && part.includes("](")) {
          const match = part.match(/^\[(.*?)\]\((.*?)\)$/);
          if (match) {
            const label = match[1];
            const url = match[2];
            const isExternal = url.startsWith("http") || url.startsWith("mailto:") || url.startsWith("tel:");
            return isExternal ? (
              <a
                key={pIdx}
                href={url}
                target={url.startsWith("http") ? "_blank" : undefined}
                rel={url.startsWith("http") ? "noopener noreferrer" : undefined}
                className="text-brand-600 underline font-semibold hover:text-brand-500 inline-flex items-center gap-0.5"
              >
                <span>{label}</span>
                {url.startsWith("http") && <ExternalLink className="w-3 h-3 inline shrink-0" />}
              </a>
            ) : (
              <Link
                key={pIdx}
                href={url}
                onClick={() => setIsOpen(false)}
                className="text-brand-600 underline font-semibold hover:text-brand-500"
              >
                {label}
              </Link>
            );
          }
        }
        return part;
      });

      if (line.trim().startsWith("* ") || line.trim().startsWith("• ")) {
        return (
          <div key={idx} className="flex items-start space-x-1.5 my-0.5 pl-1">
            <span className="text-brand-500 font-bold">•</span>
            <div>{formattedText}</div>
          </div>
        );
      }

      return (
        <p key={idx} className={line.trim() === "" ? "h-2" : "my-0.5"}>
          {formattedText}
        </p>
      );
    });
  };

  return (
    <>
      {/* Floating Trigger Button */}
      <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3">
        {/* Tooltip hint when closed */}
        {!isOpen && (
          <motion.div
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1 }}
            onClick={() => setIsOpen(true)}
            className="hidden sm:flex items-center space-x-2 px-3.5 py-2 rounded-xl bg-slate-900 text-white text-xs font-semibold shadow-xl backdrop-blur-md cursor-pointer border border-slate-700 hover:border-brand-500 transition-all"
          >
            <Sparkles className="w-3.5 h-3.5 text-brand-400 animate-pulse" />
            <span>Need help? Talk with Qorvane AI</span>
          </motion.div>
        )}

        {/* Circular Trigger */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setIsOpen(!isOpen)}
          className={`w-14 h-14 rounded-full shadow-2xl flex items-center justify-center relative transition-all duration-300 ${
            isOpen
              ? "bg-slate-800 text-white border border-slate-700"
              : "bg-gradient-to-tr from-brand-600 via-brand-500 to-tealAccent-500 text-white shadow-brand-500/30 ring-4 ring-brand-500/20"
          }`}
          aria-label="Toggle Qorvane AI Chatbot"
        >
          {isOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <>
              <Bot className="w-7 h-7" />
              {hasUnread && (
                <span className="absolute top-0 right-0 w-4 h-4 bg-emerald-500 border-2 border-white rounded-full animate-pulse" />
              )}
            </>
          )}
        </motion.button>
      </div>

      {/* Chat Window Modal */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.88, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.88, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="fixed bottom-24 right-4 sm:right-6 z-50 w-[92vw] sm:w-[400px] h-[520px] max-h-[78vh] rounded-3xl shadow-2xl border border-slate-200 bg-white/95 text-slate-900 backdrop-blur-xl flex flex-col overflow-hidden"
          >
            {/* Modal Header */}
            <div className="p-4 border-b border-slate-200 bg-slate-50 flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="relative w-9 h-9 rounded-xl bg-gradient-to-tr from-brand-600 to-tealAccent-500 flex items-center justify-center text-white shadow-md">
                  <Bot className="w-5 h-5" />
                  <span className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-emerald-500 border-2 border-white rounded-full" />
                </div>
                <div>
                  <div className="flex items-center space-x-1.5">
                    <h3 className="font-bold text-sm tracking-tight text-slate-900">
                      Qorvane Labs Assistant
                    </h3>
                    <span className="px-1.5 py-0.2 rounded bg-brand-500/10 text-brand-600 text-[10px] font-extrabold uppercase">
                      AI
                    </span>
                  </div>
                  <p className="text-[11px] text-slate-500">
                    Instant answers on services, pricing, & tech
                  </p>
                </div>
              </div>

              {/* Action Icons */}
              <div className="flex items-center space-x-1">
                <button
                  onClick={handleClearChat}
                  title="Reset conversation"
                  className="p-1.5 text-slate-400 hover:text-slate-600 rounded-lg hover:bg-slate-200/50 transition-colors"
                >
                  <RotateCcw className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setIsOpen(false)}
                  title="Minimize chat"
                  className="p-1.5 text-slate-400 hover:text-slate-600 rounded-lg hover:bg-slate-200/50 transition-colors"
                >
                  <ChevronDown className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Message Area */}
            <div className="flex-1 p-4 space-y-3.5 overflow-y-auto custom-scrollbar text-xs">
              {messages.map((msg) => {
                const isUser = msg.role === "user";
                return (
                  <div
                    key={msg.id}
                    className={`flex flex-col ${isUser ? "items-end" : "items-start"}`}
                  >
                    <div
                      className={`p-3 rounded-2xl max-w-[88%] leading-relaxed ${
                        isUser
                          ? "bg-brand-600 text-white rounded-br-none shadow-md"
                          : "bg-slate-100 text-slate-800 rounded-bl-none border border-slate-200/80 shadow-sm"
                      }`}
                    >
                      {renderFormattedContent(msg.content)}
                    </div>
                    <span className="text-[10px] text-slate-400 mt-1 px-1">
                      {msg.timestamp}
                    </span>
                  </div>
                );
              })}

              {/* Typing indicator */}
              {isLoading && (
                <div className="flex items-center space-x-2 p-3 rounded-2xl rounded-bl-none bg-slate-100 max-w-[100px] border border-slate-200/80">
                  <span className="w-2 h-2 rounded-full bg-brand-500 animate-bounce" style={{ animationDelay: "0ms" }} />
                  <span className="w-2 h-2 rounded-full bg-brand-500 animate-bounce" style={{ animationDelay: "150ms" }} />
                  <span className="w-2 h-2 rounded-full bg-brand-500 animate-bounce" style={{ animationDelay: "300ms" }} />
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Quick Action Chips (Shown if messages length <= 2) */}
            {messages.length <= 2 && (
              <div className="px-4 py-2 border-t border-slate-100 bg-slate-50/50">
                <div className="text-[10px] uppercase font-bold text-slate-400 mb-1.5">
                  Suggested Prompts:
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {quickPrompts.map((prompt, idx) => (
                    <button
                      key={idx}
                      onClick={() => handleSendMessage(prompt)}
                      className="px-2.5 py-1 rounded-full border border-slate-200 bg-white text-[11px] text-slate-700 hover:border-brand-500 hover:text-brand-600 transition-all text-left truncate max-w-full"
                    >
                      {prompt}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Input Footer */}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSendMessage();
              }}
              className="p-3 border-t border-slate-200 bg-white flex items-center space-x-2"
            >
              <input
                type="text"
                placeholder="Ask Qorvane AI a question..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                disabled={isLoading}
                className="flex-1 px-3.5 py-2.5 rounded-xl border border-slate-200 bg-slate-50 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-500 disabled:opacity-50"
              />
              <button
                type="submit"
                disabled={!input.trim() || isLoading}
                className="p-2.5 rounded-xl bg-gradient-to-r from-brand-600 to-tealAccent-600 hover:from-brand-500 hover:to-tealAccent-500 text-white font-semibold shadow-md disabled:opacity-40 transition-all flex items-center justify-center shrink-0"
              >
                <Send className="w-4 h-4" />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
