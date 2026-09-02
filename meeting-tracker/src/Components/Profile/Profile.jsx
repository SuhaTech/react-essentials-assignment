import React, { useState } from 'react'
import { User,Shield,Bell,CheckCircle2,Sparkles,Save,Globe,Video,MessageSquare,Camera,Key,Smartphone,Cpu,Sliders,ExternalLink} from 'lucide-react'

const Profile = () => {
  const [activeTab, setActiveTab] = useState('general') 
  const [isSaved, setIsSaved] = useState(false)

  const [profile, setProfile] = useState({
    fullName: 'Danis zen',
    email: 'user@example.com',
    title: 'Web Developer',
    department: 'Product Architecture',
    timezone: 'Asia/Kolkata (IST +5:30)',
    bio: 'Crafting high-performance React web platforms, design systems, and automated workspace tools.'
  })

  const handleSave = (e) => {
    e.preventDefault()
    setIsSaved(true)
    setTimeout(() => setIsSaved(false), 3500)
  }

  return (
    <div className="w-full min-h-screen bg-slate-50/60 text-slate-800 font-sans pb-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 space-y-8">

        <div className="bg-white rounded-3xl border border-slate-200/80 shadow-2xs p-6 sm:p-8 text-left relative overflow-hidden">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 relative z-10">
            
            <div className="flex items-center gap-5">
              <div className="relative group">
                <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl bg-gradient-to-tr from-blue-600 via-indigo-600 to-purple-600 text-white font-black text-2xl sm:text-3xl flex items-center justify-center shadow-md">
                  DZ
                </div>
                <button className="absolute -bottom-1 -right-1 p-2 rounded-xl bg-slate-900 text-white hover:bg-blue-600 transition-colors shadow-2xs cursor-pointer">
                  <Camera size={14} />
                </button>
              </div>

              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <h1 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                    {profile.fullName}
                  </h1>
                  <span className="text-[10px] font-extrabold uppercase bg-blue-50 text-blue-600 border border-blue-100 px-2 py-0.5 rounded-md">
                    Pro
                  </span>
                </div>
                <p className="text-xs font-semibold text-slate-500">{profile.title}</p>
                <p className="text-[11px] text-slate-400">{profile.email} • {profile.timezone}</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              {isSaved && (
                <span className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-600 bg-emerald-50 px-3 py-2 rounded-xl border border-emerald-200">
                  <CheckCircle2 size={16} /> Saved
                </span>
              )}
              <button onClick={handleSave}className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-bold px-5 py-2.5 rounded-xl text-xs transition-colors shadow-2xs cursor-pointer">
                <Save size={14} /> Save Profile
              </button>
            </div>

          </div>
        </div>

        <div className="flex items-center gap-2 border-b border-slate-200/80 pb-3 text-xs font-bold">
          <button onClick={() => setActiveTab('general')} className={`flex items-center gap-2 px-4 py-2 rounded-xl transition-all cursor-pointer ${
              activeTab === 'general'
                ? 'bg-slate-900 text-white shadow-2xs'
                : 'text-slate-500 hover:bg-slate-100'
            }`}>
            <User size={14} /> General Info
          </button>

          <button onClick={() => setActiveTab('integrations')} className={`flex items-center gap-2 px-4 py-2 rounded-xl transition-all cursor-pointer ${
              activeTab === 'integrations'
                ? 'bg-slate-900 text-white shadow-2xs'
                : 'text-slate-500 hover:bg-slate-100'
            }`}>
            <Cpu size={14} /> Meeting Channel
          </button>

          <button onClick={() => setActiveTab('notifications')} className={`flex items-center gap-2 px-4 py-2 rounded-xl transition-all cursor-pointer ${
              activeTab === 'notifications'
                ? 'bg-slate-900 text-white shadow-2xs'
                : 'text-slate-500 hover:bg-slate-100'
            }`}>
            <Bell size={14} /> Notifications
          </button>
        </div>

        {activeTab === 'general' && (
          <div className="bg-white rounded-3xl border border-slate-200/80 p-6 sm:p-8 shadow-2xs text-left space-y-6">
            <div className="space-y-1 border-b border-slate-100 pb-3">
              <h2 className="text-base font-bold text-slate-900">Personal & Professional Details</h2>
              <p className="text-xs text-slate-500">Manage how your profile appears across workspace transcripts and assigned tasks.</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 text-xs">
              <div className="space-y-1.5">
                <label className="font-bold text-slate-700">Full Name</label>
                <input type="text" value={profile.fullName} onChange={(e) => setProfile({ ...profile, fullName: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:border-blue-600 bg-slate-50/50 font-medium"/>
              </div>

              <div className="space-y-1.5">
                <label className="font-bold text-slate-700">Email Address</label>
                <input type="email" value={profile.email} onChange={(e) => setProfile({ ...profile, email: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:border-blue-600 bg-slate-50/50 font-medium"/>
              </div>

              <div className="space-y-1.5">
                <label className="font-bold text-slate-700">Role / Designation</label>
                <input type="text" value={profile.title} onChange={(e) => setProfile({ ...profile, title: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:border-blue-600 bg-slate-50/50 font-medium"/>
              </div>

              <div className="space-y-1.5">
                <label className="font-bold text-slate-700">Department</label>
                <input type="text" value={profile.department} onChange={(e) => setProfile({ ...profile, department: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:border-blue-600 bg-slate-50/50 font-medium"/>
              </div>
            </div>

            <div className="space-y-1.5 text-xs">
              <label className="font-bold text-slate-700">Bio Summary</label>
              <textarea rows="3" value={profile.bio} onChange={(e) => setProfile({ ...profile, bio: e.target.value })}
                className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:border-blue-600 bg-slate-50/50 resize-none font-medium"/>
            </div>
          </div>
        )}

        {activeTab === 'integrations' && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
            <div className="bg-white p-6 rounded-3xl border border-slate-200/80 shadow-2xs space-y-4">
              <div className="p-3 rounded-2xl bg-blue-50 text-blue-600 w-fit">
                <Video size={22} />
              </div>
              <div>
                <h3 className="text-sm font-bold text-slate-900">Zoom Meetings</h3>
                <p className="text-xs text-slate-500 mt-1">Automatically join scheduled video calls and record transcripts.</p>
              </div>
              <span className="inline-block text-[10px] font-bold text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-md">Connected</span>
            </div>

            <div className="bg-white p-6 rounded-3xl border border-slate-200/80 shadow-2xs space-y-4">
              <div className="p-3 rounded-2xl bg-purple-50 text-purple-600 w-fit">
                <MessageSquare size={22} />
              </div>
              <div>
                <h3 className="text-sm font-bold text-slate-900">Slack Channels</h3>
                <p className="text-xs text-slate-500 mt-1">Route AI key takeaways and action items directly into Slack.</p>
              </div>
              <span className="inline-block text-[10px] font-bold text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-md">Connected</span>
            </div>

            <div className="bg-white p-6 rounded-3xl border border-slate-200/80 shadow-2xs space-y-4">
              <div className="p-3 rounded-2xl bg-emerald-50 text-emerald-600 w-fit">
                <Globe size={22} />
              </div>
              <div>
                <h3 className="text-sm font-bold text-slate-900">Google Calendar</h3>
                <p className="text-xs text-slate-500 mt-1">Sync calendar events to trigger automated bot invitations.</p>
              </div>
              <span className="inline-block text-[10px] font-bold text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-md">Connected</span>
            </div>
          </div>
        )}

        {activeTab === 'notifications' && (
          <div className="bg-white rounded-3xl border border-slate-200/80 p-6 sm:p-8 shadow-2xs text-left space-y-4 text-xs">
            <div className="space-y-1 border-b border-slate-100 pb-3">
              <h2 className="text-base font-bold text-slate-900">Notification Alerts</h2>
              <p className="text-xs text-slate-500">Configure email and workspace push notification triggers.</p>
            </div>

            <div className="flex items-center justify-between p-3.5 rounded-xl bg-slate-50/60">
              <span className="font-bold text-slate-800">Email summary when meeting completes</span>
              <input type="checkbox" defaultChecked className="h-4 w-4 rounded text-blue-600" />
            </div>

            <div className="flex items-center justify-between p-3.5 rounded-xl bg-slate-50/60">
              <span className="font-bold text-slate-800">Notify when assigned an action item</span>
              <input type="checkbox" defaultChecked className="h-4 w-4 rounded text-blue-600" />
            </div>
          </div>
        )}

      </div>
    </div>
  )
}

export default Profile