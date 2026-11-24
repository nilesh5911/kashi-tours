import React, { useState } from "react";
import {
  Send,
  MapPin,
  Mail,
  Clock,
  PhoneCall,
  MessageCircle,
  CheckCircle
} from "lucide-react";

export default function ContactTab() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [serviceType, setServiceType] = useState("Spiritual Ghat Tour");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmitInquiry = (e: React.FormEvent) => {
    e.preventDefault();
    if (name && phone) {
      const inquiry = `Hello Kasi Tours! I’d like to ask about ${serviceType}.\nName: ${name}\nPhone: ${phone}\nDetails: ${message}`;
      window.open(`https://wa.me/918577900710?text=${encodeURIComponent(inquiry)}`, "_blank", "noopener,noreferrer");
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
      }, 5000);
    }
  };

  return (
    <div className="space-y-12 pb-16">

      {/* Visual Header matching Screen 1 */}
      <section className="relative z-0 min-h-[50vh] flex flex-col justify-center items-center pt-24 text-center overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-[#09090b]">
          <img
            className="w-full h-full object-cover opacity-100"
            alt="Cinematic shot of Varanasi Ghats"
            src="https://images.pexels.com/photos/35729427/pexels-photo-35729427.jpeg"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/25 to-[#09090b]/95"></div>
        </div>

        <div className="relative z-10 max-w-3xl px-6 space-y-6">
          <span className="text-[#e5c299] font-sans text-[10px] font-bold uppercase tracking-[0.4em] block drop-shadow-md">
            Connect with Divinity
          </span>
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight drop-shadow-xl">
            Your Journey to <br className="hidden sm:block" /> <span className="italic font-normal text-gold-gradient">Varanasi Starts Here</span>
          </h1>
          <div className="h-0.5 w-24 bg-gradient-to-r from-transparent via-[#e5c299] to-transparent mx-auto"></div>
          <p className="font-sans text-sm md:text-base text-gray-300 leading-loose max-w-2xl mx-auto font-light tracking-wide">
            Whether you're seeking a luxury pilgrimage or a spiritual fleet for your family, our concierges are ready to orchestrate your experience with ancient wisdom and modern integrity.
          </p>
        </div>
      </section>

      {/* Main Split Layout: Form & Map */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start max-w-[1280px] mx-auto px-6 md:px-12">

        {/* Left Hand: Inquiry Form card */}
        <div className="glass-panel rounded-3xl border border-[#c5a880]/20 p-8 md:p-10 luxury-shadow space-y-8">
          <h2 className="font-display text-2xl font-bold text-white pb-4 border-b border-[#353238]">
            Submit Travel Inquiry
          </h2>

          {submitted ? (
            <div className="glass-panel-dark border border-[#c5a880]/30 p-8 rounded-2xl text-center space-y-4 luxury-shadow">
              <CheckCircle className="w-16 h-16 text-[#f4eee4] mx-auto" />
              <h3 className="font-display text-xl font-bold text-white">Inquiry Ready</h3>
              <p className="text-xs text-gray-300 leading-relaxed font-light">Your inquiry is ready in WhatsApp. Review it there and send it to reach the KASI TOURS team.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmitInquiry} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="contact-name" className="text-[10px] font-sans font-bold uppercase tracking-widest text-[#f4eee4] block">Name</label>
                  <input
                    id="contact-name"
                    type="text"
                    required
                    aria-required="true"
                    placeholder="Your name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full bg-transparent border-b border-[#4b4132] focus:border-[#8c7355] outline-none px-2 py-2 text-sm font-semibold text-[#f4eee4] placeholder:text-[#81796e] transition-colors focus-visible:ring-2 focus-visible:ring-[#c5a880]"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="contact-phone" className="text-[10px] font-sans font-bold uppercase tracking-widest text-[#f4eee4] block">Phone</label>
                  <input
                    id="contact-phone"
                    type="text"
                    required
                    aria-required="true"
                    placeholder="Your phone number"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full bg-transparent border-b border-[#4b4132] focus:border-[#8c7355] outline-none px-2 py-2 text-sm font-semibold text-[#f4eee4] placeholder:text-[#81796e] transition-colors focus-visible:ring-2 focus-visible:ring-[#c5a880]"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="contact-service" className="text-[10px] font-sans font-bold uppercase tracking-widest text-[#f4eee4] block">Service Type</label>
                <select
                  id="contact-service"
                  value={serviceType}
                  onChange={(e) => setServiceType(e.target.value)}
                  className="w-full bg-transparent border-b border-[#4b4132] focus:border-[#8c7355] outline-none px-2 py-2 text-sm font-semibold text-[#f4eee4] [&>option]:bg-[#1b1b1f] [&>option]:text-[#f4eee4] cursor-pointer transition-colors focus-visible:ring-2 focus-visible:ring-[#c5a880]"
                >
                  <option value="Spiritual Ghat Tour">Spiritual Ghat Tour</option>
                  <option value="Airport Transfer">Airport Transfer Service</option>
                  <option value="Outstation Private Travel">Outstation Private Travel</option>
                  <option value="Wedding Luxury Fleet">Wedding Luxury Fleet</option>
                </select>
              </div>

              <div className="space-y-2">
                <label htmlFor="contact-message" className="text-[10px] font-sans font-bold uppercase tracking-widest text-[#f4eee4] block">Message</label>
                <textarea
                  id="contact-message"
                  rows={4}
                  required
                  aria-required="true"
                  placeholder="Share your route, dates, or questions"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full bg-transparent border-b border-[#4b4132] focus:border-[#8c7355] outline-none px-2 py-2 text-sm text-[#f4eee4] placeholder:text-[#81796e] resize-none font-medium transition-colors focus-visible:ring-2 focus-visible:ring-[#c5a880]"
                />
              </div>

              <button
                type="submit"
                className="w-full min-h-[48px] bg-[#c5a880] hover:opacity-90 text-white py-4 rounded-xl text-[11px] font-bold uppercase tracking-[0.2em] transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer shadow-md hover:shadow-lg hover:-translate-y-0.5 focus-visible:ring-2 focus-visible:ring-[#c5a880] focus-visible:outline-none"
              >
                Continue on WhatsApp <Send className="w-3.5 h-3.5" />
              </button>
            </form>
          )}

          <div className="pt-8 border-t border-[#353238] space-y-5 text-center">
            <span className="text-[10px] font-sans font-bold uppercase tracking-widest text-[#f4eee4] block">Immediate Assistance</span>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <a
                href="https://wa.me/918577900710?text=Hello%20Kasi%20Tours!%20I%20need%20immediate%20spiritual%20travel%20assistance."
                target="_blank"
                rel="noreferrer"
                className="min-h-[44px] bg-[#c5a880] hover:opacity-90 text-white py-3.5 px-4 rounded-xl text-[10px] font-bold uppercase tracking-[0.1em] flex items-center justify-center gap-2 shadow-sm transition-all duration-300 focus-visible:ring-2 focus-visible:ring-[#c5a880] focus-visible:outline-none"
              >
                <MessageCircle className="w-4 h-4 fill-current" /> WhatsApp Now
              </a>
              <a
                href="tel:8577900710"
                className="min-h-[44px] bg-[#09090b] border border-[#c5a880]/30 hover:border-[#c5a880] text-[#f4eee4] hover:bg-[#1b1b1f] py-3.5 px-3 rounded-xl text-[10px] font-bold uppercase tracking-[0.1em] flex items-center justify-center gap-2 shadow-sm transition-all duration-300 focus-visible:ring-2 focus-visible:ring-[#c5a880] focus-visible:outline-none"
              >
                <PhoneCall className="w-4 h-4 text-[#f4eee4]" /> Call 8577900710
              </a>
            </div>
          </div>
        </div>

        {/* Right Hand: Interactive Maps & Contact Specs */}
        <div className="space-y-8">

          {/* Frosted details card with map embed */}
          <div className="glass-panel rounded-3xl border border-[#c5a880]/20 overflow-hidden luxury-shadow p-5 space-y-4">
            <div className="rounded-2xl overflow-hidden h-72 border border-[#353238] bg-[#1b1b1f] relative">

              {/* Actual interactive OpenStreetMap embed! Understated & highly professional */}
              <iframe
                title="Varanasi Map Location"
                src="https://www.openstreetmap.org/export/embed.html?bbox=82.95543670654298%2C25.267868504499144%2C83.03611755371095%2C25.328399589333912&amp;layer=mapnik&amp;marker=25.298131336181747%2C82.99577713012695"
                className="w-full h-full border-0 grayscale opacity-90 contrast-100 focus:outline-none"
              ></iframe>

              <div className="absolute top-5 left-5 glass-panel p-4 rounded-xl shadow-lg max-w-[220px] space-y-2 z-10 border border-[#c5a880]/30">
                <div className="flex items-center gap-2 font-display text-sm font-bold text-white">
                  <MapPin className="w-4 h-4 text-[#f4eee4]" /> Varanasi, India
                </div>
                <p className="text-[10px] text-gray-300 leading-relaxed font-sans font-medium">Serving all major Ghats, Airports, and luxury hotels within the sacred circle.</p>
                <a
                  href="https://www.google.com/maps/place/Varanasi,+Uttar+Pradesh/@25.3176452,82.9739144,13Z"
                  target="_blank"
                  rel="noreferrer"
                  className="text-[9px] font-sans font-bold text-[#f4eee4] hover:text-[#f4eee4] transition-colors uppercase block tracking-widest pt-2"
                >
                  Open in Google Maps →
                </a>
              </div>
            </div>
          </div>

          {/* Business Hours, Email, Address listings cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="glass-panel p-6 rounded-2xl border border-[#c5a880]/20 flex gap-4 items-start luxury-shadow hover:border-[#c5a880]/50 transition-all duration-300 group">
              <div className="bg-[#09090b] border border-[#c5a880]/30 p-2.5 rounded-xl text-[#f4eee4] group-hover:text-[#f4eee4] transition-colors">
                <Mail className="w-5 h-5" />
              </div>
              <div className="space-y-1">
                <span className="text-[10px] font-sans font-bold uppercase tracking-[0.2em] text-[#f4eee4]">Email Us</span>
                <p className="text-xs font-semibold text-white">kasitour65@gmail.com</p>
              </div>
            </div>

            <div className="glass-panel p-6 rounded-2xl border border-[#c5a880]/20 flex gap-4 items-start luxury-shadow hover:border-[#c5a880]/50 transition-all duration-300 group">
              <div className="bg-[#09090b] border border-[#c5a880]/30 p-2.5 rounded-xl text-[#f4eee4] group-hover:text-[#f4eee4] transition-colors">
                <Clock className="w-5 h-5" />
              </div>
              <div className="space-y-1">
                <span className="text-[10px] font-sans font-bold uppercase tracking-[0.2em] text-[#f4eee4]">Business Hours</span>
                <p className="text-xs font-semibold text-white">24/7 Concierge Support</p>
              </div>
            </div>
          </div>

          <div className="glass-panel p-6 rounded-2xl border border-[#c5a880]/20 flex gap-4 items-start luxury-shadow hover:border-[#c5a880]/50 transition-all duration-300 group">
            <div className="bg-[#09090b] border border-[#c5a880]/30 p-3 rounded-xl text-[#f4eee4] shrink-0 group-hover:text-[#f4eee4] transition-colors">
              <MapPin className="w-5 h-5" />
            </div>
            <div className="space-y-1 pt-1">
              <span className="text-[10px] font-sans font-bold uppercase tracking-[0.2em] text-[#f4eee4]">Office Address</span>
              <p className="text-xs font-semibold text-white leading-loose">
                Kasi Tours HQ, Dashashwamedh Road, Near Kashi Vishwanath Temple, Varanasi, Uttar Pradesh 221001, India
              </p>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
}
