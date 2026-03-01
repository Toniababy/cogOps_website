'use client';
import { useState } from 'react';
import { Mail, Linkedin, MessageCircle, Instagram, Facebook } from 'lucide-react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const isFormValid = formData.name.trim() !== '' && 
                      formData.email.trim() !== '' && 
                      formData.message.trim() !== '';

  const socials = [
    { name: "X", handle: "@cogops93", link: "https://x.com/cogops93" },
    { name: "Instagram", handle: "@cogops93", link: "https://instagram.com/cogops93" },
    { name: "TikTok", handle: "@cogops93", link: "https://tiktok.com/@cogops93" },
    { name: "Facebook", handle: "CogOps", link: "https://facebook.com/CogOps" },
    { name: "LinkedIn", handle: "CogOps", link: "https://linkedin.com/company/CogOps" }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      toast.success("TRANSMISSION SUCCESSFUL. COGOPS PROTOCOL INITIATED.", {
        position: "bottom-right",
        theme: "dark",
        style: { 
          background: "#0F1115", 
          color: "#fff", 
          fontFamily: "monospace", 
          border: "1px solid #6B7280",
          fontSize: "10px",
          letterSpacing: "0.1em"
        }
      });
      setFormData({ name: '', email: '', message: '' });
    }, 2000);
  };

  return (
    <section id="contact" className="py-32 bg-white px-4 md:px-6">
      <ToastContainer />
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          
  
          <div className="space-y-12">
            <div>
              <h2 className="text-[10px] font-black text-[#6B7280] uppercase tracking-[0.4em] mb-4">Communication Protocol</h2>
              <h3 className="text-5xl md:text-7xl font-black text-[#0F1115] uppercase tracking-tighter leading-none">
                Connect<span className="text-[#6B7280]">.</span>
              </h3>
            </div>

            <div className="space-y-6">
              <a href="mailto:cogops93@gmail.com" className="flex items-center gap-6 group">
                <div className="w-14 h-14 bg-[#F3F4F6] rounded-2xl flex items-center justify-center text-[#0F1115] group-hover:bg-[#0F1115] group-hover:text-white transition-all">
                  <Mail size={24} />
                </div>
                <div>
                  <p className="text-[10px] font-black text-[#6B7280] uppercase tracking-widest">Email Interface</p>
                  <p className="text-xl font-black text-[#0F1115]">cogops93@gmail.com</p>
                </div>
              </a>

              <a href="https://wa.me/2348118102821" target="_blank" className="flex items-center gap-6 group">
                <div className="w-14 h-14 bg-[#F3F4F6] rounded-2xl flex items-center justify-center text-[#0F1115] group-hover:bg-[#25D366] group-hover:text-white transition-all">
                  <MessageCircle size={24} />
                </div>
                <div>
                  <p className="text-[10px] font-black text-[#6B7280] uppercase tracking-widest">Direct WhatsApp</p>
                  <p className="text-xl font-black text-[#0F1115]">+234 811 810 2821</p>
                </div>
              </a>
            </div>

            <div className="pt-10 border-t border-[#F3F4F6]">
              <h4 className="text-[10px] font-black text-[#6B7280] uppercase tracking-[0.3em] mb-8">Social Infrastructure</h4>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
                {socials.map((social) => (
                  <a key={social.name} href={social.link} target="_blank" className="block group">
                    <p className="text-[10px] font-black text-[#0F1115] uppercase tracking-widest group-hover:text-[#6B7280] transition-colors">{social.name}</p>
                    <p className="text-[11px] font-bold text-[#6B7280]">{social.handle}</p>
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="bg-[#0F1115] p-8 md:p-12 rounded-[3rem] shadow-2xl border border-white/5">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <label className="text-[10px] font-black text-[#6B7280] uppercase tracking-widest ml-2">Identify Entity</label>
                <input 
                  type="text" 
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  placeholder="FULL NAME" 
                  className="w-full p-5 rounded-2xl bg-white/5 border border-white/10 text-white outline-none focus:border-white/40 transition-all font-bold uppercase text-xs tracking-widest" 
                />
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-black text-[#6B7280]tracking-widest ml-2">Return Address</label>
                <input 
                  type="email" 
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  placeholder="email@domain.com" 
                  className="w-full p-5 rounded-2xl bg-white/5 border border-white/10 text-white outline-none focus:border-white/40 transition-all font-bold text-xs tracking-widest" 
                />
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-black text-[#6B7280] uppercase tracking-widest ml-2">Transmission Data</label>
                <textarea 
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  placeholder="DESCRIBE PROJECT OR INQUIRY..." 
                  rows={4} 
                  className="w-full p-5 rounded-2xl bg-white/5 border border-white/10 text-white outline-none focus:border-white/40 transition-all font-bold uppercase text-xs tracking-widest resize-none"
                ></textarea>
              </div>

              <button 
                type="submit"
                disabled={!isFormValid || isSubmitting}
                className={`w-full py-6 font-black uppercase tracking-[0.3em] text-[10px] rounded-2xl transition-all 
                  ${isFormValid && !isSubmitting
                    ? 'bg-white text-[#0F1115] hover:bg-[#E5E7EB] active:scale-[0.98]' 
                    : 'bg-[#6B7280] text-[#0F1115] cursor-not-allowed opacity-50'
                  }`}
              >
                {isSubmitting ? 'TRANSMITTING...' : 'Submit Protocol'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}