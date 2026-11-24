import React, { useEffect, useState } from "react";
import { X, CheckCircle, AlertCircle, Sparkles, MessageCircle } from "lucide-react";
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
  "Chetganj, Kasi Tours HQ",
  "Sarnath Spiritual Complex",
  "Kashi Vishwanath Temple Gateway",
  "Ayodhya (Divine Ram Janmabhoomi)",
  "Prayagraj (Triveni Sangam)",
  "Bodh Gaya (Mahabodhi Temple)"
];

const getDefaultDateTime = () => {
  const nextHour = new Date();
  nextHour.setMinutes(0, 0, 0);
  nextHour.setHours(nextHour.getHours() + 1);
  return new Date(nextHour.getTime() - nextHour.getTimezoneOffset() * 60000)
    .toISOString()
    .slice(0, 16);
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
  const [dateTime, setDateTime] = useState(getDefaultDateTime);
  const [carId, setCarId] = useState(selectedCarId);
  const [passengers, setPassengers] = useState(1);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [stage, setStage] = useState<"form" | "confirm">("form");
  const [errors, setErrors] = useState<Record<string, string>>({});

  useEffect(() => {
    if (!isOpen) return;

    const nextPickup = initialPickup || "Varanasi Cantt Railway Station";
    const nextDrop = initialDrop || "Lal Bahadur Shastri Airport (VNS)";
    setPickup(nextPickup);
    setDrop(nextDrop);
    setTripType("One Way");
    setDateTime(getDefaultDateTime());
    setCarId(selectedCarId);
    setPassengers(1);
    setName("");
    setPhone("");
    setMessage("");
    setStage("form");
    setErrors({});
  }, [isOpen, initialPickup, initialDrop, selectedCarId]);

  if (!isOpen) return null;

  const currentCar = CARS.find((c) => c.id === carId) || CARS[1];
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
    if (!Number.isInteger(passengers) || passengers < 1 || passengers > currentCar.maxPassengers) {
      newErrors.passengers = `Enter 1 to ${currentCar.maxPassengers} passengers for this vehicle`;
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors({});
    setStage("confirm");
  };

  const handleCreateWhatsAppLink = () => {
    const text = `Hello Kasi Tours! I would like to book a luxury travel ride:\n` +
      `- *Guest Name:* ${name}\n` +
      `- *Contact Phone:* ${phone}\n` +
      `- *Vehicle Type:* ${currentCar.name} (${currentCar.type})\n` +
      `- *Route:* ${pickup} → ${drop}\n` +
      `- *Trip Class:* ${tripType}\n` +
      `- *Passengers:* ${passengers}\n` +
      `- *Timing:* ${new Date(dateTime).toLocaleString()}\n` +
      `- *Pricing:* ${currentCar.quoteOnly ? "Customized quote requested" : "Please confirm the current fare with the concierge"}\n` +
      `- *Instructions:* ${message || "None"}\n` +
      `Please confirm availability. Thank you!`;
    return `https://wa.me/918577900710?text=${encodeURIComponent(text)}`;
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-black/80 backdrop-blur-sm transition-opacity">
      <div
        className="relative booking-modal bg-[#121215] w-full max-w-2xl h-[calc(100dvh-2rem)] max-h-[900px] flex flex-col rounded-2xl sm:rounded-3xl luxury-shadow overflow-hidden border border-[#c5a880]/30"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="shrink-0 flex justify-between items-center bg-[#09090b] text-[#f4eee4] px-5 sm:px-6 py-3 sm:py-4 border-b border-[#c5a880]/20">
          <div className="flex items-center gap-3">
            <Sparkles className="w-5 h-5 text-[#f4eee4]" />
            <div>
              <h3 className="font-display text-lg font-semibold tracking-wide">
                {stage === "form" ? "Book Your Ride" : "Your Spiritual Journey Summary"}
              </h3>
              <p className="text-[10px] text-[#f4eee4] font-sans uppercase tracking-[0.2em] mt-0.5">KASI TOURS Concierge</p>
            </div>
          </div>
          <button
            onClick={onClose}
            aria-label="Close booking modal"
            className="min-w-[44px] min-h-[44px] flex items-center justify-center hover:bg-white/10 rounded-full transition-colors cursor-pointer text-[#f4eee4] hover:text-[#f4eee4] focus-visible:ring-2 focus-visible:ring-[#c5a880] focus-visible:outline-none"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {stage === "form" ? (
          <form onSubmit={handleValidateAndCalculate} className="relative flex flex-1 min-h-0 flex-col overflow-hidden text-[#f4eee4]">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-[#c5a880]/[0.025] via-transparent to-transparent pointer-events-none"></div>
            <div className="relative z-10 flex-1 min-h-0 overflow-y-auto p-5 sm:p-6 space-y-5 custom-scrollbar">

            {/* Passenger Info */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 relative z-10">
              <div>
                <label className="block text-[11px] font-bold font-sans uppercase tracking-wider text-[#c7c1b8] mb-2">
                  Name <span className="text-[#f4eee4]">*</span>
                </label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Gautam Mishra"
                  className={`w-full min-h-11 bg-transparent border-b ${errors.name ? "border-red-500" : "border-[#c5a880]/30 focus:border-[#c5a880]"} px-2 py-2 text-[#f4eee4] outline-none text-sm transition-all placeholder:text-[#9d9790]`}
                />
                {errors.name && <p className="text-[10px] text-red-500 mt-1.5">{errors.name}</p>}
              </div>

              <div>
                <label className="block text-[11px] font-bold font-sans uppercase tracking-wider text-[#c7c1b8] mb-2">
                  Phone Number <span className="text-[#f4eee4]">*</span>
                </label>
                <input
                  type="text"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="+91 85779 00710"
                  className={`w-full min-h-11 bg-transparent border-b ${errors.phone ? "border-red-500" : "border-[#c5a880]/30 focus:border-[#c5a880]"} px-2 py-2 text-[#f4eee4] outline-none text-sm transition-all placeholder:text-[#9d9790]`}
                />
                {errors.phone && <p className="text-[10px] text-red-500 mt-1.5">{errors.phone}</p>}
              </div>
            </div>

            {/* Travel Route Info */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 relative z-10">
              <div>
                <label className="block text-[11px] font-bold font-sans uppercase tracking-wider text-[#c7c1b8] mb-2">
                  Pickup Location
                </label>
                <select
                  value={pickup}
                  onChange={(e) => {
                    const nextPickup = e.target.value;
                    setPickup(nextPickup);
                  }}
                  className="w-full min-h-11 bg-transparent border-b border-[#c5a880]/30 focus:border-[#c5a880] px-2 py-2 text-[#f4eee4] outline-none text-sm cursor-pointer [&>option]:bg-[#121215]"
                >
                  {POPULAR_LOCATIONS.map((loc) => (
                    <option key={loc} value={loc}>{loc}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-[11px] font-bold font-sans uppercase tracking-wider text-[#c7c1b8] mb-2">
                  Drop Destination
                </label>
                <select
                  value={drop}
                  onChange={(e) => {
                    const nextDrop = e.target.value;
                    setDrop(nextDrop);
                  }}
                  className="w-full min-h-11 bg-transparent border-b border-[#c5a880]/30 focus:border-[#c5a880] px-2 py-2 text-[#f4eee4] outline-none text-sm cursor-pointer [&>option]:bg-[#121215]"
                >
                  {POPULAR_LOCATIONS.map((loc) => (
                    <option key={loc} value={loc}>{loc}</option>
                  ))}
                </select>
              </div>
            </div>

            <div className="relative z-10 max-w-sm">
              <div>
                <label htmlFor="passenger-count" className="block text-[11px] font-bold font-sans uppercase tracking-wider text-[#c7c1b8] mb-2">
                  Passengers (max {currentCar.maxPassengers})
                </label>
                <select
                  id="passenger-count"
                  value={passengers}
                  onChange={(e) => setPassengers(Number(e.target.value))}
                  aria-invalid={Boolean(errors.passengers)}
                  className="w-full min-h-11 bg-transparent border-b border-[#c5a880]/30 focus:border-[#c5a880] px-2 py-2 text-[#f4eee4] outline-none text-sm cursor-pointer [&>option]:bg-[#121215]"
                >
                  {Array.from({ length: currentCar.maxPassengers }, (_, index) => index + 1).map((count) => (
                    <option key={count} value={count}>{count} {count === 1 ? "passenger" : "passengers"}</option>
                  ))}
                </select>
                {errors.passengers && <p className="text-[10px] text-red-500 mt-1.5">{errors.passengers}</p>}
              </div>
            </div>

            {/* Timings and type */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 relative z-10">
              <div>
                <label className="block text-[11px] font-bold font-sans uppercase tracking-wider text-[#c7c1b8] mb-2">
                  Trip Type
                </label>
                <div className="flex gap-2.5">
                  {["One Way", "Round Trip"].map((type) => (
                    <button
                      key={type}
                      type="button"
                      onClick={() => setTripType(type)}
                      className={`flex-1 min-h-11 px-3 py-2.5 text-[10px] font-bold uppercase tracking-wider rounded-xl border ${tripType === type
                          ? "bg-[#c5a880] text-white border-transparent"
                          : "bg-[#09090b] text-[#c7c1b8] border-[#c5a880]/30 hover:border-[#c5a880]/60"
                        } transition-all`}
                    >
                      {type}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-[11px] font-bold font-sans uppercase tracking-wider text-[#c7c1b8] mb-2">
                  Date & Hour
                </label>
                <input
                  type="datetime-local"
                  value={dateTime}
                  onChange={(e) => setDateTime(e.target.value)}
                  className="w-full min-h-11 bg-transparent border-b border-[#c5a880]/30 focus:border-[#c5a880] px-2 py-2 text-[#f4eee4] outline-none text-sm transition-all [color-scheme:dark]"
                />
              </div>
            </div>

            {/* Select Car Fleet option */}
            <div className="relative z-10">
              <label className="block text-[11px] font-bold font-sans uppercase tracking-wider text-[#c7c1b8] mb-3">
                Customize Your Fleet Class
              </label>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                {CARS.map((car) => (
                  <button
                    key={car.id}
                    type="button"
                    onClick={() => {
                      setCarId(car.id);
                      setPassengers((count) => Math.min(count, car.maxPassengers));
                      setErrors((current) => ({ ...current, passengers: "" }));
                    }}
                    className={`relative min-h-[132px] p-3.5 rounded-xl border text-left flex flex-col justify-between transition-colors ${carId === car.id
                        ? "border-[#c5a880] bg-[#c5a880]/10"
                        : "border-[#353238] bg-[#1b1b1f] hover:border-[#c5a880]/50"
                      }`}
                  >
                    <div className="flex items-start justify-between gap-2">
                      <span className="font-display font-bold text-sm text-[#f4eee4]">{car.name}</span>
                      {car.popular && <span className="shrink-0 bg-[#c5a880]/20 text-[#f4eee4] px-2 py-1 rounded-full text-[8px] font-bold uppercase tracking-wide">Popular</span>}
                    </div>
                    <span className="text-[11px] leading-4 text-[#c7c1b8] mt-2 uppercase tracking-wide">{car.type}</span>
                    <div className="flex justify-between items-center mt-3 pt-3 border-t border-[#353238]">
                      <span className="text-[11px] text-[#c7c1b8] font-medium">{car.capacity} Seats</span>
                      <span className="text-right text-[10px] font-semibold leading-4 text-[#c7c1b8]">Up to {car.maxPassengers} passengers</span>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Custom Notes */}
            <div className="relative z-10">
              <label className="block text-[11px] font-bold font-sans uppercase tracking-wider text-[#c7c1b8] mb-2">
                Pilgimage Travel Notes (Optional)
              </label>
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Tell us about your custom requirements, e.g., senior citizen support, specific Varanasi ghat stoppages, custom garland requests..."
                rows={3}
                className="w-full bg-transparent border-b border-[#c5a880]/30 focus:border-[#c5a880] px-2 py-3 text-[#f4eee4] outline-none text-sm leading-relaxed transition-all resize-none placeholder:text-[#9d9790]"
              />
            </div>

            </div>

            {/* Actions remain visible while the booking details scroll. */}
            <div className="shrink-0 flex flex-col-reverse sm:flex-row gap-2.5 sm:gap-3 p-4 sm:px-6 border-t border-[#353238] bg-[#121215]">
              <button
                type="button"
                onClick={onClose}
                className="w-full sm:w-1/3 min-h-12 border border-[#c5a880]/30 hover:border-[#c5a880] hover:bg-[#09090b] px-3 rounded-full text-[11px] font-bold uppercase tracking-wider text-[#c7c1b8] transition-colors"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="w-full sm:w-2/3 min-h-12 bg-[#c5a880] hover:opacity-90 text-white px-3 rounded-full text-[11px] font-bold uppercase tracking-wider transition-all shadow-[0_5px_15px_rgba(197,168,128,0.18)] flex items-center justify-center gap-2"
              >
                {currentCar.quoteOnly ? "Request a custom quote →" : "Send booking request →"}
              </button>
            </div>
          </form>
        ) : (
          <>
          <div className="flex-1 min-h-0 overflow-y-auto p-5 sm:p-7 space-y-6 text-center custom-scrollbar">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-emerald-50 text-emerald-600 mb-2">
              <CheckCircle className="w-10 h-10" />
            </div>

            <div>
              <h4 className="font-display text-2xl font-bold text-[#f5f1ea]">{currentCar.quoteOnly ? "Custom quotation requested" : "Your journey request is ready"}</h4>
              <p className="text-sm text-[#c7c1b8] mt-1">Review your trip details below and send them to our concierge to confirm availability and pricing.</p>
            </div>

            {/* Ticket representation */}
            <div className="bg-[#141417] rounded-xl border border-[#c5a880]/35 overflow-hidden text-left max-w-md mx-auto luxury-shadow">
              <div className="bg-[#c5a880] text-[#17130d] px-4 py-3 flex justify-between items-center text-xs uppercase tracking-widest font-semibold">
                <span>KASI TOURS VOUCHER</span>
                <span className="font-mono text-[10px]">#KT-2026-{(Math.random() * 10000).toFixed(0)}</span>
              </div>
              <div className="p-4 space-y-3 text-xs">
                <div className="flex justify-between pb-2 border-b border-white/10">
                  <span className="text-[#c7c1b8]">GUEST PREFERENCE</span>
                  <span className="font-semibold text-[#f5f1ea]">{name}</span>
                </div>
                <div className="flex justify-between pb-2 border-b border-white/10">
                  <span className="text-[#c7c1b8]">CONTACT</span>
                  <span className="font-semibold text-[#f5f1ea]">{phone}</span>
                </div>
                <div className="flex justify-between pb-2 border-b border-white/10">
                  <span className="text-[#c7c1b8]">FLEET CLASS SELECTION</span>
                  <span className="font-semibold text-[#e5c299]">{currentCar.name}</span>
                </div>
                <div className="pb-2 border-b border-white/10">
                  <span className="text-[#c7c1b8] block mb-1">ROUTE</span>
                  <span className="font-semibold text-[#f4eee4] block text-normal">{pickup}</span>
                  <span className="text-[#9d9790] block text-[10px] my-0.5">pointing down to</span>
                  <span className="font-semibold text-[#f4eee4] block text-normal">{drop}</span>
                </div>
                <div className="flex justify-between pb-2 border-b border-white/10">
                  <span className="text-[#c7c1b8]">JOURNEY TIMING</span>
                  <span className="font-semibold text-[#f5f1ea]">{new Date(dateTime).toLocaleString()}</span>
                </div>
                <div className="flex justify-between pb-2 border-b border-white/10">
                  <span className="text-[#c7c1b8]">TRIP CLASSIFICATION</span>
                  <span className="font-semibold text-[#f5f1ea]">{tripType}</span>
                </div>
                <div className="flex justify-between pb-2 border-b border-white/10">
                  <span className="text-[#c7c1b8]">PASSENGERS</span>
                  <span className="font-semibold text-[#f5f1ea]">{passengers} of {currentCar.maxPassengers}</span>
                </div>
                <div className="bg-[#ffdea3]/10 border border-[#c5a880]/20 p-3 rounded-lg text-[11px]">
                  <p className="font-semibold text-[#e5c299]">{currentCar.quoteOnly ? "Customized quotation requested" : "Fare will be confirmed by our concierge"}</p>
                  <p className="mt-1 text-[#c7c1b8]">Your booking request will be sent to our team for availability and final details.</p>
                </div>
              </div>
            </div>

            <div className="p-4 bg-[#17130d] text-[#f5f1ea] border border-[#c5a880]/30 rounded-xl space-y-2 text-xs text-left max-w-md mx-auto">
              <div className="flex gap-2 items-center">
                <AlertCircle className="w-4 h-4 text-[#e5c299] inline shrink-0" />
                <span className="font-semibold">Next Concierge Verification Step:</span>
              </div>
              <p>Because spiritual journeys in Kashi are tailored personally, we verify each request manually. Click below to instantly launch WhatsApp with your pre-packaged voucher details.</p>
            </div>

          </div>
          <div className="shrink-0 flex flex-col-reverse sm:flex-row gap-2.5 p-4 sm:px-6 border-t border-[#353238] bg-[#121215]">
              <button
                type="button"
                onClick={() => setStage("form")}
                className="w-full sm:w-auto min-h-12 px-5 py-3 border border-[#c5a880]/30 rounded-full text-xs font-bold uppercase text-[#c7c1b8] transition hover:bg-[#09090b] cursor-pointer"
              >
                Edit Details
              </button>

              <a
                href={handleCreateWhatsAppLink()}
                target="_blank"
                rel="noreferrer"
                className="w-full sm:flex-1 min-h-12 bg-[#25D366] text-white py-3 px-5 rounded-full text-xs font-bold uppercase tracking-wider hover:brightness-105 transition flex items-center justify-center gap-2 cursor-pointer"
              >
                <MessageCircle className="w-4 h-4" /> {currentCar.quoteOnly ? "Request quote on WhatsApp" : "WhatsApp Booking Confirm"}
              </a>
          </div>
          </>
        )}
      </div>
    </div>
  );
}
