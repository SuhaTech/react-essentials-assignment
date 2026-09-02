import React from 'react'
import { Sparkles, MapPin, Phone, Mail} from 'lucide-react'
import { Link } from 'react-router-dom'

const FacebookIcon = ({ size = 16, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
)

const InstagramIcon = ({ size = 16, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
)

const TwitterIcon = ({ size = 16, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
  </svg>
)

const LinkedinIcon = ({ size = 16, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
)

const Footer = () => {
  return (
    <footer className="w-full bg-white border-t border-gray-100 font-sans text-gray-700">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-8 items-start">
          
          <div className="md:col-span-5 space-y-5 text-left">
                <Link to="/" className="flex items-center gap-2">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600 text-lg font-bold text-white">AI</div>
                    <div>
                        <h1 className="text-lg font-bold text-gray-900">Meeting Tracker</h1>
                    </div>
                </Link>
                <p className="text-xs sm:text-sm text-gray-500 leading-relaxed max-w-sm">
                    Don't let your meeting insights go cold. Capture voice transcripts, automate follow-ups, and track every task decision on SyncPulse.
                </p>

                <div className="flex items-center gap-2.5 pt-1">
                    <a href="facebook" className="h-9 w-9 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-600 flex items-center justify-center transition-colors" aria-label="Facebook">
                        <FacebookIcon size={15} />
                    </a>
                    <a href="instagram" className="h-9 w-9 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-600 flex items-center justify-center transition-colors" aria-label="Instagram">
                        <InstagramIcon size={15} />
                    </a>
                    <a href="twitter" className="h-9 w-9 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-600 flex items-center justify-center transition-colors" aria-label="Twitter">
                        <TwitterIcon size={15} />
                    </a>
                    <a href="linkedin" className="h-9 w-9 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-600 flex items-center justify-center transition-colors" aria-label="LinkedIn">
                        <LinkedinIcon size={15} />
                    </a>
                </div>
           </div>

          <div className="md:col-span-3 space-y-4 text-left">
            <h3 className="text-sm font-bold text-gray-900 tracking-wider uppercase">
              QUICK LINKS
            </h3>
            <ul className="space-y-3.5 text-xs sm:text-sm">
              <li>
                <a href="home" className="text-gray-600 hover:text-blue-600 underline transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="about" className="text-gray-600 hover:text-blue-600 underline transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="contact" className="text-gray-600 hover:text-blue-600 underline transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div className="md:col-span-4 space-y-4 text-left">
            <h3 className="text-sm font-bold text-gray-900 tracking-wider uppercase">
              CONTACT INFO
            </h3>
            <div className="space-y-3.5 text-xs sm:text-sm text-gray-600">
              <div className="flex items-center gap-3">
                <MapPin size={18} className="text-blue-600 shrink-0" />
                <span>Vadodara, Gujarat, India</span>
              </div>

              <div className="flex items-center gap-3">
                <Phone size={18} className="text-blue-600 shrink-0" />
                <a href="tel:+919773477068" className="hover:text-blue-600 transition-colors">
                  +91 97734 77068
                </a>
              </div>

              <div className="flex items-center gap-3">
                <Mail size={18} className="text-blue-600 shrink-0" />
                <a href="mailto:support@syncpulse.ai" className="hover:text-blue-600 underline transition-colors">
                  support@syncpulse.ai
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>

      <div className="border-t border-gray-100 py-6">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500">
          <div>
            © 2026 SyncPulse. All Rights Reserved.
          </div>

          <div className="flex items-center gap-6">
            <a href="#privacy" className="text-blue-600 hover:underline">
              privacyPolicy
            </a>
            <a href="#terms" className="text-blue-600 hover:underline">
              termsAndConditions
            </a>
            <a href="#support" className="text-blue-600 hover:underline">
              support
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer