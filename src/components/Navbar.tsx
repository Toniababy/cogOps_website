'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation'; // Logic to detect current page
import { Menu, X, UserPlus, ArrowRight } from 'lucide-react';
import Image from 'next/image';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Academy', href: '/academy' },
    { name: 'Hire Us', href: '/hire' },
  ];

  return (
    <>
      <nav className={`fixed w-full z-[100] transition-all duration-500 ${
        scrolled ? 'bg-white/95 backdrop-blur-md h-20 border-b border-[#E5E7EB]' : 'bg-transparent h-24'
      } flex items-center`}>
        <div className="max-w-7xl mx-auto px-6 w-full flex justify-between items-center">

          <Link href="/" className="flex items-center gap-3 flex-shrink-0 group">
            <div className="relative h-14 w-14 md:h-16 md:w-16">
              <Image src="/cogops-logo.png" alt="CogOps Logo" fill priority className="object-contain" />
            </div>
            <span className="text-2xl font-black tracking-tighter text-[#0F1115] uppercase">
              Cog<span className="text-[#6B7280]">Ops</span>
            </span>
          </Link>

          <div className="hidden xl:flex items-center gap-12">
            <div className="flex items-center gap-10 border-r border-[#E5E7EB] pr-10">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link 
                    key={link.name} 
                    href={link.href} 
                    className={`text-sm font-black uppercase tracking-[0.15em] transition-all relative group ${
                      isActive ? 'text-[#0F1115]' : 'text-[#6B7280] hover:text-[#0F1115]'
                    }`}
                  >
                    {link.name}
                    <span className={`absolute -bottom-2 left-0 h-[3px] bg-[#0F1115] transition-all duration-300 ${
                      isActive ? 'w-full' : 'w-0 group-hover:w-full'
                    }`} />
                  </Link>
                );
              })}
            </div>

            <div className="flex items-center gap-8">
              <Link href="/signup" className="flex items-center gap-2 text-sm font-black uppercase tracking-[0.15em] text-[#0F1115] hover:opacity-60 transition-all">
                <UserPlus size={18} />
                <span>Sign Up</span>
              </Link>

              <Link href="/hire" className="px-8 py-4 bg-[#0F1115] text-white text-[11px] font-black uppercase tracking-[0.2em] rounded-xl hover:bg-[#1F2937] transition-all shadow-xl active:scale-95 whitespace-nowrap">
                Consultation
              </Link>
            </div>
          </div>

          <button 
            onClick={() => setIsOpen(!isOpen)} 
            className="xl:hidden p-3 text-[#0F1115] hover:bg-[#F3F4F6] rounded-xl transition-colors"
          >
            {isOpen ? <X size={30} /> : <Menu size={30} />}
          </button>
        </div>
      </nav>

      <div className={`fixed inset-0 bg-white z-[90] xl:hidden transition-transform duration-500 ease-in-out ${
        isOpen ? 'translate-x-0' : 'translate-x-full'
      }`}>
        <div className="flex flex-col h-full pt-32 px-10 pb-12">
          <div className="space-y-8">
            <p className="text-[10px] font-black uppercase tracking-[0.4em] text-[#E5E7EB]">Main Menu</p>
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                href={link.href} 
                onClick={() => setIsOpen(false)} 
                className="flex items-center justify-between text-5xl font-black text-[#0F1115] uppercase tracking-tighter hover:translate-x-2 transition-transform"
              >
                {link.name} <ArrowRight size={40} className="text-[#E5E7EB]" />
              </Link>
            ))}
          </div>

          <div className="mt-auto space-y-4">
            <Link 
              href="/signup" 
              onClick={() => setIsOpen(false)}
              className="w-full py-6 border-[3px] border-[#0F1115] flex items-center justify-center gap-3 font-black uppercase tracking-[0.2em] text-[#0F1115] rounded-2xl text-sm"
            >
              <UserPlus size={20} /> Sign Up
            </Link>
            <Link 
              href="/hire" 
              onClick={() => setIsOpen(false)}
              className="w-full py-6 bg-[#0F1115] text-white flex items-center justify-center gap-3 font-black uppercase tracking-[0.2em] rounded-2xl text-sm shadow-2xl"
            >
              Book Consultation
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}