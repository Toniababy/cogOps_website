'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { Menu, X, UserPlus, LogOut, LayoutDashboard, ArrowRight } from 'lucide-react';
import Image from 'next/image';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userName, setUserName] = useState('');
  const [mounted, setMounted] = useState(false);

  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => setScrolled(window.scrollY > 20);
    const authStatus = localStorage.getItem('isLoggedIn') === 'true';
    const storedName = localStorage.getItem('userName');

    setIsLoggedIn(authStatus);
    if (storedName) setUserName(storedName);

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [pathname]);

  const handleLogout = () => {
    localStorage.clear();
    setIsLoggedIn(false);
    setIsOpen(false);
    router.push('/login');
  };

  if (pathname.startsWith('/dashboard')) return null;

  const navLinks = [
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Academy', href: '/academy' },
    { name: 'Hire Us', href: '/hire' },
  ];

  
  return (
    <>
      <nav className={`fixed w-full z-[100] transition-all duration-300 bg-white/95 backdrop-blur-md h-16 border-b border-[#E5E7EB] 
         flex items-center`}>
        <div className="max-w-7xl mx-auto px-6 w-full flex justify-between items-center">

          <Link href="/" className="flex items-center gap-2 flex-shrink-0 group">
            <div className="relative h-10 w-10 md:h-12 md:w-12 flex-shrink-0">
              <Image src="/cogops-logo.png" alt="Logo" fill priority className="object-contain" />
            </div>
            <span className="text-lg md:text-xl font-black tracking-tighter text-[#0F1115]">
              Cog<span className="text-[#6B7280]">Ops</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden xl:flex items-center gap-10">
            <div className="flex items-center gap-8 border-r border-[#E5E7EB] pr-8">
              {navLinks.map((link) => (
                <Link key={link.name} href={link.href} className={`text-[10px] font-black tracking-[0.2em] uppercase transition-all relative group ${pathname === link.href ? 'text-[#0F1115]' : 'text-[#6B7280] hover:text-[#0F1115]'}`}>
                  {link.name}
                  <span className={`absolute -bottom-1 left-0 h-[2px] bg-[#0F1115] transition-all ${pathname === link.href ? 'w-full' : 'w-0 group-hover:w-full'}`} />
                </Link>
              ))}
            </div>

            <div className="flex items-center gap-6">
              {isLoggedIn ? (
                <div className="flex items-center gap-4">
                  <div className="animate-glisten w-8 h-8 bg-[#0F1115] text-white rounded-full flex items-center justify-center text-[10px] font-black">
                    {userName ? userName[0] : 'U'}
                  </div>
                  <button onClick={handleLogout} className="text-[#6B7280] hover:text-red-600 transition-colors"><LogOut size={16} /></button>
                </div>
              ) : (
                <Link href="/signup" className="text-[10px] font-black uppercase tracking-widest text-[#0F1115]">Join</Link>
              )}
              <Link href="/hire" className="shine-effect px-5 py-2.5 bg-[#0F1115] text-white text-[9px] font-black uppercase tracking-widest rounded-lg animate-glisten">
                Consultation
              </Link>
            </div>
          </div>

          <button onClick={() => setIsOpen(!isOpen)} className="xl:hidden p-2 text-[#0F1115]">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* MOBILE MENU - RE-DESIGNED */}
      <div className={`fixed inset-0 bg-white z-[110] xl:hidden transition-all duration-500 ease-in-out ${isOpen ? 'translate-y-0' : '-translate-y-full'}`}>
        <div className="flex flex-col h-full pt-20 px-6 pb-8 max-w-md mx-auto">

          {/* Header Area - Reduced Space */}
          <div className="flex justify-between items-center mb-8 border-b border-gray-100 pb-4">
            <span className="text-[9px] font-black uppercase tracking-[0.3em] text-[#D1D5DB]">Menu Protocol</span>
            <button onClick={() => setIsOpen(false)} className="p-2 bg-gray-50 rounded-full"><X size={18} /></button>
          </div>

          {/* Links Area - Sophisticated size */}
          <div className="space-y-4">
            {isLoggedIn && (
              <div className="flex items-center gap-3 mb-6 p-3 bg-gray-50 rounded-xl animate-glisten">
                <div className="w-10 h-10 bg-[#0F1115] text-white rounded-full flex items-center justify-center text-xs font-black">
                  {userName ? userName[0] : 'U'}
                </div>
                <div>
                  <p className="text-[8px] font-black text-[#6B7280] uppercase tracking-widest">Active Operator</p>
                  <p className="text-base font-black text-[#0F1115] normal-case tracking-tighter">CogOps // {userName.split(' ')[0]}</p>
                </div>
              </div>
            )}

            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="flex items-center justify-between py-3 text-xl font-black text-[#0F1115] uppercase tracking-tighter border-b border-gray-50 group active:translate-x-2 transition-transform"
              >
                {link.name} <ArrowRight size={18} className="text-gray-200" />
              </Link>
            ))}
          </div>

          {/* Action Area - Animated Buttons */}
          <div className="mt-auto space-y-3">
            {!isLoggedIn && (
              <Link href="/signup" onClick={() => setIsOpen(false)} className="w-full py-4 border-2 border-[#0F1115] flex items-center justify-center gap-2 font-black uppercase tracking-widest rounded-xl text-[10px]">
                <UserPlus size={16} /> New Session
              </Link>
            )}
            <Link href="/hire" onClick={() => setIsOpen(false)} className="shine-effect w-full py-4 bg-[#0F1115] text-white flex items-center justify-center gap-2 font-black uppercase tracking-widest rounded-xl text-[10px] animate-glisten">
              Book Consultation
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}