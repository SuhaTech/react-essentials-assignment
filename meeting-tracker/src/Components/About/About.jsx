import React from 'react'
import { Sparkles, Target, Users, ShieldCheck, Zap, ArrowRight, TrendingUp, Clock, CheckCircle2, Award} from 'lucide-react'

const coreValues = [
  {
    icon: Target,
    title: "Action-Oriented Discussions",
    description: "Meetings shouldn't end in forgotten promises. We turn discussions into trackable, assigned tasks automatically.",
    accentColor: "from-blue-500 to-indigo-600",
    bgColor: "bg-blue-50 text-blue-600"
  },
  {
    icon: ShieldCheck,
    title: "Enterprise Privacy & Security",
    description: "Your voice data belongs exclusively to you. Enforced with end-to-end encryption, strict compliance, and audit controls.",
    accentColor: "from-purple-500 to-indigo-600",
    bgColor: "bg-purple-50 text-purple-600"
  },
  {
    icon: Zap,
    title: "Zero-Friction Integration",
    description: "Connects directly into Zoom, Google Meet, and Teams without interrupting your team's natural workflow.",
    accentColor: "from-emerald-500 to-teal-600",
    bgColor: "bg-emerald-50 text-emerald-600"
  },
  {
    icon: Users,
    title: "Invasive-Free Intelligence",
    description: "Quiet AI assistance that analyzes sentiment, talk ratios, and key takeaways without intrusive or distracting bots.",
    accentColor: "from-amber-500 to-orange-600",
    bgColor: "bg-amber-50 text-amber-600"
  }
]

const teamMembers = [
  {
    name: "Alex Morgan",
    role: "Co-Founder & CEO",
    bio: "Former Lead Product Architect. Focused on solving meeting fatigue and bringing clarity to team collaboration.",
    initials: "AM",
    badgeBg: "bg-blue-600"
  },
  {
    name: "Elena Rostova",
    role: "Head of AI & NLP",
    bio: "AI researcher specializing in real-time voice recognition, multi-speaker diarization, and natural language understanding.",
    initials: "ER",
    badgeBg: "bg-purple-600"
  },
  {
    name: "Sarah Chen",
    role: "VP of Product Design",
    bio: "Design leader dedicated to crafting intuitive workspaces, clean interfaces, and accessible design systems.",
    initials: "SC",
    badgeBg: "bg-emerald-600"
  },
  {
    name: "David Zen",
    role: "Chief Technology Officer",
    bio: "Infrastructure specialist building low-latency data pipelines, secure transcript storage, and enterprise compliance.",
    initials: "DZ",
    badgeBg: "bg-amber-600"
  }
]

const About = () => {
  return (
    <div className="w-full min-h-screen bg-slate-50/50 text-slate-800 font-sans pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 space-y-12">
        <section className="relative overflow-hidden bg-white rounded-3xl border border-slate-200/80 shadow-xs p-8 sm:p-12">
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-blue-100/50 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-indigo-100/50 rounded-full blur-3xl pointer-events-none" />
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"> 
            <div className="lg:col-span-8 space-y-4 text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-xs font-semibold">
                <Sparkles size={14} /> Our Vision & Mission
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight">
                Transforming unstructured meeting chatter into <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">real execution</span>.
              </h1>
              <p className="text-sm sm:text-base text-slate-500 leading-relaxed max-w-2xl">
                SyncPulse was built to eliminate post-meeting friction. We replace manual note-taking, lost action items, and unorganized summaries with automated AI transcripts, sentiment analysis, and instant task distribution.
              </p>
            </div>

            <div className="lg:col-span-4 bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl p-6 text-white shadow-md text-left space-y-4">
              <div className="flex items-center gap-2 text-blue-400 font-bold text-xs uppercase tracking-wider">
                <Award size={16} /> Why Choose Us
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                Designed for high-output product, engineering, and remote leadership teams seeking automated accountability.
              </p>
            </div>
          </div>
        </section>

        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">          
          <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-xs hover:border-blue-200 transition-all text-left space-y-2">
            <div className="flex items-center justify-between">
              <span className="p-2.5 rounded-xl bg-blue-50 text-blue-600">
                <Clock size={20} />
              </span>
              <span className="text-[10px] font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full">High Impact</span>
            </div>
            <div className="pt-2">
              <p className="text-3xl font-black text-slate-900">4.2 hrs</p>
              <p className="text-xs font-bold text-slate-700 uppercase tracking-wider mt-1">Saved / Member / Week</p>
              <p className="text-[11px] text-slate-400 mt-0.5">Automating meeting logs & notes</p>
            </div>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-xs hover:border-purple-200 transition-all text-left space-y-2">
            <div className="flex items-center justify-between">
              <span className="p-2.5 rounded-xl bg-purple-50 text-purple-600">
                <TrendingUp size={20} />
              </span>
              <span className="text-[10px] font-bold text-purple-600 bg-purple-50 px-2 py-0.5 rounded-full">NLP AI v2.4</span>
            </div>
            <div className="pt-2">
              <p className="text-3xl font-black text-slate-900">98.4%</p>
              <p className="text-xs font-bold text-slate-700 uppercase tracking-wider mt-1">Transcript Accuracy</p>
              <p className="text-[11px] text-slate-400 mt-0.5">Precision speaker identification</p>
            </div>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-xs hover:border-emerald-200 transition-all text-left space-y-2">
            <div className="flex items-center justify-between">
              <span className="p-2.5 rounded-xl bg-emerald-50 text-emerald-600">
                <CheckCircle2 size={20} />
              </span>
              <span className="text-[10px] font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full">Auto-Synced</span>
            </div>
            <div className="pt-2">
              <p className="text-3xl font-black text-slate-900">12M+</p>
              <p className="text-xs font-bold text-slate-700 uppercase tracking-wider mt-1">Action Items Tracked</p>
              <p className="text-[11px] text-slate-400 mt-0.5">Converted into workspace tasks</p>
            </div>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-xs hover:border-amber-200 transition-all text-left space-y-2">
            <div className="flex items-center justify-between">
              <span className="p-2.5 rounded-xl bg-amber-50 text-amber-600">
                <Users size={20} />
              </span>
              <span className="text-[10px] font-bold text-amber-600 bg-amber-50 px-2 py-0.5 rounded-full">Global</span>
            </div>
            <div className="pt-2">
              <p className="text-3xl font-black text-slate-900">150+</p>
              <p className="text-xs font-bold text-slate-700 uppercase tracking-wider mt-1">Teams Empowered</p>
              <p className="text-[11px] text-slate-400 mt-0.5">Scaling productive workflows</p>
            </div>
          </div>
        </section>

        <section className="space-y-6">
          <div className="text-left space-y-1">
            <h2 className="text-xl font-bold text-slate-900 tracking-tight">Our Guiding Principles</h2>
            <p className="text-xs text-slate-500">
              Built on core values that keep engineering teams focused, secure, and aligned.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {coreValues.map((value) => {
              const Icon = value.icon
              return (
                <div key={value.title} className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-xs hover:shadow-md transition-all flex gap-4 text-left">
                  <div className={`p-3 rounded-2xl ${value.bgColor} shrink-0 h-fit`}>
                    <Icon size={22} />
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-sm font-bold text-slate-900">{value.title}</h3>
                    <p className="text-xs text-slate-500 leading-relaxed">{value.description}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </section>

        <section className="space-y-6">
          <div className="text-left space-y-1">
            <h2 className="text-xl font-bold text-slate-900 tracking-tight">Leadership Behind SyncPulse</h2>
            <p className="text-xs text-slate-500">
              Product designers, engineers, and researchers simplifying workplace collaboration.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {teamMembers.map((member) => (
              <div key={member.name} className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-xs hover:border-slate-300 transition-all space-y-3 text-left flex flex-col justify-between">
                <div className="space-y-3">
                  <div className={`h-12 w-12 rounded-2xl ${member.badgeBg} text-white font-extrabold text-sm flex items-center justify-center shadow-xs`}>
                    {member.initials}
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-slate-900">{member.name}</h3>
                    <p className="text-xs font-semibold text-blue-600">{member.role}</p>
                  </div>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    {member.bio}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 rounded-3xl p-8 sm:p-10 text-white shadow-md text-left flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-2 max-w-xl">
            <h3 className="text-2xl font-bold tracking-tight">Ready to streamline your meeting action items?</h3>
            <p className="text-xs text-blue-100 leading-relaxed">
              Experience automated transcription, speaker sentiment analysis, and intelligent task tracking in one unified workspace.
            </p>
          </div>
          <button className="inline-flex items-center gap-2 bg-white text-blue-600 hover:bg-blue-50 font-bold px-6 py-3.5 rounded-xl text-xs transition-colors shadow-xs shrink-0 cursor-pointer">
            Explore AI Insights <ArrowRight size={14} />
          </button>
        </section>
      </div>
    </div>
  )
}

export default About