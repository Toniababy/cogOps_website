export default function Insights() {
  const posts = [
    { title: "Founder Insights", desc: "How to move from idea to execution." },
    { title: "Product Thinking", desc: "Building scalable digital products." },
    { title: "Tech Learning", desc: "Resources for the modern professional." }
  ];

  return (
    <section id="insights" className="py-24 bg-[#E5E7EB] dark:bg-[#1F2937] px-6 border-t border-[#6B7280]/10 dark:border-white/5 transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-black text-[#0F1115] dark:text-[#E5E7EB] mb-12 tracking-tight">
          Insights
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {posts.map((post, i) => (
            <div 
              key={i} 
              className="p-8 bg-white dark:bg-[#0F1115] rounded-3xl border border-[#6B7280]/10 dark:border-white/5 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 group"
            >
              <h3 className="text-xl font-bold mb-3 text-[#0F1115] dark:text-[#E5E7EB] group-hover:text-[#2563eb] transition-colors">
                {post.title}
              </h3>
              
              <p className="text-[#6B7280] mb-6 leading-relaxed">
                {post.desc}
              </p>
              
              <button className="text-[#2563eb] font-bold text-sm uppercase tracking-wider flex items-center gap-2 hover:gap-3 transition-all">
                Read More <span>→</span>
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}