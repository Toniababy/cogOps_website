'use client';
import { ArrowUpRight } from 'lucide-react';
import Link from 'next/link';

export default function Portfolio() {
  const cases = [
    {
      id: "PRTCL-01",
      client: "Transiflow",
      title: "Transiflow Road Transport Booking App",
      problem: "Fragmented Local Logistics",
      solution: "Fleet & Park Synchronization System",
      outcome: "Direct Station-to-Station Booking",
      desc: "A localized transit protocol enabling users to reserve specific seating and park locations. Digitizing the manual interstate travel model with flight-style booking logic.",
      link: "http://transiflow.com.ng",
      isFeatured: true
    },
  ];

  return (
    <section id="portfolio" className="py-20 md:py-32 bg-white px-4 md:px-10 border-t border-[#F3F4F6]">
      <div className="max-w-7xl mx-auto">
        {/* Header - More compact on mobile */}
        <div className="mb-12 md:mb-20">
          <h2 className="text-[9px] md:text-[10px] font-black text-[#6B7280] uppercase tracking-[0.4em] mb-4">Portfolio Protocol</h2>
          <h3 className="text-4xl md:text-7xl lg:text-8xl font-black text-[#0F1115] uppercase tracking-tighter leading-none">
            Our Work<span className="text-[#6B7280]">.</span>
          </h3>
        </div>

        <div className="space-y-6 md:space-y-10">
          {cases.map((c, i) => (
            <div
              key={i}
              className={`p-6 md:p-12 lg:p-16 border-2 border-[#E5E7EB] rounded-[2rem] md:rounded-[3.5rem] bg-white hover:border-[#0F1115] transition-all duration-500 group flex flex-col justify-between 
              ${c.isFeatured ? 'border-[#0F1115]/20' : ''}`}
            >
              <div>
                {/* Top Bar - Stacks on extra small screens */}
                <div className="flex flex-col sm:flex-row justify-between items-start gap-4 mb-10 md:mb-16">
                  <span className="px-4 py-2 bg-[#0F1115] text-white rounded-lg text-[9px] font-black uppercase tracking-[0.2em] animate-glisten">
                    {c.client}
                  </span>

                  <div className="flex items-center gap-6 w-full sm:w-auto justify-between sm:justify-end">
                    <Link
                      href={c.link}
                      target="_blank"
                      className="group/link flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-[#0F1115] transition-all"
                    >
                      <span className="border-b-2 border-[#0F1115] group-hover/link:pr-2 transition-all">Launch Protocol</span>
                      <ArrowUpRight size={14} className="group-hover/link:-translate-y-1 group-hover/link:translate-x-1 transition-transform" />
                    </Link>
                    <span className="text-[10px] font-black text-[#9CA3AF] uppercase tracking-widest">{c.id}</span>
                  </div>
                </div>

                <h3 className={`font-black mb-6 md:mb-10 text-[#0F1115] uppercase tracking-tighter leading-[0.9] 
                  ${c.isFeatured ? 'text-3xl md:text-6xl lg:text-7xl' : 'text-2xl md:text-4xl'}`}>
                  {c.title}
                </h3>

                <p className="text-[#6B7280] text-[11px] md:text-[13px] font-bold uppercase leading-relaxed tracking-widest max-w-2xl">
                  {c.desc}
                </p>
              </div>

              {/* Diagnosis/Outcome - Full width on mobile, Grid on Tablet+ */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 border-t border-[#F3F4F6] pt-8 md:pt-12 mt-12 md:mt-20">
                <div className="space-y-2">
                  <span className="text-[8px] md:text-[9px] uppercase font-black text-[#9CA3AF] tracking-[0.3em]">Diagnosis</span>
                  <p className="text-[#0F1115] font-black text-[11px] md:text-[12px] uppercase">{c.problem}</p>
                </div>

                <div className="space-y-2">
                  <span className="text-[8px] md:text-[9px] uppercase font-black text-[#0F1115] tracking-[0.3em]">Protocol Resolution</span>
                  <p className={`font-black text-[#0F1115] uppercase tracking-tighter leading-none
                    ${c.isFeatured ? 'text-2xl md:text-5xl' : 'text-xl md:text-3xl'}`}>
                    {c.outcome}
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