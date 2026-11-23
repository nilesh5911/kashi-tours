import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowLeft, MessageCircle } from "lucide-react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import BookingModal from "./components/BookingModal";
import CostEstimator from "./components/CostEstimator";
import FleetTab from "./components/FleetTab";
import ToursTab from "./components/ToursTab";
import ComparisonTab from "./components/ComparisonTab";
import ContactTab from "./components/ContactTab";

export default function App() {
  const [currentTab, setCurrentTab] = useState<string>("home");
  const [isCostEstimator, setIsCostEstimator] = useState(() => window.location.pathname === "/cost-estimator");
  const [isBookingOpen, setIsBookingOpen] = useState<boolean>(false);
  const [selectedCarId, setSelectedCarId] = useState<string>("innova");
  const [initialPickup, setInitialPickup] = useState<string>("");
  const [initialDrop, setInitialDrop] = useState<string>("");

  // Smooth scroll to top when changing views
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [currentTab, isCostEstimator]);

  useEffect(() => {
    const handlePopState = () => setIsCostEstimator(window.location.pathname === "/cost-estimator");
    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  const returnHome = () => {
    window.history.pushState({}, "", "/");
    setIsCostEstimator(false);
    setCurrentTab("home");
  };

  const handleBookCar = (carId: string) => {
    setSelectedCarId(carId);
    setInitialPickup("");
    setInitialDrop("");
    setIsBookingOpen(true);
  };

  const handleRouteBooking = (pickup: string, drop: string) => {
    setInitialPickup(pickup);
    setInitialDrop(drop);
    setSelectedCarId("innova");
    setIsBookingOpen(true);
  };

  const renderActiveTab = () => {
    switch (currentTab) {
      case "home":
        return (
          <FleetTab onBookCar={handleBookCar} />
        );
      case "tours":
        return (
          <ToursTab 
            onPlanTrip={handleRouteBooking} 
          />
        );
      case "comparison":
        return (
          <ComparisonTab 
            onBookCarClass={handleBookCar} 
          />
        );
      case "contact":
        return (
          <ContactTab />
        );
      default:
        return (
          <FleetTab onBookCar={handleBookCar} />
        );
    }
  };

  if (isCostEstimator) {
    return (
      <div className="min-h-screen bg-[#09090b] text-[#f4eee4] flex flex-col justify-between selection:bg-[#c5a880]/30 selection:text-[#f4eee4] overflow-x-hidden">
        <div>
          <header className="border-b border-[#c5a880]/15 px-4 py-3 sm:px-8 bg-[#121215]/95 backdrop-blur-md sticky top-0 z-50">
            <div className="mx-auto flex max-w-5xl items-center justify-between">
              <a 
                href="/" 
                onClick={(e) => {
                  e.preventDefault();
                  returnHome();
                }}
                aria-label="KASI TOUR Home" 
                className="cursor-pointer transition-transform duration-300 hover:opacity-80 hover:scale-105 focus-visible:ring-2 focus-visible:ring-[#c5a880] focus-visible:outline-none rounded-md inline-flex items-center"
              >
                <img src="/images/WhatsApp Image 2026-05-31 at 11.27.48 AM-jukebox-bg-removed.png" alt="KASI TOUR" className="h-11 w-auto object-contain" />
              </a>
              <button 
                onClick={returnHome} 
                className="inline-flex min-h-10 items-center gap-2 rounded-full border border-[#c5a880]/30 px-4 text-xs font-semibold text-[#e5c299] transition hover:bg-[#c5a880]/10 cursor-pointer focus-visible:ring-2 focus-visible:ring-[#c5a880] focus-visible:outline-none"
              >
                <ArrowLeft className="h-4 w-4" /> Back to home
              </button>
            </div>
          </header>
          <main>
            <div className="mx-auto max-w-4xl px-4 pt-7 text-center sm:px-6 sm:pt-10">
              <p className="text-[10px] font-bold uppercase tracking-[0.24em] text-[#e5c299]">KASI TOUR · Transparent fares</p>
              <h1 className="mt-2 font-display text-3xl font-semibold text-[#f4eee4] sm:text-4xl">Calculate Your Trip Cost</h1>
              <p className="mx-auto mt-2 max-w-xl text-sm leading-6 text-[#c7c1b8]">Choose a vehicle and pricing option, enter your distance and passenger count, and see your fare update instantly.</p>
            </div>
            <CostEstimator />
          </main>
        </div>
        <Footer 
          onNavTab={(tab) => {
            returnHome();
            setCurrentTab(tab);
          }} 
        />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#09090b] text-[#f4eee4] flex flex-col justify-between selection:bg-[#c5a880]/30 selection:text-[#f4eee4] overflow-x-hidden">
      
      {/* Dynamic Header */}
      <Header 
        currentTab={currentTab} 
        setTab={setCurrentTab} 
        onOpenBookingModal={() => handleBookCar("innova")} 
      />

      {/* Main Content Router with Layout Animations */}
      <main className="flex-grow">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentTab}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
          >
            {renderActiveTab()}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Shared Footer block */}
      <Footer onNavTab={setCurrentTab} />

      {/* Floating Interactive WhatsApp Call to Action FAB */}
      <a
        href="https://wa.me/918577900710?text=Hello%20Kasi%20Tour!%20I'd%20love%20to%20discuss%20a%20luxury%20spiritual%20journey%20to%20Varanasi."
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 min-w-[56px] min-h-[56px] bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 active:scale-95 transition-transform z-50 flex items-center justify-center cursor-pointer group focus-visible:ring-4 focus-visible:ring-[#25D366]/50 focus-visible:outline-none"
        aria-label="Contact Varanasi Travel Guide via WhatsApp"
      >
        <MessageCircle className="w-6 h-6 fill-current text-white stroke-none" />
        <span className="max-w-0 overflow-hidden group-hover:max-w-xs group-hover:ml-2 text-xs font-sans font-bold uppercase tracking-wider transition-all duration-300">
          WhatsApp Help
        </span>
      </a>

      {/* Interactive Booking Modal */}
      <BookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        selectedCarId={selectedCarId}
        initialPickup={initialPickup}
        initialDrop={initialDrop}
      />

    </div>
  );
}
