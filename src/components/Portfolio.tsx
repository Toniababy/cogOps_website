export default function Portfolio() {
  const cases = [
    { 
      id: "PRTCL-01",
      client: "Transiflow", 
      title: "Transiflow Logistics System", // Moved to main heading
      problem: "Fragmented Local Logistics", 
      solution: "Fleet & Park Synchronization System", 
      outcome: "Direct Station-to-Station Booking",
      desc: "A localized transit protocol enabling users to reserve specific seating and park locations. Digitizing the manual interstate travel model with flight-style booking logic.",
      isFeatured: true
    },

  ];

  return (
    <section id="portfolio" className="py-24 bg-white px-4 md:px-6 border-t border-[#F3F4F6]">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div className="max-w-2xl">
            <h2 className="text-[10px] font-black text-[#6B7280] uppercase tracking-[0.4em] mb-4">Portfolio Protocol</h2>
            <h3 className="text-5xl md:text-7xl font-black text-[#0F1115] uppercase tracking-tighter">Our Work<span className="text-[#6B7280]">.</span></h3>
          </div>
        </div>
        
        <div className="flex flex-col gap-10">
          {cases.map((c, i) => (
            <div 
              key={i} 
              className={`p-10 border-2 border-[#E5E7EB] rounded-[3rem] bg-white hover:border-[#0F1115] transition-all group flex flex-col justify-between 
              ${c.isFeatured ? 'min-h-[600px] border-[#0F1115]/20' : 'min-h-[450px]'}`}
            >
              <div>
                <div className="flex justify-between items-start mb-12">
                  <span className="px-4 py-1.5 bg-[#0F1115] text-white rounded-full text-[9px] font-black uppercase tracking-widest">{c.client}</span>
                  <span className="text-[10px] font-black text-[#9CA3AF] uppercase tracking-widest">{c.id}</span>
                </div>

                <h3 className={`${c.isFeatured ? 'text-4xl md:text-6xl' : 'text-3xl md:text-4xl'} font-black mb-8 text-[#0F1115] uppercase tracking-tighter leading-[0.9]`}>
                  {c.title}
                </h3>
                
                <p className="text-[#6B7280] text-[12px] font-bold uppercase leading-relaxed tracking-widest max-w-2xl">
                  {c.desc}
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 border-t border-[#F3F4F6] pt-10 mt-10">
                <div className="space-y-1">
                  <span className="text-[9px] uppercase font-black text-[#9CA3AF] tracking-[0.2em]">Diagnosis</span>
                  <p className="text-[#0F1115] font-bold text-[10px] uppercase">{c.problem}</p>
                </div>
                <div className="space-y-1">
                  <span className="text-[9px] uppercase font-black text-[#0F1115] tracking-[0.2em]">Protocol Resolution</span>
                  <p className={`${c.isFeatured ? 'text-2xl md:text-4xl' : 'text-xl'} font-black text-[#0F1115] uppercase tracking-tighter`}>{c.outcome}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}