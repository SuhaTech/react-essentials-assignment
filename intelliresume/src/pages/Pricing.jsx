import React, { useState } from "react";
import {
  ChevronDown,
  Check,
  Sparkles,
  ShieldCheck,
  Brain,
  Rocket,
  Star,
  ArrowRight,
  X,
  Zap,
  Crown,
  Minus,
  Calendar,
} from "lucide-react";
import PricingCard from "./PricingCard";

const pricingPlans = [
  {
    title: "Starter",
    planTag: "STARTERPLAN",
    monthlyPrice: "399",
    yearlyPrice: "339", // Discounted monthly price when billed annually
    annualChargesMonthly: "₹4,068/yr",
    annualChargesYearly: "₹4,068/yr",
    description: "Perfect for freelancers and individual professionals looking to automate meeting notes.",
    buttonText: "Start Free 15-Day Trial",
    features: [
      "Up to 30 meeting hours/month",
      "Auto-transcription & summaries",
      "Export to Google Docs & PDF",
      "Action item extraction",
      "Email summary sharing"
    ],
    popular: false,
  },
  {
    title: "Pro",
    planTag: "PROPLAN",
    monthlyPrice: "1,299",
    yearlyPrice: "1,099",
    annualChargesMonthly: "₹15,588/yr",
    annualChargesYearly: "₹13,188/yr",
    description: "Ideal for fast-moving teams that need deep AI insights and CRM integrations.",
    buttonText: "Get Started with Pro",
    features: [
      "Unlimited meeting hours",
      "Speaker identification & sentiment analysis",
      "Integrations with Notion, Slack & HubSpot",
      "Custom AI prompt templates",
      "Search across all past transcripts",
      "Video recording & highlights export",
      "Priority email & chat support"
    ],
    popular: true,
  },
  {
    title: "Enterprise",
    planTag: "ENTERPRISEPLAN",
    monthlyPrice: "2,999",
    yearlyPrice: "2,549",
    annualChargesMonthly: "₹35,988/yr",
    annualChargesYearly: "₹30,588/yr",
    description: "Built for scale with custom compliance, advanced security and dedicated support.",
    buttonText: "Enterprise",
    features: [
      "Everything in Pro Plan",
      "Compliance reports",
      "Custom API access & Webhooks",
      "Custom vocabulary for domain terms",
      "Single Sign-on",
      "Dedicated Customer Success Manager",
      "99.9% Uptime SLA"
    ],
    popular: false,
  }
];
const rows = [
    { feature: "ATS Resume Scan", starter: true, professional: true },
    { feature: "Resume Upload", starter: "3 Resumes", professional: "Unlimited" },
    { feature: "AI Resume Rewrite", starter: false, professional: true },
    { feature: "Interview Preparation", starter: false, professional: true },
    { feature: "LinkedIn Optimization", starter: false, professional: true },
    { feature: "Career Dashboard", starter: false, professional: true },
    { feature: "Priority Support", starter: false, professional: true },
  ];
const CheckIcon = () => (
  <svg className="w-5 h-5 text-blue-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
);

const CloseIcon = () => (
  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
);

const BookDemoModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;
  
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 antialiased">
  
      {/* Dynamic Glassmorphism Overlay */}
      <div 
        className="absolute inset-0 bg-slate-950/40 backdrop-blur-md transition-all duration-300" 
        onClick={onClose}
      ><br/></div>
      
      {/* Main Modal Card */}
      <div className="relative bg-white/90 backdrop-blur-2xl rounded-[32px] px-8 py-10 md:px-14 md:py-12 max-w-2xl w-full mx-auto shadow-[0_32px_64px_-16px_rgba(15,23,42,0.15)] border border-slate-200/60 transform transition-all scale-100">
        
        {/* Subtle & Premium Close Button */}
        <button 
          onClick={onClose} 
          className="absolute top-6 right-6 text-slate-400 hover:text-slate-800 transition-all duration-200 p-2.5 hover:bg-slate-100/80 rounded-full group"
        >
          <X size={18} className="group-hover:rotate-90 transition-transform duration-200" />
        </button>
        
        {/* Header Section */}
        <div className="text-center mb-9"><br/>
          {/* Calendar Icon Badge with Dual Ring Glow */}
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-blue-500/10 to-indigo-500/5 mx-auto flex items-center justify-center border border-blue-100/80 shadow-inner">
            <Calendar size={28} className="text-blue-600" />
          </div>

          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900 mt-5">
            Book Your Demo
          </h2>
          <p className="text-sm md:text-base text-slate-500 font-medium mt-2 max-w-sm mx-auto">
            Fill in your details and our team will connect with you within 24 hours.
          </p>
        </div><br/><br/>

        {/* Form Elements */}
        <form className="space-y-5" onSubmit={(e) => { e.preventDefault(); onClose(); }}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-1.5">
              <label className="text-xs font-bold tracking-wide uppercase text-slate-500 ml-1">First Name</label>
              <input 
                type="text" 
                placeholder="John" 
                required 
                className="w-full px-4 py-6 rounded-[2px] bg-slate-50/50 border border-slate-200/80 text-slate-800 placeholder:text-slate-400 outline-none focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/10 transition-all duration-200 shadow-sm" 
              />
            </div>
            <div className="space-y-1.5">
              <label className="text-xs font-bold tracking-wide uppercase text-slate-500 ml-1">Last Name</label>
              <input 
                type="text" 
                placeholder="Doe" 
                required 
                className="w-full px-4 py-3.5 rounded-[2px] bg-slate-50/50 border border-slate-200/80 text-slate-800 placeholder:text-slate-400 outline-none focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/10 transition-all duration-200 shadow-sm" 
              />
            </div>
          </div>
          
          <div className="space-y-1.5">
            <label className="text-xs font-bold tracking-wide uppercase text-slate-500 ml-1">Work Email</label>
            <input 
              type="email" 
              placeholder="john@company.com" 
              required 
              className="w-full px-4 py-3.5 rounded-[2px] bg-slate-50/50 border border-slate-200/80 text-slate-800 placeholder:text-slate-400 outline-none focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/10 transition-all duration-200 shadow-sm" 
            />
          </div>

          <div className="space-y-1.5">
            <label className="text-xs font-bold tracking-wide uppercase text-slate-500 ml-1">Message</label>
            <textarea 
              placeholder="Tell us about your requirements..." 
              rows="3" 
              className="w-full px-4 py-3.5 rounded-xl bg-slate-50/50 border border-slate-200/80 text-slate-800 placeholder:text-slate-400 outline-none focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/10 transition-all duration-200 shadow-sm resize-none"
            ></textarea>
          </div><br/>

          {/* Premium High-Contrast CTA Button */}
          <button
  type="submit"
  className="mx-auto flex hover:opacity-95"
  style={{
    backgroundColor: '#2563eb',
    color: '#ffffff',
    padding: '14px 28px',
    borderRadius: '12px',
    fontWeight: '600',
    fontSize: '15px',
    boxShadow: '0 10px 15px -3px rgba(37, 99, 235, 0.25)',
    transition: 'all 0.2s',
    alignItems: 'center',
    justifyContent: 'center'
  }}
>
  Schedule Free Demo
</button>
        </form>
        <br/>
      </div>
    </div>
  );
};
const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-slate-200 last:border-0 px-10 py-4">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-6 flex justify-between items-start text-left focus:outline-none"
      >
        <h3 className="text-lg font-bold text-slate-900">
          {question}
        </h3>

        <ChevronDown
          className={`transition duration-300 ${
            isOpen ? "rotate-180 text-blue-600" : "text-slate-400"
          }`}
        />
      </button>

      <div
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-40 pb-6" : "max-h-0"
        }`}
      >
        <p className="text-slate-600 leading-8">
          {answer}
        </p>
      </div>
    </div>
  );
};
export default function Pricing() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isAnnual, setIsAnnual] = useState(false);

  // Dynamic price calculation
  const proPrice = isAnnual ? 829 : 999;

  return (
<div className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-blue-50 overflow-hidden">

{/* Background Blur */}

<div className="fixed inset-0 -z-10 overflow-hidden">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-blue-300/30 blur-[130px] rounded-full"/>

<div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-cyan-200/20 blur-[120px] rounded-full"/>

<div className="absolute right-0 top-80 w-[500px] h-[500px] bg-indigo-200/20 blur-[120px] rounded-full"/>

</div>

<br />


      <header className="relative py-28 px-6">

<div className="max-w-7xl mx-auto text-center">

<div style={{ 
                      backgroundColor: '#eff6ff', 
                      border: '1px solid #dbeafe', 
                      padding: '6px 16px', 
                      borderRadius: '9999px', 
                      display: 'inline-flex', 
                      alignItems: 'center', 
                      gap: '8px',
                      boxShadow: '0 2px 8px rgba(37, 99, 235, 0.04)'
                    }}>
                      <Sparkles size={14} style={{ color: '#2563eb' }} />
                      <span style={{ fontSize: '12px', fontWeight: '600', color: '#1d4ed8', letterSpacing: '0.02em' }}>Flexible Pricing Plans</span>
                    </div>
<h1 style={{ 
              fontSize: '54px', 
              fontWeight: '900', 
              color: '#0f172a', 
              lineHeight: '1.12', 
              letterSpacing: '-0.03em',
              textAlign: 'center',
              padding: '30px 10px',
            }}>
              Choose the Perfect Plan 
              For <br /> Your Dream <span style={{ background: 'linear-gradient(to right, #2563eb, #3b82f6)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Career.</span>
            </h1>
            <p style={{ fontSize: '16px', color: '#64748b', lineHeight: '1.65', maxWidth: '620px', margin: '0 auto', textRendering: 'optimizeLegibility' }}>
              Everything you need to build an ATS-friendly resume,

prepare for interviews, and land your dream job—

all powered by AI.

            </p>

        
        
      </div><br/><br/>

      




</header><br/>

<div className="h-px w-full bg-gradient-to-r from-transparent via-slate-400 to-transparent" /><br/><br/>

      <section className="max-w-7xl mx-auto px-6 pb-32">

  <div className="min-h-screen bg-[#fafbfc] text-[#0f172a] antialiased font-sans pt-32 pb-20 px-6">
      
      {/* ================= HERO SECTION (Exact Copy & Colors) ================= */}
      <section className="max-w-4xl mx-auto text-center mb-12">

  {/* ================= TOGGLE ================= */}
  <div className="flex items-center justify-center mt-12 mb-16">
  {/* Outer Container */}
  <div
    style={{
      backgroundColor: "#f0f9ff",
      border: "1px solid #e0f2fe",
      padding: "6px",
      borderRadius: "12px",
      display: "inline-flex",
      alignItems: "center",
      gap: "8px",
      boxShadow: "0 4px 16px rgba(56, 189, 248, 0.08)",
    }}
  >
    {/* Monthly Button */}
    <button
      type="button"
      onClick={() => setIsAnnual(false)}
      style={{
        padding: "12px 32px",
        borderRadius: "8px",
        fontSize: "14px",
        fontWeight: "700",
        letterSpacing: "0.02em",
        cursor: "pointer",
        border: "none",
        transition: "all 0.3s ease",
        backgroundColor: !isAnnual ? "#60a5fa" : "transparent",
        color: !isAnnual ? "#ffffff" : "#0369a1",
        boxShadow: !isAnnual ? "0 4px 12px rgba(96, 165, 250, 0.3)" : "none",
      }}
    >
      Monthly
    </button>

    {/* Annual Button */}
    <button
      type="button"
      onClick={() => setIsAnnual(true)}
      style={{
        padding: "12px 32px",
        borderRadius: "8px",
        fontSize: "14px",
        fontWeight: "700",
        letterSpacing: "0.02em",
        cursor: "pointer",
        border: "none",
        display: "inline-flex",
        alignItems: "center",
        gap: "10px",
        transition: "all 0.3s ease",
        backgroundColor: isAnnual ? "#60a5fa" : "transparent",
        color: isAnnual ? "#ffffff" : "#0369a1",
        boxShadow: isAnnual ? "0 4px 12px rgba(96, 165, 250, 0.3)" : "none",
      }}
    >
      <span>Annual</span>

      {/* Save Badge */}
      <span
        style={{
          fontSize: "11px",
          fontWeight: "800",
          padding: "4px 10px",
          borderRadius: "6px",
          textTransform: "uppercase",
          letterSpacing: "0.05em",
          transition: "all 0.3s ease",
          backgroundColor: isAnnual ? "#ffffff" : "#bae6fd",
          color: isAnnual ? "#2563eb" : "#0369a1",
        }}
      >
        Save 17%
      </span>
    </button>
  </div>
</div>

</section><br/><br/>

{/* ================= PRICING CARDS ================= */}

<section className="w-full py-12 md:py-20 bg-transparent flex justify-center items-center">
  <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center">
    
    {/* Pricing Cards Grid Container */}
    <div className="grid grid-cols-1  lg:grid-cols-3 gap-8  items-stretch mb-20">
      {pricingPlans.map((plan, index) => (
        <div key={index} className="flex h-full">
          <PricingCard
            plan={{
              ...plan,
              price:
                plan.monthlyPrice === "Free"
                  ? "Free"
                  : isAnnual
                  ? plan.yearlyPrice
                  : plan.monthlyPrice,

              subtitle:
                plan.monthlyPrice === "Free"
                  ? "forever"
                  : isAnnual
                  ? "per year"
                  : "per month",
            }}
          />
        </div>
      ))}
    </div>

  </div>
</section>    </div>
</section><br/><br/><br/><br/><br/>

<div className="h-px w-full bg-gradient-to-r from-transparent via-slate-400 to-transparent" /><br/><br/>
      
{/* ================= WHY CHOOSE INTELLIRESUME ================= */}

<section className="max-w-7xl mx-auto px-6 py-28">

  <div className="text-center mb-16">

    <div style={{ 
                      backgroundColor: '#eff6ff', 
                      border: '1px solid #dbeafe', 
                      padding: '6px 16px', 
                      borderRadius: '9999px', 
                      display: 'inline-flex', 
                      alignItems: 'center', 
                      gap: '8px',
                      boxShadow: '0 2px 8px rgba(37, 99, 235, 0.04)'
                    }}>
                      <Sparkles size={14} style={{ color: '#2563eb' }} />
                      <span style={{ fontSize: '12px', fontWeight: '600', color: '#1d4ed8', letterSpacing: '0.02em' }}>Why Choose Us</span>
                    </div>
        <br/><br/>
    <h2 className="text-5xl font-black text-slate-900 mt-6">
      Everything You Need To
      <span className="text-blue-600"> Get Hired Faster</span>
    </h2><br/>

    <p className="mt-6 max-w-3xl mx-auto text-lg text-slate-600 leading-8">
      IntelliResume helps you build ATS-friendly resumes, optimize keywords,
      prepare for interviews, and improve your chances of landing your dream job.
    </p>

  </div><br/><br/><br/>

  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-8 w-full max-w-6xl mx-auto">

    {/* Card 1 */}

    <div className="group relative overflow-hidden bg-white rounded-[12px] p-8 border border-slate-200 shadow-lg hover:shadow-2xl hover:shadow-blue-500/20 hover:border-blue-400 hover:-translate-y-3 transition-all duration-500 text-center">

  {/* Top Animated Border */}
  <div className="absolute top-0 left-0 h-1 w-full bg-blue-600 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500"></div>
<br/>
  {/* Background Glow */}
  <div className="absolute -top-10 -right-10 w-32 h-32 bg-blue-200 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-all duration-500"></div>

  <div className="relative w-16 h-16 rounded-2xl bg-blue-100 flex items-center justify-center text-3xl mx-auto">
    🤖
  </div>

  <h3 className="relative text-2xl font-bold mt-6">
    AI Resume Review
  </h3>

  <p className="relative mt-4 text-slate-600 leading-7">
    Get instant AI-powered suggestions to improve your resume and increase interview chances.
  </p>

</div>

    {/* Card 2 */}

   <div className="group relative overflow-hidden bg-white rounded-3xl p-8 border border-slate-200 shadow-lg hover:shadow-2xl hover:shadow-blue-500/20 hover:border-green-400 hover:-translate-y-3 transition-all duration-500 text-center">

  {/* Top Border */}
  <div className="absolute top-0 left-0 h-1 w-full bg-blue-500 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500"></div>
<br/>
  {/* Background Glow */}
  <div className="absolute -top-10 -right-10 w-32 h-32 bg-blue-200 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-all duration-500"></div>

  <div className="relative w-16 h-16 rounded-2xl bg-green-100 flex items-center justify-center text-3xl mx-auto">
    📄
  </div>

  <h3 className="relative text-2xl font-bold mt-6">
    ATS Optimization
  </h3>

  <p className="relative mt-4 text-slate-600 leading-7">
    Optimize your resume with the right keywords so recruiters can easily find you.
  </p>

</div>

    {/* Card 3 */}

    
    {/* Card 4 */}

    <div className="group relative overflow-hidden bg-white rounded-3xl p-8 border border-slate-200 shadow-lg hover:shadow-2xl hover:shadow-blue-500/20 hover:border-blue-400 hover:-translate-y-3 transition-all duration-500 text-center">

  {/* Top Border */}
  <div className="absolute top-0 left-0 h-1 w-full bg-blue-500 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500"></div>
<br/>
  {/* Background Glow */}
  <div className="absolute -top-10 -right-10 w-32 h-32 bg-blue-200 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-all duration-500"></div>

  <div className="relative w-16 h-16 rounded-2xl bg-orange-100 flex items-center justify-center text-3xl mx-auto">
    🚀
  </div>

  <h3 className="relative text-2xl font-bold mt-6">
    Career Growth
  </h3>

  <p className="relative mt-4 text-slate-600 leading-7">
    Track your resume performance and continuously improve with personalized insights.
  </p><br/>

</div>

  </div>

</section><br/><br/><br/><br/>
<div className="h-px w-full bg-gradient-to-r from-transparent via-slate-400 to-transparent" /><br/><br/>





{/* ================= TESTIMONIALS ================= */}

<section className="max-w-7xl mx-auto px-6 py-24">

  <div className="text-center mb-16">
    <div style={{ 
                      backgroundColor: '#eff6ff', 
                      border: '1px solid #dbeafe', 
                      padding: '6px 16px', 
                      borderRadius: '9999px', 
                      display: 'inline-flex', 
                      alignItems: 'center', 
                      gap: '8px',
                      boxShadow: '0 2px 8px rgba(37, 99, 235, 0.04)'
                    }}>
                      <Sparkles size={14} style={{ color: '#2563eb' }} />
                      <span style={{ fontSize: '12px', fontWeight: '600', color: '#1d4ed8', letterSpacing: '0.02em' }}>Testimonials</span>
                    </div><br/><br/>

    

    <h2 className="text-5xl font-black mt-4">
      Loved by Job Seekers
    </h2>

  </div><br/><br/><br/>

  <div className="grid lg:grid-cols-3 gap-12 w-full max-w-6xl mx-auto">

    {/* Review 1 */}

    <div className="group relative overflow-hidden bg-white rounded-3xl p-8 shadow-lg border border-slate-200 text-center transition-all duration-500 hover:-translate-y-3 hover:scale-[1.02] hover:ring-4 hover:ring-blue-200/40 hover:border-blue-400 hover:shadow-[0_25px_60px_rgba(37,99,235,0.20)] cursor-pointer">

  {/* Glow Effect */}
  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-transparent to-cyan-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

  {/* Content */}
  <div className="relative z-10 pt-8"><br/>

    <div className="text-yellow-400 text-2xl transition-transform duration-500 group-hover:scale-110">
      ⭐⭐⭐⭐⭐
    </div>

    <p className="mt-6 text-slate-600 leading-8 transition-colors duration-300 group-hover:text-slate-800">
      IntelliResume completely transformed my resume.
      Within two weeks I received interview calls from top companies.
    </p>

    <div className="mt-8">
      <h4 className="font-bold text-lg transition-colors duration-300 group-hover:text-blue-600">
        Priya Sharma
      </h4>

      <p className="text-slate-500">
        Software Engineer
      </p><br/> 
    </div>

  </div>

</div>
   {/* Review 2 */}

<div className="group relative overflow-hidden bg-blue-600 text-white rounded-3xl p-8 shadow-xl text-center border border-blue-500 transition-all duration-500 hover:-translate-y-3 hover:ring-4 hover:ring-blue-200/40 hover:scale-[1.02] hover:shadow-[0_30px_70px_rgba(37,99,235,0.40)] cursor-pointer">

  {/* Glow Effect */}
  <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-cyan-300/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

  {/* Content */}
  <div className="relative z-10 pt-8"><br/>
    

    {/* Stars */}
    <div className="text-yellow-300 text-2xl transition-transform duration-500 group-hover:scale-110">
      ⭐⭐⭐⭐⭐
    </div>

    {/* Review */}
    <p className="mt-6 leading-8 text-blue-50 transition-colors duration-300 group-hover:text-white">
      The ATS optimization feature helped my resume pass recruiter filters.
      Highly recommended for freshers.
    </p>

    {/* User */}
    <div className="mt-8">

      <h4 className="font-bold text-lg transition-transform duration-300 group-hover:scale-105">
        Rahul Verma
      </h4>

      <p className="text-blue-100 mt-1">
        Frontend Developer
      </p><br/>

    </div>

  </div>

</div>
    {/* Review 3 */}

<div className="group relative overflow-hidden bg-white rounded-3xl p-8 shadow-lg border border-slate-200 text-center transition-all duration-500 hover:-translate-y-3 hover:scale-[1.02] hover:border-blue-400 hover:ring-4 hover:ring-blue-200/40 hover:shadow-[0_25px_60px_rgba(37,99,235,0.20)] cursor-pointer">

  {/* Glow Effect */}
  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-transparent to-cyan-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

  {/* Content */}
  <div className="relative z-10 pt-8"><br/>

    {/* Stars */}
    <div className="text-yellow-400 text-2xl transition-transform duration-500 group-hover:scale-110">
      ⭐⭐⭐⭐⭐
    </div>

    {/* Review */}
    <p className="mt-6 text-slate-600 leading-8 transition-colors duration-300 group-hover:text-slate-800">
      Beautiful UI, accurate AI suggestions,
      and excellent interview preparation tools.
    </p>

    {/* User */}
    <div className="mt-8">

      <h4 className="font-bold text-lg transition-colors duration-300 group-hover:text-blue-600">
        Anjali Patel
      </h4>

      <p className="text-slate-500 mt-1">
        UI/UX Designer
      </p><br/>

    </div>

  </div>

</div>
  </div>

</section><br/><br/><br/>
{/* ================= FEATURE COMPARISON ================= */}
<div className="h-px w-full bg-gradient-to-r from-transparent via-slate-400 to-transparent" /><br/><br/>






{/* ================= CTA SECTION ================= */}
<div className="h-px w-full bg-gradient-to-r from-transparent via-slate-400 to-transparent" /><br/><br/>

<section className="max-w-7xl mx-auto px-6 pb-32">

  <div className="relative overflow-hidden rounded-[4px] bg-gradient-to-r from-blue-600 via-sky-500 to-indigo-600 px-10 py-20 text-center text-white shadow-[0_30px_80px_rgba(37,99,235,.35)]">

    {/* Glow */}

    <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-[450px] h-[450px] rounded-full bg-white/10 blur-[100px]" />

    <div className="relative">
        <br/><br/>
        <div style={{ 
                      backgroundColor: '#eff6ff', 
                      border: '1px solid #dbeafe', 
                      padding: '6px 16px', 
                      borderRadius: '9999px', 
                      display: 'inline-flex', 
                      alignItems: 'center', 
                      gap: '8px',
                      boxShadow: '0 2px 8px rgba(37, 99, 235, 0.04)'
                    }}>
                      
                      <span style={{ fontSize: '12px', fontWeight: '600', color: '#1d4ed8', letterSpacing: '0.02em' }}>🚀 Start Your Journey</span>
                    </div>


      
      <h2 className="text-5xl font-black mt-8 leading-tight">

        Ready To Build

        <br/>

        Your Dream Resume?

      </h2>
        <br/><br/>
      <p className="mt-8 max-w-2xl mx-auto text-blue-100 text-lg leading-8">

        Join thousands of professionals who use IntelliResume
        to improve their resumes, prepare for interviews,
        and land better jobs faster.

      </p><br/><br/><br/>

      <div className="flex flex-wrap justify-center gap-4 mt-12">

        <button
          onClick={() => setIsModalOpen(true)}
          style={{
                backgroundColor: '#1b1d20',
                color: '#ffffff',
                padding: '14px 28px',
                borderRadius: '12px',
                fontWeight: '600',
                fontSize: '15px',
                boxShadow: '0 10px 15px -3px rgba(37, 99, 235, 0.25)',
                transition: 'all 0.2s',
                display: 'inline-flex',
                alignItems: 'center'
              }} className="hover:opacity-95"
        >
          Start Free
        </button>

        <section className="text-center py-20">

<button

onClick={()=>setIsModalOpen(true)}

style={{
                backgroundColor: '#db0909',
                color: '#ffffff',
                padding: '14px 28px',
                borderRadius: '12px',
                fontWeight: '600',
                fontSize: '15px',
                boxShadow: '0 10px 15px -3px rgba(37, 99, 235, 0.25)',
                transition: 'all 0.2s',
                display: 'inline-flex',
                alignItems: 'center'
              }} className="hover:opacity-95"

>

Book a Free Demo →

</button>

</section>
<br/>
      </div>
<br/><br/><br/>
    </div>

  </div>
<br/><br/><br/>
</section>
      {/* ================= FAQ ================= */}

<section className="relative py-32 overflow-hidden bg-gradient-to-b from-white via-slate-50 to-blue-50">

  {/* Background Glow */}
  <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[550px] h-[550px] rounded-full bg-blue-300/20 blur-[130px]" />
  <div className="absolute bottom-0 right-0 w-[350px] h-[350px] rounded-full bg-cyan-300/20 blur-[120px]" />

  <br/><br/><br/>
    {/* Heading */}
    <div className="h-px w-full bg-gradient-to-r from-transparent via-slate-400 to-transparent" /><br/><br/>

    <div className="absolute -top-24 left-1/2 -translate-x-1/2 h-80 w-80 rounded-full bg-blue-400/20 blur-[120px]"></div>
  <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-cyan-300/20 blur-[100px]"></div>

  <div className="relative max-w-6xl mx-auto px-6">

    {/* Heading */}
    <div className="text-center mb-16">
      <div style={{ 
                      backgroundColor: '#eff6ff', 
                      border: '1px solid #dbeafe', 
                      padding: '6px 16px', 
                      borderRadius: '9999px', 
                      display: 'inline-flex', 
                      alignItems: 'center', 
                      gap: '8px',
                      boxShadow: '0 2px 8px rgba(37, 99, 235, 0.04)'
                    }}>
                      
                      <span style={{ fontSize: '12px', fontWeight: '600', color: '#1d4ed8', letterSpacing: '0.02em' }}>❓ Frequently Asked Questions</span>
                    </div>

      

      <h2 className="mt-6 text-4xl md:text-6xl font-black tracking-tight text-slate-900 leading-tight">
        Have Any
        <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
          {" "}Questions?
        </span>
      </h2>

      <p className="mt-6 max-w-2xl mx-auto text-lg leading-8 text-slate-600">
        Everything you need to know about IntelliResume, pricing,
        subscriptions and your AI career assistant.
      </p>

    </div><br/><br/><br/>


    {/* FAQ */}
    <div className="max-w-4xl mx-auto">

    <div className="space-y-4">

      <FAQItem
        question="Can I cancel my subscription anytime?"
        answer="Yes. You can cancel your subscription whenever you want. You'll continue enjoying premium features until your billing period ends."
      />
    <br/>
      <FAQItem
        question="Do you offer a free trial?"
        answer="Absolutely. Every new user receives access to our essential AI Resume tools before upgrading."
      />
    <br/>
      <FAQItem
        question="Is my resume data secure?"
        answer="Yes. We use industry-standard encryption to keep your resume and personal information completely secure."
      />
    <br/>
      <FAQItem
        question="Which payment methods are supported?"
        answer="We support Visa, MasterCard, RuPay, UPI, PayPal and all major debit and credit cards."
      />
      <br/>

      <FAQItem
        question="Can I upgrade my plan later?"
        answer="Of course. You can upgrade or downgrade your subscription anytime directly from your dashboard."
      /><br/>

      <FAQItem
        question="Do you provide customer support?"
        answer="Yes. Our dedicated support team is available 24/7 to assist you with any questions or issues."
      /><br/>

    </div>
    </div>

  </div>

</section>
      <BookDemoModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} /><br/><br/><br/><br/><br/>
    </div>
  );
}