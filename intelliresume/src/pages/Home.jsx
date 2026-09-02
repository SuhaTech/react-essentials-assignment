import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  Sparkles, 
  ShieldCheck, 
  Terminal, 
  BrainCircuit, 
  Cpu, 
  Upload, 
  FileText, 
  TrendingUp, 
  User, 
  CheckCircle2,
  Bot,
  Zap,
  RefreshCw,
  PlayCircle
} from 'lucide-react';
import Container from '../components/Container';
import atsImage from '../assets/ats.png';
import demoVideo from "../assets/demo.mp4";

const dynamicFeatures = [
  {
    icon: <Terminal size={22} className="text-blue-600" />,
    tag: "Parsing Engine",
    title: "Deep Semantic Scanning",
    description: "Goes beyond simple regex matching. Our parser maps contextual hierarchies to ensure your stack profile reads cleanly.",
  },
  {
    icon: <ShieldCheck size={22} className="text-emerald-600" />,
    tag: "Compliance Model",
    title: "Real-Time ATS Strategy",
    description: "Instantly cross-references structural compliance constraints against standard enterprise tracking parameters.",
  },
  {
    icon: <BrainCircuit size={22} className="text-indigo-600" />,
    tag: "LLM Execution",
    title: "AI Action Phrase Tuning",
    description: "Transforms passive task text lists into high-impact, metric-driven engineering bullet points.",
  },
  {
    icon: <Cpu size={22} className="text-violet-600" />,
    tag: "Simulation Suite",
    title: "Targeted Interview Prep",
    description: "Generates custom mock technical rounds tailored to your extracted skills and framework history.",
  },
];

const Home = () => {
  const [showVideo, setShowVideo] = useState(false);
  return (
    <div className="w-full bg-slate-50 min-h-screen font-sans antialiased selection:bg-blue-500 selection:text-white">
      
      {/* PREMIUM HERO SECTION */}
      <section style={{ 
        position: 'relative',
        padding: '60px 20px 90px 20px', 
        backgroundColor: '#ffffff', 
        backgroundImage: 'radial-gradient(at 0% 0%, rgba(219, 234, 254, 0.3) 0px, transparent 50%), radial-gradient(at 100% 100%, rgba(243, 232, 255, 0.3) 0px, transparent 50%)',
        borderBottom: '1px solid #f1f5f9',
        overflow: 'hidden'
      }}>
        <div style={{ position: 'absolute', top: '20%', left: '50%', transform: 'translate(-50%, -50%)', width: '400px', height: '400px', background: 'rgba(37, 99, 235, 0.05)', filter: 'blur(80px)', borderRadius: '50%', zIndex: 0 }}></div>

        <Container>
          <div className="mx-auto" style={{ position: 'relative', zIndex: 1, maxWidth: '800px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '20px' }}>
            
            {/* Pill Badge */}
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
              <span style={{ fontSize: '12px', fontWeight: '600', color: '#1d4ed8', letterSpacing: '0.02em' }}>Next-Gen Resume Intelligence</span>
            </div>

            {/* Title */}
            <h1 style={{ 
              fontSize: '54px', 
              fontWeight: '900', 
              color: '#0f172a', 
              lineHeight: '1.12', 
              letterSpacing: '-0.03em',
              textAlign: 'center'
            }}>
              Build a Resume That <br />
              Gets You <span style={{ background: 'linear-gradient(to right, #2563eb, #3b82f6)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Hired.</span>
            </h1>

            {/* Subtitle */}
            <p style={{ fontSize: '16px', color: '#64748b', lineHeight: '1.65', maxWidth: '620px', margin: '0 auto', textRendering: 'optimizeLegibility' }}>
              Stop applying blindly. Upload your resume, receive instant AI-powered insights, optimize your ATS score, and prepare for interviews on a single intelligent platform.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row justify-center items-center" style={{ gap: '16px', paddingTop: '12px' }}>
              <Link to="/upload" style={{
                backgroundColor: '#2563eb',
                color: '#ffffff',
                padding: '14px 28px',
                borderRadius: '12px',
                fontWeight: '600',
                fontSize: '15px',
                boxShadow: '0 10px 15px -3px rgba(37, 99, 235, 0.25)',
                transition: 'all 0.2s',
                display: 'inline-flex',
                alignItems: 'center'
              }} className="group relative inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-blue-600 hover:bg-blue-700 text-white font-semibold text-[15px] rounded-xl shadow-lg shadow-blue-500/25 hover:shadow-xl hover:shadow-blue-500/35 hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98] transition-all duration-200 overflow-hidden">
               <span className="absolute inset-0 w-full h-full bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
        
        <span>Scan Your Resume</span>
        <ArrowRight size={18} className="transform transition-transform duration-200 group-hover:translate-x-1" />
      </Link>
              <button
  onClick={() => setShowVideo(true)}
  style={{
    backgroundColor: '#ffffff',
    color: '#334155',
    padding: '14px 28px',
    borderRadius: '12px',
    fontWeight: '600',
    fontSize: '15px',
    border: '1px solid #e2e8f0',
    boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
    transition: 'all 0.2s',
    display: 'inline-flex',
    alignItems: 'center',
    cursor: 'pointer'
  }}
  className="group relative inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-blue-600 hover:bg-blue-700 text-white font-semibold text-[15px] rounded-xl shadow-lg shadow-blue-500/25 hover:shadow-xl hover:shadow-blue-500/35 hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98] transition-all duration-200 overflow-hidden"
>
  <PlayCircle
    size={18}
    className="text-slate-400 group-hover:text-blue-600 transition-colors duration-200"
  />
  <span>See How It Works</span>
</button>
            </div>

          </div>
        </Container>
      </section>
      {/* Section Separator Gradient */}
<div className="h-px w-full bg-gradient-to-r from-transparent via-slate-400 to-transparent" />
      

      {/* ENHANCED INTERACTIVE FEATURE MOCKUP SECTION */}
      <section style={{ padding: '120px 20px', backgroundColor: '#ffffff', borderBottom: '1px solid #f1f5f9', position: 'relative', overflow: 'hidden' }}className="relative overflow-hidden bg-white ">
        <div style={{ position: 'absolute', right: '0', bottom: '10%', width: '500px', height: '500px', background: 'radial-gradient(circle, rgba(59,130,246,0.08) 0%, transparent 70%)', pointerEvents: 'none' }}></div>
        <div style={{ position: 'absolute', left: '-10%', top: '20%', width: '300px', height: '300px', background: 'radial-gradient(circle, rgba(99,102,241,0.05) 0%, transparent 70%)', pointerEvents: 'none' }}></div>
        
        <Container>
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center max-w-6xl mx-auto">
            
            {/* Left Column: Comprehensive Information & Actions */}
            <div className="lg:col-span-5 flex flex-col gap-6">
              <div style={{ backgroundColor: '#eff6ff', border: '1px solid #dbeafe', padding: '6px 14px', borderRadius: '9999px', display: 'inline-flex', alignItems: 'center', gap: '6px', width: 'fit-content' }}>
                <Sparkles size={12} className="text-blue-600" />
                <span style={{ fontSize: '11px', fontWeight: '700', color: '#2563eb', textTransform: 'uppercase', letterSpacing: '0.05em' }}>AI Engine v2.0 Active</span>
              </div>
              
              <h2 style={{ fontSize: '44px', fontWeight: '800', color: '#0f172a', letterSpacing: '-0.03em', lineHeight: '1.15' }}>
                Rewrite Your Resume <br />with Precision <span style={{ color: '#2563eb' }}>AI</span>
              </h2>
              
              <p style={{ fontSize: '15px', color: '#475569', lineHeight: '1.7' }}>
                Generic resumes get buried in modern Application Tracking Systems (ATS). Our specialized LLM doesn't just rephrase words—it dissects your engineering stack, calculates historical metrics, and translates raw technical duties into high-impact performance outcomes.
              </p>

              <p style={{ fontSize: '14px', color: '#64748b', lineHeight: '1.6' }}>
                By mapping your history to live industry benchmarks, IntelliResume eliminates weak verbs, fills vital keyword gaps, and crafts bullet points tailored directly to top enterprise recruiters.
              </p>

              {/* Miniature Features List */}
              <div className="flex flex-col gap-4 mt-2">
                <div className="flex items-start gap-3.5">
                  <div className="p-2.5 rounded-xl bg-blue-50 text-blue-600 mt-0.5"><FileText size={18} /></div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-800">Contextual Action-Phrase Optimization</h4>
                    <p className="text-xs text-slate-500 mt-1 leading-relaxed">Converts flat descriptions like <i>\"worked on backend\"</i> into metric-focused sentences like <i>\"Architected cloud infrastructure reducing latency by 24%\"</i>.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="p-2.5 rounded-xl bg-emerald-50 text-emerald-600 mt-0.5"><ShieldCheck size={18} /></div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-800">Dynamic Multi-Criteria ATS Alignment</h4>
                    <p className="text-xs text-slate-500 mt-1 leading-relaxed">Cross-validates document structure, heading syntax, and hard-skill frequencies against corporate screening compliance logs.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="p-2.5 rounded-xl bg-indigo-50 text-indigo-600 mt-0.5"><TrendingUp size={18} /></div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-800">Industry-Specific Keyword Mapping</h4>
                    <p className="text-xs text-slate-500 mt-1 leading-relaxed">Automatically detects missing framework dependencies required by recruiters for your specific target role.</p>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-4 mt-4">
                <Link to="/upload" style={{
                backgroundColor: '#2563eb',
                color: '#ffffff',
                padding: '14px 28px',
                borderRadius: '12px',
                fontWeight: '600',
                fontSize: '15px',
                boxShadow: '0 10px 15px -3px rgba(37, 99, 235, 0.25)',
                transition: 'all 0.2s',
                display: 'inline-flex',
                alignItems: 'center'
              }} className="group relative inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-blue-600 hover:bg-blue-700 text-white font-semibold text-[15px] rounded-xl shadow-lg shadow-blue-500/25 hover:shadow-xl hover:shadow-blue-500/35 hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98] transition-all duration-200 overflow-hidden">
                  <Upload size={16} /> Upload Resume <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link to="/ai-assistant" style={{
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
              }} className="group relative inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-slate-800 hover:bg-slate-700 text-white font-semibold text-[15px] rounded-xl shadow-lg shadow-slate-500/25 hover:shadow-xl hover:shadow-slate-500/35 hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98] transition-all duration-200 overflow-hidden">
                  <Sparkles size={16} className="text-amber-400" /> Try Live AI Assistant
                </Link>
              </div>
            </div>

            {/* Right Column: Beautiful High-Fidelity Mockup Dashboard */}
            {/* Right Column: High-Impact Visual Diagram with Modern Effects */}
<div className="lg:col-span-7 relative flex items-center justify-center p-2 sm:p-4">
  {/* Tech Background Grid overlay */}
  <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:2rem_2rem] opacity-25 pointer-events-none rounded-3xl"></div>

  <div className="w-full bg-slate-900/90 backdrop-blur-xl rounded-3xl p-3 border border-slate-800 shadow-2xl relative overflow-hidden group">
    
    {/* Animated Ambient Glow */}
    <div className="absolute -top-10 -right-10 w-72 h-72 bg-blue-600/20 rounded-full blur-3xl pointer-events-none group-hover:bg-blue-500/30 transition-all duration-700"></div>
    <div className="absolute -bottom-10 -left-10 w-72 h-72 bg-emerald-600/20 rounded-full blur-3xl pointer-events-none group-hover:bg-emerald-500/30 transition-all duration-700"></div>

    {/* Image Container Frame */}
    <div className="relative rounded-2xl overflow-hidden border border-slate-800/80 shadow-inner bg-slate-950">
      
      {/* Scanning Radar Line */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-blue-400 to-transparent opacity-80 shadow-[0_0_12px_#3b82f6] animate-scan pointer-events-none z-10"></div>

      <img src={atsImage} alt="ATS Features Wheel" className="w-full h-auto object-contain rounded-2xl transition-transform duration-500 group-hover:scale-[1.02]" />

      {/* Non-Overlapping Live Status Pill */}
      <div className="absolute top-4 right-4 bg-slate-950/85 backdrop-blur-md border border-slate-800 px-3.5 py-1.5 rounded-full flex items-center gap-2 shadow-xl z-20">
        <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse"></span>
        <span className="text-xs font-mono font-bold text-emerald-400">ATS Precision: 98%</span>
      </div>
    </div>

  </div>

  {/* Floating Glassmorphism Badge - Top Left */}
  <div className="hidden sm:flex absolute -top-2 -left-2 bg-slate-900/95 backdrop-blur-md border border-slate-700/60 p-3 rounded-2xl shadow-2xl items-center gap-3 animate-bounce [animation-duration:5s] z-30">
    <div className="p-2 bg-blue-500/20 text-blue-400 rounded-xl">
      <Sparkles size={16} />
    </div>
    <div>
      <p className="text-[10px] text-slate-400 font-medium leading-none">ATS Match</p>
      <p className="text-xs font-bold text-white mt-1">Top 2% Tier 🔥</p>
    </div>
  </div>

  {/* Floating Glassmorphism Badge - Bottom Right */}
  <div className="hidden sm:flex absolute -bottom-2 -right-2 bg-slate-900/95 backdrop-blur-md border border-slate-700/60 p-3 rounded-2xl shadow-2xl items-center gap-3 z-30">
    <div className="p-2 bg-emerald-500/20 text-emerald-400 rounded-xl">
      <ShieldCheck size={16} />
    </div>
    <div>
      <p className="text-[10px] text-slate-400 font-medium leading-none">Status</p>
      <p className="text-xs font-bold text-emerald-400 mt-1">Ready for Recruiters</p>
    </div>
  </div>
</div>

          </div>
        </Container>
      </section>
      {/* Section Separator Gradient */}
<div className="h-px w-full bg-gradient-to-r from-transparent via-slate-400 to-transparent" />

      {/* RE-DESIGNED WHY CHOOSE SECTION WITH DYNAMIC GLASS CARD DESIGN */}
      <section style={{ padding: '100px 20px', backgroundColor: '#f8fafc' }} className="relative overflow-hidden bg-white">
        <Container>
          
          {/* Header */}
          <div className="mx-auto text-center" style={{ maxWidth: '650px', marginBottom: '64px', display: 'flex', flexDirection: 'column', gap: '14px' }}>
            <h2 style={{ fontSize: '36px', fontWeight: '800', color: '#0f172a', letterSpacing: '-0.02em' }}>
              Why Choose IntelliResume?
            </h2>
            <p style={{ fontSize: '15px', color: '#64748b', lineHeight: '1.6' }}>
              Engineered with advanced language synthesis algorithms and strict structural parsing frameworks to guarantee top-tier corporate compliance.
            </p>
          </div>

          {/* 4 Cards Grid Layout */}
          <div style={{ 
  display: 'grid', 
  gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', 
  gap: '24px', 
  maxWidth: '1200px', 
  margin: '0 auto',
  padding: '16px' // Taaki lift effect ke liye space rahe
}}>
  {dynamicFeatures.map((item, index) => (
    <div 
      key={index} 
      // Tailwind classes or native className for hover triggers
      className="group" 
      style={{ 
        backgroundColor: '#ffffff', 
        border: '1px solid #e2e8f0', 
        borderRadius: '16px', 
        textAlign: 'left',
        display: 'flex',
        flexDirection: 'column',
        padding: '28px',
        // --- Core Transition Styling ---
        boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.02), 0 2px 4px -1px rgba(0, 0, 0, 0.01)',
        transition: 'transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275), box-shadow 0.3s ease-in-out',
        position: 'relative',
        cursor: 'pointer' // puri card clickable feel
      }}
      // --- Hover Events handled via JS style object for simplicity in this format ---
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'translateY(-8px)';
        e.currentTarget.style.boxShadow = '0 20px 25px -5px rgba(0, 0, 0, 0.05), 0 10px 10px -5px rgba(0, 0, 0, 0.02)';
        e.currentTarget.style.borderColor = '#93c5fd'; // Optional: light blue border on hover
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'translateY(0)';
        e.currentTarget.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.02), 0 2px 4px -1px rgba(0, 0, 0, 0.01)';
        e.currentTarget.style.borderColor = '#e2e8f0';
      }}
    >
      {/* Icon Node */}
      <div style={{ 
        width: '46px', 
        height: '46px', 
        borderRadius: '12px', 
        backgroundColor: '#f1f5f9', 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center',
        marginBottom: '20px',
        // Minor icon background transition
        transition: 'background-color 0.3s ease'
      }}
      className="group-hover:bg-blue-50" // Tailwind shortcut if available, else use JS mouse event
      >
        {item.icon}
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
        <span style={{ 
          fontSize: '10px', fontWeight: '700', textTransform: 'uppercase', 
          color: '#64748b', letterSpacing: '0.05em', marginBottom: '6px' 
        }}>
          {item.tag}
        </span>
        
        <h3 style={{ fontSize: '18px', fontWeight: '700', color: '#0f172a', marginBottom: '8px' }}>
          {item.title}
        </h3>
        
        <p style={{ fontSize: '13px', color: '#64748b', lineHeight: '1.6', marginBottom: '24px' }}>
          {item.description}
        </p>

        {/* Footer Link */}
        <div style={{ 
          marginTop: 'auto', paddingTop: '14px', borderTop: '1px solid #f1f5f9', 
          display: 'flex', alignItems: 'center', fontSize: '12px', 
          fontWeight: '700', color: '#2563eb'
        }}
        >
          <span>Explore Metric</span>
          <ArrowRight 
            size={14} 
            style={{ 
              marginLeft: '6px',
              transition: 'transform 0.3s ease'
            }} 
            className="group-hover:translate-x-1" // Tailwind or JS trigger: move arrow
          />
        </div>
      </div>
    </div>
  ))}
</div>
{showVideo && (
  <div
    className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/70 backdrop-blur-sm"
    onClick={() => setShowVideo(false)}
  >
    <div
      className="relative w-[90%] max-w-5xl bg-black rounded-2xl overflow-hidden shadow-2xl"
      onClick={(e) => e.stopPropagation()}
    >
      <button
        onClick={() => setShowVideo(false)}
        className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-white text-black font-bold hover:bg-red-500 hover:text-white transition"
      >
        ✕
      </button>

      <video
        src={demoVideo}
        controls
        autoPlay
        className="w-full rounded-2xl"
      />
    </div>
  </div>
)}

        </Container>
      </section>

    </div>
    
  );
};

export default Home;