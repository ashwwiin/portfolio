"use client";
import { motion } from "framer-motion";

export default function Education() {
  const educationData = [
    {
      year: "2022 - 2024",
      degree: "Master of Computer Applications",
      degreeShort: "MCA",
      institution: "Ramaiah Institute of Technology",
      score: "9.08",
      metric: "CGPA"
    },
    {
      year: "2019 - 2022",
      degree: "Bachelor of Computer Applications",
      degreeShort: "BCA",
      institution: "Kannur University",
      score: "7.34",
      metric: "CGPA"
    }
  ];

  return (
    <section
      id="education"
      className="py-16 md:py-24 px-6 md:px-12 lg:px-20 relative bg-gradient-to-b from-white via-slate-50 to-white dark:from-black dark:via-slate-950 dark:to-black overflow-hidden"
    >
      {/* Section Header */}
      <div className="relative flex flex-col items-end mb-12">
        <span className="absolute -top-8 -right-4 text-7xl md:text-9xl font-black text-slate-900/[0.03] dark:text-white/[0.03] select-none pointer-events-none uppercase tracking-tighter">
          Learning
        </span>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative z-10 flex items-center gap-4"
        >
          <div className="h-[2px] w-12 md:w-24 rounded-full bg-accent" />
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 dark:text-white uppercase tracking-tighter leading-none">
            Edu<span className="gradient-text">cation</span>
          </h2>
        </motion.div>

        <p className="text-[10px] md:text-xs font-bold text-slate-400 dark:text-slate-600 uppercase tracking-[0.5em] mt-3 mr-1">
          Academic Journey
        </p>
      </div>

      {/* Education Cards Grid */}
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-6 md:gap-8">
        {educationData.map((edu, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50, rotateX: -15 }}
            whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
            viewport={{ once: true }}
            transition={{
              delay: index * 0.2,
              duration: 0.6,
              ease: [0.22, 1, 0.36, 1]
            }}
            whileHover={{
              y: -8,
              rotateY: 2,
              rotateX: 2,
            }}
            className="group relative perspective-1000"
          >
            {/* Card Container */}
            <div className="relative bg-white dark:bg-slate-900 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-slate-200 dark:border-slate-800">
              {/* Animated Gradient Background */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500"
                style={{ background: 'linear-gradient(135deg, var(--color-primary), var(--color-primary))' }}
              />

              {/* Top Gradient Bar */}
              <div
                className="absolute top-0 left-0 right-0 h-1"
                style={{ background: 'linear-gradient(90deg, var(--color-primary), var(--color-primary))' }}
              />

              {/* Floating Gradient Orb */}
              <motion.div
                className="absolute -top-20 -right-20 w-40 h-40 rounded-full blur-3xl opacity-20 group-hover:opacity-30 transition-opacity duration-500"
                style={{ background: 'linear-gradient(135deg, var(--color-primary), var(--color-primary))' }}
                animate={{
                  scale: [1, 1.2, 1],
                  rotate: [0, 90, 0],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />

              {/* Content */}
              <div className="relative z-10">
                {/* Year Badge */}
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 + 0.3 }}
                  className="inline-block mb-4"
                >
                  <span
                    className="px-4 py-1.5 rounded-full text-xs font-bold text-white uppercase tracking-wider shadow-lg"
                    style={{ background: 'linear-gradient(90deg, var(--color-primary), var(--color-primary))' }}
                  >
                    {edu.year}
                  </span>
                </motion.div>

                {/* Degree */}
                <h3 className="text-2xl md:text-3xl font-black text-slate-900 dark:text-white mb-2 leading-tight">
                  {edu.degreeShort}
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
                  {edu.degree}
                </p>

                {/* Institution */}
                <p className="text-base font-semibold text-slate-800 dark:text-slate-200 mb-6">
                  {edu.institution}
                </p>

                {/* Divider */}
                <div className="h-px bg-gradient-to-r from-slate-200 via-slate-300 to-slate-200 dark:from-slate-800 dark:via-slate-700 dark:to-slate-800 mb-6" />

                {/* Score Display */}
                <div className="flex items-end justify-between">
                  <div>
                    <p className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-1">
                      Final Score
                    </p>
                    <div className="flex items-baseline gap-2">
                      <motion.span
                        className={`text-5xl font-black bg-gradient-to-r ${edu.gradient} bg-clip-text text-transparent`}
                        whileHover={{ scale: 1.05 }}
                      >
                        {edu.score}
                      </motion.span>
                      <span className="text-sm font-bold text-slate-500 dark:text-slate-400 uppercase">
                        {edu.metric}
                      </span>
                    </div>
                  </div>

                  {/* Decorative Icon */}
                  <motion.div
                    animate={{
                      rotate: [0, 360],
                    }}
                    transition={{
                      duration: 20,
                      repeat: Infinity,
                      ease: "linear"
                    }}
                    className={`w-16 h-16 rounded-full bg-gradient-to-br ${edu.gradient} opacity-10 flex items-center justify-center`}
                  >
                    <div className="w-8 h-8 rounded-full bg-white dark:bg-slate-900" />
                  </motion.div>
                </div>
              </div>

              {/* Bottom Shine Effect */}
              <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white dark:via-slate-700 to-transparent opacity-0 group-hover:opacity-50 transition-opacity duration-500" />
            </div>

            {/* Floating Shadow */}
            <div className={`absolute inset-0 bg-gradient-to-br ${edu.gradient} rounded-2xl blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-500 -z-10`} />
          </motion.div>
        ))}
      </div>

      {/* Bottom Decorative Element */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.6 }}
        className="flex justify-center mt-12"
      >
        <div className="flex items-center gap-2">
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8 + i * 0.1 }}
              className={`w-2 h-2 rounded-full ${i === 1 ? 'bg-accent w-3 h-3' : 'bg-slate-300 dark:bg-slate-700'}`}
            />
          ))}
        </div>
      </motion.div>
    </section>
  );
}