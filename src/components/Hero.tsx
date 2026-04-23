'use client';
import { useEffect, useRef } from 'react';
import Link from 'next/link';
import { ArrowRight, Globe, Shield } from 'lucide-react';

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
  { num: '100%', label: 'Commitment' }, 
  { num: '16wk', label: 'Academy Track' },
  { num: '24/7', label: 'Ops Support' },
];

// const features = [
//   { icon: Terminal, label: 'Product Builds' },
//   { icon: Layers, label: 'System Design' },
//   { icon: Zap, label: 'Workflow Ops' },
//   { icon: Users, label: 'Skill Training' },
// ];

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-4 bg-white overflow-hidden min-h-screen flex flex-col justify-center">
      <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none">
        <svg width="100%" height="100%"><rect width="100%" height="100%" fill="url(#grid)" /></svg>
      </div>
      <ParticleCanvas />

      <div className="max-w-7xl mx-auto text-center relative z-10 w-full">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#F3F4F6] border border-[#E5E7EB] mb-8">
          <span className="w-1.5 h-1.5 rounded-full bg-[#0F1115] animate-pulse" />
          <span className="text-[10px] font-black uppercase tracking-[0.3em] text-[#0F1115]">
            v1.0 // THE EXECUTION PROTOCOL
          </span>
        </div>

        {/* PUNCHIER HEADLINE */}
        <h1 className="text-6xl sm:text-8xl md:text-9xl lg:text-[11rem] font-black text-[#0F1115] leading-[0.85] tracking-tighter uppercase mb-8 animate-fade-up">
          WE BUILD.<br />
          <span className="text-[#6B7280]">YOU SCALE.</span>
        </h1>

        {/* CLEARER SUBTEXT (The "Who & What") */}
        <p className="text-lg md:text-2xl text-[#6B7280] max-w-3xl mx-auto leading-tight font-bold mb-12 px-4 uppercase tracking-tight">
          A Technical Powerhouse for <span className="text-[#0F1115]">Visionary Founders</span> and a 
          High-Performance Academy for the <span className="text-[#0F1115]">Next Generation of Builders.</span>
        </p>

        {/* BIGGER, OBVIOUS CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full max-w-2xl mx-auto px-4 mb-20">
          <Link href="/hire" className="w-full sm:w-auto">
            <button className="w-full sm:min-w-[240px] px-8 py-6 bg-[#0F1115] text-white font-black rounded-2xl hover:scale-105 transition-all shadow-2xl flex items-center justify-center gap-3 uppercase tracking-widest text-sm">
              Initiate Project <ArrowRight size={20} />
            </button>
          </Link>
          <Link href="/academy" className="w-full sm:w-auto">
            <button className="w-full sm:min-w-[240px] px-8 py-6 bg-white border-[3px] border-[#0F1115] text-[#0F1115] font-black rounded-2xl hover:bg-[#F3F4F6] transition-all text-sm uppercase tracking-widest">
              Join Academy
            </button>
          </Link>
        </div>

        {/* LIVELY STATS BAR */}
        <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-60">
          {stats.map(({ num, label }) => (
            <div key={label} className="text-center">
              <span className="block text-3xl font-black text-[#0F1115] tracking-tighter uppercase">{num}</span>
              <span className="block text-[10px] font-bold uppercase tracking-[0.2em] text-[#6B7280]">{label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}