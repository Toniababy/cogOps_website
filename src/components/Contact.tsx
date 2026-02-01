import { Mail, Github, Twitter, Linkedin, Calendar } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-white dark:bg-[#0F1115] px-6 transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div className="text-slate-900 dark:text-[#E5E7EB]">
            <h2 className="text-sm font-bold text-blue-600 uppercase tracking-widest mb-4">Get in Touch</h2>
            <h3 className="text-4xl font-bold mb-6">Have a project, idea, or question? Let’s talk.</h3>
            <div className="space-y-8 mt-12">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center text-blue-600">
                  <Mail size={20} />
                </div>
                <div>
                  <p className="text-sm text-slate-500">Email us at</p>
                  <p className="font-bold">hello@cogops.com</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center text-blue-600">
                  <Calendar size={20} />
                </div>
                <div>
                  <p className="text-sm text-slate-500">Fast track</p>
                  <button className="font-bold text-blue-600 hover:underline">Book a consultation</button>
                </div>
              </div>
            </div>
            <div className="mt-12 flex gap-6 text-slate-500 dark:text-slate-400">
              <Twitter className="hover:text-blue-400 cursor-pointer transition-colors" />
              <Linkedin className="hover:text-blue-700 cursor-pointer transition-colors" />
              <Github className="hover:text-slate-900 dark:hover:text-white cursor-pointer transition-colors" />
            </div>
          </div>

          <div className="bg-slate-50 dark:bg-[#1F2937] p-10 rounded-3xl border border-slate-200 dark:border-[#E5E7EB]/10 shadow-lg">
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input type="text" placeholder="Your Name" className="w-full p-4 rounded-xl bg-white dark:bg-[#0F1115] border border-slate-200 dark:border-[#1F2937] text-slate-900 dark:text-white outline-none focus:ring-2 focus:ring-blue-600" />
                <input type="email" placeholder="Your Email" className="w-full p-4 rounded-xl bg-white dark:bg-[#0F1115] border border-slate-200 dark:border-[#1F2937] text-slate-900 dark:text-white outline-none focus:ring-2 focus:ring-blue-600" />
              </div>
              <textarea placeholder="Tell us about your project or question..." rows={5} className="w-full p-4 rounded-xl bg-white dark:bg-[#0F1115] border border-slate-200 dark:border-[#1F2937] text-slate-900 dark:text-white outline-none focus:ring-2 focus:ring-blue-600"></textarea>
              <button className="w-full py-4 bg-slate-900 dark:bg-blue-600 text-white font-bold rounded-xl transition-all hover:bg-blue-700">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}