"use client";

import { projects } from "@/data/projects";
import { notFound, useParams } from "next/navigation";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import { ArrowLeft, Check, ExternalLink } from "lucide-react";

export default function ProjectPage() {
  const { slug } = useParams();
  
  const project = projects.find((p) => p.slug === slug);
  if (!project) notFound();

  return (
    <main className="min-h-screen bg-gradient-to-b from-white via-slate-50 to-white dark:from-black dark:via-slate-950 dark:to-black text-slate-900 dark:text-slate-100 transition-colors duration-300 relative">
      <Navbar />

      {/* Dynamic Background Blur Orbs */}
      <div 
        className="absolute top-20 left-10 w-72 h-72 blur-[150px] rounded-full opacity-10 pointer-events-none"
        style={{ backgroundColor: 'var(--color-primary)' }}
      />
      <div 
        className="absolute top-40 right-20 w-80 h-80 blur-[180px] rounded-full opacity-10 pointer-events-none"
        style={{ backgroundColor: 'var(--color-primary)' }}
      />

      <div className="max-w-6xl mx-auto px-6 pt-32 pb-16 relative z-10">
        {/* Back Button */}
        <div className="relative z-20 flex items-center gap-4 mb-8">
          <Link 
            href="/#projects" 
            className="group flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-all duration-300 bg-slate-100/80 dark:bg-slate-900/80 border border-slate-200/50 dark:border-slate-800/80 hover:bg-slate-200 dark:hover:bg-slate-800 text-slate-650 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
          >
            <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-1 transition-transform" />
            Back to Projects
          </Link>
          <div className="h-[2px] w-12 md:w-24 rounded-full bg-slate-200 dark:bg-slate-800" />
        </div>

        {/* Header Section */}
        <div className="relative mb-16">
          <span className="absolute -top-12 -left-4 text-7xl md:text-9xl font-black text-slate-900/[0.03] dark:text-white/[0.03] select-none pointer-events-none uppercase tracking-tighter">
            Project
          </span>
          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight uppercase leading-none text-slate-900 dark:text-white relative z-10 pt-2">
            {project.title}
          </h1>
        </div>

        <Reveal>
          <div className="grid lg:grid-cols-3 gap-12 items-start mb-24">
            
            {/* Left Column: Description & Tech */}
            <div className="lg:col-span-2 space-y-12">
              {/* Description */}
              <div className="space-y-6 p-8 rounded-3xl bg-slate-50/50 dark:bg-slate-900/20 border border-slate-200/50 dark:border-slate-800/30 backdrop-blur-sm relative overflow-hidden group">
                <h3 className="text-xs font-black uppercase tracking-[0.4em] text-slate-400 dark:text-slate-500">Overview</h3>
                <p className="text-lg md:text-xl text-slate-700 dark:text-slate-300 leading-relaxed font-medium">
                  {project.longDescription}
                </p>
              </div>

              {/* Technologies Used */}
              <div className="space-y-6">
                <h3 className="text-xs font-black uppercase tracking-[0.4em] text-slate-400 dark:text-slate-500">Technologies Used</h3>
                <div className="flex flex-wrap gap-3">
                  {project.tech.map((t) => (
                    <span 
                      key={t} 
                      className="px-5 py-2.5 rounded-xl text-xs font-bold bg-slate-100 dark:bg-slate-900 border border-slate-200/50 dark:border-slate-800/50 text-slate-700 dark:text-slate-300 transition-all duration-300 hover:-translate-y-1 hover:shadow-md cursor-default"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column: Key Features Card */}
            <div className="relative p-8 md:p-10 rounded-3xl bg-white dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800/80 shadow-xl overflow-hidden group backdrop-blur-sm">
              <h3 className="text-xl font-black mb-8 uppercase tracking-tighter text-slate-900 dark:text-white">Key Features</h3>
              <ul className="space-y-4 relative z-10">
                {project.features.map((f) => (
                  <li key={f} className="flex items-center gap-3 text-sm font-semibold text-slate-600 dark:text-slate-300">
                    <Check 
                      className="w-4 h-4 shrink-0" 
                      style={{ color: 'var(--color-primary)' }} 
                    />
                    {f}
                  </li>
                ))}
              </ul>

              {/* Action Buttons */}
              <div className="mt-8 space-y-3 relative z-10">
                {project.liveLink ? (
                  <a 
                    href={project.liveLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 w-full text-center text-white py-3.5 px-6 rounded-2xl font-bold uppercase tracking-wider text-xs transition-all duration-300 hover:scale-[1.02] hover:shadow-xl active:scale-[0.98] shadow-md"
                    style={{ 
                      background: 'linear-gradient(135deg, var(--color-primary), var(--color-primary))',
                      boxShadow: '0 8px 30px -10px var(--color-primary)'
                    }}
                  >
                    Visit Live Site
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                ) : (
                  !project.githubLink && project.link && (
                    <a 
                      href={project.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 w-full text-center text-white py-3.5 px-6 rounded-2xl font-bold uppercase tracking-wider text-xs transition-all duration-300 hover:scale-[1.02] hover:shadow-xl active:scale-[0.98] shadow-md"
                      style={{ 
                        background: 'linear-gradient(135deg, var(--color-primary), var(--color-primary))',
                        boxShadow: '0 8px 30px -10px var(--color-primary)'
                      }}
                    >
                      Visit Project
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  )
                )}
                
                {project.githubLink && (
                  <a 
                    href={project.githubLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 w-full text-center py-3.5 px-6 rounded-2xl font-bold uppercase tracking-wider text-xs transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-350 hover:bg-slate-50 dark:hover:bg-slate-900 bg-white/50 dark:bg-slate-900/20"
                  >
                    Source Code
                  </a>
                )}
              </div>
            </div>
          </div>
        </Reveal>

        {/* Footer Call to Action */}
        <div className="py-20 border-t border-slate-200/60 dark:border-slate-900/60 flex flex-col items-center text-center">
            <h4 className="text-2xl font-black uppercase tracking-tighter mb-4">Interested in this architecture?</h4>
            <Link 
              href="/#contact" 
              className="text-sm font-black uppercase tracking-[0.4em] transition-all duration-300 text-slate-800 dark:text-slate-200 hover:opacity-70 flex items-center gap-2 group" 
            >
              Let's discuss the build
              <span className="group-hover:translate-x-1.5 transition-transform duration-300" style={{ color: 'var(--color-primary)' }}>→</span>
            </Link>
        </div>
      </div>

      <Footer />
    </main>
  );
}