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

      <div className="space-y-20 md:space-y-32 pb-32">
        <WhoWeServe />
        <WhatWeDo />

        <section className="bg-[#F3F4F6] py-20 rounded-[3rem] mx-4 md:mx-6 border border-[#6B7280]/10">
          <Services />
          <HowItWorks />
        </section>

        <Academy />
        <About />
        <Portfolio />
        <Team />
        <Insights />
        <Contact />
      </div>
    </main>
  );
}