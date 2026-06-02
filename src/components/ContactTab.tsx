import React, { useState } from "react";
import { 
  Send, 
  MapPin, 
  Mail, 
  Clock, 
  PhoneCall, 
  MessageCircle, 
  CheckCircle,
  Award,
  ShieldAlert,
  ThumbsUp
} from "lucide-react";

export default function ContactTab() {
  const [name, setName] = useState("Gautam Mishra");
  const [phone, setPhone] = useState("+91 85779 00710");
  const [serviceType, setServiceType] = useState("Spiritual Ghat Tour");
  const [message, setMessage] = useState("Tell us about your travel requirements...");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmitInquiry = (e: React.FormEvent) => {
    e.preventDefault();
    if (name && phone) {
      const existingInquiries = JSON.parse(localStorage.getItem("kasi_inquiries") || "[]");
      existingInquiries.push({ name, phone, serviceType, message, dateCreated: new Date().toISOString() });
      localStorage.setItem("kasi_inquiries", JSON.stringify(existingInquiries));
      
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        setMessage("");
      }, 5000);
    }
  };

  return (
    <div className="space-y-16 pt-32 pb-20 max-w-[1280px] mx-auto px-6 md:px-12">
      
      {/* Visual Header matching Screen 1 */}
      <section className="space-y-6 max-w-3xl">
        <span className="text-[#8c7355] font-sans text-[10px] font-bold uppercase tracking-[0.4em] block">
          Connect with Divinity
        </span>
        <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold text-[#141416] leading-tight">
          Your Journey to <br className="hidden sm:block" /> <span className="italic font-normal text-gold-gradient">Varanasi Starts Here</span>
        </h1>
        <div className="h-0.5 w-24 bg-gradient-to-r from-[#c5a880] to-transparent"></div>
        <p className="font-sans text-sm md:text-base text-gray-500 leading-loose max-w-2xl font-light tracking-wide">
          Whether you're seeking a luxury pilgrimage or a spiritual fleet for your family, our concierges are ready to orchestrate your experience with ancient wisdom and modern integrity.
        </p>
      </section>

      {/* Main Split Layout: Form & Map */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
        
        {/* Left Hand: Inquiry Form card */}
        <div className="bg-white rounded-3xl border border-gray-100 p-8 md:p-10 luxury-shadow space-y-8">
          <h2 className="font-display text-2xl font-bold text-[#141416] pb-4 border-b border-gray-100">
            Submit Travel Inquiry
          </h2>

          {submitted ? (
            <div className="bg-[#fdfdfd] border border-[#c5a880]/30 p-8 rounded-2xl text-center space-y-4 luxury-shadow">
              <CheckCircle className="w-16 h-16 text-[#c5a880] mx-auto" />
              <h3 className="font-display text-xl font-bold text-[#141416]">Inquiry Sent Successfully!</h3>
              <p className="text-xs text-gray-500 leading-relaxed font-light">Our personal travel concierge has received your details and is preparing an exquisite custom luxury route for you. We will call you shortly.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmitInquiry} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] font-sans font-bold uppercase tracking-widest text-gray-400 block">Name</label>
                  <input 
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full bg-transparent border-b border-gray-200 focus:border-[#c5a880] outline-none px-2 py-2 text-sm font-semibold text-[#141416] transition-colors"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-sans font-bold uppercase tracking-widest text-gray-400 block">Phone</label>
                  <input 
                    type="text"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full bg-transparent border-b border-gray-200 focus:border-[#c5a880] outline-none px-2 py-2 text-sm font-semibold text-[#141416] transition-colors"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-sans font-bold uppercase tracking-widest text-gray-400 block">Service Type</label>
                <select 
                  value={serviceType}
                  onChange={(e) => setServiceType(e.target.value)}
                  className="w-full bg-transparent border-b border-gray-200 focus:border-[#c5a880] outline-none px-2 py-2 text-sm font-semibold text-[#141416] cursor-pointer transition-colors"
                >
                  <option value="Spiritual Ghat Tour">Spiritual Ghat Tour</option>
                  <option value="Airport Transfer">Airport Transfer Service</option>
                  <option value="Outstation Private Travel">Outstation Private Travel</option>
                  <option value="Wedding Luxury Fleet">Wedding Luxury Fleet</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-sans font-bold uppercase tracking-widest text-gray-400 block">Message</label>
                <textarea 
                  rows={4}
                  required
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full bg-transparent border-b border-gray-200 focus:border-[#c5a880] outline-none px-2 py-2 text-sm text-gray-600 resize-none font-medium transition-colors"
                />
              </div>

              <button 
                type="submit"
                className="w-full bg-[#1c1d21] hover:bg-[#8c7355] text-white py-4 rounded-xl text-[11px] font-bold uppercase tracking-[0.2em] transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer shadow-md hover:shadow-lg hover:-translate-y-0.5"
              >
                Send Inquiry <Send className="w-3.5 h-3.5" />
              </button>
            </form>
          )}

          <div className="pt-8 border-t border-gray-100 space-y-5 text-center">
            <span className="text-[10px] font-sans font-bold uppercase tracking-widest text-gray-400 block">Immediate Assistance</span>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <a 
                href="https://wa.me/918577900710?text=Hello%20Kasi%20Tour!%20I%20need%20immediate%20spiritual%20travel%20assistance."
                target="_blank"
                rel="noreferrer"
                className="bg-gradient-to-r from-[#c5a880] to-[#8c7355] hover:opacity-90 text-white py-3.5 px-4 rounded-xl text-[10px] font-bold uppercase tracking-[0.1em] flex items-center justify-center gap-2 shadow-sm transition-all duration-300"
              >
                <MessageCircle className="w-4 h-4 fill-current" /> WhatsApp Now
              </a>
              <a 
                href="tel:8577900710"
                className="bg-[#f5f2eb] border border-[#c5a880]/30 hover:border-[#c5a880] text-[#8c7355] hover:text-[#1c1d21] py-3.5 px-3 rounded-xl text-[10px] font-bold uppercase tracking-[0.1em] flex items-center justify-center gap-2 shadow-sm transition-all duration-300"
              >
                <PhoneCall className="w-4 h-4 text-[#c5a880]" /> Call 8577900710
              </a>
            </div>
          </div>
        </div>

        {/* Right Hand: Interactive Maps & Contact Specs */}
        <div className="space-y-8">
          
          {/* Frosted details card with map embed */}
          <div className="bg-white rounded-3xl border border-gray-100 overflow-hidden luxury-shadow p-5 space-y-4">
            <div className="rounded-2xl overflow-hidden h-72 border border-gray-100 bg-gray-50 relative">
              
              {/* Actual interactive OpenStreetMap embed! Understated & highly professional */}
              <iframe 
                title="Varanasi Map Location"
                src="https://www.openstreetmap.org/export/embed.html?bbox=82.95543670654298%2C25.267868504499144%2C83.03611755371095%2C25.328399589333912&amp;layer=mapnik&amp;marker=25.298131336181747%2C82.99577713012695"
                className="w-full h-full border-0 grayscale opacity-70 contrast-125 focus:outline-none"
              ></iframe>

              <div className="absolute top-5 left-5 glass-panel p-4 rounded-xl shadow-lg max-w-[220px] space-y-2 z-10">
                <div className="flex items-center gap-2 font-display text-sm font-bold text-[#141416]">
                  <MapPin className="w-4 h-4 text-[#c5a880]" /> Varanasi, India
                </div>
                <p className="text-[10px] text-gray-500 leading-relaxed font-sans font-medium">Serving all major Ghats, Airports, and luxury hotels within the sacred circle.</p>
                <a 
                  href="https://www.google.com/maps/place/Varanasi,+Uttar+Pradesh/@25.3176452,82.9739144,13Z"
                  target="_blank"
                  rel="noreferrer"
                  className="text-[9px] font-sans font-bold text-[#8c7355] hover:text-[#c5a880] transition-colors uppercase block tracking-widest pt-2"
                >
                  Open in Google Maps →
                </a>
              </div>
            </div>
          </div>

          {/* Business Hours, Email, Address listings cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-2xl border border-gray-100 flex gap-4 items-start luxury-shadow-hover transition-all duration-300 group">
              <div className="bg-[#f5f2eb] p-2.5 rounded-xl text-[#c5a880] group-hover:text-[#8c7355] transition-colors">
                <Mail className="w-5 h-5" />
              </div>
              <div className="space-y-1">
                <span className="text-[10px] font-sans font-bold uppercase tracking-[0.2em] text-gray-400">Email Us</span>
                <p className="text-xs font-semibold text-[#141416]">kasitour65@gmail.com</p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-gray-100 flex gap-4 items-start luxury-shadow-hover transition-all duration-300 group">
              <div className="bg-[#f5f2eb] p-2.5 rounded-xl text-[#c5a880] group-hover:text-[#8c7355] transition-colors">
                <Clock className="w-5 h-5" />
              </div>
              <div className="space-y-1">
                <span className="text-[10px] font-sans font-bold uppercase tracking-[0.2em] text-gray-400">Business Hours</span>
                <p className="text-xs font-semibold text-[#141416]">24/7 Concierge Support</p>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-gray-100 flex gap-4 items-start luxury-shadow-hover transition-all duration-300 group">
            <div className="bg-[#f5f2eb] p-3 rounded-xl text-[#c5a880] shrink-0 group-hover:text-[#8c7355] transition-colors">
              <MapPin className="w-5 h-5" />
            </div>
            <div className="space-y-1 pt-1">
              <span className="text-[10px] font-sans font-bold uppercase tracking-[0.2em] text-gray-400">Office Address</span>
              <p className="text-xs font-semibold text-[#141416] leading-loose">
                Kasi Tour HQ, Dashashwamedh Road, Near Kashi Vishwanath Temple, Varanasi, Uttar Pradesh 221001, India
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* Badges footer area */}
      <section className="bg-[#fdfdfd] border border-gray-100 py-12 rounded-3xl flex flex-col sm:flex-row justify-around items-center gap-8 px-6 text-gray-500 luxury-shadow">
        <div className="flex items-center gap-3">
          <Award className="w-6 h-6 text-[#c5a880]" />
          <span className="text-[11px] font-sans font-bold uppercase tracking-widest text-[#4a4a4a]">Licensed Operator</span>
        </div>
        <div className="flex items-center gap-3">
          <CheckCircle className="w-6 h-6 text-[#c5a880]" />
          <span className="text-[11px] font-sans font-bold uppercase tracking-widest text-[#4a4a4a]">Luxury Assured</span>
        </div>
        <div className="flex items-center gap-3">
          <ThumbsUp className="w-6 h-6 text-[#c5a880]" />
          <span className="text-[11px] font-sans font-bold uppercase tracking-widest text-[#4a4a4a]">500+ Pilgrim Reviews</span>
        </div>
      </section>

    </div>
  );
}
