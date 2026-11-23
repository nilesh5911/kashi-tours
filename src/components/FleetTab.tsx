import { motion, useReducedMotion } from "motion/react";
import { ArrowRight, Calculator, Clock, MapPin, ShieldCheck, Star, UserCheck, Users, Snowflake } from "lucide-react";
import { CARS, TESTIMONIALS } from "../data";
import VedicPujaSection from "./VedicPujaSection";

interface FleetTabProps {
  onBookCar: (carId: string) => void;
}

export default function FleetTab({ onBookCar }: FleetTabProps) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <div className="bg-[#09090b] text-[#f5f1ea]">
      <section className="relative isolate min-h-[660px] overflow-hidden px-5 pb-28 pt-32 sm:px-8 md:min-h-[680px] md:px-12 md:pb-32">
        <div className="absolute inset-0 -z-10 bg-[#09090b]">
          <img
            className="h-full w-full object-cover object-center opacity-80"
            alt="Varanasi ghats glowing beside the Ganges at dusk"
            src="https://images.pexels.com/photos/35729427/pexels-photo-35729427.jpeg"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#09090b]/90 via-[#09090b]/55 to-[#09090b]/25" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#09090b]/15 via-transparent to-[#09090b]" />
        </div>

        <div className="relative mx-auto grid min-h-[430px] max-w-[1280px] grid-cols-1 items-center md:grid-cols-[0.95fr_1.05fr]">
          <div className="relative z-10 max-w-[620px] space-y-5 pb-52 text-center sm:pb-56 md:pb-8 md:text-left">
            <div className="inline-flex items-center gap-3 text-[#e5c299]">
              <span className="h-px w-8 bg-[#c5a880]/70" />
              <span className="font-sans text-[10px] font-bold uppercase tracking-[0.32em]">Connect with sacred India</span>
              <span className="h-px w-8 bg-[#c5a880]/70 md:hidden" />
            </div>
            <h1 className="font-display text-[clamp(2.65rem,5.6vw,5rem)] font-semibold leading-[1.02] tracking-[-0.035em] text-white drop-shadow-xl">
              Explore Varanasi with <span className="block italic font-normal text-[#e5c299]">Comfort &amp; Trust</span>
            </h1>
            <p className="mx-auto max-w-[520px] font-sans text-sm leading-7 text-white/85 md:mx-0 md:text-base">
              Comfortable chauffeur-driven rides for Varanasi, sacred tours, and journeys across North India.
            </p>
            <div className="flex flex-col justify-center gap-3 pt-2 sm:flex-row md:justify-start">
              <button onClick={() => onBookCar("innova")} className="min-h-12 rounded-full bg-[#c5a880] px-8 text-[11px] font-bold uppercase tracking-[0.14em] text-[#17130d] shadow-lg shadow-black/25 transition hover:-translate-y-0.5 hover:bg-[#d8bd96] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#e5c299]">
                Reserve ride now
              </button>
              <a href="https://wa.me/918577900710?text=Hello%20Kasi%20Tour!%20I%20would%20like%20to%20plan%20a%20ride." target="_blank" rel="noreferrer" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-white/45 bg-black/20 px-7 text-[11px] font-bold uppercase tracking-[0.14em] text-white transition hover:border-[#e5c299] hover:bg-black/35">
                <span className="h-2 w-2 rounded-full bg-[#e5c299]" /> WhatsApp booking
              </a>
            </div>
          </div>

          <motion.div
            initial={prefersReducedMotion ? false : { x: "105vw", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: prefersReducedMotion ? 0 : 2.8, ease: [0.16, 1, 0.3, 1] }}
            className="absolute bottom-0 left-0 right-0 z-0 mx-auto flex h-[230px] w-full items-end justify-center will-change-transform sm:h-[270px] md:bottom-0 md:left-auto md:right-[-1%] md:h-[390px] md:w-[58%]"
          >
            <div className="absolute bottom-4 left-1/2 h-8 w-[80%] -translate-x-1/2 rounded-[100%] bg-[#c5a880]/20 blur-2xl md:bottom-8 md:h-14" />
            <img src="https://freepngimg.com/thumb/car/4-2-car-png-hd.png" alt="White premium chauffeur-driven car" draggable={false} className="relative z-10 max-h-full w-[90%] object-contain drop-shadow-[0_24px_35px_rgba(0,0,0,0.55)] md:w-full" />
          </motion.div>
        </div>
      </section>

      <section className="relative z-20 mx-auto -mt-10 max-w-[1280px] px-4 sm:px-6 md:px-12">
        <div className="flex flex-col items-center justify-between gap-4 rounded-2xl border border-[#c5a880]/30 bg-[#121215]/95 p-4 shadow-[0_20px_50px_rgba(0,0,0,0.4)] backdrop-blur-sm sm:flex-row sm:p-5 md:px-7">
          <div className="flex items-center gap-3 text-center sm:text-left">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#c5a880]/15 text-[#e5c299]"><Calculator className="h-5 w-5" /></span>
            <div><p className="font-display text-base font-semibold text-[#f4eee4]">Plan your journey with confidence</p><p className="mt-0.5 text-xs text-[#c7c1b8]">Get a clear trip cost before you book.</p></div>
          </div>
          <a 
            href="/cost-estimator" 
            onClick={(e) => {
              e.preventDefault();
              window.history.pushState({}, "", "/cost-estimator");
              window.dispatchEvent(new PopStateEvent("popstate"));
            }}
            className="inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-full bg-[#c5a880] px-6 text-[10px] font-bold uppercase tracking-[0.13em] text-[#17130d] transition hover:-translate-y-0.5 hover:bg-[#d8bd96] sm:w-auto"
          >
            Calculate Your Trip Cost <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </section>

      <section className="px-5 py-16 sm:px-8 md:px-12 md:py-20">
        <div className="mx-auto max-w-[1280px]">
          <div className="mb-8 flex flex-col items-start justify-between gap-3 border-b border-white/10 pb-5 sm:flex-row sm:items-end">
            <div>
              <span className="mb-2 block text-[10px] font-bold uppercase tracking-[0.22em] text-[#e5c299]">The collection</span>
              <h2 className="font-display text-3xl font-semibold sm:text-4xl">Our Premium Fleet</h2>
            </div>
            <p className="max-w-sm text-sm leading-6 text-[#c7c1b8]">Thoughtfully maintained vehicles, matched to your journey and group. All prices are in INR.</p>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-[repeat(3,minmax(0,1fr))_0.9fr]">
            {CARS.map((car) => (
              <article key={car.id} className={`group flex flex-col overflow-hidden rounded-2xl border bg-[#121215] transition duration-300 hover:-translate-y-1 hover:border-[#c5a880]/55 ${car.popular ? "border-[#c5a880]/60" : "border-white/10"}`}>
                <div className="relative flex h-40 items-center justify-center bg-[#19191d] p-4">
                  <img src={car.image} alt={car.name} className="h-full w-full object-contain transition-transform duration-500 group-hover:scale-[1.04]" />
                  {car.popular && <span className="absolute right-3 top-3 rounded-full border border-[#c5a880]/35 bg-[#c5a880]/15 px-2.5 py-1 text-[8px] font-bold uppercase tracking-[0.1em] text-[#e5c299]">Popular choice</span>}
                </div>
                <div className="flex flex-1 flex-col p-4">
                  <div className="flex items-start justify-between gap-2">
                    <div><h3 className="font-display text-xl font-semibold">{car.name}</h3><p className="mt-0.5 text-[10px] uppercase tracking-[0.12em] text-[#a59b8e]">{car.type}</p></div>
                    <p className="whitespace-nowrap text-xs font-semibold text-[#e5c299]">{car.quoteOnly ? "Contact for Pricing" : `₹${car.baseFare.toLocaleString("en-IN")}`}<span className="block text-[9px] font-normal text-[#a59b8e]">{car.quoteOnly ? "Customized quotation" : "120 km package"}</span></p>
                  </div>
                  {!car.quoteOnly && <div className="mt-3 space-y-1 text-[10px] text-[#c7c1b8]"><p>Per KM: ₹{car.perKmRate}/km</p><p>Beyond 120 km: ₹{car.extraKmRate}/km extra</p></div>}
                  <div className="mt-4 flex gap-2 text-[10px] text-[#c7c1b8]">
                    <span className="inline-flex items-center gap-1.5 rounded-md border border-white/10 px-2 py-1"><Users className="h-3 w-3 text-[#c5a880]" />{car.capacity} seats</span>
                    <span className="inline-flex items-center gap-1.5 rounded-md border border-white/10 px-2 py-1"><Snowflake className="h-3 w-3 text-[#c5a880]" />Silent AC</span>
                  </div>
                  <button onClick={() => onBookCar(car.id)} className="mt-4 min-h-10 w-full rounded-lg border border-[#c5a880]/50 bg-[#c5a880] text-[10px] font-bold uppercase tracking-[0.12em] text-[#17130d] transition hover:bg-[#d8bd96]">{car.quoteOnly ? "Request a quote" : "Book now"}</button>
                </div>
              </article>
            ))}

            <aside className="flex flex-col justify-center rounded-2xl border border-[#c5a880]/25 bg-[#121215] p-5 sm:col-span-2 lg:col-span-1">
              <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-[#e5c299]">Travel with confidence</span>
              <h3 className="mt-2 font-display text-2xl font-semibold">A smoother way to travel</h3>
              <ul className="mt-5 space-y-4 text-xs text-[#c7c1b8]">
                <li className="flex gap-2.5"><ShieldCheck className="h-4 w-4 shrink-0 text-[#c5a880]" /><span>Safety-focused vehicles for every route.</span></li>
                <li className="flex gap-2.5"><UserCheck className="h-4 w-4 shrink-0 text-[#c5a880]" /><span>Local driver support through ghats and temples.</span></li>
                <li className="flex gap-2.5"><MapPin className="h-4 w-4 shrink-0 text-[#c5a880]" /><span>Clear journey details before you book.</span></li>
              </ul>
              <button onClick={() => onBookCar("innova")} className="mt-6 inline-flex min-h-10 items-center justify-center gap-2 rounded-lg border border-white/20 px-4 text-[9px] font-bold uppercase tracking-[0.12em] text-white transition hover:border-[#c5a880] hover:text-[#e5c299]">Plan your journey <ArrowRight className="h-3.5 w-3.5" /></button>
            </aside>
          </div>
        </div>
      </section>

      {/* Book Pandit & Vedic Puja Seva Section (VedicSeva) */}
      <VedicPujaSection />

      <section aria-label="Customer testimonials" className="border-y border-white/[0.06] bg-[#0d0d10] px-5 py-14 sm:px-8 md:px-12">
        <div className="mx-auto max-w-[1280px]">
          <div className="mb-8 text-center">
            <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#e5c299]">Shared experiences</span>
            <h2 className="mt-2 font-display text-3xl font-semibold sm:text-4xl">Voices of Our Travelers</h2>
          </div>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            {TESTIMONIALS.slice(0, 3).map((t) => (
              <article key={t.id} className="rounded-2xl border border-white/10 bg-[#121215] p-5 transition hover:border-[#c5a880]/40">
                <div className="mb-3 flex gap-1 text-[#e5c299]">{Array.from({ length: t.rating }).map((_, i) => <Star key={i} className="h-3.5 w-3.5 fill-current" />)}</div>
                <p className="min-h-[54px] text-xs italic leading-5 text-[#d1cbc2]">“{t.quote}”</p>
                <div className="mt-4 flex items-center gap-3">
                  <img src={t.avatar} alt="" className="h-9 w-9 rounded-full object-cover" />
                  <div><p className="text-xs font-semibold">{t.name}</p><p className="mt-0.5 text-[10px] text-[#9d9790]">{t.location}</p></div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

