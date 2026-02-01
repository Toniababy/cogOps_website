export default function WhatWeDo() {
  return (
    <section className="py-24 px-6 bg-white dark:bg-[#0F1115] transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-[#E5E7EB] mb-16">What We Do</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

          {/* Agency Side */}
          <div className="p-[2px] rounded-3xl bg-gradient-to-br from-blue-500 to-indigo-600">
            <div className="bg-white dark:bg-[#1F2937] p-10 rounded-[22px] shadow-lg h-full transition-colors duration-300">
              <h3 className="text-2xl font-bold text-blue-600 mb-4">Agency Services</h3>
              <p className="text-slate-600 dark:text-[#E5E7EB] text-lg leading-relaxed">
                We partner with founders and brands to build products, platforms, and operational systems that work.
              </p>
            </div>
          </div>

          {/* Training Side */}
          <div className="p-[2px] rounded-3xl bg-gradient-to-br from-slate-400 to-slate-600 dark:from-slate-700 dark:to-slate-900">
            <div className="bg-white dark:bg-[#1F2937] p-10 rounded-[22px] shadow-lg h-full transition-colors duration-300">
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Tech Skill Training</h3>
              <p className="text-slate-600 dark:text-[#6B7280] text-lg leading-relaxed">
                We train individuals through hands-on, mentor-supported programs designed around real industry needs.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}