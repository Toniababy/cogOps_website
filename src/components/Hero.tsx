import Link from 'next/link';

export default function Hero() {
  return (
    <section className="pt-32 pb-16 md:pt-48 md:pb-32 px-6">
      <div className="max-w-7xl mx-auto text-center">
        <h1 className="text-5xl md:text-7xl font-bold text-slate-900 tracking-tight">
          Build Products. <span className="text-blue-600">Grow Brands.</span> <br />
          Learn Tech Skills.
        </h1>
        <p className="mt-8 text-lg md:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
          CogOps is a tech-savvy agency and learning institution helping founders, product 
          owners, brand owners, and aspiring professionals turn ideas into real-world solutions.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="#hire" className="px-8 py-4 bg-blue-600 text-white font-semibold rounded-full hover:bg-blue-700 transition-all shadow-lg shadow-blue-200">
            Hire CogOps
          </Link>
          <Link href="#academy" className="px-8 py-4 bg-white border-2 border-slate-200 text-slate-900 font-semibold rounded-full hover:border-blue-600 transition-all">
            Learn a Tech Skill
          </Link>
        </div>
      </div>
    </section>
  );
}