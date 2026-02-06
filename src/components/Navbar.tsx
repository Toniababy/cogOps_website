'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, Sun, Moon } from 'lucide-react';
import Image from 'next/image';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [theme, setTheme] = useState('dark');

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Academy', href: '#academy' },
    { name: 'Hire Us', href: '#hire' },
  ];

  useEffect(() => {
    const root = window.document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [theme]);

  const toggleTheme = () => setTheme(theme === 'dark' ? 'light' : 'dark');

  return (
    <nav className="fixed w-full z-50 bg-white/90 dark:bg-[#0F1115]/90 backdrop-blur-md border-b border-[#6B7280]/20 dark:border-[#1F2937] transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 md:px-6 flex justify-between items-center h-28">
        <Link href="/" className="flex items-center gap-4 flex-shrink-0 group">
          <div className="relative h-16 w-16 md:h-20 md:w-20">
            <Image
              src="/cogops-logo.png"
              alt="CogOps Icon"
              fill
              priority
              className="object-contain transition-all duration-500 "
            />
          </div>
          <div className="flex flex-col -space-y-1">
             <span className="text-2xl md:text-4xl font-black tracking-tighter text-[#0F1115] dark:text-[#E5E7EB]">
              Cog<span className="text-[#2563eb]">Ops</span>
            </span>
          </div>
        </Link>

        <div className="hidden lg:flex items-center gap-10">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-base font-extrabold text-[#6B7280] hover:text-[#2563eb] transition-all duration-300"
            >
              {link.name}
            </Link>
          ))}

          <button
            onClick={toggleTheme}
            className="p-3.5 rounded-full bg-[#E5E7EB] dark:bg-[#1F2937] text-[#0F1115] dark:text-[#E5E7EB] hover:scale-110 transition-all"
          >
            {theme === 'dark' ? <Sun size={22} /> : <Moon size={22} />}
          </button>

          <Link href="#hire" className="px-8 py-4 bg-[#2563eb] text-white text-sm font-black rounded-full hover:bg-blue-700 transition-all shadow-xl shadow-blue-500/30">
            Book a Consultation
          </Link>
        </div>

        <div className="flex lg:hidden items-center gap-4">
          <button onClick={toggleTheme} className="p-3 rounded-full bg-[#E5E7EB] dark:bg-[#1F2937]">
            {theme === 'dark' ? <Sun size={24} /> : <Moon size={24} />}
          </button>
          <button onClick={() => setIsOpen(!isOpen)} className="text-[#0F1115] dark:text-[#E5E7EB]">
            {isOpen ? <X size={40} /> : <Menu size={40} />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="lg:hidden bg-white dark:bg-[#0F1115] h-screen p-10 space-y-10 animate-in fade-in slide-in-from-right duration-500">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="block text-4xl font-black text-[#6B7280] hover:text-[#2563eb]"
            >
              {link.name}
            </Link>
          ))}
          <Link
            href="#hire"
            onClick={() => setIsOpen(false)}
            className="block text-center py-6 bg-[#2563eb] text-white font-black rounded-3xl text-2xl"
          >
            Book a Consultation
          </Link>
        </div>
      )}
    </nav>
  );
}