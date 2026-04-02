"use client";

import { useState, useMemo } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import { Search, Clock, BarChart, BookOpen, Lock, X } from 'lucide-react';

export default function CoursesContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const activeFilter = searchParams.get('filter') || 'all';
  const [searchQuery, setSearchQuery] = useState('');

  const courses = [
    {
      id: "frontend-development",
      title: "Frontend Engineering & Interaction",
      category: "development",
      level: "Intermediate",
      duration: "8 Weeks",
      status: "Available",
      phase: "Phase 2"
    },
    {
      id: "backend-development",
      title: "Backend Architecture & Logic",
      category: "development",
      level: "Advanced",
      duration: "8 Weeks",
      status: "Available",
      phase: "Phase 2"
    },
    {
      id: "ui-ux-design",
      title: "Product Design & UX Research",
      category: "design-ux",
      level: "Beginner",
      duration: "8 Weeks",
      status: "Available",
      phase: "Phase 2"
    },
    {
      id: "qa-software-testing",
      title: "QA Engineering & Automation",
      category: "technical-support",
      level: "Intermediate",
      duration: "8 Weeks",
      status: "Available",
      phase: "Phase 2"
    }
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

        {/* HEADER */}
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
                <button onClick={clearFilters} className="text-[#6B7280] hover:text-[#0F1115]">
                  <X size={14} />
                </button>
              )}
            </div>
          </div>

          {/* SEARCH */}
          <div className="relative w-full md:w-96">
            <div className="absolute left-6 top-[52%] -translate-y-1/2">
              <Search className="text-[#6B7280]" size={18} />
            </div>

            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search technical modules..."
              className="w-full pl-14 pr-6 py-5 bg-[#F3F4F6] border-2 border-transparent rounded-2xl outline-none focus:bg-white focus:border-[#0F1115] font-bold text-sm"
            />
          </div>
        </div>

        {/* FILTERS */}
        <div className="mb-12 flex flex-wrap gap-3">
          <button
            onClick={() => router.push('/courses?filter=all')}
            className={`px-6 py-2 rounded-lg font-bold text-sm uppercase tracking-tight transition-all ${
              activeFilter === 'all'
                ? 'bg-[#0F1115] text-white'
                : 'bg-[#F3F4F6] text-[#0F1115] hover:bg-[#E5E7EB]'
            }`}
          >
            All
          </button>
          <button
            onClick={() => router.push('/courses?filter=development')}
            className={`px-6 py-2 rounded-lg font-bold text-sm uppercase tracking-tight transition-all ${
              activeFilter === 'development'
                ? 'bg-[#0F1115] text-white'
                : 'bg-[#F3F4F6] text-[#0F1115] hover:bg-[#E5E7EB]'
            }`}
          >
            Development
          </button>
          <button
            onClick={() => router.push('/courses?filter=design-ux')}
            className={`px-6 py-2 rounded-lg font-bold text-sm uppercase tracking-tight transition-all ${
              activeFilter === 'design-ux'
                ? 'bg-[#0F1115] text-white'
                : 'bg-[#F3F4F6] text-[#0F1115] hover:bg-[#E5E7EB]'
            }`}
          >
            Design & UX
          </button>
          <button
            onClick={() => router.push('/courses?filter=technical-support')}
            className={`px-6 py-2 rounded-lg font-bold text-sm uppercase tracking-tight transition-all ${
              activeFilter === 'technical-support'
                ? 'bg-[#0F1115] text-white'
                : 'bg-[#F3F4F6] text-[#0F1115] hover:bg-[#E5E7EB]'
            }`}
          >
            QA & Testing
          </button>
        </div>

        {/* COURSES */}
        {filteredCourses.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

            {filteredCourses.map((course) => (
              <div key={course.id} className="border-2 border-[#E5E7EB] rounded-[2.5rem] p-8 flex flex-col">

                <div className="flex justify-between mb-6">
                  <span className="text-[9px] font-black uppercase">
                    {course.category.replace(/-/g, ' ')}
                  </span>

                  {course.status === "Locked" ? (
                    <Lock size={14} />
                  ) : (
                    <div className="w-2 h-2 bg-green-500 rounded-full" />
                  )}
                </div>

                <h3 className="text-2xl font-black mb-6 uppercase">
                  {course.title}
                </h3>

                <div className="mt-auto space-y-4">

                  <div className="flex justify-between text-xs">
                    <span>{course.duration}</span>
                    <span>{course.level}</span>
                  </div>

                  <Link
                    href={`/courses/${course.id}`}
                    className="block text-center py-4 bg-black text-white rounded-xl text-xs font-bold uppercase"
                  >
                    View Syllabus
                  </Link>

                </div>
              </div>
            ))}

          </div>
        ) : (
          <div className="text-center py-20">
            <h3 className="text-2xl font-black mb-6 uppercase text-[#0F1115]">No Modules Found</h3>
            <button 
              onClick={clearFilters}
              className="px-6 py-3 bg-[#0F1115] text-white rounded-lg font-bold text-sm uppercase hover:bg-[#1F2937] transition-all"
            >
              Clear Filters
            </button>
          </div>
        )}

      </div>
    </div>
  );
}