"use client";

import { projects } from "@/data/projects";
import { notFound, useParams } from "next/navigation";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";

export default function ProjectPage() {
  const { slug } = useParams();
  
  const project = projects.find((p) => p.slug === slug);
  if (!project) notFound();

  return (
    <main className="min-h-screen bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 transition-colors duration-300 relative">
      <Navbar />

      <div className="max-w-6xl mx-auto px-6 py-16">
        {/* Header Section with Arsenal Style */}
        <div className="relative flex flex-col items-start mb-20">
          <span className="absolute -top-8 -left-4 text-7xl md:text-9xl font-black text-slate-900/[0.03] dark:text-white/[0.03] select-none pointer-events-none uppercase tracking-tighter">
            Project
          </span>
          
          <div className="relative z-10 flex items-center gap-4">
             <Link href="/#projects" className="group flex items-center gap-2 text-sm font-black uppercase tracking-widest transition-colors" style={{ color: 'var(--primary-accent)' }}>
              <span className="group-hover:-translate-x-2 transition-transform">←</span> Back
            </Link>
            <div className="h-[2px] w-12 md:w-24 rounded-full" style={{ backgroundColor: 'var(--primary-accent)' }} />
          </div>
          
          <h1 className="text-5xl md:text-8xl font-black tracking-tight mt-4 uppercase leading-none">
            {project.title}
          </h1>
        </div>

        <Reveal>
          <div className="grid lg:grid-cols-3 gap-12 items-start mb-24">
            
            {/* Left Column: Description */}
            <div className="lg:col-span-2 space-y-12">
              <div className="space-y-6">
                 <h3 className="text-xs font-black uppercase tracking-[0.4em]" style={{ color: 'var(--primary-accent)' }}>Overview</h3>
                 <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-400 leading-relaxed font-medium italic">
                  "{project.longDescription}"
                </p>
              </div>

              <div className="space-y-6">
                <h3 className="text-xs font-black uppercase tracking-[0.4em]" style={{ color: 'var(--primary-accent)' }}>Technologies Used</h3>
                <div className="flex flex-wrap gap-3">
                  {project.tech.map((t) => (
                    <span 
                      key={t} 
                      className="px-6 py-2 rounded-2xl text-sm font-bold border transition-all"
                      style={{ 
                        color: 'var(--primary-accent)', 
                        backgroundColor: 'color-mix(in srgb, var(--primary-accent), transparent 90%)',
                        borderColor: 'color-mix(in srgb, var(--primary-accent), transparent 70%)'
                      }}
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column: Key Features Card */}
            <div className="relative p-8 md:p-10 rounded-[2.5rem] bg-slate-50 dark:bg-slate-900/40 border border-slate-100 dark:border-slate-800 shadow-2xl">
              {/* Dynamic Glow */}
              <div 
                className="absolute top-0 right-0 w-32 h-32 blur-[100px] rounded-full opacity-20 pointer-events-none" 
                style={{ backgroundColor: 'var(--primary-accent)' }}
              />
              
              <h3 className="text-xl font-black mb-8 uppercase tracking-tighter">Key Features</h3>
              <ul className="space-y-5 relative z-10">
                {project.features.map((f) => (
                  <li key={f} className="flex items-start gap-4 text-sm font-bold text-slate-600 dark:text-slate-400">
                    <span style={{ color: 'var(--primary-accent)' }} className="mt-1">✦</span>
                    {f}
                  </li>
                ))}
              </ul>

              <a 
                href={project.link} 
                target="_blank" 
                rel="noopener noreferrer"
                className="mt-10 inline-block w-full text-center text-white py-5 rounded-3xl font-black uppercase tracking-widest text-xs transition-all hover:scale-[1.02] active:scale-95 shadow-xl"
                style={{ 
                  backgroundColor: 'var(--primary-accent)',
                  boxShadow: `0 10px 30px -10px color-mix(in srgb, var(--primary-accent), transparent 40%)`
                }}
              >
                Launch Source Code
              </a>
            </div>
          </div>
        </Reveal>

        {/* Footer Call to Action */}
        <div className="py-20 border-t border-slate-100 dark:border-slate-900 flex flex-col items-center text-center">
            <h4 className="text-2xl font-black uppercase tracking-tighter mb-4">Interested in this architecture?</h4>
            <Link href="/#contact" className="text-sm font-black uppercase tracking-[0.4em] transition-colors hover:opacity-70" style={{ color: 'var(--primary-accent)' }}>
                Let's discuss the build →
            </Link>
        </div>
      </div>

      <Footer />
    </main>
  );
}