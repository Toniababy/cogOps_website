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
    <section className="py-24 bg-[#E5E7EB] dark:bg-[#1F2937] px-6 transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-black text-[#0F1115] dark:text-[#E5E7EB] mb-16 tracking-tight text-center md:text-left">
          Who CogOps Is For
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {targets.map((item, i) => (
            <div 
              key={i} 
              className="bg-white dark:bg-[#0F1115] p-10 rounded-[2.5rem] border border-[#6B7280]/10 dark:border-white/5 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 group"
            >
              <h3 className="text-2xl font-bold text-[#0F1115] dark:text-[#E5E7EB] mb-4 group-hover:text-[#2563eb] transition-colors">
                {item.title}
              </h3>
              <p className="text-[#6B7280] text-lg leading-relaxed font-medium">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}