'use client';
import { useState, useEffect } from 'react'; 
import { Code, Layers, ShieldCheck, Paintbrush, ArrowRight, Lock, Terminal } from 'lucide-react';
import Link from 'next/link';

export default function Academy() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const authStatus = localStorage.getItem('isLoggedIn') === 'true';
    setIsLoggedIn(authStatus);
  }, []);

  const tracks = [
    { name: "Frontend Development", icon: <Code size={18} />, stats: "React & Next.js" },
    { name: "Backend Development", icon: <Terminal size={18} />, stats: "Node & MongoDB" }, 
    { name: "UI/UX Design", icon: <Paintbrush size={18} />, stats: "Figma & Systems" },
    { name: "QA & Software Testing", icon: <ShieldCheck size={18} />, stats: "Automation" },
  ];


  const phases = [
    { title: "Core Execution", desc: "Digital systems, Agile sprints, and professional workflow." },
    { title: "Specialization", desc: "8 weeks of deep technical track-specific training." },
    { title: "Execution Residency", desc: "Work in cross-functional squads on real CogOps products." },
  ];

  return (
    <section id="academy" className="py-16 md:py-24 bg-white px-4 md:px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          <div className="space-y-10">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#F3F4F6] border border-[#E5E7EB] rounded-full mb-6">
                <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                <span className="text-[10px] font-black uppercase tracking-widest text-[#0F1115]">Cohort Enrollment Open</span>
              </div>
              <h2 className="text-4xl md:text-6xl font-black mb-6 text-[#0F1115] tracking-tighter uppercase leading-none">
                Talent <br/> Incubator <span className="text-[#6B7280]">v1.0</span>
              </h2>
              <p className="text-[#6B7280] text-base md:text-xl leading-relaxed max-w-xl font-medium italic">
                "Train Like a Product Team. Perform Like One."
              </p>
            </div>
            
            <div className="space-y-6">
              <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-[#6B7280]">Specialization Tracks</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {tracks.map((track, i) => (
                  <div key={i} className="flex flex-col p-5 bg-[#F3F4F6] border border-[#E5E7EB] rounded-2xl group transition-all">
                    <div className="flex items-center justify-between mb-4">
                      <div className="p-2 bg-white border border-[#E5E7EB] rounded-lg text-[#0F1115]">
                        {track.icon}
                      </div>
                      <span className="text-[9px] font-black text-[#6B7280] uppercase tracking-widest">{track.stats}</span>
                    </div>
                    <span className="font-black text-sm text-[#0F1115] uppercase tracking-tight">{track.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="bg-[#0F1115] p-6 sm:p-10 md:p-14 rounded-[2.5rem] shadow-2xl relative overflow-hidden">
            <h3 className="text-2xl font-black mb-10 text-white uppercase tracking-tight">The 16-Week Roadmap</h3>
            <div className="space-y-8 relative z-10">
              {phases.map((phase, i) => (
                <div key={i} className="flex gap-5">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full border border-white/20 flex items-center justify-center text-[10px] font-black text-white">
                    0{i + 1}
                  </div>
                  <div>
                    <h5 className="font-black text-white uppercase text-sm tracking-wide mb-1">{phase.title}</h5>
                    <p className="text-white/50 text-xs md:text-sm font-medium leading-relaxed">{phase.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 pt-10 border-t border-white/10 space-y-4 relative z-10">
              {isLoggedIn ? (
                <Link href="/dashboard" className="block w-full">
                  <button className="w-full py-5 bg-white text-[#0F1115] rounded-xl font-black uppercase tracking-widest text-[11px] md:text-xs flex items-center justify-center gap-3 hover:bg-[#E5E7EB] transition-all">
                    Access Command Center <ArrowRight size={16} />
                  </button>
                </Link>
              ) : (
                <Link href="/signup" className="block w-full">
                  <button className="w-full py-5 bg-white text-[#0F1115] rounded-xl font-black uppercase tracking-widest text-[11px] md:text-xs flex items-center justify-center gap-3 hover:bg-[#E5E7EB] transition-all">
                    Start Selection Process <Lock size={14} />
                  </button>
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}