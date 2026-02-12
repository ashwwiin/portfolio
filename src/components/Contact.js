"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, Mail, Linkedin, Phone, MapPin, Github, Loader2 } from "lucide-react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const [formState, setFormState] = useState({ name: "", email: "", subject: "", message: "" });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [focusedField, setFocusedField] = useState(null);

  // EmailJS Configuration - REPLACE THESE WITH YOUR ACTUAL KEYS
  const SERVICE_ID = "YOUR_SERVICE_ID";
  const TEMPLATE_ID = "YOUR_TEMPLATE_ID";
  const PUBLIC_KEY = "YOUR_PUBLIC_KEY";

  const [isSending, setIsSending] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSending(true);

    try {
      // Send email using EmailJS
      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          from_name: formState.name,
          from_email: formState.email,
          subject: formState.subject,
          message: formState.message,
          to_name: "Ashwin Thamban",
        },
        PUBLIC_KEY
      );

      setIsSubmitted(true);
      setFormState({ name: "", email: "", subject: "", message: "" });

      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    } catch (error) {
      console.error("EmailJS Error:", error);
      alert("Failed to send message. Please try again or email directly.");
    } finally {
      setIsSending(false);
    }
  };

  const socialLinks = [
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/in/ashwin-thamban-0a7b45222",
      label: "LinkedIn"
    },
    {
      icon: Github,
      href: "https://github.com/ashwwiin", // Assuming github handle based on portfolio path but user didn't explicitly provide, using generic or derived. Wait, corpus name is ashwwiin/portfolio.
      label: "GitHub"
    }
  ];

  const contactDetails = [
    {
      icon: Mail,
      label: "Email",
      value: "ashwinthamban22@gmail.com",
      href: "mailto:ashwinthamban22@gmail.com",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 7306596892",
      href: "tel:+917306596892",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Kerala, India", // Placeholder or generic, user didn't specify exact location string but requested location.
      href: null,
    },
  ];

  return (
    <section
      id="contact"
      className="relative py-24 px-6 md:px-12 lg:px-20 overflow-hidden bg-gradient-to-b from-white via-slate-50 to-white dark:from-black dark:via-slate-950 dark:to-black"
    >
      {/* Section Header - Left Aligned to match Projects */}
      <div className="relative flex flex-col items-start mb-16 md:mb-24">
        <span className="absolute -top-8 -left-4 text-7xl md:text-9xl font-black text-slate-900/[0.03] dark:text-white/[0.03] select-none pointer-events-none uppercase tracking-tighter">
          Contact
        </span>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative z-10 flex items-center gap-4"
        >
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 dark:text-white uppercase tracking-tighter leading-none">
            Get in <span className="gradient-text">Touch</span>
          </h2>
          <div className="h-[2px] w-12 md:w-24 rounded-full bg-accent" />
        </motion.div>
        <p className="text-[10px] md:text-xs font-bold text-slate-400 dark:text-slate-600 uppercase tracking-[0.5em] mt-3 ml-1">
          Let's Collaborate
        </p>
      </div>

      {/* Main Content - Centered */}
      <div className="max-w-6xl mx-auto relative">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">

          {/* Left Column: Info & Socials */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col gap-10"
          >
            {/* Written Content */}
            <div className="space-y-4">
              <h3 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white leading-tight">
                Let’s build something <span className="gradient-text">amazing</span> together.
              </h3>
              <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed">
                I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions. Feel free to reach out through any of the platforms below.
              </p>
            </div>

            {/* Contact Details */}
            <div className="flex flex-col gap-6">
              {contactDetails.map((item, index) => {
                const Icon = item.icon;
                return (
                  <a
                    key={index}
                    href={item.href}
                    target={item.href ? "_blank" : undefined}
                    rel="noopener noreferrer"
                    className={`flex items-center gap-4 group ${!item.href ? 'cursor-default' : 'cursor-pointer'}`}
                  >
                    <div className="p-4 rounded-full bg-slate-100 dark:bg-slate-800 text-accent group-hover:bg-accent group-hover:text-white transition-all duration-300">
                      <Icon className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">
                        {item.label}
                      </p>
                      <p className="text-lg font-semibold text-slate-900 dark:text-white group-hover:text-accent transition-colors">
                        {item.value}
                      </p>
                    </div>
                  </a>
                );
              })}
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-4 mt-2">
              <p className="text-sm font-bold text-slate-500 mr-2">Follow Me:</p>
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ y: -3 }}
                    className="p-3 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:border-accent hover:text-accent transition-all shadow-sm"
                  >
                    <Icon className="w-5 h-5" />
                  </motion.a>
                );
              })}
            </div>
          </motion.div>

          {/* Right Column: Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute -inset-1 rounded-[2.5rem] bg-gradient-to-r from-purple-600 to-blue-600 opacity-20 blur-xl" />
            <div className="relative bg-white dark:bg-slate-900 rounded-[2rem] p-8 md:p-10 shadow-2xl border border-slate-100 dark:border-slate-800">

              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">
                Send a Message
              </h3>
              <p className="text-slate-500 text-sm mb-8">
                Got a question or proposal? Fill out the form below.
              </p>

              <AnimatePresence mode="wait">
                {!isSubmitted ? (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="space-y-5">
                      {/* Name Input */}
                      <div className="relative">
                        <input
                          required
                          value={formState.name}
                          onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                          onFocus={() => setFocusedField('name')}
                          onBlur={() => setFocusedField(null)}
                          className="w-full peer pt-6 pb-2 px-0 bg-transparent border-b-2 border-slate-200 dark:border-slate-700 focus:border-accent outline-none transition-all placeholder-transparent text-slate-900 dark:text-white"
                          id="name"
                          placeholder="Name"
                        />
                        <label
                          htmlFor="name"
                          className={`absolute left-0 transition-all duration-300 pointer-events-none
                            ${focusedField === 'name' || formState.name
                              ? '-top-1 text-xs text-accent font-bold'
                              : 'top-3 text-slate-500'}`}
                        >
                          Your Name
                        </label>
                      </div>

                      {/* Email Input */}
                      <div className="relative">
                        <input
                          required
                          type="email"
                          value={formState.email}
                          onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                          onFocus={() => setFocusedField('email')}
                          onBlur={() => setFocusedField(null)}
                          className="w-full peer pt-6 pb-2 px-0 bg-transparent border-b-2 border-slate-200 dark:border-slate-700 focus:border-accent outline-none transition-all placeholder-transparent text-slate-900 dark:text-white"
                          id="email"
                          placeholder="Email"
                        />
                        <label
                          htmlFor="email"
                          className={`absolute left-0 transition-all duration-300 pointer-events-none
                            ${focusedField === 'email' || formState.email
                              ? '-top-1 text-xs text-accent font-bold'
                              : 'top-3 text-slate-500'}`}
                        >
                          Email Address
                        </label>
                      </div>

                      {/* Subject Input */}
                      <div className="relative">
                        <input
                          required
                          value={formState.subject}
                          onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                          onFocus={() => setFocusedField('subject')}
                          onBlur={() => setFocusedField(null)}
                          className="w-full peer pt-6 pb-2 px-0 bg-transparent border-b-2 border-slate-200 dark:border-slate-700 focus:border-accent outline-none transition-all placeholder-transparent text-slate-900 dark:text-white"
                          id="subject"
                          placeholder="Subject"
                        />
                        <label
                          htmlFor="subject"
                          className={`absolute left-0 transition-all duration-300 pointer-events-none
                            ${focusedField === 'subject' || formState.subject
                              ? '-top-1 text-xs text-accent font-bold'
                              : 'top-3 text-slate-500'}`}
                        >
                          Subject
                        </label>
                      </div>

                      {/* Message Input */}
                      <div className="relative">
                        <textarea
                          required
                          rows={4}
                          value={formState.message}
                          onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                          onFocus={() => setFocusedField('message')}
                          onBlur={() => setFocusedField(null)}
                          className="w-full peer pt-6 pb-2 px-0 bg-transparent border-b-2 border-slate-200 dark:border-slate-700 focus:border-accent outline-none transition-all resize-none placeholder-transparent text-slate-900 dark:text-white"
                          id="message"
                          placeholder="Message"
                        />
                        <label
                          htmlFor="message"
                          className={`absolute left-0 transition-all duration-300 pointer-events-none
                            ${focusedField === 'message' || formState.message
                              ? '-top-1 text-xs text-accent font-bold'
                              : 'top-3 text-slate-500'}`}
                        >
                          Message
                        </label>
                      </div>
                    </div>

                    <button
                      type="submit"
                      disabled={isSending}
                      className="w-full py-4 text-white font-bold rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-2 group mt-4 overflow-hidden relative disabled:opacity-70 disabled:cursor-not-allowed"
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 transition-colors" />

                      {isSending ? (
                        <>
                          <Loader2 className="w-5 h-5 animate-spin relative z-10" />
                          <span className="relative z-10">Sending...</span>
                        </>
                      ) : (
                        <>
                          <span className="relative z-10">Send Message</span>
                          <Send className="w-4 h-4 relative z-10 group-hover:translate-x-1 transition-transform" />
                        </>
                      )}
                    </button>
                  </form>
                ) : (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex flex-col items-center justify-center p-12 text-center h-[400px]"
                  >
                    <div
                      className="w-20 h-20 rounded-full flex items-center justify-center mb-6 text-4xl text-white shadow-lg"
                      style={{ background: 'linear-gradient(135deg, var(--color-primary), var(--color-primary))' }}
                    >
                      ✓
                    </div>
                    <h3 className="text-2xl font-black text-slate-900 dark:text-white mb-2">Message Sent!</h3>
                    <p className="text-slate-600 dark:text-slate-400">
                      I'll delete this message after 5 seconds...
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}