import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-slate-800 pt-16 pb-8 px-6 text-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Info */}
          <div className="lg:col-span-2">
            <Link href="/" className="text-2xl font-black tracking-tighter uppercase">
              COG<span className="text-blue-500">OPS</span>
            </Link>
            <p className="mt-6 text-slate-400 max-w-sm leading-relaxed text-sm">
              CogOps is a tech-savvy agency and learning institution helping founders, brands, and 
              individuals build, grow, and stay relevant in a digital world.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-white mb-6">Explore</h4>
            <ul className="space-y-4 text-slate-400 text-sm">
              <li><Link href="#about" className="hover:text-blue-400 transition-colors">Our Story</Link></li>
              <li><Link href="#services" className="hover:text-blue-400 transition-colors">Agency Services</Link></li>
              <li><Link href="#academy" className="hover:text-blue-400 transition-colors">Academy</Link></li>
              <li><Link href="#insights" className="hover:text-blue-400 transition-colors">Insights (Blog)</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-white mb-6">Contact</h4>
            <ul className="space-y-4 text-slate-400 text-sm">
              <li>Email: hello@cogops.com</li>
              <li>
                <Link href="#hire" className="px-4 py-2 bg-blue-600/10 border border-blue-500/30 text-blue-400 rounded-lg hover:bg-blue-600/20 transition-all inline-block">
                  Book a Consultation
                </Link>
              </li>
            </ul>
          </div>
        </div>

 
        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-slate-500 uppercase tracking-widest">
            © CogOps. All rights reserved
          </p>
          <div className="flex gap-6 text-xs font-bold text-slate-500 uppercase tracking-widest">
             <Link href="#" className="hover:text-white transition-colors">Twitter</Link>
             <Link href="#" className="hover:text-white transition-colors">LinkedIn</Link>
             <Link href="#" className="hover:text-white transition-colors">Instagram</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}