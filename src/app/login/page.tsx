'use client';
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { Eye, EyeOff, Lock, Mail, ArrowRight } from 'lucide-react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import api from '../utils/api';

export default function LoginPage() {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({ email: '', password: '' });

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await api.post('/auth/login', formData);
      const { token, user } = response.data;

      localStorage.setItem('isLoggedIn', 'true');
      localStorage.setItem('userToken', token);
      localStorage.setItem('userRole', user.role);
      localStorage.setItem('userEmail', user.email);
      localStorage.setItem('userName', `${user.firstName} ${user.lastName}`);
      
      toast.success("Access Granted", { theme: "dark" });
      if (user.role === 'hire') {
        router.push('/hire'); 
      } else {
        router.push('/dashboard');
      }

    } catch (error: any) {
      const message = error.response?.data?.message || "Invalid Credentials";
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
          <div className="relative h-12 w-12 flex-shrink-0">
            <Image src="/cogops-logo.png" alt="Logo" fill className="object-contain" />
          </div>
          <span className="text-2xl font-black tracking-tighter text-white leading-none">CogOps</span>
        </Link>
        <div className="relative z-10">
          <h1 className="text-6xl font-black text-white tracking-tighter leading-[0.85] mb-8">Access <br/> Granted<span className="text-[#6B7280]">.</span></h1>
          <p className="text-[#6B7280] text-[10px] font-black tracking-[0.3em] leading-relaxed italic">"Synchronize with the operational network."</p>
        </div>
        <div className="relative z-10 text-[10px] font-black text-[#6B7280] tracking-[0.3em]">Auth Protocol // Core_v1.0</div>
      </section>

      <section className="flex-1 flex flex-col justify-center items-center p-8">
        <div className="w-full max-w-md space-y-12">
          <div className="space-y-2">
            <span className="text-[10px] font-black text-[#6B7280] tracking-[0.4em]">Auth Service</span>
            <h2 className="text-4xl font-black text-[#0F1115] tracking-tighter">Sign In</h2>
          </div>
          <form onSubmit={handleLogin} className="space-y-6">
            <div className="space-y-2">
              <label className="text-[10px] font-black tracking-widest text-[#6B7280] ml-1">EMAIL ADDRESS</label>
              <div className="relative flex items-center">
                <Mail className="absolute left-5 text-[#9CA3AF]" size={18} />
                <input type="email" placeholder="ENTER REGISTERED EMAIL" value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} className="w-full pl-14 pr-5 py-5 rounded-2xl bg-[#F3F4F6] border-2 border-transparent focus:border-[#0F1115] focus:bg-white outline-none font-bold text-[11px] tracking-widest text-black" />
              </div>
            </div>
            <div className="space-y-2">
              <div className="flex justify-between items-center px-1">
                <label className="text-[10px] font-black tracking-widest text-[#6B7280]">Access Key</label>
                <Link href="/forgot" className="text-[9px] font-black text-[#6B7280] hover:text-[#0F1115]">Recovery</Link>
              </div>
              <div className="relative flex items-center">
                <Lock className="absolute left-5 text-[#9CA3AF]" size={18} />
                <input type={showPassword ? "text" : "password"} placeholder="••••••••" value={formData.password} onChange={(e) => setFormData({...formData, password: e.target.value})} className="w-full pl-14 pr-14 py-5 rounded-2xl bg-[#F3F4F6] border-2 border-transparent focus:border-[#0F1115] focus:bg-white outline-none font-bold text-[11px] tracking-widest text-black" />
                <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-5 text-[#6B7280]">{showPassword ? <EyeOff size={18} /> : <Eye size={18} />}</button>
              </div>
            </div>
            <button disabled={isLoading} type="submit" className="w-full py-6 bg-[#0F1115] text-white font-black rounded-2xl text-[10px] tracking-[0.3em] flex items-center justify-center gap-3 active:scale-[0.98] transition-transform">
              {isLoading ? "VALIDATING..." : <>Authorize Access <ArrowRight size={16} /></>}
            </button>
          </form>
          <p className="text-center text-[10px] font-black text-[#6B7280] uppercase tracking-widest">Don't have an account? <Link href="/signup" className="text-[#0F1115] border-b-2 border-[#0F1115] ml-2">Create Account</Link></p>
        </div>
      </section>
    </main>
  );
}