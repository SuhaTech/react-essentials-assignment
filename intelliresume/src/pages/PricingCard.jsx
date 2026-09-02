import React from "react";
import { Check, X, Gift, Sparkles ,ArrowRight } from "lucide-react";

export default function PricingCard({ plan }) {
  const rawFeatures = plan.features || [
    { label: plan.users, available: true },
    { label: plan.records, available: true },
    { label: plan.credits, available: true },
    { label: plan.email, available: true },
    { label: plan.analytics, available: true },
    { label: "API access", available: plan.api },
    { label: "Custom integrations", available: plan.integration },
    { label: "Dedicated account manager", available: plan.manager },
  ];

  // Convert array strings into object format if needed
  const featuresList = rawFeatures.map((item) =>
    typeof item === "string" ? { label: item, available: true } : item
  );

  return (
    <div
      className={`relative flex flex-col justify-between bg-white rounded-3xl transition-all duration-300 w-full max-w-[300px] px-8 sm:px-9 sm:py-7 ${
        plan.popular
          ? "border-2 border-[#2563EB] shadow-[0_20px_40px_rgba(37,99,235,0.12)] scale-[1.03] z-20"
          : "border border-slate-200/80 shadow-sm hover:shadow-xl hover:border-blue-200 hover:-translate-y-1 z-10"
      }`}
    >
      {/* 1. MOST POPULAR BADGE */}
      {plan.popular && (
        <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 z-30">
          <span className="bg-[#2563EB] text-white px-4 py-1 rounded-full text-[11px] font-bold tracking-wider uppercase shadow-md flex items-center gap-1.5 whitespace-nowrap">
            <Sparkles size={12} className="fill-white" />
            Most Popular
          </span>
        </div>
      )}

      <div>
        {/* 2. FREE TRIAL BADGE */}
        <div className="h-8 flex justify-center items-center mt-2 mb-2">
          {plan.trial ? (
            <span className="inline-flex items-center gap-1.5 bg-emerald-50 text-emerald-600 border border-emerald-200 rounded-full px-3 py-1 text-xs font-bold shadow-2xs whitespace-nowrap">
              <Gift size={13} />
              Free 7-Day Trial
            </span>
          ) : null}
        </div>

        {/* 3. PLAN TITLE & PRICE */}
        <div className="text-center">
          <span className="uppercase tracking-widest text-slate-400 text-xs font-extrabold block mb-2">
            {plan.title}
          </span>

          <div className="my-2 flex items-center justify-center">
            {plan.price === "Free" ? (
              <div className="py-1">
                <h2 className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tight">
                  Free
                </h2>
                <p className="text-slate-400 text-xs font-semibold mt-1">
                  forever
                </p>
              </div>
            ) : (
              <div>
                <div className="flex items-start justify-center">
                  <span className="text-xl font-bold text-slate-700 mt-1 mr-0.5">
                    ₹
                  </span>
                  <h2 className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tight">
                    {plan.price}<span className="text-xs font-semibold text-slate-400 ml-1">
                    / month
                  </span>
                  </h2>
                  
                </div>
                
              </div>
            )}
          </div><br/>

          <p className="text-slate-500 text-xs font-medium leading-relaxed mt-2 min-h-[32px] px-2">
            {plan.description || "Perfect for getting started and exploring options."}
          </p>
        </div>
<br/>
                 
          

        {/* DIVIDER (SPACING ENHANCED) */}
        <div className="h-px bg-slate-100 my-15"></div>

        {/* 5. FEATURES LIST WITH BOTTOM PADDING (pb-2) */}
        <div className="pl-12 sm:pl-14">
        <div className="flex flex-col gap-3.5 pb-2">
          <p className="text-[11px] font-extrabold uppercase tracking-wider text-slate-400 text-center mb-1">
            FEATURES INCLUDED:
          </p>
          {featuresList.map((feature, index) => (
            <div key={index} className="flex items-start gap-4">
              {feature.available ? (
                <div className="flex items-start gap-4">
  <div className="w-8 flex justify-center">
    <div className="p-0.5 rounded-full bg-blue-50 text-[#2563EB]">
      <Check size={14} strokeWidth={3} />
    </div>
  </div></div>
              ) : (
                <div className="p-4 rounded-full bg-slate-100 text-slate-300 mt-0.5 flex-shrink-0 ml-6">
                  <X size={14} strokeWidth={2.5} />
                </div>
              )}

              <span
                className={`text-xs leading-5 pl-1 ${
                  feature.available
                    ? "text-slate-700 font-semibold"
                    : "text-slate-300 line-through"
                }`}
              >
                {feature.label}
              </span>
            </div>
          ))}<br/>
        </div>
      </div>
      </div>
      {/* 5. BOTTOM PINNED BUTTON SECTION */}
      <div className="pt-6 mt-6 border-t border-slate-100 flex flex-col items-center">
  <button
    type="button"
    className={`group  w-45 h-10 flex items-center justify-center gap-2 px-7 py-3 rounded-xl text-sm font-semibold transition-all duration-300 cursor-pointer ${
      plan.popular
        ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 hover:-translate-y-0.5"
        : "bg-white border border-slate-200 text-slate-700 shadow-sm hover:bg-slate-50 hover:border-slate-300 hover:shadow-md"
    }`}
  ><br/>
    <span>
      {plan.button || (plan.trial ? "Start Free Trial" : "Get Started")}
    </span>

    <ArrowRight
      size={16}
      className="transition-transform duration-300 group-hover:translate-x-1"
    />
  </button><br/>

  <p className="text-xs text-slate-400 mt-4 flex items-center gap-2">
    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
    15-Day Free Trial • Cancel Anytime
  </p><br/>
</div>
    </div>
  );
}