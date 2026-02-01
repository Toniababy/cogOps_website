import Link from 'next/link';

export default function Hero() {
  return (
    <section className="pt-32 pb-16 px-6">
      <div className="max-w-7xl mx-auto text-center">
        <h1 className="text-5xl md:text-7xl font-bold text-slate-900 dark:text-[#E5E7EB] leading-snug">
          Build Products. <span className="text-blue-600">Grow Brands.</span>
        </h1>

        <p className="mt-8 text-lg md:text-xl text-[#6B7280] max-w-3xl mx-auto leading-relaxed">
          CogOps is a tech-savvy agency and learning institution helping founders, product
          owners, brand owners, and aspiring professionals turn ideas into real-world solutions.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full max-w-lg mx-auto px-6">
          <button className="w-full sm:w-auto px-8 py-4 bg-blue-600 text-white font-bold rounded-full whitespace-nowrap hover:scale-105 transition-all shadow-lg shadow-blue-500/20">
            Hire CogOps
          </button>
          <button className="w-full sm:w-auto px-8 py-4 bg-transparent border-2 border-slate-200 dark:border-[#1F2937] text-slate-900 dark:text-[#E5E7EB] font-bold rounded-full whitespace-nowrap hover:bg-slate-100 dark:hover:bg-[#1F2937] transition-all">
            Learn a Tech Skill
          </button>
        </div>
      </div>
    </section>

  );
}