"use client";

import { motion } from "framer-motion";

export default function Reveal({ children }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }} // Start invisible and slightly lower
      whileInView={{ opacity: 1, y: 0 }} // Fade in and move to original position
      viewport={{ once: true }} // Only animate once
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}