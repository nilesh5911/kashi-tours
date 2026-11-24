import React, { useState, useEffect, useCallback } from "react";
import { Phone, MessageSquare, Menu, X, Sparkles } from "lucide-react";

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
    window.addEventListener("scroll", handleScroll, { passive: true });
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

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && mobileMenuOpen) {
        closeMobileMenu();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [mobileMenuOpen, closeMobileMenu]);

  const handleLogoClick = useCallback(() => {
    setTab("home");
    window.scrollTo({ top: 0, behavior: "smooth" });
    closeMobileMenu();
  }, [setTab, closeMobileMenu]);

  const handleNavClick = useCallback((tabId: string) => {
    setTab(tabId);
    window.scrollTo({ top: 0, behavior: "smooth" });
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
      className={`fixed top-0 left-0 w-full z-50 border-b py-3 sm:py-3.5 lg:py-5 backdrop-blur-md transition-all duration-300 ${
        scrollY > 30
          ? "bg-[#121215]/95 border-[#353238] shadow-md shadow-black/40"
          : "bg-[#09090b]/85 border-white/[0.08] sm:bg-transparent sm:border-transparent"
      }`}
    >
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 md:px-10 lg:px-12 flex justify-between items-center">
        {/* Brand Logo */}
        <button
          onClick={handleLogoClick}
          aria-label="KASI TOURS Home"
          className="transition-transform duration-300 hover:opacity-85 hover:scale-[1.02] focus-visible:ring-2 focus-visible:ring-[#c5a880] focus-visible:outline-none rounded-md cursor-pointer flex items-center"
        >
          <img
            src="/images/WhatsApp Image 2026-05-31 at 11.27.48 AM-jukebox-bg-removed.png"
            alt="KASI TOURS Logo"
            className="h-10 sm:h-12 lg:h-14 w-auto object-contain transition-all duration-300"
          />
        </button>

        {/* Switch before the 1024px device width is reduced by a scrollbar. */}
        <div className="hidden min-[1000px]:flex items-center gap-6 xl:gap-8">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              aria-current={currentTab === item.id ? "page" : undefined}
              className={`relative font-sans text-xs font-semibold tracking-widest uppercase transition-colors duration-300 focus-visible:ring-2 focus-visible:ring-[#c5a880] focus-visible:outline-none rounded-sm py-1 ${
                currentTab === item.id
                  ? (scrollY > 30 ? "text-[#f4eee4]" : "text-white")
                  : scrollY > 30 ? "text-[#c7c1b8] hover:text-[#f4eee4]" : "text-white/80 hover:text-white"
              }`}
            >
              {item.label}
              {currentTab === item.id && (
                <span className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-4 h-0.5 rounded-full bg-[#c5a880] transition-all duration-300"></span>
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
          className="hidden min-[1000px]:block bg-[#c5a880] text-[#17130d] font-sans font-bold text-xs uppercase tracking-widest px-6 xl:px-7 py-3 xl:py-3.5 rounded-full hover:bg-[#d8bd96] hover:shadow-[0_8px_20px_rgba(197,168,128,0.22)] hover:-translate-y-0.5 transition-all duration-300 cursor-pointer focus-visible:ring-2 focus-visible:ring-[#c5a880] focus-visible:outline-none"
        >
          Book Now
        </button>

        {/* Tablet & Mobile Right Action Group */}
        <div className="flex items-center gap-2.5 sm:gap-3 min-[1000px]:hidden">
          {/* Quick Book Now Pill for Tablets / Large Mobile */}
          <button
            onClick={onOpenBookingModal}
            className="hidden sm:inline-flex items-center justify-center bg-[#c5a880] text-[#17130d] font-sans font-bold text-[11px] uppercase tracking-wider px-4 py-2 rounded-full hover:bg-[#d8bd96] transition-all cursor-pointer shadow-sm active:scale-[0.98]"
          >
            Book Now
          </button>

          {/* Hamburger Menu Button */}
          <button
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-nav-menu"
            className={`flex items-center justify-center w-10 h-10 sm:w-11 sm:h-11 rounded-lg border border-white/10 ${
              scrollY > 30 ? "bg-[#17171c] text-[#f4eee4]" : "bg-black/30 text-white"
            } hover:border-[#c5a880]/50 hover:text-[#e5c299] transition-all duration-200 focus-visible:ring-2 focus-visible:ring-[#c5a880] focus-visible:outline-none`}
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile & Tablet Navigation Overlay */}
      {/* Backdrop */}
      <div
        className={`fixed inset-0 bg-black/75 backdrop-blur-sm transition-opacity duration-300 min-[1000px]:hidden ${
          mobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        style={{ top: 0, zIndex: 60 }}
        onClick={closeMobileMenu}
        aria-hidden="true"
      />

      {/* Mobile & Tablet Menu Drawer */}
      <div
        id="mobile-nav-menu"
        className={`fixed top-0 right-0 h-auto max-h-[100dvh] w-[85%] max-w-sm sm:max-w-md min-[1000px]:hidden flex flex-col transform transition-transform duration-300 ease-in-out shadow-[-10px_0_30px_rgba(0,0,0,0.7)] ${
          mobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
        style={{ zIndex: 70, backgroundColor: "#121215" }}
      >
        {/* Drawer Header */}
        <div className="flex justify-between items-center px-5 py-4 border-b border-[#353238] bg-[#141418]">
          <button
            onClick={handleLogoClick}
            aria-label="KASI TOURS Home"
            className="flex items-center cursor-pointer hover:opacity-85 transition-opacity focus-visible:ring-2 focus-visible:ring-[#c5a880] focus-visible:outline-none rounded-md"
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
            className="flex items-center justify-center w-10 h-10 rounded-lg text-[#f4eee4]/80 hover:text-white hover:bg-white/10 transition-colors focus-visible:ring-2 focus-visible:ring-[#c5a880] focus-visible:outline-none"
          >
            <X size={22} />
          </button>
        </div>

        {/* Scrollable Nav Items Area */}
        <div className="flex-1 overflow-y-auto px-5 py-3 space-y-1 divide-y divide-[#353238]/60">
          <div className="pt-1 pb-2 space-y-1">
            <span className="block px-2 text-[10px] font-bold uppercase tracking-[0.2em] text-[#a59b8e] mb-2">
              Navigation Menu
            </span>
            {navItems.map((item) => {
              const isActive = currentTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  aria-current={isActive ? "page" : undefined}
                  className={`w-full text-left font-sans text-sm sm:text-base font-semibold py-3.5 px-3 rounded-xl transition-all duration-200 min-h-[48px] flex items-center justify-between ${
                    isActive
                      ? "bg-[#c5a880]/15 text-[#f4eee4] border border-[#c5a880]/30 shadow-sm"
                      : "text-[#c7c1b8] hover:bg-white/5 hover:text-white"
                  }`}
                >
                  <span className="flex items-center gap-3">
                    <span
                      className={`w-1.5 h-5 rounded-full transition-all ${
                        isActive ? "bg-[#c5a880]" : "bg-transparent"
                      }`}
                    />
                    {item.label}
                  </span>
                  {isActive && (
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#e5c299] bg-[#c5a880]/20 px-2 py-0.5 rounded-md">
                      Current
                    </span>
                  )}
                </button>
              );
            })}
          </div>

          {/* External Pandit Seva link */}
          <div className="pt-3">
            <a
              href="https://vedicseva.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              onClick={closeMobileMenu}
              className="w-full text-left text-sm sm:text-base font-semibold py-3.5 px-3 rounded-xl transition-colors duration-200 min-h-[48px] flex items-center justify-between text-[#e5c299] hover:bg-white/5 hover:text-white"
            >
              <span className="flex items-center gap-3">
                <Sparkles className="w-4 h-4 text-[#c5a880] shrink-0 ml-1" />
                <span>Book Pandit Seva</span>
              </span>
              <span className="text-[10px] font-bold uppercase tracking-wider bg-[#c5a880]/20 text-[#e5c299] px-2.5 py-1 rounded-full border border-[#c5a880]/30">
                VedicSeva ↗
              </span>
            </a>
          </div>
        </div>

        {/* Drawer Footer Actions */}
        <div className="p-5 border-t border-[#353238] bg-[#141418] space-y-3 shrink-0">
          <button
            onClick={handleBookNowMobile}
            className="w-full bg-[#c5a880] text-[#17130d] font-sans font-bold text-xs uppercase tracking-widest py-3.5 rounded-full hover:bg-[#d8bd96] transition-all shadow-md active:scale-[0.98] min-h-[48px] flex items-center justify-center"
          >
            Book Now
          </button>

          <div className="grid grid-cols-2 gap-2.5">
            <a
              href="https://wa.me/918577900710?text=Hello%20Kasi%20Tours!%20I'd%20love%20to%20discuss%20a%20luxury%20spiritual%20journey%20to%20Varanasi."
              target="_blank"
              rel="noopener noreferrer"
              onClick={closeMobileMenu}
              className="flex items-center justify-center gap-1.5 bg-[#25D366]/15 text-[#25D366] border border-[#25D366]/30 font-sans font-bold text-[11px] uppercase tracking-wider py-2.5 rounded-full hover:bg-[#25D366]/25 transition-all min-h-[44px] active:scale-[0.98]"
            >
              <MessageSquare size={15} />
              WhatsApp
            </a>

            <a
              href="tel:+918577900710"
              onClick={closeMobileMenu}
              className="flex items-center justify-center gap-1.5 bg-white/5 text-[#f4eee4] border border-white/15 font-sans font-bold text-[11px] uppercase tracking-wider py-2.5 rounded-full hover:border-[#c5a880] hover:text-[#e5c299] transition-all min-h-[44px] active:scale-[0.98]"
            >
              <Phone size={14} className="text-[#c5a880]" />
              Call Concierge
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
