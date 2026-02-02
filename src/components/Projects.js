"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { projects } from "@/data/projects";

export default function Projects() {
  return (
    <section id="projects" className="max-w-6xl mx-auto py-24 px-6 relative">
      
      {/* Dynamic Header - Styled to match Experience/Education/Skills */}
      <div className="relative flex flex-col items-start mb-20">
        {/* Large Faded Background Text */}
        <span className="absolute -top-8 -left-4 text-7xl md:text-9xl font-black text-slate-900/[0.03] dark:text-white/[0.03] select-none pointer-events-none uppercase tracking-tighter">
          Creations
        </span>
        
        <div className="relative z-10 flex items-center gap-4">
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 dark:text-white uppercase tracking-tighter leading-none">
            Featured <span style={{ color: 'var(--primary-accent)' }}>Projects</span>
          </h2>
          <div 
            className="h-[2px] w-12 md:w-24 rounded-full" 
            style={{ backgroundColor: 'var(--primary-accent)' }}
          />
        </div>
        
        <p className="text-[10px] md:text-xs font-bold text-slate-400 dark:text-slate-600 uppercase tracking-[0.5em] mt-3 ml-1">
          Building Digital Solutions
        </p>
      </div>

      {/* Grid Layout */}
      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <motion.div 
            key={project.slug}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="group relative p-8 md:p-12 rounded-[2.5rem] border border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-950/40 transition-all duration-500 shadow-sm hover:shadow-2xl"
            onMouseEnter={(e) => e.currentTarget.style.borderColor = 'color-mix(in srgb, var(--primary-accent), transparent 60%)'}
            onMouseLeave={(e) => e.currentTarget.style.borderColor = ''}
          >
            {/* Background Accent Glow */}
            <div 
              className="absolute top-0 right-0 w-32 h-32 blur-[80px] rounded-full opacity-0 group-hover:opacity-10 transition-opacity pointer-events-none" 
              style={{ backgroundColor: 'var(--primary-accent)' }}
            />

            <div className="relative z-10">
              <h3 className="text-2xl md:text-3xl font-black mb-4 text-slate-900 dark:text-white tracking-tighter uppercase">
                {project.title}
              </h3>
              <p className="text-slate-500 dark:text-slate-400 mb-8 leading-relaxed font-medium">
                {project.description}
              </p>
              
              <Link 
                href={`/projects/${project.slug}`} 
                className="text-sm font-black uppercase tracking-[0.2em] inline-flex items-center gap-3 group/link transition-colors"
                style={{ color: 'var(--primary-accent)' }}
              >
                View Project Details 
                <span 
                  className="transition-transform group-hover/link:translate-x-2"
                  style={{ color: 'var(--primary-accent)' }}
                >
                  →
                </span>
              </Link>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}