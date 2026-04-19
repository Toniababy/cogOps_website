'use client';
import Link from 'next/link';
import { ArrowRight, Terminal, Layers, Zap, Users, Globe } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 md:pt-44 md:pb-32 px-4 bg-white overflow-hidden min-h-[95vh] flex flex-col justify-center">

      <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#0F1115" strokeWidth="1"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto text-center relative z-10 w-full">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#F3F4F6] border border-[#E5E7EB] mb-6 md:mb-10">
          <Globe size={12} className="text-[#0F1115]" />
          <span className="text-[9px] md:text-[10px] font-black uppercase tracking-[0.2em] text-[#0F1115] whitespace-nowrap">
            Engineering the Future of Work
          </span>
        </div>

        <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black text-[#0F1115] leading-[0.95] tracking-tighter uppercase mb-6 md:mb-8">
          Build <span className="text-[#6B7280]">Better</span>.<br />
          Scale Faster.
        </h1>

        <p className="text-base md:text-xl text-[#6B7280] max-w-2xl mx-auto leading-relaxed font-medium mb-10 md:mb-14 px-4">
          A dedicated technical partner for visionary founders and 
          a hands-on academy for the next generation of tech leaders.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-6 w-full max-w-3xl mx-auto px-4">
          <Link href="/hire" className="w-full sm:w-auto">
            <button className="w-full sm:min-w-[200px] px-8 py-5 bg-[#0F1115] text-white font-black rounded-xl hover:bg-[#1F2937] transition-all shadow-xl active:scale-95 text-sm md:text-lg flex items-center justify-center gap-3 uppercase tracking-widest whitespace-nowrap">
              Hire Agency <ArrowRight size={18} />
            </button>
          </Link>

          <Link href="/academy" className="w-full sm:w-auto">
            <button className="w-full sm:min-w-[200px] px-8 py-5 bg-white border-[2px] border-[#0F1115] text-[#0F1115] font-black rounded-xl hover:bg-[#F3F4F6] transition-all shadow-[6px_6px_0px_0px_rgba(15,17,21,0.1)] active:translate-x-1 active:translate-y-1 active:shadow-none text-sm md:text-lg uppercase tracking-widest whitespace-nowrap">
              Our Academy
            </button>
          </Link>
        </div>

        <div className="mt-16 md:mt-24 pt-10 border-t border-[#E5E7EB] grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {[
            { icon: Terminal, label: "Product Builds" },
            { icon: Layers, label: "System Design" },
            { icon: Zap, label: "Workflow Ops" },
            { icon: Users, label: "Skill Training" }
          ].map((item, idx) => (
            <div key={idx} className="flex flex-col items-center gap-2">
              <item.icon size={18} className="text-[#0F1115] md:w-5 md:h-5" />
              <span className="font-black text-[8px] md:text-[9px] uppercase tracking-widest text-[#6B7280] whitespace-nowrap">
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}







