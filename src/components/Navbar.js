"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "About", href: "/#about" },
    { name: "Experience", href: "/#experience" },
    { name: "Education", href: "/#education" },
    { name: "Projects", href: "/#projects" },
    { name: "Skills", href: "/#skills" },
  ];

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="sticky top-0 z-50 bg-white dark:bg-slate-950 border-b border-slate-100 dark:border-slate-900/50">
      <div className="flex justify-between items-center p-6 max-w-6xl mx-auto">
        {/* Branding */}
        <Link href="/" className="text-xl font-bold tracking-tighter z-[60]">
          Ashwin <span style={{ color: 'var(--primary-accent)' }}>Thamban</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-8 text-sm font-medium">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-slate-600 dark:text-slate-300 transition-colors"
              style={{ '--hover-color': 'var(--primary-accent)' }} 
              onMouseEnter={(e) => e.target.style.color = 'var(--primary-accent)'}
              onMouseLeave={(e) => e.target.style.color = ''}
            >
              {link.name}
            </Link>
          ))}
          <Link
            href="/#contact"
            className="bg-slate-900 dark:bg-slate-100 text-white dark:text-slate-900 px-5 py-2 rounded-lg font-bold hover:scale-105 transition-transform"
          >
            Hire Me
          </Link>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={toggleMenu}
          className="lg:hidden z-[60] p-2 text-slate-900 dark:text-white focus:outline-none"
          aria-label="Toggle Menu"
        >
          <div className="w-6 h-5 relative flex flex-col justify-between">
            <span className={`h-0.5 w-full bg-current transform transition-all duration-300 ${isOpen ? "rotate-45 translate-y-2" : ""}`} />
            <span className={`h-0.5 w-full bg-current transition-all duration-300 ${isOpen ? "opacity-0" : ""}`} />
            <span className={`h-0.5 w-full bg-current transform transition-all duration-300 ${isOpen ? "-rotate-45 -translate-y-2" : ""}`} />
          </div>
        </button>
      </div>

      {/* Mobile Side Nav Overlay */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Dark Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={toggleMenu}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[50] lg:hidden"
            />

            {/* Side Drawer */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 h-full w-[280px] bg-white dark:bg-slate-900 z-[55] lg:hidden shadow-2xl p-10 flex flex-col gap-8"
            >
              <div className="mt-16 flex flex-col gap-6">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={toggleMenu}
                    className="text-2xl font-bold text-slate-800 dark:text-slate-200 transition-colors"
                    onMouseEnter={(e) => e.target.style.color = 'var(--primary-accent)'}
                    onMouseLeave={(e) => e.target.style.color = ''}
                  >
                    {link.name}
                  </Link>
                ))}
                <Link
                  href="/#contact"
                  onClick={toggleMenu}
                  style={{ backgroundColor: 'var(--primary-accent)' }}
                  className="mt-4 text-white px-6 py-4 rounded-2xl text-center font-bold text-lg"
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