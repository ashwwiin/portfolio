"use client";

import React from "react";
import { motion } from "framer-motion";
import { Github, Instagram, Mail } from "lucide-react";

export default function Footer() {
  const socialLinks = [
    { name: "Instagram", icon: Instagram, href: "https://instagram.com/ashwiiiiiinnnnnn" },
    { name: "GitHub", icon: Github, href: "https://github.com/ashwwiin" },
    { name: "Email", icon: Mail, href: "mailto:ashwinthamban22@gmail.com" },
  ];

  return (
    <footer className="relative border-t border-slate-200/50 dark:border-slate-800/50 overflow-hidden bg-gradient-to-b from-white via-slate-50 to-white dark:from-black dark:via-slate-950 dark:to-black">
      <div className="relative py-8 px-6">
        {/* Centered Content */}
        <div className="max-w-md mx-auto text-center space-y-4">
          {/* Social Icons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-4"
          >
            {socialLinks.map((social, index) => {
              const Icon = social.icon;
              return (
                <motion.a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-3 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-accent text-slate-600 dark:text-slate-400 hover:text-white transition-all duration-300 shadow-sm hover:shadow-md"
                  aria-label={social.name}
                >
                  <Icon className="w-5 h-5" />
                </motion.a>
              );
            })}
          </motion.div>

          {/* Copyright with Name */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-500 dark:text-slate-400 text-xs font-medium"
          >
            © {new Date().getFullYear()} Ashwin Thamban. All rights reserved
          </motion.p>
        </div>
      </div>
    </footer>
  );
}