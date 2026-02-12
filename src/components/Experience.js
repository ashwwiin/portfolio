"use client";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export default function Experience() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const experiences = [
    {
      company: "Donyati India Private Ltd",
      role: "Software Engineer",
      period: "2024 - 2025",
      type: "Full-Time",
      description: [
        "Engineered a core, responsive web application using Next.js and React.js following Agile methodology, leading to a 15% increase in site-wide user engagement.",
        "Spearheaded the deployment of a full-stack application (Next.js/PostgreSQL) and established CI/CD pipelines for automated system workflows, reducing deployment time by 30%.",
        "Utilized Tailwind CSS and modern Styled Components to design a clean, intuitive User Interface (UI) and ensured cross-browser consistency.",
        "Oracle Enterprise Performance Management (EPM) Consultant.",
        "Collaborated on multiple client projects involving Oracle EPM integration, designing and implementing data pipelines for secure data flow and enterprise systems."
      ]
    },
    {
      company: "Donyati India Private Ltd",
      role: "Software Engineer Trainee",
      period: "2024",
      type: "Trainee",
      description: [
        "Developed a responsive web application using Next.js and Tailwind CSS, reducing UI development time by 30% while ensuring uniform cross-platform experience.",
        "Integrated multiple React libraries for state management and modular architecture, boosting application performance by 15%.",
        "Pioneered Single Sign-On (SSO) authorization using React.js, cutting down user login time by 40% and streamlining access across integrated application modules during traineeship.",
        "Gained foundational experience in frontend development workflows, component architecture, and modern CSS practices."
      ]
    }
  ];

  return (
    <section
      id="experience"
      className="py-16 md:py-20 px-6 md:px-12 lg:px-16 relative bg-gradient-to-b from-white via-slate-50 to-white dark:from-black dark:via-slate-950 dark:to-black overflow-hidden"
    >
      {/* Rocket Animation */}
      {isMounted && (
        <motion.div
          initial={{ x: -200, y: -300, rotate: -45, opacity: 0 }}
          whileInView={{
            x: [null, window.innerWidth / 2, window.innerWidth / 2 - 100],
            y: [null, -100, 50],
            rotate: [-45, 0, 10],
            opacity: [0, 1, 1]
          }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{
            duration: 2,
            times: [0, 0.6, 1],
            ease: "easeInOut"
          }}
          className="fixed top-0 left-0 text-7xl md:text-9xl z-[200] pointer-events-none"
        >
          🚀
          {/* Smoke trail */}
          <motion.div
            animate={{
              opacity: [0.3, 0.7, 0.3],
              scale: [1, 1.3, 1]
            }}
            transition={{
              duration: 0.5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute -right-12 top-1/2 -translate-y-1/2 text-5xl md:text-6xl"
          >
            💨
          </motion.div>
        </motion.div>
      )}

      {/* Section Header */}
      <div className="relative flex flex-col items-start mb-12">
        <span className="absolute -top-8 -left-4 text-7xl md:text-9xl font-black text-slate-900/[0.03] dark:text-white/[0.03] select-none pointer-events-none uppercase tracking-tighter">
          Career
        </span>

        <div className="relative z-10 w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-wrap items-center gap-4"
          >
            <h2 className="text-3xl md:text-5xl font-black text-slate-900 dark:text-white uppercase tracking-tighter leading-none">
              Work <span className="gradient-text">Experience</span>
            </h2>
            <div className="h-[2px] w-12 md:w-24 rounded-full bg-accent" />
          </motion.div>

          <p className="text-[10px] md:text-xs font-bold text-slate-400 dark:text-slate-600 uppercase tracking-[0.5em] mt-3 ml-1">
            Professional Journey
          </p>
        </div>
      </div>

      {/* Timeline Container */}
      <div className="relative">
        {/* Vertical Timeline Line - Hidden on mobile */}
        <div className="hidden md:block absolute left-12 top-0 bottom-0 w-px bg-gradient-to-b from-slate-300 via-slate-200 to-transparent dark:from-slate-700 dark:via-slate-800 dark:to-transparent" />

        {/* Experience Items */}
        <div className="space-y-8 md:space-y-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="relative md:pl-28"
            >
              {/* Timeline Node - Hidden on mobile */}
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 + 0.2 }}
                className="hidden md:block absolute left-9 top-8 w-5 h-5 rounded-full border-4 border-white dark:border-black bg-accent shadow-lg z-10"
              />

              {/* Horizontal Connector - Hidden on mobile */}
              <div className="hidden md:block absolute left-14 top-10 w-14 h-px bg-slate-300 dark:bg-slate-700" />

              {/* Content Card */}
              <motion.div
                whileHover={{ y: -5, x: 5 }}
                className="glass p-6 rounded-xl border border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600 hover:shadow-xl transition-all"
              >
                {/* Header */}
                <div className="mb-4">
                  <div className="flex flex-col gap-3 mb-3">
                    <div>
                      <h3 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white mb-1">
                        {exp.role}
                      </h3>
                      <p className="text-base md:text-lg font-semibold gradient-text">
                        {exp.company}
                      </p>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        {exp.period}
                      </div>
                      <span className="px-3 py-1 rounded-full text-xs font-medium bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
                        {exp.type}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Description */}
                <ul className="space-y-2">
                  {exp.description.map((item, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.2 + i * 0.05 }}
                      className="flex items-start gap-3 text-slate-700 dark:text-slate-300 text-sm leading-relaxed"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-slate-400 dark:bg-slate-600 mt-2 shrink-0" />
                      {item}
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* End Node - Hidden on mobile */}
        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          className="hidden md:block absolute left-10.5 bottom-0 w-3 h-3 rounded-full bg-slate-300 dark:bg-slate-700"
        />
      </div>
    </section>
  );
}