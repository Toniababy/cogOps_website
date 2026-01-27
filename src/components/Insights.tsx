export default function Insights() {
  const posts = [
    { title: "Founder Insights", desc: "How to move from idea to execution." },
    { title: "Product Thinking", desc: "Building scalable digital products." },
    { title: "Tech Learning", desc: "Resources for the modern professional." }
  ];

  return (
    <section className="py-24 bg-slate-50 px-6 border-t border-slate-200">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-12">Insights</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {posts.map((post, i) => (
            <div key={i} className="p-8 bg-white rounded-2xl border border-slate-100 shadow-sm">
              <h3 className="text-xl font-bold mb-3">{post.title}</h3>
              <p className="text-slate-600 mb-4">{post.desc}</p>
              <button className="text-blue-600 font-semibold hover:underline">Read More →</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}