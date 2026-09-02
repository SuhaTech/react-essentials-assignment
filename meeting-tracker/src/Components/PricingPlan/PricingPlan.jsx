import { ArrowRight, Building2, Check, CheckCircle2, ChevronDown, ChevronUp, HelpCircle, ShieldCheck, Sparkles, Zap } from 'lucide-react';
import React, { useState } from 'react'

const PricingPlan = () => {
    const [isAnnual, setIsAnnual] = useState(true);
    const [openFaq, setOpenFaq] = useState(null);
    const toggleFaq = (index) => {
        setOpenFaq(openFaq === index ? null : index);
    };

    const plans = [
        {
            name: 'Starter',
            icon: Zap,
            description: 'Perfect for freelancers and individual professionals looking to automate meeting notes.',
            price: {monthly: 499, annual:399},
            features: [
                'Up to 30 meeting hours/month',
                'Auto-transcription & summaries',
                'Export to Google Docs & PDF',
                'Action item extractiion',
                'Email summary sharing',
            ],
            cta: 'Start Free 15-Day Trial',
            popular: false,
            buttonVarient: "outline",
        },
        {
            name: 'Pro',
            badge: 'Most Popular',
            icon: Sparkles,
            description: 'Ideal for fast-moving teams that need deep AI insights and CRM integrations.',
            price: {monthly: 999, annual: 1299},
            features: [
                'Unlimited meeting hours',
                'Speaker identification & sentiment analysis',
                'Integrations with Notion, Slack & HubSpot',
                'Custom AI prompt templates',
                'Search across all pst transcripts',
                'Video recording & highlights export',
                'Priority email & chat support,'
            ],
            cta: 'Get Started with Pro', 
            popular: true,
            buttonVarient: "primary",
        },
        {
            name: 'Enterprise',
            icon: Building2,
            description: 'Built for scale with custom compliance, advanced security and dedicated support.',
            price: {monthly: 2499, annual: 2999},
            features: [
                'Everything in Pro Plan',
                'Compliance reports',
                'Custom API access & Webhooks',
                'Custom vocabulary for domain terms',
                'Single Sign-on',
                'Dedicated Customer Success Manager',
                '99.9% Uptime SLA',
            ],
            cta: 'Enterprise',
            popular: false,
            buttonVarient: "dark",
        },
    ];
    const faqs = [
        {
            q: 'How does the 15-day trial work?',
            a: 'You get full access to the Pro plan features for 14 days. No credit card is required to sign up.',
        },
        {
            q: 'Can I switch between monthly and annual plans later?',
            a: 'Yes, you can upgrade, downgrade or switch billing frequencies anytime from payment plan.'
        },
        {
            q: 'Are taxes included in the prices?',
            a: 'Prices shown exclude GST (18%). GST will be calculated at checkout based on your billing address.'
        },
        {
            q: 'Which meeting platforms do you support?',
            a: 'We seamlessly integrate with Google Meet, Zoom ,Microsoft Teams and Webex'
        },
    ];
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-slate-50 font-sans py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
            <div className="text-center max-w-3xl mx-auto mb-14">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-700 text-xs font-semibold tracking-wide uppercase mb-4 shadow-sm">
                    <Sparkles className='w-4 h-4 text-indigo-600'/>Flexible AI Meeting Plans
                </div>
                <h1 className='text-4xl sm:text-5xl font-black text-slate-900 tracking-tight mb-4'>Spend less time writing notes, <br />
                  <span className='bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent'>more time closing deals.</span>
                </h1>
                <p className='text-base sm:text-lg text-slate-600 leading-relaxed'>Choose the plan that fits your workflow. Automate transcription, summaries discussion and track follow-ups effortlessly.</p>

                <div className="mt-8 inline-flex items-center gap-2 bg-slate-100 p-1.5 rounded-full border border-slate-200 shadow-inner">
                    <button onClick={() => setIsAnnual(false)} className={`px-6 py-2.5 text-sm font-semibold rounded-full transition-all duration-200 ${
                        !isAnnual ? 'bg-white text-slate-900 shadow-md' : 'text-slate-600'}`}>
                       Monthly Charges 
                    </button>
                    <button onClick={() => setIsAnnual(true)} className={`px-6 py-2.5 text-sm font-semibold rounded-full transition-all duration-200 flex items-center gap-2 ${
                        isAnnual ? 'bg-indigo-600 text-white shadow-md' : 'text-slate-600'}`}>
                       Annual Charges 
                       <span className={`text-xs font-bold px-2 py-0.5 rounded-full transition-colors ${
                        isAnnual ? 'bg-emerald-400/20 text-emerald-200 border border-emerald-400/30' : 'bg-emerald-100 text-emerald-800'}`}> Save 20%</span>
                    </button>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch mb-20">
                {plans.map((plan, index) => {
                    const IconComponent = plan.icon;
                    const currentPrice = isAnnual ? plan.price.annual : plan.price.monthly;
                    return(
                        <div key={index} className={`relative bg-white rounded-3xl p-8 transition-all duration-300 flex flex-col justify-between border ${
                            plan.popular ? 'border-indigo-600 ring-4 ring-indigo-600/10 shadow-2xl lg:translate-y-2' : 'border-slate-200 shadow-sm'}`}>
                           {plan.popular && (
                            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white text-xs font-bold uppercase tracking-wider px-4 py-1.5 rounded-full shadow-md flex items-center gap-1.5">
                                <Sparkles className='w-3.5 h-3.5 fill-current'/>{plan.badge}
                            </div>
                           )}
                           <div>
                                <div className="flex items-center justify-between mb-4">
                                    <div className={`p-3 rounded-2xl ${
                                        plan.popular ? 'bg-indigo-600 text-white' : 'bg-slate-100 text-slate-700'}`}>
                                       <IconComponent className='w-6 h-6'/>     
                                    </div>
                                    <span className='text-xs font-bold uppercase tracking-wider text-slate-400'>{plan.name}Plan</span>
                                </div>
                                <h3 className='text-2xl font-bold text-slate-900 mb-2'>{plan.name}</h3>
                                <p className='text-sm text-slate-500 leading-relaxed mb-6 min-h-[40px]'>{plan.description}</p>

                                <div className="mb-6 pb-6 border-b border-slate-100">
                                    <div className="flex items-baseline gap-1">
                                        <span className='text-4xl sm:text-5xl font-black text-slate-900 tracking-tight'>₹{currentPrice.toLocaleString('en-IN')}</span>
                                        <span className='text-slate-500 font-medium text-sm'>/ month</span>
                                    </div>
                                    <p className='text-xs text-slate-400 font-medium mt-1.5'>
                                        {isAnnual ? `charges annually (₹${(currentPrice * 12).toLocaleString('en-IN')}/yr)` : 'charges monthly'}
                                    </p>
                                </div>

                                <div className="space-y-3.5 mb-8">
                                    <p className='text-xs font-bold uppercase tracking-wider text-slate-400'>Features Included:</p>
                                    {plan.features.map((feature, fIdx) => (
                                        <div key={fIdx} className="flex items-start gap-3 text-sm text-slate-700">
                                            <div className="mt-0.5 p-0.5 rounded-full bg-emerald-100 text-emerald-600 shrinl-0">
                                                <Check className='w-3.5 h-3.5 stroke-[3]'/>
                                            </div>
                                            <span className='leading-tight'>{feature}</span>
                                        </div>
                                    ))}
                                </div>
                            </div> 

                            <div>
                                <button className={`w-full py-3.5 px-6 rounded-2xl font-bold text-sm transition-all duration-200 flex items-center justify-center gap-2 shadow-sm ${
                                    plan.buttonVarient === 'primary'
                                    ? 'bg-indigo-600 text-white shadow-indigo-200' : plan.buttonVarient === 'dark'
                                    ? 'bg-slate-900 text-white' : 'bg-slate-100 text-slate-800 border border-slate-200'}`}>
                                    {plan.cta} <ArrowRight className='w-4 h-4'/>
                                </button>
                                <p className='text-center text-xs text-slate-400 mt-2.5 font-medium'>15-Day Free Trial • Cancel Anytime</p>
                            </div>     
                        </div>
                    )
                })}
            </div>

            <div className="bg-slate-100/70 border border-slate-200/80 rounded-2xl p-6 sm:p-8 mb-20">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center md:text-left divide-y md:divide-y-0 md:divide-x divide-slate-200">
                    <div className="flex items-center gap-4 justify-center md:justidy-start pt-2 md:pt-0">
                        <ShieldCheck className='w-8 h-8 text-indigo-600 shrink-0'/>
                        <div>
                            <h4 className='font-bold text-slate-900text-sm'>Enterprise Security</h4>
                            <p className='text-xs text-slate-500 mt-0.5'>Data encryption at rest and in transit</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-4 justify-center md:justify-start pt-4 md:pt-0 md:pl-6">
                        <CheckCircle2 className='w-8 h-8 text-indigo-600 shrink-0'/>
                        <div>
                            <h4 className='font-bold text-slate-900 text-sm'>No Credit Card Required</h4>
                            <p className='text-xs text-slate-500 mt-0.5'>Explore full pro features for 15 days free</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-4 justify-center md:justify-start pt-4 md:pt-0 md:pl-6">
                        <HelpCircle className='w-8 h-8 text-indigo-600 shrink-0'/>
                        <div>
                            <h4 className='font-bold text-slate-900 text-sm'>24/7 Support</h4>
                            <p className='text-xs text-slate-500 mt-0.5'>Chat & email assistance whenever you need it</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="max-w-3xl mx-auto">
                <div className="text-center mb-10">
                    <h2 className='text-3xl font-extrabold text-slate-900'>Frequently Asked Questions</h2>
                    <p className='text-slate-600 mt-2 text-sm sm:text-base'>Got questions about our plans? Here is everything you need to know.</p>
                </div>

                <div className="space-y-3.5">
                    {faqs.map((faq, idx) => (
                        <div key={idx} className="bg-white rounded-2xl border border-slate-200/90 overflow-hidden shadow-xs transition-all duration-200">
                            <button onClick={() => toggleFaq(idx)} className='w-full p-5 text-left flex justify-between items-center gap-4 transition-colors'>
                                <span className='font-semibold text-slate-900 text-base'>{faq.q}</span>
                                {openFaq === idx ? (
                                    <ChevronUp className='w-5 h-5 text-indigo-600 shrink-0'/>
                                ) : (
                                    <ChevronDown className='w-5 h-5 text-slate-400 shrink-0'/>
                                )}
                            </button>
                            {openFaq === idx && (
                                <div className="px-5 pb-5 text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-3">{faq.a}</div>
                            )}
                        </div>
                    ))}
                </div>
            </div>

        </div>
    </div>
  )
}

export default PricingPlan
