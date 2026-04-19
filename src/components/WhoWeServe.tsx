export default function WhoWeServe() {
  const targets = [
    { id: "01", title: "Founders", desc: "You have the vision. We provide the design, engineering, and scale." },
    { id: "02", title: "Brands", desc: "You want clarity and digital systems that actually convert users." },
    { id: "03", title: "Builders", desc: "You want practical tech skills for real work, not just theory." }
  ];

  return (
    <section className="py-32 bg-[#F3F4F6] px-4 md:px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-[10px] font-black text-[#6B7280] uppercase tracking-[0.4em] mb-4">Target Verticals</h2>
        <h3 className="text-5xl md:text-7xl font-black text-[#0F1115] mb-20 uppercase tracking-tighter">Who We Serve<span className="text-[#6B7280]">.</span></h3>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {targets.map((item, i) => (
            <div key={i} className="bg-white p-10 rounded-[2.5rem] border-2 border-transparent hover:border-[#0F1115] transition-all group shadow-sm">
              <span className="text-[10px] font-black text-[#6B7280] uppercase tracking-widest block mb-10">Profile // {item.id}</span>
              <h3 className="text-3xl font-black text-[#0F1115] mb-6 uppercase tracking-tight">
                {item.title}
              </h3>
              <p className="text-[#6B7280] text-sm font-bold uppercase leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}






