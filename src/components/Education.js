"use client";
import { motion } from "framer-motion";

export default function Education() {
  const educationData = [
    {
      year: "2022 - 2024",
      degree: "Master of Computer Applications (MCA)",
      institution: "Ramaiah Institute of Technology",
      score: "9.08",
      metric: "CGPA",
      type: "Post Graduation",
      // Removed static accent property to use dynamic variable
    },
    {
      year: "2019 - 2022",
      degree: "Bachelor of Computer Applications (BCA)",
      institution: "Kannur University",
      score: "7.4",
      metric: "CGPA",
      type: "Under Graduation",
    }
  ];

  return (
    <section id="education" className="max-w-6xl mx-auto py-16 md:py-24 px-4 md:px-6 relative">
      
      {/* Header with Dynamic Accent */}
      <div className="relative flex flex-col items-end mb-16">
        <span className="absolute -top-8 -right-4 text-7xl md:text-9xl font-black text-slate-900/5 dark:text-white/[0.03] select-none pointer-events-none uppercase tracking-tighter">
          Study
        </span>
        
        <div className="flex items-center gap-4 z-10">
          <div 
            className="h-[2px] w-12 md:w-24 rounded-full" 
            style={{ backgroundColor: 'var(--primary-accent)' }}
          />
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 dark:text-white uppercase tracking-tighter">
            Edu<span style={{ color: 'var(--primary-accent)' }}>cation</span>
          </h2>
        </div>
        
        <p className="text-[10px] md:text-xs font-bold text-slate-400 dark:text-slate-600 uppercase tracking-[0.5em] mt-2 mr-2">
          Academic Journey
        </p>
      </div>

      <div className="space-y-6 md:space-y-10">
        {educationData.map((edu, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.15 }}
            className="group relative flex flex-col md:flex-row gap-0 rounded-[2rem] md:rounded-[3rem] overflow-hidden border border-slate-100 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/40 backdrop-blur-md transition-all duration-500 hover:shadow-2xl"
            style={{ 
              // Subtle hover border using dynamic accent
              borderColor: 'color-mix(in srgb, var(--primary-accent), transparent 90%)' 
            }}
            onMouseEnter={(e) => e.currentTarget.style.borderColor = 'color-mix(in srgb, var(--primary-accent), transparent 70%)'}
            onMouseLeave={(e) => e.currentTarget.style.borderColor = ''}
          >
            {/* Left Decorative Stripe - Now Dynamic */}
            <div 
              className="w-1.5 md:w-3 h-full absolute left-0 top-0 transition-all duration-500 group-hover:w-4" 
              style={{ backgroundColor: index === 0 ? 'var(--primary-accent)' : 'color-mix(in srgb, var(--primary-accent), transparent 60%)' }}
            />

            {/* Main Content Area */}
            <div className="flex-1 p-6 md:p-12 pl-8 md:pl-16 text-left">
              <div className="flex items-center flex-wrap gap-2 md:gap-3 mb-3 md:mb-4">
                <span 
                  className="font-black text-[9px] md:text-[10px] uppercase tracking-[0.3em]"
                  style={{ color: 'var(--primary-accent)' }}
                >
                  {edu.year}
                </span>
                <div 
                  className="h-[1px] w-4 md:w-8" 
                  style={{ backgroundColor: 'color-mix(in srgb, var(--primary-accent), transparent 70%)' }}
                />
                <span className="text-slate-400 text-[9px] md:text-[10px] font-bold uppercase tracking-widest">
                  {edu.type}
                </span>
              </div>

              <h3 className="text-xl md:text-4xl font-black text-slate-900 dark:text-white uppercase tracking-tighter mb-1 md:mb-2 group-hover:text-[var(--primary-accent)] transition-colors leading-tight"
                  style={{ '--hover-color': 'var(--primary-accent)' }}>
                {edu.degree}
              </h3>
              <p className="text-sm md:text-xl font-medium text-slate-500 dark:text-slate-400">
                {edu.institution}
              </p>
            </div>

            {/* Right Metric Card */}
            <div className="bg-white dark:bg-slate-950/50 p-6 md:p-12 md:w-64 flex flex-row md:flex-col items-center md:items-end justify-between md:justify-center border-t md:border-t-0 md:border-l border-slate-100 dark:border-slate-800">
              <div className="text-left md:text-right">
                <span className="block text-[9px] md:text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Final Result</span>
                <div className="flex items-baseline justify-start md:justify-end gap-1">
                  <span className="text-3xl md:text-5xl font-black text-slate-900 dark:text-white tracking-tighter italic leading-none">
                    {edu.score}
                  </span>
                  <span 
                    className="font-black text-[10px] md:text-xs uppercase tracking-tighter"
                    style={{ color: 'var(--primary-accent)' }}
                  >
                    {edu.metric}
                  </span>
                </div>
              </div>
              
              {/* Dynamic Dots */}
              <div className="mt-0 md:mt-4 flex gap-1">
                {[1, 2, 3].map((dot) => (
                  <div 
                    key={dot} 
                    className="h-1 md:h-1.5 w-1 md:w-1.5 rounded-full" 
                    style={{ 
                      backgroundColor: index === 0 
                        ? 'var(--primary-accent)' 
                        : 'color-mix(in srgb, var(--primary-accent), transparent 70%)' 
                    }} 
                  />
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}