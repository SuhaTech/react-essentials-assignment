import React, { useState } from 'react'
import { Mail, Phone, MapPin, Send, Sparkles, CheckCircle2, Clock, Headphones, Code2, Building2, ArrowUpRight} from 'lucide-react'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    topic: 'General Support',
    message: ''
  })
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setIsSubmitted(true)
    setTimeout(() => setIsSubmitted(false), 5000)
  }

  return (
    <div className="w-full min-h-screen bg-gray-50/60 text-gray-800 font-sans pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 space-y-10">
        <div className="text-left space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-xs font-bold">
            <Sparkles size={14} /> Get in Touch
          </div>
          <h1 className="text-3xl sm:text-4xl font-black text-gray-900 tracking-tight">
            How can we help your team today?
          </h1>
          <p className="text-xs sm:text-sm text-gray-500 max-w-xl">
            Whether you need technical guidance, API access, or enterprise meeting solutions, our team is ready to assist.
          </p>
        </div>

        <div className="bg-white rounded-3xl border border-gray-200/80 shadow-xs overflow-hidden grid grid-cols-1 lg:grid-cols-12">
          <div className="lg:col-span-5 bg-slate-900 p-8 sm:p-10 text-white flex flex-col justify-between space-y-8 text-left relative">
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
            <div className="space-y-6 relative z-10">
              <div>
                <h2 className="text-xl font-extrabold text-white">Contact Information</h2>
                <p className="text-xs text-slate-400 mt-1">Reach out directly or visit our office headquarters.</p>
              </div>
              <div className="space-y-5 text-xs">
                <div className="flex items-start gap-4">
                  <span className="p-3 rounded-2xl bg-slate-800 text-blue-400 border border-slate-700/60 shrink-0">
                    <Mail size={18} />
                  </span>
                  <div>
                    <p className="text-slate-400 font-semibold">Email Us</p>
                    <p className="font-bold text-white text-sm mt-0.5">support@syncpulse.ai</p>
                    <p className="text-[11px] text-slate-500 mt-0.5">Response within 2 hours</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <span className="p-3 rounded-2xl bg-slate-800 text-purple-400 border border-slate-700/60 shrink-0">
                    <Phone size={18} />
                  </span>
                  <div>
                    <p className="text-slate-400 font-semibold">Phone Support</p>
                    <p className="font-bold text-white text-sm mt-0.5">+91 97734 77068</p>
                    <p className="text-[11px] text-slate-500 mt-0.5">Mon – Fri, 9:00 AM – 6:00 PM IST</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <span className="p-3 rounded-2xl bg-slate-800 text-emerald-400 border border-slate-700/60 shrink-0">
                    <MapPin size={18} />
                  </span>
                  <div>
                    <p className="text-slate-400 font-semibold">Office Address</p>
                    <p className="font-bold text-white text-sm mt-0.5">Vadodara, Gujarat, India</p>
                    <p className="text-[11px] text-slate-500 mt-0.5">SyncPulse AI Operations Hub</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-slate-800 space-y-3 relative z-10 text-xs">
              <div className="flex items-center justify-between text-slate-300">
                <span className="flex items-center gap-2">
                  <Clock size={14} className="text-blue-400" /> Platform System Status
                </span>
                <span className="inline-flex items-center gap-1.5 bg-emerald-500/10 text-emerald-400 px-2.5 py-0.5 rounded-full font-bold text-[10px] border border-emerald-500/20">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                  All Systems Operational
                </span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 p-8 sm:p-10 text-left space-y-6">
            <div className="space-y-1">
              <h2 className="text-xl font-bold text-gray-900">Send a Direct Message</h2>
              <p className="text-xs text-gray-500">
                Fill out the details below and our team will get back to you promptly.
              </p>
            </div>

            {isSubmitted && (
              <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs flex items-center gap-3">
                <CheckCircle2 size={18} className="text-emerald-600 shrink-0" />
                <span>Message delivered! Our team will respond shortly.</span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-gray-700">Enter Full Name</label>
                  <input type="text" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} placeholder="Enter your Name"
                    className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-xs focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600 bg-gray-50/50" required/>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-gray-700">Enter Email Address</label>
                  <input type="email" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} placeholder="Enter email address"
                   className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-xs focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600 bg-gray-50/50" required />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-gray-700">Company Name (Optional)</label>
                  <input type="text" value={formData.company} onChange={(e) => setFormData({ ...formData, company: e.target.value })} placeholder="Company Name"
                    className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-xs focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600 bg-gray-50/50"/>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-gray-700">Topic</label>
                  <select value={formData.topic} onChange={(e) => setFormData({ ...formData, topic: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-xs focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600 bg-gray-50/50 text-gray-700">
                    <option value="General Support">General Support</option>
                    <option value="Enterprise Solution">Enterprise Solution</option>
                    <option value="API & Webhooks">Meeting Setup</option>
                    <option value="Billing & Plans">Subscriptions</option>
                  </select>
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-bold text-gray-700">How can we help?</label>
                <textarea rows="4" value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} placeholder="Provide details about your inquiry..."
                 className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-xs focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600 bg-gray-50/50 resize-none" required/>
              </div>

              <button type="submit" className="inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-bold px-7 py-3 rounded-xl text-xs transition-colors shadow-xs cursor-pointer">
                Send Message
              </button>
            </form>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
          <div className="bg-white p-6 rounded-2xl border border-gray-200/80 shadow-xs flex items-start gap-4">
            <span className="p-3 rounded-2xl bg-blue-50 text-blue-600 shrink-0">
              <Headphones size={20} />
            </span>
            <div className="space-y-1">
              <h3 className="text-xs font-bold text-gray-900">Technical Help Desk</h3>
              <p className="text-[11px] text-gray-500 leading-relaxed">Need help with bot permissions or Zoom/Teams integration setup?</p>
            </div>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-gray-200/80 shadow-xs flex items-start gap-4">
            <span className="p-3 rounded-2xl bg-purple-50 text-purple-600 shrink-0">
              <Code2 size={20} />
            </span>
            <div className="space-y-1">
              <h3 className="text-xs font-bold text-gray-900">Developer Documentation</h3>
              <p className="text-[11px] text-gray-500 leading-relaxed">Access SDKs, webhook event listeners, and endpoints.</p>
            </div>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-gray-200/80 shadow-xs flex items-start gap-4">
            <span className="p-3 rounded-2xl bg-emerald-50 text-emerald-600 shrink-0">
              <Building2 size={20} />
            </span>
            <div className="space-y-1">
              <h3 className="text-xs font-bold text-gray-900">Enterprise Solutions</h3>
              <p className="text-[11px] text-gray-500 leading-relaxed">Custom SLA guarantees, dedicated server deployment, and SOC2 docs.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact