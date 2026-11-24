import React, { useState, useEffect, useCallback } from "react";
import { Phone, Calendar, Star, Layers, MapPin, Send, MessageSquare, Menu, X } from "lucide-react";

interface HeaderProps {
  currentTab: string;
  setTab: (tab: string) => void;
  onOpenBookingModal: () => void;
}

export default function Header({ currentTab, setTab, onOpenBookingModal }: HeaderProps) {
  const [scrollY, setScrollY] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  const closeMobileMenu = useCallback(() => {
    setMobileMenuOpen(false);
  }, []);

  const handleLogoClick = useCallback(() => {
    setTab("home");
    window.scrollTo({ top: 0, behavior: "smooth" });
    closeMobileMenu();
  }, [setTab, closeMobileMenu]);

  const handleNavClick = useCallback((tabId: string) => {
    setTab(tabId);
    closeMobileMenu();
  }, [setTab, closeMobileMenu]);

  const handleBookNowMobile = useCallback(() => {
    onOpenBookingModal();
    closeMobileMenu();
  }, [onOpenBookingModal, closeMobileMenu]);

  const navItems = [
    { id: "home", label: "Fleet & Fare" },
    { id: "tours", label: "Spiritual Tours" },
    { id: "comparison", label: "Luxury Classes" },
    { id: "contact", label: "Inquiry & Contact" },
  ];

  return (
    <nav
      aria-label="Main navigation"
      role="navigation"
      className={`fixed top-0 left-0 w-full z-50 border-b py-4 md:py-6 backdrop-blur-md transition-all duration-300 ${scrollY > 48 ? "bg-[#121215]/95 border-[#353238] shadow-sm" : "bg-transparent border-transparent"}`}
    >
      <div className="max-w-[1280px] mx-auto px-6 md:px-12 flex justify-between items-center">
        <button
          onClick={handleLogoClick}
          aria-label="KASI TOURS Home"
          className="transition-transform duration-300 hover:opacity-80 hover:scale-105 focus-visible:ring-2 focus-visible:ring-[#c5a880] focus-visible:outline-none rounded-md cursor-pointer"
        >
          <img
            src="/images/WhatsApp Image 2026-05-31 at 11.27.48 AM-jukebox-bg-removed.png"
            alt="KASI TOURS Logo"
            className="h-14 w-auto object-contain"
          />
        </button>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8 lg:gap-10">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setTab(item.id)}
              aria-current={currentTab === item.id ? "page" : undefined}
              className={`relative font-sans text-xs font-semibold tracking-widest uppercase transition-colors duration-300 focus-visible:ring-2 focus-visible:ring-[#c5a880] focus-visible:outline-none rounded-sm ${
                currentTab === item.id
                  ? (scrollY > 48 ? "text-[#f4eee4]" : "text-white")
                  : scrollY > 48 ? "text-[#c7c1b8] hover:text-[#f4eee4]" : "text-white/80 hover:text-white"
              }`}
            >
              {item.label}
              {currentTab === item.id && (
                <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-4 h-0.5 rounded-full bg-[#c5a880] transition-all duration-300"></span>
              )}
            </button>
          ))}
          <a
            href="https://vedicseva.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-sans text-xs font-semibold tracking-widest uppercase text-[#e5c299] hover:text-white transition-colors flex items-center gap-1 border-b border-[#c5a880]/40 pb-0.5"
          >
            Pandit Seva ↗
          </a>
        </div>

        {/* Desktop Book Now */}
        <button
          onClick={onOpenBookingModal}
          className="hidden md:block bg-[#c5a880] text-white font-sans font-bold text-xs uppercase tracking-widest px-7 py-3.5 rounded-full hover:shadow-[0_8px_20px_rgba(197,168,128,0.18)] hover:-translate-y-0.5 transition-all duration-300 cursor-pointer focus-visible:ring-2 focus-visible:ring-[#c5a880] focus-visible:outline-none focus-visible:ring-offset-2"
        >
          Book Now
        </button>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setMobileMenuOpen((prev) => !prev)}
          aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={mobileMenuOpen}
          aria-controls="mobile-nav-menu"
          className={`md:hidden flex items-center justify-center w-11 h-11 rounded-lg ${scrollY > 48 ? "text-[#f4eee4] hover:bg-black/5" : "text-white hover:bg-white/10"} transition-colors duration-200 focus-visible:ring-2 focus-visible:ring-[#c5a880] focus-visible:outline-none`}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation Overlay */}
      {/* Backdrop */}
      <div
        className={`fixed inset-0 bg-black/60 transition-opacity duration-300 md:hidden ${mobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
          }`}
        style={{ top: 0, zIndex: 40 }}
        onClick={closeMobileMenu}
        aria-hidden="true"
      />

      {/* Mobile Menu Panel */}
      <div
        id="mobile-nav-menu"
        className={`fixed top-0 right-0 h-full w-[85%] max-w-sm md:hidden transform transition-transform duration-300 ease-in-out ${mobileMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        style={{ zIndex: 50, backgroundColor: "rgba(17, 17, 20, 0.98)" }}
      >
        {/* Header with Logo and Close Button */}
        <div className="flex justify-between items-center p-4 border-b border-[#353238]">
          <button
            onClick={handleLogoClick}
            aria-label="KASI TOURS Home"
            className="flex items-center gap-2 cursor-pointer hover:opacity-80 transition-opacity focus-visible:ring-2 focus-visible:ring-[#c5a880] focus-visible:outline-none rounded-md"
          >
            <img
              src="/images/WhatsApp Image 2026-05-31 at 11.27.48 AM-jukebox-bg-removed.png"
              alt="KASI TOURS Logo"
              className="h-10 w-auto object-contain"
            />
          </button>
          <button
            onClick={closeMobileMenu}
            aria-label="Close navigation menu"
            className="flex items-center justify-center w-11 h-11 rounded-lg text-[#f4eee4]/70 hover:text-[#f4eee4] hover:bg-[#09090b] transition-colors duration-200 focus-visible:ring-2 focus-visible:ring-[#c5a880] focus-visible:outline-none"
          >
            <X size={24} />
          </button>
        </div>

        {/* Nav Items */}
        <div className="flex flex-col px-6 pt-2">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              aria-current={currentTab === item.id ? "page" : undefined}
              className={`w-full text-left text-base font-semibold py-4 border-b border-[#353238] transition-colors duration-200 min-h-[48px] flex items-center focus-visible:ring-2 focus-visible:ring-[#c5a880] focus-visible:outline-none rounded-sm ${currentTab === item.id
                  ? "text-[#f4eee4]"
                  : "text-[#c7c1b8] hover:text-[#f4eee4]"
                }`}
            >
              {currentTab === item.id && (
                <span className="w-1 h-5 bg-[#c5a880] rounded-full mr-3 flex-shrink-0" />
              )}
              {item.label}
            </button>
          ))}
          <a
            href="https://vedicseva.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            onClick={closeMobileMenu}
            className="w-full text-left text-base font-semibold py-4 border-b border-[#353238] transition-colors duration-200 min-h-[48px] flex items-center justify-between text-[#e5c299] hover:text-white"
          >
            <span>Book Pandit Seva</span>
            <span className="text-[10px] font-bold uppercase tracking-wider bg-[#c5a880]/20 text-[#e5c299] px-2.5 py-1 rounded-full border border-[#c5a880]/30">
              VedicSeva ↗
            </span>
          </a>
        </div>

        {/* Mobile CTA Buttons */}
        <div className="flex flex-col gap-4 px-6 pt-8">
          <button
            onClick={handleBookNowMobile}
            className="w-full bg-[#c5a880] text-white font-sans font-bold text-sm uppercase tracking-widest px-7 py-4 rounded-full hover:shadow-[0_8px_20px_rgba(197,168,128,0.18)] transition-all duration-300 min-h-[48px] focus-visible:ring-2 focus-visible:ring-[#c5a880] focus-visible:outline-none focus-visible:ring-offset-2 focus-visible:ring-offset-[#09090b]"
          >
            Book Now
          </button>

          <a
            href="https://wa.me/918577900710?text=Hello%20Kasi%20Tours!%20I'd%20love%20to%20discuss%20a%20luxury%20spiritual%20journey%20to%20Varanasi."
            target="_blank"
            rel="noopener noreferrer"
            onClick={closeMobileMenu}
            className="w-full flex items-center justify-center gap-2 bg-[#25D366]/15 text-[#25D366] font-sans font-bold text-sm uppercase tracking-widest px-7 py-4 rounded-full hover:bg-[#25D366]/25 transition-all duration-300 min-h-[48px] focus-visible:ring-2 focus-visible:ring-[#25D366] focus-visible:outline-none"
          >
            <MessageSquare size={18} />
            WhatsApp
          </a>
        </div>
      </div>
    </nav>
  );
}
