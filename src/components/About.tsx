'use client';
import { Target, Eye, Zap } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-20 md:py-32 bg-white px-4 md:px-10 border-t border-[#F3F4F6]">
      <div className="max-w-7xl mx-auto">
        {/* Responsive Grid: Stacks on mobile, Side-by-side on LG */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-20 items-start">

          {/* LEFT COLUMN: THE STORY */}
          <div className="space-y-12 md:space-y-16">
            <div className="text-left">
              <h2 className="text-[9px] md:text-[10px] font-black text-[#6B7280] uppercase tracking-[0.4em] mb-4 italic">Origin Protocol</h2>
              <h3 className="text-5xl md:text-8xl font-black leading-[0.85] text-[#0F1115] uppercase tracking-tighter">
                Our <br /> Story<span className="text-[#6B7280]">.</span>
              </h3>
            </div>

            <p className="text-xl md:text-2xl text-[#6B7280] font-bold leading-tight tracking-tight italic max-w-xl border-l-4 border-[#F3F4F6] pl-6">
              "Too many ideas fail not because they’re bad, but because execution is broken."
            </p>

            {/* MISSION & VISION - ENLARGED */}
            <div className="space-y-12 pt-10 border-t border-[#F3F4F6]">
              <div className="group transition-transform hover:translate-x-2 duration-500">
                <h4 className="font-black text-[#0F1115] mb-5 uppercase text-[10px] tracking-[0.3em] flex items-center gap-3">
                  <Zap size={14} className="text-blue-500" /> Mission
                </h4>
                {/* Text size increased for mobile impact */}
                <p className="text-3xl md:text-5xl font-black text-[#0F1115] tracking-tighter leading-[0.9] uppercase">
                  Building <span className="text-[#6B7280]">scalable</span> and future-ready solutions.
                </p>
              </div>

              <div className="group transition-transform hover:translate-x-2 duration-500">
                <h4 className="font-black text-[#0F1115] mb-5 uppercase text-[10px] tracking-[0.3em] flex items-center gap-3">
                  <Target size={14} className="text-gray-400" /> Vision
                </h4>
                <p className="text-3xl md:text-5xl font-black text-[#0F1115] tracking-tighter leading-[0.9] uppercase">
                  Powering the <span className="text-[#6B7280]">infrastructure</span> of tomorrow.
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: THE MODEL CARD (Fixed Alignment) */}
          <div className="lg:sticky lg:top-32 w-full">
            <div className="bg-[#0F1115] p-8 md:p-16 rounded-[2.5rem] md:rounded-[4rem] shadow-2xl overflow-hidden relative shine-effect">
              {/* Background Cog Accent */}
              <div className="absolute -top-10 -right-10 opacity-5 pointer-events-none">
                <h1 className="text-[15rem] font-black text-white leading-none tracking-tighter">CO</h1>
              </div>

              <h3 className="text-2xl md:text-3xl font-black mb-12 text-white tracking-tight relative z-10 uppercase">
                The 
                <span className="normal-case"> CogOps </span>
                 Model
              </h3>

              <div className="space-y-10 relative z-10">
                {[
                  { title: "Agency Division", text: "Technology & Ops for high-growth businesses", icon: "01" },
                  { title: "Academy Division", text: "Learning Institution for specialized professionals", icon: "02" }
                ].map((item, i) => (
                  <div key={i} className="group/item">
                    <div className="flex justify-between items-center mb-3">
                      <p className="text-[9px] font-black text-[#6B7280] uppercase tracking-[0.3em]">{item.title}</p>
                      <span className="text-[10px] font-black text-white/20">PX-{item.icon}</span>
                    </div>
                    <div className="flex gap-5 items-start">
                      <div className="w-2 h-2 rounded-full bg-blue-500 shrink-0 mt-2 animate-pulse" />
                      <p className="font-black text-white uppercase text-xl md:text-2xl tracking-tighter leading-none group-hover/item:text-blue-400 transition-colors">
                        {item.text}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Technical Mandate Box with Glisten */}
              <div className="mt-16 p-8 bg-white/5 border border-white/10 rounded-[2rem] relative z-10 animate-glisten">
                <p className="text-[#E5E7EB] text-lg font-bold leading-tight italic uppercase tracking-tight">
                  “Grounding every build in real-world application.”
                </p>
                <div className="mt-6 flex items-center gap-3">
                  <div className="h-[1px] w-8 bg-white/20" />
                  <p className="text-[9px] font-black text-white uppercase tracking-widest">Technical Mandate</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}