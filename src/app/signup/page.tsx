'use client';
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { Eye, EyeOff, CheckCircle2, ArrowRight, Briefcase, GraduationCap } from 'lucide-react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import api from '../utils/api';

export default function SignUpPage() {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [role, setRole] = useState('academy'); 

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: ''
  });

  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault();

    if (formData.firstName.length < 2) return toast.error("FIRST NAME REQUIRED");
    if (formData.lastName.length < 2) return toast.error("LAST NAME REQUIRED");
    if (!formData.email.includes('@')) return toast.error("VALID EMAIL REQUIRED");
    if (formData.password.length < 8) return toast.error("ACCESS KEY MUST BE 8+ CHARACTERS");

    setIsLoading(true);

    try {
      const response = await api.post('/auth/signup', {
        ...formData,
        role: role
      });

      if (response.status === 201) {
        toast.success(`Identity Established as ${role.toUpperCase()}.`, {
          theme: "dark",
          onClose: () => router.push("/login") 
        });
      }
    } catch (error: any) {
      const message = error.response?.data?.message || "Protocol Error: Email might be taken.";
      toast.error(message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <main className="h-screen w-full flex bg-white overflow-hidden">
      <ToastContainer />

      <section className="hidden lg:flex w-[40%] bg-[#0F1115] flex-col justify-between p-16 relative">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
        <Link href="/" className="relative z-10 flex items-center gap-4">
          <div className="relative h-12 w-12 flex-shrink-0 text-white">
            <Image src="/cogops-logo.png" alt="Logo" fill className="object-contain" />
          </div>
          <span className="text-2xl font-black tracking-tighter text-white">CogOps</span>
        </Link>
        <div className="relative z-10">
          <h1 className="text-6xl font-black text-white uppercase tracking-tighter leading-[0.85] mb-8">
            Network <br/> Induction<span className="text-[#6B7280]">.</span>
          </h1>
          <p className="text-[#6B7280] text-[10px] font-black uppercase tracking-[0.3em] mb-8">Select your operational path below.</p>
        </div>
        <div className="relative z-10 text-[10px] font-black text-[#6B7280] uppercase tracking-[0.3em]">System v1.0.4 // Nigeria_Node</div>
      </section>

      {/* Right Form Panel */}
      <section className="flex-1 flex flex-col justify-center items-center p-8 overflow-y-auto">
        <div className="w-full max-w-xl">
          <div className="mb-10">
            <span className="text-[10px] font-black text-[#6B7280] uppercase tracking-[0.4em]">Protocol Selection</span>
            <div className="grid grid-cols-2 gap-4 mt-4">
              <button 
                onClick={() => setRole('academy')}
                className={`p-4 rounded-2xl border-2 transition-all flex flex-col gap-2 ${role === 'academy' ? 'border-[#0F1115] bg-[#F3F4F6]' : 'border-transparent bg-gray-50 opacity-60'}`}
              >
                <GraduationCap size={20} />
                <span className="text-[10px] font-black uppercase tracking-widest text-left">Academy Talent</span>
              </button>
              <button 
                onClick={() => setRole('hire')}
                className={`p-4 rounded-2xl border-2 transition-all flex flex-col gap-2 ${role === 'hire' ? 'border-[#0F1115] bg-[#F3F4F6]' : 'border-transparent bg-gray-50 opacity-60'}`}
              >
                <Briefcase size={20} />
                <span className="text-[10px] font-black uppercase tracking-widest text-left">Business Client</span>
              </button>
            </div>
          </div>

          <form onSubmit={handleSignUp} className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="space-y-1">
              <label className="text-[9px] font-black uppercase tracking-widest text-[#6B7280] ml-1">First Name</label>
              <input type="text" placeholder="DAVID" value={formData.firstName} onChange={(e) => setFormData({...formData, firstName: e.target.value})} className="w-full p-4 rounded-xl bg-[#F3F4F6] border-2 border-transparent focus:border-[#0F1115] outline-none font-bold text-[11px] uppercase tracking-widest text-black" />
            </div>
            <div className="space-y-1">
              <label className="text-[9px] font-black uppercase tracking-widest text-[#6B7280] ml-1">Last Name</label>
              <input type="text" placeholder="OKON" value={formData.lastName} onChange={(e) => setFormData({...formData, lastName: e.target.value})} className="w-full p-4 rounded-xl bg-[#F3F4F6] border-2 border-transparent focus:border-[#0F1115] outline-none font-bold text-[11px] uppercase tracking-widest text-black" />
            </div>
            <div className="md:col-span-2 space-y-1">
              <label className="text-[9px] font-black tracking-widest text-[#6B7280] ml-1">Operational Email</label>
              <input type="email" placeholder="IDENTIFY@DOMAIN.COM" value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} className="w-full p-4 rounded-xl bg-[#F3F4F6] border-2 border-transparent focus:border-[#0F1115] outline-none font-bold text-[11px] tracking-widest text-black" />
            </div>
            <div className="md:col-span-2 space-y-1 relative">
              <label className="text-[9px] font-black tracking-widest text-[#6B7280] ml-1">Access Key</label>
              <div className="relative flex items-center">
                <input type={showPassword ? "text" : "password"} placeholder="••••••••" value={formData.password} onChange={(e) => setFormData({...formData, password: e.target.value})} className="w-full p-4 rounded-xl bg-[#F3F4F6] border-2 border-transparent focus:border-[#0F1115] outline-none font-bold text-[11px] tracking-widest text-black" />
                <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-4 text-[#6B7280]">{showPassword ? <EyeOff size={16} /> : <Eye size={16} />}</button>
              </div>
            </div>
            <button disabled={isLoading} type="submit" className="md:col-span-2 py-5 bg-[#0F1115] text-white font-black rounded-xl text-[10px] uppercase tracking-[0.3em] flex items-center justify-center gap-3 mt-4 transition-all active:scale-[0.98] hover:bg-[#1F2937]">
              {isLoading ? "INITIATING..." : <>Create Identity <ArrowRight size={16} /></>}
            </button>
          </form>
          <p className="mt-8 text-center text-[10px] font-black text-[#6B7280] uppercase tracking-widest">
            Identity exists? <Link href="/login" className="text-[#0F1115] border-b-2 border-[#0F1115] ml-2 pb-0.5">Sign In</Link>
          </p>
        </div>
      </section>
    </main>
  );
}