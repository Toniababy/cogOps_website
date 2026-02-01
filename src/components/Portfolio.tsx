export default function Portfolio() {
  const cases = [
    { client: "Tech Startup", problem: "Broken execution", solution: "Full MVP build", outcome: "Launched in 3 months" },
    { client: "E-comm Brand", problem: "Low conversion", solution: "Digital system overhaul", outcome: "40% growth in sales" }
  ];

  return (
    <section id="portfolio" className="py-24 bg-white dark:bg-[#0F1115] px-6 transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-4 text-slate-900 dark:text-[#E5E7EB]">Our Work</h2>
        <p className="text-slate-600 dark:text-[#6B7280] mb-12 text-lg">Here’s how we’ve helped founders, brands, and teams turn ideas into results.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {cases.map((c, i) => (
            <div key={i} className="p-8 border border-slate-200 dark:border-[#1F2937] rounded-3xl bg-slate-50 dark:bg-[#1F2937] transition-all duration-300 hover:scale-[1.02]">
              <span className="text-blue-600 font-bold text-sm uppercase tracking-wider">{c.client}</span>
              <h3 className="text-2xl font-bold mt-2 mb-4 text-slate-900 dark:text-[#E5E7EB]">{c.solution}</h3>
              <div className="space-y-3 text-sm text-slate-600 dark:text-[#6B7280]">
                <p><strong className="text-slate-900 dark:text-white">Problem:</strong> {c.problem}</p>
                <p><strong className="text-slate-900 dark:text-white">Outcome:</strong> {c.outcome}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}