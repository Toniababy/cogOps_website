'use client';
import { useParams } from 'next/navigation';
import { ArrowLeft, Zap, ShieldCheck, Trophy } from 'lucide-react';
import Link from 'next/link';

export default function CourseDetailPage() {
  const params = useParams();
  const courseId = params.id; 

  return (
    <div className="bg-white min-h-screen pt-32 pb-20 px-4">
      <div className="max-w-6xl mx-auto">

        <Link href="/courses" className="inline-flex items-center gap-2 text-[#6B7280] hover:text-[#0F1115] font-black text-[10px] uppercase tracking-widest mb-10 transition-all group">
          <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" /> 
          Back to Curriculum
        </Link>

        <div className="flex flex-col lg:flex-row gap-16">
          <div className="flex-1">
            <div className="mb-12">
              <h1 className="text-4xl md:text-6xl font-black text-[#0F1115] uppercase tracking-tighter mb-4">
                Technical Module {courseId}
              </h1>
              <p className="text-[#6B7280] text-lg font-medium italic max-w-2xl">
                Mastering the architecture of scalable systems through project-based execution.
              </p>
            </div>

            <ProgramSyllabus />
          </div>

          <div className="w-full lg:w-80">
            <div className="sticky top-32 p-8 bg-[#F3F4F6] rounded-[2.5rem] border border-[#E5E7EB]">
              <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-[#0F1115] mb-6">Outcome Logic</h4>
              
              <ul className="space-y-4 mb-8">
                {[
                  { icon: <Zap size={14}/>, text: "High-speed execution" },
                  { icon: <ShieldCheck size={14}/>, text: "Industry certification" },
                  { icon: <Trophy size={14}/>, text: "Portfolio project" }
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-[11px] font-bold text-[#6B7280] uppercase">
                    <span className="text-[#0F1115]">{item.icon}</span>
                    {item.text}
                  </li>
                ))}
              </ul>

              <button className="w-full py-4 bg-[#0F1115] text-white rounded-xl font-black text-[10px] uppercase tracking-widest hover:bg-[#1F2937] transition-all">
                Enroll in {courseId}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}