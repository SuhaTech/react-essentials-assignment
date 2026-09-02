import React, { useState } from 'react'
import {Sparkles,Video,Clock,CheckCircle2,TrendingUp,Calendar,ArrowUpRight,MoreVertical,Plus,Play,FileText,AlertCircle,Users,Search,Filter,CheckSquare} from 'lucide-react'

const metrics = [
  {
    title: "Total Meetings Logged",
    value: "28",
    change: "+12% this week",
    icon: Video,
    iconBg: "bg-blue-50 text-blue-600",
    badge: "Active"
  },
  {
    title: "Hours Saved",
    value: "18.5 hrs",
    change: "+3.2 hrs vs last week",
    icon: Clock,
    iconBg: "bg-purple-50 text-purple-600",
    badge: "Efficiency"
  },
  {
    title: "Action Items Generated",
    value: "64",
    change: "85% completed",
    icon: CheckSquare,
    iconBg: "bg-emerald-50 text-emerald-600",
    badge: "Synced"
  },
  {
    title: "Avg Team Alignment",
    value: "92%",
    change: "+4% sentiment score",
    icon: TrendingUp,
    iconBg: "bg-amber-50 text-amber-600",
    badge: "Positive"
  }
]

const upcomingMeetings = [
  {
    id: 1,
    title: "Sprint Planning & Backlog Grooming",
    platform: "Google Meet",
    time: "Today, 03:00 PM - 04:00 PM",
    attendees: ["Alex", "Elena", "Sarah"],
    botStatus: "Auto-Join Ready",
    botActive: true
  },
  {
    id: 2,
    title: "Backend Architecture & PostgreSQL Review",
    platform: "Zoom",
    time: "Tomorrow, 11:00 AM - 12:00 PM",
    attendees: ["David", "Alex"],
    botStatus: "Scheduled",
    botActive: false
  }
]

const recentSummaries = [
  {
    id: "m1",
    title: "Q3 Product Roadmap & AI Features",
    date: "Jul 31, 2026 • 10:30 AM",
    duration: "45 mins",
    keyInsight: "Decided to prioritize automated action item routing over manual exports.",
    actionItemsCount: 6,
    sentiment: "+88% Positive",
    tag: "Product"
  },
  {
    id: "m2",
    title: "Frontend UI Redesign Alignment",
    date: "Jul 30, 2026 • 02:00 PM",
    duration: "30 mins",
    keyInsight: "Approved left-aligned footer layout and high-contrast card borders.",
    actionItemsCount: 4,
    sentiment: "+94% Positive",
    tag: "Design"
  },
  {
    id: "m3",
    title: "DevOps & SOC2 Compliance Sync",
    date: "Jul 29, 2026 • 04:15 PM",
    duration: "50 mins",
    keyInsight: "Configured AES-256 encryption keys for stored voice transcriptions.",
    actionItemsCount: 3,
    sentiment: "+76% Neutral",
    tag: "Engineering"
  }
]

const Dashboard = () => {
  const [searchQuery, setSearchQuery] = useState('')

  return (
    <div className="w-full min-h-screen bg-gray-50/70 text-gray-800 font-sans pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 space-y-8">

        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-left">
          <div className="space-y-1">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-xs font-bold">
              <Sparkles size={14} /> Workspace Analytics
            </div>
            <h1 className="text-2xl sm:text-3xl font-black text-gray-900 tracking-tight">
              Welcome back!!
            </h1>
            <p className="text-xs sm:text-sm text-gray-500">
              Here is your AI meeting intelligence summary and action item progress.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button className="inline-flex items-center gap-2 bg-white border border-gray-200 hover:border-gray-300 text-gray-700 font-bold px-4 py-2.5 rounded-xl text-xs transition-colors shadow-2xs cursor-pointer">
              <Calendar size={14} /> Meeting Calendar
            </button>
            <button className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-bold px-4 py-2.5 rounded-xl text-xs transition-colors shadow-2xs cursor-pointer">
              <Plus size={14} /> Instant Recording
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {metrics.map((item) => {
            const Icon = item.icon
            return (
              <div key={item.title} className="bg-white p-6 rounded-2xl border border-gray-200/80 shadow-2xs hover:border-blue-200 transition-all text-left space-y-3">
                <div className="flex items-center justify-between">
                  <span className={`p-2.5 rounded-xl ${item.iconBg}`}>
                    <Icon size={20} />
                  </span>
                  <span className="text-[10px] font-bold text-gray-500 bg-gray-100 px-2.5 py-0.5 rounded-full">
                    {item.badge}
                  </span>
                </div>
                <div>
                  <p className="text-2xl font-black text-gray-900">{item.value}</p>
                  <p className="text-xs font-bold text-gray-700 mt-0.5">{item.title}</p>
                  <p className="text-[11px] text-emerald-600 font-semibold mt-1">{item.change}</p>
                </div>
              </div>
            )
          })}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

          <div className="lg:col-span-8 space-y-6 text-left">
            <div className="bg-white rounded-3xl border border-gray-200/80 p-6 sm:p-8 shadow-2xs space-y-6">
              
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-gray-100 pb-4">
                <div>
                  <h2 className="text-lg font-bold text-gray-900 tracking-tight">
                    Recent AI Summaries
                  </h2>
                  <p className="text-xs text-gray-500">Transcribed and analyzed automatically.</p>
                </div>

                <div className="flex items-center gap-2">
                  <div className="relative">
                    <Search size={14} className="absolute left-3 top-2.5 text-gray-400" />
                    <input type="text" placeholder="Search meetings..."value={searchQuery}onChange={(e) => setSearchQuery(e.target.value)}
                      className="pl-8 pr-3 py-1.5 text-xs rounded-xl border border-gray-200 focus:outline-none focus:border-blue-600 bg-gray-50/50"/>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                {recentSummaries.map((summary) => (
                  <div key={summary.id} className="p-4 rounded-2xl border border-gray-100 hover:border-gray-300 bg-gray-50/40 hover:bg-white transition-all space-y-3">
                    <div className="flex items-start justify-between gap-2">
                      <div className="space-y-1">
                        <div className="flex items-center gap-2">
                          <h3 className="text-sm font-bold text-gray-900">{summary.title}</h3>
                          <span className="text-[10px] font-bold px-2 py-0.5 rounded-md bg-blue-50 text-blue-600">
                            {summary.tag}
                          </span>
                        </div>
                        <p className="text-[11px] text-gray-400">{summary.date} • {summary.duration}</p>
                      </div>

                      <button className="text-gray-400 hover:text-blue-600 transition-colors cursor-pointer">
                        <ArrowUpRight size={18} />
                      </button>
                    </div>

                    <div className="p-3 rounded-xl bg-white border border-gray-100 text-xs text-gray-600 leading-relaxed">
                      <span className="font-bold text-gray-800">AI Key Takeaway: </span>
                      {summary.keyInsight}
                    </div>

                    <div className="flex items-center justify-between text-xs text-gray-500 pt-1">
                      <span className="flex items-center gap-1.5 font-medium text-emerald-600">
                        <CheckCircle2 size={14} /> {summary.actionItemsCount} Action Items Created
                      </span>
                      <span className="text-[11px] font-semibold text-gray-600">
                        Sentiment: <strong className="text-blue-600">{summary.sentiment}</strong>
                      </span>
                    </div>
                  </div>
                ))}
              </div>

            </div>
          </div>

          <div className="lg:col-span-4 space-y-6 text-left">
            
            <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl p-6 text-white shadow-2xs space-y-4">
              <div className="flex items-center justify-between border-b border-slate-700/80 pb-3">
                <div className="flex items-center gap-2 text-xs font-bold text-blue-400 uppercase tracking-wider">
                  <Sparkles size={16} /> SyncPulse Assistant
                </div>
                <span className="text-[10px] bg-emerald-500/20 text-emerald-400 font-bold px-2 py-0.5 rounded-full border border-emerald-500/30">
                  Ready
                </span>
              </div>

              <p className="text-xs text-slate-300 leading-relaxed">
                Your AI bot is connected to calendar events and will auto-join 2 minutes prior to meeting start times.
              </p>

              <div className="p-3 rounded-xl bg-slate-800/80 border border-slate-700 flex items-center justify-between text-xs">
                <span className="text-slate-300">Auto-Join Zoom / Meet</span>
                <span className="w-8 h-4 bg-blue-600 rounded-full inline-block relative">
                  <span className="w-3 h-3 bg-white rounded-full absolute top-0.5 right-0.5"></span>
                </span>
              </div>
            </div>

            <div className="bg-white rounded-3xl border border-gray-200/80 p-6 shadow-2xs space-y-4">
              <div className="flex items-center justify-between border-b border-gray-100 pb-3">
                <h3 className="text-sm font-bold text-gray-900 tracking-tight">
                  Upcoming Meetings
                </h3>
                <span className="text-[11px] font-semibold text-blue-600">View All</span>
              </div>

              <div className="space-y-3">
                {upcomingMeetings.map((item) => (
                  <div key={item.id} className="p-3.5 rounded-2xl bg-gray-50/60 border border-gray-100 space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-purple-600 bg-purple-50 px-2 py-0.5 rounded-md">
                        {item.platform}
                      </span>
                      <span className="text-[10px] font-semibold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-md">
                        {item.botStatus}
                      </span>
                    </div>

                    <h4 className="text-xs font-bold text-gray-900">{item.title}</h4>
                    
                    <div className="flex items-center gap-1.5 text-[11px] text-gray-400">
                      <Clock size={12} />
                      <span>{item.time}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>

      </div>
    </div>
  )
}

export default Dashboard