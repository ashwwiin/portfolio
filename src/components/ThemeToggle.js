"use client";

import { useTheme } from "next-themes";
import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

const PRESET_COLORS = [
  { name: "Blue", hex: "#2563eb" },
  { name: "Emerald", hex: "#10b981" },
  { name: "Violet", hex: "#8b5cf6" },
  { name: "Amber", hex: "#f59e0b" },
  { name: "Rose", hex: "#f43f5e" },
  { name: "Slate", hex: "#64748b" },
];

export default function ControlCenter() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [accent, setAccent] = useState("#6366f1");
  const [isOpen, setIsOpen] = useState(false);

  // 1. Create a ref for the container
  const containerRef = useRef(null);

  useEffect(() => {
    setMounted(true);
    const savedColor = localStorage.getItem("accent-color") || "#6366f1";
    setAccent(savedColor);
    // Set all gradient color variables
    document.documentElement.style.setProperty("--color-primary", savedColor);
    document.documentElement.style.setProperty("--color-primary-from", savedColor);
    document.documentElement.style.setProperty("--color-primary-to", savedColor);

    // 2. Click outside logic
    const handleClickOutside = (event) => {
      if (containerRef.current && !containerRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    // Add listener when component mounts
    document.addEventListener("mousedown", handleClickOutside);

    // Clean up listener when component unmounts
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const updateColor = (hex) => {
    setAccent(hex);
    localStorage.setItem("accent-color", hex);
    // Update all the gradient color variables
    document.documentElement.style.setProperty("--color-primary", hex);
    document.documentElement.style.setProperty("--color-primary-from", hex);
    document.documentElement.style.setProperty("--color-primary-to", hex);
  };

  if (!mounted) return null;

  return (
    /* 3. Attach the ref to the outer div */
    <div ref={containerRef} className="fixed bottom-6 right-6 z-30 flex flex-col items-end">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20, filter: "blur(10px)" }}
            animate={{ opacity: 1, scale: 1, y: 0, filter: "blur(0px)" }}
            exit={{ opacity: 0, scale: 0.8, y: 20, filter: "blur(10px)" }}
            className="mb-4 p-4 min-w-[180px] bg-white/40 dark:bg-slate-900/40 backdrop-blur-2xl border border-white/20 dark:border-slate-800/50 rounded-[2rem] shadow-2xl ring-1 ring-white/10"
          >
            {/* Theme Switcher */}
            <div className="mb-6">
              <div className="flex justify-between items-center mb-3 px-1">
                <span className="text-[8px] font-black uppercase tracking-[0.2em] text-slate-500">Theme</span>
              </div>

              <div
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="relative w-full h-10 bg-slate-200/50 dark:bg-slate-800/50 rounded-xl cursor-pointer p-1 flex items-center"
              >
                <motion.div
                  layout
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  className="absolute w-[calc(50%-4px)] h-[calc(100%-8px)] bg-white dark:bg-slate-600 rounded-lg shadow-md flex items-center justify-center"
                  style={{ x: theme === "dark" ? "100%" : "0%" }}
                >
                  <span className="text-sm">{theme === 'dark' ? '🌙' : '☀️'}</span>
                </motion.div>
                <div className="w-1/2 flex justify-center opacity-30 text-[10px]">☀️</div>
                <div className="w-1/2 flex justify-center opacity-30 text-[10px]">🌙</div>
              </div>
            </div>

            {/* Color Grid */}
            <div>
              <span className="text-[8px] font-black uppercase tracking-[0.2em] text-slate-500 block mb-3 px-1">Accent</span>
              <div className="grid grid-cols-3 gap-2">
                {PRESET_COLORS.map((color) => (
                  <button
                    key={color.hex}
                    onClick={() => updateColor(color.hex)}
                    className="group relative w-10 h-10 rounded-full transition-all duration-300 hover:scale-110 active:scale-75 flex items-center justify-center shadow-sm"
                    style={{ backgroundColor: color.hex }}
                  >
                    {accent === color.hex && (
                      <motion.div
                        layoutId="activeRing"
                        className="absolute inset-[-3px] rounded-full border-[1.5px]"
                        style={{ borderColor: color.hex }}
                        transition={{ type: "spring", bounce: 0.4 }}
                      />
                    )}
                  </button>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Trigger */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="w-14 h-14 flex items-center justify-center rounded-[1.5rem] bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xl relative group"
      >
        <div
          className="absolute inset-1 rounded-[1.2rem] blur-xl opacity-30 transition-all duration-700 group-hover:inset-0"
          style={{ backgroundColor: accent }}
        />

        <div className="relative z-10 text-xl transition-all duration-500 transform group-hover:rotate-6">
          <AnimatePresence mode="wait">
            <motion.span
              key={isOpen ? "open" : "closed"}
              initial={{ y: 5, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -5, opacity: 0 }}
            >
              {isOpen ? "😎" : "🎨"}
            </motion.span>
          </AnimatePresence>
        </div>

        <svg className="absolute inset-0 w-full h-full -rotate-90 pointer-events-none">
          <circle
            cx="28" cy="28" r="26"
            fill="none"
            stroke="var(--primary-accent)"
            strokeWidth="1.5"
            strokeDasharray="163"
            className="transition-all duration-1000 opacity-20"
            style={{ strokeDashoffset: isOpen ? 0 : 163 }}
          />
        </svg>
      </motion.button>
    </div>
  );
}