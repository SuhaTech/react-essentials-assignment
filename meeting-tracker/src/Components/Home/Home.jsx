import React from 'react'
import { Link } from 'react-router-dom'
import { Calendar, CheckCircle2, Sparkles, FileText, ArrowRight, Clock, Users, icons } from 'lucide-react'

const features = [
    { icon: Calendar, title: "Seamless Scheduling", description: "Keep track of all your upcoming team syncs, 1-on-1s and client calls in one organized dashboard." },
    { icon: CheckCircle2, title: "Action Item Tracking", description: "Assign task during meetings and monitor completion status to keep projects moving forward." },
    { icon: Sparkles, title: "AIMeeting Insights", description: "Automatically generate concise summaries, key takeaways and decision logs using AI." },
    { icon: FileText, title: "Automated Reports", description: "Export clean performance and attendence reports to measure team engagement over time." }
]


const Home = () => {
  return (
    <div className='min-h-screen bg-gray-50 text-gray-900'>
        <section className='bg-white border-b border-gray-100 py-16 lg:py-24'>
            <div className="mx-auto max-w-7xl px-6 text-center">
                <div className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-4 py-1.5 text-sm font-semibold text-blue-600 mb-6">
                    <Sparkles size={16}/>
                    <span>Smart Meeting Analytics</span>
                </div>
                <h1 className='text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl text-gray-900'>
                    Turn Every Meeting into <br />
                    <span className='text-blue-600'>Actionable Results</span>
                </h1>
                <p className='mx-auto mt-6 max-w-2xl text-lg text-gray-600'>
                  Track schedules, assign follow-ups, and extract automated AI summaries—all from a single, streamlined workspace.  
                </p>
                <div className="mt-8 flex items-center justify-center gap-4">
                    <Link to="/meetings" className='inline-flex items-center gap-2 rounded-lg bg-blue-600 px-6 py-3 text-base font-semibold text-white shadow-sm transition-all'>
                        Go to Meetings <ArrowRight size={18}/>
                    </Link>
                    <Link to="action-items" className='rounded-lg border border-gray-300 bg-white px-6 py-3 text-base font-semibold text-gray-700 transiyion-all'>
                        View Action Items
                    </Link>
                </div>
            </div>
        </section>

        <section className='py-16 lg:py-24'>
            <div className="mx-auto max-w-7xl px-6">
                <div className="text-center mb-12">
                    <h2 className='text-3xl font-bold text-gray-900'>
                        Everything you need to manage team collaboration
                    </h2>
                    <p className='mt-2 text-gray-600'>
                        Stay organized before, during and after every conversation.
                    </p>
                </div>
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
                    {features.map((feature) => (
                        <div key={feature.title} className="flex flex-col rounded-2xl items-center text-center bg-white p-8 shadow-sm border border-gray-100 transition-shadow">
                            <div className={`flex h-12 w-12 items-center justify-center rounded-xl mb-6 ${feature.bgColor || 'bg-blue-50 text-blue-600'}`}>
                                <feature.icon size={22}/>
                            </div>
                            <h3 className='text-xl font-bold text-gray-900 mb-3'>
                                {feature.title}
                            </h3>
                            <p className='text-sm text-gray-500 leading-relaxed max-w-sm'>
                                {feature.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>

        <section className='bg-blue-600 py-12'>
            <div className="mx-auto max-w-7xl px-6 text-center text-white">
                <h2 className='text-2xl sm:text-3xl font-bold'>
                    Ready to review your upcoming task?
                </h2>
                <p className='mt-2 text-blue-100'>
                    Check your pending action items and scheduled syncs.
                </p>
                <div className="mt-6">
                    <Link to="/action-items" className='inline-block rounded-lg bg-white px-6 py-3 text-sm font-semibold text-blue-600 transition-colors'>
                        Open Action Items
                    </Link>
                </div>
            </div>
        </section>
      
    </div>
  )
}

export default Home
