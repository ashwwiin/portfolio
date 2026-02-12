"use client";

import React from "react";
import { motion } from "framer-motion";

const SKILLS = [
  {
    category: "Frontend",
    items: ["React.js", "Next.js", "HTML5", "Tailwind CSS", "CSS3"],
    description: "Building responsive, high-performance user interfaces.",
    gradient: "from-purple-500 to-blue-500",
    icon: "⚛️"
  },
  {
    category: "Backend",
    items: ["Node.js", "MongoDB", "Firebase", "PostgreSQL", "MySQL"],
    description: "Architecting scalable server-side logic and databases.",
    gradient: "from-blue-500 to-cyan-500",
    icon: "🔧"
  },
  {
    category: "Core Path",
    items: ["JavaScript (ES6+)", "Python", "Oracle EPM"],
    description: "Mastering programming fundamentals and enterprise tools.",
    gradient: "from-cyan-500 to-pink-500",
    icon: "💻"
  },
  {
    category: "Version Control",
    items: ["Git", "GitHub"],
    description: "Collaborating efficiently with modern workflows.",
    gradient: "from-pink-500 to-purple-500",
    icon: "🔀"
  },
];

export default function Skills() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const item = {
    hidden: { opacity: 0, scale: 0.9 },
    show: { opacity: 1, scale: 1 }
  };

  return (
    <section id="skills" className="py-24 px-6 md:px-12 lg:px-20 relative bg-gradient-to-b from-white via-slate-50 to-white dark:from-black dark:via-slate-950 dark:to-black overflow-hidden">
      {/* Dynamic Background Decor */}
      <motion.div
        animate={{
          x: [0, 50, 0],
          y: [0, 30, 0],
          scale: [1, 1.2, 1]
        }}
        transition={{ duration: 20, repeat: Infinity }}
        className="absolute top-0 right-0 w-80 h-80 rounded-full blur-[120px] pointer-events-none opacity-10"
        style={{ background: 'var(--color-primary)' }}
      />

      {/* Header - Right Aligned (Full Width) */}
      <div className="relative flex flex-col items-end mb-20 w-full">
        <span className="absolute -top-8 right-0 text-7xl md:text-9xl font-black text-slate-900/[0.03] dark:text-white/[0.03] select-none pointer-events-none uppercase tracking-tighter">
          Technical
        </span>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative z-10 flex items-center gap-4"
        >
          <div className="h-[2px] w-12 md:w-24 rounded-full bg-accent" />
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 dark:text-white uppercase tracking-tighter leading-none">
            Sk<span className="gradient-text">ills</span>
          </h2>
        </motion.div>

        <p className="text-[10px] md:text-xs font-bold text-slate-400 dark:text-slate-600 uppercase tracking-[0.5em] mt-3 mr-1 text-right">
          Technologies & Tools
        </p>
      </div>

      <div className="max-w-7xl mx-auto">

        {/* Skills Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {SKILLS.map((skill) => (
            <motion.div
              key={skill.category}
              variants={item}
              whileHover={{ y: -8, scale: 1.03 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="group relative h-full"
            >
              {/* Card */}
              <div className="relative h-full p-8 bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm rounded-[2rem] border border-slate-200/60 dark:border-slate-800/60 hover:border-accent transition-colors duration-500 shadow-lg hover:shadow-2xl flex flex-col">

                {/* Icon Container - Glass Effect */}
                <div className="mb-6 inline-flex">
                  <div className="p-4 rounded-2xl bg-white/30 dark:bg-white/5 backdrop-blur-md border border-white/20 dark:border-white/10 shadow-inner">
                    <span className="text-3xl block transform group-hover:scale-110 transition-transform duration-300">
                      {skill.icon}
                    </span>
                  </div>
                </div>

                <h3 className="text-xl font-black tracking-tight mb-3 text-slate-900 dark:text-white group-hover:text-accent transition-colors">
                  {skill.category}
                </h3>

                <p className="text-sm text-slate-600 dark:text-slate-400 mb-6 flex-grow leading-relaxed">
                  {skill.description}
                </p>

                {/* Skills List */}
                <div className="flex flex-wrap gap-2">
                  {skill.items.map((tech, index) => (
                    <motion.span
                      key={tech}
                      whileHover={{ scale: 1.05 }}
                      className="px-3 py-1.5 text-xs font-bold rounded-lg bg-slate-100/50 dark:bg-slate-800/50 border border-slate-200/50 dark:border-slate-700/50 hover:border-accent hover:text-accent transition-all cursor-default"
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>

                {/* Bottom Gradient Line */}
                <div
                  className="absolute bottom-0 left-8 right-8 h-1 rounded-t-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{ background: 'linear-gradient(90deg, transparent, var(--color-primary), transparent)' }}
                />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}