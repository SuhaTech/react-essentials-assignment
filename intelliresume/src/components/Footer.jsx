import React from 'react';
import { FaInstagram, FaFacebook, FaYoutube, FaTwitter } from 'react-icons/fa';
import { MapPin, Building2, ShieldCheck } from "lucide-react";
import Container from './Container';
import {
  HiOutlineMail,
  HiOutlinePhone,
} from "react-icons/hi";


const platformLinks = [
  "Home",
  "About",
  "Pricing",
  "Features",
  "Contact",
];

const Footer = () => {
  return (
    <footer className="w-full bg-[#050a1a] text-slate-400 pt-20 pb-10 border-t border-blue-900/30">
      <Container>
        <br/><br/><br/>
        {/* Newsletter Section - Styled as a Premium Card */}
        <div className="flex flex-col items-center text-center mb-20 py-16 px-6">
          <h2 className="text-4xl md:text-5xl font-serif text-white mb-4">Are you on the list?</h2><br/>
          <p className="mb-8 max-w-sm text-slate-500">
            Join to get exclusive career insights, ATS tips, and premium offers.
          </p><br/><br/>
          
          <div className="flex flex-col sm:flex-row gap-2 w-full max-w-md">
            <input 
              type="email" 
              placeholder="Enter your email" 
              style={{
                backgroundColor: '#0e0202',
                color: '#ffffff',
                padding: '14px 28px',
                borderRadius: '12px',
                fontWeight: '600',
                fontSize: '15px',
                boxShadow: '0 10px 15px -3px rgba(37, 99, 235, 0.25)',
                transition: 'all 0.2s',
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center'
              }} className="hover:opacity-95"
            />
            <button style={{
                backgroundColor: '#ffffff',
                color: '#000000',
                padding: '14px 28px',
                borderRadius: '12px',
                fontWeight: '600',
                fontSize: '15px',
                boxShadow: '0 10px 15px -3px rgba(37, 99, 235, 0.25)',
                transition: 'all 0.2s',
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                background: 'linear-gradient(90deg, #ffffff 0%, #ffffff 100%)'
              }} className="hover:opacity-95">
              Join
            </button>
          </div>
        </div><br/><br/><br/>

        {/* Footer Links Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 text-sm px-4 text-slate-400">
          
            <div className="space-y-8">

  {/* Heading */}
  <div>
    <h4 className="text-lg font-bold uppercase tracking-[3px] text-white">
      Platform
    </h4>

    <div className="mt-3 h-1 w-14 rounded-full bg-gradient-to-r from-blue-500 to-cyan-400"></div><br/>
  </div>

  {/* Links */}
  <ul className="space-y-5">

    {platformLinks.map((item) => (
      <li
        key={item}
        className="flex items-center gap-3 text-slate-300 cursor-pointer transition-all duration-300 hover:text-white hover:translate-x-2"
      >
        <span className="h-2 w-2 rounded-full bg-blue-500"></span>

        <span>{item}</span>
      </li>
    ))}

  </ul>

</div>


<div className="space-y-8">

  {/* Heading */}
  <div>
    <h4 className="text-lg font-bold uppercase tracking-[3px] text-white">
      Our Office
    </h4>

    <div className="mt-3 h-1 w-14 rounded-full bg-gradient-to-r from-blue-500 to-cyan-400"></div><br/>
  </div>

  {/* Office Card */}
  <div className="rounded-2xl border border-slate-700 bg-slate-800/40 p-6 backdrop-blur-sm shadow-lg">

    <div className="flex items-start gap-4">

      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-600/20">
        <Building2 className="h-6 w-6 text-blue-400" />
      </div>

      <div className="space-y-2 text-slate-300">

        <h5 className="text-base font-semibold text-white">
          IntelliResume Pvt. Ltd.
        </h5>

        <div className="flex items-start gap-2 text-sm leading-7 text-slate-400">
          <MapPin size={18} className="mt-1 text-blue-400 flex-shrink-0" />

          <div>
            <p>123 Tech Park, Phase 2</p>
            <p>Vadodara, Gujarat 390001</p>
          </div>

        </div>

      </div>

    </div>

  </div>

</div>
          <div className="space-y-8">

  {/* Heading */}
  <div>
    <h4 className="text-lg font-bold uppercase tracking-[3px] text-white">
      Policy
    </h4>

    <div className="mt-3 h-1 w-14 rounded-full bg-gradient-to-r from-blue-500 to-cyan-400"></div><br/>
  </div>

  {/* Links */}
  <ul className="space-y-5">

    {['Service Terms', 'Privacy Policy', 'Payment Methods', 'FAQ'].map((item) => (

      <li
  key={item}
  className="group flex items-center gap-3 cursor-pointer text-slate-300 hover:text-white hover:translate-x-2 transition-all duration-300"
>
  <ShieldCheck
    size={16}
    className="text-blue-400 group-hover:text-cyan-400 transition-colors"
  />

  <span>{item}</span>
</li>

    ))}

  </ul>

</div>
         <div className="space-y-8">

  {/* Heading */}
  <div>
    <h4 className="text-xl font-bold text-white uppercase tracking-[3px]">
      Support
    </h4>

    <div className="mt-3 w-16 h-1 rounded-full bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-500"></div><br/>
  </div>

  {/* Contact Card */}
  <div className="relative overflow-hidden rounded-3xl border border-slate-700/60 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 p-6 shadow-xl">

    {/* Glow Effect */}
    <div className="absolute -top-12 -right-12 h-28 w-28 rounded-full bg-blue-500/20 blur-3xl"></div>

    <div className="relative space-y-6">

      {/* Email */}
      <div className="flex items-center gap-4">

        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-600/15 border border-blue-500/20">
          <HiOutlineMail className="text-blue-400 text-xl" />
        </div>

        <div>
          <p className="text-xs uppercase tracking-[2px] text-slate-500">
            Email
          </p>

          <p className="text-white font-semibold hover:text-blue-400 transition cursor-pointer">
            support@intelliresume.com
          </p>
        </div>
      </div>
      <br/>

      {/* Phone */}
      <div className="flex items-center gap-4">

        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-green-600/15 border border-green-500/20">
          <HiOutlinePhone className="text-green-400 text-xl" />
        </div>

        <div>
          <p className="text-xs uppercase tracking-[2px] text-slate-500">
            Phone
          </p>

          <p className="text-white font-semibold">
            +91 98765 43210
          </p>
        </div>

      </div>

    </div>

  </div>

  {/* Social */}
  <div>
<br/>
    
  </div>

</div>

        </div>
        <br/><br/><br/>
        

    <div className="w-full flex flex-col items-center justify-center py-12">

  {/* Heading */}
  <span className="text-sm font-semibold uppercase tracking-[4px] text-slate-400">
    Connect With Us
  </span>

  {/* Underline */}
  <div className="mt-3 mb-8 h-1 w-20 rounded-full bg-gradient-to-r from-blue-500 via-cyan-400 to-indigo-500"></div>
    <br/>
  {/* Social Icons */}
  <div className="flex items-center justify-center gap-5 flex-wrap">

    {[FaInstagram, FaFacebook, FaYoutube, FaTwitter].map((Icon, index) => (

      <button
        key={index}
        className="group flex h-14 w-14 items-center justify-center rounded-2xl
        border border-slate-700 bg-slate-800/80 backdrop-blur-md
        text-slate-300 shadow-lg
        transition-all duration-300
        hover:-translate-y-2
        hover:scale-110
        hover:border-blue-500
        hover:bg-gradient-to-br
        hover:from-blue-600
        hover:to-cyan-500
        hover:text-white
        hover:shadow-blue-500/40"
      >
        <Icon size={22} />
      </button>

    ))}

  </div><br/><br/>

</div>
        <div className="mt-16 pt-8 border-t border-slate-900 text-xs text-slate-600 flex flex-col md:flex-row justify-between items-center gap-4">
          <p>© 2026 IntelliResume. All rights reserved.</p>
          <div className="flex gap-6">
            <span className="cursor-pointer hover:text-white">Terms</span>
            <span className="cursor-pointer hover:text-white">Privacy</span>
          </div>
        </div>
      </Container><br/><br/>
    </footer>
  );
};

export default Footer;