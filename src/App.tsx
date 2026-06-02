import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { MessageCircle } from "lucide-react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import BookingModal from "./components/BookingModal";
import FleetTab from "./components/FleetTab";
import ToursTab from "./components/ToursTab";
import ComparisonTab from "./components/ComparisonTab";
import ContactTab from "./components/ContactTab";

export default function App() {
  const [currentTab, setCurrentTab] = useState<string>("home");
  const [isBookingOpen, setIsBookingOpen] = useState<boolean>(false);
  const [selectedCarId, setSelectedCarId] = useState<string>("innova");
  const [initialPickup, setInitialPickup] = useState<string>("");
  const [initialDrop, setInitialDrop] = useState<string>("");

  // Smooth scroll to top when changing views
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [currentTab]);

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
          <FleetTab 
            onBookCar={handleBookCar} 
            onOpenConsultDetails={handleRouteBooking} 
          />
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
          <FleetTab 
            onBookCar={handleBookCar} 
            onOpenConsultDetails={handleRouteBooking} 
          />
        );
    }
  };

  return (
    <div className="min-h-screen bg-[#f9f9fb] flex flex-col justify-between selection:bg-[#ffdea3] selection:text-[#654800]">
      
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
        rel="noreferrer"
        className="fixed bottom-8 right-8 bg-[#25D366] text-white p-4.5 rounded-full shadow-2xl hover:scale-110 active:scale-95 transition-transform z-50 flex items-center justify-center cursor-pointer group"
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
