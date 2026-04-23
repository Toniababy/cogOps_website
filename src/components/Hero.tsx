'use client';
import { useEffect, useRef } from 'react';
import Link from 'next/link';
import { ArrowRight, Terminal, Layers, Zap, Users, Globe } from 'lucide-react';

function ParticleCanvas() {
  const ref = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    const canvas = ref.current!;
    const ctx = canvas.getContext('2d')!;
    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    const particles = Array.from({ length: 60 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.3,
      vy: (Math.random() - 0.5) * 0.3,
      r: Math.random() * 1.2 + 0.4,
    }));

    let raf: number;
    function draw() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach(p => {
        p.x += p.vx; p.y += p.vy;
        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(15,17,21,0.2)';
        ctx.fill();
      });
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const a = particles[i], b = particles[j];
          const d = Math.hypot(a.x - b.x, a.y - b.y);
          if (d < 110) {
            ctx.beginPath();
            ctx.moveTo(a.x, a.y); ctx.lineTo(b.x, b.y);
            ctx.strokeStyle = `rgba(15,17,21,${0.07 * (1 - d / 110)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }
      raf = requestAnimationFrame(draw);
    }
    draw();
    return () => { cancelAnimationFrame(raf); window.removeEventListener('resize', resize); };
  }, []);

  return (
    <canvas
      ref={ref}
      className="absolute inset-0 w-full h-full pointer-events-none z-0"
    />
  );
}

const stats = [
  { num: '1+', label: 'Projects Built' },
  { num: '16wk', label: 'Academy Program' },
  { num: '20+', label: 'Team Members' },
];

const features = [
  { icon: Terminal, label: 'Product Builds' },
  { icon: Layers, label: 'System Design' },
  { icon: Zap, label: 'Workflow Ops' },
  { icon: Users, label: 'Skill Training' },
];

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 md:pt-44 md:pb-32 px-4 bg-white overflow-hidden min-h-[95vh] flex flex-col justify-center">

      {/* Grid background */}
      <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#0F1115" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      {/* Particles */}
      <ParticleCanvas />

      <div className="max-w-7xl mx-auto text-center relative z-10 w-full">

        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#F3F4F6] border border-[#E5E7EB] mb-6 md:mb-10">
          <span className="w-1.5 h-1.5 rounded-full bg-[#0F1115] animate-pulse" />
          <Globe size={12} className="text-[#0F1115]" />
          <span className="text-[9px] md:text-[10px] font-black uppercase tracking-[0.2em] text-[#0F1115] whitespace-nowrap">
            Engineering the Future of Work
          </span>
        </div>

        {/* Headline */}
        <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black text-[#0F1115] leading-[0.95] tracking-tighter uppercase mb-6 md:mb-8 animate-fade-up">
          Build <span className="text-[#6B7280]">Better</span>.<br />
          Scale Faster.
        </h1>

        {/* Subtext */}
        <p className="text-base md:text-xl text-[#6B7280] max-w-2xl mx-auto leading-relaxed font-medium mb-8 md:mb-10 px-4">
          A dedicated technical partner for visionary founders and
          a hands-on academy for the next generation of tech leaders.
        </p>

        {/* Stats bar */}
        <div className="grid grid-cols-3 gap-3 max-w-sm mx-auto mb-10 md:mb-12">
          {stats.map(({ num, label }) => (
            <div key={label} className="bg-[#F9FAFB] border border-[#E5E7EB] rounded-xl py-3 px-2 text-center">
              <span className="block text-xl md:text-2xl font-black text-[#0F1115]">{num}</span>
              <span className="block text-[7px] md:text-[8px] font-bold uppercase tracking-widest text-[#6B7280] mt-0.5">{label}</span>
            </div>
          ))}
        </div>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-6 w-full max-w-3xl mx-auto px-4 mb-16 md:mb-24">
          <Link href="/hire" className="w-full sm:w-auto">
            <button className="w-full sm:min-w-[200px] px-8 py-5 bg-[#0F1115] text-white font-black rounded-xl hover:bg-[#1F2937] transition-all shadow-xl active:scale-95 text-sm md:text-lg flex items-center justify-center gap-3 uppercase tracking-widest whitespace-nowrap">
              Hire Agency <ArrowRight size={18} />
            </button>
          </Link>
          <Link href="/academy" className="w-full sm:w-auto">
            <button className="w-full sm:min-w-[200px] px-8 py-5 bg-white border-[2px] border-[#0F1115] text-[#0F1115] font-black rounded-xl hover:bg-[#F3F4F6] transition-all shadow-[6px_6px_0px_0px_rgba(15,17,21,0.1)] active:translate-x-1 active:translate-y-1 active:shadow-none text-sm md:text-lg uppercase tracking-widest whitespace-nowrap">
              Our Academy
            </button>
          </Link>
        </div>

        {/* Icon row */}
        <div className="pt-10 border-t border-[#E5E7EB] grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {features.map(({ icon: Icon, label }) => (
            <div key={label} className="flex flex-col items-center gap-2 group">
              <div className="w-9 h-9 rounded-lg bg-[#F3F4F6] border border-[#E5E7EB] flex items-center justify-center group-hover:bg-[#0F1115] transition-colors">
                <Icon size={16} className="text-[#0F1115] group-hover:text-white transition-colors" />
              </div>
              <span className="font-black text-[8px] md:text-[9px] uppercase tracking-widest text-[#6B7280] whitespace-nowrap">
                {label}
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}