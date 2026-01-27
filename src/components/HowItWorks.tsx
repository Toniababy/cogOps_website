import { ArrowRight } from 'lucide-react';

export default function HowItWorks() {
  const clientSteps = ["Discover", "Build", "Launch", "Optimize"];
  const learnerSteps = ["Learn", "Practice", "Deploy", "Grow"];

  return (
    <section className="py-24 bg-white px-6 border-t border-slate-100">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-16">How CogOps Works</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* For Clients */}
          <div>
            <h3 className="text-xl font-bold text-blue-600 mb-8 uppercase tracking-wider">For Clients</h3>
            <div className="flex flex-wrap items-center gap-4">
              {clientSteps.map((step, i) => (
                <div key={i} className="flex items-center gap-4">
                  <div className="px-6 py-3 bg-slate-50 border border-slate-200 rounded-xl font-medium text-slate-700">
                    {step}
                  </div>
                  {i < clientSteps.length - 1 && <ArrowRight className="text-slate-300 w-5 h-5 hidden sm:block" />}
                </div>
              ))}
            </div>
          </div>

          {/* For Learners */}
          <div>
            <h3 className="text-xl font-bold text-slate-900 mb-8 uppercase tracking-wider">For Learners</h3>
            <div className="flex flex-wrap items-center gap-4">
              {learnerSteps.map((step, i) => (
                <div key={i} className="flex items-center gap-4">
                  <div className="px-6 py-3 bg-slate-900 border border-slate-800 rounded-xl font-medium text-white text-opacity-90">
                    {step}
                  </div>
                  {i < learnerSteps.length - 1 && <ArrowRight className="text-slate-300 w-5 h-5 hidden sm:block" />}
                </div>
              ))}
            </div>
          </div>
        </div>

     
        <div className="mt-24 bg-blue-600 rounded-3xl p-12 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Ready to build or grow?</h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <button className="px-8 py-4 bg-white text-blue-600 font-bold rounded-full hover:bg-slate-100 transition-all">
              Book a Consultation
            </button>
            <button className="px-8 py-4 bg-blue-700 text-white font-bold rounded-full border border-blue-500 hover:bg-blue-800 transition-all">
              Join the CogOps Academy
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}