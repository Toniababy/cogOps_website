import { Mail, Github, Twitter, Linkedin, Calendar } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-white dark:bg-[#0F1115] px-6 transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div className="text-[#0F1115] dark:text-[#E5E7EB]">
            <h2 className="text-sm font-bold text-[#2563eb] uppercase tracking-widest mb-4">Get in Touch</h2>
            <h3 className="text-4xl font-bold mb-6 leading-tight">Have a project, idea, or question? Let’s talk.</h3>
            
            <div className="space-y-8 mt-12">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-blue-100 dark:bg-[#2563eb]/20 rounded-full flex items-center justify-center text-[#2563eb]">
                  <Mail size={20} />
                </div>
                <div>
                  <p className="text-sm text-[#6B7280]">Email us at</p>
                  <p className="font-bold">hello@cogops.com</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-blue-100 dark:bg-[#2563eb]/20 rounded-full flex items-center justify-center text-[#2563eb]">
                  <Calendar size={20} />
                </div>
                <div>
                  <p className="text-sm text-[#6B7280]">Fast track</p>
                  <button className="font-bold text-[#2563eb] hover:underline transition-all">Book a consultation</button>
                </div>
              </div>
            </div>

            <div className="mt-12 flex gap-6 text-[#6B7280]">
              <Twitter className="hover:text-[#2563eb] cursor-pointer transition-colors" />
              <Linkedin className="hover:text-[#2563eb] cursor-pointer transition-colors" />
              <Github className="hover:text-[#0F1115] dark:hover:text-white cursor-pointer transition-colors" />
            </div>
          </div>

          <div className="bg-[#E5E7EB] dark:bg-[#1F2937] p-10 rounded-3xl border border-[#6B7280]/10 dark:border-white/5 shadow-lg">
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input 
                  type="text" 
                  placeholder="Your Name" 
                  className="w-full p-4 rounded-xl bg-white dark:bg-[#0F1115] border border-[#6B7280]/20 dark:border-white/5 text-[#0F1115] dark:text-[#E5E7EB] outline-none focus:ring-2 focus:ring-[#2563eb] placeholder:text-[#6B7280]/60 transition-all" 
                />
                <input 
                  type="email" 
                  placeholder="Your Email" 
                  className="w-full p-4 rounded-xl bg-white dark:bg-[#0F1115] border border-[#6B7280]/20 dark:border-white/5 text-[#0F1115] dark:text-[#E5E7EB] outline-none focus:ring-2 focus:ring-[#2563eb] placeholder:text-[#6B7280]/60 transition-all" 
                />
              </div>
              <textarea 
                placeholder="Tell us about your project or question..." 
                rows={5} 
                className="w-full p-4 rounded-xl bg-white dark:bg-[#0F1115] border border-[#6B7280]/20 dark:border-white/5 text-[#0F1115] dark:text-[#E5E7EB] outline-none focus:ring-2 focus:ring-[#2563eb] placeholder:text-[#6B7280]/60 transition-all"
              ></textarea>
              
              <button className="w-full py-4 bg-[#0F1115] dark:bg-[#2563eb] text-white font-bold rounded-xl transition-all hover:bg-opacity-90 hover:scale-[1.01] active:scale-[0.99]">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}