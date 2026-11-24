import React from "react";
import { Check, X, Info } from "lucide-react";
import { COMPARISONS, CARS } from "../data";

interface ComparisonTabProps {
  onBookCarClass: (carId: string) => void;
}

export default function ComparisonTab({ onBookCarClass }: ComparisonTabProps) {
  const comparisonVehicles = [
    { label: "Executive Sedan", field: "executive" as const },
    { label: "Premium SUV", field: "luxury" as const, featured: true },
    { label: "Luxury Coach", field: "premium" as const },
  ];

  const renderIcon = (val: boolean | string) => {
    if (val === true) {
      return (
        <div className="flex justify-center items-center">
          <Check className="w-5 h-5 text-[#f4eee4] bg-[#c5a880]/20 p-1 rounded-full stroke-[3]" />
        </div>
      );
    }
    if (val === false) {
      return (
        <div className="flex justify-center items-center">
          <X className="w-4 h-4 text-gray-400/50 stroke-[2]" />
        </div>
      );
    }
    if (val === "+") {
      return (
        <div className="flex justify-center items-center">
          <span className="text-[10px] font-bold text-[#f4eee4] bg-[#c5a880]/10 px-3 py-1 rounded-full border border-[#c5a880]/20 uppercase tracking-widest">
            Available +
          </span>
        </div>
      );
    }
    return <span className="text-gray-600/50 font-sans text-center text-sm font-bold">—</span>;
  };

  return (
    <div className="space-y-12">

      {/* Editorial Header Section */}
      <section className="relative z-0 min-h-[430px] sm:min-h-[50vh] flex flex-col justify-center items-center px-4 pt-24 pb-10 text-center overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-[#09090b]">
          <img
            className="w-full h-full object-cover opacity-100"
            alt="Cinematic shot of Varanasi Ghats"
            src="https://images.pexels.com/photos/35729427/pexels-photo-35729427.jpeg"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/25 to-[#09090b]/95"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto space-y-4 sm:space-y-6">
          <span className="text-[#e5c299] font-sans text-[10px] font-bold uppercase tracking-[0.4em] block drop-shadow-md">
            Elite Travel Experiences
          </span>
          <h1 className="font-display text-3xl sm:text-5xl md:text-6xl font-bold text-white leading-tight drop-shadow-xl">
            Our Premium Fleet — <br /><span className="italic text-gold-gradient font-normal">Luxury on Wheels</span>
          </h1>
          <div className="h-0.5 w-24 bg-gradient-to-r from-transparent via-[#e5c299] to-transparent mx-auto"></div>
          <p className="font-sans text-xs sm:text-sm md:text-base text-gray-300 leading-relaxed sm:leading-loose max-w-2xl mx-auto font-light tracking-wide">
            Experience the ancient city of Varanasi in unparalleled comfort. Our curated selection of vehicles ensures a seamless journey for spiritual seekers, business executives, and luxury family voyagers alike.
          </p>
        </div>
      </section>

      {/* Comparison Grid Table matching exact screen spec */}
      <section className="max-w-[1280px] mx-auto px-4 sm:px-6 md:px-12">
        <div className="bg-[#121215] text-[#f4eee4] rounded-2xl sm:rounded-3xl overflow-hidden luxury-shadow border border-[#353238] p-5 sm:p-8 md:p-12 space-y-6 sm:space-y-10 relative">
          <div className="text-center space-y-3 border-b border-[#c5a880]/10 pb-5 sm:pb-8 relative z-10">
            <h2 className="font-display text-2xl sm:text-4xl font-bold">Compare Luxury Classes</h2>
            <p className="text-xs text-[#9d9790] font-sans tracking-widest uppercase">Choose the perfect tier for your family and spiritual pilgrimage.</p>
          </div>

          {/* Compact cards prevent a data table from forcing horizontal scrolling on phones. */}
          <div className="grid gap-3 md:hidden relative z-10">
            {comparisonVehicles.map((vehicle) => (
              <article key={vehicle.field} className={`rounded-xl border p-4 ${vehicle.featured ? "border-[#c5a880]/50 bg-[#c5a880]/10" : "border-[#353238] bg-[#1b1b1f]"}`}>
                <div className="mb-3 flex items-center justify-between gap-3 border-b border-white/10 pb-3">
                  <h3 className="font-display text-lg font-semibold">{vehicle.label}</h3>
                  {vehicle.featured && <span className="rounded-full bg-[#c5a880]/20 px-2 py-1 text-[8px] font-bold uppercase tracking-wider text-[#e5c299]">Most popular</span>}
                </div>
                <ul className="space-y-2.5">
                  {COMPARISONS.map((row) => (
                    <li key={row.amenity} className="flex items-center justify-between gap-4 text-xs">
                      <span className="text-[#c7c1b8]">{row.amenity}</span>
                      <span className="shrink-0">{renderIcon(row[vehicle.field])}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>

          {/* Table remains the efficient comparison view from tablet upward. */}
          <div className="hidden md:block overflow-x-auto custom-scrollbar relative z-10">
            <table aria-label="Amenities comparison by vehicle class" className="w-full text-left border-collapse min-w-[600px]">
              <thead>
                <tr className="border-b border-[#353238] text-[#f4eee4] text-[10px] font-sans uppercase tracking-[0.2em] font-bold">
                  <th scope="col" className="py-5 font-semibold text-[#c7c1b8] w-1/4">Amenities &amp; Logistics</th>
                  <th scope="col" className="py-5 text-center w-1/4">Executive Sedan</th>
                  <th scope="col" className="py-5 text-center w-1/4 bg-[#1b1b1f] rounded-t-xl">Premium SUV <br/><span className="text-[8px] text-[#9d9790] uppercase tracking-widest font-normal">Most Popular</span></th>
                  <th scope="col" className="py-5 text-center w-1/4">Luxury Coach</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#353238] text-sm font-sans">
                {COMPARISONS.map((row, idx) => (
                  <tr key={idx} className="hover:bg-[#121215] transition-colors">
                    <td scope="row" className="py-5 font-sans font-medium text-[#c7c1b8] tracking-wide">{row.amenity}</td>
                    <td className="py-5 text-center">{renderIcon(row.executive)}</td>
                    <td className="py-5 text-center bg-[#121215]">{renderIcon(row.luxury)}</td>
                    <td className="py-5 text-center">{renderIcon(row.premium)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

        </div>
      </section>

      {/* Concise selection cards retain a booking path without repeating the feature table. */}
      <section className="max-w-[1280px] mx-auto px-4 sm:px-6 md:px-12 pb-12 sm:pb-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {CARS.map((car) => (
            <article key={car.id} className="glass-panel rounded-2xl border border-[#c5a880]/20 p-5 sm:p-6 flex flex-col gap-4">
              <div>
                <h3 className="font-display font-bold text-xl text-[#f4eee4]">{car.name}</h3>
                <p className="text-xs text-[#f4eee4] mt-1">{car.tagline}</p>
              </div>
              <p className="text-xs text-[#c7c1b8]">{car.capacity} seats · {car.quoteOnly ? "Contact for Pricing" : `₹${car.baseFare.toLocaleString("en-IN")} / 120 km package`}</p>
              <p className="text-xs text-[#c7c1b8]">{car.quoteOnly ? "Contact us to discuss your group trip." : `Per KM: ₹${car.perKmRate}/km · Extra after 120 km: ₹${car.extraKmRate}/km`}</p>
              <button
                onClick={() => onBookCarClass(car.id)}
                className="w-full min-h-[44px] bg-[#c5a880] text-white py-3 px-4 rounded-xl text-[10px] font-bold uppercase tracking-[0.15em] mt-auto hover:opacity-90 transition-all cursor-pointer"
              >
                {car.quoteOnly ? "Request a quote" : `Book ${car.name}`}
              </button>
            </article>
          ))}
        </div>

        <div className="mt-6 sm:mt-8 flex items-start sm:items-center justify-center gap-2 rounded-xl border border-[#c5a880]/20 bg-[#121215]/80 p-3.5 sm:px-4 sm:py-3 text-left sm:text-center text-xs text-[#c7c1b8] max-w-2xl mx-auto">
          <Info className="w-4 h-4 text-[#c5a880] shrink-0 mt-0.5 sm:mt-0" />
          <span>Toll charges and parking fees are not included in the quoted price and must be paid separately by the customer.</span>
        </div>
      </section>

    </div>
  );
}
