"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { projects } from "@/data/projects";
import { ArrowRight, Code2, ChevronDown, ChevronUp } from "lucide-react";


export default function Projects() {
  const [showAll, setShowAll] = useState(false);
  const displayedProjects = showAll ? projects : projects.slice(0, 6);
  return (
    <section
      id="projects"
      className="py-16 md:py-24 px-6 md:px-12 lg:px-20 relative bg-gradient-to-b from-white via-slate-50 to-white dark:from-black dark:via-slate-950 dark:to-black overflow-hidden"
    >
      {/* Section Header - Left Aligned */}
      <div className="relative flex flex-col items-start mb-12">
        <span className="absolute -top-8 -left-4 text-7xl md:text-9xl font-black text-slate-900/[0.03] dark:text-white/[0.03] select-none pointer-events-none uppercase tracking-tighter">
          Works
        </span>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative z-10 flex items-center gap-4"
        >
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 dark:text-white uppercase tracking-tighter leading-none">
            Pro<span className="gradient-text">jects</span>
          </h2>
          <div className="h-[2px] w-12 md:w-24 rounded-full bg-accent" />
        </motion.div>

        <p className="text-[10px] md:text-xs font-bold text-slate-400 dark:text-slate-600 uppercase tracking-[0.5em] mt-3 ml-1">
          Featured Works
        </p>
      </div>

      {/* Projects Grid - Unique Card Style */}
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {displayedProjects.map((project, index) => (
          <motion.div
            key={project.slug}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              delay: index * 0.1,
              duration: 0.5,
            }}
            className="group relative h-full"
          >
            <Link href={`/projects/${project.slug}`}>
              {/* Card Container with Fixed Height */}
              <div className="relative bg-white dark:bg-slate-900 rounded-2xl p-6 shadow-md hover:shadow-2xl transition-all duration-500 border-2 border-slate-200 dark:border-slate-800 h-full flex flex-col overflow-hidden group-hover:border-transparent">

                {/* Animated Gradient Border on Hover */}
                <div
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 p-[2px] -z-10"
                  style={{
                    background: `linear-gradient(135deg, var(--color-primary), var(--color-primary))`
                  }}
                >
                  <div className="absolute inset-[2px] rounded-2xl bg-white dark:bg-slate-900" />
                </div>

                {/* Background Gradient on Hover */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background: `linear-gradient(135deg, color-mix(in srgb, var(--color-primary) 5%, transparent), color-mix(in srgb, var(--color-primary) 5%, transparent))`
                  }}
                />

                {/* Colored Glow Effect on Hover */}
                <div
                  className="absolute -inset-1 rounded-2xl blur-lg opacity-0 group-hover:opacity-20 transition-opacity duration-500 -z-20"
                  style={{ backgroundColor: 'var(--color-primary)' }}
                />

                {/* Number Badge with Shimmer Effect */}
                <div
                  className="absolute top-4 right-4 w-10 h-10 rounded-xl flex items-center justify-center shadow-lg overflow-hidden"
                  style={{ background: `linear-gradient(135deg, var(--color-primary), var(--color-primary))` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                  <span className="text-sm font-black text-white relative z-10">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                </div>

                {/* Content */}
                <div className="relative z-10 flex flex-col h-full">
                  {/* Icon */}
                  <div className="mb-4 inline-flex">
                    <div
                      className="p-3 rounded-xl bg-white/20 dark:bg-white/5 backdrop-blur-md border border-white/20 dark:border-white/10 shadow-sm text-slate-600 dark:text-slate-400 transition-all duration-300 group-hover:text-white group-hover:shadow-lg group-hover:bg-accent group-hover:border-transparent"
                    >
                      <Code2 className="w-6 h-6" />
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl md:text-2xl font-black mb-3 leading-tight transition-all duration-300 text-slate-900 dark:text-white group-hover:gradient-text">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-slate-600 dark:text-slate-400 mb-4 leading-relaxed flex-1 line-clamp-3">
                    {project.description}
                  </p>

                  {/* Tech Stack with Gradient Badges */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech?.slice(0, 3).map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 rounded-lg text-xs font-semibold text-slate-700 dark:text-slate-300 border transition-all duration-300"
                        style={{
                          background: `color-mix(in srgb, var(--color-primary) 10%, transparent)`,
                          borderColor: `color-mix(in srgb, var(--color-primary) 20%, transparent)`
                        }}
                      >
                        {tech}
                      </span>
                    ))}
                    {project.tech?.length > 3 && (
                      <span
                        className="px-3 py-1 rounded-lg text-xs font-semibold text-slate-700 dark:text-slate-300 border transition-all duration-300"
                        style={{
                          background: `color-mix(in srgb, var(--color-primary) 10%, transparent)`,
                          borderColor: `color-mix(in srgb, var(--color-primary) 20%, transparent)`
                        }}
                      >
                        +{project.tech.length - 3}
                      </span>
                    )}
                  </div>

                  {/* View Link */}
                  <div className="flex items-center gap-2 text-sm font-bold">
                    <span className="gradient-text">
                      View Project
                    </span>
                    <motion.div
                      className="text-accent"
                      animate={{ x: [0, 3, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      <ArrowRight className="w-4 h-4" />
                    </motion.div>
                  </div>
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>

      {/* Show More/Less Button */}
      {projects.length > 6 && (
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex justify-center mt-12"
        >
          <motion.button
            onClick={() => setShowAll(!showAll)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 px-6 py-3 rounded-xl bg-accent text-white font-bold text-sm uppercase tracking-wider shadow-lg hover:shadow-xl transition-all"
          >
            {showAll ? (
              <>
                <span>Show Less</span>
                <ChevronUp className="w-4 h-4" />
              </>
            ) : (
              <>
                <span>Show More ({projects.length - 6} more)</span>
                <ChevronDown className="w-4 h-4" />
              </>
            )}
          </motion.button>
        </motion.div>
      )}

      {/* Bottom Decorative Element */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.6 }}
        className="flex justify-center mt-20"
      >
        <div className="flex items-center gap-2">
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8 + i * 0.1 }}
              className={`w-2 h-2 rounded-full ${i === 1 ? 'bg-slate-900 dark:bg-white w-2 h-2' : 'bg-slate-300 dark:bg-slate-800'}`}
            />
          ))}
        </div>
      </motion.div>
    </section>
  );
}