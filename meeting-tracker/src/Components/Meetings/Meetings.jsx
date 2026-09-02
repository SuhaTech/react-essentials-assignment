import React, { useState } from 'react'
import { Calendar, Clock, Users, Search, Video, Plus, MoreVertical, CheckCircle2, XCircle, FileText, X, Sparkles, Download, Share2, ExternalLink } from 'lucide-react'

const initialMeetings = [
{
    id: "MTG-2026-081",
    title: "Q3 Sprint Planning & Architecture Sync",
    date: "2026-08-03",
    time: "10:00 AM - 11:30 AM",
    duration: "1h 30m",
    status: "Upcoming",
    organizer: "Alex Morgan",
    meetingLink: "https://meet.google.com/abc-defg-hij",
    attendees: [
      { name: "Alex Morgan", role: "Host" },
      { name: "Sarah Chen", role: "Product Manager" },
      { name: "David Kim", role: "UI/UX Lead" },
      { name: "Elena Rostova", role: "Backend Dev" }
    ],
    agenda: [
      "Review Q2 goals and carry-over deliverables.",
      "Finalize frontend component library updates.",
      "Discuss AI Insights throughput limits."
    ],
    summary: "Pending meeting completion.",
    actionItems: [
      { id: 1, task: "Prepare architecture diagram for Q3", assignee: "Alex Morgan", dueDate: "Aug 2", completed: false },
      { id: 2, task: "Draft sprint velocity forecast", assignee: "Sarah Chen", dueDate: "Aug 2", completed: false }
    ]
  },
  {
    id: "MTG-2026-082",
    title: "AI Insights Feature Demo",
    date: "2026-08-01",
    time: "02:00 PM - 02:45 PM",
    duration: "45m",
    status: "Upcoming",
    organizer: "Sarah Chen",
    meetingLink: "https://meet.google.com/xyz-uvwx-rst",
    attendees: [
      { name: "Sarah Chen", role: "Host" },
      { name: "Michael Scott", role: "Manager" },
      { name: "Pam Beesly", role: "Designer" }
    ],
    agenda: [
      "Demonstrate automated summarization capabilities.",
      "Test prompt latency with internal team."
    ],
    summary: "Pending meeting completion.",
    actionItems: [
      { id: 1, task: "Set up test sandbox environment", assignee: "Sarah Chen", dueDate: "Jul 31", completed: true }
    ]
  },
  {
    id: "MTG-2026-083",
    title: "Product Design Review",
    date: "2026-07-28",
    time: "11:00 AM - 12:00 PM",
    duration: "1h 00m",
    status: "Completed",
    organizer: "David Kim",
    meetingLink: "https://meet.google.com/pqr-lmn-hij",
    attendees: [
      { name: "David Kim", role: "Host" },
      { name: "Alex Morgan", role: "Lead Engineer" },
      { name: "Jessica Taylor", role: "QA Lead" }
    ],
    agenda: [
      "Review final Figma mockups for light-theme dashboards.",
      "Validate accessibility color contrast ratios."
    ],
    summary: "Approved light-theme design system. David to finalize high-fidelity prototypes by Friday.",
    actionItems: [
      { id: 1, task: "Finalize high-fidelity Figma components", assignee: "David Kim", dueDate: "Aug 2", completed: true },
      { id: 2, task: "Update UI token export documentation", assignee: "Jessica Taylor", dueDate: "Aug 3", completed: false }
    ]
  },
  {
    id: "MTG-2026-084",
    title: "Weekly Engineering Standup",
    date: "2026-07-27",
    time: "09:30 AM - 10:00 AM",
    duration: "30m",
    status: "Completed",
    organizer: "Elena Rostova",
    meetingLink: "https://meet.google.com/efg-hij-klm",
    attendees: [
      { name: "Elena Rostova", role: "Host" },
      { name: "Alex Morgan", role: "Lead Engineer" },
      { name: "David Kim", role: "UI/UX Lead" }
    ],
    agenda: [
      "Identify blockers across open PRs.",
      "Audit CI/CD pipeline deployment health."
    ],
    summary: "CI/CD deployment speed improved by 20%. Fixed minor CORS issue in local dev environments.",
    actionItems: [
      { id: 1, task: "Optimize database query latency for AI summaries", assignee: "Elena Rostova", dueDate: "Aug 4", completed: false }
    ]
  },
  {
    id: "MTG-2026-085",
    title: "Client Onboarding Strategy",
    date: "2026-07-25",
    time: "03:00 PM - 04:00 PM",
    duration: "1h 00m",
    status: "Canceled",
    organizer: "Sarah Chen",
    meetingLink: "https://meet.google.com/nop-qrs-tuv",
    attendees: [
      { name: "Sarah Chen", role: "Host" },
      { name: "Tom Hardy", role: "Account Exec" }
    ],
    agenda: [
      "Discuss customized enterprise tier onboarding plans."
    ],
    summary: "Canceled due to client scheduling conflict. Will reschedule for mid-August.",
    actionItems: []
  },
  {
    id: "MTG-2026-086",
    title: "Security & Compliance Audit",
    date: "2026-07-24",
    time: "01:00 PM - 02:00 PM",
    duration: "1h 00m",
    status: "Completed",
    organizer: "Elena Rostova",
    meetingLink: "https://meet.google.com/wxy-zabc-def",
    attendees: [
      { name: "Elena Rostova", "role": "Host" },
      { name: "Alex Morgan", "role": "Lead Engineer" },
      { name: "Marcus Vance", "role": "Security Lead" }
    ],
    agenda: [
      "Review SOC2 Type II compliance readiness.",
      "Evaluate API rate-limiting strategies under peak load."
    ],
    summary: "Completed preliminary SOC2 gap analysis. Marcus confirmed all audit logging policies meet guidelines.",
    actionItems: [
      { id: 1, task: "Rotate production database credentials", assignee: "Elena Rostova", dueDate: "Aug 5", completed: false },
      { id: 2, task: "Publish security whitepaper for enterprise leads", assignee: "Marcus Vance", dueDate: "Aug 10", completed: false }
    ]
  }
]

const MeetingDetailsModal = ({ meeting, onClose }) => {
  if (!meeting) return null
  const handleModalContainerClick = (e) => {
    e.stopPropagation()
  }
  const attendees = meeting.attendees || []
  const agenda = meeting.agenda || []
  const actionItems = meeting.actionItems || []

  return (
    <div onClick={onClose} className="fixed inset-0 z-50 flex items-center justify-center bg-gray-900/40 backdrop-blur-sm p-4 overflow-y-auto">
      <div onClick={handleModalContainerClick} className="w-full max-w-3xl rounded-xl bg-white shadow-2xl border border-gray-100 overflow-hidden my-8">
        <div className="border-b border-gray-100 bg-white p-6">
          <div className="flex items-start justify-between gap-4">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className={`inline-flex items-center gap-1 rounded-full px-2.5 py-0.5 text-xs font-semibold ${
                  meeting.status === 'Upcoming'
                    ? 'bg-blue-50 text-blue-600' : meeting.status === 'Completed'
                    ? 'bg-green-50 text-green-700' : 'bg-red-50 text-red-600'}`}>
                  {meeting.status === 'Upcoming' && <Clock size={12} />}
                  {meeting.status === 'Completed' && <CheckCircle2 size={12} />}
                  {meeting.status === 'Canceled' && <XCircle size={12} />}
                  {meeting.status}
                </span>
                <span className="text-xs font-mono text-gray-400">ID: {meeting.id}</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900">{meeting.title}</h2>
            </div>

            <button type="button" onClick={onClose} className="rounded-lg p-1.5 text-gray-400 hover:bg-gray-100 hover:text-gray-600 transition-colors">
              <X size={20} />
            </button>
          </div>

          <div className="mt-4 flex flex-wrap items-center gap-6 text-sm text-gray-600 border-t border-gray-50 pt-4">
            <div className="flex items-center gap-2">
              <Calendar size={16} className="text-gray-400" />
              <span>{meeting.date}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock size={16} className="text-gray-400" />
              <span>{meeting.time} ({meeting.duration})</span>
            </div>
            <div className="flex items-center gap-2">
              <Users size={16} className="text-gray-400" />
              <span>{attendees.length} Participants</span>
            </div>
          </div>
        </div>

        <div className="p-6 space-y-6 max-h-[60vh] overflow-y-auto">
          <div className="rounded-xl bg-blue-50/60 p-4 border border-blue-100">
            <div className="flex items-center gap-2 text-blue-900 font-bold text-sm mb-2">
              <Sparkles size={18} className="text-blue-600" />
              AI Summary & Notes
            </div>
            <p className="text-sm text-blue-950 leading-relaxed">
              {meeting.summary || "No summary available."}
            </p>
          </div>

          {agenda.length > 0 && (
            <div>
              <h3 className="text-sm font-bold text-gray-900 mb-3 flex items-center gap-2">
                <FileText size={16} className="text-gray-500" />
                Meeting Agenda
              </h3>
              <ul className="space-y-2 text-sm text-gray-600 bg-gray-50 p-4 rounded-xl border border-gray-100">
                {agenda.map((item, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <span className="font-semibold text-blue-600">{index + 1}.</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

const Meetings = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [activeTab, setActiveTab] = useState('All')
  const [selectedMeeting, setSelectedMeeting] = useState(null)

  const filteredMeetings = initialMeetings.filter((meeting) => {
    const matchesTab =
      activeTab === 'All' || meeting.status.toLowerCase() === activeTab.toLowerCase()

    const matchesSearch =
      meeting.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      meeting.organizer.toLowerCase().includes(searchTerm.toLowerCase())

    return matchesTab && matchesSearch
  })

  const getCount = (status) => {
    if (status === 'All') return initialMeetings.length
    return initialMeetings.filter((m) => m.status.toLowerCase() === status.toLowerCase()).length
  }

  return (
    <div className="min-h-[calc(100vh-4rem)] bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between mb-8">
          <div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-gray-900">Meetings</h1>
            <p className="mt-1 text-sm text-gray-600">
              Schedule, track, and review all team discussions and AI summaries.
            </p>
          </div>

          <button type="button" className="inline-flex items-center justify-center gap-2 rounded-lg bg-blue-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-700 transition-colors">
            <Plus size={18} />
            Schedule Meeting
          </button>
        </div>

        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between bg-white p-4 rounded-xl border border-gray-100 shadow-sm mb-6">
          <div className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0">
            {['All', 'Upcoming', 'Completed', 'Canceled'].map((tab) => (
              <button key={tab} onClick={() => setActiveTab(tab)}
                className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-sm font-medium transition-colors whitespace-nowrap ${
                  activeTab === tab
                    ? 'bg-blue-50 text-blue-600 font-semibold'
                    : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'}`}>
                {tab}
                <span className={`px-2 py-0.5 text-xs rounded-full ${
                  activeTab === tab
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 text-gray-600'}`}>
                  {getCount(tab)}
                </span>
              </button>
            ))}
          </div>

          <div className="relative w-full md:w-72">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
              <Search size={18} />
            </div>
            <input type="text" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} placeholder="Search meeting"
              className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all"/>
          </div>
        </div>

        {filteredMeetings.length > 0 ? (
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            {filteredMeetings.map((meeting) => (
              <div key={meeting.id} className="flex flex-col justify-between rounded-xl bg-white p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold ${
                      meeting.status === 'Upcoming'
                        ? 'bg-blue-50 text-blue-600' : meeting.status === 'Completed'
                        ? 'bg-green-50 text-green-700' : 'bg-red-50 text-red-600'}`}>
                      {meeting.status === 'Upcoming' && <Clock size={12} />}
                      {meeting.status === 'Completed' && <CheckCircle2 size={12} />}
                      {meeting.status === 'Canceled' && <XCircle size={12} />}
                      {meeting.status}
                    </span>

                    <button className="text-gray-400 hover:text-gray-600 p-1 rounded-md">
                      <MoreVertical size={16} />
                    </button>
                  </div>

                  <h3 className="text-base font-bold text-gray-900 mb-3 line-clamp-1"> {meeting.title}</h3>

                  <div className="space-y-2 text-xs text-gray-600 mb-4">
                    <div className="flex items-center gap-2">
                      <Calendar size={14} className="text-gray-400" />
                      <span>{meeting.date}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock size={14} className="text-gray-400" />
                      <span>{meeting.time}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Users size={14} className="text-gray-400" />
                      <span>{meeting.attendees?.length || 0} Attendees</span>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-gray-100 flex items-center justify-between gap-2">
                  <button onClick={() => setSelectedMeeting(meeting)} className="inline-flex items-center gap-1 text-xs font-semibold text-blue-600 hover:text-blue-700">
                    <FileText size={14} />
                    View Details
                  </button>

                  {meeting.status === 'Upcoming' && (
                    <a href={meeting.meetingLink} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 rounded-lg bg-blue-50 px-3 py-1.5 text-xs font-semibold text-blue-600 hover:bg-blue-100 transition-colors">
                      <Video size={14} />
                      Join Call
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12 bg-white rounded-xl border border-gray-100 shadow-sm">
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-gray-50 text-gray-400 mb-3">
              <Calendar size={24} />
            </div>
            <h3 className="text-base font-bold text-gray-900">No meetings found</h3>
            <p className="mt-1 text-sm text-gray-500">
              Try adjusting your search criteria or status filters.
            </p>
          </div>
        )}

        {selectedMeeting && (
          <MeetingDetailsModal meeting={selectedMeeting} onClose={() => setSelectedMeeting(null)}/>
        )}
      </div>
    </div>
  )
}

export default Meetings