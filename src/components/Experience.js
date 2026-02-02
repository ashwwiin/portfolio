"use client";
import { motion } from "framer-motion";

export default function Experience() {
  const companyData = {
    company: "Donyati India Private Ltd",
    roles: [
      {
        title: "Software Engineer",
        period: "2024 - 2025",
        description: [
          "Engineered a core, responsive web application using Next.js and React.js following Agile methodology, leading to a 15% increase in site-wide user engagement.",
          "Spearheaded the deployment of a full-stack application (Next.js/PostgreSQL) and established CI/CD pipelines for automated system workflows, reducing deployment time by 30%.",
          "Utilized Tailwind CSS and modern Styled Components to design a clean, intuitive User Interface (UI) and ensured cross-browser consistency.",
          "Oracle Enterprise Performance Management (EPM) Consultant.",
          "Collaborated on multiple client projects involving Oracle EPM integration, designing and implementing data pipelines for secure data flow and enterprise systems."
        ]
      },
      {
        title: "Software Engineer Trainee",
        period: "2024",
        description: [
          "Developed a responsive web application using Next.js and Tailwind CSS, reducing UI development time by 30% while ensuring uniform cross-platform experience.",
          "Integrated multiple React libraries for state management and modular architecture, boosting application performance by 15%.",
          "Pioneered Single Sign-On (SSO) authorization using React.js, cutting down user login time by 40% and streamlining access across integrated application modules during traineeship.",
          "Gained foundational experience in frontend development workflows, component architecture, and modern CSS practices."
        ]
      }
    ]
  };

  return (
    <section id="experience" className="max-w-6xl mx-auto py-16 md:py-24 px-4 md:px-6 relative">
      {/* Header Section */}
      <div className="relative flex flex-col items-start mb-16 md:mb-24">
        <span className="absolute -top-8 -left-4 text-7xl md:text-9xl font-black text-slate-900/[0.03] dark:text-white/[0.03] select-none pointer-events-none uppercase tracking-tighter">
          History
        </span>
        
        <div className="relative z-10 flex items-center gap-4">
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 dark:text-white uppercase tracking-tighter leading-none">
            Professional <span style={{ color: 'var(--primary-accent)' }}>Experience</span>
          </h2>
          <div 
            className="h-[2px] w-12 md:w-24 rounded-full" 
            style={{ backgroundColor: 'var(--primary-accent)' }}
          />
        </div>
        
        <p className="text-[10px] md:text-xs font-bold text-slate-400 dark:text-slate-600 uppercase tracking-[0.5em] mt-3 ml-1">
          Career Journey
        </p>
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="relative overflow-hidden rounded-[2rem] md:rounded-[3rem] bg-white dark:bg-slate-900/40 border border-slate-100 dark:border-slate-800 p-6 md:p-14 shadow-2xl transition-all duration-500"
      >
        {/* Dynamic Glow Aura */}
        <div 
          className="absolute top-0 right-0 w-48 md:w-64 h-48 md:h-64 blur-[80px] md:blur-[100px] -z-10 opacity-40" 
          style={{ backgroundColor: 'color-mix(in srgb, var(--primary-accent), transparent 90%)' }}
        />

        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 md:mb-16 gap-4 md:gap-6">
          <div>
            <h3 className="text-3xl md:text-5xl font-black text-slate-900 dark:text-white tracking-tight leading-tight mb-3 md:mb-4 uppercase">
              {companyData.company}
            </h3>
            <div className="flex items-center gap-2 md:gap-3">
              <span className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-green-500 animate-pulse"></span>
              <p className="text-[10px] md:text-sm font-bold text-slate-500 dark:text-slate-400 uppercase tracking-[0.15em] md:tracking-[0.2em]">
                Full-Time Role • 1 Year
              </p>
            </div>
          </div>
          
          <div className="hidden md:block">
            <div className="w-16 h-16 rounded-2xl bg-slate-50 dark:bg-slate-800 border border-slate-100 dark:border-slate-700 flex items-center justify-center text-3xl shadow-inner">
              🏢
            </div>
          </div>
        </div>

        {/* Roles Sub-Timeline */}
        <div className="space-y-12 md:space-y-20 relative">
          <div 
            className="absolute left-[5px] md:left-[7px] top-2 bottom-2 w-[1.5px] md:w-[2px]" 
            style={{ 
              background: `linear-gradient(to bottom, var(--primary-accent), color-mix(in srgb, var(--primary-accent), transparent 50%), transparent)` 
            }}
          />

          {companyData.roles.map((role, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.2 }}
              className="relative pl-8 md:pl-12"
            >
              <div 
                className="absolute left-0 top-1.5 md:top-2 w-3 h-3 md:w-4 md:h-4 rounded-full ring-[3px] md:ring-4 ring-white dark:ring-slate-900 z-10" 
                style={{ 
                  backgroundColor: 'var(--primary-accent)',
                  boxShadow: `0 0 12px color-mix(in srgb, var(--primary-accent), transparent 30%)` 
                }}
              />
              
              <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4 mb-3 md:mb-6">
                <h4 className="text-xl md:text-2xl font-black text-slate-900 dark:text-white tracking-tight uppercase">
                  {role.title}
                </h4>
                <div className="flex items-center gap-2">
                  <div className="h-[1px] w-4 bg-slate-300 dark:bg-slate-700 hidden md:block"></div>
                  <span 
                    className="text-[9px] md:text-xs font-black px-2 md:px-3 py-1 rounded-md uppercase tracking-widest"
                    style={{ 
                      color: 'var(--primary-accent)', 
                      backgroundColor: 'color-mix(in srgb, var(--primary-accent), transparent 90%)' 
                    }}
                  >
                    {role.period}
                  </span>
                </div>
              </div>
              
              <ul className="space-y-4">
                {role.description.map((point, index) => (
                  <li key={index} className="flex items-start gap-3 group/bullet">
                    <span 
                      className="mt-1.5 w-1.5 h-1.5 rounded-full shrink-0 transition-transform group-hover/bullet:scale-125"
                      style={{ backgroundColor: 'var(--primary-accent)' }}
                    />
                    <p className="text-sm md:text-md text-slate-600 dark:text-slate-400 leading-relaxed max-w-4xl">
                      {point}
                    </p>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}