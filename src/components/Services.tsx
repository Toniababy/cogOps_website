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
      title: "Growth, Ops & Digital Solutions",
      icon: <BarChart size={24} />,
      items: ["Operational systems", "Process automation", "Customer experience flows"],
      cta: "Get Started"
    }
  ];

  return (
    <section id="services" className="py-24 bg-white dark:bg-[#0F1115] px-6 transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-[#E5E7EB] mb-4">Services Overview</h2>
          <p className="text-xl text-slate-600 dark:text-[#6B7280] italic">"We don’t just deliver projects. We solve problems."</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {agencyServices.map((service, i) => (
            <div key={i} className="bg-slate-50 dark:bg-[#1F2937] p-10 rounded-3xl border border-slate-200 dark:border-[#E5E7EB]/10 shadow-lg hover:shadow-blue-500/10 transition-all duration-300 group">
              <div className="w-12 h-12 bg-white dark:bg-[#0F1115] rounded-xl flex items-center justify-center shadow-sm mb-6 text-blue-600">
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-[#E5E7EB] mb-6">{service.title}</h3>
              <ul className="space-y-3 mb-8">
                {service.items.map((item, idx) => (
                  <li key={idx} className="flex items-center text-slate-600 dark:text-[#6B7280]">
                    <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-3" />
                    {item}
                  </li>
                ))}
              </ul>
              <button className="flex items-center font-bold text-blue-600 group-hover:gap-3 transition-all">
                {service.cta} <ArrowUpRight className="ml-2 w-4 h-4" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}