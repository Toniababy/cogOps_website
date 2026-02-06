export default function Portfolio() {
  const cases = [
    { client: "Tech Startup", problem: "Broken execution", solution: "Full MVP build", outcome: "Launched in 3 months" },
    { client: "E-comm Brand", problem: "Low conversion", solution: "Digital system overhaul", outcome: "40% growth in sales" }
  ];

  return (
    <section id="portfolio" className="py-24 bg-white dark:bg-[#0F1115] px-6 transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-black mb-4 text-[#0F1115] dark:text-[#E5E7EB] tracking-tight">Our Work</h2>
        <p className="text-[#6B7280] mb-12 text-lg max-w-2xl">
          Here’s how we’ve helped founders, brands, and teams turn ideas into results through precise execution.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {cases.map((c, i) => (
            <div 
              key={i} 
              className="p-8 md:p-10 border border-[#6B7280]/10 dark:border-white/5 rounded-[2rem] bg-[#E5E7EB] dark:bg-[#1F2937] transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/10 group"
            >
              <span className="text-[#2563eb] font-bold text-xs uppercase tracking-[0.2em]">{c.client}</span>
              <h3 className="text-2xl md:text-3xl font-bold mt-3 mb-6 text-[#0F1115] dark:text-[#E5E7EB] leading-tight">
                {c.solution}
              </h3>
              
              <div className="space-y-4 border-t border-[#6B7280]/20 dark:border-white/5 pt-6">
                <div className="flex flex-col gap-1">
                  <span className="text-[10px] uppercase font-bold text-[#6B7280] tracking-widest">Problem</span>
                  <p className="text-[#0F1115] dark:text-[#E5E7EB] font-medium">{c.problem}</p>
                </div>
                
                <div className="flex flex-col gap-1">
                  <span className="text-[10px] uppercase font-bold text-[#2563eb] tracking-widest">Outcome</span>
                  <p className="text-[#0F1115] dark:text-[#E5E7EB] font-bold text-lg">{c.outcome}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}