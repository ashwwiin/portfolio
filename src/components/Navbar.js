"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { href: "#about", label: "About" },
    { href: "#experience", label: "Experience" },
    { href: "#education", label: "Education" },
    { href: "#projects", label: "Projects" },
    { href: "#skills", label: "Skills" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 bg-gradient-to-b from-white via-slate-50 to-white dark:from-black dark:via-slate-950 dark:to-black ${scrolled
        ? "backdrop-blur-2xl shadow-lg dark:shadow-slate-900/30 border-b border-slate-200/50 dark:border-slate-700/50"
        : ""
        }`}
    >
      <div className="px-6 md:px-12 lg:px-16">
        <div className="flex items-center justify-between h-16">

          {/* Logo */}
          <Link href="/" className="group">
            <h1 className="text-xl md:text-2xl font-bold tracking-tight">
              <span className="text-slate-900 dark:text-white">Ashwin</span>{" "}
              <span className="gradient-text">
                Thamban
              </span>
            </h1>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href}>
                <span className="text-sm font-medium text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors">
                  {link.label}
                </span>
              </Link>
            ))}

            <Link
              href="#contact"
              className="px-6 py-2.5 btn-primary text-sm"
            >
              Hire Me
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-slate-900 dark:text-white"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 lg:hidden"
              onClick={() => setMobileMenuOpen(false)}
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 h-full w-[280px] bg-white dark:bg-slate-900 backdrop-blur-xl border-l border-slate-200 dark:border-slate-700 z-50 lg:hidden shadow-2xl p-8 flex flex-col gap-6"
            >
              <div className="flex justify-end">
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2 text-slate-900 dark:text-white"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              <div className="flex flex-col gap-6 mt-8">
                {navLinks.map((link) => (
                  <Link key={link.href} href={link.href}>
                    <div
                      onClick={() => setMobileMenuOpen(false)}
                      className="text-lg font-semibold text-slate-900 dark:text-white hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
                    >
                      {link.label}
                    </div>
                  </Link>
                ))}
              </div>

              <div className="mt-auto flex flex-col gap-4">
                <Link
                  href="#contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full px-6 py-3 btn-primary text-center"
                >
                  Hire Me
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
}