export default function Insights() {
  const posts = [
    { title: "Founder Insights", category: "Execution", desc: "Moving from conceptual idea to hardware execution." },
    { title: "Product Thinking", category: "Systems", desc: "Building scalable digital products with zero technical debt." },
    { title: "Tech Learning", category: "Talent", desc: "Strategic resources for the modern technical professional." }
  ];

  return (
    <section id="insights" className="py-32 bg-white px-4 md:px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-[10px] font-black text-[#6B7280] uppercase tracking-[0.4em] mb-4">Intelligence Feed</h2>
        <h3 className="text-5xl md:text-7xl font-black text-[#0F1115] mb-20 uppercase tracking-tighter">Insights<span className="text-[#6B7280]">.</span></h3>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {posts.map((post, i) => (
            <div key={i} className="group cursor-pointer">

              <div className="mb-6 overflow-hidden rounded-2xl bg-[#0F1115] aspect-video flex flex-col items-center justify-center border border-[#E5E7EB] relative">
                <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '20px 20px' }} />
                
                <div className="relative z-10 flex flex-col items-center gap-2">
                   <div className="w-8 h-[1px] bg-[#6B7280] animate-pulse" />
                   <span className="text-[9px] font-black uppercase tracking-[0.3em] text-[#6B7280]">
                     Protocol_Preview_0{i+1}
                   </span>
                   <span className="text-[8px] font-medium text-white/30 uppercase tracking-widest">
                     [ DATA ENCRYPTED ]
                   </span>
                </div>
              </div>

              <span className="text-[10px] font-black text-[#6B7280] uppercase tracking-widest">{post.category}</span>
              <h4 className="text-2xl font-black mt-2 mb-4 text-[#0F1115] uppercase tracking-tight group-hover:underline decoration-2 underline-offset-4">
                {post.title}
              </h4>
              <p className="text-[#6B7280] mb-6 text-sm font-bold leading-relaxed uppercase">
                {post.desc}
              </p>
              <button className="text-[10px] font-black uppercase tracking-widest flex items-center gap-2 group-hover:gap-4 transition-all">
                Read Protocol <span>→</span>
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}