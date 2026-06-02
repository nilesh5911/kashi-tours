import React, { useState, useEffect } from "react";
import { Phone, Calendar, Star, Layers, MapPin, Send, MessageSquare } from "lucide-react";

interface HeaderProps {
  currentTab: string;
  setTab: (tab: string) => void;
  onOpenBookingModal: () => void;
}

export default function Header({ currentTab, setTab, onOpenBookingModal }: HeaderProps) {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { id: "home", label: "Fleet & Fare" },
    { id: "tours", label: "Spiritual Tours" },
    { id: "comparison", label: "Luxury Classes" },
    { id: "contact", label: "Inquiry & Contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrollY > 50
          ? "bg-white/85 shadow-[0_4px_30px_rgba(0,0,0,0.03)] border-b border-[#c5a880]/20 py-3 backdrop-blur-xl"
          : "bg-transparent border-b border-transparent py-6 backdrop-blur-sm"
      }`}
    >
      <div className="max-w-[1280px] mx-auto px-6 md:px-12 flex justify-between items-center">
        <button
          onClick={() => setTab("home")}
          className={`font-display font-bold text-2xl tracking-[0.25em] transition-colors duration-300 ${
            scrollY > 50 ? "text-[#141416]" : "text-[#fdfdfd] drop-shadow-md"
          } hover:opacity-80`}
        >
          KASI TOUR
        </button>

        <div className="hidden md:flex items-center gap-10">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setTab(item.id)}
              className={`relative font-sans text-xs font-semibold tracking-widest uppercase transition-colors duration-300 ${
                currentTab === item.id
                  ? (scrollY > 50 ? "text-[#8c7355]" : "text-[#e5c299]")
                  : (scrollY > 50 ? "text-[#4a4a4a] hover:text-[#8c7355]" : "text-white/80 hover:text-white")
              }`}
            >
              {item.label}
              {currentTab === item.id && (
                <span className={`absolute -bottom-2 left-1/2 -translate-x-1/2 w-4 h-0.5 rounded-full transition-all duration-300 ${
                  scrollY > 50 ? "bg-[#8c7355]" : "bg-[#e5c299]"
                }`}></span>
              )}
            </button>
          ))}
        </div>

        <button
          onClick={onOpenBookingModal}
          className="bg-gradient-to-r from-[#c5a880] to-[#8c7355] text-white font-sans font-bold text-xs uppercase tracking-widest px-7 py-3.5 rounded-full hover:shadow-[0_8px_20px_rgba(197,168,128,0.3)] hover:-translate-y-0.5 transition-all duration-300 cursor-pointer"
        >
          Book Now
        </button>
      </div>
    </nav>
  );
}
