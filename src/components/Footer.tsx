import React from "react";
import { Phone, Mail, MapPin } from "lucide-react";

interface FooterProps {
  onNavTab: (tab: string) => void;
}

export default function Footer({ onNavTab }: FooterProps) {
  const handleLogoClick = () => {
    onNavTab("home");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer role="contentinfo" aria-label="Footer navigation" className="bg-[#121215] text-[#f4eee4] border-t border-[#353238] w-full pt-10 sm:pt-12 pb-8 sm:pb-10 font-sans mt-1 relative overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 md:px-12 grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10 md:gap-12 relative z-10">

        {/* Branding & description */}
        <div className="space-y-5">
          <button
            onClick={handleLogoClick}
            aria-label="KASI TOURS Home"
            className="flex items-center gap-3 cursor-pointer hover:opacity-85 transition-opacity focus-visible:ring-2 focus-visible:ring-[#c5a880] focus-visible:outline-none rounded-md"
          >
            <img
              src="/images/WhatsApp Image 2026-05-31 at 11.27.48 AM-jukebox-bg-removed.png"
              alt="KASI TOURS Logo"
              className="h-16 w-auto object-contain"
            />
          </button>
          <p className="text-xs text-[#c7c1b8] leading-relaxed max-w-sm">
            Luxury travel and spiritual journeys in the heart of India. Dedicated to making every single mile a beautiful lifetime memory.
          </p>
        </div>

        {/* Core navigation */}
        <div className="space-y-5">
          <h4 className="text-xs font-sans font-bold text-[#f4eee4] uppercase tracking-[0.15em]">
            Explore
          </h4>
          <ul className="space-y-3 text-xs">
            <li>
              <button onClick={() => onNavTab("home")} className="text-[#c7c1b8] hover:text-[#f4eee4] transition-colors cursor-pointer flex items-center gap-2 group">
                <span className="w-1.5 h-px bg-[#c5a880] opacity-0 group-hover:opacity-100 transition-opacity"></span> Fleet &amp; Fare
              </button>
            </li>
            <li>
              <button onClick={() => onNavTab("tours")} className="text-[#c7c1b8] hover:text-[#f4eee4] transition-colors cursor-pointer flex items-center gap-2 group">
                <span className="w-1.5 h-px bg-[#c5a880] opacity-0 group-hover:opacity-100 transition-opacity"></span> Spiritual Tours
              </button>
            </li>
            <li>
              <button onClick={() => onNavTab("comparison")} className="text-[#c7c1b8] hover:text-[#f4eee4] transition-colors cursor-pointer flex items-center gap-2 group">
                <span className="w-1.5 h-px bg-[#c5a880] opacity-0 group-hover:opacity-100 transition-opacity"></span> Compare Vehicles
              </button>
            </li>
            <li>
              <button onClick={() => onNavTab("contact")} className="text-[#c7c1b8] hover:text-[#f4eee4] transition-colors cursor-pointer flex items-center gap-2 group">
                <span className="w-1.5 h-px bg-[#c5a880] opacity-0 group-hover:opacity-100 transition-opacity"></span> Contact &amp; Inquiry
              </button>
            </li>
            <li>
              <a 
                href="https://vedicseva.vercel.app/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-[#e5c299] hover:text-white transition-colors flex items-center gap-2 group font-medium"
              >
                <span className="w-1.5 h-px bg-[#c5a880] opacity-0 group-hover:opacity-100 transition-opacity"></span> Book Pandit Seva (VedicSeva) ↗
              </a>
            </li>
          </ul>
        </div>

        {/* Contacts details mappings */}
        <div className="space-y-5">
          <h4 className="text-xs font-sans font-bold text-[#f4eee4] uppercase tracking-[0.15em]">
            Contact Information
          </h4>
          <ul className="space-y-4 text-xs">
            <li className="flex items-center gap-3 text-[#c7c1b8] group">
              <Phone className="w-4 h-4 text-[#c5a880] shrink-0 group-hover:text-[#e5c299] transition-colors" />
              <a href="tel:8577900710" className="group-hover:text-[#f4eee4] transition-colors">8577900710</a>
            </li>
            <li className="flex items-center gap-3 text-[#c7c1b8] group">
              <Mail className="w-4 h-4 text-[#c5a880] shrink-0 group-hover:text-[#e5c299] transition-colors" />
              <a href="mailto:kasitour65@gmail.com" className="group-hover:text-[#f4eee4] transition-colors">kasitour65@gmail.com</a>
            </li>
            <li className="flex items-start gap-3 text-[#c7c1b8] group">
              <MapPin className="w-4 h-4 text-[#f4eee4] shrink-0 mt-0.5 group-hover:text-[#f4eee4] transition-colors" />
              <span className="leading-relaxed group-hover:text-[#f4eee4] transition-colors">Chetganj, Varanasi, Uttar Pradesh 221010</span>
            </li>
          </ul>
        </div>

      </div>

      <div className="mt-10 sm:mt-16 border-t border-[#4b4132] pt-6 px-4 text-center text-[10px] text-[#9d9790] tracking-wider uppercase">
        <p>© 2026 KASI TOURS. All rights reserved.</p>
      </div>
    </footer>
  );
}
