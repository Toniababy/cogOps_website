import Link from 'next/link';

export default function Hero() {
  return (
    <section className="pt-40 pb-24 px-6 transition-colors duration-300 bg-white dark:bg-[#0F1115]">
      <div className="max-w-7xl mx-auto text-center">
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-[#0F1115] dark:text-[#E5E7EB] leading-[1.1] tracking-tight">
          Build Products. <br className="hidden md:block" />
          <span className="text-[#2563eb]">Grow Brands.</span>
        </h1>

        <p className="mt-10 text-lg md:text-2xl text-[#6B7280] max-w-3xl mx-auto leading-relaxed font-medium">
          CogOps is a tech-savvy agency and learning institution helping founders, product
          owners, and aspiring professionals turn ideas into real-world solutions.
        </p>

        <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-5 w-full max-w-xl mx-auto px-6">
          <button className="w-full sm:w-auto px-10 py-5 bg-[#2563eb] text-white font-extrabold rounded-full whitespace-nowrap hover:scale-105 transition-all shadow-xl shadow-blue-500/25 text-lg">
            Hire CogOps
          </button>
          
          <button className="w-full sm:w-auto px-10 py-5 bg-transparent border-2 border-[#6B7280]/20 dark:border-[#1F2937] text-[#0F1115] dark:text-[#E5E7EB] font-extrabold rounded-full whitespace-nowrap hover:bg-[#E5E7EB] dark:hover:bg-[#1F2937] transition-all text-lg">
            Learn a Tech Skill
          </button>
        </div>
      </div>
    </section>
  );
}