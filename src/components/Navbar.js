"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import NavbarThemeSelector from "./NavbarThemeSelector";

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
      setScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ${
        scrolled
          ? "bg-white/90 dark:bg-black/90 backdrop-blur-xl shadow-lg border-b border-slate-200/50 dark:border-slate-800/80 py-1"
          : "bg-white/60 dark:bg-black/60 backdrop-blur-md py-2"
      }`}
    >
      <div className="px-4 sm:px-6 md:px-12 lg:px-16 max-w-7xl mx-auto">
        <div className="flex items-center justify-between h-14 sm:h-16">

          {/* Logo */}
          <Link href="/" className="group">
            <h1 className="text-lg sm:text-xl md:text-2xl font-bold tracking-tight">
              <span className="text-slate-900 dark:text-white">Ashwin</span>{" "}
              <span className="gradient-text">
                Thamban
              </span>
            </h1>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href}>
                <span className="text-sm font-medium text-slate-700 dark:text-slate-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors">
                  {link.label}
                </span>
              </Link>
            ))}

            <NavbarThemeSelector />

            <Link
              href="#contact"
              className="px-5 py-2 btn-primary text-sm font-semibold rounded-xl"
            >
              Hire Me
            </Link>
          </div>

          {/* Mobile Navigation Header Controls */}
          <div className="flex lg:hidden items-center gap-2 sm:gap-3">
            <NavbarThemeSelector />
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-900 dark:text-white rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              aria-label="Toggle Navigation Menu"
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
      </div>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 lg:hidden"
              onClick={() => setMobileMenuOpen(false)}
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 h-full w-[280px] bg-white/95 dark:bg-slate-900/95 backdrop-blur-2xl border-l border-slate-200 dark:border-slate-800 z-50 lg:hidden shadow-2xl p-6 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between pb-4 border-b border-slate-200 dark:border-slate-800">
                  <span className="font-bold text-sm text-slate-900 dark:text-white">Navigation</span>
                  <button
                    onClick={() => setMobileMenuOpen(false)}
                    className="p-1.5 rounded-lg text-slate-500 hover:text-slate-900 dark:hover:text-white transition-colors"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>

                <div className="flex flex-col gap-4 mt-6">
                  {navLinks.map((link) => (
                    <Link key={link.href} href={link.href}>
                      <div
                        onClick={() => setMobileMenuOpen(false)}
                        className="text-base font-semibold text-slate-800 dark:text-slate-200 hover:text-purple-600 dark:hover:text-purple-400 transition-colors py-1"
                      >
                        {link.label}
                      </div>
                    </Link>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-slate-200 dark:border-slate-800">
                <Link
                  href="#contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full block px-6 py-3 btn-primary text-center font-bold text-sm rounded-xl"
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