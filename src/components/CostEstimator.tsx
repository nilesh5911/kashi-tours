import { useState } from "react";
import { MessageCircle, Info } from "lucide-react";
import { calculateVehicleFare, CARS, type PricingOption } from "../data";

const formatINR = (amount: number) => `₹${amount.toLocaleString("en-IN", { maximumFractionDigits: 2 })}`;

export default function CostEstimator() {
  const [carId, setCarId] = useState("innova");
  const [distanceInput, setDistanceInput] = useState("24");
  const [pricingOption, setPricingOption] = useState<PricingOption>("package");
  const [passengers, setPassengers] = useState(1);
  const currentCar = CARS.find((car) => car.id === carId) ?? CARS[1];
  const validDistance = distanceInput.trim() !== "" && Number.isFinite(Number(distanceInput)) && Number(distanceInput) >= 0;
  const tripDistance = validDistance ? Number(distanceInput) : Number.NaN;
  const fare = validDistance ? calculateVehicleFare(currentCar, tripDistance, pricingOption) : null;

  return (
    <section aria-label="Trip cost calculator" className="mx-auto max-w-4xl px-3 pb-10 sm:px-6">
      <div className="rounded-2xl border border-[#c5a880]/30 bg-[#121215] p-4 shadow-[0_20px_50px_rgba(0,0,0,0.35)] sm:rounded-3xl sm:p-7">
        <div className="grid gap-5 sm:grid-cols-2">
          <div className="sm:col-span-2">
            <h2 className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#c7c1b8]">Choose your vehicle</h2>
            <div className="mt-3 grid gap-3 sm:grid-cols-3">
              {CARS.map((car) => (
                <button key={car.id} type="button" aria-pressed={carId === car.id} onClick={() => { setCarId(car.id); setPassengers((count) => Math.min(count, car.maxPassengers)); }} className={`rounded-xl border p-4 text-left transition ${carId === car.id ? "border-[#c5a880] bg-[#c5a880]/10" : "border-[#353238] bg-[#1b1b1f] hover:border-[#c5a880]/50"}`}>
                  <span className="block font-sans text-base font-semibold text-[#f4eee4]">{car.name}</span>
                  <span className="mt-1 block text-[10px] uppercase tracking-wide text-[#a59b8e]">Up to {car.maxPassengers} passengers</span>
                  <span className="mt-3 block text-xs font-semibold text-[#e5c299]">{car.quoteOnly ? "Contact for Pricing" : `${formatINR(car.baseFare)} · 120 km package`}</span>
                </button>
              ))}
            </div>
          </div>

          {!currentCar.quoteOnly && <>
            <label className="block">
              <span className="mb-2 block text-[11px] font-bold uppercase tracking-wider text-[#c7c1b8]">Trip distance (KM)</span>
              <input type="number" min="0" step="any" inputMode="decimal" value={distanceInput} onChange={(event) => setDistanceInput(event.target.value)} aria-label="Trip distance in kilometres" aria-invalid={!validDistance} className="min-h-12 w-full rounded-lg border border-[#c5a880]/30 bg-[#09090b] px-4 text-sm text-[#f4eee4] outline-none transition focus:border-[#c5a880]" placeholder="Enter total KM" />
              {!validDistance && <span className="mt-1 block text-xs text-red-400">Enter a valid distance of 0 km or more.</span>}
            </label>
            <label className="block">
              <span className="mb-2 block text-[11px] font-bold uppercase tracking-wider text-[#c7c1b8]">Passengers (max {currentCar.maxPassengers})</span>
              <select value={passengers} onChange={(event) => setPassengers(Number(event.target.value))} className="min-h-12 w-full rounded-lg border border-[#c5a880]/30 bg-[#09090b] px-4 text-sm text-[#f4eee4] outline-none transition focus:border-[#c5a880] [&>option]:bg-[#121215]">
                {Array.from({ length: currentCar.maxPassengers }, (_, index) => index + 1).map((count) => <option key={count} value={count}>{count} {count === 1 ? "passenger" : "passengers"}</option>)}
              </select>
            </label>
            <div className="sm:col-span-2">
              <span className="mb-2 block text-[11px] font-bold uppercase tracking-wider text-[#c7c1b8]">Pricing option</span>
              <div className="grid gap-3 sm:grid-cols-2">
                <button type="button" aria-pressed={pricingOption === "perKm"} onClick={() => setPricingOption("perKm")} className={`rounded-xl border p-4 text-left transition ${pricingOption === "perKm" ? "border-[#c5a880] bg-[#c5a880]/10" : "border-[#353238] bg-[#1b1b1f] hover:border-[#c5a880]/50"}`}>
                  <span className="block text-xs font-bold text-[#f4eee4]">Per KM</span><span className="mt-1 block text-[11px] text-[#c7c1b8]">{formatINR(currentCar.perKmRate)} per kilometre</span>
                </button>
                <button type="button" aria-pressed={pricingOption === "package"} onClick={() => setPricingOption("package")} className={`rounded-xl border p-4 text-left transition ${pricingOption === "package" ? "border-[#c5a880] bg-[#c5a880]/10" : "border-[#353238] bg-[#1b1b1f] hover:border-[#c5a880]/50"}`}>
                  <span className="block text-xs font-bold text-[#f4eee4]">120 KM Package</span><span className="mt-1 block text-[11px] leading-4 text-[#c7c1b8]">{formatINR(currentCar.baseFare)} up to 120 km · {formatINR(currentCar.extraKmRate)}/km after</span>
                </button>
              </div>
            </div>
            {fare && <div className="sm:col-span-2 rounded-xl border border-[#c5a880]/25 bg-[#09090b] p-4 sm:p-5">
              <div className="flex flex-wrap items-start justify-between gap-3 border-b border-white/10 pb-3">
                <div><p className="text-[10px] uppercase tracking-wider text-[#c7c1b8]">Selected vehicle</p><p className="mt-1 font-semibold text-[#f4eee4]">{currentCar.name}</p></div>
                <div className="text-right"><p className="text-[10px] uppercase tracking-wider text-[#c7c1b8]">Pricing option</p><p className="mt-1 font-semibold text-[#e5c299]">{pricingOption === "perKm" ? "Per KM" : "120 KM Package"}</p></div>
              </div>
              <div className="space-y-2 py-3 text-xs text-[#c7c1b8]">
                {pricingOption === "perKm" ? <div className="flex justify-between gap-3"><span>{tripDistance} km × {formatINR(currentCar.perKmRate)}/km</span><span className="font-mono text-[#f4eee4]">{formatINR(fare.perKmCharge)}</span></div> : <>
                  <div className="flex justify-between gap-3"><span>120 KM package</span><span className="font-mono text-[#f4eee4]">{formatINR(fare.baseFare)}</span></div>
                  {fare.extraDistanceKm > 0 && <div className="flex justify-between gap-3"><span>{fare.extraDistanceKm} extra km × {formatINR(currentCar.extraKmRate)}/km</span><span className="font-mono text-[#f4eee4]">{formatINR(fare.extraDistanceCharge)}</span></div>}
                  <p className="text-[10px] text-[#e5c299]">Additional distance rate: {formatINR(currentCar.extraKmRate)}/km after 120 km</p>
                </>}
              </div>
              <div className="flex flex-wrap items-end justify-between gap-3 border-t border-[#c5a880]/25 pt-3">
                <div><p className="text-[10px] uppercase tracking-wider text-[#c7c1b8]">Total fare</p><p className="font-display text-2xl font-bold text-[#e5c299]">{formatINR(fare.totalFare)}</p></div>
                <p className="text-right text-xs text-[#c7c1b8]">{passengers} {passengers === 1 ? "passenger" : "passengers"}<span className="mt-1 block font-semibold text-[#f4eee4]">{formatINR(fare.totalFare / passengers)} per person</span></p>
              </div>
              <div className="mt-3 flex items-center gap-2 rounded-lg bg-[#141417] border border-[#c5a880]/20 px-3 py-2 text-[11px] text-[#c7c1b8]">
                <Info className="h-3.5 w-3.5 shrink-0 text-[#c5a880]" />
                <span>Toll charges and parking fees are not included in the quoted price and must be paid separately by the customer.</span>
              </div>
            </div>}
          </>}

          {currentCar.quoteOnly && <div className="sm:col-span-2 rounded-xl border border-[#c5a880]/25 bg-[#09090b] p-5 sm:p-6">
            <p className="font-display text-xl font-semibold text-[#f4eee4]">Tempo Traveller</p>
            <p className="mt-1 text-sm font-semibold text-[#e5c299]">Contact for Pricing</p>
            <p className="mt-2 text-xs leading-5 text-[#c7c1b8]">Contact our team for a customized quotation for your group.</p>
            <div className="mt-3 flex items-center gap-2 rounded-lg bg-[#141417] border border-[#c5a880]/20 px-3 py-2 text-[11px] text-[#c7c1b8]">
              <Info className="h-3.5 w-3.5 shrink-0 text-[#c5a880]" />
              <span>Toll charges and parking fees are not included in the quoted price and must be paid separately by the customer.</span>
            </div>
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              <a href="https://wa.me/918577900710?text=Hello%20Kasi%20Tours%2C%20please%20share%20a%20Tempo%20Traveller%20quotation." target="_blank" rel="noreferrer" className="inline-flex min-h-11 items-center justify-center gap-2 rounded-lg bg-[#25D366] px-4 text-xs font-bold uppercase tracking-wide text-white"><MessageCircle className="h-4 w-4" /> WhatsApp</a>
              <a href="tel:+918577900710" className="inline-flex min-h-11 items-center justify-center rounded-lg border border-[#c5a880]/40 px-4 text-xs font-bold uppercase tracking-wide text-[#f4eee4]">Call 85779 00710</a>
            </div>
          </div>}
        </div>
      </div>
    </section>
  );
}
