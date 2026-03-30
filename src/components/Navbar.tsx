'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { Menu, X, UserPlus, LogOut, LayoutDashboard, ArrowRight, User } from 'lucide-react';
import Image from 'next/image';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userName, setUserName] = useState('');

  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
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
      <nav className={`fixed w-full z-[100] transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-md h-20 border-b border-[#E5E7EB]' : 'bg-white/40 backdrop-blur-sm h-24'
        } flex items-center`}>
        <div className="max-w-7xl mx-auto px-6 w-full flex justify-between items-center">

          <Link href="/" className="flex items-center gap-3 flex-shrink-0 group whitespace-nowrap">
            <div className="relative h-16 w-16 md:h-20 md:w-20 flex-shrink-0 transition-all">
              <Image
                src="/cogops-logo.png"
                alt="Logo"
                fill
                priority
                className="object-contain"
              />
            </div>
            <span className="text-xl md:text-2xl font-black tracking-tighter text-[#0F1115] ">
              Cog<span className="text-[#6B7280]">Ops</span>
            </span>
          </Link>

          <div className="hidden xl:flex items-center gap-10">
            <div className="flex items-center gap-8 border-r border-[#E5E7EB] pr-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`text-[11px] font-black  tracking-[0.2em] transition-all relative group ${pathname === link.href ? 'text-[#0F1115]' : 'text-[#6B7280] hover:text-[#0F1115]'
                    }`}
                >
                  {link.name}
                  <span className={`absolute -bottom-1 left-0 h-[2px] bg-[#0F1115] transition-all ${pathname === link.href ? 'w-full' : 'w-0 group-hover:w-full'
                    }`} />
                </Link>
              ))}
            </div>

            <div className="flex items-center gap-6">
              {isLoggedIn ? (
                <div className="flex items-center gap-6">
                  <div className="flex items-center gap-2 text-[11px] font-black uppercase tracking-widest text-[#0F1115]">
                    <div className="w-8 h-8 bg-[#0F1115] text-white rounded-full flex items-center justify-center text-[10px]">
                      {userName ? userName.split(' ').map(n => n[0]).join('') : 'U'}
                    </div>
                    <span>{userName.split(' ')[0]}</span>
                  </div>

                  <Link href="/dashboard" className="text-[#6B7280] hover:text-[#0F1115] transition-colors">
                    <LayoutDashboard size={18} />
                  </Link>

                  <button onClick={handleLogout} className="text-[#6B7280] hover:text-red-600 transition-colors">
                    <LogOut size={18} />
                  </button>
                </div>
              ) : (
                <Link href="/signup" className="flex items-center gap-2 text-[11px] font-black uppercase tracking-widest text-[#0F1115] hover:opacity-60 transition-all">
                  <UserPlus size={18} />
                  <span>Join</span>
                </Link>
              )}
              <Link href="/hire" className="px-6 py-3 bg-[#0F1115] text-white text-[10px] font-black uppercase tracking-widest rounded-xl hover:bg-[#1F2937] transition-all active:scale-95">
                Consultation
              </Link>
            </div>
          </div>

          <button onClick={() => setIsOpen(!isOpen)} className="xl:hidden p-2 text-[#0F1115]">
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      <div className={`fixed inset-0 bg-white z-[110] xl:hidden transition-all duration-500 ease-in-out ${isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full pointer-events-none'
        }`}>
        <div className="flex flex-col h-full pt-28 px-8 pb-10 max-w-md mx-auto">
          <div className="flex justify-between items-center mb-10 border-b pb-4">
            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-[#D1D5DB]">Menu</span>
            <button onClick={() => setIsOpen(false)} className="p-2 bg-[#F3F4F6] rounded-full text-[#0F1115]"><X size={20} /></button>
          </div>

          <div className="space-y-6 mb-12">
            {isLoggedIn && (
              <div className="flex items-center gap-4 mb-8 p-4 bg-[#F3F4F6] rounded-2xl">
                <div className="w-12 h-12 bg-[#0F1115] text-white rounded-full flex items-center justify-center text-sm font-black">
                  {userName ? userName.split(' ').map(n => n[0]).join('') : 'U'}
                </div>
                <div>
                  <p className="text-[10px] font-black text-[#6B7280] uppercase tracking-widest">Active Operator</p>
                  <p className="text-xl font-black text-[#0F1115] uppercase tracking-tighter">{userName}</p>
                </div>
              </div>
            )}

            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="flex items-center justify-between text-3xl font-black text-[#0F1115] uppercase tracking-tighter group hover:translate-x-2 transition-transform"
              >
                {link.name} <ArrowRight size={24} className="text-[#E5E7EB] group-hover:text-[#0F1115] transition-colors" />
              </Link>
            ))}
          </div>

          <div className="mt-auto space-y-3">
            {isLoggedIn ? (
              <>
                <Link href="/dashboard" onClick={() => setIsOpen(false)} className="w-full py-5 bg-[#F3F4F6] text-[#0F1115] flex items-center justify-center gap-3 font-black uppercase tracking-widest rounded-2xl text-[11px]">
                  <LayoutDashboard size={18} /> Dashboard
                </Link>
                <button onClick={handleLogout} className="w-full py-5 border-[3px] border-red-100 text-red-600 flex items-center justify-center gap-3 font-black uppercase tracking-widest rounded-2xl text-[11px]">
                  <LogOut size={18} /> Terminate Session
                </button>
              </>
            ) : (
              <Link href="/signup" onClick={() => setIsOpen(false)} className="w-full py-5 border-[3px] border-[#0F1115] flex items-center justify-center gap-3 font-black uppercase tracking-widest rounded-2xl text-[11px]">
                <UserPlus size={18} /> Create Account
              </Link>
            )}
            <Link href="/hire" onClick={() => setIsOpen(false)} className="w-full py-5 bg-[#0F1115] text-white flex items-center justify-center gap-3 font-black uppercase tracking-widest rounded-2xl text-[11px]">
              Book Consultation
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}