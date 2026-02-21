'use client';
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { Eye, EyeOff, CheckCircle2, ArrowRight } from 'lucide-react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function SignUpPage() {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  // 1. Restored Form State
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: ''
  });

  // 2. Restored Strict Validation Logic
  const isFormValid = 
    formData.firstName.trim() !== '' && 
    formData.lastName.trim() !== '' && 
    formData.email.trim().includes('@') && 
    formData.password.length >= 8; // 8 character minimum protocol

  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!isFormValid) return;

    setIsLoading(true);

    // Simulate Server Authentication Protocol
    setTimeout(() => {
      setIsLoading(false);
      toast.success("Identity Verified. Welcome to CogOps.", {
        position: "top-right",
        autoClose: 3000,
        theme: "dark",
        onClose: () => router.push("/login") 
      });
    }, 2000);
  };

  return (
    <main className="h-screen w-full flex bg-white overflow-hidden">
      <ToastContainer />

      <section className="hidden lg:flex w-[40%] bg-[#0F1115] flex-col justify-between p-16 relative">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
        
        <Link href="/" className="relative z-10 flex items-center gap-4">
          <div className="relative h-12 w-12 flex-shrink-0">
            <Image src="/cogops-logo.png" alt="Logo" fill className="object-contain" />
          </div>
          <span className="text-2xl font-black tracking-tighter text-white uppercase leading-none">CogOps</span>
        </Link>

        <div className="relative z-10">
          <h1 className="text-6xl font-black text-white uppercase tracking-tighter leading-[0.85] mb-8">Academy <br/> Enrollment<span className="text-[#6B7280]">.</span></h1>
          <div className="space-y-4">
            {['Industry-standard tools', 'Project-based tracks', 'Mentor support'].map((text, i) => (
              <div key={i} className="flex items-center gap-4 text-[#9CA3AF] font-black text-[10px] uppercase tracking-[0.3em]">
                <CheckCircle2 size={16} className="text-[#6B7280]" /> {text}
              </div>
            ))}
          </div>
        </div>

        <div className="relative z-10 text-[10px] font-black text-[#6B7280] uppercase tracking-[0.3em]">Entry Protocol // Academy_v1.0</div>
      </section>

      <section className="flex-1 flex flex-col justify-center items-center p-8 overflow-y-auto">
        <div className="w-full max-w-xl">
          <div className="mb-12">
            <span className="text-[10px] font-black text-[#6B7280] uppercase tracking-[0.4em]">Registration Service</span>
            <h2 className="text-4xl font-black text-[#0F1115] uppercase tracking-tighter mt-2">Create Identity</h2>
          </div>

          <form onSubmit={handleSignUp} className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-[10px] font-black uppercase tracking-widest text-[#6B7280]">First Name</label>
              <input 
                type="text" 
                required 
                placeholder="E.G. DAVID" 
                value={formData.firstName}
                onChange={(e) => setFormData({...formData, firstName: e.target.value})}
                className="w-full p-5 rounded-2xl bg-[#F3F4F6] border-2 border-transparent focus:border-[#0F1115] outline-none font-bold text-[11px] uppercase tracking-widest placeholder:text-[#9CA3AF]/60" 
              />
            </div>

            <div className="space-y-2">
              <label className="text-[10px] font-black uppercase tracking-widest text-[#6B7280]">Last Name</label>
              <input 
                type="text" 
                required 
                placeholder="E.G. OKON" 
                value={formData.lastName}
                onChange={(e) => setFormData({...formData, lastName: e.target.value})}
                className="w-full p-5 rounded-2xl bg-[#F3F4F6] border-2 border-transparent focus:border-[#0F1115] outline-none font-bold text-[11px] uppercase tracking-widest placeholder:text-[#9CA3AF]/60" 
              />
            </div>

            <div className="md:col-span-2 space-y-2">
              <label className="text-[10px] font-black tracking-widest text-[#6B7280]">Identity Email</label>
              <input 
                type="email" 
                required 
                placeholder="ideentify@gmail.com" 
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                className="w-full p-5 rounded-2xl bg-[#F3F4F6] border-2 border-transparent focus:border-[#0F1115] outline-none font-bold text-[11px] tracking-widest placeholder:text-[#9CA3AF]/60" 
              />
            </div>

            <div className="md:col-span-2 space-y-2 relative">
              <label className="text-[10px] font-black tracking-widest text-[#6B7280]">Access Key (Min 8 Chars)</label>
              <div className="relative flex items-center">
                <input 
                  type={showPassword ? "text" : "password"} 
                  required 
                  placeholder="••••••••" 
                  value={formData.password}
                  onChange={(e) => setFormData({...formData, password: e.target.value})}
                  className="w-full p-5 rounded-2xl bg-[#F3F4F6] border-2 border-transparent focus:border-[#0F1115] outline-none font-bold text-[11px] uppercase tracking-widest placeholder:text-[#9CA3AF]/60" 
                />
                <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-5 text-[#6B7280]">
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>

            <button 
              disabled={!isFormValid || isLoading} 
              type="submit" 
              className={`md:col-span-2 py-6 font-black rounded-2xl text-[10px] uppercase tracking-[0.3em] flex items-center justify-center gap-3 mt-4 transition-all
                ${(!isFormValid || isLoading) 
                  ? 'bg-[#E5E7EB] text-[#9CA3AF] cursor-not-allowed' 
                  : 'bg-[#0F1115] text-white active:scale-[0.98] hover:bg-[#1F2937] shadow-xl shadow-black/10'}`}
            >
              {isLoading ? "VALIDATING PROTOCOL..." : <>Establish Identity <ArrowRight size={16} /></>}
            </button>
          </form>

          <p className="mt-8 text-center text-[10px] font-black text-[#6B7280] uppercase tracking-widest">
            Identity already exists? <Link href="/login" className="text-[#0F1115] border-b-2 border-[#0F1115] ml-2 pb-0.5">Sign In</Link>
          </p>
        </div>
      </section>
    </main>
  );
}