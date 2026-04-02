"use client";

import { useState, useMemo, Suspense } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import { Search, Lock, X } from 'lucide-react';

function CoursesList() {
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
      const matchesSearch = course.title
        .toLowerCase()
        .includes(searchQuery.toLowerCase());

      const matchesCategory =
        activeFilter === 'all' || course.category === activeFilter;

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
            <h1 className="text-5xl md:text-8xl font-black uppercase mb-6">
              Curriculum<span className="text-gray-400">.</span>
            </h1>
            <div className="flex items-center gap-3">
              <span className="text-xs font-bold uppercase">Filtered by:</span>
              <span className="px-3 py-1 bg-black text-white text-[10px] font-black uppercase rounded-md">
                {activeFilter.replace(/-/g, ' ')}
              </span>
              {activeFilter !== 'all' && (
                <button onClick={clearFilters}><X size={14} /></button>
              )}
            </div>
          </div>

          <div className="relative w-full md:w-96">
            <div className="absolute left-6 top-1/2 -translate-y-1/2"><Search size={18} /></div>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search modules..."
              className="w-full pl-14 pr-6 py-4 bg-gray-100 rounded-xl"
            />
          </div>
        </div>

        <div className="mb-12 flex flex-wrap gap-3">
          {['all', 'development', 'design-ux', 'technical-support'].map((filter) => (
            <button
              key={filter}
              onClick={() => router.push(`/courses?filter=${filter}`)}
              className={`px-5 py-2 rounded-lg text-sm font-bold uppercase ${
                activeFilter === filter ? 'bg-black text-white' : 'bg-gray-100'
              }`}
            >
              {filter.replace('-', ' ')}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCourses.map(course => (
            <div key={course.id} className="border p-6 rounded-2xl">
              <h3 className="font-bold text-xl mb-4">{course.title}</h3>
              <p className="text-sm mb-4">{course.duration} • {course.level}</p>
              <Link
                href={`/courses/${course.id}`}
                className="block text-center py-3 bg-black text-white rounded-lg text-sm font-bold"
              >
                View Syllabus
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function CoursesPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen flex items-center justify-center bg-white">
        <p className="font-bold uppercase tracking-widest animate-pulse">Loading Curriculum...</p>
      </div>
    }>
      <CoursesList />
    </Suspense>
  );
}