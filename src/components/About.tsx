export default function About() {
  return (
    <section id="about" className="py-24 bg-slate-50 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
          
          {/* Left Side: Story & Vision */}
          <div>
            <h2 className="text-sm font-bold text-blue-600 uppercase tracking-[0.2em] mb-4">About CogOps</h2>
            <h3 className="text-3xl md:text-5xl font-bold text-slate-900 mb-8 leading-tight">Our Story</h3>
            <p className="text-xl text-slate-600 mb-6 leading-relaxed">
              CogOps was created to solve a simple problem: too many ideas fail not because they’re bad, but because execution is broken.
            </p>
            <p className="text-xl leading-relaxed font-medium text-slate-900">
              We exist to bridge the gap between ideas, execution, and growth — for both businesses and individuals.
            </p>
            
            <div className="mt-12 space-y-8">
              <div>
                <h4 className="text-xl font-bold text-slate-900 mb-2">Our Mission</h4>
                <p className="text-slate-600">To help founders, brands, and individuals build relevant, scalable, and future-ready solutions.</p>
              </div>
              <div>
                <h4 className="text-xl font-bold text-slate-900 mb-2">Our Vision</h4>
                <p className="text-slate-600">To become a trusted execution partner and learning institution powering the next generation of digital products and talent.</p>
              </div>
            </div>
          </div>

          {/* Right Side: The Model */}
          <div className="bg-white p-12 rounded-3xl border border-slate-200 shadow-sm">
            <h3 className="text-2xl font-bold text-slate-900 mb-8">The CogOps Model</h3>
            <p className="text-slate-600 mb-8">CogOps operates as:</p>
            
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="w-6 h-6 rounded-full bg-blue-600 shrink-0 mt-1" />
                <p className="text-lg font-medium text-slate-800">A technology and operations agency for businesses</p>
              </div>
              <div className="flex gap-4">
                <div className="w-6 h-6 rounded-full bg-slate-900 shrink-0 mt-1" />
                <p className="text-lg font-medium text-slate-800">A learning institution for aspiring and growing tech professionals</p>
              </div>
            </div>

            <div className="mt-10 p-6 bg-blue-50 rounded-2xl border border-blue-100">
              <p className="text-blue-800 italic">
                "This dual model ensures everything we build and teach is grounded in real-world application."
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}