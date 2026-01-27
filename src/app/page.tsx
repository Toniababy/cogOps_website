// import About from "@/components/about";
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
    <main className="min-h-screen bg-white">

      <Hero />
      <WhoWeServe />
      <WhatWeDo />
      <Services />
      <HowItWorks />
      <Academy />
      <About/>
      
     <div id="programs" className="bg-slate-50 py-10">
         <h2 className="text-center text-2xl font-bold text-slate-400 uppercase tracking-widest">Academy Program Template</h2>
         <ProgramPage name="Product & Technology Track" />
      </div>
      <Portfolio />
      <Insights />
      <Contact />
    </main>
  );
}