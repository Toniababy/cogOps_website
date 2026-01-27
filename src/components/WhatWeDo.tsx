export default function WhatWeDo() {
  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-16">What We Do</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Agency Side */}
          <div className="p-1 rounded-3xl bg-linear-to-br from-blue-500 to-indigo-600">
            <div className="bg-white p-10 rounded-[22px] h-full">
              <h3 className="text-2xl font-bold text-blue-600 mb-4">Agency Services</h3>
              <p className="text-slate-700 text-lg">
                We partner with founders and brands to build products, platforms, and operational systems that work.
              </p>
            </div>
          </div>

          {/* Training Side */}
          <div className="p-1 rounded-3xl bg-linear-to-br from-slate-800 to-slate-900 text-white">
            <div className="bg-slate-900 p-10 rounded-[22px] h-full">
              <h3 className="text-2xl font-bold text-white mb-4">Tech Skill Training</h3>
              <p className="text-slate-300 text-lg">
                We train individuals through hands-on, mentor-supported programs designed around real industry needs.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}