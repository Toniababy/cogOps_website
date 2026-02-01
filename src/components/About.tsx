export default function About() {
  return (
    <section id="about" className="py-28 bg-white dark:bg-[#0F1115] px-6 transition-colors duration-300">
      <div className="max-w-7xl mx-auto text-slate-900 dark:text-[#E5E7EB]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">
          <div className="space-y-8">
            <h2 className="text-xs font-bold text-slate-500 dark:text-[#6B7280] uppercase tracking-[0.3em]">About CogOps</h2>
            <h3 className="text-4xl md:text-5xl font-bold leading-tight">Our Story</h3>
            <p className="text-lg text-slate-600 dark:text-[#6B7280]">CogOps was created to solve a simple problem: too many ideas fail not because they’re bad, but because execution is broken.</p>
            <p className="text-lg font-medium">We exist to bridge the gap between ideas, execution, and growth — for both businesses and individuals.</p>
            
            <div className="grid gap-6 pt-6">
              <div>
                <h4 className="font-semibold mb-1">Our Mission</h4>
                <p className="text-slate-600 dark:text-[#6B7280]">To help founders, brands, and individuals build relevant, scalable, and future-ready solutions.</p>
              </div>
              <div>
                <h4 className="font-semibold mb-1">Our Vision</h4>
                <p className="text-slate-600 dark:text-[#6B7280]">To become a trusted execution partner and learning institution powering the next generation of digital products and talent.</p>
              </div>
            </div>
          </div>

          <div className="bg-slate-50 dark:bg-[#1F2937] p-12 rounded-3xl border border-slate-200 dark:border-[#E5E7EB]/10 shadow-xl transition-all duration-300 hover:-translate-y-1">
            <h3 className="text-2xl font-bold mb-6">The CogOps Model</h3>
            <p className="text-slate-600 dark:text-[#6B7280] mb-8">CogOps operates as:</p>
            <ul className="space-y-6">
              <li className="flex gap-4">
                <span className="mt-1 w-2 h-2 rounded-full bg-slate-900 dark:bg-[#E5E7EB]" />
                <p className="font-medium">A technology and operations agency for businesses</p>
              </li>
              <li className="flex gap-4">
                <span className="mt-1 w-2 h-2 rounded-full bg-slate-900 dark:bg-[#E5E7EB]" />
                <p className="font-medium">A learning institution for aspiring and growing tech professionals</p>
              </li>
            </ul>
            <div className="mt-10 p-6 bg-white dark:bg-[#0F1115] rounded-2xl border border-slate-200 dark:border-[#E5E7EB]/10">
              <p className="text-slate-500 dark:text-[#6B7280] italic">“This dual model ensures everything we build and teach is grounded in real-world application.”</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}