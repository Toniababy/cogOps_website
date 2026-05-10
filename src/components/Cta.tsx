import Link from 'next/link';
import { Terminal, Briefcase, ArrowRight } from 'lucide-react';

export default function CTA() {
  return (
    <section className="py-20 px-4 md:px-10 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="bg-[#0F1115] rounded-[2.5rem] md:rounded-[4rem] p-8 md:p-20 text-center relative overflow-hidden group border border-white/5">
          
          {/* Animated Tech Grid Background */}
          <div className="absolute inset-0 opacity-20 pointer-events-none">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f2937_1px,transparent_1px),linear-gradient(to_bottom,#1f2937_1px,transparent_1px)] bg-[size:30px_30px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>
          </div>

          {/* Floating Glows for Depth */}
          <div className="absolute -top-24 -left-24 w-96 h-96 bg-blue-600/10 blur-[120px] rounded-full pointer-events-none" />
          <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-gray-600/10 blur-[120px] rounded-full pointer-events-none" />

          <div className="relative z-10">
            {/* Header */}
            <div className="space-y-6 mb-16">
              <h2 className="text-5xl md:text-8xl font-black text-white uppercase tracking-tighter leading-[0.9]">
                Choose Your <br />
                <span className="text-[#6B7280]">Protocol.</span>
              </h2>
              <p className="text-gray-400 text-sm md:text-lg font-bold max-w-2xl mx-auto uppercase tracking-[0.2em] px-4">
                Deploy high-performance systems with <span className="text-white text-xl font-black normal-case">CogOps</span> or master the craft in our Academy.
              </p>
            </div>

            {/* Dual CTA Cards - Responsive Grid */}
            <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
              
              {/* Card 1: The Agency */}
              <div className="bg-white/5 border border-white/10 p-8 rounded-[2rem] text-left hover:bg-white/10 transition-all group/card">
                <div className="w-12 h-12 bg-white flex items-center justify-center rounded-xl mb-6">
                  <Briefcase className="text-[#0F1115]" size={24} />
                </div>
                <h3 className="text-2xl font-black text-white uppercase mb-2">Build with <span className='normal-case'>CogOps</span> </h3>
                <p className="text-gray-400 text-sm font-medium mb-8 leading-relaxed">
                  Partner with our engineering team to architect, build, and scale your technical infrastructure with precision.
                </p>
                <Link href="/hire" className="inline-flex items-center gap-2 text-white font-bold text-xs uppercase tracking-widest group-hover/card:gap-4 transition-all">
                  Initialize Project <ArrowRight size={16} />
                </Link>
              </div>

              {/* Card 2: The Academy */}
              <div className="bg-white/5 border border-white/10 p-8 rounded-[2rem] text-left hover:bg-white/10 transition-all group/card">
                <div className="w-12 h-12 bg-[#6B7280] flex items-center justify-center rounded-xl mb-6">
                  <Terminal className="text-white" size={24} />
                </div>
                <h3 className="text-2xl font-black text-white uppercase mb-2">Join the Academy</h3>
                <p className="text-gray-400 text-sm font-medium mb-8 leading-relaxed">
                  Master the execution protocol. Intensive technical training designed for the next generation of top-tier builders.
                </p>
                <Link href="/academy" className="inline-flex items-center gap-2 text-[#6B7280] font-bold text-xs uppercase tracking-widest group-hover/card:text-white transition-all">
                  Access Training <ArrowRight size={16} />
                </Link>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}