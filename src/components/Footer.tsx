import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-slate-50 dark:bg-[#0F1115] border-t border-slate-200 dark:border-[#1F2937] pt-16 pb-8 px-6 transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div className="lg:col-span-2">
            <div className="lg:col-span-2 mb-8 lg:mb-0">
              <Link href="/" className="relative inline-block h-16 w-48 md:h-20 md:w-56 mb-6">
                <Image
                  src="/cogops-logo.png"
                  alt="CogOps Logo"
                  fill
                  priority
                  className="object-contain object-left transition-all duration-300 dark:invertdark:brightness-[1.5] dark:contrast-[0.8] dark:opacity-90"
                />
              </Link>
              <p className="mt-4 text-slate-600 dark:text-[#6B7280] max-w-sm leading-relaxed text-base">
                CogOps is a tech-savvy agency and learning institution helping founders, brands, and
                individuals build, grow, and stay relevant in a digital world.
              </p>
            </div>
            <p className="mt-6 text-slate-600 dark:text-[#6B7280] max-w-sm leading-relaxed text-sm">
              CogOps is a tech-savvy agency and learning institution helping founders, brands, and
              individuals build, grow, and stay relevant in a digital world.
            </p>
          </div>

          <div>
            <h4 className="font-bold text-slate-900 dark:text-[#E5E7EB] mb-6">Explore</h4>
            <ul className="space-y-4 text-slate-600 dark:text-[#6B7280] text-sm">
              <li><Link href="#about" className="hover:text-blue-600 transition-colors">Our Story</Link></li>
              <li><Link href="#services" className="hover:text-blue-600 transition-colors">Agency Services</Link></li>
              <li><Link href="#academy" className="hover:text-blue-600 transition-colors">Academy</Link></li>
              <li><Link href="#insights" className="hover:text-blue-600 transition-colors">Insights (Blog)</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-slate-900 dark:text-[#E5E7EB] mb-6">Contact</h4>
            <ul className="space-y-4 text-slate-600 dark:text-[#6B7280] text-sm">
              <li>Email: hello@cogops.com</li>
              <li>
                <Link href="#hire" className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all inline-block">
                  Book a Consultation
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-200 dark:border-[#1F2937] flex flex-col md:flex-row justify-between items-center gap-4 text-slate-500 dark:text-[#6B7280]">
          <p className="text-xs uppercase tracking-widest">© CogOps. All rights reserved</p>
          <div className="flex gap-6 text-xs font-bold uppercase tracking-widest">
            <Link href="#" className="hover:text-slate-900 dark:hover:text-white transition-colors">Twitter</Link>
            <Link href="#" className="hover:text-slate-900 dark:hover:text-white transition-colors">LinkedIn</Link>
            <Link href="#" className="hover:text-slate-900 dark:hover:text-white transition-colors">Instagram</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}