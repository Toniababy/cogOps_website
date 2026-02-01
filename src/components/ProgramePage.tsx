export default function ProgramPage({ name = "[Program Name]" }) {
  return (
    <section className="py-24 bg-white dark:bg-[#0F1115] px-6 transition-colors duration-300">
      <div className="max-w-5xl mx-auto">
        <div className="bg-slate-50 dark:bg-[#1F2937] p-10 rounded-3xl border border-slate-200 dark:border-[#E5E7EB]/10 shadow-lg transition-colors duration-300">
          <h1 className="text-4xl font-bold mb-4 text-slate-900 dark:text-white">{name}</h1>
          <p className="text-blue-600 dark:text-blue-400 font-semibold mb-8">This program is ideal for beginners or professionals looking to upskill.</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12">
            <div>
              <h3 className="text-xl font-bold mb-4 border-b border-slate-200 dark:border-slate-700 pb-2 text-slate-900 dark:text-white uppercase tracking-tight">What You’ll Learn</h3>
              <ul className="space-y-4 text-slate-600 dark:text-slate-400">
                <li className="flex gap-2"><span>•</span> Core concepts</li>
                <li className="flex gap-2"><span>•</span> Practical tools</li>
                <li className="flex gap-2"><span>•</span> Industry workflows</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4 border-b border-slate-200 dark:border-slate-700 pb-2 text-slate-900 dark:text-white uppercase tracking-tight">Program Outcomes</h3>
              <ul className="space-y-4 text-slate-600 dark:text-slate-400">
                <li className="flex gap-2"><span>•</span> Apply your skills to real projects</li>
                <li className="flex gap-2"><span>•</span> Build a portfolio</li>
                <li className="flex gap-2"><span>•</span> Compete for real opportunities</li>
              </ul>
            </div>
          </div>
          
          <button className="mt-12 w-full py-5 bg-blue-600 text-white rounded-2xl font-bold hover:bg-blue-700 hover:shadow-lg transition-all active:scale-[0.98]">
            Enroll in This Program
          </button>
        </div>
      </div>
    </section>
  );
}