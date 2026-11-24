import React from "react";
import { Sparkles, ExternalLink, MessageCircle, CheckCircle2 } from "lucide-react";

export default function VedicPujaSection() {
  const services = [
    "Kashi Rudrabhishek & Mahadev Special Archana",
    "Dashashwamedh Ghat Ganga Aarti & VIP Sankalp",
    "Mahamrityunjaya Jaap & Ayushya Homa",
    "Pind Daan, Pitru Tarpan & Shastric Moksha Vidhi",
    "Navgraha Shanti, Griha Pravesh & Vastu Puja",
    "Special Temple Archana & Personalized Sankalp",
  ];

  return (
    <section
      id="vedic-puja-seva"
      aria-label="Vedic Puja & Pandit Seva by VedicSeva"
      className="relative max-w-[1280px] mx-auto px-6 md:px-12 my-12"
    >
      <div className="relative rounded-2xl border border-[#c5a880]/30 bg-[#121215] p-6 sm:p-8 md:p-10 overflow-hidden shadow-[0_15px_40px_rgba(0,0,0,0.5)]">
        {/* Subtle decorative glow */}
        <div className="absolute top-0 right-0 w-80 h-80 bg-[#c5a880]/5 blur-[100px] rounded-full pointer-events-none" />

        <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-8">
          {/* Heading, Short Description, and Service List */}
          <div className="max-w-2xl space-y-4">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#c5a880]/30 bg-[#c5a880]/10 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-[#e5c299]">
              <Sparkles className="h-3 w-3 text-[#c5a880]" />
              Sacred Rituals
            </div>

            <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-semibold text-[#f4eee4] tracking-tight">
              Book Verified Pandit &amp; Vedic Puja Seva
            </h2>

            <p className="text-xs sm:text-sm text-[#c7c1b8] leading-relaxed">
              In association with{" "}
              <a
                href="https://vedicseva.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#e5c299] underline underline-offset-4 decoration-[#c5a880]/50 hover:text-white transition-colors"
              >
                VedicSeva
              </a>
              , connect with authentic Veda-certified priests in Kashi for traditional temple archana, sacred ghat rituals, and customized family Sankalps.
            </p>

            {/* List of Available Services */}
            <div className="pt-2">
              <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#e5c299] mb-3">
                Available Services
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs text-[#c7c1b8]">
                {services.map((service) => (
                  <li key={service} className="flex items-center gap-2">
                    <CheckCircle2 className="h-3.5 w-3.5 text-[#c5a880] shrink-0" />
                    <span>{service}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Booking Buttons */}
          <div className="flex flex-col sm:flex-row lg:flex-col gap-3 shrink-0 lg:w-60">
            <a
              href="https://vedicseva.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#c5a880] px-6 text-xs font-bold uppercase tracking-[0.12em] text-[#17130d] shadow-md transition hover:-translate-y-0.5 hover:bg-[#d8bd96] text-center"
            >
              Book on VedicSeva <ExternalLink className="h-3.5 w-3.5" />
            </a>

            <a
              href="https://wa.me/918577900710?text=Hello%20Kasi%20Tours!%20I%20would%20like%20to%20inquire%20about%20booking%20a%20certified%20Pandit%20for%20Vedic%20Puja%20Seva%20in%20Varanasi."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-white/20 bg-white/5 px-6 text-xs font-bold uppercase tracking-[0.12em] text-[#f4eee4] transition hover:border-[#c5a880] hover:text-[#e5c299] text-center"
            >
              <MessageCircle className="h-3.5 w-3.5 text-[#25D366]" />
              WhatsApp Booking
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
