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
    <nav className="fixed w-full z-50 bg-white dark:bg-[#0F1115] backdrop-blur-md border-b border-slate-200 dark:border-[#1F2937] transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center h-20">
        {/* Logo */}
        <Link href="/" className="relative block h-16 w-48 md:h-24 md:w-64">
          <Image
            src="/cogops-logo.png"
            alt="CogOps Logo"
            fill
            priority
            className="object-contain object-left transition-all duration-300 dark:brightness-[1.5] dark:contrast-[0.8] dark:opacity-90"
          />
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm font-semibold text-[#6B7280] dark:text-[#6B7280] hover:text-blue-600 dark:hover:text-blue-500 transition-colors"
            >
              {link.name}
            </Link>
          ))}

          <button
            onClick={toggleTheme}
            className="p-2 rounded-full bg-slate-100 dark:bg-[#1F2937] text-slate-900 dark:text-[#E5E7EB] hover:bg-slate-200 dark:hover:bg-[#2d3748] transition-all"
            aria-label="Toggle Theme"
          >
            {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
          </button>

          <Link href="#hire" className="px-5 py-2.5 bg-blue-600 text-white text-sm font-bold rounded-full hover:bg-blue-700 transition-all">
            Book a Consultation
          </Link>
        </div>

        <div className="flex md:hidden items-center gap-4">
          <button onClick={toggleTheme} className="p-2 rounded-full bg-slate-100 dark:bg-[#1F2937] text-slate-900 dark:text-[#E5E7EB]">
            {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          <button className="text-slate-900 dark:text-[#E5E7EB]" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white dark:bg-[#0F1115] border-b border-slate-200 dark:border-[#1F2937] p-6 space-y-4 shadow-xl">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="block text-lg font-semibold text-slate-900 dark:text-[#E5E7EB] hover:text-blue-600 transition-colors"
            >
              {link.name}
            </Link>
          ))}
          <Link
            href="#hire"
            onClick={() => setIsOpen(false)}
            className="block text-center py-3 bg-blue-600 text-white font-bold rounded-xl"
          >
            Book a Consultation
          </Link>
        </div>
      )}
    </nav>
  );
}