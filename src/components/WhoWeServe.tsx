export default function WhoWeServe() {
  const targets = [
    {
      title: "Founders & Product Owners",
      desc: "You have an idea or product. We help you design, build, launch, and scale it."
    },
    {
      title: "Brand Owners",
      desc: "You want clarity, structure, and digital systems that actually convert."
    },
    {
      title: "Aspiring Tech Professionals",
      desc: "You want practical tech skills that prepare you for real work, not just theory."
    }
  ];

  return (
    <section className="py-24 bg-slate-50 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-12">Who CogOps Is For</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {targets.map((item, i) => (
            <div key={i} className="bg-white p-10 rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300">
              <h3 className="text-xl font-bold text-slate-900 mb-4">{item.title}</h3>
              <p className="text-slate-600 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}