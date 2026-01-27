export default function ProgramPage({ name = "[Program Name]" }) {
  return (
    <section className="py-24 bg-white px-6 border-t border-slate-100">
      <div className="max-w-5xl mx-auto">
        <div className="bg-slate-900 rounded-3xl p-12 text-white">
          <h1 className="text-4xl font-bold mb-4">{name}</h1>
          <p className="text-blue-400 font-semibold mb-8">This program is ideal for beginners or professionals looking to upskill.</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12">
            <div>
              <h3 className="text-xl font-bold mb-4 border-b border-slate-700 pb-2">What You’ll Learn</h3>
              <ul className="space-y-3 text-slate-400">
                <li>• Core concepts</li>
                <li>• Practical tools</li>
                <li>• Industry workflows</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4 border-b border-slate-700 pb-2">Program Outcomes</h3>
              <ul className="space-y-3 text-slate-400">
                <li>• Apply your skills to real projects</li>
                <li>• Build a portfolio</li>
                <li>• Compete for real opportunities</li>
              </ul>
            </div>
          </div>
          
          <button className="mt-12 w-full py-4 bg-blue-600 rounded-xl font-bold hover:bg-blue-700 transition-all">
            Enroll in This Program
          </button>
        </div>
      </div>
    </section>
  );
}