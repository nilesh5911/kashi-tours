import React from "react";
import { Phone, Mail, MapPin, Instagram, Facebook, Share2 } from "lucide-react";

interface FooterProps {
  onNavTab: (tab: string) => void;
}

export default function Footer({ onNavTab }: FooterProps) {
  return (
    <footer className="bg-[#0d0d0f] text-gray-300 w-full pt-20 pb-10 border-t border-[#c5a880]/10 font-sans mt-20 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-[#c5a880]/5 blur-[120px] rounded-[100%] pointer-events-none"></div>
      
      <div className="max-w-[1280px] mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-4 gap-12 relative z-10">
        
        {/* Branding & description */}
        <div className="space-y-5">
          <button 
            onClick={() => onNavTab("home")}
            className="font-display text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#e5c299] to-[#8c7355] tracking-[0.2em] cursor-pointer hover:opacity-85 transition-opacity"
          >
            KASI TOUR
          </button>
          <p className="text-xs text-gray-400 leading-relaxed max-w-sm">
            Luxury travel and spiritual journeys in the heart of India. Dedicated to making every single mile a beautiful lifetime memory.
          </p>
          <div className="flex gap-5 pt-2">
            <a href="#" className="text-gray-400 hover:text-[#c5a880] transition-colors hover:scale-110 transform">
              <Facebook className="w-4 h-4" />
            </a>
            <a href="#" className="text-gray-400 hover:text-[#c5a880] transition-colors hover:scale-110 transform">
              <Instagram className="w-4 h-4" />
            </a>
            <a href="#" className="text-gray-400 hover:text-[#c5a880] transition-colors hover:scale-110 transform">
              <Share2 className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Services mapping */}
        <div className="space-y-5">
          <h4 className="text-xs font-sans font-bold text-white uppercase tracking-[0.15em]">
            Services
          </h4>
          <ul className="space-y-3 text-xs">
            <li>
              <button onClick={() => onNavTab("home")} className="text-gray-400 hover:text-[#c5a880] transition-colors cursor-pointer flex items-center gap-2 group">
                <span className="w-1.5 h-px bg-[#c5a880] opacity-0 group-hover:opacity-100 transition-opacity"></span> Luxury Fleet
              </button>
            </li>
            <li>
              <button onClick={() => onNavTab("tours")} className="text-gray-400 hover:text-[#c5a880] transition-colors cursor-pointer flex items-center gap-2 group">
                <span className="w-1.5 h-px bg-[#c5a880] opacity-0 group-hover:opacity-100 transition-opacity"></span> Ghat &amp; City Tours
              </button>
            </li>
            <li>
              <button onClick={() => onNavTab("tours")} className="text-gray-400 hover:text-[#c5a880] transition-colors cursor-pointer flex items-center gap-2 group">
                <span className="w-1.5 h-px bg-[#c5a880] opacity-0 group-hover:opacity-100 transition-opacity"></span> Outstation Travel
              </button>
            </li>
            <li>
              <button onClick={() => onNavTab("home")} className="text-gray-400 hover:text-[#c5a880] transition-colors cursor-pointer flex items-center gap-2 group">
                <span className="w-1.5 h-px bg-[#c5a880] opacity-0 group-hover:opacity-100 transition-opacity"></span> Wedding Events Car
              </button>
            </li>
          </ul>
        </div>

        {/* Quick Links mapping */}
        <div className="space-y-5">
          <h4 className="text-xs font-sans font-bold text-white uppercase tracking-[0.15em]">
            Quick Links
          </h4>
          <ul className="space-y-3 text-xs">
            <li>
              <button onClick={() => onNavTab("comparison")} className="text-gray-400 hover:text-[#c5a880] transition-colors cursor-pointer flex items-center gap-2 group">
                <span className="w-1.5 h-px bg-[#c5a880] opacity-0 group-hover:opacity-100 transition-opacity"></span> Luxury Tier Specs
              </button>
            </li>
            <li>
              <button onClick={() => onNavTab("contact")} className="text-gray-400 hover:text-[#c5a880] transition-colors cursor-pointer flex items-center gap-2 group">
                <span className="w-1.5 h-px bg-[#c5a880] opacity-0 group-hover:opacity-100 transition-opacity"></span> Contact &amp; Inquiry
              </button>
            </li>
            <li>
              <a href="#" className="text-gray-400 hover:text-[#c5a880] transition-colors flex items-center gap-2 group">
                <span className="w-1.5 h-px bg-[#c5a880] opacity-0 group-hover:opacity-100 transition-opacity"></span> Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-400 hover:text-[#c5a880] transition-colors flex items-center gap-2 group">
                <span className="w-1.5 h-px bg-[#c5a880] opacity-0 group-hover:opacity-100 transition-opacity"></span> Terms of Service
              </a>
            </li>
          </ul>
        </div>

        {/* Contacts details mappings */}
        <div className="space-y-5">
          <h4 className="text-xs font-sans font-bold text-white uppercase tracking-[0.15em]">
            Contact Information
          </h4>
          <ul className="space-y-4 text-xs">
            <li className="flex items-center gap-3 text-gray-400 group">
              <Phone className="w-4 h-4 text-[#8c7355] shrink-0 group-hover:text-[#c5a880] transition-colors" />
              <span className="group-hover:text-white transition-colors">8577900710</span>
            </li>
            <li className="flex items-center gap-3 text-gray-400 group">
              <Mail className="w-4 h-4 text-[#8c7355] shrink-0 group-hover:text-[#c5a880] transition-colors" />
              <span className="group-hover:text-white transition-colors">kasitour65@gmail.com</span>
            </li>
            <li className="flex items-start gap-3 text-gray-400 group">
              <MapPin className="w-4 h-4 text-[#8c7355] shrink-0 mt-0.5 group-hover:text-[#c5a880] transition-colors" />
              <span className="leading-relaxed group-hover:text-white transition-colors">Chetganj, Varanasi, Uttar Pradesh 221010</span>
            </li>
          </ul>
        </div>

      </div>

      <div className="mt-16 border-t border-[#c5a880]/10 pt-6 text-center text-[10px] text-gray-500 tracking-wider uppercase">
        <p>© 2026 KASI TOUR. All rights reserved.</p>
      </div>
    </footer>
  );
}
