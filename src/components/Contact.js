"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real app, you'd send this to an API (like Formspree or Resend)
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 5000); // Reset after 5 seconds
  };

  return (
    <section id="contact" className="relative py-24 px-6 overflow-hidden bg-gradient-to-b from-white via-slate-50 to-white dark:from-black dark:via-slate-950 dark:to-black">
      {/* Subtle decorative blobs */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-purple-400 to-blue-500 rounded-full blur-[150px] opacity-10 -z-10" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-br from-cyan-400 to-pink-500 rounded-full blur-[150px] opacity-10 -z-10" />

      <div className="px-8 md:px-16 lg:px-24 grid lg:grid-cols-2 gap-16 items-start">

        {/* Left Side: Text & Socials */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl md:text-6xl font-black tracking-tighter mb-6 dark:text-white uppercase leading-none">
            Let's <span className="gradient-text">Connect</span>
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-300 mb-12 max-w-md leading-relaxed">
            I'm currently open to new opportunities and collaborations.
            Whether you have a question or just want to say hi, I'll try my best to get back to you!
          </p>

          <div className="space-y-6">
            <a href="mailto:ashwinthamban22@gmail.com" className="flex items-center gap-4 group">
              <div className="w-14 h-14 rounded-2xl glass flex items-center justify-center transition-all group-hover:scale-110">
                📧
              </div>
              <span className="font-semibold text-slate-700 dark:text-slate-300 group-hover:text-slate-900 dark:group-hover:text-white transition-colors">
                ashwinthamban22@gmail.com
              </span>
            </a>

            <div className="flex gap-6 mt-12">
              {[
                { name: "GitHub", url: "https://github.com/ashwwiin" },
                { name: "LinkedIn", url: "https://www.linkedin.com/in/ashwin-thamban-0a7b45222" },
                { name: "Twitter", url: "#" }
              ].map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-bold uppercase tracking-widest text-slate-600 dark:text-slate-400 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-purple-500 hover:to-blue-500 transition-all"
                >
                  {social.name}
                </a>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Right Side: Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="relative"
        >
          <AnimatePresence mode="wait">
            {!isSubmitted ? (
              <motion.form
                key="form"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onSubmit={handleSubmit}
                className="space-y-5 glass p-8 md:p-10 rounded-[2rem] shadow-2xl"
              >
                <div className="grid md:grid-cols-2 gap-5">
                  <input
                    required
                    placeholder="Name"
                    className="w-full p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 outline-none focus:border-purple-500 transition-all font-medium"
                  />
                  <input
                    required
                    type="email"
                    placeholder="Email"
                    className="w-full p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 outline-none focus:border-purple-500 transition-all font-medium"
                  />
                </div>
                <input
                  required
                  placeholder="Subject"
                  className="w-full p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 outline-none focus:border-purple-500 transition-all font-medium"
                />
                <textarea
                  required
                  placeholder="Message"
                  rows={5}
                  className="w-full p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 outline-none focus:border-purple-500 transition-all resize-none font-medium"
                />
                <button
                  type="submit"
                  className="btn-primary w-full py-4 text-white font-bold"
                >
                  Send Message
                </button>
              </motion.form>
            ) : (
              <motion.div
                key="success"
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="flex flex-col items-center justify-center p-16 rounded-[2rem] glass border-2 border-green-400 dark:border-green-600 text-center"
              >
                <div className="text-6xl mb-6">🚀</div>
                <h3 className="text-2xl font-black text-green-600 dark:text-green-400 mb-2">Message Sent!</h3>
                <p className="text-green-600 dark:text-green-500">Thanks! I'll get back to you soon.</p>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}