export default function ProgramPage({ name = "Foundational Workflow Ops" }) {
  return (
    <section className="py-32 bg-white px-4 md:px-6">
      <div className="max-w-4xl mx-auto">
        <div className="bg-[#0F1115] p-10 md:p-20 rounded-[3rem] text-white shadow-2xl relative overflow-hidden">
          <div className="relative z-10">
            <h1 className="text-4xl md:text-6xl font-black mb-6 uppercase tracking-tighter leading-[0.9]">
              {name}
            </h1>
            <p className="text-[#6B7280] font-black mb-16 text-xs uppercase tracking-[0.3em]">
              Syllabus Protocol // Version 1.0.4
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 border-t border-white/10 pt-16">
              <div>
                <h3 className="text-[10px] font-black mb-8 text-[#6B7280] uppercase tracking-[0.4em]">Curriculum Focus</h3>
                <ul className="space-y-6">
                  {["First Principles Logic", "Technical Stack Mastery", "Production Pipelines"].map((text, i) => (
                    <li key={i} className="flex items-center gap-4 text-sm font-black uppercase tracking-tight">
                      <span className="w-1.5 h-1.5 bg-white rounded-full shrink-0" /> {text}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-[10px] font-black mb-8 text-[#6B7280] uppercase tracking-[0.4em]">Career Outcome</h3>
                <ul className="space-y-6">
                  {["Portfolio Execution", "Global Market Ready", "Industry Certification"].map((text, i) => (
                    <li key={i} className="flex items-center gap-4 text-sm font-black uppercase tracking-tight">
                      <span className="w-4 h-[1px] bg-[#6B7280]" /> {text}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            
            <button className="mt-20 w-full py-6 bg-white text-[#0F1115] rounded-2xl font-black text-xs uppercase tracking-[0.3em] hover:bg-[#E5E7EB] transition-all">
              Initiate Enrollment
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}