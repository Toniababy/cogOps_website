import { ArrowUpRight, Zap, Palette, Globe, BarChart } from 'lucide-react';

export default function Services() {
  const agencyServices = [
    {
      title: "Product Development",
      icon: <Zap className="text-blue-600" />,
      items: ["MVP development", "Product strategy", "Feature planning", "Testing & QA"],
      cta: "Hire CogOps"
    },
    {
      title: "Brand Strategy & Design",
      icon: <Palette className="text-blue-600" />,
      items: ["Brand positioning", "Visual identity", "Messaging clarity", "Digital presence"],
      cta: "Book a Consultation"
    },
    {
      title: "Web & App Development",
      icon: <Globe className="text-blue-600" />,
      items: ["Websites", "Web applications", "Mobile-ready platforms"],
      cta: "Start Your Project"
    },
    {
      title: "Growth, Ops & Digital Solutions",
      icon: <BarChart className="text-blue-600" />,
      items: ["Operational systems", "Process automation", "Customer experience flows"],
      cta: "Get Started"
    }
  ];

  return (
    <section id="services" className="py-24 bg-white px-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-4">Services Overview</h2>
          <p className="text-xl text-slate-600 italic">"We don’t just deliver projects. We solve problems."</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {agencyServices.map((service, i) => (
            <div key={i} className="p-8 rounded-3xl border border-slate-100 bg-slate-50/50 hover:bg-white hover:shadow-xl transition-all duration-300">
              <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-sm mb-6">
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-6">{service.title}</h3>
              <ul className="space-y-3 mb-8">
                {service.items.map((item, idx) => (
                  <li key={idx} className="flex items-center text-slate-600">
                    <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-3" />
                    {item}
                  </li>
                ))}
              </ul>
              <button className="flex items-center font-bold text-blue-600 hover:gap-2 transition-all">
                {service.cta} <ArrowUpRight className="ml-2 w-4 h-4" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}