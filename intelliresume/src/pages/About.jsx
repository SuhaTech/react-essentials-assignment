import React from "react";
import { Link } from "react-router-dom";
import Container from "../components/Container";
import Card from "../components/Card";
import profileAnalysis from "../assets/profile-analysis.png";

import {
  Sparkles,
  ArrowRight,
  FileText,
  ShieldCheck,
  Bot,
  Target,
  Zap,
  Cpu,
  Layers,
  Terminal,
  Code2
} from "lucide-react";

const About = () => {
  return (
    <div className="bg-slate-50 min-h-screen selection:bg-blue-600 selection:text-white font-sans antialiased overflow-x-hidden w-full">

      {/* ================= HERO SECTION ================= */}
        <section className="relative overflow-hidden bg-white border-b border-slate-100 py-20 sm:py-28 lg:py-36 px-4 sm:px-6 lg:px-8">
    {/* Ambient Gradient Glows */}
    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-blue-50 blur-[120px] pointer-events-none opacity-60" />
    
    <Container>
      {/* Full-width Centered Heading Section */}
      <br/><br/><br/>
      <div className="relative z-10 flex flex-col items-center text-center max-w-4xl mx-auto mb-16">
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
                              <span style={{ fontSize: '12px', fontWeight: '600', color: '#1d4ed8', letterSpacing: '0.02em' }}>IntelliResume Platform</span>
                            </div><br/>
        <h1 style={{ 
              fontSize: '54px', 
              fontWeight: '900', 
              color: '#0f172a', 
              lineHeight: '1.12', 
              letterSpacing: '-0.03em',
              textAlign: 'center'
            }}>
              The intelligent standard for <br />
              modern career <span style={{ background: 'linear-gradient(to right, #2563eb, #3b82f6)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>building.</span>
            </h1>

        
        
      </div><br/><br/><br/><br/><br/>

      {/* Split Two-Column Layout Section */}
      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
        
        {/* Left Column: Description & Actions */}
        <div className="flex flex-col space-y-8">
          <p className="text-base sm:text-lg text-slate-500 leading-relaxed max-w-xl text-center lg:text-left">
            An advanced career intelligence engine bridging the structural gap between outstanding candidates and automated recruiting filters. Built with modern UI parameters.
          </p><br/><br/>

          <div className="flex flex-col sm:flex-row items-center gap-4">
            <Link
              to="/upload"
              style={{
                backgroundColor: ' #2563eb',
                color: '#ffffff',
                padding: '14px 28px',
                borderRadius: '12px',
                fontWeight: '600',
                fontSize: '15px',
                boxShadow: '0 10px 15px -3px rgba(3, 6, 13, 0.25)',
                transition: 'all 0.2s',
                display: 'inline-flex',
                alignItems: 'center'
              }} className="hover:opacity-35">
              Upload Profile
              <ArrowRight size={16} className="transform group-hover:translate-x-1 transition-transform duration-200" />
            </Link>

            <Link
              to="/chatbot"
              style={{
                backgroundColor: '#030508',
                color: '#ffffff',
                padding: '14px 28px',
                borderRadius: '12px',
                fontWeight: '600',
                fontSize: '15px',
                boxShadow: '0 10px 15px -3px rgba(3, 6, 13, 0.25)',
                transition: 'all 0.2s',
                display: 'inline-flex',
                alignItems: 'center'
              }} className="hover:opacity-35">
              Consult AI Engine
            </Link>
          </div>
        </div>

        {/* Right Column: Dashboard Card */}
        {/* Right Column: Dashboard Image */}
<div className="relative w-full max-w-[500px] mx-auto lg:mx-0">
  {/* Glow Effect */}
  <div className="absolute -inset-5 rounded-[2.5rem] bg-gradient-to-r from-blue-500/20 via-cyan-400/20 to-indigo-500/20 blur-3xl"></div>

  {/* Dashboard Image */}
  <img
    src={profileAnalysis}
    alt="Profile Analysis Dashboard"
    className="relative z-10 w-full h-auto rounded-[2rem] shadow-[0_25px_60px_rgba(37,99,235,0.25)] object-contain transition-all duration-500 hover:scale-105"
    draggable={false}
  />
</div>
      </div>
    </Container>
  </section>
  <br/><br/><br/><br/><br/><br/>
  <div className="h-px w-full bg-gradient-to-r from-transparent via-slate-400 to-transparent" /><br/><br/>

  {/* Stats Section remains unchanged */}
  <section className="py-24 bg-slate-50 px-4">
    <Container>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto px-4">
  {[
    { 
      icon: <FileText size={24} />, 
      label: "Profiles Processed", 
      count: "500+", 
      color: "text-blue-600", 
      bg: "bg-blue-50",
      borderHover: "hover:border-blue-300",
      glowBg: "bg-blue-500/15"
    },
    { 
      icon: <Target size={24} />, 
      label: "ATS Bypass Accuracy", 
      count: "95%", 
      color: "text-emerald-600", 
      bg: "bg-emerald-50",
      borderHover: "hover:border-emerald-300",
      glowBg: "bg-emerald-500/15"
    },
    { 
      icon: <Bot size={24} />, 
      label: "Live System Health", 
      count: "24/7", 
      color: "text-indigo-600", 
      bg: "bg-indigo-50",
      borderHover: "hover:border-indigo-300",
      glowBg: "bg-indigo-500/15"
    },
    { 
      icon: <ShieldCheck size={24} />, 
      label: "Encryption Isolation", 
      count: "100%", 
      color: "text-purple-600", 
      bg: "bg-purple-50",
      borderHover: "hover:border-purple-300",
      glowBg: "bg-purple-500/15"
    }
  ].map((stat, idx) => (
    <div
      key={idx}
      className={`group relative overflow-hidden bg-white p-8 rounded-2xl border border-slate-200/80 shadow-sm transition-all duration-300 ease-out hover:-translate-y-2 hover:shadow-xl ${stat.borderHover} flex flex-col items-center cursor-default`}
    >
      {/* Background Soft Glow (Hover Par Fade-In Hoga) */}
      <div
        className={`absolute -top-10 -right-10 h-32 w-32 rounded-full ${stat.glowBg} blur-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100 pointer-events-none`}
      /><br/>

      {/* Icon with Zoom & Mild Tilt Animation */}
      <div
        className={`w-14 h-14 rounded-2xl ${stat.bg} ${stat.color} flex items-center justify-center mb-5 transition-all duration-300 group-hover:scale-110 group-hover:rotate-3 shadow-sm`}
      >
        {stat.icon}
      </div>

      {/* Main Count Stat */}
      <h2 className="text-3xl font-black text-slate-900 tracking-tight transition-transform duration-300 group-hover:scale-105">
        {stat.count}
      </h2>

      {/* Sub-label */}
      <p className="mt-2 text-[11px] font-bold text-slate-400 tracking-wider uppercase text-center transition-colors duration-300 group-hover:text-slate-600">
        {stat.label}
      </p><br/>
    </div>
  ))}
</div>
    </Container>
  </section>

            <br/><br/><br/><br/><br/><br/>
            <div className="h-px w-full bg-gradient-to-r from-transparent via-slate-400 to-transparent" /><br/><br/>
      {/* ================= PURPOSE SECTION ================= */}
      <section className="py-24 sm:py-32 bg-white border-y border-slate-100 px-4 sm:px-6 lg:px-8">
        <div className="py-24 bg-slate-50 px-6 sm:px-12">
        <Container>
          <div className="text-center max-w-3xl mx-auto mb-16 px-4">
            <span className="text-blue-600 font-bold uppercase tracking-widest text-3xl">
              System Purpose
            </span>
            <h1 className="mt-4 text-3xl sm:text-4xl font-black text-slate-900 tracking-tight leading-tight">
              Engineering Careers with Structural Clarity
            </h1><br/><br/>
            <p className="mt-4 text-base text-slate-500 max-w-2xl mx-auto">
              We bypass predictable formatting errors and lack of semantic parsing clarity by restructuring layouts according to active industry filters.
            </p>
          </div>
          <br/><br/><br/>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto px-12 py-18  ">

            {/* Mission Box */}
            <div className="group relative overflow-hidden bg-slate-50/50 p-8 sm:p-12 rounded-2xl border border-slate-200/60 transition-all duration-500 ease-out hover:bg-white hover:border-indigo-200 hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(79,70,229,0.15)] flex flex-col items-center text-center space-y-4">
      <br/><br/>
      {/* 1. Background Glow Effects (Hover par activate honge) */}
      <div className="absolute -top-12 -right-12 h-36 w-36 rounded-full bg-indigo-500/15 blur-2xl transition-opacity duration-500 opacity-0 group-hover:opacity-100 pointer-events-none" />
      <div className="absolute -bottom-12 -left-12 h-36 w-36 rounded-full bg-violet-500/15 blur-2xl transition-opacity duration-500 opacity-0 group-hover:opacity-100 pointer-events-none" />

      {/* 2. Gradient Icon with Lift & Rotate Animation */}
      <div className="relative w-14 h-14 rounded-2xl bg-gradient-to-tr from-indigo-600 to-violet-500 text-white flex items-center justify-center shadow-lg shadow-indigo-500/20 transition-all duration-500 group-hover:scale-110 group-hover:rotate-6 group-hover:shadow-indigo-500/40">
        <Sparkles size={22} className="transition-transform duration-500 group-hover:scale-110" />
      </div><br/>

      {/* 3. Title with Color Transition */}
      <h3 className="text-2xl font-extrabold text-slate-900 tracking-tight transition-colors duration-300 group-hover:text-indigo-600">
        Our Mission
      </h3><br/>

      {/* 4. Description Text */}
      <p className="text-sm sm:text-base text-slate-500 leading-relaxed max-w-md">
         To democratize high-end profile parsing logic, giving job seekers real-time visual analytics to seamlessly sync parameters with modern database requirements.
      </p><br/>

    </div>
    

            {/* Vision Box */}
            <div className="group relative overflow-hidden bg-white/80 backdrop-blur-md p-8 sm:p-12 rounded-2xl border border-slate-200/80 shadow-sm transition-all duration-500 hover:-translate-y-2 hover:border-indigo-300 hover:shadow-[0_20px_40px_rgba(79,70,229,0.12)] flex flex-col items-center text-center space-y-4">
<br/><br/>
  {/* 1. Ambient Background Glow Effects */}
  <div className="absolute -top-12 -right-12 h-36 w-36 rounded-full bg-indigo-500/15 blur-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100 pointer-events-none" />
  <div className="absolute -bottom-12 -left-12 h-36 w-36 rounded-full bg-violet-500/15 blur-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100 pointer-events-none" />

  {/* 2. Interactive Icon Container */}
  <div className="relative w-14 h-14 rounded-2xl bg-gradient-to-tr from-indigo-600 to-violet-500 text-white flex items-center justify-center shadow-lg shadow-indigo-500/25 transition-all duration-500 group-hover:scale-110 group-hover:rotate-6 group-hover:shadow-indigo-500/40">
    <Sparkles size={24} className="transition-transform duration-500 group-hover:scale-110" />
  </div><br/>

  {/* 3. Title with Color Transition */}
  <h3 className="text-2xl font-extrabold text-slate-900 tracking-tight transition-colors duration-300 group-hover:text-indigo-600">
    Our Vision
  </h3>
<br/>
  {/* 4. Description Text */}
  <p className="text-sm sm:text-base text-slate-500 leading-relaxed max-w-md">
    To become an automated structural standard for career growth consistently keeping pace with market transitions to put you straight onto decision-maker dashboards.
  </p><br/>

</div>
</div>
        </Container>
        </div>
      </section>
      <br/> <br/><br/><br/><br/>
      <div className="h-px w-full bg-gradient-to-r from-transparent via-slate-400 to-transparent" /><br/><br/>

      {/* ================= FEATURES SECTION ================= */}
      <section className="py-24 sm:py-32 bg-slate-50/50 px-4 sm:px-6 lg:px-8">
        <Container>
          <div className="text-center max-w-3xl mx-auto mb-16 px-4">
            <span className="text-blue-600 font-bold uppercase tracking-widest text-3xl">
              System Capabilities
            </span>
            <h1 className="mt-4 text-3xl sm:text-4xl font-black text-slate-900 tracking-tight leading-tight">
             An architecture for conversion.
            </h1><br/><br/>
            <p className="mt-4 text-base text-slate-500 max-w-2xl mx-auto">
              Identify system blockers, align section parameters, and position your portfolio ahead of automated data algorithms using real-time analytics.
            </p>
          </div>

            <br/><br/><br/><br/>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto px-4">
  {[
    { 
      icon: <FileText size={22} />, 
      title: "Automated Vectoring", 
      desc: "Granular semantic data parsing testing for visual layout weights and text alignment.", 
      color: "text-blue-600", 
      bg: "bg-blue-50",
      borderHover: "hover:border-blue-300",
      shadowHover: "hover:shadow-blue-500/10",
      glowBg: "bg-blue-500/10"
    },
    { 
      icon: <ShieldCheck size={22} />, 
      title: "ATS Sandbox Analysis", 
      desc: "Instantly route formatting structure against modern active parsing gates.", 
      color: "text-emerald-600", 
      bg: "bg-emerald-50",
      borderHover: "hover:border-emerald-300",
      shadowHover: "hover:shadow-emerald-500/10",
      glowBg: "bg-emerald-500/10"
    },
    { 
      icon: <Bot size={22} />, 
      title: "Context Simulation", 
      desc: "Conversational machine learning systems adapting to real technical roles.", 
      color: "text-purple-600", 
      bg: "bg-purple-50",
      borderHover: "hover:border-purple-300",
      shadowHover: "hover:shadow-purple-500/10",
      glowBg: "bg-purple-500/10"
    },
    { 
      icon: <Zap size={22} />, 
      title: "Dynamic Tuning", 
      desc: "Granular phrase transformations offered section-by-section for maximum conversion.", 
      color: "text-amber-600", 
      bg: "bg-amber-50",
      borderHover: "hover:border-amber-300",
      shadowHover: "hover:shadow-amber-500/10",
      glowBg: "bg-amber-500/10"
    }
  ].map((feature, idx) => (
    <div
      key={idx}
      className={`group relative overflow-hidden bg-white p-7 rounded-2xl border border-slate-200/80 shadow-sm transition-all duration-300 ease-out hover:-translate-y-2 hover:shadow-xl ${feature.borderHover} ${feature.shadowHover} flex flex-col items-center text-center h-full space-y-4`}
    >
<br/><br/>      {/* Background Soft Glow (Hover Par Visible Hoga) */}
      <div 
        className={`absolute -top-10 -right-10 h-32 w-32 rounded-full ${feature.glowBg} blur-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100 pointer-events-none`} 
      />

      {/* Icon with Scale & Mild Rotate Animation */}
      <div
        className={`w-14 h-14 rounded-2xl ${feature.bg} ${feature.color} flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:rotate-3 shadow-sm`}
      >
        {feature.icon}
      </div>
<br/>
      {/* Title */}
      <h3 className="text-lg font-bold text-slate-900 tracking-tight transition-colors duration-300">
        {feature.title}
      </h3><br/>

      {/* Description */}
      <p className="text-sm text-slate-500 leading-relaxed flex-grow">
        {feature.desc}
      </p><br/><br/>
    </div>
  ))}
</div>
        </Container>
      </section>
            <br/><br/><br/><br/><br/>
            <div className="h-px w-full bg-gradient-to-r from-transparent via-slate-400 to-transparent" /><br/><br/>
      {/* ================= TECH STACK SECTION ================= */}
      <section className="py-24 bg-white border-t border-slate-100 px-4 sm:px-6 lg:px-8">
        <Container>
          <div className="text-center max-w-2xl mx-auto mb-16 px-4">
            <span className="text-blue-600 uppercase tracking-widest font-bold text-3xl">
             Platform Integrity
            </span>
            <br/>
            <h2 className="mt-4 text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
             Built on Modern Paradigms.
            </h2>
          </div>
          
            <br/><br/><br/>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto px-4">
  {[
    { title: "React 18 Architecture", icon: <Layers size={20} />, color: "text-blue-600", bg: "bg-blue-50", borderHover: "hover:border-blue-300", glowBg: "bg-blue-500/15" },
    { title: "Vite Compilation", icon: <Zap size={20} />, color: "text-amber-600", bg: "bg-amber-50", borderHover: "hover:border-amber-300", glowBg: "bg-amber-500/15" },
    { title: "Tailwind CSS Engine", icon: <Code2 size={20} />, color: "text-cyan-600", bg: "bg-cyan-50", borderHover: "hover:border-cyan-300", glowBg: "bg-cyan-500/15" },
    { title: "Client Side Isolation", icon: <ShieldCheck size={20} />, color: "text-emerald-600", bg: "bg-emerald-50", borderHover: "hover:border-emerald-300", glowBg: "bg-emerald-500/15" },
    { title: "Async Pipeline Data", icon: <Cpu size={20} />, color: "text-purple-600", bg: "bg-purple-50", borderHover: "hover:border-purple-300", glowBg: "bg-purple-500/15" },
    { title: "AI Agent Framework", icon: <Bot size={20} />, color: "text-indigo-600", bg: "bg-indigo-50", borderHover: "hover:border-indigo-300", glowBg: "bg-indigo-500/15" },
    { title: "Encrypted Routing", icon: <Terminal size={20} />, color: "text-slate-600", bg: "bg-slate-100", borderHover: "hover:border-slate-300", glowBg: "bg-slate-500/15" },
    { title: "Next-Gen Analytics", icon: <Sparkles size={20} />, color: "text-rose-600", bg: "bg-rose-50", borderHover: "hover:border-rose-300", glowBg: "bg-rose-500/15" }
  ].map((tech, i) => (
    <div
      key={i}
      className={`group relative overflow-hidden flex flex-col items-center justify-center gap-3 p-6 rounded-2xl border border-slate-200/80 bg-white shadow-sm transition-all duration-300 ease-out hover:-translate-y-1.5 hover:shadow-lg ${tech.borderHover} cursor-pointer`}
    >
      {/* Background Soft Glow (Hover Par Fade-In Hoga) */}
      <div
        className={`absolute -top-8 -right-8 h-28 w-28 rounded-full ${tech.glowBg} blur-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100 pointer-events-none`}
      /><br/>

      {/* Icon with Zoom & Mild Tilt Animation */}
      <div className={`p-3 rounded-xl ${tech.bg} ${tech.color} transition-all duration-300 group-hover:scale-110 group-hover:rotate-3 shadow-sm`}>
        {tech.icon}
      </div>

      {/* Label Text */}
      <span className="text-xs font-bold text-slate-800 tracking-wide text-center transition-colors duration-300 group-hover:text-slate-900">
        {tech.title}
      </span><br/>
    </div>
  ))}
</div>
        </Container>
      </section>
            <br/><br/><br/><br/><br/><br/>
            <div className="h-px w-full bg-gradient-to-r from-transparent via-slate-400 to-transparent" /><br/>
      {/* ================= FIXED SQUARE CTA BANNER SECTION ================= */}
      <section className="bg-slate-950 text-white py-24 sm:py-32 px-6 sm:px-12 lg:px-16 relative overflow-hidden w-full">
        {/* Simple Square Glows */}
        <div className="absolute top-0 left-0 h-40 w-40 bg-blue-600/10 blur-[100px] pointer-events-none" />
        <div className="absolute bottom-0 right-0 h-40 w-40 bg-cyan-500/10 blur-[100px] pointer-events-none" />

        <Container>
          <br/><br/><br/>
          <div className="relative z-10 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-12 max-w-6xl mx-auto">
            
            <div className="space-y-4 max-w-3xl">
              <h1 className="text-3xl sm:text-2xl lg:text-5xl font-black tracking-tight leading-tight">
                Accelerate profile conversion rate instantly.
              </h1><br/>
              <p className="text-base sm:text-lg text-slate-400 opacity-90 leading-relaxed">
                Identify system blockers, align section parameters, and position your portfolio ahead of automated data algorithms using real-time analytics.
              </p>
            </div><br/>

            <div className="flex flex-col sm:flex-row items-center gap-4 flex-shrink-0 w-full sm:w-auto">
              <Link
                to="/upload"
                className="inline-flex items-center justify-center gap-2.5 rounded-xl bg-white px-8 py-4 text-base font-bold text-slate-950 shadow-md hover:bg-slate-100 transition-all w-full sm:w-56 active:scale-95"
              >
                Get Started Now
                <ArrowRight size={18} className="text-blue-600" />
              </Link>

              <Link
                to="/chatbot"
                className="inline-flex items-center justify-center gap-2.5 rounded-xl border border-white/10 bg-white/5 backdrop-blur-md px-8 py-4 text-base font-bold text-white hover:bg-white/10 transition-all w-full sm:w-56 active:scale-95"
              >
                Consult Engine
              </Link>
            </div><br/><br/><br/><br/>

          </div>
        </Container>
      </section>

    </div>
  );
};

export default About;