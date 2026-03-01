'use client';
import { useEffect, useRef } from 'react';
import Image from 'next/image';
import { Linkedin, Mail } from 'lucide-react';

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
        scrollContainer.scrollLeft += 1;
      }
      animationFrameId = requestAnimationFrame(scroll);
    };

    animationFrameId = requestAnimationFrame(scroll);
    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  const executives = [
    { name: "Executive Name", role: "CEO & Founder", bio: "Leading the bridge between vision and execution.", img: "/exec1.jpg" },
    { name: "Executive Name", role: "Head of Academy", bio: "Directing project-based learning tracks.", img: "/exec2.jpg" }
  ];

  const staff = [
    { name: "David Usman", role: "Product Manager", img: "/team-img/project-manager.jpg" },
    { name: "Domotimi Matthew", role: "UI/UX Designer", img: "/team-img/uiux02.jpg" },
    { name: "Predise Jessica", role: "UI/UX Designer", img: "/team-img/uiux01.jpg" },
    { name: "Akanni Abdulmuiz", role: "Graphics Designer", img: "/team-img/graphics01.jpg" },
    { name: "Olorunpomi Temitope", role: "Graphics Designer", img: "/team-img/graphics02.jpg" },
    { name: "Dimeji Alatishe", role: "QA Team Lead", img: "/team-img/QAteam.jpg" },
    { name: "Francis Abigeal", role: "QA Tester", img: "/team-img/QA-tester.jpg" },
    { name: "Goodness Chukwu", role: "Social Media", img: "/team-img/socialmedia.jpg" },
    { name: "Oke Merrybell", role: "Virtual Assistant", img: "/team-img/virtual-assistant.jpg" },
    { name: "Ebiowei Rehoboth", role: "Copyright", img: "/team-img/copyright.jpg" },
    { name: "Jesse Yerima", role: "Front-End Developer", img: "/team-img/front-end.jpg" },
    { name: "Olatunde Samuel", role: "Front-End Developer", img: "/team-img/front-end02.jpg" },
    { name: "Williams Pachuol", role: "Front-End Developer", img: "/team-img/front-end03.jpg" },
    { name: "Tonia Onyeka", role: "Front-End Developer", img: "/team-img/web-dev.jpg" },
    { name: "Duru Pristine", role: "Back-End Developer", img: "/team-img/back-end01.jpg" },
    { name: "Victor Abuka", role: "Back-End Developer", img: "/team-img/back-end02.jpg" },
    { name: "Akolawole Fawemimo", role: "Back-End Developer", img: "/team-img/back-end03.jpg" },
  ];

  const infiniteStaff = [...staff, ...staff];

  return (
    <section className="py-32 bg-white px-4 md:px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto mb-32">
        <h2 className="text-[10px] font-black text-[#6B7280] uppercase tracking-[0.4em] mb-4 text-center">Leadership Protocol</h2>
        <h3 className="text-5xl md:text-8xl font-black text-[#0F1115] uppercase tracking-tighter mb-20 text-center leading-none">
          The Board<span className="text-[#6B7280]">.</span>
        </h3>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {executives.map((exec, i) => (
            <div key={i} className="group relative bg-[#F3F4F6] rounded-[3rem] p-8 md:p-12 border-2 border-transparent hover:border-[#0F1115] transition-all">
              <div className="flex flex-col md:flex-row items-center gap-12">
                <div className="relative w-full md:w-64 aspect-[4/5] rounded-[2rem] overflow-hidden bg-white">
                  <Image src={exec.img} alt={exec.name} fill className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700" />
                </div>
                <div className="flex-1">
                  <h3 className="text-3xl font-black text-[#0F1115] uppercase tracking-tighter mb-2 leading-none">{exec.name}</h3>
                  <p className="text-[#6B7280] font-black text-[10px] uppercase tracking-[0.3em] mb-6">[{exec.role}]</p>
                  <p className="text-[#0F1115] text-sm font-bold uppercase leading-relaxed mb-8">{exec.bio}</p>
                  <div className="flex gap-4">
                    <Linkedin size={18} className="text-[#9CA3AF] hover:text-[#0F1115] cursor-pointer transition-colors" />
                    <Mail size={18} className="text-[#9CA3AF] hover:text-[#0F1115] cursor-pointer transition-colors" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="relative border-y-2 border-[#F3F4F6] py-20">
        <div 
          ref={scrollRef}
          className="flex gap-12 overflow-hidden whitespace-nowrap"
        >
          {infiniteStaff.map((member, i) => (
            <div key={i} className="inline-block min-w-[240px] group text-center">
              <div className="relative w-40 h-40 mx-auto rounded-full overflow-hidden mb-6 bg-[#F3F4F6]">
                <Image src={member.img} alt={member.name} fill className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700 ease-in-out" />
              </div>
              <h4 className="text-sm font-black text-[#0F1115] uppercase tracking-tighter">{member.name}</h4>
              <p className="text-[#6B7280] font-black text-[9px] uppercase tracking-[0.2em] mt-1 italic">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}