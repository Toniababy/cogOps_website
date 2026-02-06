import Link from "next/link";

export default function WhatWeDo() {
  return (
    <section className="py-24 px-6 bg-white dark:bg-[#0F1115] transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-black text-[#0F1115] dark:text-[#E5E7EB] mb-16 tracking-tight">
          What We Do
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
          <div className="p-[2px] rounded-[2.5rem] bg-gradient-to-br from-[#2563eb] via-[#60A5FA] to-[#1E40AF]">
            <div className="bg-white dark:bg-[#1F2937] p-10 md:p-12 rounded-[2.4rem] h-full transition-colors duration-300">
              <h3 className="text-xs font-black text-[#2563eb] uppercase tracking-[0.3em] mb-4">Agency Services</h3>
              <p className="text-[#0F1115] dark:text-[#E5E7EB] text-2xl font-bold leading-tight mb-4">
                We partner with founders to build products that scale.
              </p>
              <p className="text-[#6B7280] text-lg leading-relaxed">
                From MVP builds to operational systems, we provide the technical muscle to turn vision into revenue-generating reality.
              </p>
            </div>
          </div>

          <Link href="#academy" className="group block h-full">
            <div className="p-[2px] rounded-[2.5rem] h-full bg-gradient-to-br from-[#2563eb] via-[#60A5FA] to-[#1E40AF] transition-all duration-300 group-hover:shadow-2xl group-hover:shadow-[#6B7280]/20">
              <div className="bg-white dark:bg-[#1F2937] p-10 md:p-12 rounded-[2.4rem] h-full transition-colors duration-300 flex flex-col justify-between">
                <div>
                  <h3 className="text-xs font-black text-[#0F1115] dark:text-[#E5E7EB] uppercase tracking-[0.3em] mb-4">
                    Tech Skill Training
                  </h3>
                  <p className="text-[#0F1115] dark:text-[#E5E7EB] text-2xl font-bold leading-tight mb-4">
                    We train professionals for the actual workforce.
                  </p>
                  <p className="text-[#6B7280] text-lg leading-relaxed">
                    Our Academy is hands-on and mentor-supported, focusing on high-demand skills like development, design, and operations.
                  </p>
                </div>

                <div className="mt-8 flex items-center font-bold text-[#0F1115] dark:text-[#E5E7EB] text-sm uppercase tracking-widest group-hover:text-[#2563eb] transition-colors">
                  Explore Academy <span className="ml-2 transition-transform group-hover:translate-x-2">→</span>
                </div>
              </div>
            </div>
          </Link>

        </div>
      </div>
    </section>
  );
}