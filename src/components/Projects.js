"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { projects } from "@/data/projects";

export default function Projects() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <section id="projects" className="py-12 md:py-16 px-8 md:px-16 lg:px-24 relative bg-gradient-to-b from-white via-slate-50 to-white dark:from-black dark:via-slate-950 dark:to-black">

      {/* Dynamic Header */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="relative flex flex-col items-start mb-20"
      >
        <span className="absolute -top-8 -left-4 text-8xl md:text-9xl font-black gradient-text opacity-5 select-none pointer-events-none uppercase tracking-tighter">
          Work
        </span>

        <div className="relative z-10 flex items-center gap-6">
          <h2 className="text-4xl md:text-6xl font-black tracking-tighter leading-none">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="h-[3px] w-16 md:w-32 rounded-full bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-500"
          />
        </div>

        <p className="text-slate-500 dark:text-slate-400 mt-4 max-w-2xl text-lg">
          A collection of projects I've built, showcasing modern web technologies and creative problem-solving.
        </p>
      </motion.div>

      {/* Projects Grid with Enhanced Animations */}
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {projects.map((project, index) => (
          <motion.div
            key={project.slug}
            variants={item}
            whileHover={{ y: -12, scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="group relative"
          >
            <Link href={`/projects/${project.slug}`}>
              {/* Gradient Border on Hover */}
              <div className="absolute -inset-[2px] bg-gradient-to-br from-purple-500 via-blue-500 to-cyan-500 rounded-[2rem] opacity-0 group-hover:opacity-100 blur-sm transition-all duration-500" />

              {/* Card */}
              <div className="relative card-premium p-8 h-full flex flex-col overflow-hidden bg-white dark:bg-slate-900">
                {/* Animated Number Badge */}
                <motion.div
                  className="absolute top-6 right-6 w-16 h-16 rounded-2xl glass flex items-center justify-center"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <span className="text-3xl font-black gradient-text">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                </motion.div>

                {/* Project Icon/Emoji */}
                <motion.div
                  className="text-6xl mb-6"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring" }}
                >
                  {project.icon || "🚀"}
                </motion.div>

                {/* Content */}
                <div className="flex-1">
                  <h3 className="text-2xl font-black tracking-tight mb-3 text-slate-900 dark:text-white group-hover:gradient-text transition-all">
                    {project.title}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* View Project Link with Arrow */}
                <div className="flex items-center gap-2 text-sm font-bold uppercase tracking-wider gradient-text">
                  <span>View Project</span>
                  <motion.svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </motion.svg>
                </div>

                {/* Shine Effect on Hover */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 pointer-events-none" />
              </div>
            </Link>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}