import { ArrowUpRight, Zap, Palette, Globe, BarChart } from 'lucide-react';
import Link from 'next/link';

export default function Services() {
  const agencyServices = [
    {
      id: "01",
      title: "Product Development",
      icon: <Zap size={22} />,
      items: ["MVP development", "Product strategy", "Feature planning", "Testing & QA"],
      cta: "Initiate Build",
      href: "/hire"
    },
    {
      id: "02",
      title: "Brand Strategy & Design",
      icon: <Palette size={22} />,
      items: ["Brand positioning", "Visual identity", "Messaging clarity", "Digital presence"],
      cta: "Request Strategy",
      href: "/hire"
    },
    {
      id: "03",
      title: "Web & App Development",
      icon: <Globe size={22} />,
      items: ["Custom Websites", "Web applications", "Mobile-ready platforms"],
      cta: "Start Engineering",
      href: "/hire"
    },
    {
      id: "04",
      title: "Growth & Digital Solutions",
      icon: <BarChart size={22} />,
      items: ["Operational systems", "Process automation", "Customer experience flows"],
      cta: "Optimize Ops",
      href: "/hire"
    }
  ];

  return (
    <section id="services" className="pt-44 pb-32 bg-white px-4 md:px-6">
      <div className="max-w-7xl mx-auto">

        <div className="mb-24">
          <h2 className="text-[10px] font-black text-[#6B7280] uppercase tracking-[0.4em] mb-4">Technical Capabilities</h2>
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
            <h3 className="text-5xl md:text-8xl font-black text-[#0F1115] uppercase tracking-tighter leading-[0.85]">
              Agency <br/> Services<span className="text-[#6B7280]">.</span>
            </h3>
            <p className="text-xl text-[#6B7280] font-bold uppercase tracking-tight max-w-sm leading-tight italic">
              "We don’t just deliver projects. <br/> We solve architectural problems."
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {agencyServices.map((service, i) => (
            <div 
              key={i} 
              className="group bg-[#F3F4F6] p-10 md:p-14 rounded-[3rem] border-2 border-transparent hover:border-[#0F1115] hover:bg-white transition-all duration-500 flex flex-col justify-between min-h-[500px]"
            >
              <div>
                <div className="flex justify-between items-start mb-12">
                  <div className="w-14 h-14 bg-[#0F1115] text-white rounded-2xl flex items-center justify-center transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6">
                    {service.icon}
                  </div>
                  <span className="text-[10px] font-black text-[#9CA3AF] uppercase tracking-[0.3em]">Module // {service.id}</span>
                </div>

                <h3 className="text-3xl md:text-4xl font-black text-[#0F1115] mb-8 uppercase tracking-tighter leading-none">
                  {service.title}
                </h3>

                <ul className="space-y-4 mb-12">
                  {service.items.map((item, idx) => (
                    <li key={idx} className="flex items-center text-[#6B7280] font-bold uppercase text-[11px] tracking-widest">
                      <span className="w-4 h-[1px] bg-[#D1D5DB] mr-4 transition-all group-hover:w-8 group-hover:bg-[#0F1115]" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <Link 
                href={service.href}
                className="inline-flex items-center font-black text-[#0F1115] text-[10px] uppercase tracking-[0.2em] group-hover:gap-4 transition-all"
              >
                <span className="border-b-2 border-[#0F1115] pb-1">{service.cta}</span>
                <ArrowUpRight className="ml-2 w-5 h-5 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}