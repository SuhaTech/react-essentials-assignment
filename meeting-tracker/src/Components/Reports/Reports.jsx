import React, { useState } from 'react'
import { BarChart3, TrendingUp, Clock, CheckCircle2, Users, Download, Calendar, Filter, FileText, Sparkles, ArrowUpRight, ArrowDownRight, ChevronDown} from 'lucide-react'

const reportData = [
  {
    id: "REP-2026-07",
    period: "July 2026",
    totalMeetings: 24,
    totalHours: "32h 45m",
    actionItemsTotal: 48,
    completionRate: 85,
    topOrganizer: "Sarah Chen",
    avgMeetingLength: "42m"
  },
  {
    id: "REP-2026-06",
    period: "June 2026",
    totalMeetings: 28,
    totalHours: "38h 10m",
    actionItemsTotal: 52,
    completionRate: 78,
    topOrganizer: "Alex Morgan",
    avgMeetingLength: "45m"
  },
  {
    id: "REP-2026-05",
    period: "May 2026",
    totalMeetings: 19,
    totalHours: "24h 30m",
    actionItemsTotal: 31,
    completionRate: 92,
    topOrganizer: "David Zen",
    avgMeetingLength: "38m"
  }
]

const Reports = () => {
  const [timeRange, setTimeRange] = useState('This Month')

  return (
    <div className="w-full bg-gray-50/60 min-h-screen p-6 md:p-8 space-y-8">
      
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="p-1.5 rounded-lg bg-blue-600 text-white"><BarChart3 size={18} /></span>
            <span className="text-xs font-bold text-blue-600 tracking-wider uppercase">Analytics</span>
          </div>
          <h1 className="text-2xl font-black text-gray-900 tracking-tight">Reports & Insights</h1>
          <p className="text-xs text-gray-500 mt-1">Analyze meeting efficiency, team workload, and action item delivery velocity.</p>
        </div>

        <div className="flex items-center gap-3">
          <div className="relative">
            <select value={timeRange} onChange={(e) => setTimeRange(e.target.value)}
              className="appearance-none bg-white border border-gray-200 text-gray-700 text-xs font-semibold py-2.5 pl-3 pr-8 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-600 shadow-2xs cursor-pointer">
              <option>This Month</option>
              <option>Last Quarter</option>
              <option>Year</option>
            </select>
            <ChevronDown size={14} className="absolute right-2.5 top-3 text-gray-400 pointer-events-none" />
          </div>

          <button className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2.5 rounded-xl text-xs font-semibold shadow-2xs transition-colors">
            <Download size={14} /> Export Report
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-2xs space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-gray-500">Total Meetings</span>
            <span className="p-2 rounded-xl bg-blue-50 text-blue-600"><Calendar size={18}/></span>
          </div>
          <div className="flex items-baseline justify-between">
            <span className="text-2xl font-black text-gray-900">24</span>
            <span className="inline-flex items-center gap-0.5 text-xs font-bold text-emerald-600"><ArrowUpRight size={14}/>+12%</span>
          </div>
          <p className="text-[11px] text-gray-400">vs. 21 meetings last month</p>
        </div>

        <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-2xs space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-gray-500">Meeting Hours</span>
            <span className="p-2 rounded-xl bg-purple-50 text-purple-600"><Clock size={18}/></span>
          </div>
          <div className="flex items-baseline justify-between">
            <span className="text-2xl font-black text-gray-900">32.7 hrs</span>
            <span className="inline-flex items-center gap-0.5 text-xs font-bold text-rose-500"><ArrowDownRight size={14}/>-5%</span>
          </div>
          <p className="text-[11px] text-gray-400">Avg 42 mins per session</p>
        </div>

        <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-2xs space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-gray-500">Task Completion</span>
            <span className="p-2 rounded-xl bg-emerald-50 text-emerald-600"><CheckCircle2 size={18}/></span>
          </div>
          <div className="flex items-baseline justify-between">
            <span className="text-2xl font-black text-gray-900">85%</span>
            <span className="inline-flex items-center gap-0.5 text-xs font-bold text-emerald-600"><ArrowUpRight size={14}/>+7%</span>
          </div>
          <p className="text-[11px] text-gray-400">41 of 48 action items done</p>
        </div>

        <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-2xs space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-gray-500">Active Team</span>
            <span className="p-2 rounded-xl bg-orange-50 text-orange-600"><Users size={18}/></span>
          </div>
          <div className="flex items-baseline justify-between">
            <span className="text-2xl font-black text-gray-900">14 Members</span>
            <span className="inline-flex items-center gap-0.5 text-xs font-bold text-emerald-600"><ArrowUpRight size={14}/>+2</span>
          </div>
          <p className="text-[11px] text-gray-400">Across 3 department units</p>
        </div>
      </div>

      <div className="bg-white rounded-2xl border border-gray-100 p-6 shadow-2xs space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-sm font-bold text-gray-900">Monthly Archives</h3>
            <p className="text-xs text-gray-500">Historical summary downloads and metrics log.</p>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead>
              <tr className="border-b border-gray-100 text-gray-400 font-semibold uppercase text-[10px] tracking-wider">
                <th className="pb-3">Period</th>
                <th className="pb-3">Meetings</th>
                <th className="pb-3">Hours Spent</th>
                <th className="pb-3">Action Items</th>
                <th className="pb-3">Completion Rate</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50 text-gray-700">
              {reportData.map((row) => (
                <tr key={row.id} className="hover:bg-gray-50/50 transition-colors">
                  <td className="py-3.5 font-bold text-gray-900">{row.period}</td>
                  <td className="py-3.5">{row.totalMeetings} sessions</td>
                  <td className="py-3.5">{row.totalHours}</td>
                  <td className="py-3.5">{row.actionItemsTotal} tasks</td>
                  <td className="py-3.5">
                    <span className="inline-flex items-center px-2 py-0.5 rounded-md font-bold text-[10px] bg-emerald-50 text-emerald-700 border border-emerald-100">
                      {row.completionRate}%
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default Reports