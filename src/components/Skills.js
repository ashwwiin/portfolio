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
    items: ["Node.js", "MongoDB", "Firebase", "PostgreSQL, MySQL"],
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
    <section id="skills" className="py-24 px-8 md:px-16 lg:px-24 relative bg-gradient-to-b from-white via-slate-50 to-white dark:from-black dark:via-slate-950 dark:to-black">
      {/* Dynamic Background Decor */}
      <motion.div
        animate={{
          x: [0, 50, 0],
          y: [0, 30, 0],
          scale: [1, 1.2, 1]
        }}
        transition={{ duration: 20, repeat: Infinity }}
        className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-br from-purple-400 to-blue-500 rounded-full blur-[120px] pointer-events-none opacity-10"
      />

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-20"
      >
        <span className="text-8xl md:text-9xl font-black gradient-text opacity-5 absolute left-1/2 transform -translate-x-1/2 -translate-y-8 select-none pointer-events-none uppercase">
          Skills
        </span>
        <h2 className="relative text-4xl md:text-6xl font-black tracking-tighter mb-6">
          Technical <span className="gradient-text">Expertise</span>
        </h2>
        <p className="text-slate-500 dark:text-slate-400 max-w-2xl mx-auto text-lg">
          Technologies and tools I use to bring ideas to life
        </p>
      </motion.div>

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
            className="group relative"
          >
            {/* Gradient Glow on Hover */}
            <div className={`absolute -inset-[1px] bg-gradient-to-br ${skill.gradient} rounded-2xl opacity-0 group-hover:opacity-50 blur transition-all duration-500`} />

            {/* Card */}
            <div className="relative h-full p-8 glass rounded-2xl border border-slate-200/50 dark:border-slate-700/50">
              {/* Icon + Category */}
              <div className="flex items-center gap-3 mb-6">
                <motion.div
                  className="text-4xl"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                >
                  {skill.icon}
                </motion.div>
                <h3 className="text-xl font-black tracking-tight">
                  <span className={`bg-gradient-to-r ${skill.gradient} bg-clip-text text-transparent`}>
                    {skill.category}
                  </span>
                </h3>
              </div>

              {/* Description */}
              <p className="text-sm text-slate-600 dark:text-slate-400 mb-6">
                {skill.description}
              </p>

              {/* Skills List with Animated Badges */}
              <div className="flex flex-wrap gap-2">
                {skill.items.map((tech, index) => (
                  <motion.span
                    key={tech}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.1 }}
                    className="px-3 py-1.5 text-xs font-bold rounded-lg glass border border-slate-200 dark:border-slate-700 hover:border-purple-500 dark:hover:border-purple-500 transition-colors cursor-pointer"
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>

              {/* Animated Progress Bar */}
              <div className="mt-6 h-1 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: "85%" }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.5, delay: 0.3 }}
                  className={`h-full bg-gradient-to-r ${skill.gradient} rounded-full`}
                />
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}