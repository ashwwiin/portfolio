"use client";

import React from "react";
import { motion } from "framer-motion";

const SKILLS = [
  {
    category: "Frontend",
    items: ["React.js", "Next.js", "HTML5", "Tailwind CSS", "CSS3"],
    description: "Building responsive, high-performance user interfaces."
  },
  {
    category: "Backend",
    items: ["Node.js", "MongoDB", "Firebase", "PostgreSQL, MySQL"],
    description: "Architecting scalable server-side logic and databases."
  },
  {
    category: "Core Path",
    items: ["JavaScript (ES6+)", "Python", "Oracle EPM"],
    description: "Foundational engineering and technical architecture."
  },
  {
    category: "Version Control",
    items: ["Git", "GitHub", "GitLab"],
    description: "Ensuring code integrity and collaborative efficiency."
  },
];

export default function Skills() {
  return (
    <section id="skills" className="max-w-6xl mx-auto py-24 px-6 relative">
      {/* Dynamic Background Decor */}
      <div 
        className="absolute top-0 right-0 w-64 h-64 blur-[120px] pointer-events-none opacity-10" 
        style={{ backgroundColor: 'var(--primary-accent)' }}
      />

      {/* Header - Styled with Dynamic Accent */}
      <div className="relative flex flex-col items-end mb-20 text-right">
        {/* Large Background Text */}
        <span className="absolute -top-8 -right-4 text-7xl md:text-9xl font-black text-slate-900/5 dark:text-white/[0.03] select-none pointer-events-none uppercase tracking-tighter">
          Arsenal
        </span>
        
        <div className="flex items-center gap-4 z-10">
          <div 
            className="h-[2px] w-12 md:w-24 rounded-full" 
            style={{ backgroundColor: 'var(--primary-accent)' }}
          />
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 dark:text-white uppercase tracking-tighter">
            Tech <span style={{ color: 'var(--primary-accent)' }}>Stack</span>
          </h2>
        </div>
        
        <p className="text-[10px] md:text-xs font-bold text-slate-400 dark:text-slate-600 uppercase tracking-[0.5em] mt-2 mr-2">
          Technical Arsenal
        </p>
      </div>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {SKILLS.map((group, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1, duration: 0.5 }}
            className="group relative p-8 rounded-[2.5rem] bg-white dark:bg-slate-900/40 border border-slate-200 dark:border-slate-800/50 transition-all duration-500 shadow-sm hover:shadow-2xl"
            style={{ '--hover-border': 'var(--primary-accent)' }}
            onMouseEnter={(e) => e.currentTarget.style.borderColor = 'color-mix(in srgb, var(--primary-accent), transparent 60%)'}
            onMouseLeave={(e) => e.currentTarget.style.borderColor = ''}
          >
            {/* Hover Accent Glow */}
            <div 
              className="absolute top-0 right-0 w-24 h-24 blur-3xl rounded-full opacity-0 group-hover:opacity-10 transition-opacity pointer-events-none" 
              style={{ backgroundColor: 'var(--primary-accent)' }}
            />

            <div className="relative z-10">
              <h3 
                className="text-xs font-black uppercase tracking-[0.3em] mb-4"
                style={{ color: 'var(--primary-accent)' }}
              >
                {group.category}
              </h3>
              
              <p className="text-xs text-slate-500 dark:text-slate-400 mb-8 leading-relaxed font-medium h-8">
                {group.description}
              </p>
              
              <div className="flex flex-col gap-5">
                {group.items.map((skill) => (
                  <div 
                    key={skill} 
                    className="flex items-center justify-between group/item"
                  >
                    <div className="flex items-center gap-3">
                      <div 
                        className="h-1 w-1 rounded-full bg-slate-300 dark:bg-slate-700 transition-colors" 
                        onMouseEnter={(e) => e.target.style.backgroundColor = 'var(--primary-accent)'}
                        style={{ '--dot-color': 'var(--primary-accent)' }}
                      />
                      <span 
                        className="text-sm font-bold text-slate-700 dark:text-slate-300 transition-colors"
                        onMouseEnter={(e) => e.target.style.color = 'var(--primary-accent)'}
                        onMouseLeave={(e) => e.target.style.color = ''}
                      >
                        {skill}
                      </span>
                    </div>
                    {/* Subtle level indicator */}
                    <div className="flex gap-1">
                       <div 
                         className="w-1 h-1 rounded-full transition-colors" 
                         style={{ backgroundColor: 'color-mix(in srgb, var(--primary-accent), transparent 85%)' }}
                       />
                       <div 
                         className="w-1 h-1 rounded-full transition-colors" 
                         style={{ backgroundColor: 'color-mix(in srgb, var(--primary-accent), transparent 85%)' }}
                       />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}