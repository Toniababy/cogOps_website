import About from "@/components/About";
import Academy from "@/components/Academy";
import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import Insights from "@/components/Insights";
import Portfolio from "@/components/Portfolio";
import ProgramPage from "@/components/ProgramePage";
import Services from "@/components/Services";
import WhatWeDo from "@/components/WhatWeDo";
import WhoWeServe from "@/components/WhoWeServe";

export default function Home() {
  return (
    <main className="min-h-screen transition-colors duration-300 bg-white dark:bg-[#0F1115] text-slate-900 dark:text-[#E5E7EB]">
      <Hero />

      <div className="space-y-20 md:space-y-32 pb-32 bg-transparent">
        
        <WhoWeServe />
        <WhatWeDo />

        <section className="bg-slate-50 dark:bg-[#1F2937] py-20 rounded-[3rem] mx-4 md:mx-6 transition-colors duration-300">
          <Services />
          <HowItWorks />
        </section>

        <Academy />
        <About />
        <Portfolio />
        <Insights />
        <Contact />
        <ProgramPage name="Full-Stack Web Development Program" />
      </div>
    </main>
  );
}