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
      className="relative max-w-[1280px] mx-auto px-4 sm:px-6 md:px-12 my-8 sm:my-12 md:my-16"
    >
      <div className="relative rounded-2xl md:rounded-3xl border border-[#c5a880]/30 bg-[#121215] p-5 sm:p-7 md:p-9 lg:p-10 overflow-hidden shadow-[0_15px_40px_rgba(0,0,0,0.5)]">
        {/* Subtle decorative glow */}
        <div className="absolute top-0 right-0 w-60 h-60 sm:w-80 sm:h-80 bg-[#c5a880]/5 blur-[80px] sm:blur-[100px] rounded-full pointer-events-none" />

        <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-6 sm:gap-8">
          {/* Heading, Short Description, and Service List */}
          <div className="max-w-2xl space-y-3 sm:space-y-4">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#c5a880]/30 bg-[#c5a880]/10 px-3 py-1 text-[9px] sm:text-[10px] font-bold uppercase tracking-[0.18em] text-[#e5c299]">
              <Sparkles className="h-3 w-3 text-[#c5a880] shrink-0" />
              Sacred Rituals
            </div>

            <h2 className="font-display text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-[#f4eee4] tracking-tight leading-snug sm:leading-tight">
              Pandit &amp; Vedic Puja Seva
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
            <div className="pt-2 sm:pt-3">
              <p className="text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.16em] text-[#e5c299] mb-2.5 sm:mb-3">
                Available Services
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-2.5 text-xs text-[#c7c1b8]">
                {services.map((service) => (
                  <li key={service} className="flex items-start gap-2 py-0.5">
                    <CheckCircle2 className="h-3.5 w-3.5 text-[#c5a880] shrink-0 mt-0.5" />
                    <span className="leading-tight sm:leading-normal">{service}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Booking Buttons: mobile (stacked full-width), tablet (side-by-side equal width), desktop (stacked vertical) */}
          <div className="flex flex-col sm:flex-row lg:flex-col gap-3 shrink-0 w-full sm:w-auto lg:w-64 pt-2 sm:pt-0 border-t border-white/5 sm:border-0">
            <a
              href="https://vedicseva.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:flex-1 lg:w-full inline-flex min-h-[46px] sm:min-h-12 items-center justify-center gap-2 rounded-full bg-[#c5a880] px-5 sm:px-6 text-[11px] sm:text-xs font-bold uppercase tracking-[0.12em] text-[#17130d] shadow-md transition hover:-translate-y-0.5 hover:bg-[#d8bd96] active:scale-[0.98] text-center"
            >
              Book on VedicSeva <ExternalLink className="h-3.5 w-3.5 shrink-0" />
            </a>

            <a
              href="https://wa.me/918577900710?text=Hello%20Kasi%20Tours!%20I%20would%20like%20to%20inquire%20about%20booking%20a%20certified%20Pandit%20for%20Vedic%20Puja%20Seva%20in%20Varanasi."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:flex-1 lg:w-full inline-flex min-h-[46px] sm:min-h-12 items-center justify-center gap-2 rounded-full border border-white/20 bg-white/5 px-5 sm:px-6 text-[11px] sm:text-xs font-bold uppercase tracking-[0.12em] text-[#f4eee4] transition hover:border-[#c5a880] hover:text-[#e5c299] active:scale-[0.98] text-center"
            >
              <MessageCircle className="h-3.5 w-3.5 text-[#25D366] shrink-0" />
              WhatsApp Booking
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
