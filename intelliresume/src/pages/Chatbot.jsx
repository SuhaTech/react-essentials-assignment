import React, { useState, useRef, useEffect } from "react";
import {
  Bot,
  FileText,
  Sparkles,
  Briefcase,
  MessageCircle,
  FileBadge2,
  Send,
  Paperclip,
  Mic,
  RefreshCcw,
  ChevronRight,
  Sparkle,
  ArrowUp,
  FileCheck,
  TrendingUp,
  UserCheck,
  HelpCircle,
  Undo2
} from "lucide-react";

// Perfectly designed custom inline SVG for LinkedIn to avoid Lucide import breaks
const Linkedin= (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const quickActions = [
  {
    title: "Resume Review",
    tag: "PARSING ENGINE",
    icon: FileText,
    bgColor: "#f1f5f9", // Light Slate
    iconColor: "#475569",
    description:
      "Get comprehensive critiques of your format, structure, and readability gaps.",
  },
  {
    title: "ATS Score Analyzer",
    tag: "COMPLIANCE MODEL",
    icon: Sparkles,
    bgColor: "#ecfdf5", // Light Emerald
    iconColor: "#059669",
    description:
      "Audit your CV alignment against search algorithms and core industry keywords.",
  },
  {
    title: "Interview Prep Simulator",
    tag: "SIMULATION SUITE",
    icon: Briefcase,
    bgColor: "#eff6ff", // Light Blue
    iconColor: "#2563eb",
    description:
      "Practice custom role-specific questions with immediate, actionable expert coaching.",
  },
  {
    title: "Career Navigation",
    tag: "STRATEGY ENGINE",
    icon: MessageCircle,
    bgColor: "#faf5ff", // Light Purple
    iconColor: "#9333ea",
    description:
      "Map salary raises, pivot pathways, and master high-stakes promotion negotiations.",
  },
  {
    title: "Cover Letter Crafter",
    tag: "CONTENT GENERATOR",
    icon: FileBadge2,
    bgColor: "#fffbeb", // Light Amber
    iconColor: "#d97706",
    description:
      "Generate highly compelling, hyper-targeted narrative letters that engage recruiters.",
  },
  {
    title: "LinkedIn Booster",
    tag: "PROFILE OPTIMIZATION",
    icon: Linkedin,
    bgColor: "#eef2ff", // Light Indigo
    iconColor: "#4f46e5",
    description:
      "Re-engineer headlines, search index discoverability, and summary hooks.",
  },
];
const suggestedQuestions = [
  "🔍 Analyze ATS Structure",
  "📝 Rewrite Professional Hook",
  "⚡ Structure STAR Bullets",
  "💼 Common Interview Scenarios",
  "🎯 Extract Job Keywords"
];

const Chatbot = () => {
  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: 'ai',
      text: "👋 **Welcome to your Ultimate AI Career Launchpad!**\n\nI'm your intelligent virtual career guide. I'm optimized to audit resumes, predict ATS parser compatibility, and conduct mock prep sessions.\n\nType your question in the chat terminal below, or select any of the high-impact **Specialized Toolkits** at the bottom of the page to auto-launch specific templates!",
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    }
  ]);

  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [isListening, setIsListening] = useState(false);
  const [attachedFile, setAttachedFile] = useState(null);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [stats, setStats] = useState({
    scannedResumes: 8,
    atsMatchIndex: 81,
    interviewsReady: 3
  });

  const chatContainerRef = useRef(null);
  const fileInputRef = useRef(null);
  const chatSectionRef = useRef(null);

  const scrollToBottom = () => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTo({
        top: chatContainerRef.current.scrollHeight,
        behavior: "smooth"
      });
    }
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  const getSimulatedResponse = (userPrompt) => {
    const promptLower = userPrompt.toLowerCase();
    
    if (promptLower.includes("resume review") || promptLower.includes("structure") || promptLower.includes("rewrite")) {
      return `### 🔍 Resume Structural Review & Auditing\n\nHere is a diagnostic overview of your layout structure based on industry benchmarks:\n\n- **Action Verbs first:** Never write "responsible for." Use strong action verbs like "Designed," "Orchestrated," or "Engineered."\n- **The Rule of Impact:** Always format bullet points to follow: **[Action Done] + [Scale/Methodology] = [Quantified Business Value]**.\n- **Clutter Elimination:** Remove skills bars, photos, and columns which confuse simple modern parsers.\n\n*Drop or upload your document (.pdf, .docx) using the attachment icon below, and I will generate a comprehensive breakdown line-by-line!*`;
    }

    if (promptLower.includes("ats") || promptLower.includes("ats score") || promptLower.includes("keywords")) {
      return `### 📊 ATS Compatibility Scan Analysis\n\nModern parsers search for specific, contextual exact-match keywords. To improve your readiness:\n\n1. **Standardize Headers:** Use standard section headers like "Professional Experience" instead of "My Career Story."\n2. **Text Formats:** Avoid using text-boxes, tables, and custom vector templates.\n3. **Match Keyword Frequency:** Find the top 3 soft/hard skills in your target description and integrate them 2-3 times across your CV.\n\n**💡 Try this:** Paste your target Job Description alongside your current bio, and I will generate an exact score comparison!`;
    }

    if (promptLower.includes("interview") || promptLower.includes("prep") || promptLower.includes("questions")) {
      return `### 🎯 STAR Method Interview Simulator Active\n\nI am now acting as your Lead hiring coordinator. Let's practice a core scenario:\n\n> *"Describe a time when you had to manage an extremely tight deadline with incomplete information. What was your framework, and what was the result?"*\n\n**💡 Coaching Advice:** Use the **STAR Framework**:\n- **Situation:** Set the scene in 1 sentence.\n- **Task:** Define your exact responsibility.\n- **Action:** The step-by-step logic you executed.\n- **Result:** The business metric or outcome (always include a number!).\n\nReply below when you're ready, and I will instantly analyze your response structure!`;
    }

    if (promptLower.includes("cover letter")) {
      return `### ✉️ Persuasive Cover Letter Draft Engine\n\nLet's write a high-impact cover letter. To avoid clichés, we will structure it with:\n- **The Hook:** A direct statement highlighting a specific corporate goal you are ready to solve.\n- **The Proof:** A brief, highly quantified career milestone demonstrating your capability.\n- **The Call to Action:** A direct invite for a dialog to discuss specific team solutions.\n\nProvide me with your **Target Position** and **Company Name** below to get started!`;
    }

    if (promptLower.includes("linkedin") || promptLower.includes("profile")) {
      return `### 🚀 LinkedIn Profile SEO Roadmap\n\nTo increase your passive recruiter search appearance rate, focus on these areas:\n\n1. **Optimized Headline:** Use: \`[Target Title] | 3 Core Tech Stacks / Methodologies | 1 Core Metric\`.\n2. **The About Hook:** Start with your core passion, then lay out a bulleted list of technical skills and operational frameworks.\n3. **Inbound Funnel:** Clean up your experience summaries so they tell a consistent story matching your uploaded resume.\n\nPaste your current headline below, and I'll generate 3 high-converting variants right now!`;
    }

    return `I've received your query regarding **"${userPrompt}"**.\n\nTo provide the most targeted advice, feel free to copy-paste your resume content, upload a resume file, or provide the target job description. How would you like to proceed?`;
  };

  const handleSend = (textInput) => {
    const targetText = typeof textInput === "string" ? textInput : input;
    if (!targetText.trim() && !attachedFile) return;

    let finalMessageText = targetText;
    if (attachedFile) {
      finalMessageText = `📁 **Document Attached:** *${attachedFile.name}*\n\n${targetText || "Audit this attached document and check for formatting and layout compliance."}`;
    }

    const newUserMsg = {
      id: Date.now(),
      sender: "user",
      text: finalMessageText,
      time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
    };

    setMessages(prev => [...prev, newUserMsg]);
    setInput("");
    setAttachedFile(null);
    setUploadProgress(0);
    setIsTyping(true);

    setTimeout(() => {
      setIsTyping(false);
      const aiResponse = getSimulatedResponse(targetText || "resume assessment");
      
      const newAiMsg = {
        id: Date.now() + 1,
        sender: "ai",
        text: aiResponse,
        time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
      };
      
      setMessages(prev => [...prev, newAiMsg]);

      // Dynamic stats calculation to update UI values gracefully
      if (targetText.toLowerCase().includes("ats")) {
        setStats(prev => ({ ...prev, atsMatchIndex: 88, scannedResumes: prev.scannedResumes + 1 }));
      } else if (targetText.toLowerCase().includes("interview")) {
        setStats(prev => ({ ...prev, interviewsReady: prev.interviewsReady + 1 }));
      } else if (attachedFile) {
        setStats(prev => ({ ...prev, scannedResumes: prev.scannedResumes + 1, atsMatchIndex: 85 }));
      }
    }, 1100);
  };

  const handleQuickActionClick = (action) => {
    if (chatSectionRef.current) {
      chatSectionRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    
    // Slight delay to allow smooth scrolling to finalize
    setTimeout(() => {
      handleSend(action.placeholder);
    }, 550);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const triggerVoiceSimulation = () => {
    if (isListening) {
      setIsListening(false);
    } else {
      setIsListening(true);
      setInput("Listening for voice input...");
      setTimeout(() => {
        setIsListening(false);
        setInput("How do I structure my career achievements for maximum ATS readability?");
      }, 2000);
    }
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setAttachedFile(file);
      setUploadProgress(15);
      const interval = setInterval(() => {
        setUploadProgress(prev => {
          if (prev >= 100) {
            clearInterval(interval);
            return 100;
          }
          return prev + 35;
        });
      }, 150);
    }
  };

  const handleResetChat = () => {
    setMessages([
      {
        id: Date.now(),
        sender: 'ai',
        text: "🔄 Conversational stream refreshed. I am ready to process your next resume audit or prep session!",
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      }
    ]);
  };

  const formatMessageText = (text) => {
    return text.split('\n').map((line, index) => {
      let formattedLine = line;
      
      if (formattedLine.startsWith('### ')) {
        return <h3 key={index} className="text-sm font-bold text-slate-800 mt-4 mb-2 first:mt-0">{formattedLine.replace('### ', '')}</h3>;
      }
      if (formattedLine.startsWith('- ')) {
        return (
          <li key={index} className="ml-5 list-disc text-slate-600 my-1 leading-relaxed text-xs sm:text-sm">
            {parseInlineStyles(formattedLine.replace('- ', ''))}
          </li>
        );
      }
      if (formattedLine.startsWith('> ')) {
        return (
          <blockquote key={index} className="border-l-4 border-indigo-500 bg-indigo-50/50 px-4 py-3 my-3 italic rounded-r-2xl text-slate-700 text-xs sm:text-sm">
            {parseInlineStyles(formattedLine.replace('> ', ''))}
          </blockquote>
        );
      }
      return <p key={index} className="mb-2 text-slate-600 leading-relaxed text-xs sm:text-sm">{parseInlineStyles(formattedLine)}</p>;
    });
  };

  const parseInlineStyles = (text) => {
    const boldRegex = /\*\*(.*?)\*\*/g;
    const parts = [];
    let lastIndex = 0;
    let match;

    while ((match = boldRegex.exec(text)) !== null) {
      const textBefore = text.substring(lastIndex, match.index);
      const boldText = match[1];
      
      if (textBefore) parts.push(textBefore);
      parts.push(<strong key={match.index} className="font-semibold text-slate-900">{boldText}</strong>);
      lastIndex = boldRegex.lastIndex;
    }

    const remainingText = text.substring(lastIndex);
    if (remainingText) parts.push(remainingText);

    return parts.length > 0 ? parts : text;
  };

  return (
    <section className="relative min-h-screen bg-slate-50/30 font-sans text-slate-900 pb-20 pt-4 md:pt-8 selection:bg-indigo-100">
      
      {/* Background soft ambient glowing gradient blobs (Zero Absolute Overlaps on elements) */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[380px] bg-gradient-to-b from-indigo-100/30 via-sky-100/20 to-transparent blur-[100px] pointer-events-none -z-10" />
      <div className="absolute bottom-1/4 right-[5%] w-80 h-80 rounded-full bg-violet-200/20 blur-[100px] pointer-events-none -z-10" />

      {/* FULL-WIDTH CONTAINER OPTIMIZED FOR UNLIMITED SCREEN REAL ESTATE */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 flex flex-col gap-10">
        
        {/* HERO TITLE SECTION - Minimalist and Crisp */}
        <header className="text-center py-4"><br/><br/>
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
                      <span style={{ fontSize: '12px', fontWeight: '600', color: '#1d4ed8', letterSpacing: '0.02em' }}>Platform Edition v4.0</span>
                    </div>
          <br/><br/>
          <h1 style={{ 
              fontSize: '54px', 
              fontWeight: '900', 
              color: '#0f172a', 
              lineHeight: '1.12', 
              letterSpacing: '-0.03em',
              textAlign: 'center'
            }}>
              Your Dedicated AI <br />
               Career & Resume <span style={{ background: 'linear-gradient(to right, #2563eb, #3b82f6)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}> Coach.</span>
            </h1><br/>

            {/* Subtitle */}
            <p style={{ fontSize: '16px', color: '#64748b', lineHeight: '1.65', maxWidth: '620px', margin: '0 auto', textRendering: 'optimizeLegibility' }}>
              Interact with the advanced chat terminal below, or explore the specialized quick action tools further down the page.
            </p>
          
        </header><br/>
        <div className="h-px w-full bg-gradient-to-r from-transparent via-slate-400 to-transparent" /><br/>s

        {/* SECTION 1: CHAT INTERFACE (NOW WIDER & ON TOP WITH ZERO ELEMENT OVERLAPS) */}
        <div ref={chatSectionRef} className="scroll-mt-4 w-full">
          <div className="max-w-5xl mx-auto w-full px-2 sm:px-6">
            <div className="flex flex-col h-[600px] bg-white rounded-[28px] border border-slate-200/80 shadow-[0_12px_45px_rgba(0,0,0,0.03)] overflow-hidden relative">
              
              {/* Header bar area */}
              <div className="flex items-center justify-between px-6 py-4 border-b border-slate-100 bg-slate-50/50 backdrop-blur-md shrink-0">
                <div className="flex items-center gap-3">
                  <div className="relative">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-500 via-indigo-600 to-indigo-700 text-white shadow-md shadow-indigo-100">
                      <Bot size={24} className="animate-pulse" />
                    </div>
                    <div className="absolute -bottom-0.5 -right-0.5 h-3 w-3 rounded-full bg-emerald-500 border-2 border-white"></div>
                  </div>
                  <div>
                    <h2 className="text-base font-extrabold text-slate-800 leading-tight">
                      IntelliResume AI Coach
                    </h2>
                    <p className="text-[10px] text-slate-400 font-bold tracking-wide uppercase">ATS Deep Parser Online</p>
                  </div>
                </div>
                
                {/* Reset Session Option */}
                <div className="flex items-center gap-2">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-50 px-2.5 py-1 text-xs font-semibold text-emerald-700 border border-emerald-100">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                    LIVE COACHING
                  </span>
                  <button 
                    onClick={handleResetChat}
                    className="p-2 text-slate-400 hover:text-indigo-600 hover:bg-slate-100 rounded-lg transition-all"
                    title="Reset Conversation Stream"
                  >
                    <RefreshCcw size={16} />
                  </button>
                </div>
              </div><br/><br/>

              {/* Suggested quick prompt pills */}
              <div className="bg-slate-50/20 border-b border-slate-100 px-5 py-3 flex items-center gap-2 overflow-x-auto no-scrollbar shrink-0">
                <span className="text-[10px] font-bold text-indigo-900 uppercase tracking-widest whitespace-nowrap">Suggested:</span>
                {suggestedQuestions.map((q) => (
                  <button
                    key={q}
                    onClick={() => handleSend(q)}
                    className="whitespace-nowrap rounded-full bg-white border border-slate-200/60 hover:border-indigo-400 hover:text-indigo-600 px-3.5 py-1.5 text-xs font-semibold text-slate-600 transition-all hover:shadow-sm"
                  >
                    {q}
                  </button>
                ))}
              </div><br/><br/>

              {/* Conversation Arena */}
              <div ref={chatContainerRef} className="flex-1 overflow-y-auto p-6 space-y-6 bg-slate-50/10">
                {messages.map((msg) => (
                  <div key={msg.id} className={`flex gap-3.5 ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                    
                    {msg.sender === 'ai' && (
                      <div className="shrink-0 flex h-9 w-9 items-center justify-center rounded-xl bg-indigo-50 border border-indigo-100 text-indigo-600 mt-1">
                        <Bot size={18} />
                      </div>
                    )}
                    
                    <div className="flex flex-col gap-1 max-w-[85%] sm:max-w-[75%]">
                      <div 
                        className={`p-4.5 shadow-[0_1px_3px_rgba(0,0,0,0.01)] text-sm sm:text-base transition-all duration-200 ${
                          msg.sender === 'user' 
                            ? 'bg-indigo-600 text-white rounded-[24px] rounded-tr-none font-medium' 
                            : 'bg-white text-slate-800 border border-slate-200 rounded-[24px] rounded-tl-none py-5 px-6'
                        }`}
                      >
                        {msg.sender === 'user' ? (
                          <p className="whitespace-pre-line leading-relaxed">{msg.text}</p>
                        ) : (
                          <div className="space-y-1 leading-relaxed max-w-[95%]">
                            {formatMessageText(msg.text)}
                          </div>
                        )}
                      </div>
                      <span className={`text-[10px] font-bold text-slate-400 px-1 mt-0.5 ${msg.sender === 'user' ? 'text-right' : 'text-left'}`}>
                        {msg.time}
                      </span>
                    </div>

                  </div>
                ))}
                
                {/* AI Typing Loader dots */}
                {isTyping && (
                  <div className="flex gap-3 justify-start">
                    <div className="shrink-0 flex h-9 w-9 items-center justify-center rounded-xl bg-indigo-50 border border-indigo-100 text-indigo-600 mt-1">
                      <Bot size={18} />
                    </div>
                    <div className="bg-white border border-slate-200/50 rounded-[24px] rounded-tl-none px-5 py-4 shadow-sm flex items-center gap-1.5 w-16">
                      <span className="h-2 w-2 animate-bounce rounded-full bg-indigo-400"></span>
                      <span className="h-2 w-2 animate-bounce rounded-full bg-indigo-400" style={{ animationDelay: '0.15s' }}></span>
                      <span className="h-2 w-2 animate-bounce rounded-full bg-indigo-400" style={{ animationDelay: '0.3s' }}></span>
                    </div>
                  </div>
                )}
              </div><br/>

              {/* Input Action Panel (Clean Embedded Form to prevent overlap) */}
              <div className="p-4 bg-white border-t border-slate-100 shrink-0">
                
                {/* Dynamic Attached File Preview inside input frame */}
                {attachedFile && (
                  <div className="mb-2.5 bg-indigo-50/50 border border-indigo-100 rounded-xl px-4 py-2.5 flex items-center justify-between animate-fade-in">
                    <div className="flex items-center gap-2">
                      <FileCheck size={18} className="text-indigo-600" />
                      <span className="text-xs sm:text-sm font-semibold text-indigo-950 truncate max-w-xs sm:max-w-md">
                        File Attached: {attachedFile.name} ({(attachedFile.size / 1024).toFixed(1)} KB)
                      </span>
                    </div>
                    <button 
                      onClick={() => { setAttachedFile(null); setUploadProgress(0); }} 
                      className="text-[10px] font-bold text-rose-600 hover:text-rose-800 uppercase px-2.5 py-1 rounded-md hover:bg-rose-50"
                    >
                      Clear
                    </button>
                  </div>
                )}

                <div className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-slate-50 p-2 focus-within:bg-white focus-within:border-indigo-400 focus-within:ring-4 focus-within:ring-indigo-50 transition-all duration-200">
                  
                  {/* Native hidden file input */}
                  <input 
                    type="file" 
                    ref={fileInputRef} 
                    onChange={handleFileChange} 
                    className="hidden" 
                    accept=".pdf,.doc,.docx"
                  />
                  
                  <button 
                    onClick={() => fileInputRef.current?.click()}
                    className="p-3 text-slate-400 hover:text-indigo-600 hover:bg-white rounded-xl transition-all shrink-0 border border-transparent hover:border-slate-200 hover:shadow-xs"
                    title="Upload Resume (.pdf, .docx)"
                  >
                    <Paperclip size={20} />
                  </button>
                  
                  {/* Standard input text field */}
                  <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={handleKeyDown}
                    placeholder="Ask a question or request a template scan..."
                    className="flex-1 bg-transparent text-slate-800 placeholder-slate-400 outline-none py-1.5 px-1 text-sm sm:text-base font-medium"
                  />
                  
                  {/* Send / Mic buttons */}
                  {input.trim() || attachedFile ? (
                    <button 
                      onClick={() => handleSend()}
                      className="p-3 bg-indigo-600 text-white rounded-xl shadow-sm hover:bg-indigo-700 active:scale-[0.98] transition-all shrink-0"
                    >
                      <Send size={16} />
                    </button>
                  ) : (
                    <button 
                      onClick={triggerVoiceSimulation}
                      className={`p-3 rounded-xl border border-transparent transition-all shrink-0 ${
                        isListening 
                          ? 'bg-rose-500 text-white animate-pulse shadow-md shadow-rose-100' 
                          : 'text-slate-400 hover:text-indigo-600 hover:bg-white hover:border-slate-100'
                      }`}
                      title="Dictate message"
                    >
                      <Mic size={20} />
                    </button>
                  )}
                </div><br/><br/>
                
                <div className="text-center mt-3 flex items-center justify-center gap-1.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-ping"></span>
                  <p className="text-[11px] text-slate-400 font-bold tracking-wide uppercase">
                    ATS compliant with modern GreenHouse, Lever, Taleo and Workday parsers.
                  </p>
                </div>
              </div>

            </div>
          </div>
        </div><br/><br/><br/><br/>

        {/* SECTION 2: METRIC CARDS - EXACTLY MATCHING THE DESIGN OF IMAGE_8C5103.PNG */}
        {/* Metric cards optimized to be spacious and fully detailed */}
        <div className="w-full">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
            
            {/* Metric Card 1: Processed Files */}
            <div className="relative border-2 border-slate-200 bg-white rounded-[40px] px-8 py-8 h-40 flex flex-col items-center justify-center transition-all duration-300 shadow-[0_4px_20px_rgba(0,0,0,0.01)] hover:border-indigo-400 hover:shadow-lg">
              {/* Circular Icon Accent Container - Perfectly centered on top boundary */}
              <div className="absolute -top-6 left-1/2 -translate-x-1/2 flex h-12 w-12 items-center justify-center rounded-full bg-blue-50 border-2 border-slate-200 text-blue-600 shadow-sm">
                <FileCheck size={20} />
              </div>
              
              {/* Huge Bold Centered Numeric Metric */}
              <span className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tight text-center mt-2">
                {stats.scannedResumes}+
              </span>
              
              {/* Gray uppercase subtext exactly aligned below */}
              <span className="mt-2.5 text-[11px] sm:text-xs font-bold text-slate-400 tracking-wider text-center uppercase">
                PROFILES PROCESSED
              </span>
            </div>

            {/* Metric Card 2: ATS Readiness Index */}
            <div className="relative border-2 border-slate-200 bg-white rounded-[40px] px-8 py-8 flex flex-col items-center justify-center transition-all duration-300 shadow-[0_4px_20px_rgba(0,0,0,0.01)] hover:border-indigo-400 hover:shadow-lg">
              {/* Circular Icon Accent Container */}
              <div className="absolute -top-6 left-1/2 -translate-x-1/2 flex h-12 w-12 items-center justify-center rounded-full bg-emerald-50 border-2 border-slate-200 text-emerald-600 shadow-sm">
                <TrendingUp size={20} />
              </div>
              
              {/* Huge Bold Centered Numeric Metric */}
              <span className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tight text-center mt-2">
                {stats.atsMatchIndex}%
              </span>
              
              {/* Gray uppercase subtext exactly aligned below */}
              <span className="mt-2.5 text-[11px] sm:text-xs font-bold text-slate-400 tracking-wider text-center uppercase">
                ATS BYPASS ACCURACY
              </span>
            </div>

            {/* Metric Card 3: Simulated Practice Rounds */}
            <div className="relative border-2 border-slate-200 bg-white rounded-[40px] px-8 py-8 flex flex-col items-center justify-center transition-all duration-300 shadow-[0_4px_20px_rgba(0,0,0,0.01)] hover:border-indigo-400 hover:shadow-lg">
              {/* Circular Icon Accent Container */}
              <div className="absolute -top-6 left-1/2 -translate-x-1/2 flex h-12 w-12 items-center justify-center rounded-full bg-indigo-50 border-2 border-slate-200 text-indigo-600 shadow-sm">
                <UserCheck size={20} />
              </div>
              
              {/* Huge Bold Centered Numeric Metric */}
              <span className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tight text-center mt-2">
                24/7
              </span>
              
              {/* Gray uppercase subtext exactly aligned below */}
              <span className="mt-2.5 text-[11px] sm:text-xs font-bold text-slate-400 tracking-wider text-center uppercase">
                LIVE ASSISTANT AVAILABILITY
              </span>
            </div>

          </div>
        </div><br/><br/>
        <div className="h-px w-full bg-gradient-to-r from-transparent via-slate-400 to-transparent" /><br/>

        {/* SECTION 3: SPECIALIZED ACTIONS GRID (NOW WIDER & MORE SPACIOUS) */}
        {/* Adjusted padding and minimum height for an ultra-premium, balanced layout */}
        <div className="w-full border-t border-slate-200/80 pt-10">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-8">
            <div>
              <h2 className="text-xl sm:text-3xl font-black text-slate-900 flex items-center gap-2">
                <Sparkle className="text-indigo-600 animate-spin-slow" size={26} />
                <span>Specialized Quick Action Toolkits</span>
              </h2><br/>
              <p className="text-sm sm:text-base text-slate-500 mt-1">Select any card to auto-scroll and trigger tailored AI feedback inside the console terminal.</p>
            </div><br/><br/>
            <div className="shrink-0 mt-2 sm:mt-0">
              <span className="text-xs sm:text-sm font-bold text-blue-700 bg-indigo-50 border border-indigo-100 px-4 py-2 rounded-full uppercase tracking-widest">
                6 Dynamic Tools Active
              </span><br/><br/><br/>
            </div>
          </div>
        <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
        gap: "24px",
        maxWidth: "1150px",
        margin: "0 auto",
        padding: "20px",
      }}
    >
      {quickActions.map((item, index) => {
        const Icon = item.icon;

        return (
          <div
            key={index}
            className="group"
            onClick={() => handleQuickActionClick && handleQuickActionClick(item)}
            style={{
              backgroundColor: "#ffffff",
              border: "1px solid #e2e8f0",
              borderRadius: "16px",
              textAlign: "left",
              display: "flex",
              flexDirection: "column",
              padding: "28px",
              boxShadow:
                "0 4px 6px -1px rgba(0, 0, 0, 0.02), 0 2px 4px -1px rgba(0, 0, 0, 0.01)",
              transition:
                "transform 0.35s cubic-bezier(0.175, 0.885, 0.32, 1.275), box-shadow 0.3s ease-in-out, border-color 0.3s ease",
              position: "relative",
              cursor: "pointer",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-6px)";
              e.currentTarget.style.boxShadow =
                "0 20px 25px -5px rgba(0, 0, 0, 0.05), 0 10px 10px -5px rgba(0, 0, 0, 0.02)";
              e.currentTarget.style.borderColor = "#93c5fd";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow =
                "0 4px 6px -1px rgba(0, 0, 0, 0.02), 0 2px 4px -1px rgba(0, 0, 0, 0.01)";
              e.currentTarget.style.borderColor = "#e2e8f0";
            }}
          >
            {/* Icon Box */}
            <div
              style={{
                width: "46px",
                height: "46px",
                borderRadius: "12px",
                backgroundColor: item.bgColor,
                color: item.iconColor,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginBottom: "20px",
                transition: "transform 0.3s ease",
              }}
            >
              <Icon size={20} />
            </div>

            {/* Content Container */}
            <div style={{ display: "flex", flexDirection: "column", flexGrow: 1 }}>
              {/* Category Tag */}
              <span
                style={{
                  fontSize: "10px",
                  fontWeight: "700",
                  textTransform: "uppercase",
                  color: "#64748b",
                  letterSpacing: "0.05em",
                  marginBottom: "6px",
                }}
              >
                {item.tag}
              </span>

              {/* Title */}
              <h3
                style={{
                  fontSize: "18px",
                  fontWeight: "700",
                  color: "#0f172a",
                  marginBottom: "8px",
                  lineHeight: "1.3",
                }}
              >
                {item.title}
              </h3>

              {/* Description */}
              <p
                style={{
                  fontSize: "13px",
                  color: "#64748b",
                  lineHeight: "1.6",
                  marginBottom: "24px",
                }}
              >
                {item.description}
              </p>

              {/* Footer CTA Link */}
              <div
                style={{
                  marginTop: "auto",
                  paddingTop: "14px",
                  borderTop: "1px solid #f1f5f9",
                  display: "flex",
                  alignItems: "center",
                  fontSize: "12px",
                  fontWeight: "700",
                  color: "#2563eb",
                }}
              >
                <span>Launch Assistant</span>
                <ChevronRight
                  size={14}
                  style={{
                    marginLeft: "6px",
                    transition: "transform 0.3s ease",
                  }}
                  className="group-hover:translate-x-1"
                />
              </div>
            </div>
          </div>
        );
      })}
    </div>
      </div>
    </div>
      
      
      {/* Custom styled elements injected cleanly */}
      <style dangerouslySetInnerHTML={{__html: `
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 8s linear infinite;
        }
      `}} />
      <br/><br/><br/><br/><br/><br/>
    </section>
  );
};

export default Chatbot;