export default function Portfolio() {
  const cases = [
    { client: "Tech Startup", problem: "Broken execution", solution: "Full MVP Build", outcome: "Launched in 90 Days" },
    { client: "E-comm Brand", problem: "Low conversion", solution: "System Overhaul", outcome: "+40% Conversion" }
  ];

  return (
    <section id="portfolio" className="py-24 bg-white px-4 md:px-6 border-t border-[#F3F4F6]">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div className="max-w-2xl">
            <h2 className="text-[10px] font-black text-[#6B7280] uppercase tracking-[0.4em] mb-4">Case Studies</h2>
            <h3 className="text-5xl md:text-7xl font-black text-[#0F1115] uppercase tracking-tighter">Our Work<span className="text-[#6B7280]">.</span></h3>
          </div>
          <p className="text-[#6B7280] text-sm font-bold uppercase tracking-widest max-w-xs md:text-right">
            Turning abstract ideas into precise technical results.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {cases.map((c, i) => (
            <div key={i} className="p-10 border-2 border-[#E5E7EB] rounded-[3rem] bg-white hover:border-[#0F1115] transition-all group">
              <div className="flex justify-between items-start mb-12">
                <span className="px-4 py-1.5 bg-[#F3F4F6] rounded-full text-[9px] font-black uppercase tracking-widest">{c.client}</span>
                <div className="w-2 h-2 rounded-full bg-[#0F1115] group-hover:animate-ping" />
              </div>

              <h3 className="text-3xl md:text-4xl font-black mb-10 text-[#0F1115] uppercase tracking-tighter leading-[0.9]">
                {c.solution}
              </h3>
              
              <div className="grid grid-cols-2 gap-8 border-t border-[#F3F4F6] pt-10">
                <div className="space-y-1">
                  <span className="text-[9px] uppercase font-black text-[#9CA3AF] tracking-[0.2em]">Diagnosis</span>
                  <p className="text-[#0F1115] font-bold text-xs uppercase">{c.problem}</p>
                </div>
                <div className="space-y-1">
                  <span className="text-[9px] uppercase font-black text-[#0F1115] tracking-[0.2em]">Resolution</span>
                  <p className="text-xl font-black text-[#0F1115] uppercase tracking-tighter">{c.outcome}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}