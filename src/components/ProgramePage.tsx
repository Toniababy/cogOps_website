export default function ProgramPage({ name = "[Program Name]" }) {
  return (
    <section className="py-24 bg-white dark:bg-[#0F1115] px-6 transition-colors duration-300">
      <div className="max-w-5xl mx-auto">
        <div className="bg-[#E5E7EB] dark:bg-[#1F2937] p-8 md:p-16 rounded-[2.5rem] border border-[#6B7280]/10 dark:border-white/5 shadow-2xl transition-colors duration-300">
        <h1 className="text-4xl md:text-5xl font-black mb-4 text-[#0F1115] dark:text-[#E5E7EB] tracking-tight leading-tight">
            {name}
          </h1>
          
          <p className="text-[#2563eb] font-bold mb-12 text-lg">
            This program is ideal for beginners or professionals looking to upskill.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12 border-t border-[#6B7280]/20 dark:border-white/10 pt-12">
            <div>
              <h3 className="text-sm font-black mb-6 text-[#0F1115] dark:text-[#E5E7EB] uppercase tracking-[0.2em]">
                What You’ll Learn
              </h3>
              <ul className="space-y-5 font-medium">
                <li className="flex items-start gap-3 text-[#6B7280] dark:text-[#E5E7EB]/80">
                  <span className="text-[#2563eb] mt-1">✦</span> 
                  <span>Core concepts and first principles</span>
                </li>
                <li className="flex items-start gap-3 text-[#6B7280] dark:text-[#E5E7EB]/80">
                  <span className="text-[#2563eb] mt-1">✦</span> 
                  <span>Practical industry-standard tools</span>
                </li>
                <li className="flex items-start gap-3 text-[#6B7280] dark:text-[#E5E7EB]/80">
                  <span className="text-[#2563eb] mt-1">✦</span> 
                  <span>End-to-end industry workflows</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-black mb-6 text-[#0F1115] dark:text-[#E5E7EB] uppercase tracking-[0.2em]">
                Program Outcomes
              </h3>
              <ul className="space-y-5 font-medium">
                <li className="flex items-start gap-3 text-[#6B7280] dark:text-[#E5E7EB]/80">
                  <span className="text-[#2563eb] mt-1">✓</span> 
                  <span>Apply your skills to real-world projects</span>
                </li>
                <li className="flex items-start gap-3 text-[#6B7280] dark:text-[#E5E7EB]/80">
                  <span className="text-[#2563eb] mt-1">✓</span> 
                  <span>Build a high-impact professional portfolio</span>
                </li>
                <li className="flex items-start gap-3 text-[#6B7280] dark:text-[#E5E7EB]/80">
                  <span className="text-[#2563eb] mt-1">✓</span> 
                  <span>Compete for global market opportunities</span>
                </li>
              </ul>
            </div>
          </div>
          
          <button className="mt-16 w-full py-5 bg-[#2563eb] text-white rounded-2xl font-black text-lg uppercase tracking-widest hover:bg-blue-700 hover:shadow-2xl hover:shadow-blue-500/30 transition-all active:scale-[0.98]">
            Enroll in This Program
          </button>
        </div>
      </div>
    </section>
  );
}