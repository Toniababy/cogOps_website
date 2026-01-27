import { BookOpen, Code, Layers, ShieldCheck, TrendingUp } from 'lucide-react';

export default function Academy() {
  const tracks = [
    { name: "Product & Technology", icon: <Layers className="w-5 h-5" /> },
    // { name: "Design & UX", icon: <Palette className="w-5 h-5" /> },
    { name: "Development", icon: <Code className="w-5 h-5" /> },
    { name: "QA & Technical Support", icon: <ShieldCheck className="w-5 h-5" /> },
    { name: "Growth & Operations", icon: <TrendingUp className="w-5 h-5" /> },
  ];

  return (
    <section id="academy" className="py-24 bg-slate-900 text-white px-6 rounded-t-[3rem]">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">CogOps Academy</h2>
            <p className="text-slate-400 text-lg mb-8 leading-relaxed">
              The CogOps Academy is designed for people who want practical, employable tech skills. 
              <span className="block mt-4 text-white font-medium">No fluff. No theory-only learning. Just real-world training.</span>
            </p>
            
            <div className="space-y-4">
              <h4 className="text-sm font-bold uppercase tracking-widest text-blue-400 mb-6">Learning Tracks</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {tracks.map((track, i) => (
                  <div key={i} className="flex items-center gap-3 p-4 bg-slate-800/50 rounded-xl border border-slate-700">
                    {track.icon}
                    <span className="font-medium">{track.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="bg-slate-800 p-10 rounded-3xl border border-slate-700">
            <h3 className="text-2xl font-bold mb-8 italic text-blue-400 font-serif">How Learning Works</h3>
            <div className="space-y-8">
              {[
                { title: "Project-based learning", desc: "Build real things from day one." },
                { title: "Real-world scenarios", desc: "Solve problems industry pros face." },
                { title: "Mentor guidance", desc: "Get unstuck with expert support." },
                { title: "Portfolio-focused outcomes", desc: "Graduate with work that gets you hired." },
              ].map((step, i) => (
                <div key={i} className="flex gap-4">
                  <div className="text-blue-500 font-bold text-xl">0{i+1}</div>
                  <div>
                    <h5 className="font-bold">{step.title}</h5>
                    <p className="text-slate-400 text-sm">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-10 flex gap-4">
              <button className="flex-1 py-4 bg-blue-600 rounded-xl font-bold hover:bg-blue-700 transition-all">Enroll Now</button>
              <button className="flex-1 py-4 bg-transparent border border-slate-600 rounded-xl font-bold hover:bg-slate-700 transition-all">View Programs</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}