"use client";

import React from "react";

export default function Footer() {
  return (
    <footer className="relative border-t border-slate-200/50 dark:border-slate-800/50 overflow-hidden bg-gradient-to-b from-white via-slate-50 to-white dark:from-black dark:via-slate-950 dark:to-black">
      {/* Subtle gradient accent */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-slate-50/30 dark:to-slate-900/30 -z-10" />

      <div className="py-16 px-8 md:px-16 lg:px-24">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-8">
          {/* Branding */}
          <div>
            <h3 className="text-2xl font-black tracking-tighter mb-2">
              Ashwin <span className="gradient-text">Thamban</span>
            </h3>
            <p className="text-slate-500 dark:text-slate-400 text-sm font-medium">
              Frontend Developer • {new Date().getFullYear()}
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-6">
            <a
              href="https://github.com/ashwwiin"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-bold uppercase tracking-widest text-slate-600 dark:text-slate-400 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-purple-500 hover:to-blue-500 transition-all"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/ashwin-thamban-0a7b45222"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-bold uppercase tracking-widest text-slate-600 dark:text-slate-400 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-purple-500 hover:to-blue-500 transition-all"
            >
              LinkedIn
            </a>
            <a
              href="mailto:ashwinthamban22@gmail.com"
              className="btn-primary px-5 py-2 text-sm"
            >
              Email Me
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px w-full bg-gradient-to-r from-transparent via-slate-300 dark:via-slate-700 to-transparent mb-8" />

        {/* Copyright */}
        <div className="text-center">
          <p className="text-slate-500 dark:text-slate-400 text-sm">
            Built with <span className="text-red-500">♥</span> using Next.js & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}