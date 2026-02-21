'use client';
import { useState, useMemo } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import { Search, Clock, BarChart, BookOpen, Lock, X } from 'lucide-react';

export default function CoursesPage() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const activeFilter = searchParams.get('filter') || 'all';
  const [searchQuery, setSearchQuery] = useState('');

  const courses = [
    { 
      id: 1, 
      title: "Foundational Workflow Ops", 
      category: "growth-ops", 
      level: "Intermediate", 
      duration: "6 Weeks", 
      status: "Locked" 
    },
    { 
      id: 2, 
      title: "Full-Stack System Design", 
      category: "development", 
      level: "Advanced", 
      duration: "12 Weeks", 
      status: "Available" 
    },
    { 
      id: 3, 
      title: "Brand Identity Frameworks", 
      category: "design-ux", 
      level: "Beginner", 
      duration: "4 Weeks", 
      status: "Available" 
    },
  ];

  const filteredCourses = useMemo(() => {
    return courses.filter(course => {
      const matchesSearch = course.title.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = activeFilter === 'all' || course.category === activeFilter;
      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, activeFilter]);

  const clearFilters = () => {
    setSearchQuery('');
    router.push('/courses?filter=all');
  };

  return (
    <div className="min-h-screen bg-white pt-32 pb-20 px-4 md:px-6">
      <div className="max-w-7xl mx-auto">

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div className="max-w-2xl">
            <h1 className="text-5xl md:text-8xl font-black text-[#0F1115] uppercase tracking-tighter leading-[0.8] mb-6">
              Curriculum<span className="text-[#6B7280]">.</span>
            </h1>
            <div className="flex flex-wrap items-center gap-3">
              <p className="text-[#6B7280] font-bold text-xs uppercase tracking-widest">
                Filtered by: 
              </p>
              <span className="px-3 py-1 bg-[#0F1115] text-white text-[10px] font-black uppercase rounded-md tracking-tighter">
                {activeFilter.replace(/-/g, ' ')}
              </span>
              {activeFilter !== 'all' && (
                <button onClick={clearFilters} className="text-[#6B7280] hover:text-[#0F1115] transition-colors">
                  <X size={14} />
                </button>
              )}
            </div>
          </div>

          <div className="relative w-full md:w-96 group">
            <div className="absolute left-6 top-[52%] -translate-y-1/2 z-10 pointer-events-none">
            <Search className="text-[#6B7280]" size={18} />
            </div>
            <input 
              type="text" 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search technical modules..." 
              className="w-full pl-14 pr-6 py-5 bg-[#F3F4F6] border-2 border-transparent rounded-2xl outline-none focus:bg-white focus:border-[#0F1115] transition-all font-bold text-sm text-[#0F1115] placeholder:text-[#9CA3AF]"
            />
          </div>
        </div>

        {filteredCourses.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {filteredCourses.map((course) => (
              <div key={course.id} className="group relative border-2 border-[#E5E7EB] rounded-[2.5rem] p-8 hover:border-[#0F1115] transition-all flex flex-col h-full bg-white hover:shadow-[0_20px_50px_rgba(0,0,0,0.1)]">
                <div className="flex justify-between items-start mb-8">
                  <span className="px-3 py-1 bg-[#F3F4F6] rounded-lg text-[9px] font-black uppercase tracking-widest text-[#0F1115]">
                    {course.category.replace(/-/g, ' ')}
                  </span>
                  {course.status === "Locked" ? (
                    <div className="p-2 bg-[#F3F4F6] rounded-full text-[#9CA3AF]">
                      <Lock size={14} />
                    </div>
                  ) : (
                    <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                  )}
                </div>
                
                <h3 className="text-2xl md:text-3xl font-black text-[#0F1115] mb-8 leading-tight uppercase">
                  {course.title}
                </h3>

                <div className="mt-auto space-y-6">
                  <div className="grid grid-cols-2 gap-6 border-t border-[#E5E7EB] pt-6">
                    <div className="space-y-1">
                      <p className="text-[8px] font-black text-[#6B7280] uppercase tracking-widest">Duration</p>
                      <div className="flex items-center gap-2 text-[#0F1115]">
                        <Clock size={12} />
                        <span className="text-[10px] font-black uppercase">{course.duration}</span>
                      </div>
                    </div>
                    <div className="space-y-1">
                      <p className="text-[8px] font-black text-[#6B7280] uppercase tracking-widest">Expertise</p>
                      <div className="flex items-center gap-2 text-[#0F1115]">
                        <BarChart size={12} />
                        <span className="text-[10px] font-black uppercase">{course.level}</span>
                      </div>
                    </div>
                  </div>

                  <button 
                    onClick={() => alert("The technical syllabus for this module is currently being finalized. Please check back soon.")}
                    className="w-full py-5 bg-[#0F1115] text-white rounded-2xl font-black uppercase tracking-[0.2em] text-[10px] hover:bg-[#1F2937] transition-all flex items-center justify-center gap-3 active:scale-[0.97]"
                    >
                    View Syllabus <BookOpen size={14} />
                    </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="py-20 text-center border-2 border-dashed border-[#E5E7EB] rounded-[3rem]">
            <Search size={40} className="mx-auto mb-4 text-[#E5E7EB]" />
            <h3 className="text-xl font-black text-[#0F1115] uppercase">No Modules Found</h3>
            <p className="text-[#6B7280] font-medium mt-2 mb-6">Try adjusting your search or category filter.</p>
            <button onClick={clearFilters} className="px-6 py-3 bg-[#0F1115] text-white font-black text-[10px] uppercase rounded-xl">Clear All</button>
          </div>
        )}
      </div>
    </div>
  );
}