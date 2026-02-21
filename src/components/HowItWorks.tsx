import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function HowItWorks() {
  const clientSteps = ["Discover", "Build", "Launch", "Optimize"];
  const learnerSteps = ["Learn", "Practice", "Deploy", "Grow"];

  const StepGroup = ({ title, steps, color }: { title: string, steps: string[], color: string }) => (
    <div className="space-y-8">
      <h3 className={`text-[10px] font-black uppercase tracking-[0.4em] ${color}`}>{title}</h3>
      <div className="grid grid-cols-2 gap-3">
        {steps.map((step, i) => (
          <div key={i} className="flex items-center gap-3 p-4 bg-[#F3F4F6] rounded-2xl border border-transparent hover:border-[#0F1115] transition-all group">
            <span className="text-[10px] font-black text-[#9CA3AF] group-hover:text-[#0F1115]">{i + 1}</span>
            <span className="text-xs font-black uppercase tracking-widest text-[#0F1115]">{step}</span>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <section className="py-24 bg-white px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-6xl font-black text-[#0F1115] uppercase tracking-tighter mb-20">
          Execution <br/> Protocol<span className="text-[#6B7280]">.</span>
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32">
          <StepGroup title="Client Pipeline" steps={clientSteps} color="text-[#0F1115]" />
          <StepGroup title="Learning Pipeline" steps={learnerSteps} color="text-[#6B7280]" />
        </div>

        <div className="mt-32 bg-[#0F1115] rounded-[3rem] p-10 md:p-20 text-center relative overflow-hidden">
          <div className="relative z-10">
            <h2 className="text-4xl md:text-7xl font-black mb-6 text-white uppercase tracking-tighter">Ready to Scale?</h2>
            <p className="text-[#9CA3AF] mb-12 max-w-xl mx-auto font-bold uppercase text-[10px] tracking-[0.2em]">Agency // Academy // Infrastructure</p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/hire" className="w-full sm:w-auto px-10 py-5 bg-white text-[#0F1115] font-black rounded-2xl uppercase text-xs tracking-widest hover:bg-[#E5E7EB] transition-all">
                Initiate Project
              </Link>
              <Link href="/academy" className="w-full sm:w-auto px-10 py-5 bg-transparent border-2 border-white/20 text-white font-black rounded-2xl uppercase text-xs tracking-widest hover:bg-white/10 transition-all">
                Join Academy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}