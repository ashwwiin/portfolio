"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import NavbarThemeSelector from "./NavbarThemeSelector";
import { X, Menu, ArrowRight, Sparkles } from "lucide-react";

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

  // Prevent scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [mobileMenuOpen]);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ${
          scrolled
            ? "bg-white/90 dark:bg-slate-950/90 backdrop-blur-xl shadow-lg border-b border-slate-200/50 dark:border-slate-800/80 py-2"
            : "bg-white/60 dark:bg-black/60 backdrop-blur-md py-3"
        }`}
      >
        {/* Full-width container on larger screens */}
        <div className="w-full px-4 sm:px-6 md:px-10 lg:px-12 xl:px-16">
          <div className="flex items-center justify-between h-12 sm:h-14">

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

            {/* Mobile Navigation Controls */}
            <div className="flex lg:hidden items-center gap-2">
              <NavbarThemeSelector />
              <button
                onClick={() => setMobileMenuOpen(true)}
                className="p-2 text-slate-900 dark:text-white rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
                aria-label="Open Mobile Menu"
              >
                <Menu className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Modern High-End Fullscreen Mobile Navigation Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[300] bg-white/98 dark:bg-slate-950/98 backdrop-blur-3xl flex flex-col justify-between p-6 lg:hidden font-sans"
          >
            {/* Top Bar inside Overlay */}
            <div className="flex items-center justify-between border-b border-slate-200/80 dark:border-slate-800/80 pb-4">
              <Link href="/" onClick={() => setMobileMenuOpen(false)}>
                <h2 className="text-lg font-black tracking-tight text-slate-900 dark:text-white">
                  Ashwin <span className="gradient-text">Thamban</span>
                </h2>
              </Link>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="p-2 rounded-2xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 hover:bg-purple-600 hover:text-white transition-all shadow-sm"
                aria-label="Close Menu"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Centered Navigation Links */}
            <div className="flex flex-col items-center justify-center gap-6 my-auto">
              {navLinks.map((link, idx) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.05 * idx, duration: 0.3 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-2xl sm:text-3xl font-extrabold text-slate-800 dark:text-slate-100 hover:text-purple-600 dark:hover:text-purple-400 transition-colors tracking-tight flex items-center gap-2"
                  >
                    <span>{link.label}</span>
                  </Link>
                </motion.div>
              ))}
            </div>

            {/* Bottom Action Footer */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="pt-4 border-t border-slate-200/80 dark:border-slate-800/80 flex flex-col gap-3"
            >
              <Link
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full py-4 btn-primary text-center font-bold text-base rounded-2xl shadow-xl flex items-center justify-center gap-2"
              >
                <span>Hire Me</span>
                <Sparkles className="w-5 h-5 text-yellow-300" />
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}