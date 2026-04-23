'use client';
import { useEffect, useRef } from 'react';
import Image from 'next/image';
import { Linkedin, Mail, Facebook } from 'lucide-react';

export default function TeamSection() {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let animationFrameId: number;
    const scroll = () => {
      if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth / 2) {
        scrollContainer.scrollLeft = 0;
      } else {
        scrollContainer.scrollLeft += 2; 
      }
      animationFrameId = requestAnimationFrame(scroll);
    };

    animationFrameId = requestAnimationFrame(scroll);
    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  const founder = { 
    name: "David Utenwojo Usman", 
    role: "CEO & Founder", 
    bio: "A growth-focused operator with 5+ years of experience scaling ventures. At the intersection of tech and strategy, he builds high-impact systems like CogOps and Transiflow that drive measurable conversion and scale.", 
    img: "/team-img/founder.jpeg",
    linkedin: "https://www.linkedin.com/in/david-usman-120055275",
    facebook: "https://www.facebook.com/share/18RhVJMEdr/"
  };

  const executives = [
    { 
      name: "Jesse Yerima", 
      role: "Front-end Team Lead", 
      bio: "Directing project-based learning tracks and internal operational synchronization.", 
      img: "/team-img/front-end.jpg",
      linkedin: "#",
      facebook: "#"
    },
    // { 
    //     name: "Executive Name", 
    //     role: "Chief Operations", 
    //     bio: "Managing cross-functional team workflows and platform deployment.", 
    //     img: "/exec3.jpg",
    //     linkedin: "#",
    //     facebook: "#"
    // }
  ];

  const staff = [
    { name: "Domotimi Matthew", role: "UI/UX Designer", img: "/team-img/uiux02.jpg" },
    { name: "Predise Jessica", role: "UI/UX Designer", img: "/team-img/uiux01.jpg" },
    { name: "Akanni Abdulmuiz", role: "Graphics Designer", img: "/team-img/graphics01.jpeg", pos: "object-top" },
    { name: "Olorunpomi Temitope", role: "Graphics Designer", img: "/team-img/graphics02.jpg" },
    { name: "Dimeji Alatishe", role: "QA Team Lead", img: "/team-img/QAteam.jpg", pos: "object-top" },
    { name: "Ajisegiri Ni'imatullah ", role: "QA Tester", img: "/team-img/QATester.jpeg", pos: "object-top" },
    { name: "Francis Abigeal", role: "QA Tester", img: "/team-img/QA-tester.jpg" },
    { name: "Goodness Chukwu", role: "Social Media", img: "/team-img/socialmedia.jpg", pos: "object-top" },
    { name: "Emmanuella Chinweuba", role: "Content Creator", img: "/team-img/content.jpeg" },
    { name: "Oke Merrybell", role: "Virtual Assistant", img: "/team-img/virtual-assistant.jpg" },
    { name: "Ebiowei Rehoboth", role: "Copywriter", img: "/team-img/copyright.jpg" },
    { name: "Williams Pachuol", role: "Front-End Developer", img: "/team-img/front-end03.jpg", pos: "object-top" },
    { name: "Ajumobi Isaac Oluwadamisi", role: "Front-End Developer", img: "/team-img/front-end04.jpeg" },
    { name: "Tonia Onyeka", role: "Front-End Developer", img: "/team-img/web-dev.jpg", pos: "object-top" },
    { name: "Duru Pristine", role: "Back-End Developer", img: "/team-img/back-end01.jpg", pos: "object-top" },
    { name: "Victor Abuka", role: "Back-End Developer", img: "/team-img/back-end02.jpg", pos: "object-top" },
    { name: "Akolawole Fawemimo", role: "Back-End Developer", img: "/team-img/back-end03.jpg", pos: "object-top" },
    { name: "John Edokpolor", role: "Back-End Developer", img: "/team-img/back-endadd.jpeg" },
  ];

  const infiniteStaff = [...staff, ...staff];

  return (
    <section className="py-20 md:py-32 bg-white px-4 md:px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto mb-32">
        
        {/* FOUNDER SECTION */}
        <div className="mb-24">
            <h2 className="text-[10px] font-black text-[#6B7280] uppercase tracking-[0.4em] mb-4 text-center">Visionary Protocol</h2>
            <div className="bg-[#0F1115] rounded-[2rem] md:rounded-[3rem] p-6 md:p-16 text-white relative overflow-hidden group">
                <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-20 relative z-10">
                    <div className="relative w-full max-w-[280px] md:max-w-sm aspect-[4/5] rounded-[1.5rem] md:rounded-[2rem] overflow-hidden flex-shrink-0 shadow-2xl">
                        <Image 
    src={founder.img} 
    alt={founder.name} 
    fill 
    sizes="(max-width: 768px) 100vw, 400px" 
    priority 
    className="object-cover object-top grayscale group-hover:grayscale-0 transition-all duration-700 scale-110 group-hover:scale-100" 
  />
                    </div>
                    <div className="flex-1 text-center lg:text-left">
                        <p className="text-[#6B7280] font-black text-[10px] md:text-[11px] uppercase tracking-[0.4em] mb-4">Founder & Lead Operator</p>
                        <h3 className="text-3xl md:text-6xl lg:text-7xl font-black uppercase tracking-tighter mb-6 leading-none">{founder.name}</h3>
                        <p className="text-white/60 text-base md:text-lg lg:text-xl font-medium leading-relaxed mb-10 max-w-2xl">{founder.bio}</p>
                        <div className="flex justify-center lg:justify-start gap-8">
                            <a href={founder.linkedin} target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform"><Linkedin size={22} className="text-white/40 hover:text-white" /></a>
                            <a href={founder.facebook} target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform"><Facebook size={22} className="text-white/40 hover:text-white" /></a>
                            <Mail size={22} className="text-white/40 hover:text-white cursor-pointer" />
                        </div>
                    </div>
                </div>
            </div>
        </div>

        {/* EXECUTIVES SECTION */}
        <div className="mb-32">
            <h2 className="text-[10px] font-black text-[#6B7280] uppercase tracking-[0.4em] mb-4 text-center">Operational Board</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
            {executives.map((exec, i) => (
                <div key={i} className="group relative bg-[#F3F4F6] rounded-[2rem] md:rounded-[3rem] p-6 md:p-10 transition-all">
                <div className="flex flex-col sm:flex-row items-center gap-6 md:gap-8">
                    <div className="relative w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden flex-shrink-0 shadow-lg">
                    <Image src={exec.img} alt={exec.name} fill className="object-cover object-top grayscale group-hover:grayscale-0 transition-all duration-700" />
                    </div>
                    <div className="flex-1 text-center sm:text-left">
                    <h3 className="text-xl md:text-2xl font-black text-[#0F1115] uppercase tracking-tighter mb-1">{exec.name}</h3>
                    <p className="text-[#6B7280] font-black text-[9px] uppercase tracking-[0.3em] mb-4">[{exec.role}]</p>
                    <p className="text-[#0F1115] text-[11px] md:text-xs font-bold uppercase leading-relaxed mb-6">{exec.bio}</p>
                    <div className="flex justify-center sm:justify-start gap-4">
                        <Linkedin size={18} className="text-[#9CA3AF] hover:text-[#0F1115] cursor-pointer" />
                        <Mail size={18} className="text-[#9CA3AF] hover:text-[#0F1115] cursor-pointer" />
                    </div>
                    </div>
                </div>
                </div>
            ))}
            </div>
        </div>
      </div>

      {/* STAFF SCROLL - Responsive Circle Sizes */}
      <div className="relative border-y-2 border-[#F3F4F6] py-16 md:py-24">
        <div 
            ref={scrollRef} 
            className="flex gap-10 md:gap-16 overflow-hidden whitespace-nowrap"
        >
          {infiniteStaff.map((member, i) => (
            <div key={i} className="inline-block flex-shrink-0 group text-center px-2 md:px-4">
              {/* Responsive circle: w-32 on small mobile, w-48 on desktop */}
              <div className="relative w-32 h-32 md:w-48 md:h-48 mx-auto rounded-full overflow-hidden mb-6 md:mb-8 bg-[#F3F4F6] flex-shrink-0 aspect-square">
                <Image 
                    src={member.img} 
                    alt={member.name} 
                    fill 
                    className={`object-cover ${member.pos} scale-110 grayscale group-hover:grayscale-0 group-hover:scale-100 transition-all duration-700`}
                />
              </div>
              <h4 className="text-sm md:text-base font-black text-[#0F1115] uppercase tracking-normal">{member.name}</h4>
              <p className="text-[#6B7280] font-black text-[8px] md:text-[10px] uppercase tracking-[0.2em] mt-1 md:mt-2 italic">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}