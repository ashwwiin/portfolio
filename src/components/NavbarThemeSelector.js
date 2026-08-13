"use client";

import { useTheme } from "next-themes";
import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sun, Moon, Palette, Check } from "lucide-react";

const PRESET_COLORS = [
  { name: "Violet", hex: "#8b5cf6" },
  { name: "Blue", hex: "#2563eb" },
  { name: "Emerald", hex: "#10b981" },
  { name: "Amber", hex: "#f59e0b" },
  { name: "Rose", hex: "#f43f5e" },
  { name: "Slate", hex: "#64748b" },
];

export default function NavbarThemeSelector() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [accent, setAccent] = useState("#8b5cf6");
  const [isOpen, setIsOpen] = useState(false);

  const containerRef = useRef(null);

  useEffect(() => {
    setMounted(true);
    const savedColor = localStorage.getItem("accent-color") || "#8b5cf6";
    setAccent(savedColor);
    document.documentElement.style.setProperty("--color-primary", savedColor);
    document.documentElement.style.setProperty("--color-primary-from", savedColor);
    document.documentElement.style.setProperty("--color-primary-to", savedColor);

    const handleClickOutside = (event) => {
      if (containerRef.current && !containerRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const updateColor = (hex) => {
    setAccent(hex);
    localStorage.setItem("accent-color", hex);
    document.documentElement.style.setProperty("--color-primary", hex);
    document.documentElement.style.setProperty("--color-primary-from", hex);
    document.documentElement.style.setProperty("--color-primary-to", hex);
  };

  if (!mounted) return null;

  return (
    <div ref={containerRef} className="relative flex items-center gap-2">
      {/* Quick Mode Toggle Button */}
      <button
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        className="p-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
        title={`Switch to ${theme === "dark" ? "Light" : "Dark"} Mode`}
      >
        {theme === "dark" ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-blue-600" />}
      </button>

      {/* Palette Trigger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors relative"
        title="Change Accent Color"
      >
        <Palette className="w-4 h-4" style={{ color: accent }} />
      </button>

      {/* Accent Color Popover */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            className="absolute top-12 right-0 z-[120] p-3 w-48 bg-white/95 dark:bg-slate-900/95 backdrop-blur-2xl border border-slate-200/80 dark:border-slate-800 rounded-2xl shadow-2xl"
          >
            <span className="text-[10px] font-bold uppercase text-slate-400 block mb-2 px-1">
              Accent Color
            </span>
            <div className="grid grid-cols-3 gap-2">
              {PRESET_COLORS.map((color) => (
                <button
                  key={color.hex}
                  onClick={() => updateColor(color.hex)}
                  className="h-8 rounded-lg flex items-center justify-center transition-transform hover:scale-110 active:scale-95 shadow-sm border border-white/20"
                  style={{ backgroundColor: color.hex }}
                  title={color.name}
                >
                  {accent === color.hex && <Check className="w-3.5 h-3.5 text-white drop-shadow" />}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
