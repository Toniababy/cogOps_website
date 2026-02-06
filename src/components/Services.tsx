import { ArrowUpRight, Zap, Palette, Globe, BarChart } from 'lucide-react';

export default function Services() {
  const agencyServices = [
    {
      title: "Product Development",
      icon: <Zap size={24} />,
      items: ["MVP development", "Product strategy", "Feature planning", "Testing & QA"],
      cta: "Hire CogOps"
    },
    {
      title: "Brand Strategy & Design",
      icon: <Palette size={24} />,
      items: ["Brand positioning", "Visual identity", "Messaging clarity", "Digital presence"],
      cta: "Book a Consultation"
    },
    {
      title: "Web & App Development",
      icon: <Globe size={24} />,
      items: ["Websites", "Web applications", "Mobile-ready platforms"],
      cta: "Start Your Project"
    },
    {
      title: "Growth & Digital Solutions",
      icon: <BarChart size={24} />,
      items: ["Operational systems", "Process automation", "Customer experience flows"],
      cta: "Get Started"
    }
  ];

  return (
    <section id="services" className="py-24 bg-white dark:bg-[#0F1115] px-6 transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <h2 className="text-4xl md:text-6xl font-black text-[#0F1115] dark:text-[#E5E7EB] mb-4 tracking-tight">
            Services Overview
          </h2>
          <p className="text-xl text-[#6B7280] italic font-medium">
            "We don’t just deliver projects. We solve problems."
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {agencyServices.map((service, i) => (
            <div 
              key={i} 
              className="bg-[#E5E7EB] dark:bg-[#1F2937] p-10 rounded-[2.5rem] border border-[#6B7280]/10 dark:border-white/5 shadow-lg hover:shadow-2xl hover:shadow-[#2563eb]/5 transition-all duration-500 group"
            >
              <div className="w-14 h-14 bg-white dark:bg-[#0F1115] rounded-2xl flex items-center justify-center shadow-sm mb-8 text-[#2563eb] transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3">
                {service.icon}
              </div>

              <h3 className="text-2xl font-black text-[#0F1115] dark:text-[#E5E7EB] mb-6 tracking-tight">
                {service.title}
              </h3>

              <ul className="space-y-4 mb-10">
                {service.items.map((item, idx) => (
                  <li key={idx} className="flex items-center text-[#6B7280] font-medium">
                    <span className="w-2 h-2 bg-[#2563eb] rounded-full mr-4 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>

              <button className="flex items-center font-black text-[#2563eb] text-sm uppercase tracking-widest group-hover:gap-4 transition-all duration-300">
                {service.cta} 
                <ArrowUpRight className="ml-2 w-5 h-5 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}