"use client";

import React from "react";

export default function Hero() {
  return (
    <section className="flex flex-col items-center justify-center py-24 px-6 text-center">
      {/* Dynamic Badge */}
      <div 
        className="inline-block px-4 py-1.5 mb-6 text-sm font-medium tracking-wider uppercase rounded-full"
        style={{ 
          color: 'var(--primary-accent)', 
          backgroundColor: 'color-mix(in srgb, var(--primary-accent), transparent 85%)' 
        }}
      >
        Available for Hire
      </div>

      {/* Dynamic Title */}
      <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 text-slate-900 dark:text-white">
        Frontend <span style={{ color: 'var(--primary-accent)' }} className="text-glow">Developer</span>
      </h1>

      <p className="max-w-[650px] text-slate-600 dark:text-slate-400 text-lg md:text-xl mb-10 leading-relaxed">
        Building production-grade web applications with React.js, Next.js, and the Frappe Framework. Passionate about clean architecture, real-time systems, and scalable solutions.
      </p>

      <div className="flex flex-col sm:flex-row gap-4">
        <a 
          href="#projects" 
          className="bg-slate-900 dark:bg-slate-100 dark:text-slate-900 text-white px-10 py-4 rounded-2xl font-bold hover:scale-105 transition-transform"
        >
          View My Work
        </a>
        <button 
          className="border border-slate-200 dark:border-slate-800 px-10 py-4 rounded-2xl font-bold hover:bg-slate-50 dark:hover:bg-slate-900 transition"
          style={{ borderColor: 'color-mix(in srgb, var(--primary-accent), transparent 80%)' }}
          onMouseEnter={(e) => e.target.style.borderColor = 'var(--primary-accent)'}
          onMouseLeave={(e) => e.target.style.borderColor = ''}
        >
          Contact Me
        </button>
      </div>
    </section>
  );
}