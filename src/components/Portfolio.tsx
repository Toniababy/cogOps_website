export default function Portfolio() {
  const cases = [
    { client: "Tech Startup", problem: "Broken execution", solution: "Full MVP build", outcome: "Launched in 3 months" },
    { client: "E-comm Brand", problem: "Low conversion", solution: "Digital system overhaul", outcome: "40% growth in sales" }
  ];

  return (
    <section id="portfolio" className="py-24 bg-white px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-4">Our Work</h2>
        <p className="text-slate-600 mb-12">Here’s how we’ve helped founders, brands, and teams turn ideas into results.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {cases.map((c, i) => (
            <div key={i} className="p-8 border border-slate-200 rounded-3xl">
              <span className="text-blue-600 font-bold text-sm uppercase">{c.client}</span>
              <h3 className="text-xl font-bold mt-2 mb-4">{c.solution}</h3>
              <div className="space-y-2 text-sm">
                <p><strong>Problem:</strong> {c.problem}</p>
                <p><strong>Outcome:</strong> {c.outcome}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}