import { ArrowRight } from 'lucide-react';

export default function HowItWorks() {
  const clientSteps = ["Discover", "Build", "Launch", "Optimize"];
  const learnerSteps = ["Learn", "Practice", "Deploy", "Grow"];

  return (
    <section className="py-24 bg-white dark:bg-[#0F1115] px-6 transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-black text-[#0F1115] dark:text-[#E5E7EB] mb-16 tracking-tight">
          How CogOps Works
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <h3 className="text-xl font-bold text-[#2563eb] mb-8 uppercase tracking-widest text-sm">For Clients</h3>
            <div className="flex flex-wrap items-center gap-4">
              {clientSteps.map((step, i) => (
                <div key={i} className="flex items-center gap-4">
                  <div className="px-6 py-3 bg-[#E5E7EB] dark:bg-[#1F2937] text-[#0F1115] dark:text-[#E5E7EB] rounded-xl font-bold border border-[#6B7280]/10 dark:border-white/5 transition-all hover:-translate-y-1">
                    {step}
                  </div>
                  {i < clientSteps.length - 1 && (
                    <ArrowRight className="text-[#6B7280] w-5 h-5 hidden sm:block opacity-50" />
                  )}
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold text-[#0F1115] dark:text-[#E5E7EB] mb-8 uppercase tracking-widest text-sm">For Learners</h3>
            <div className="flex flex-wrap items-center gap-4">
              {learnerSteps.map((step, i) => (
                <div key={i} className="flex items-center gap-4">
                  <div className="px-6 py-3 bg-[#E5E7EB] dark:bg-[#1F2937] text-[#0F1115] dark:text-[#E5E7EB] rounded-xl font-bold border border-[#6B7280]/10 dark:border-white/5 transition-all hover:-translate-y-1">
                    {step}
                  </div>
                  {i < learnerSteps.length - 1 && (
                    <ArrowRight className="text-[#6B7280] w-5 h-5 hidden sm:block opacity-50" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-24 bg-[#2563eb] rounded-[2rem] md:rounded-[3rem] p-8 md:p-12 text-center text-white shadow-2xl shadow-blue-500/20">
          <h2 className="text-3xl md:text-4xl font-black mb-4">Ready to build or grow?</h2>
          <p className="text-blue-100 mb-10 max-w-xl mx-auto">Whether you're looking for an execution partner or a place to master your craft, we're ready for you.</p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full max-w-2xl mx-auto">
            <button className="w-full sm:w-auto px-8 py-4 bg-[#0F1115] text-white dark:bg-white dark:text-[#0F1115] font-black rounded-full hover:scale-105 transition-all shadow-xl text-center sm:whitespace-nowrap">
              Book a Consultation
            </button>
            <button className="w-full sm:w-auto px-8 py-4 bg-blue-700 text-white font-black rounded-full border border-blue-400/50 hover:bg-blue-800 transition-all shadow-xl text-center sm:whitespace-nowrap">
              Join the CogOps Academy
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}