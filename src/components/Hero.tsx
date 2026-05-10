'use client';
import { useEffect, useRef } from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';

// ParticleCanvas logic (Changed particles to white so they show up)
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
        ctx.fillStyle = 'rgba(255,255,255,0.15)'; // Light particles for dark BG
        ctx.fill();
      });
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const a = particles[i], b = particles[j];
          const d = Math.hypot(a.x - b.x, a.y - b.y);
          if (d < 110) {
            ctx.beginPath();
            ctx.moveTo(a.x, a.y); ctx.lineTo(b.x, b.y);
            ctx.strokeStyle = `rgba(255,255,255,${0.05 * (1 - d / 110)})`;
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

  return <canvas ref={ref} className="absolute inset-0 w-full h-full pointer-events-none z-10" />;
}

export default function Hero() {
  return (
    <section className="relative min-h-screen w-full flex items-center overflow-hidden bg-[#0F1115]">

      {/* LAYER 1: THE BACKGROUND */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/hero-visuals.jpeg"
          alt="CogOps Background"
          fill
          priority
          className="object-cover object-center scale-105"
        />
        {/* GLOBAL DARKEN */}
        <div className="absolute inset-0 z-10 bg-black/50" />
        {/* TEXT PROTECTION GRADIENT */}
        <div className="absolute inset-0 z-10 bg-gradient-to-r from-[#0F1115] via-[#0F1115]/40 to-transparent" />
        {/* NAVBAR PROTECTION (Fades image to solid color at top) */}
        <div className="absolute top-0 left-0 w-full h-32 z-10 bg-gradient-to-b from-[#0F1115] to-transparent" />
      </div>

      <ParticleCanvas />

      {/* LAYER 4: THE CONTENT */}
      <div className="max-w-7xl mx-auto px-6 relative z-30 w-full py-24">
        <div className="max-w-4xl">

          <h1 className="text-6xl sm:text-8xl md:text-9xl lg:text-[11rem] font-black text-white leading-[0.82] tracking-tighter uppercase mb-10 drop-shadow-2xl">
            WE BUILD.<br />
            <span className="text-white/20">YOU SCALE.</span>
          </h1>

          <p className="text-lg md:text-2xl text-white/80 max-w-2xl leading-tight font-bold mb-14 uppercase tracking-tight">
            A Technical Powerhouse for <span className="text-white underline decoration-2 underline-offset-4">Visionary Founders</span> and a
            High-Performance Academy for the <span className="text-[#6B7280]">Next Generation of Builders.</span>
          </p>

          {/* Action Area */}
          <div className="flex flex-col sm:flex-row items-center gap-5 mb-20">
            <Link href="/hire" className="w-full sm:w-auto">
              <button className="shine-effect w-full sm:min-w-[240px] px-10 py-6 bg-[#0F1115] text-white font-black rounded-2xl hover:scale-[1.02] active:scale-95 transition-all animate-glisten flex items-center justify-center gap-3 uppercase tracking-[0.2em] text-[11px] shadow-2xl">
                Initiate Project <ArrowRight size={20} />
              </button>

            </Link>
            <Link href="/academy" className="w-full sm:w-auto">
              <button className="w-full sm:min-w-[240px] px-10 py-6 bg-transparent backdrop-blur-md border-[3px] border-white/20 text-white font-black rounded-2xl hover:bg-white hover:text-[#0F1115] transition-all text-[11px] uppercase tracking-[0.2em]">
                Join Academy
              </button>
            </Link>
          </div>

          {/* Statistics Section (White Text for Visibility) */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-12 max-w-2xl">
            {[
              { num: '100%', label: 'Commitment' },
              { num: '16wk', label: 'Academy Track' },
              { num: '24/7', label: 'Ops Support' }
            ].map(({ num, label }) => (
              <div key={label} className="border-l-[3px] border-white/40 pl-5 py-1">
                <span className="block text-3xl font-black text-white tracking-tighter uppercase">{num}</span>
                <span className="block text-[9px] font-bold uppercase tracking-[0.3em] text-gray-400">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}