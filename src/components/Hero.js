"use client";

import React, { useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function Hero() {
  const [mounted, setMounted] = useState(false);
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-white via-slate-50 to-white dark:from-black dark:via-slate-950 dark:to-black py-8 md:py-12">
      {/* Multi-layer animated background */}
      <div className="absolute inset-0 -z-10">
        {/* Large morphing blobs */}
        <motion.div
          className="absolute -top-40 -left-40 w-[600px] h-[600px] bg-gradient-to-br from-purple-500/30 to-blue-500/30 dark:from-purple-500/20 dark:to-blue-500/20 rounded-full blur-3xl"
          animate={{
            x: [0, 100, 0],
            y: [0, 150, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        />

        <motion.div
          className="absolute -bottom-40 -right-40 w-[500px] h-[500px] bg-gradient-to-br from-cyan-500/30 to-pink-500/30 dark:from-cyan-500/20 dark:to-pink-500/20 rounded-full blur-3xl"
          animate={{
            x: [0, -100, 0],
            y: [0, -100, 0],
            scale: [1, 1.3, 1],
          }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        />

        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.02] dark:opacity-[0.05]"
          style={{
            backgroundImage: 'linear-gradient(rgba(139, 92, 246, 0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(139, 92, 246, 0.5) 1px, transparent 1px)',
            backgroundSize: '50px 50px',
          }}
        />

        {/* Floating particles */}
        {mounted && [...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 md:w-2 md:h-2 rounded-full bg-purple-500/40 dark:bg-purple-400/30"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.2, 0.6, 0.2],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 5 + Math.random() * 5,
              repeat: Infinity,
              delay: Math.random() * 3,
            }}
          />
        ))}
      </div>

      <motion.div
        style={{ y, opacity }}
        className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-16"
      >
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* Left side - Text content */}
          <div className="text-center lg:text-left">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center gap-3 px-5 py-2.5 bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl rounded-full shadow-lg border border-slate-200/50 dark:border-slate-700/50 mb-8 md:mb-10"
            >
              <motion.span
                animate={{ scale: [1, 1.3, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-2.5 h-2.5 rounded-full bg-green-500 shadow-lg shadow-green-500/50"
              />
              <span className="text-sm font-bold gradient-text">Open to opportunities</span>
            </motion.div>

            {/* Main heading */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tighter leading-[0.95] mb-8 md:mb-10"
            >
              <span className="block text-slate-900 dark:text-white mb-2">
                Hi, I'm{" "}
                <span className="inline-block bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-600 bg-clip-text text-transparent">
                  Ashwin
                </span>
              </span>
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8, duration: 0.8 }}
                className="block text-slate-600 dark:text-slate-400 text-4xl md:text-5xl lg:text-6xl"
              >
                Frontend Developer
              </motion.span>
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="text-lg md:text-xl text-slate-600 dark:text-slate-400 mb-10 md:mb-12 leading-relaxed max-w-xl mx-auto lg:mx-0"
            >
              Building modern, responsive web applications with cutting-edge technologies.
              Passionate about creating pixel-perfect user experiences.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-10 md:mb-12"
            >
              <motion.a
                href="#projects"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="group relative px-8 py-4 btn-primary text-lg overflow-hidden shadow-xl"
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  View Projects
                  <motion.svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    animate={{ x: [0, 4, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </motion.svg>
                </span>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600"
                  animate={{ x: ['-100%', '100%'] }}
                  transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
                  style={{ opacity: 0.3 }}
                />
              </motion.a>

              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl text-slate-900 dark:text-white rounded-2xl font-bold text-lg border-2 border-slate-200 dark:border-slate-700 hover:border-purple-500 dark:hover:border-purple-500 transition-all shadow-lg"
              >
                Get in Touch
              </motion.a>
            </motion.div>

            {/* Tech stack pills */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.4, duration: 0.8 }}
              className="flex flex-wrap gap-3 justify-center lg:justify-start"
            >
              {["React", "Next.js", "JavaScript", "TailwindCSS"].map((tech, i) => (
                <motion.span
                  key={tech}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1.5 + i * 0.1, type: "spring" }}
                  whileHover={{ scale: 1.1, y: -5 }}
                  className="px-4 py-2 bg-white/60 dark:bg-slate-900/60 backdrop-blur-lg rounded-full text-sm font-semibold border border-slate-200/50 dark:border-slate-700/50 shadow-md hover:shadow-lg hover:border-purple-500/50 transition-all cursor-pointer"
                >
                  {tech}
                </motion.span>
              ))}
            </motion.div>
          </div>

          {/* Right side - Professional Photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="hidden lg:flex items-center justify-center relative"
          >
            <div className="relative w-full max-w-md aspect-square">
              {/* Photo container with gradient border */}
              <motion.div
                className="absolute inset-0 rounded-full p-1.5"
                style={{
                  background: 'linear-gradient(135deg, rgba(139, 92, 246, 0.6), rgba(59, 130, 246, 0.6), rgba(6, 182, 212, 0.6))',
                }}
              >
                <div className="w-full h-full rounded-full bg-white dark:bg-black p-2">
                  <motion.div
                    className="w-full h-full rounded-full overflow-hidden shadow-2xl bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-800 dark:to-slate-900 relative"
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    {/* Replace src with your actual photo path like "/images/photo.jpg" */}
                    <img
                      src="/images/photo.jpg"
                      alt="Ashwin Thamban"
                      className="w-full h-full object-cover"
                      style={{ objectPosition: '50% 30%' }}
                    />

                    {/* Gradient overlay on hover */}
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 to-blue-600/20 opacity-0  transition-opacity duration-300" />
                  </motion.div>
                </div>
              </motion.div>

            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}