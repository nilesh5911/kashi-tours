import React from "react";
import { ArrowRight, Info } from "lucide-react";
import { calculateVehicleFare, CARS, EXCURSIONS } from "../data";
import VedicPujaSection from "./VedicPujaSection";

interface ToursTabProps {
  onPlanTrip: (pickup: string, drop: string) => void;
}

export default function ToursTab({ onPlanTrip }: ToursTabProps) {
  const defaultCar = CARS.find((car) => car.id === "innova") ?? CARS[0];

  const getStartingPrice = (distanceKm: number) =>
    calculateVehicleFare(defaultCar, distanceKm)?.totalFare ?? defaultCar.baseFare;

  return (
    <div className="space-y-12">

      {/* Divine Horizons Hero Banner Segment */}
      <section className="relative z-0 min-h-[420px] sm:min-h-[480px] md:h-[55vh] flex flex-col justify-center items-center pt-24 sm:pt-28 pb-12 sm:pb-16 text-center text-white bg-[#09090b]">
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <img
            src="https://images.pexels.com/photos/35729427/pexels-photo-35729427.jpeg"
            alt="Evening Ghat glowing ceremonies in Varanasi"
            className="w-full h-full object-cover opacity-100"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/65 via-black/35 to-[#09090b]/95"></div>
        </div>

        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 space-y-4 sm:space-y-6 z-10">
          <div className="inline-flex items-center gap-3 sm:gap-4 mb-1 sm:mb-2">
            <span className="w-6 sm:w-8 h-px bg-[#e5c299]/70"></span>
            <span className="text-[9px] sm:text-[10px] font-sans font-bold uppercase tracking-[0.24em] sm:tracking-[0.4em] text-[#e5c299]">Sacred Roadtrips &amp; Journeys</span>
            <span className="w-6 sm:w-8 h-px bg-[#e5c299]/70"></span>
          </div>
          <h1 className="font-display text-[clamp(2.2rem,5.5vw,4.5rem)] font-bold tracking-tight leading-tight sm:leading-none drop-shadow-xl text-white">
            Divine Horizons Await
          </h1>
          <p className="font-sans text-xs sm:text-sm md:text-base text-gray-300 max-w-2xl mx-auto leading-relaxed sm:leading-loose tracking-wide font-light px-2">
            Experience the exquisite spiritual soul of India with KASI TOURS's exclusive luxury outstation packages. Travel with supreme peace of mind.
          </p>

          <div className="pt-4 sm:pt-8 flex flex-col sm:flex-row gap-3 sm:gap-5 justify-center items-center w-full max-w-sm sm:max-w-none mx-auto">
            <button
              onClick={() => onPlanTrip("Chetganj, Kasi Tours HQ", "Ayodhya (Divine Ram Janmabhoomi)")}
              className="w-full sm:w-auto bg-[#c5a880] text-[#17130d] font-sans font-bold text-[11px] uppercase tracking-widest px-8 sm:px-10 py-3.5 sm:py-4 rounded-full shadow-[0_10px_20px_rgba(197,168,128,0.18)] hover:bg-[#d8bd96] hover:shadow-[0_15px_30px_rgba(197,168,128,0.25)] transition-all duration-300 transform hover:-translate-y-0.5 active:scale-[0.98] cursor-pointer"
            >
              Explore Ayodhya Route
            </button>
            <button
              onClick={() => onPlanTrip("Chetganj, Kasi Tours HQ", "Prayagraj (Triveni Sangam)")}
              className="w-full sm:w-auto border border-white/30 bg-white/5 hover:bg-white/10 hover:border-white text-white font-sans font-bold text-[11px] uppercase tracking-widest px-8 sm:px-10 py-3.5 sm:py-4 rounded-full transition-all duration-300 active:scale-[0.98] cursor-pointer"
            >
              Plan Prayagraj Trip
            </button>
          </div>
        </div>
      </section>

      {/* Excursions from Kasi Section matching Screen 4 */}
      <section className="max-w-[1280px] mx-auto px-4 sm:px-6 md:px-12">
        <div className="mb-6 sm:mb-8 text-center space-y-2.5 sm:space-y-3">
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-[#f4eee4]">Excursions from Kashi</h2>
          <p className="text-[#c7c1b8] text-xs sm:text-sm tracking-wide">Innova Crysta fare includes 120 km; extra distance is ₹15/km.</p>
          <div className="h-0.5 w-20 sm:w-24 bg-gradient-to-r from-transparent via-[#e5c299] to-transparent mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {EXCURSIONS.map((ex) => (
            <article key={ex.id} className="glass-panel rounded-2xl border border-[#c5a880]/25 p-5 sm:p-6 flex flex-col min-h-[240px]">
              <div className="flex-1">
                <h3 className="font-display text-xl sm:text-2xl font-bold text-[#f4eee4]">{ex.destination}</h3>
                <p className="text-xs sm:text-sm text-[#c7c1b8] leading-relaxed mt-2.5 sm:mt-3">{ex.description}</p>
              </div>
              <div className="flex items-end justify-between gap-4 py-4 sm:py-5 mt-4 border-t border-[#353238]">
                <div>
                  <p className="text-[10px] uppercase tracking-widest text-[#9d9790]">Duration</p>
                  <p className="text-xs sm:text-sm font-semibold text-[#f4eee4] mt-1">Approx. {Number.isInteger(ex.durationHrs) ? ex.durationHrs : ex.durationHrs.toFixed(1)} hrs</p>
                </div>
                <p className="text-right text-xs sm:text-sm font-semibold text-[#f4eee4]">From ₹{getStartingPrice(ex.distanceKm).toLocaleString("en-IN")} <span className="block text-[10px] font-normal text-[#9d9790]">one-way</span></p>
              </div>
              <button
                onClick={() => onPlanTrip("Chetganj, Kasi Tours HQ", ex.destination)}
                className="w-full min-h-[44px] bg-[#c5a880] text-[#17130d] hover:bg-[#d8bd96] font-sans font-bold text-[10px] uppercase tracking-[0.2em] py-3.5 px-4 rounded-full transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer focus-visible:ring-2 focus-visible:ring-[#c5a880] focus-visible:outline-none active:scale-[0.98]"
              >
                Plan trip <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </article>
          ))}
        </div>

        <div className="mt-6 sm:mt-8 flex items-start sm:items-center justify-center gap-2 rounded-xl border border-[#c5a880]/20 bg-[#121215]/80 p-3.5 sm:px-4 sm:py-3 text-left sm:text-center text-xs text-[#c7c1b8] max-w-2xl mx-auto">
          <Info className="w-4 h-4 text-[#c5a880] shrink-0 mt-0.5 sm:mt-0" />
          <span>Toll charges and parking fees are not included in the quoted price and must be paid separately by the customer.</span>
        </div>
      </section>

      {/* Signature Kashi Experiences Section matching Bento-Grid */}
      <section className="bg-[#09090b] py-12 sm:py-16 text-[#f4eee4] px-4 sm:px-6 md:px-12 relative overflow-hidden">
        <div className="absolute inset-0 bg-[#c5a880]/5 opacity-50 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#c5a880]/10 via-transparent to-transparent"></div>
        <div className="max-w-[1280px] mx-auto space-y-8 sm:space-y-10 relative z-10">

          <div className="text-center space-y-3 sm:space-y-4">
            <span className="text-[#e5c299] font-sans text-[10px] font-bold uppercase tracking-[0.2em]">Curated Packages</span>
            <h2 className="font-display text-2xl sm:text-4xl md:text-5xl font-bold">Signature Kashi Experiences</h2>
            <div className="h-0.5 w-20 sm:w-24 bg-gradient-to-r from-transparent via-[#e5c299] to-transparent mx-auto"></div>
          </div>

          {/* Bento Style Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">

            {/* Left Box (Tall) */}
            <div className="relative min-h-[300px] sm:min-h-[360px] rounded-2xl sm:rounded-3xl overflow-hidden group">
              <img
                src="https://images.unsplash.com/photo-1768844370016-044dd73c1a7a?auto=format&fit=crop&fm=jpg&q=85&w=1200"
                alt="Historic Varanasi ghats and boats along the Ganges"
                className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent"></div>
              <div className="absolute bottom-5 left-5 right-5 sm:bottom-6 sm:left-6 sm:right-6 space-y-2 sm:space-y-3">
                <h3 className="font-display text-xl sm:text-2xl font-bold tracking-tight">Kashi Darshan</h3>
                <p className="text-xs text-gray-300 leading-relaxed">Full temple circuits, early morning boat ritual, and local culinary expeditions perfectly organized.</p>
                <button
                  onClick={() => onPlanTrip("Chetganj, Kasi Tours HQ", "Kashi Vishwanath Temple Gateway")}
                  className="font-sans text-xs font-bold text-[#f4b400] uppercase tracking-wider flex items-center gap-1 hover:underline cursor-pointer pt-1"
                >
                  Plan This Tour <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Distinct city experience: evening Aarti */}
            <div className="relative min-h-[300px] sm:min-h-[360px] rounded-2xl sm:rounded-3xl overflow-hidden group flex items-end">
              <img
                src="https://custom-images.strikinglycdn.com/res/hrscywv4p/image/upload/c_limit%2Cfl_lossy%2Ch_9000%2Cw_1200%2Cf_auto%2Cq_auto/1698277/263346_731207.jpeg"
                alt="Evening Ganga Aarti ceremony"
                className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent"></div>
              <div className="relative z-10 p-5 sm:p-6">
                <h4 className="font-display text-lg sm:text-xl font-bold">Evening Ganga Aarti Seats</h4>
                <p className="text-xs text-gray-300 max-w-sm mt-1">Pre-reserved prime ghat balcony seating tickets for the spectacular oil lamp light ritual.</p>
                <button
                  onClick={() => onPlanTrip("Chetganj, Kasi Tours HQ", "Dashashwamedh Ghat Ganga Aarti")}
                  className="mt-3 sm:mt-4 text-xs font-bold text-[#e5c299] uppercase tracking-wider flex items-center gap-1 hover:underline cursor-pointer"
                >
                  Plan Aarti Visit <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* Vedic Puja & Pandit Seva Section via VedicSeva */}
      <VedicPujaSection />
    </div>
  );
}
