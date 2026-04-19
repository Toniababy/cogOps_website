'use client';
import { useRef } from 'react';
import { ArrowRight, Send, Search, Users, ClipboardCheck, Zap, TrendingUp, ShieldCheck } from 'lucide-react';
import IntakeForm from './IntakeForm';

export default function HireUs() {
  const formRef = useRef<HTMLDivElement>(null);

  const scrollToForm = () => {
    formRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const whoThisIsFor = [
    { name: "Early-stage founders", icon: <Zap className="w-5 h-5" />, sub: "Validation & MVP" },
    { name: "Growing startups", icon: <TrendingUp className="w-5 h-5" />, sub: "Scaling & Systems" },
    { name: "Established brands", icon: <ShieldCheck className="w-5 h-5" />, sub: "Digital Evolution" }
  ];

  const steps = [
    { title: "Submit Request", desc: "Define your challenge through our vetting form.", icon: <Send /> },
    { title: "Initial Review", desc: "Our leads review technical feasibility.", icon: <Search /> },
    { title: "Strategy Call", desc: "A deep-dive into ops and architecture.", icon: <Users /> },
    { title: "Project Proposal", desc: "A fixed-scope roadmap and execution plan.", icon: <ClipboardCheck /> }
  ];

  return (
    <div className="bg-white">
      <section className="pt-40 pb-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="mb-20">
            <h1 className="text-5xl md:text-7xl font-black text-[#0F1115] mb-6 tracking-tighter">
              Partner with <br/> CogOps Agency
            </h1>
            <p className="text-[#6B7280] text-xl max-w-3xl leading-relaxed font-medium">
              We don't just "build apps." We engineer technical infrastructure that scales brands and automates operations.
            </p>
            <button 
              onClick={scrollToForm}
              className="mt-8 w-full sm:w-auto px-6 md:px-10 py-5 bg-[#0F1115] text-white font-black uppercase tracking-[0.15em] md:tracking-widest rounded-xl hover:bg-[#1F2937] transition-all flex items-center justify-center gap-3 text-sm md:text-base"
            >
              Start Vetting Process <ArrowRight size={18} />
            </button>
          </div>

          <div className="mb-32">
            <h2 className="text-[15px] font-black text-[#6B7280] uppercase tracking-[0.4em] mb-12">Target Verticals</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {whoThisIsFor.map((item, i) => (
                <div key={i} className="group p-8 bg-white border-2 border-[#E5E7EB] rounded-2xl hover:border-[#0F1115] transition-all">
                  <div className="w-12 h-12 bg-[#F3F4F6] rounded-xl flex items-center justify-center mb-6 text-[#0F1115] group-hover:bg-[#0F1115] group-hover:text-white transition-colors">
                    {item.icon}
                  </div>
                  <h3 className="font-black text-xl text-[#0F1115] mb-2 uppercase">{item.name}</h3>
                  <p className="text-[#6B7280] font-medium text-sm">{item.sub}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-[#0F1115] p-12 md:p-24 rounded-[3rem] text-white">
            <h2 className="text-3xl md:text-5xl font-black mb-20 text-center uppercase tracking-tighter">The Onboarding Logic</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 relative">
              {steps.map((step, i) => (
                <div key={i} className="relative z-10">
                  <div className="text-6xl font-black text-white/10 absolute -top-10 -left-4 select-none">0{i + 1}</div>
                  <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center mb-6 text-white border border-white/20">
                    {step.icon}
                  </div>
                  <h4 className="text-xl font-black mb-4 uppercase tracking-tight">{step.title}</h4>
                  <p className="text-white/60 text-sm leading-relaxed">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div ref={formRef}>
        <IntakeForm />
      </div>
    </div>
  );
}