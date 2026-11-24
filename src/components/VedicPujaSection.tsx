import React from "react";
import { Sparkles, ExternalLink, ShieldCheck, Flame, BookOpen, Sun, CheckCircle, MessageCircle, ArrowRight } from "lucide-react";

export default function VedicPujaSection() {
  const pujas = [
    {
      id: "rudrabhishek",
      title: "Kashi Rudrabhishek",
      subtitle: "Mahadev Special Archana",
      desc: "Sacred Jalabhishek with pure Ganga Jal, Belpatra, and continuous Rudram chanting by Veda-certified priests of Kashi.",
      badge: "Most Auspicious",
      icon: Flame,
    },
    {
      id: "ganga-aarti",
      title: "Ganga Aarti & Sankalp",
      subtitle: "VIP Ghat Seva",
      desc: "Reserved evening Aarti seats with personalized family Sankalp and dedicated Pandit guidance at Dashashwamedh Ghat.",
      badge: "Popular Seva",
      icon: Sun,
    },
    {
      id: "mahamrityunjaya",
      title: "Mahamrityunjaya Jaap",
      subtitle: "Ayushya & Aarogya Havan",
      desc: "Ancient Vedic mantra recitations and Shanti Homa for divine protection, peace, good health, and longevity.",
      badge: "Health & Peace",
      icon: Sparkles,
    },
    {
      id: "pind-daan",
      title: "Pind Daan & Pitru Tarpan",
      subtitle: "Ancestral Moksha Vidhi",
      desc: "Sacred ancestral rites strictly conforming to Shastric traditions at Manikarnika & Panchganga Tirtha.",
      badge: "Shastric Vidhi",
      icon: BookOpen,
    },
  ];

  return (
    <section 
      id="vedic-puja-seva" 
      aria-label="Vedic Puja & Pandit Seva by VedicSeva"
      className="relative max-w-[1280px] mx-auto px-6 md:px-12 my-16"
    >
      {/* Background glow and subtle border */}
      <div className="relative rounded-3xl border border-[#c5a880]/30 bg-gradient-to-b from-[#141418] via-[#101014] to-[#0c0c0f] p-8 md:p-14 overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.6)]">
        <div className="absolute top-0 right-0 w-[500px] h-[300px] bg-[#c5a880]/10 blur-[130px] rounded-full pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-[400px] h-[300px] bg-[#8c7355]/10 blur-[120px] rounded-full pointer-events-none"></div>

        {/* Header Section */}
        <div className="relative z-10 flex flex-col lg:flex-row items-start lg:items-end justify-between gap-6 border-b border-white/10 pb-10">
          <div className="max-w-2xl space-y-3">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#c5a880]/40 bg-[#c5a880]/10 px-3.5 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-[#e5c299]">
              <Sparkles className="h-3 w-3 text-[#c5a880]" />
              Sacred Rituals &amp; Online Booking
            </div>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
              Book Verified Pandit &amp; <br className="hidden sm:block" />
              <span className="text-gold-gradient italic font-normal">Vedic Puja Seva</span>
            </h2>
            <p className="text-sm md:text-base text-gray-300 font-light leading-relaxed">
              In collaboration with{" "}
              <a 
                href="https://vedicseva.vercel.app/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-[#e5c299] underline underline-offset-4 decoration-[#c5a880]/50 hover:text-white hover:decoration-[#c5a880] font-medium transition-colors"
              >
                VedicSeva
              </a>
              , connect with authentic Veda-certified Acharyas &amp; Pandits in Varanasi for sanctified temple rituals, home pujas, and personalized Sankalp ceremonies.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto">
            <a
              href="https://vedicseva.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-[48px] items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#c5a880] to-[#8c7355] px-8 py-3.5 text-xs font-bold uppercase tracking-widest text-white shadow-[0_10px_25px_rgba(197,168,128,0.25)] hover:shadow-[0_15px_35px_rgba(197,168,128,0.4)] hover:opacity-95 transition-all duration-300 cursor-pointer text-center"
            >
              Explore VedicSeva <ExternalLink className="h-4 w-4" />
            </a>
            <a
              href="https://wa.me/918577900710?text=Hello%20Kasi%20Tours%20%26%20VedicSeva!%20I%20would%20like%20to%20book%20a%20certified%20Pandit%20for%20Vedic%20Puja%20Seva%20in%20Varanasi."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-[48px] items-center justify-center gap-2 rounded-full border border-white/20 bg-white/5 hover:bg-white/10 hover:border-white px-6 py-3.5 text-xs font-bold uppercase tracking-widest text-white transition-all duration-300 cursor-pointer text-center"
            >
              <MessageCircle className="h-4 w-4 text-[#25D366]" /> Pandit Consultation
            </a>
          </div>
        </div>

        {/* Puja Cards Grid */}
        <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-10">
          {pujas.map((puja) => {
            const Icon = puja.icon;
            return (
              <div
                key={puja.id}
                className="group relative flex flex-col justify-between rounded-2xl border border-white/10 bg-[#17171d]/90 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#c5a880]/50 hover:bg-[#1c1c24] shadow-md"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#c5a880]/15 text-[#e5c299] border border-[#c5a880]/25 group-hover:scale-105 transition-transform">
                      <Icon className="h-5 w-5 text-[#c5a880]" />
                    </span>
                    <span className="rounded-full border border-[#c5a880]/30 bg-[#c5a880]/10 px-2.5 py-0.5 text-[9px] font-bold uppercase tracking-wider text-[#e5c299]">
                      {puja.badge}
                    </span>
                  </div>
                  <h3 className="font-display text-xl font-bold text-white group-hover:text-[#e5c299] transition-colors">
                    {puja.title}
                  </h3>
                  <p className="text-[11px] font-sans font-semibold uppercase tracking-wider text-[#c5a880] mt-0.5">
                    {puja.subtitle}
                  </p>
                  <p className="mt-3 text-xs leading-relaxed text-gray-300 font-light">
                    {puja.desc}
                  </p>
                </div>

                <div className="pt-6 mt-4 border-t border-white/10 flex items-center justify-between">
                  <a
                    href="https://vedicseva.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#e5c299] uppercase tracking-wider hover:text-white transition-colors"
                  >
                    Book Seva <ArrowRight className="h-3.5 w-3.5" />
                  </a>
                  <span className="text-[10px] text-gray-400 font-light">
                    Verified Priests
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Trust Guarantees */}
        <div className="relative z-10 mt-10 pt-8 border-t border-white/10 grid grid-cols-2 md:grid-cols-4 gap-4 text-center sm:text-left">
          <div className="flex items-center gap-2.5 justify-center sm:justify-start">
            <ShieldCheck className="h-4 w-4 text-[#c5a880] shrink-0" />
            <span className="text-xs text-gray-300 font-medium">100% Certified Pandits</span>
          </div>
          <div className="flex items-center gap-2.5 justify-center sm:justify-start">
            <CheckCircle className="h-4 w-4 text-[#c5a880] shrink-0" />
            <span className="text-xs text-gray-300 font-medium">Pure Vedic Samagri</span>
          </div>
          <div className="flex items-center gap-2.5 justify-center sm:justify-start">
            <Sparkles className="h-4 w-4 text-[#c5a880] shrink-0" />
            <span className="text-xs text-gray-300 font-medium">Customized Sankalp</span>
          </div>
          <div className="flex items-center gap-2.5 justify-center sm:justify-start">
            <Sun className="h-4 w-4 text-[#c5a880] shrink-0" />
            <span className="text-xs text-gray-300 font-medium">Live Video Darshan Option</span>
          </div>
        </div>

        {/* Bottom Banner callout to visit VedicSeva directly */}
        <div className="relative z-10 mt-8 rounded-xl border border-[#c5a880]/20 bg-[#0d0d10]/80 p-4 sm:p-5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3 text-center sm:text-left">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#c5a880]/15 text-[#e5c299]">
              🕉️
            </div>
            <div>
              <p className="text-xs sm:text-sm font-semibold text-white">
                Looking for Navagraha Shanti, Astrological Kundali Milan or personalized Havan?
              </p>
              <p className="text-[11px] text-gray-400">
                Book directly on the official VedicSeva portal for worldwide devotees.
              </p>
            </div>
          </div>
          <a
            href="https://vedicseva.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-10 items-center justify-center gap-2 rounded-full border border-[#c5a880]/50 bg-[#c5a880]/10 hover:bg-[#c5a880] hover:text-[#17130d] px-5 text-[11px] font-bold uppercase tracking-wider text-[#e5c299] transition-all duration-300 whitespace-nowrap cursor-pointer"
          >
            Visit VedicSeva.vercel.app <ExternalLink className="h-3.5 w-3.5" />
          </a>
        </div>
      </div>
    </section>
  );
}
