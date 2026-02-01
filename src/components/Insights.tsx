export default function Insights() {
  const posts = [
    { title: "Founder Insights", desc: "How to move from idea to execution." },
    { title: "Product Thinking", desc: "Building scalable digital products." },
    { title: "Tech Learning", desc: "Resources for the modern professional." }
  ];

  return (
    <section id="insights" className="py-24 bg-slate-50 dark:bg-[#1F2937] px-6 border-t border-slate-200 dark:border-[#1F2937] transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-slate-900 dark:text-[#E5E7EB] mb-12">Insights</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {posts.map((post, i) => (
            <div key={i} className="p-8 bg-white dark:bg-[#0F1115] rounded-2xl border border-slate-200 dark:border-[#1F2937] shadow-sm hover:shadow-xl transition-all duration-300">
              <h3 className="text-xl font-bold mb-3 text-slate-900 dark:text-[#E5E7EB]">{post.title}</h3>
              <p className="text-slate-600 dark:text-[#6B7280] mb-4">{post.desc}</p>
              <button className="text-blue-600 font-semibold hover:text-blue-700 transition-colors">
                Read More →
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}