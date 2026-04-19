'use client';
import { useState } from 'react';
import Link from 'next/link';
import { Mail, ArrowLeft, Send } from 'lucide-react';
import api from '../utils/api'; 
import { toast, ToastContainer } from 'react-toastify';

export default function ForgotPassword() {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleResetRequest = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      await api.post('/auth/forgot-password', { email });

      toast.success("RECOVERY TRANSMITTED. CHECK YOUR INBOX.", { theme: "dark" });
    } catch (err) {
      toast.error("SYSTEM OFFLINE. TRY AGAIN LATER.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <main className="h-screen w-full flex bg-white items-center justify-center p-6">
      <ToastContainer />
      <div className="w-full max-w-md space-y-8">
        <div className="text-center">
          <h2 className="text-4xl font-black text-[#0F1115] uppercase tracking-tighter">Recover Key</h2>
          <p className="text-[#6B7280] text-xs font-black uppercase tracking-widest mt-2">Identity Verification Protocol</p>
        </div>

        <form onSubmit={handleResetRequest} className="space-y-6">
          <div className="space-y-2">
            <label className="text-[10px] font-black uppercase tracking-widest text-[#6B7280] ml-1">Registered Email</label>
            <div className="relative flex items-center">
              <Mail className="absolute left-5 text-[#9CA3AF]" size={18} />
              <input 
                type="email" required value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="ENTER REGISTERED EMAIL"
                className="w-full pl-14 pr-5 py-5 rounded-2xl bg-[#F3F4F6] border-2 border-transparent focus:border-[#0F1115] outline-none font-bold uppercase text-[11px] tracking-widest text-black" 
              />
            </div>
          </div>

          <button disabled={isLoading} type="submit" className="w-full py-6 bg-[#0F1115] text-white font-black rounded-2xl text-[10px] uppercase tracking-[0.3em] flex items-center justify-center gap-3 active:scale-[0.98] transition-transform">
            {isLoading ? "TRANSMITTING..." : <>Request Override <Send size={16} /></>}
          </button>
        </form>

        <Link href="/login" className="flex items-center justify-center gap-2 text-[10px] font-black text-[#6B7280] uppercase tracking-widest hover:text-[#0F1115] transition-colors">
          <ArrowLeft size={14} /> Back to Login
        </Link>
      </div>
    </main>
  );
}