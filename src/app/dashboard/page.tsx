'use client';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { LayoutDashboard, BookOpen, LogOut, MessageSquare, Menu, X, Lock, Home } from 'lucide-react';
import api from '../utils/api';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Dashboard() {
    const router = useRouter();
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [userName, setUserName] = useState('');
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchDashboardData = async () => {
            const loggedIn = localStorage.getItem('isLoggedIn') === 'true';
            const token = localStorage.getItem('userToken');
            const storedName = localStorage.getItem('userName');

            if (!loggedIn || !token) {
                router.push('/login');
                return;
            }

            setUserName(storedName || 'Operator');
            setIsLoading(false);

            try {
                await api.get('/auth/me', {
                    headers: { Authorization: `Bearer ${token}` }
                });
            } catch (error) {
                console.error("Backend Sync Failed");
            }
        };

        fetchDashboardData();
    }, [router]);

    const handleWhatsAppEnrollment = () => {
        const phoneNumber = "2348118102821";
        const text = `Hello CogOps, I am ${userName}. I've accessed my dashboard and I'm ready to finalize my enrollment and payment.`;
        window.open(`https://wa.me/${phoneNumber}?text=${text}`, '_blank');
    };

    const terminateSession = () => {
        localStorage.clear();
        router.push('/login');
    };

    if (isLoading) {
        return (
            <div className="h-screen bg-white flex items-center justify-center font-black uppercase tracking-[0.3em] text-[#0F1115] text-xs">
                Establishing Secure Link...
            </div>
        );
    }

    return (
        <div className="flex min-h-screen bg-[#F3F4F6] relative">
            <ToastContainer />

            <div className="md:hidden fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md px-6 py-5 flex justify-between items-center z-40 border-b border-[#E5E7EB]">
                <span onClick={() => router.push('/')} className="text-[#0F1115] font-black tracking-tighter text-lg cursor-pointer">
                    Cog<span className="text-[#6B7280]">Ops</span>
                </span>
                <button onClick={() => setIsSidebarOpen(!isSidebarOpen)} className="p-2 bg-[#0F1115] text-white rounded-lg">
                    {isSidebarOpen ? <X size={20} /> : <Menu size={20} />}
                </button>
            </div>

            <aside className={`fixed md:relative inset-y-0 left-0 z-50 w-72 bg-[#0F1115] text-white p-8 flex flex-col justify-between transform transition-all duration-300 ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}`}>
                <div className="space-y-12">
                    <div onClick={() => router.push('/')} className="font-black text-2xl tracking-tighter cursor-pointer">
                        Cog<span className="text-[#6B7280]">Ops</span>
                    </div>
                    
                    <nav className="space-y-2">
                        <p className="text-[10px] font-black text-[#6B7280] uppercase tracking-[0.3em] mb-4">Command Center</p>
                        
                        <button onClick={() => router.push('/')} className="w-full flex items-center gap-4 p-4 text-[#6B7280] hover:text-white rounded-2xl transition-all text-[11px] font-black uppercase tracking-widest">
                            <Home size={18} /> Return to Base
                        </button>

                        <button className="w-full flex items-center gap-4 p-4 bg-white/10 border border-white/5 rounded-2xl text-[11px] font-black uppercase tracking-widest text-white transition-all">
                            <LayoutDashboard size={18} /> Overview
                        </button>
                        
                        <button onClick={() => router.push('/courses')} className="w-full flex items-center gap-4 p-4 text-[#6B7280] hover:text-white rounded-2xl transition-all text-[11px] font-black uppercase tracking-widest">
                            <BookOpen size={18} /> Curriculum
                        </button>
                    </nav>
                </div>

                <button onClick={terminateSession} className="flex items-center gap-3 p-4 text-red-500 font-black uppercase text-[11px] tracking-widest">
                    <LogOut size={18} /> Terminate Session
                </button>
            </aside>

            <main className="flex-1 w-full px-6 md:px-12 lg:px-16 py-8 pt-28 md:pt-12">
                <header className="mb-12">
                    <div className="flex items-center gap-2 mb-2">
                        <div className="w-2 h-2 rounded-full bg-orange-500 animate-pulse" />
                        <span className="text-[10px] font-black text-[#6B7280] uppercase tracking-[0.3em]">Identity Verified // Enrollment Pending</span>
                    </div>
                    <h1 className="text-4xl md:text-6xl font-black text-[#0F1115] tracking-tighter leading-none">
                        Welcome, <br /> {userName.split(' ')[0]}
                    </h1>
                </header>

                <div className="bg-[#0F1115] rounded-[3rem] p-8 md:p-14 text-white relative overflow-hidden">
                    <div className="relative z-10">
                        <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center mb-6">
                            <Lock size={24} className="text-orange-400" />
                        </div>
                        <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tighter mb-4">
                            Finalize <br /> Enrollment
                        </h2>
                        <p className="text-white/50 text-sm max-w-md leading-relaxed font-medium mb-10">
                            Your account is active, but you haven't joined a track. Connect with an admin to confirm pricing and unlock your curriculum.
                        </p>
                        
                        <button
                            onClick={handleWhatsAppEnrollment}
                            className="w-full lg:w-auto px-12 py-6 bg-white text-[#0F1115] font-black uppercase text-[11px] tracking-[0.2em] rounded-2xl flex items-center justify-center gap-3 hover:bg-[#E5E7EB] transition-all"
                        >
                            <MessageSquare size={18} /> Finalize on WhatsApp
                        </button>
                    </div>
                </div>
            </main>
        </div>
    );
}