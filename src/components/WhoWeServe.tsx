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
    <section className="py-24 bg-slate-50 dark:bg-[#1F2937] px-6 transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-[#E5E7EB] mb-12 text-center md:text-left">Who CogOps Is For</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {targets.map((item, i) => (
            <div key={i} className="bg-white dark:bg-[#0F1115] p-10 rounded-3xl border border-slate-200 dark:border-[#E5E7EB]/10 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
              <h3 className="text-xl font-bold text-slate-900 dark:text-[#E5E7EB] mb-4">{item.title}</h3>
              <p className="text-slate-600 dark:text-[#6B7280] leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}