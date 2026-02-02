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
    <section id="contact" className="max-w-6xl mx-auto py-24 px-6 relative">
      {/* Background Decorative Element */}
      <div 
        className="absolute bottom-0 left-0 w-64 h-64 blur-[120px] -z-10 opacity-10"
        style={{ backgroundColor: 'var(--primary-accent)' }}
      />

      <div className="grid lg:grid-cols-2 gap-16 items-start">
        
        {/* Left Side: Text & Socials */}
        <div>
          <h2 className="text-5xl font-black tracking-tighter mb-6 dark:text-white uppercase">
            Let’s <span style={{ color: 'var(--primary-accent)' }}>Connect</span>
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 mb-8 max-w-md leading-relaxed">
            I’m currently open to new opportunities and collaborations. 
            Whether you have a question or just want to say hi, I’ll try my best to get back to you!
          </p>
          
          <div className="space-y-4">
            <a href="mailto:ashwinthamban22@gmail.com" className="flex items-center gap-4 group">
              <div 
                className="w-12 h-12 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800 flex items-center justify-center transition-colors"
                onMouseEnter={(e) => e.currentTarget.style.borderColor = 'var(--primary-accent)'}
                onMouseLeave={(e) => e.currentTarget.style.borderColor = ''}
              >
                📧
              </div>
              <span className="font-medium dark:text-slate-300">ashwinthamban22@gmail.com</span>
            </a>
            
            <div className="flex gap-4 mt-8">
              {["GitHub", "LinkedIn", "Twitter"].map((social) => (
                <a 
                  key={social} 
                  href="#" 
                  className="text-sm font-bold uppercase tracking-widest transition-colors"
                  style={{ '--hover-color': 'var(--primary-accent)' }}
                  onMouseEnter={(e) => e.target.style.color = 'var(--primary-accent)'}
                  onMouseLeave={(e) => e.target.style.color = ''}
                >
                  {social}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Right Side: Contact Form */}
        <div className="relative">
          <AnimatePresence mode="wait">
            {!isSubmitted ? (
              <motion.form 
                key="form"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onSubmit={handleSubmit}
                className="space-y-4 p-8 rounded-[2.5rem] bg-slate-50 dark:bg-slate-900/50 border border-slate-100 dark:border-slate-800 shadow-2xl"
              >
                <div className="grid md:grid-cols-2 gap-4">
                  <input 
                    required 
                    placeholder="Name" 
                    className="w-full p-4 rounded-2xl bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 outline-none transition-all" 
                    onFocus={(e) => e.target.style.borderColor = 'var(--primary-accent)'}
                    onBlur={(e) => e.target.style.borderColor = ''}
                  />
                  <input 
                    required 
                    type="email" 
                    placeholder="Email" 
                    className="w-full p-4 rounded-2xl bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 outline-none transition-all" 
                    onFocus={(e) => e.target.style.borderColor = 'var(--primary-accent)'}
                    onBlur={(e) => e.target.style.borderColor = ''}
                  />
                </div>
                <input 
                  required 
                  placeholder="Subject" 
                  className="w-full p-4 rounded-2xl bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 outline-none transition-all" 
                  onFocus={(e) => e.target.style.borderColor = 'var(--primary-accent)'}
                  onBlur={(e) => e.target.style.borderColor = ''}
                />
                <textarea 
                  required 
                  placeholder="Message" 
                  rows={4} 
                  className="w-full p-4 rounded-2xl bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 outline-none transition-all resize-none" 
                  onFocus={(e) => e.target.style.borderColor = 'var(--primary-accent)'}
                  onBlur={(e) => e.target.style.borderColor = ''}
                />
                <button 
                  type="submit" 
                  className="w-full py-4 text-white font-bold rounded-2xl transition-all hover:scale-[1.02] active:scale-95 shadow-lg"
                  style={{ 
                    backgroundColor: 'var(--primary-accent)',
                    boxShadow: `0 10px 20px -10px color-mix(in srgb, var(--primary-accent), transparent 50%)`
                  }}
                >
                  Send Message
                </button>
              </motion.form>
            ) : (
              <motion.div 
                key="success"
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="flex flex-col items-center justify-center p-12 rounded-[2.5rem] bg-green-50 dark:bg-green-900/10 border border-green-100 dark:border-green-900/20 text-center"
              >
                <div className="text-5xl mb-4">🚀</div>
                <h3 className="text-2xl font-bold text-green-700 dark:text-green-400">Message Sent!</h3>
                <p className="text-green-600 dark:text-green-500 mt-2">Thanks Ashwin! I'll get back to you soon.</p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}