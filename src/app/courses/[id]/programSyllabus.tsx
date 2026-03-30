'use client';
import { CheckCircle2, Circle } from 'lucide-react';

interface SyllabusStep {
  week: string;
  title: string;
  topics: string[];
}

export default function ProgramSyllabus({ trackId }: { trackId: string }) {
  const syllabusData: Record<string, SyllabusStep[]> = {
    "frontend-development": [
      { week: "01-04", title: "Core Execution Foundation", topics: ["Digital Systems", "Agile Discipline", "Tools & Workflow", "Brief Breakdown"] },
      { week: "05-08", title: "Frontend Core", topics: ["HTML5 / CSS3 Mastery", "Responsive Design Architecture", "JavaScript Fundamentals"] },
      { week: "09-12", title: "Advanced Frontend", topics: ["React Framework", "API Integration", "State Management", "Performance Optimization"] },
      { week: "13-16", title: "Execution Residency", topics: ["Cross-functional Squads", "Sprint Planning", "Live Project Demo"] }
    ],
    "backend-development": [
      { week: "01-04", title: "Core Execution Foundation", topics: ["Digital Systems", "Agile Discipline", "Tools & Workflow", "Brief Breakdown"] },
      { week: "05-08", title: "Backend Core", topics: ["Node.js & Express", "REST API Design", "MongoDB Database Architecture"] },
      { week: "09-12", title: "Advanced Backend", topics: ["Authentication Systems", "Middleware Security", "Cloud Deployment Basics"] },
      { week: "13-16", title: "Execution Residency", topics: ["Live Product Feature Work", "API Documentation", "QA Revision Rounds"] }
    ],
    "ui-ux-design": [
      { week: "01-04", title: "Core Execution Foundation", topics: ["Product Thinking", "Task Breakdown", "Documentation Culture", "Client Simulation"] },
      { week: "05-08", title: "Design Fundamentals", topics: ["Design Principles", "User Research Basics", "Wireframing", "Figma Fundamentals"] },
      { week: "09-12", title: "Advanced UX/UI", topics: ["Design Systems", "High-Fidelity Prototyping", "Usability Testing", "Developer Handoff"] },
      { week: "13-16", title: "Execution Residency", topics: ["Product UI Case Study", "Sprint Collaboration", "Design Revision Cycles"] }
    ],
    "qa-software-testing": [
      { week: "01-04", title: "Core Execution Foundation", topics: ["SDLC Understanding", "Agile Sprints", "Communication Standards", "Logic Testing"] },
      { week: "05-08", title: "Manual QA Core", topics: ["Manual Testing Principles", "Writing Test Cases", "Bug Tracking", "Requirement Analysis"] },
      { week: "09-12", title: "Automation & Advanced", topics: ["Regression Testing", "Test Planning", "Automation Basics", "Performance Testing"] },
      { week: "13-16", title: "Execution Residency", topics: ["Real App Testing", "QA Documentation Pack", "Stakeholder Reporting"] }
    ]
  };

  const steps = syllabusData[trackId] || [];

  return (
    <div className="space-y-12 mt-16">
      <div className="flex items-center gap-2">
        <div className="w-1 h-1 bg-[#0F1115] rounded-full" />
        <h3 className="text-[10px] font-black uppercase tracking-[0.4em] text-[#0F1115]">
            CogOps Syllabus Pipeline
        </h3>
      </div>
      
      <div className="space-y-12">
        {steps.map((step, i) => (
          <div key={i} className="relative pl-10 border-l-2 border-[#E5E7EB] last:border-transparent">
        
            <div className="absolute -left-[9px] top-0 bg-white p-1">
              <Circle size={14} className="text-[#0F1115] fill-white" />
            </div>

            <div className="mb-4">
              <span className="text-[9px] font-black text-[#6B7280] uppercase tracking-widest">
                Weeks {step.week}
              </span>
              <h4 className="text-xl font-black text-[#0F1115] uppercase tracking-tight">
                {step.title}
              </h4>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {step.topics.map((topic, j) => (
                <div key={j} className="flex items-center gap-2 text-[11px] font-bold text-[#6B7280] uppercase">
                  <CheckCircle2 size={12} className="text-[#0F1115]" /> 
                  {topic}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}