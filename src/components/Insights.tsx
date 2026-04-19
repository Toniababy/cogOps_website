'use client';
import { Cpu, Zap, Shield, Lock } from 'lucide-react';

export default function Insights() {
  const posts = [
    { 
      title: "Founder Insights", 
      category: "Execution", 
      desc: "Moving from conceptual idea to hardware execution.",
      icon: <Zap size={40} className="text-white/20" />,
      status: "CLASSIFIED",
      release: "Q3 2026"
    },
    { 
      title: "Product Thinking", 
      category: "Systems", 
      desc: "Building scalable digital products with zero technical debt.",
      icon: <Cpu size={40} className="text-white/20" />,
      status: "ENCRYPTED",
      release: "Q4 2026"
    },
    { 
      title: "Tech Learning", 
      category: "Talent", 
      desc: "Strategic resources for the modern technical professional.",
      icon: <Shield size={40} className="text-white/20" />,
      status: "LOCKED",
      release: "Q4 2026"
    }
  ];

  return (
    <section id="insights" className="py-20 md:py-32 bg-white px-4 md:px-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12 md:mb-20">
            <h2 className="text-[10px] md:text-[12px] font-black text-[#6B7280] uppercase tracking-[0.4em] mb-4">
                Intelligence Feed
            </h2>
            <h3 className="text-5xl sm:text-6xl md:text-8xl font-black text-[#0F1115] uppercase tracking-tighter leading-none">
                Insights<span className="text-[#6B7280]">.</span>
            </h3>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-16 gap-x-8 md:gap-12">
          {posts.map((post, i) => (
            <div key={i} className="group flex flex-col opacity-90 hover:opacity-100 transition-opacity">
              
              {/* THE INTELLIGENCE CARD */}
              <div className="mb-8 overflow-hidden rounded-[2rem] bg-[#0F1115] aspect-video flex flex-col items-center justify-center border border-[#E5E7EB] relative transition-all duration-500">
                
                {/* Blueprint Grid Background */}
                <div className="absolute inset-0 opacity-10" 
                     style={{ 
                       backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', 
                       backgroundSize: '25px 25px' 
                     }} 
                />
                
                {/* Center Visual */}
                <div className="relative z-10 flex flex-col items-center gap-4">
                   <div className="text-white/10 group-hover:text-white/30 transition-colors duration-500">
                    {post.icon}
                   </div>
                   <div className="flex flex-col items-center">
                        <div className="w-8 h-[1px] bg-[#6B7280] mb-2" />
                        <span className="text-[8px] font-black uppercase tracking-[0.4em] text-[#6B7280]">
                            {post.status}_PROTOCOL_0{i+1}
                        </span>
                   </div>
                </div>

                {/* Secure Badge */}
                <div className="absolute top-6 right-6 flex items-center gap-2 px-3 py-1 bg-white/5 rounded-full border border-white/10">
                    <Lock size={10} className="text-[#6B7280]" />
                    <span className="text-[8px] font-bold text-white/40 uppercase tracking-widest">{post.release}</span>
                </div>
              </div>

              {/* TEXT CONTENT */}
              <div className="flex flex-col flex-1">
                <span className="text-[10px] font-black text-[#6B7280] uppercase tracking-[0.3em]">
                    {post.category}
                </span>
                
                <h4 className="text-2xl md:text-3xl font-black mt-3 mb-4 text-[#0F1115] uppercase tracking-tight">
                    {post.title}
                </h4>
                
                <p className="text-[#6B7280] mb-8 text-sm font-bold leading-relaxed uppercase max-w-sm">
                    {post.desc}
                </p>
                
                {/* THE LOCKED BUTTON */}
                <div className="mt-auto">
                    <button 
                        disabled 
                        className="text-[11px] font-black uppercase tracking-widest flex items-center gap-3 text-[#9CA3AF] cursor-not-allowed border-b border-transparent"
                    >
                        Access Restricted <Lock size={12} />
                    </button>
                    <p className="text-[8px] text-[#9CA3AF] mt-2 font-bold uppercase tracking-widest italic">
                        * Awaiting Administrative Clearance
                    </p>
                </div>
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
}