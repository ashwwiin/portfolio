"use client";

import React from "react";

export default function Footer() {
  return (
    <footer className="mt-20 border-t border-slate-100 dark:border-slate-900 bg-white dark:bg-slate-950">
      <div className="max-w-6xl mx-auto py-12 px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        <p className="text-slate-500 text-sm font-medium">
          © Ashwin {new Date().getFullYear()} — Built with Next.js & Tailwind
        </p>
        
        <div className="flex items-center gap-8 text-sm font-bold uppercase tracking-widest">
          <a 
            href="https://github.com/ashwwiin" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-slate-600 dark:text-slate-400 transition-colors"
            onMouseEnter={(e) => e.target.style.color = 'var(--primary-accent)'}
            onMouseLeave={(e) => e.target.style.color = ''}
          >
            GitHub
          </a>
          <a 
            href="https://www.linkedin.com/in/ashwin-thamban-0a7b45222" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-slate-600 dark:text-slate-400 transition-colors"
            onMouseEnter={(e) => e.target.style.color = 'var(--primary-accent)'}
            onMouseLeave={(e) => e.target.style.color = ''}
          >
            LinkedIn
          </a>
          <a 
            href="mailto:ashwinthamban22@gmail.com" 
            className="px-5 py-2 rounded-xl transition-all hover:scale-105 active:scale-95 text-white"
            style={{ backgroundColor: 'var(--primary-accent)' }}
          >
            Email Me
          </a>
        </div>
      </div>
    </footer>
  );
}