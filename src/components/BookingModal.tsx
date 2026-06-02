import React, { useState } from "react";
import { X, Calendar, MapPin, CheckCircle, Car as CarIcon, AlertCircle, Sparkles, MessageCircleCode } from "lucide-react";
import { CARS } from "../data";
import { Car } from "../types";

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedCarId?: string;
  initialPickup?: string;
  initialDrop?: string;
}

const POPULAR_LOCATIONS = [
  "Lal Bahadur Shastri Airport (VNS)",
  "Varanasi Cantt Railway Station",
  "Dashashwamedh Ghat",
  "Assi Ghat",
  "Chetganj, Kasi Tour HQ",
  "Sarnath Spiritual Complex",
  "Kashi Vishwanath Temple Gateway",
  "Ayodhya (Divine Ram Janmabhoomi)",
  "Prayagraj (Triveni Sangam)",
  "Bodh Gaya (Mahabodhi Temple)"
];

// Simple approximate distances between locations in km (for real calculations!)
const getDistance = (from: string, to: string): number => {
  if (!from || !to || from === to) return 10;
  if (to.includes("Ayodhya") || from.includes("Ayodhya")) return 220;
  if (to.includes("Prayagraj") || from.includes("Prayagraj")) return 120;
  if (to.includes("Bodh Gaya") || from.includes("Bodh Gaya")) return 250;
  if (to.includes("Airport") || from.includes("Airport")) return 24;
  return 15; // default local city travel
};

export default function BookingModal({
  isOpen,
  onClose,
  selectedCarId = "innova",
  initialPickup = "",
  initialDrop = ""
}: BookingModalProps) {
  const [pickup, setPickup] = useState(initialPickup || "Varanasi Cantt Railway Station");
  const [drop, setDrop] = useState(initialDrop || "Lal Bahadur Shastri Airport (VNS)");
  const [tripType, setTripType] = useState("One Way");
  const [dateTime, setDateTime] = useState("2026-06-02T10:00");
  const [carId, setCarId] = useState(selectedCarId);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [stage, setStage] = useState<"form" | "confirm">("form");
  const [errors, setErrors] = useState<Record<string, string>>({});

  if (!isOpen) return null;

  const currentCar = CARS.find((c) => c.id === carId) || CARS[1];
  const distance = getDistance(pickup, drop);
  const rate = currentCar.ratePerKm;
  const rawFare = distance * rate * (tripType === "Round Trip" ? 1.8 : 1.0);
  const driverCharge = 300; 
  const luxuryTax = Math.round(rawFare * 0.05); 
  const totalFare = Math.round(rawFare + driverCharge + luxuryTax);

  const handleValidateAndCalculate = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: Record<string, string> = {};
    if (!name.trim()) newErrors.name = "Please provide your name";
    if (!phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (phone.length < 8) {
      newErrors.phone = "Provide a valid contact number";
    }
    if (!pickup) newErrors.pickup = "Pickup location is required";
    if (!drop) newErrors.drop = "Destination is required";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors({});
    setStage("confirm");
  };

  const handleCreateWhatsAppLink = () => {
    const text = `Hello Kasi Tour! I would like to book a luxury travel ride:\n` +
      `- *Guest Name:* ${name}\n` +
      `- *Contact Phone:* ${phone}\n` +
      `- *Vehicle Type:* ${currentCar.name} (${currentCar.type})\n` +
      `- *Route:* ${pickup} → ${drop}\n` +
      `- *Trip Class:* ${tripType}\n` +
      `- *Timing:* ${new Date(dateTime).toLocaleString()}\n` +
      `- *Estimated Luxury Quote:* ₹${totalFare} (incl. driver allowance)\n` +
      `- *Instructions:* ${message || "None"}\n` +
      `Please confirm availability. Thank you!`;
    return `https://wa.me/918577900710?text=${encodeURIComponent(text)}`;
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#0a0a0a]/80 backdrop-blur-md transition-opacity">
      <div 
        className="relative bg-[#0d0d0f] w-full max-w-2xl rounded-3xl luxury-shadow overflow-hidden border border-[#c5a880]/30 transition-transform scale-100"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between items-center bg-gradient-to-r from-[#141416] to-[#1c1d21] text-white px-6 py-5 border-b border-[#c5a880]/20">
          <div className="flex items-center gap-3">
            <Sparkles className="w-5 h-5 text-[#c5a880]" />
            <div>
              <h3 className="font-display text-lg font-semibold tracking-wide">
                {stage === "form" ? "Luxury Handcrafted Booking" : "Your Spiritual Journey Summary"}
              </h3>
              <p className="text-[10px] text-[#8c7355] font-sans uppercase tracking-[0.2em] mt-0.5">KASI TOUR Concierge</p>
            </div>
          </div>
          <button 
            onClick={onClose}
            className="p-1.5 hover:bg-white/10 rounded-full transition-colors cursor-pointer text-[#8c7355] hover:text-[#c5a880]"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {stage === "form" ? (
          <form onSubmit={handleValidateAndCalculate} className="p-6 md:p-8 space-y-6 overflow-y-auto max-h-[78vh] custom-scrollbar text-white relative">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-[#c5a880]/5 via-transparent to-transparent pointer-events-none"></div>
            
            {/* Passenger Info */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative z-10">
              <div>
                <label className="block text-[10px] font-bold font-sans uppercase tracking-widest text-gray-400 mb-2">
                  Name <span className="text-[#c5a880]">*</span>
                </label>
                <input 
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Gautam Mishra"
                  className={`w-full bg-transparent border-b ${errors.name ? "border-red-500" : "border-[#c5a880]/30 focus:border-[#c5a880]"} px-2 py-2 text-white outline-none text-sm transition-all placeholder:text-gray-600`}
                />
                {errors.name && <p className="text-[10px] text-red-500 mt-1.5">{errors.name}</p>}
              </div>

              <div>
                <label className="block text-[10px] font-bold font-sans uppercase tracking-widest text-gray-400 mb-2">
                  Phone Number <span className="text-[#c5a880]">*</span>
                </label>
                <input 
                  type="text"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="+91 85779 00710"
                  className={`w-full bg-transparent border-b ${errors.phone ? "border-red-500" : "border-[#c5a880]/30 focus:border-[#c5a880]"} px-2 py-2 text-white outline-none text-sm transition-all placeholder:text-gray-600`}
                />
                {errors.phone && <p className="text-[10px] text-red-500 mt-1.5">{errors.phone}</p>}
              </div>
            </div>

            {/* Travel Route Info */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative z-10">
              <div>
                <label className="block text-[10px] font-bold font-sans uppercase tracking-widest text-gray-400 mb-2">
                  Pickup Location
                </label>
                <select
                  value={pickup}
                  onChange={(e) => setPickup(e.target.value)}
                  className="w-full bg-transparent border-b border-[#c5a880]/30 focus:border-[#c5a880] px-2 py-2 text-white outline-none text-sm cursor-pointer [&>option]:bg-[#141416]"
                >
                  {POPULAR_LOCATIONS.map((loc) => (
                    <option key={loc} value={loc}>{loc}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-[10px] font-bold font-sans uppercase tracking-widest text-gray-400 mb-2">
                  Drop Destination
                </label>
                <select
                  value={drop}
                  onChange={(e) => setDrop(e.target.value)}
                  className="w-full bg-transparent border-b border-[#c5a880]/30 focus:border-[#c5a880] px-2 py-2 text-white outline-none text-sm cursor-pointer [&>option]:bg-[#141416]"
                >
                  {POPULAR_LOCATIONS.map((loc) => (
                    <option key={loc} value={loc}>{loc}</option>
                  ))}
                </select>
              </div>
            </div>

            {/* Timings and type */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative z-10">
              <div>
                <label className="block text-[10px] font-bold font-sans uppercase tracking-widest text-gray-400 mb-2">
                  Trip Type
                </label>
                <div className="flex gap-3">
                  {["One Way", "Round Trip"].map((type) => (
                    <button
                      key={type}
                      type="button"
                      onClick={() => setTripType(type)}
                      className={`flex-1 py-2.5 text-[10px] font-bold uppercase tracking-widest rounded-xl border ${
                        tripType === type 
                          ? "bg-gradient-to-r from-[#c5a880] to-[#8c7355] text-white border-transparent" 
                          : "bg-white/5 text-gray-300 border-[#c5a880]/30 hover:border-[#c5a880]/60"
                      } transition-all`}
                    >
                      {type}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-[10px] font-bold font-sans uppercase tracking-widest text-gray-400 mb-2">
                  Date & Hour
                </label>
                <input 
                  type="datetime-local"
                  value={dateTime}
                  onChange={(e) => setDateTime(e.target.value)}
                  className="w-full bg-transparent border-b border-[#c5a880]/30 focus:border-[#c5a880] px-2 py-2 text-white outline-none text-sm transition-all [color-scheme:dark]"
                />
              </div>
            </div>

            {/* Select Car Fleet option */}
            <div className="relative z-10">
              <label className="block text-[10px] font-bold font-sans uppercase tracking-widest text-gray-400 mb-3">
                Customize Your Fleet Class
              </label>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {CARS.map((car) => (
                  <button
                    key={car.id}
                    type="button"
                    onClick={() => setCarId(car.id)}
                    className={`relative p-4 rounded-2xl border text-left flex flex-col justify-between transition-all duration-300 ${
                      carId === car.id 
                        ? "border-[#c5a880] bg-[#c5a880]/10 ring-1 ring-[#c5a880]" 
                        : "border-[#c5a880]/20 bg-[#1c1d21] hover:border-[#c5a880]/50"
                    }`}
                  >
                    {car.popular && (
                      <span className="absolute -top-2 right-4 bg-gradient-to-r from-[#c5a880] to-[#8c7355] text-white px-2 py-0.5 rounded-full text-[8px] font-bold uppercase tracking-widest">
                        Popular
                      </span>
                    )}
                    <span className="font-display font-bold text-sm text-white">{car.name}</span>
                    <span className="text-[10px] text-gray-400 mt-1 uppercase tracking-widest">{car.type}</span>
                    <div className="flex justify-between items-center mt-4 pt-3 border-t border-[#c5a880]/20">
                      <span className="text-[10px] text-[#8c7355] font-semibold">{car.capacity} Seats</span>
                      <span className="text-xs font-bold text-[#c5a880]">₹{car.ratePerKm}/km</span>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Custom Notes */}
            <div className="relative z-10">
              <label className="block text-[10px] font-bold font-sans uppercase tracking-widest text-gray-400 mb-2">
                Pilgimage Travel Notes (Optional)
              </label>
              <textarea 
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Tell us about your custom requirements, e.g., senior citizen support, specific Varanasi ghat stoppages, custom garland requests..."
                rows={3}
                className="w-full bg-transparent border-b border-[#c5a880]/30 focus:border-[#c5a880] px-2 py-2 text-white outline-none text-sm transition-all resize-none placeholder:text-gray-600"
              />
            </div>

            {/* Price Preview Frame */}
            <div className="bg-[#141416] border border-[#c5a880]/20 p-5 rounded-2xl flex items-center justify-between text-sm relative z-10 luxury-shadow">
              <div>
                <p className="text-[10px] uppercase tracking-widest text-[#8c7355] mb-1">Simulated Distance Estimate</p>
                <p className="font-semibold text-white">{distance} km route duration</p>
              </div>
              <div className="text-right">
                <p className="text-[10px] uppercase tracking-widest text-[#8c7355] mb-1">Starting Quote</p>
                <p className="font-display font-bold text-xl text-[#c5a880]">₹{totalFare}</p>
              </div>
            </div>

            {/* Submitting Buttons */}
            <div className="pt-4 flex gap-4 relative z-10">
              <button
                type="button"
                onClick={onClose}
                className="w-1/3 border border-[#c5a880]/30 hover:border-[#c5a880] hover:bg-white/5 py-3.5 rounded-full text-[10px] font-bold uppercase tracking-[0.2em] text-gray-300 transition-colors"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="w-2/3 bg-gradient-to-r from-[#c5a880] to-[#8c7355] hover:opacity-90 text-white py-3.5 rounded-full text-[10px] font-bold uppercase tracking-[0.2em] transition-all shadow-[0_5px_15px_rgba(197,168,128,0.2)] flex items-center justify-center gap-2"
              >
                Estimate & Book Now →
              </button>
            </div>
          </form>
        ) : (
          <div className="p-6 md:p-8 space-y-6 text-center overflow-y-auto max-h-[78vh] custom-scrollbar">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-emerald-50 text-emerald-600 mb-2">
              <CheckCircle className="w-10 h-10" />
            </div>
            
            <div>
              <h4 className="font-display text-2xl font-bold text-[#1a1c1d]">Your Journey is Arranged!</h4>
              <p className="text-sm text-gray-500 mt-1">We have locked in your premium booking details and generated your ticket request.</p>
            </div>

            {/* Ticket representation */}
            <div className="bg-[#f9f9fb] rounded-xl border border-[#d4c4ac]/40 overflow-hidden text-left max-w-md mx-auto luxury-shadow">
              <div className="bg-[#7a5900] text-white px-4 py-3 flex justify-between items-center text-xs uppercase tracking-widest font-semibold">
                <span>KASI TOUR VOUCHER</span>
                <span className="font-mono text-[10px]">#KT-2026-{(Math.random()*10000).toFixed(0)}</span>
              </div>
              <div className="p-4 space-y-3 text-xs">
                <div className="flex justify-between pb-2 border-b border-gray-100">
                  <span className="text-gray-500">GUEST PREFERENCE</span>
                  <span className="font-semibold text-gray-800">{name}</span>
                </div>
                <div className="flex justify-between pb-2 border-b border-gray-100">
                  <span className="text-gray-500">CONTACT</span>
                  <span className="font-semibold text-gray-800">{phone}</span>
                </div>
                <div className="flex justify-between pb-2 border-b border-gray-100">
                  <span className="text-gray-500">FLEET CLASS SELECTION</span>
                  <span className="font-semibold text-[#7a5900]">{currentCar.name}</span>
                </div>
                <div className="pb-2 border-b border-gray-100">
                  <span className="text-gray-500 block mb-1">ROUTE</span>
                  <span className="font-semibold text-gray-800 block text-normal">{pickup}</span>
                  <span className="text-gray-400 block text-[10px] my-0.5">pointing down to</span>
                  <span className="font-semibold text-gray-800 block text-normal">{drop}</span>
                </div>
                <div className="flex justify-between pb-2 border-b border-gray-100">
                  <span className="text-gray-500">JOURNEY TIMING</span>
                  <span className="font-semibold text-gray-800">{new Date(dateTime).toLocaleString()}</span>
                </div>
                <div className="flex justify-between pb-2 border-b border-gray-100">
                  <span className="text-gray-500">TRIP CLASSIFICATION</span>
                  <span className="font-semibold text-gray-800">{tripType}</span>
                </div>
                <div className="bg-[#ffdea3]/25 p-3 rounded-lg space-y-1.5 text-[11px]">
                  <div className="flex justify-between">
                    <span>Base Luxury Fare ({distance} km)</span>
                    <span className="font-mono">₹{rawFare}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Professional Chauffeur Allowance</span>
                    <span className="font-mono">₹{driverCharge}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Luxury Toll & Service Tax (5%)</span>
                    <span className="font-mono">₹{luxuryTax}</span>
                  </div>
                  <div className="flex justify-between border-t border-[#f4b400]/40 pt-2 font-bold text-sm text-[#7a5900]">
                    <span>Total Inclusive Quote</span>
                    <span className="font-mono">₹{totalFare}</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-4 bg-amber-50 text-amber-900 border border-amber-200/50 rounded-xl space-y-2 text-xs text-left max-w-md mx-auto">
              <div className="flex gap-2 items-center">
                <AlertCircle className="w-4 h-4 text-amber-700 inline shrink-0" />
                <span className="font-semibold">Next Concierge Verification Step:</span>
              </div>
              <p>Because spiritual journeys in Kashi are tailored personally, we verify each request manually. Click below to instantly launch WhatsApp with your pre-packaged voucher details.</p>
            </div>

            <div className="flex gap-3 justify-center max-w-md mx-auto">
              <button
                type="button"
                onClick={() => setStage("form")}
                className="px-5 py-3 border border-gray-300 rounded-full text-xs font-bold uppercase transition hover:bg-gray-100 cursor-pointer"
              >
                Edit Details
              </button>
              
              <a
                href={handleCreateWhatsAppLink()}
                target="_blank"
                rel="noreferrer"
                className="flex-1 bg-[#25D366] text-white py-3 px-5 rounded-full text-xs font-bold uppercase tracking-wider hover:brightness-105 transition shadow-lg flex items-center justify-center gap-2 cursor-pointer"
              >
                <MessageCircleCode className="w-4 h-4" /> WhatsApp Booking Confirm
              </a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
