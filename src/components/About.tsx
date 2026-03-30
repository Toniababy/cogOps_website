export default function About() {
  return (
    <section id="about" className="pt-32 pb-20 bg-white px-4 md:px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-24 items-start">

          <div className="space-y-12">
            <div>
              <h2 className="text-[10px] font-black text-[#6B7280] uppercase tracking-[0.4em] mb-4">Origin Protocol</h2>

              <h3 className="text-4xl md:text-6xl font-black leading-tight text-[#0F1115] uppercase tracking-tighter">
                Our <br/> Story<span className="text-[#6B7280]">.</span>
              </h3>
            </div>


            <p className="text-lg md:text-xl text-[#6B7280] font-medium leading-relaxed tracking-tight italic max-w-xl">
              "Too many ideas fail not because they’re bad, but because execution is broken."
            </p>

            <div className="space-y-10 pt-8 border-t border-[#F3F4F6]">
              <div className="group">
                <h4 className="font-black text-[#0F1115] mb-3 uppercase text-[10px] tracking-[0.3em] flex items-center gap-3">
                  <span className="w-6 h-[1.5px] bg-[#0F1115]" /> Mission
                </h4>

                <p className="text-xl md:text-2xl font-black text-[#0F1115] tracking-tighter leading-tight">
                  Building <span className="text-[#6B7280]">scalable</span> and future-ready solutions for the modern founder.
                </p>
              </div>

              <div className="group">
                <h4 className="font-black text-[#0F1115] mb-3 uppercase text-[10px] tracking-[0.3em] flex items-center gap-3">
                  <span className="w-6 h-[1.5px] bg-[#0F1115]" /> Vision
                </h4>
    
                <p className="text-xl md:text-2xl font-black text-[#0F1115] tracking-tighter leading-tight">
                  Powering the <span className="text-[#6B7280]">infrastructure</span> of next-generation digital products.
                </p>
              </div>
            </div>
          </div>

          <div className="sticky top-32 bg-[#0F1115] p-8 md:p-12 rounded-[2.5rem] shadow-2xl overflow-hidden">
            <div className="absolute -top-10 -right-10 opacity-5">
              <h1 className="text-[12rem] font-black text-white leading-none tracking-tighter">CO</h1>
            </div>
            
            <h3 className="text-2xl font-black mb-10 text-white tracking-tight relative z-10">
              The CogOps Model
            </h3>
            
            <div className="space-y-8 relative z-10">
              {[
                { title: "Agency Division", text: "Technology & Ops for high-growth businesses" },
                { title: "Academy Division", text: "Learning Institution for specialized professionals" }
              ].map((item, i) => (
                <div key={i} className="space-y-2">
                  <p className="text-[9px] font-black text-[#6B7280] uppercase tracking-[0.2em]">{item.title}</p>
                  <div className="flex gap-4 items-start">
                    <div className="w-1.5 h-1.5 rounded-full bg-white shrink-0 mt-2" />
                    <p className="font-bold text-white uppercase text-base md:text-lg tracking-tight leading-tight">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-16 p-6 bg-white/5 border border-white/10 rounded-[1.5rem] relative z-10">
              <p className="text-[#E5E7EB] text-base font-medium leading-snug italic">
                “Grounding every build in real-world application.”
              </p>
              <p className="mt-4 text-[9px] font-black text-white uppercase tracking-widest">— Technical Mandate</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}