"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import NavbarThemeSelector from "./NavbarThemeSelector";
import { X, Menu, ArrowRight } from "lucide-react";

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
          ? "bg-white/95 dark:bg-slate-950/95 backdrop-blur-xl shadow-lg border-b border-slate-200/50 dark:border-slate-800/80 py-1.5"
          : "bg-white/70 dark:bg-black/70 backdrop-blur-md py-2.5"
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
              className="p-2 text-slate-900 dark:text-white rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
              aria-label="Toggle Mobile Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Side Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* Dark Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[190] lg:hidden"
              onClick={() => setMobileMenuOpen(false)}
            />

            {/* Opaque Mobile Drawer */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 220 }}
              className="fixed top-0 right-0 h-full w-[280px] sm:w-[320px] bg-slate-950 text-white z-[200] lg:hidden shadow-2xl p-6 flex flex-col justify-between border-l border-slate-800/80"
            >
              <div>
                {/* Drawer Header */}
                <div className="flex items-center justify-between pb-4 border-b border-slate-800/80">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-purple-500 animate-pulse" />
                    <span className="font-bold text-sm text-white uppercase tracking-wider">Navigation</span>
                  </div>
                  <button
                    onClick={() => setMobileMenuOpen(false)}
                    className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-900 transition-colors"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                {/* Nav Links */}
                <div className="flex flex-col gap-3 mt-6">
                  {navLinks.map((link) => (
                    <Link key={link.href} href={link.href}>
                      <div
                        onClick={() => setMobileMenuOpen(false)}
                        className="px-4 py-3 rounded-xl bg-slate-900/60 hover:bg-slate-800 text-slate-200 hover:text-white font-semibold text-sm transition-all border border-slate-800/50 hover:border-purple-500/50 flex items-center justify-between group"
                      >
                        <span>{link.label}</span>
                        <ArrowRight className="w-4 h-4 text-slate-500 group-hover:text-purple-400 group-hover:translate-x-1 transition-all" />
                      </div>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Drawer Footer CTA */}
              <div className="pt-4 border-t border-slate-800/80 flex flex-col gap-3">
                <Link
                  href="#contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full py-3.5 btn-primary text-center font-bold text-sm rounded-xl shadow-lg flex items-center justify-center gap-2"
                >
                  <span>Hire Me</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
}