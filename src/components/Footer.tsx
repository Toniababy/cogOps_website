import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-white border-t border-[#F3F4F6] pt-24 pb-12 px-4 md:px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-24">

          <div className="lg:col-span-2 space-y-8">
            <Link href="/" className="flex items-center gap-3 group">
              <div className="relative h-16 w-16 grayscale group-hover:grayscale-0 transition-all">
                <Image src="/cogops-logo.png" alt="CogOps Logo" fill className="object-contain" />
              </div>
              <span className="text-2xl font-black tracking-tighter text-[#0F1115]">
                CogOps<span className="text-[#6B7280]">®</span>
              </span>
            </Link>
            <p className="text-[#6B7280] max-w-sm text-sm font-bold uppercase leading-relaxed tracking-tight">
              A dual-force technology agency and learning institution built for the next generation of digital infrastructure.
            </p>
          </div>

          <div>
            <h4 className="text-[10px] font-black text-[#0F1115] mb-8 uppercase tracking-[0.4em]">Directory</h4>
            <ul className="space-y-4 text-[11px] font-black text-[#6B7280] uppercase tracking-widest">
              <li><Link href="/about" className="hover:text-[#0F1115]">01. About</Link></li>
              <li><Link href="/services" className="hover:text-[#0F1115]">02. Services</Link></li>
              <li><Link href="/academy" className="hover:text-[#0F1115]">03. Academy</Link></li>
              <li><Link href="/insights" className="hover:text-[#0F1115]">04. Insights</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-[10px] font-black text-[#0F1115] mb-8 uppercase tracking-[0.4em]">Connect</h4>
            <ul className="space-y-4 text-[11px] font-black text-[#6B7280] uppercase tracking-widest">
              <li><a href="https://x.com/cogops93" className="hover:text-[#0F1115]">X / Twitter</a></li>
              <li><a href="https://instagram.com/cogops93" className="hover:text-[#0F1115]">Instagram</a></li>
              <li><a href="https://linkedin.com/company/CogOps" className="hover:text-[#0F1115]">LinkedIn</a></li>
              <li><a href="https://wa.me/2348118102821" className="hover:text-[#0F1115]">WhatsApp</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-12 border-t border-[#F3F4F6] flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[9px] font-black tracking-[0.4em] text-[#9CA3AF]">
            © CogOps SYSTEM // {new Date().getFullYear()} // ALL RIGHTS RESERVED
          </p>
          <div className="flex gap-8 text-[9px] font-black uppercase tracking-[0.4em] text-[#6B7280]">
            <Link href="/privacy" className="hover:text-[#0F1115]">Privacy</Link>
            <Link href="/terms" className="hover:text-[#0F1115]">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}