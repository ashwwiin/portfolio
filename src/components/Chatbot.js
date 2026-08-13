"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Sparkles,
  Bot,
  User,
  Trash2,
  X,
  Send,
  ExternalLink,
  Maximize2,
  Minimize2,
  GripVertical,
  Copy,
  Check,
  Briefcase,
  Code2,
  FolderGit2,
  GraduationCap,
  Mail,
  Code,
  Image as ImageIcon,
  Download
} from "lucide-react";

const QUICK_PROMPTS = [
  { label: "🚀 Tech Stack", query: "What are your main skills and tech stack?", icon: Code2 },
  { label: "💼 Work Experience", query: "Tell me about your work experience.", icon: Briefcase },
  { label: "📂 Featured Projects", query: "What projects have you built?", icon: FolderGit2 },
  { label: "🎓 Education", query: "What is your educational background?", icon: GraduationCap },
  { label: "✉️ Contact Info", query: "How can I contact Ashwin?", icon: Mail },
  { label: "🎨 Generate Image", query: "Generate an image of a futuristic developer workspace with glowing neon setup.", icon: ImageIcon }
];

function ImageBlock({ alt, src }) {
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(false);

  return (
    <div className="my-3 rounded-2xl overflow-hidden border border-slate-200/80 dark:border-slate-800 shadow-xl bg-slate-950 relative group">
      {!loaded && !error && (
        <div className="h-44 sm:h-52 w-full flex flex-col items-center justify-center bg-slate-900 text-slate-400 text-xs gap-2 p-4">
          <Sparkles className="w-5 h-5 text-yellow-400 animate-spin" />
          <span className="font-semibold text-slate-200">AshAI is generating image...</span>
          <span className="text-[10px] text-slate-500">Creating custom AI artwork via Pollinations AI</span>
        </div>
      )}

      {error ? (
        <div className="p-4 bg-slate-900 text-slate-400 text-xs text-center">
          ⚠️ Couldn't load image. <a href={src} target="_blank" rel="noopener noreferrer" className="underline text-purple-400">Open Direct Link</a>
        </div>
      ) : (
        <img
          src={src}
          alt={alt || "AI Generated Image"}
          onLoad={() => setLoaded(true)}
          onError={() => setError(true)}
          className={`w-full h-auto max-h-72 sm:max-h-80 object-cover transition-opacity duration-500 ${loaded ? "opacity-100" : "opacity-0 absolute inset-0"}`}
        />
      )}

      {loaded && (
        <div className="p-2 sm:p-2.5 bg-slate-900/90 backdrop-blur-md text-[10px] sm:text-[11px] font-sans text-slate-300 flex items-center justify-between border-t border-slate-800">
          <span className="truncate max-w-[160px] sm:max-w-[200px] font-medium text-slate-200">{alt || "AI Generated Image"}</span>
          <a
            href={src}
            target="_blank"
            rel="noopener noreferrer"
            download="ashai-generated-image.jpg"
            className="flex items-center gap-1 px-2 py-1 rounded-lg bg-purple-600/80 hover:bg-purple-600 text-white font-semibold transition-colors shadow-sm text-[10px]"
          >
            <Download className="w-3 h-3" /> Save
          </a>
        </div>
      )}
    </div>
  );
}

function CodeBlock({ code, language }) {
  const [copied, setCopied] = useState(false);

  const copyCode = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="my-2.5 rounded-xl overflow-hidden bg-slate-950 border border-slate-800 text-slate-100 shadow-lg">
      {/* Code Block Header */}
      <div className="flex items-center justify-between px-3 py-1.5 bg-slate-900 border-b border-slate-800/80 text-[10px] sm:text-[11px] font-mono text-slate-400">
        <span className="uppercase tracking-wider font-semibold text-purple-400 flex items-center gap-1.5">
          <Code className="w-3 h-3 text-purple-400" />
          {language || "code"}
        </span>
        <button
          onClick={copyCode}
          className="flex items-center gap-1 px-2 py-0.5 rounded bg-slate-800/80 hover:bg-slate-700 text-slate-200 hover:text-white transition-all border border-slate-700/50 text-[10px]"
        >
          {copied ? (
            <>
              <Check className="w-3 h-3 text-emerald-400" />
              <span className="text-emerald-400 font-sans font-medium text-[10px]">Copied!</span>
            </>
          ) : (
            <>
              <Copy className="w-3 h-3" />
              <span className="font-sans text-[10px]">Copy code</span>
            </>
          )}
        </button>
      </div>

      {/* Code Body */}
      <div className="p-3 overflow-x-auto text-[11px] sm:text-xs font-mono leading-relaxed selection:bg-purple-900 selection:text-white">
        <pre className="whitespace-pre">{code}</pre>
      </div>
    </div>
  );
}

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [hasUnread, setHasUnread] = useState(true);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [copiedId, setCopiedId] = useState(null);

  const [messages, setMessages] = useState([
    {
      id: "welcome-1",
      sender: "bot",
      text: "👋 Hi there! I'm AshAI, Ashwin's personal AI Assistant powered by Google Gemini 3.6.\n\nAsk me about Ashwin's skills, work experience, projects, or ask me to **generate code** or **generate an AI image**!",
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    }
  ]);

  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
      setHasUnread(false);
    }
  }, [messages, isOpen]);

  const handleSend = async (textToSend = input) => {
    const trimmed = textToSend.trim();
    if (!trimmed || isLoading) return;

    const userMsg = {
      id: Date.now().toString(),
      sender: "user",
      text: trimmed,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    const updatedMessages = [...messages, userMsg];
    setMessages(updatedMessages);
    if (textToSend === input) setInput("");
    setIsLoading(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: updatedMessages }),
      });

      const data = await response.json();

      const botMsg = {
        id: (Date.now() + 1).toString(),
        sender: "bot",
        text: data.reply || "Sorry, I couldn't process your question right now.",
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };

      setMessages((prev) => [...prev, botMsg]);
    } catch (err) {
      console.error("Chat error:", err);
      const errorMsg = {
        id: (Date.now() + 1).toString(),
        sender: "bot",
        text: "⚠️ Couldn't reach the AI server. Please make sure your dev server is running and check your API key setup.",
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      setMessages((prev) => [...prev, errorMsg]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleClearHistory = () => {
    setMessages([
      {
        id: Date.now().toString(),
        sender: "bot",
        text: "Conversation cleared! How can I help you?",
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      }
    ]);
  };

  const handleCopyText = (msgId, text) => {
    const clean = (text || "").replace(/\*\*/g, "");
    navigator.clipboard.writeText(clean);
    setCopiedId(msgId);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const renderMessageContent = (text) => {
    const cleanText = (text || "").replace(/\*\*/g, "");
    const blocks = cleanText.split(/(```[\s\S]*?```)/g);

    return blocks.map((block, bIdx) => {
      if (block.startsWith("```") && block.endsWith("```")) {
        const content = block.slice(3, -3);
        const firstLineEnd = content.indexOf("\n");
        let language = "code";
        let code = content;

        if (firstLineEnd !== -1) {
          const possibleLang = content.slice(0, firstLineEnd).trim();
          if (possibleLang && !possibleLang.includes(" ")) {
            language = possibleLang;
            code = content.slice(firstLineEnd + 1);
          }
        }

        return <CodeBlock key={bIdx} code={code.trim()} language={language} />;
      }

      const lines = block.split('\n');

      return lines.map((line, idx) => {
        if (!line.trim() && idx > 0 && idx < lines.length - 1) return <div key={idx} className="h-1" />;

        const imgMatch = /!\[([^\]]*)\]\(([^)]+)\)/.exec(line);
        if (imgMatch) {
          return <ImageBlock key={idx} alt={imgMatch[1]} src={imgMatch[2]} />;
        }

        const linkRegex = /\[([^\]]+)\]\(([^)]+)\)/g;
        const parts = [];
        let lastIndex = 0;
        let match;

        while ((match = linkRegex.exec(line)) !== null) {
          if (match.index > lastIndex) {
            parts.push(line.substring(lastIndex, match.index));
          }
          parts.push(
            <a
              key={match.index}
              href={match[2]}
              target="_blank"
              rel="noopener noreferrer"
              className="text-purple-600 dark:text-purple-400 underline font-semibold hover:text-purple-700 inline-flex items-center gap-1"
            >
              {match[1]} <ExternalLink className="w-3 h-3 inline" />
            </a>
          );
          lastIndex = match.index + match[0].length;
        }
        if (lastIndex < line.length) {
          parts.push(line.substring(lastIndex));
        }

        return (
          <p key={idx} className="min-h-[1.2em] mb-1 leading-relaxed">
            {parts.length > 0 ? parts : line}
          </p>
        );
      });
    });
  };

  return (
    <motion.div
      drag
      dragMomentum={false}
      dragElastic={0.05}
      className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-[150] font-sans"
    >
      {/* Floating Trigger Button */}
      <AnimatePresence>
        {!isOpen && (
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            className="relative group flex items-center gap-2 cursor-grab active:cursor-grabbing"
          >
            {/* Grip handle hint */}
            <div className="hidden sm:flex items-center justify-center p-1 text-slate-400 opacity-60 group-hover:opacity-100 transition-opacity">
              <GripVertical className="w-4 h-4" />
            </div>

            <button
              onClick={() => setIsOpen(true)}
              className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-slate-900 dark:bg-slate-900 text-white shadow-2xl hover:shadow-purple-500/25 border border-slate-700/80 flex items-center justify-center relative transition-transform hover:scale-105 active:scale-95"
              aria-label="Open AshAI (Draggable)"
              title="Click to open AshAI • Drag to reposition"
            >
              {/* Dynamic Accent Glow */}
              <div
                className="absolute inset-1 rounded-xl blur-xl opacity-50 transition-all duration-500 group-hover:opacity-90 animate-pulse"
                style={{ backgroundColor: "var(--color-primary, #8b5cf6)" }}
              />

              <div className="relative z-10 flex items-center justify-center text-white">
                <Sparkles className="w-5 h-5 sm:w-6 sm:h-6 animate-pulse text-yellow-400" />
              </div>

              {/* Unread badge */}
              {hasUnread && (
                <span className="absolute -top-1 -right-1 flex h-4 w-4 z-20">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-4 w-4 bg-purple-600 text-[10px] font-bold text-white items-center justify-center">
                    1
                  </span>
                </span>
              )}
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Chat Drawer Window (Fully Responsive on Mobile & Desktop) */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            className={`flex flex-col bg-white/95 dark:bg-slate-900/95 backdrop-blur-2xl rounded-3xl border border-slate-200/80 dark:border-slate-800 shadow-2xl overflow-hidden transition-all duration-300 ${
              isExpanded 
                ? "w-[94vw] sm:w-[600px] md:w-[640px] h-[85vh]" 
                : "w-[calc(100vw-32px)] max-w-[420px] h-[520px] max-h-[80vh]"
            }`}
          >
            {/* Header (Acts as Drag Handle) */}
            <div className="flex items-center justify-between px-4 py-3 sm:px-5 sm:py-3.5 bg-slate-900 text-white border-b border-slate-800 cursor-grab active:cursor-grabbing select-none shrink-0">
              <div className="flex items-center gap-2">
                <GripVertical className="w-3.5 h-3.5 text-slate-500 hidden sm:block" />
                <div
                  className="relative p-1.5 sm:p-2 rounded-xl text-white shadow-md flex items-center justify-center"
                  style={{ backgroundColor: "var(--color-primary, #8b5cf6)" }}
                >
                  <Bot className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                  <span className="absolute bottom-0 right-0 w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-emerald-400 border-2 border-slate-900" />
                </div>
                <div>
                  <h3 className="font-bold text-xs text-white flex items-center gap-1">
                    AshAI ⚡
                    <Sparkles className="w-3 h-3 text-yellow-400" />
                  </h3>
                  <p className="text-[9px] sm:text-[10px] text-slate-400 font-medium flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 inline-block animate-pulse" />
                    Online • Gemini 3.6
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-0.5 sm:gap-1 text-slate-400">
                <button
                  onClick={handleClearHistory}
                  title="Clear Chat"
                  className="p-1.5 rounded-lg hover:bg-slate-800 hover:text-white transition-colors"
                >
                  <Trash2 className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                </button>
                <button
                  onClick={() => setIsExpanded(!isExpanded)}
                  title={isExpanded ? "Collapse" : "Expand"}
                  className="hidden sm:block p-1.5 rounded-lg hover:bg-slate-800 hover:text-white transition-colors"
                >
                  {isExpanded ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
                </button>
                <button
                  onClick={() => setIsOpen(false)}
                  title="Close Chat"
                  className="p-1.5 rounded-lg hover:bg-slate-800 hover:text-white transition-colors"
                >
                  <X className="w-4 h-4 sm:w-5 sm:h-5" />
                </button>
              </div>
            </div>

            {/* Quick Suggestions Scroll */}
            <div className="px-3 py-2 bg-slate-50/80 dark:bg-slate-950/60 border-b border-slate-200/50 dark:border-slate-800/50 flex items-center gap-1.5 overflow-x-auto scrollbar-none shrink-0">
              {QUICK_PROMPTS.map((prompt, i) => (
                <button
                  key={i}
                  disabled={isLoading}
                  onClick={() => handleSend(prompt.query)}
                  className="whitespace-nowrap px-2.5 py-1 text-[11px] font-semibold rounded-full bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 border border-slate-200/80 dark:border-slate-700/80 hover:border-purple-500 dark:hover:border-purple-500 hover:text-purple-600 dark:hover:text-purple-400 transition-all shadow-sm shrink-0 disabled:opacity-50 flex items-center gap-1"
                >
                  {prompt.label}
                </button>
              ))}
            </div>

            {/* Messages Container */}
            <div className="flex-1 p-3 sm:p-4 overflow-y-auto space-y-3.5 text-xs sm:text-sm text-slate-800 dark:text-slate-200">
              {messages.map((msg) => (
                <motion.div
                  key={msg.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex items-start gap-2 group/msg ${msg.sender === "user" ? "flex-row-reverse" : ""}`}
                >
                  {/* Avatar */}
                  <div
                    className="w-6 h-6 sm:w-7 sm:h-7 rounded-full flex items-center justify-center shrink-0 text-white text-xs font-bold shadow-sm"
                    style={{
                      backgroundColor: msg.sender === "user" ? "var(--color-primary, #8b5cf6)" : "#3b82f6"
                    }}
                  >
                    {msg.sender === "user" ? <User className="w-3.5 h-3.5 sm:w-4 sm:h-4" /> : <Bot className="w-3.5 h-3.5 sm:w-4 sm:h-4" />}
                  </div>

                  {/* Message Bubble */}
                  <div className={`max-w-[88%] flex flex-col ${msg.sender === "user" ? "items-end" : "items-start"}`}>
                    <div
                      className={`p-3 rounded-2xl shadow-sm relative group/bubble ${
                        msg.sender === "user"
                          ? "bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-tr-none"
                          : "bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-100 border border-slate-200/60 dark:border-slate-700/50 rounded-tl-none"
                      }`}
                    >
                      {renderMessageContent(msg.text)}

                      {/* Copy Action Button */}
                      {msg.sender === "bot" && (
                        <button
                          onClick={() => handleCopyText(msg.id, msg.text)}
                          className="absolute -top-2 -right-2 opacity-0 group-hover/bubble:opacity-100 p-1 bg-white dark:bg-slate-700 text-slate-600 dark:text-slate-200 rounded-md border border-slate-200 dark:border-slate-600 shadow-sm transition-all text-[10px]"
                          title="Copy message"
                        >
                          {copiedId === msg.id ? <Check className="w-3 h-3 text-emerald-500" /> : <Copy className="w-3 h-3" />}
                        </button>
                      )}
                    </div>

                    <span className="text-[9px] sm:text-[10px] text-slate-400 mt-1 px-1">
                      {msg.timestamp}
                    </span>
                  </div>
                </motion.div>
              ))}

              {/* Loading Indicator */}
              {isLoading && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center gap-2 text-slate-400 text-xs"
                >
                  <div
                    className="w-6 h-6 sm:w-7 sm:h-7 rounded-full text-white flex items-center justify-center shadow-sm"
                    style={{ backgroundColor: "var(--color-primary, #8b5cf6)" }}
                  >
                    <Bot className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                  </div>
                  <div className="px-3.5 py-2.5 bg-slate-100 dark:bg-slate-800 rounded-2xl rounded-tl-none flex items-center gap-1.5 border border-slate-200/60 dark:border-slate-700/50">
                    <span className="text-[11px] font-medium text-slate-500 dark:text-slate-400">AshAI thinking</span>
                    <span className="w-1.5 h-1.5 bg-purple-500 rounded-full animate-bounce [animation-delay:-0.3s]" />
                    <span className="w-1.5 h-1.5 bg-purple-500 rounded-full animate-bounce [animation-delay:-0.15s]" />
                    <span className="w-1.5 h-1.5 bg-purple-500 rounded-full animate-bounce" />
                  </div>
                </motion.div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Input Form Footer */}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSend();
              }}
              className="p-2.5 sm:p-3 bg-slate-50 dark:bg-slate-950 border-t border-slate-200/80 dark:border-slate-800/80 flex items-center gap-2 shrink-0"
            >
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask AshAI..."
                disabled={isLoading}
                className="flex-1 px-3.5 py-2 text-xs sm:text-sm bg-white dark:bg-slate-900 text-slate-900 dark:text-white rounded-xl border border-slate-200 dark:border-slate-700 focus:outline-none focus:border-purple-500 dark:focus:border-purple-500 transition-all placeholder:text-slate-400 disabled:opacity-60"
              />
              <button
                type="submit"
                disabled={!input.trim() || isLoading}
                className="p-2 sm:p-2.5 rounded-xl text-white font-semibold disabled:opacity-40 disabled:cursor-not-allowed hover:opacity-90 transition-opacity shadow-md shrink-0 flex items-center justify-center"
                style={{ backgroundColor: "var(--color-primary, #8b5cf6)" }}
              >
                <Send className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
