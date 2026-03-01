'use client';
import { useState, useEffect } from 'react';
import { Send, CheckCircle, Lock, ChevronDown, AlertCircle } from 'lucide-react';

export default function IntakeForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: 'MVP Development',
    budget: '$5k - $15k',
    challenge: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSent, setIsSent] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const projectOptions = ['MVP Development', 'Brand Identity', 'Automation', 'Technical Advisory'];
  const budgetOptions = ['$5k - $15k', '$15k - $50k', '$50k+'];

  const validate = () => {
    let newErrors: Record<string, string> = {};
    if (!formData.name) newErrors.name = "Name is required";
    if (!formData.email.includes('@')) newErrors.email = "Valid email required";
    if (formData.challenge.length < 10) newErrors.challenge = "Please provide more context";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    console.log("Submitting to CogOps Backend:", formData);

    await new Promise(resolve => setTimeout(resolve, 2000));
    setIsSubmitting(false);
    setIsSent(true);
  };

  if (isSent) {
    return (
      <div className="py-20 bg-white text-center px-4">
        <div className="max-w-xl mx-auto px-4 py-12 bg-[#F3F4F6] rounded-[2rem] border-2 border-[#0F1115] animate-in fade-in slide-in-from-bottom-4">
          <CheckCircle size={40} className="mx-auto mb-4 text-[#0F1115]" />
          <h2 className="text-2xl font-black text-[#0F1115] uppercase">Submission Sent</h2>
          <p className="text-[#6B7280] text-sm font-bold mb-6 italic">Check your email for the next steps.</p>
          <button onClick={() => setIsSent(false)} className="text-[10px] font-black uppercase underline">Send another request</button>
        </div>
      </div>
    );
  }

  return (
    <section id="intake-form" className="py-16 md:py-24 bg-white px-4 md:px-6">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-2 mb-4">
        <div className="w-2 h-2 rounded-full bg-[#0F1115]" />
        <span className="text-[10px] font-black uppercase tracking-widest text-[#6B7280]">
          Mandatory Project Vetting Protocol
        </span>
      </div>
        <div className="mb-10">
          <h2 className="text-3xl md:text-6xl font-black text-[#0F1115] mb-3 uppercase tracking-tighter">Scope Your Project</h2>
          <p className="text-[#6B7280] text-sm md:text-lg font-medium italic">Precision starts with clear requirements.</p>
        </div>

        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-8 bg-[#F3F4F6] p-5 sm:p-8 md:p-16 rounded-[2rem] border border-[#E5E7EB]">

          <div className="space-y-1.5">
            <label className="text-[12px] font-black uppercase tracking-widest text-[#0F1115]">Full Name</label>
            <input 
              type="text" 
              className={`w-full p-3.5 rounded-xl bg-white border ${errors.name ? 'border-red-500' : 'border-[#E5E7EB]'} text-sm outline-none focus:ring-2 focus:ring-[#0F1115] transition-all`}
              placeholder="Your Name"
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
            />
          </div>

          <div className="space-y-1.5">
            <label className="text-[12px] font-black uppercase tracking-widest text-[#0F1115]">Work Email</label>
            <input 
              type="email" 
              className={`w-full p-3.5 rounded-xl bg-white border ${errors.email ? 'border-red-500' : 'border-[#E5E7EB]'} text-sm outline-none focus:ring-2 focus:ring-[#0F1115] transition-all`}
              placeholder="email@company.com"
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
            />
          </div>

          <div className="relative space-y-1.5">
            <label className="text-[12px] font-black uppercase tracking-widest text-[#0F1115]">Project Type</label>
            <div 
              onClick={() => setActiveDropdown(activeDropdown === 'type' ? null : 'type')}
              className="w-full p-3.5 rounded-xl bg-white border border-[#E5E7EB] text-sm font-bold flex justify-between items-center cursor-pointer hover:border-[#0F1115] transition-all"
            >
              {formData.projectType}
              <ChevronDown size={16} className={`transition-transform ${activeDropdown === 'type' ? 'rotate-180' : ''}`} />
            </div>
            {activeDropdown === 'type' && (
              <div className="absolute z-50 w-full mt-1 bg-white border border-[#E5E7EB] rounded-xl shadow-xl overflow-hidden animate-in fade-in zoom-in-95 duration-200">
                {projectOptions.map(opt => (
                  <div 
                    key={opt}
                    onClick={() => { setFormData({...formData, projectType: opt}); setActiveDropdown(null); }}
                    className="p-3 text-sm font-medium hover:bg-[#0F1115] hover:text-white cursor-pointer transition-colors"
                  >
                    {opt}
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className="relative space-y-1.5">
            <label className="text-[12px] font-black uppercase tracking-widest text-[#0F1115]">Budget Range</label>
            <div 
              onClick={() => setActiveDropdown(activeDropdown === 'budget' ? null : 'budget')}
              className="w-full p-3.5 rounded-xl bg-white border border-[#E5E7EB] text-sm font-bold flex justify-between items-center cursor-pointer hover:border-[#0F1115] transition-all"
            >
              {formData.budget}
              <ChevronDown size={16} className={`transition-transform ${activeDropdown === 'budget' ? 'rotate-180' : ''}`} />
            </div>
            {activeDropdown === 'budget' && (
              <div className="absolute z-50 w-full mt-1 bg-white border border-[#E5E7EB] rounded-xl shadow-xl overflow-hidden animate-in fade-in zoom-in-95 duration-200">
                {budgetOptions.map(opt => (
                  <div 
                    key={opt}
                    onClick={() => { setFormData({...formData, budget: opt}); setActiveDropdown(null); }}
                    className="p-3 text-sm font-medium hover:bg-[#0F1115] hover:text-white cursor-pointer transition-colors"
                  >
                    {opt}
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className="space-y-1.5 md:col-span-2">
            <label className="text-[12px] font-black uppercase tracking-widest text-[#0F1115]">The Challenge</label>
            <textarea 
              rows={4} 
              className={`w-full p-4 rounded-xl bg-white border ${errors.challenge ? 'border-red-500' : 'border-[#E5E7EB]'} text-sm outline-none focus:ring-2 focus:ring-[#0F1115] transition-all`}
              placeholder="What specific problem are we solving?"
              value={formData.challenge}
              onChange={(e) => setFormData({...formData, challenge: e.target.value})}
            ></textarea>
            {errors.challenge && <p className="text-[10px] text-red-500 font-bold flex items-center gap-1"><AlertCircle size={10} /> {errors.challenge}</p>}
          </div>

          <div className="md:col-span-2 pt-2">
            <button 
              disabled={isSubmitting}
              type="submit"
              className="w-full py-4 md:py-6 bg-[#0F1115] text-white font-black rounded-xl text-[12px] md:text-lg uppercase tracking-[0.2em] hover:bg-[#1F2937] transition-all flex items-center justify-center gap-2 disabled:opacity-50"
            >
              {isSubmitting ? "Processing..." : "Submit Review"}
              {!isSubmitting && <Send size={16} />}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}