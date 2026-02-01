import { ArrowRight } from 'lucide-react';

export default function HowItWorks() {
  const clientSteps = ["Discover", "Build", "Launch", "Optimize"];
  const learnerSteps = ["Learn", "Practice", "Deploy", "Grow"];

  return (
    <section className="py-24 bg-white dark:bg-[#0F1115] px-6 border-t border-slate-200 dark:border-[#1F2937] transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-[#E5E7EB] mb-16">How CogOps Works</h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Clients */}
          <div>
            <h3 className="text-xl font-bold text-blue-600 mb-8 uppercase tracking-wider">For Clients</h3>
            <div className="flex flex-wrap items-center gap-4">
              {clientSteps.map((step, i) => (
                <div key={i} className="flex items-center gap-4">
                  <div className="px-6 py-3 bg-slate-50 dark:bg-[#1F2937] text-slate-900 dark:text-[#E5E7EB] rounded-xl font-medium border border-slate-200 dark:border-[#E5E7EB]/10 transition-all hover:-translate-y-1">
                    {step}
                  </div>
                  {i < clientSteps.length - 1 && <ArrowRight className="text-slate-400 dark:text-[#6B7280] w-5 h-5 hidden sm:block" />}
                </div>
              ))}
            </div>
          </div>

          {/* Learners */}
          <div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-[#E5E7EB] mb-8 uppercase tracking-wider">For Learners</h3>
            <div className="flex flex-wrap items-center gap-4">
              {learnerSteps.map((step, i) => (
                <div key={i} className="flex items-center gap-4">
                  <div className="px-6 py-3 bg-slate-50 dark:bg-[#1F2937] text-slate-900 dark:text-[#E5E7EB] rounded-xl font-medium border border-slate-200 dark:border-[#E5E7EB]/10 transition-all hover:-translate-y-1">
                    {step}
                  </div>
                  {i < learnerSteps.length - 1 && <ArrowRight className="text-slate-400 dark:text-[#6B7280] w-5 h-5 hidden sm:block" />}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-24 bg-blue-600 rounded-3xl p-12 text-center text-white shadow-xl shadow-blue-500/20">
          <h2 className="text-3xl font-bold mb-4">Ready to build or grow?</h2>

          <div className="mt-20 flex flex-col sm:flex-row items-center justify-center gap-6 w-full max-w-4xl mx-auto px-4">
            <button className="w-full sm:w-auto min-w-[240px] px-6 py-4 bg-[#0F1115] dark:bg-white text-blue-600 dark:text-slate-900 font-black rounded-full hover:scale-105 transition-all shadow-xl whitespace-nowrap text-center">
              Book a Consultation
            </button>
            <button className="w-full sm:w-auto min-w-[240px] px-6 py-4 bg-blue-700 text-white font-black rounded-full border border-blue-500 hover:bg-blue-800 transition-all shadow-xl whitespace-nowrap text-center">
              Join the CogOps Academy
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}