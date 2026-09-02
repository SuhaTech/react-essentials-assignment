import React, { useState } from 'react'
import { CheckCircle2, Clock, AlertCircle, Calendar, User, Plus, Filter, MoreHorizontal } from 'lucide-react'

const sampleActionItems = [
    {
        id: "1",
        task: "Finalize high-fidelity Figma components & export design tokens.",
        description: "Ensure color contrast matches accessibility guidelines and update light-theme dashboard UI library.",
        assignee: { name: "David zen", role: "UI/UX Lead", avatar: "DZ" },
        dueDate: "Aug 2, 2026",
        priority: "High",
        status: "Completed",
        meetingTitle: "Product Design Review"
    },
    {
        id: "2",
        task: "Optimize database query latency for AI summaries",
        description: "Refactor PostgreSQL query indexes to reduce response time from 1.2s to under 400ms for incoming requests.",
        assignee: { name: "Elena Rostova", role: "Backend Dev", avatar: "ER" },
        dueDate: "Aug 4, 2026",
        priority: "High",
        status: "In Progress",
        meetingTitle: "Weekly Engineering Standup"
    },
    {
        id: 3,
        task: "Publish updated sprint board & milestone dates in Jira",
        description: "Align week 1 deliverables for Q3 with product management and broadcast board link to the dev channel.",
        assignee: { name: "Sarah Chen", role: "Product Manager", avatar: "SC" },
        dueDate: "Aug 5, 2026",
        priority: "Medium",
        status: "Pending",
        meetingTitle: "Q3 Sprint Planning"
    },
    {
        id: 4,
        task: "Prepare architecture diagram & API throughput model",
        description: "Draft flowcharts detailing rate-limiting strategies for AI summarization API endpoints.",
        assignee: { name: "Alex Morgan", role: "Lead Engineer", avatar: "AM" },
        dueDate: "Aug 7, 2026",
        priority: "Low",
        status: "Pending",
        meetingTitle: "Q3 Sprint Planning"        
    }
]

const ActionItems = ({ items = sampleActionItems }) => {
    const [ actionList, setActionList ] = useState(items)
    const [ filter, setFilter ] = useState('All')
    const toggleStatus = (id) => {
        setActionList((prev) => prev.map((item) => item.id === id
        ? {...item, status:item.status === 'Completed' ? 'Pending' : 'Completed'} : item))
    }
    const filteredList = actionList.filter((item) => {
        if(filter === 'All') return true
        return item.status.toLowerCase() === filter.toLowerCase()
    })
    const getPriorityBadge = (priority) => {
        switch(priority) {
            case 'High':
                return 'bg-red-50 text-red-600 border-red-100'
            case 'Medium':
                return 'bg-amber-50 text-amber-600 border-amber-100'
            default:
                return 'bg-gray-50 text-gray-600 border-gray-100'
        }
    }
    const getStatusBadge = (status) => {
        switch (status) {
            case 'Completed':
                return 'bg-green-50 text-green-700 border-green-100'
            case 'In progress':
                return 'bg-blue-50 text-blue-600 border-blue-100'
            default:
                return 'bg-gray-50 text-gray-600 border-gray-100'
        }
    }
  return (
    <div className='w-full bg-white rounded-2xl border border-gray-100 p-6 shadow-sm'>
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between mb-6 pb-4 border-b border-gray-100">
        <div>
            <h2 className='text-xl font-bold text-gray-900 flex items-center gap-2'>
                <CheckCircle2 size={22} className='text-blue-600'/> Detailed Action Items
            </h2>
            <p className='text-xs text-gray-500 mt-1'>
                Track and manage post-meeting deliverables assigned to your team.
            </p>
        </div>
        <div className="flex items-center gap-2">
            {[ 'All', 'Pending', 'In Progress', 'Completed' ].map((tab) => (
                <button key={tab} onClick={() => setFilter(tab)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors ${
                        filter === tab
                        ? 'bg-blue-50 text-blue-600' : 'text-gray-500'
                    }`}>
                    {tab}
                </button>
            ))}
        </div>
      </div>
      <div className="space-y-4">
        {filteredList.map((item) => (
            <div key={item.id} className={`flex flex-col sm:flex-row sm:items-start justify-between p-4 rounded-xl border transition-all duration-200 ${
                item.status === 'Completed'
                ? 'bg-gray-50/50 border-gray-100 opacity-75' : 'bg-white border-gray-100'}`}>
                <div className="flex items-start gap-3.5 flex-1 pr-4">
                    <button onClick={() => toggleStatus(item.id)}
                        className='mt-0.5 text-gray-300 transition-colors'>
                        {item.status === 'Completed' ? (
                            <CheckCircle2 size={20} className='text-green-600 fill-green-50'/>
                        ) : (
                            <div className="h-5 w-5 rounded-full border-2 border-gray-300"/>
                        )}
                    </button>
                    <div className="space-y-1.5">
                        <div className="flex flex-wrap items-center gap-2">
                            <h3 className={`text-sm font-bold ${
                                item.status === 'Completed'
                                ? 'line-through text-gray-400' : 'text-gray-900'}`}>
                                {item.task}
                            </h3>
                        </div>
                        <p className='text-xs text-gray-500 leading-relaxed max-w-xl'>{item.description}</p>
                        <div className="flex flex-wrap items-center gap-3 pt-1 text-[11px] text-gray-400">
                            <span className='font-medium text-gray-500 bg-gray-100 px-2 py-0.5 rounded'>{item.meetingTitle}</span>
                            <span className='flex items-center gap-1'><Calendar size={12}/>Due {item.dueDate}</span>
                        </div>
                    </div>
                </div>
                <div className="mt-4 sm:mt-0 flex items-center justify-between sm:justify-end gap-3 border-t sm:border-t-0 pt-3 sm:pt-0 border-gray-100">
                    <div className="flex items-center gap-2">
                        <span className={`px-2.5 py-1 rounded-full text-[11px] font-semibold border ${getPriorityBadge(item.priority)}`}>
                            {item.priority}
                        </span>
                        <span className={`px-2 py-1 rounded-full text-[11px] font-semibold border ${getStatusBadge(item.status)}`}>
                            {item.status}
                        </span>
                    </div>
                    <div className="flex items-center gap-2 pl-2 border-l border-gray-100" title={`${item.assignee.name} (${item.assignee.role})`}>
                        <div className="h-7 w-7 rounded-full bg-blue-600 text-white font-bold text-xs flex items-center justify-center">
                            {item.assignee.avatar}
                        </div>
                        <div className="hidden md:block text-left">
                            <p className='text-xs font-bold text-gray-900 leading-none'>{item.assignee.name}</p>
                            <p className='text-[10px] text-gray-400 mt-0.5'>{item.assignee.role}</p>
                        </div>
                    </div>
                </div>        
            </div>
        ))}
      </div>
    </div>
  )
}

export default ActionItems
