import { Mail, Github, Twitter, Linkedin, Calendar } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-white px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Left Side: Info */}
          <div>
            <h2 className="text-sm font-bold text-blue-600 uppercase tracking-widest mb-4">Get in Touch</h2>
            <h3 className="text-4xl font-bold text-slate-900 mb-6">Have a project, idea, or question? Let’s talk.</h3>
            
            <div className="space-y-8 mt-12">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center text-blue-600">
                  <Mail size={20} />
                </div>
                <div>
                  <p className="text-sm text-slate-500">Email us at</p>
                  <p className="font-bold text-slate-900">hello@cogops.com</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center text-blue-600">
                  <Calendar size={20} />
                </div>
                <div>
                  <p className="text-sm text-slate-500">Fast track</p>
                  <button className="font-bold text-blue-600 hover:underline">Book a consultation</button>
                </div>
              </div>
            </div>

            <div className="mt-12 flex gap-6">
              <Twitter className="text-slate-400 hover:text-blue-400 cursor-pointer transition-colors" />
              <Linkedin className="text-slate-400 hover:text-blue-700 cursor-pointer transition-colors" />
              <Github className="text-slate-400 hover:text-slate-900 cursor-pointer transition-colors" />
            </div>
          </div>

          <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100">
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input type="text" placeholder="Your Name" className="w-full p-4 rounded-xl border border-slate-200 outline-none focus:ring-2 focus:ring-blue-600" />
                <input type="email" placeholder="Your Email" className="w-full p-4 rounded-xl border border-slate-200 outline-none focus:ring-2 focus:ring-blue-600" />
              </div>
              <textarea placeholder="Tell us about your project or question..." rows={5} className="w-full p-4 rounded-xl border border-slate-200 outline-none focus:ring-2 focus:ring-blue-600"></textarea>
              <button className="w-full py-4 bg-slate-900 text-white font-bold rounded-xl hover:bg-slate-800 transition-all">
                Send Message
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}