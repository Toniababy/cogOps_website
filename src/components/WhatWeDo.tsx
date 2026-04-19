import Link from 'next/link';

export default function WhatWeDo() {
  return (
    <section className="py-32 px-4 md:px-6 bg-white border-t border-[#F3F4F6]">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">

          <div className="p-10 md:p-16 rounded-[3rem] border-2 border-[#0F1115] bg-white flex flex-col justify-between group">
            <div>
              <span className="text-[10px] font-black text-[#6B7280] uppercase tracking-[0.4em]">Protocol 01 // Agency</span>
              <h3 className="text-4xl md:text-6xl font-black text-[#0F1115] uppercase tracking-tighter leading-[0.85] mt-8 mb-6">
                Technical <br/> Execution<span className="text-[#6B7280]">.</span>
              </h3>
              <p className="text-[#6B7280] text-sm font-bold uppercase leading-relaxed max-w-sm">
                From MVP builds to operational infrastructure, we provide the technical muscle to turn vision into revenue.
              </p>
            </div>
            <div className="mt-12 h-1 w-20 bg-[#0F1115] group-hover:w-full transition-all duration-700" />
          </div>

          <Link href="/academy" className="p-10 md:p-16 rounded-[3rem] bg-[#0F1115] text-white flex flex-col justify-between group hover:scale-[0.99] transition-all">
            <div>
              <span className="text-[10px] font-black text-[#6B7280] uppercase tracking-[0.4em]">Protocol 02 // Academy</span>
              <h3 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter leading-[0.85] mt-8 mb-6">
                Skill <br/> Training<span className="text-[#6B7280]">.</span>
              </h3>
              <p className="text-[#9CA3AF] text-sm font-bold uppercase leading-relaxed max-w-sm">
                Hands-on, mentor-supported training focusing on high-demand skills for the actual workforce.
              </p>
            </div>
            <div className="mt-12 flex items-center gap-4 text-[10px] font-black uppercase tracking-[0.3em]">
              Explore Curriculum <span className="group-hover:translate-x-2 transition-transform">→</span>
            </div>
          </Link>

        </div>
      </div>
    </section>
  );
}