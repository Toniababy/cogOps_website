import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-[#E5E7EB] dark:bg-[#0F1115] border-t border-[#6B7280]/20 dark:border-[#1F2937] pt-16 pb-8 px-6 transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">

          <div className="lg:col-span-2">
            <Link href="/" className="relative inline-block h-16 w-48 md:h-20 md:w-56 mb-6">
              <Image
                src="/cogops-logo.png"
                alt="CogOps Logo"
                fill
                priority
                className="object-contain object-left transition-all duration-300 dark:brightness-[1.5] dark:contrast-[0.8] dark:opacity-90"
              />
            </Link>
            <p className="text-[#6B7280] max-w-sm leading-relaxed text-base">
              CogOps is a tech-savvy agency and learning institution helping founders, brands, and
              individuals build, grow, and stay relevant in a digital world.
            </p>
          </div>

          <div>
            <h4 className="font-bold text-[#0F1115] dark:text-[#E5E7EB] mb-6">Explore</h4>
            <ul className="space-y-4 text-[#6B7280] text-sm font-medium">
              <li><Link href="#about" className="hover:text-[#2563eb] transition-colors">Our Story</Link></li>
              <li><Link href="#services" className="hover:text-[#2563eb] transition-colors">Agency Services</Link></li>
              <li><Link href="#academy" className="hover:text-[#2563eb] transition-colors">Academy</Link></li>
              <li><Link href="#insights" className="hover:text-[#2563eb] transition-colors">Insights (Blog)</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-[#0F1115] dark:text-[#E5E7EB] mb-6">Contact</h4>
            <ul className="space-y-4 text-[#6B7280] text-sm">
              <li className="font-medium">Email: <span className="text-[#0F1115] dark:text-[#E5E7EB]">hello@cogops.com</span></li>
              <li className="pt-2">
                <Link href="#hire" className="px-5 py-3 bg-[#2563eb] text-white rounded-xl font-bold hover:bg-blue-700 transition-all inline-block shadow-lg shadow-blue-500/20">
                  Book a Consultation
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-[#6B7280]/20 dark:border-[#1F2937] flex flex-col md:flex-row justify-between items-center gap-4 text-[#6B7280]">
          <p className="text-[10px] uppercase tracking-[0.2em] font-semibold">© CogOps. All rights reserved</p>
          <div className="flex gap-6 text-[10px] font-bold uppercase tracking-[0.2em]">
            <Link href="#" className="hover:text-[#0F1115] dark:hover:text-white transition-colors">Twitter</Link>
            <Link href="#" className="hover:text-[#0F1115] dark:hover:text-white transition-colors">LinkedIn</Link>
            <Link href="#" className="hover:text-[#0F1115] dark:hover:text-white transition-colors">Instagram</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}