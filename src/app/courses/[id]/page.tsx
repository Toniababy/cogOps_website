'use client';
import { useParams } from 'next/navigation';
import { ArrowLeft, Zap, ShieldCheck, Trophy, MessageSquare } from 'lucide-react';
import Link from 'next/link';
import ProgramSyllabus from './programSyllabus';
import api from '@/app/utils/api';
import { toast } from 'react-toastify';

export default function CourseDetailPage() {
  const params = useParams();
  const courseId = params.id as string;

  const curriculumContent: Record<string, any> = {
    "frontend-development": { title: "Frontend Development", description: "Mastering responsive design, React, and high-performance API integrations.", outcome: "Build and deploy a functional web application." },
    "backend-development": { title: "Backend Development", description: "Engineering secure REST APIs, MongoDB architecture, and production-ready services.", outcome: "Build a production-ready backend service." },
    "ui-ux-design": { title: "UI/UX Design", description: "User research, wireframing, design systems, and developer handoff logic.", outcome: "Complete full product UI case study." },
    "qa-software-testing": { title: "QA / Software Testing", description: "Manual testing, bug tracking, and automation basics.", outcome: "Test a real web application." }
  };

  const currentCourse = curriculumContent[courseId] || { title: "Technical Module", description: "Architecture of scalable systems." };

  const handleEnrollment = async () => {
    try {
      const userName = localStorage.getItem('userName') || "Student";
      const userEmail = localStorage.getItem('userEmail') || "applicant@cogops.com";

      // 1. Log request to Backend
      await api.post('/hire/submit', {
        name: `ENROLLMENT: ${userName}`,
        email: userEmail,
        message: `COURSE INTEREST: ${currentCourse.title}. Redirecting to WhatsApp for payment.`
      });

      // 2. Immediate WhatsApp Redirect
      const phoneNumber = "2348118102821";
      const text = `Hello CogOps, I'm ${userName}. I want to enroll for the [${currentCourse.title}] track. Please guide me on the payment process.`;
      window.open(`https://wa.me/${phoneNumber}?text=${text}`, '_blank');
      
      toast.success("Redirecting to Admission Office...", { theme: "dark" });
    } catch (err) {
      toast.error("Network Error. Please try WhatsApp directly.");
    }
  };

  return (
    <div className="bg-white min-h-screen pt-32 pb-20 px-4">
      <div className="max-w-6xl mx-auto">
        <Link href="/courses" className="inline-flex items-center gap-2 text-[#6B7280] hover:text-[#0F1115] font-black text-[10px] uppercase tracking-widest mb-10 group">
          <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" />
          Back to Curriculum
        </Link>

        <div className="flex flex-col lg:flex-row gap-16">
          <div className="flex-1">
            <div className="mb-12">
              <span className="text-[10px] font-black text-[#6B7280] uppercase tracking-[0.4em]">Specialization Track</span>
              <h1 className="text-4xl md:text-6xl font-black text-[#0F1115] tracking-tighter mb-4">
                {currentCourse.title}
              </h1>
              <p className="text-[#6B7280] text-lg font-medium italic max-w-2xl">
                {currentCourse.description}
              </p>
            </div>
            <ProgramSyllabus trackId={courseId} />
          </div>

          <div className="w-full lg:w-80">
            <div className="sticky top-32 p-8 bg-[#F3F4F6] rounded-[2.5rem] border border-[#E5E7EB]">
              <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-[#0F1115] mb-6">Outcome Logic</h4>
              <p className="text-[11px] font-bold text-[#6B7280] mb-8 italic leading-relaxed">"{currentCourse.outcome}"</p>
              
              <button
                onClick={handleEnrollment}
                className="w-full py-5 bg-[#0F1115] text-white rounded-xl font-black text-[10px] uppercase tracking-widest hover:bg-[#1F2937] transition-all flex items-center justify-center gap-2"
              >
                <MessageSquare size={16} /> Enroll via WhatsApp
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}