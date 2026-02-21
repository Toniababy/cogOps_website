'use client';
import { useState } from 'react';
import { Code, Layers, ShieldCheck, TrendingUp, Paintbrush, ArrowRight, Lock, CheckCircle2 } from 'lucide-react';
import Link from 'next/link';

export default function Academy() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const tracks = [
    { name: "Product & Technology", icon: <Layers size={18} />, stats: "12 Projects" },
    { name: "Design & UX", icon: <Paintbrush size={18} />, stats: "8 Projects" }, 
    { name: "Development", icon: <Code size={18} />, stats: "15 Projects" },
    { name: "Technical Support", icon: <ShieldCheck size={18} />, stats: "10 Projects" },
    { name: "Growth Ops", icon: <TrendingUp size={18} />, stats: "6 Projects" },
  ];

  const benefits = [
    { title: "Project-based learning", desc: "Build real things from day one." },
    { title: "Mentor guidance", desc: "Get unstuck with expert support." },
    { title: "Portfolio outcomes", desc: "Work that gets you hired." },
  ];

  return (
    <section id="academy" className="py-16 md:py-24 bg-white px-4 md:px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">

          <div className="space-y-10">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#F3F4F6] border border-[#E5E7EB] rounded-full mb-6">
                <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                <span className="text-[10px] font-black uppercase tracking-widest text-[#0F1115]">Enrollment Open</span>
              </div>
              <h2 className="text-4xl md:text-6xl font-black mb-6 text-[#0F1115] tracking-tighter uppercase leading-none">
                Technical <br/> Training <span className="text-[#6B7280]">LMS</span>
              </h2>
              <p className="text-[#6B7280] text-base md:text-xl leading-relaxed max-w-xl font-medium">
                The CogOps Academy is a project-first environment. We strip away the fluff to focus on high-market-value engineering skills.
              </p>
            </div>
            
            <div className="space-y-6">
              <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-[#6B7280]">
                Available Curriculum
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {tracks.map((track, i) => (
            <Link 
              key={i} 
              href={`/courses?filter=${track.name.toLowerCase().replace(/ /g, '-')}`}
              className="flex flex-col p-5 bg-[#F3F4F6] border border-[#E5E7EB] rounded-2xl hover:border-[#0F1115] hover:bg-white transition-all group active:scale-[0.98]"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="p-2 bg-white border border-[#E5E7EB] rounded-lg text-[#0F1115] group-hover:bg-[#0F1115] group-hover:text-white transition-colors">
                  {track.icon}
                </div>
                <span className="text-[9px] font-black text-[#6B7280] uppercase tracking-widest">{track.stats}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="font-black text-sm text-[#0F1115] uppercase tracking-tight">{track.name}</span>
                <ArrowRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity -translate-x-2 group-hover:translate-x-0" />
              </div>
            </Link>
          ))}
        </div>
            </div>
          </div>

          <div className="bg-[#0F1115] p-6 sm:p-10 md:p-14 rounded-[2.5rem] shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 p-8 opacity-10">
               <Code size={120} className="text-white" />
            </div>

            <h3 className="text-2xl font-black mb-10 text-white uppercase tracking-tight">How it works</h3>
            
            <div className="space-y-8 relative z-10">
              {benefits.map((step, i) => (
                <div key={i} className="flex gap-5">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full border border-white/20 flex items-center justify-center text-[10px] font-black text-white">
                    0{i + 1}
                  </div>
                  <div>
                    <h5 className="font-black text-white uppercase text-sm tracking-wide mb-1">{step.title}</h5>
                    <p className="text-white/50 text-xs md:text-sm font-medium leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 pt-10 border-t border-white/10 space-y-4 relative z-10">
              {isLoggedIn ? (
                <Link href="/dashboard" className="block w-full">
                  <button className="w-full py-5 bg-white text-[#0F1115] rounded-xl font-black uppercase tracking-widest text-[11px] md:text-xs flex items-center justify-center gap-3 hover:bg-[#E5E7EB] transition-all">
                    Go to My Dashboard <ArrowRight size={16} />
                  </button>
                </Link>
              ) : (
                <>
                  <Link href="/signup" className="block w-full">
                    <button className="w-full py-5 bg-white text-[#0F1115] rounded-xl font-black uppercase tracking-widest text-[11px] md:text-xs flex items-center justify-center gap-3 hover:bg-[#E5E7EB] transition-all">
                      Create Account to Enroll <Lock size={14} />
                    </button>
                  </Link>
                  <Link href="/courses" className="block w-full">
                    <button className="w-full py-5 bg-transparent border border-white/20 text-white rounded-xl font-black uppercase tracking-widest text-[11px] md:text-xs hover:bg-white/5 transition-all text-center">
                      Browse Curriculum
                    </button>
                  </Link>
                </>
              )}
              
              <p className="text-center text-[9px] font-bold text-white/30 uppercase tracking-[0.2em] pt-4">
                Structured Learning System v2.1.0
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}