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
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-[#0F1115] dark:text-[#E5E7EB]">CogOps Academy</h2>
            <p className="text-[#6B7280] text-lg mb-8 leading-relaxed">
              The CogOps Academy is designed for people who want practical, employable tech skills.
              <span className="block mt-4 text-[#0F1115] dark:text-[#E5E7EB] font-medium">No fluff. No theory-only learning. Just real-world training.</span>
            </p>
            
            <div className="space-y-4">
              <h4 className="text-sm font-bold uppercase tracking-widest text-[#2563eb] mb-6">Learning Tracks</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-[#0F1115] dark:text-[#E5E7EB]">
                {tracks.map((track, i) => (
                  <div key={i} className="flex items-center gap-3 p-4 bg-[#E5E7EB] dark:bg-[#1F2937] rounded-xl border border-[#6B7280]/10 dark:border-white/5 transition-all hover:bg-white dark:hover:bg-[#2563eb]/10 group">
                    <div className="text-[#2563eb]">
                       {track.icon}
                    </div>
                    <span className="font-medium">{track.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="bg-[#E5E7EB] dark:bg-[#1F2937] p-10 rounded-3xl border border-[#6B7280]/10 dark:border-white/5 shadow-2xl">
            <h3 className="text-2xl font-bold mb-8 italic text-[#2563eb]">How Learning Works</h3>
            <div className="space-y-8 text-[#0F1115] dark:text-[#E5E7EB]">
              {[
                { title: "Project-based learning", desc: "Build real things from day one." },
                { title: "Real-world scenarios", desc: "Solve problems industry pros face." },
                { title: "Mentor guidance", desc: "Get unstuck with expert support." },
                { title: "Portfolio-focused outcomes", desc: "Graduate with work that gets you hired." },
              ].map((step, i) => (
                <div key={i} className="flex gap-4">
                  <div className="text-[#2563eb] font-bold text-xl">0{i + 1}</div>
                  <div>
                    <h5 className="font-bold">{step.title}</h5>
                    <p className="text-[#6B7280] text-sm">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-10 flex flex-col sm:flex-row gap-4 w-full">
              <button className="flex-1 py-4 bg-[#2563eb] text-white rounded-xl font-bold hover:bg-blue-700 transition-all text-center">
                Enroll Now
              </button>
              <button className="flex-1 py-4 bg-white dark:bg-[#0F1115] border border-[#6B7280]/20 dark:border-white/10 text-[#0F1115] dark:text-[#E5E7EB] rounded-xl font-bold hover:bg-[#E5E7EB] dark:hover:bg-white dark:hover:text-[#0F1115] transition-all text-center">
                View Programs
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}