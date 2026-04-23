import About from "@/components/About";
import Academy from "@/components/Academy";
import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import Insights from "@/components/Insights";
import Team from "@/components/Team";
import Portfolio from "@/components/Portfolio";
import Services from "@/components/Services";
import WhatWeDo from "@/components/WhatWeDo";
import WhoWeServe from "@/components/WhoWeServe";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-[#0F1115]">
      <Hero />

      <section className="py-24 bg-[#0F1115] text-white px-4 md:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-[10px] font-black uppercase tracking-[0.5em] text-[#6B7280] mb-6">The Execution Gap</h2>
              <h3 className="text-4xl md:text-6xl font-black uppercase tracking-tighter leading-none">
                Ideas are cheap. <br />
                <span className="text-[#6B7280]">Infrastructure is hard.</span>
              </h3>
            </div>
            <div className="space-y-6 text-[#9CA3AF] text-lg font-medium leading-relaxed">
              <p>
                Most startups fail not because the vision was wrong, but because the technical 
                execution was broken. Spaghetti code, slow deployments, and zero technical strategy.
              </p>
              <p className="text-white border-l-2 border-white pl-6 italic">
                CogOps exists to bridge that gap. We provide the elite engineering muscle 
                required to turn your concept into a scalable digital reality.
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="space-y-20 md:space-y-32 pb-32 mt-20">
        <WhoWeServe />
        <WhatWeDo />

        <section className="bg-[#F3F4F6] py-20 rounded-[4rem] mx-2 md:mx-6 border border-[#6B7280]/10 shadow-inner">
          <Services />
          <HowItWorks />
        </section>

        <Portfolio /> 
        <Academy />
        <About />
        <Team />
        <Insights />
        <Contact />
      </div>
    </main>
  );
}