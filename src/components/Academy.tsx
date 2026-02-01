import { Code, Layers, ShieldCheck, TrendingUp } from 'lucide-react';

export default function Academy() {
  const tracks = [
    { name: "Product & Technology", icon: <Layers className="w-5 h-5" /> },
    { name: "Development", icon: <Code className="w-5 h-5" /> },
    { name: "QA & Technical Support", icon: <ShieldCheck className="w-5 h-5" /> },
    { name: "Growth & Operations", icon: <TrendingUp className="w-5 h-5" /> },
  ];

  return (
    <section id="academy" className="py-24 bg-white dark:bg-[#0F1115] px-6 transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-slate-900 dark:text-white">CogOps Academy</h2>
            <p className="text-slate-600 dark:text-slate-400 text-lg mb-8 leading-relaxed">
              The CogOps Academy is designed for people who want practical, employable tech skills.
              <span className="block mt-4 text-slate-900 dark:text-white font-medium">No fluff. No theory-only learning. Just real-world training.</span>
            </p>
            <div className="space-y-4">
              <h4 className="text-sm font-bold uppercase tracking-widest text-blue-600 dark:text-blue-400 mb-6">Learning Tracks</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-slate-900 dark:text-white">
                {tracks.map((track, i) => (
                  <div key={i} className="flex items-center gap-3 p-4 bg-slate-50 dark:bg-[#1F2937] rounded-xl border border-slate-200 dark:border-[#E5E7EB]/10 transition-all hover:bg-slate-100 dark:hover:bg-[#27303F]">
                    {track.icon}
                    <span className="font-medium">{track.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-slate-800 p-10 rounded-3xl border border-slate-200 dark:border-slate-700 shadow-2xl">
            <h3 className="text-2xl font-bold mb-8 italic text-blue-600 dark:text-blue-400">How Learning Works</h3>
            <div className="space-y-8 text-slate-900 dark:text-white">
              {[
                { title: "Project-based learning", desc: "Build real things from day one." },
                { title: "Real-world scenarios", desc: "Solve problems industry pros face." },
                { title: "Mentor guidance", desc: "Get unstuck with expert support." },
                { title: "Portfolio-focused outcomes", desc: "Graduate with work that gets you hired." },
              ].map((step, i) => (
                <div key={i} className="flex gap-4">
                  <div className="text-blue-600 dark:text-blue-500 font-bold text-xl">0{i + 1}</div>
                  <div>
                    <h5 className="font-bold">{step.title}</h5>
                    <p className="text-slate-500 dark:text-slate-400 text-sm">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-10 flex flex-col xs:flex-row gap-4 w-full">
              <button className="flex-1 py-4 bg-blue-600 text-white rounded-xl font-bold hover:bg-blue-700 transition-all text-center">
                Enroll Now
              </button>
              <button className="flex-1 py-4 bg-white dark:bg-[#1F2937] border border-slate-200 dark:border-[#E5E7EB]/10 text-slate-900 dark:text-[#E5E7EB] rounded-xl font-bold hover:bg-slate-50 dark:hover:bg-white dark:hover:text-[#0F1115] transition-all text-center">
                View Programs
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}