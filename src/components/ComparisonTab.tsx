import React from "react";
import { Check, X, Shield, Award, Sparkles, AlertCircle } from "lucide-react";
import { COMPARISONS, CARS } from "../data";

interface ComparisonTabProps {
  onBookCarClass: (carId: string) => void;
}

export default function ComparisonTab({ onBookCarClass }: ComparisonTabProps) {
  
  const renderIcon = (val: boolean | string) => {
    if (val === true) {
      return (
        <div className="flex justify-center items-center">
          <Check className="w-5 h-5 text-[#8c7355] bg-[#e5c299]/20 p-1 rounded-full stroke-[3]" />
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
          <span className="text-[10px] font-bold text-[#c5a880] bg-[#c5a880]/10 px-3 py-1 rounded-full border border-[#c5a880]/20 uppercase tracking-widest">
            Available +
          </span>
        </div>
      );
    }
    return <span className="text-gray-600/50 font-sans text-center text-sm font-bold">—</span>;
  };

  return (
    <div className="space-y-16">
      
      {/* Editorial Header Section */}
      <section className="relative text-center py-20 max-w-4xl mx-auto px-6 space-y-6 pt-32">
        <span className="text-[#8c7355] font-sans text-[10px] font-bold uppercase tracking-[0.4em] block">
          Elite Travel Experiences
        </span>
        <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold text-[#141416] leading-tight">
          Our Premium Fleet — <br /><span className="italic text-gold-gradient font-normal">Luxury on Wheels</span>
        </h1>
        <div className="h-0.5 w-24 bg-gradient-to-r from-transparent via-[#c5a880] to-transparent mx-auto"></div>
        <p className="font-sans text-sm md:text-base text-gray-500 leading-loose max-w-2xl mx-auto font-light tracking-wide">
          Experience the ancient city of Varanasi in unparalleled comfort. Our curated selection of vehicles ensures a seamless journey for spiritual seekers, business executives, and luxury family voyagers alike.
        </p>
      </section>

      {/* Comparison Grid Table matching exact screen spec */}
      <section className="max-w-[1280px] mx-auto px-6 md:px-12">
        <div className="bg-[#0d0d0f] text-white rounded-3xl overflow-hidden luxury-shadow border border-[#c5a880]/20 p-8 md:p-12 space-y-10 relative">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-10"></div>
          
          <div className="text-center space-y-3 border-b border-[#c5a880]/10 pb-8 relative z-10">
            <h2 className="font-display text-3xl sm:text-4xl font-bold">Compare Luxury Classes</h2>
            <p className="text-xs text-gray-400 font-sans tracking-widest uppercase">Choose the perfect tier for your family and spiritual pilgrimage.</p>
          </div>

          {/* Table Container */}
          <div className="overflow-x-auto custom-scrollbar relative z-10">
            <table className="w-full text-left border-collapse min-w-[600px]">
              <thead>
                <tr className="border-b border-[#c5a880]/20 text-[#c5a880] text-[10px] font-sans uppercase tracking-[0.2em] font-bold">
                  <th className="py-5 font-semibold text-gray-300 w-1/4">Amenities &amp; Logistics</th>
                  <th className="py-5 text-center w-1/4">Executive Sedan</th>
                  <th className="py-5 text-center w-1/4 bg-white/5 rounded-t-xl">Premium SUV <br/><span className="text-[8px] text-gray-400 uppercase tracking-widest font-normal">Most Popular</span></th>
                  <th className="py-5 text-center w-1/4">Luxury Coach</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#c5a880]/10 text-sm font-sans">
                {COMPARISONS.map((row, idx) => (
                  <tr key={idx} className="hover:bg-white/5 transition-colors">
                    <td className="py-5 font-sans font-medium text-gray-300 tracking-wide">{row.amenity}</td>
                    <td className="py-5 text-center">{renderIcon(row.executive)}</td>
                    <td className="py-5 text-center bg-white/5">{renderIcon(row.luxury)}</td>
                    <td className="py-5 text-center">{renderIcon(row.premium)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

        </div>
      </section>

      {/* Grid of details listing physical features */}
      <section className="max-w-[1280px] mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-3 gap-8 pb-16">
        
        {/* Tier 1 */}
        <div className="bg-white rounded-3xl border border-gray-100 p-8 flex flex-col justify-between hover:border-[#c5a880]/50 transition-all duration-300 luxury-shadow-hover">
          <div className="space-y-6">
            <div className="flex justify-between items-center pb-4 border-b border-gray-100">
              <h4 className="font-display font-bold text-xl text-[#141416]">Executive Sedan</h4>
              <span className="text-[10px] uppercase tracking-widest text-gray-400">Swift Dzire</span>
            </div>
            <p className="text-xs text-gray-500 leading-relaxed font-light">Highly efficient and compact luxury. Ideal for single travellers, business, and quick airport transfers who prioritize punctuality and simple, clean travel.</p>
            <ul className="text-xs space-y-3 text-gray-600 font-medium">
              <li className="flex items-start gap-2"><Check className="w-3.5 h-3.5 text-[#c5a880] mt-0.5" /> AC climate controls</li>
              <li className="flex items-start gap-2"><Check className="w-3.5 h-3.5 text-[#c5a880] mt-0.5" /> Clean sanitized interiors</li>
              <li className="flex items-start gap-2"><Check className="w-3.5 h-3.5 text-[#c5a880] mt-0.5" /> Basic mineral water</li>
              <li className="flex items-start gap-2"><Check className="w-3.5 h-3.5 text-[#c5a880] mt-0.5" /> Expert local route guidance</li>
            </ul>
          </div>
          <button 
            onClick={() => onBookCarClass("dzire")}
            className="w-full bg-[#f5f2eb] text-[#8c7355] border border-[#e5c299]/50 py-3.5 rounded-xl text-[10px] font-bold uppercase tracking-[0.2em] mt-8 hover:bg-[#c5a880] hover:text-white transition-all cursor-pointer shadow-sm"
          >
            Select Sedan
          </button>
        </div>

        {/* Tier 2 */}
        <div className="bg-[#1c1d21] rounded-3xl border border-[#c5a880]/30 p-8 flex flex-col justify-between hover:shadow-[0_20px_40px_rgba(197,168,128,0.15)] transition-all duration-300 relative transform md:-translate-y-4">
          <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-[#c5a880] to-[#8c7355] text-white text-[9px] font-sans font-bold uppercase tracking-widest px-4 py-1.5 rounded-full shadow-md">
            Recommended Choice
          </span>
          <div className="space-y-6 pt-2">
            <div className="flex justify-between items-center pb-4 border-b border-[#c5a880]/20">
              <h4 className="font-display font-bold text-xl text-white">Premium SUV</h4>
              <span className="text-[10px] uppercase tracking-widest text-[#c5a880]">Innova Crysta</span>
            </div>
            <p className="text-xs text-gray-400 leading-relaxed font-light">Spacious luxurious seating, perfect for families and spiritual pilgrimage circles. Equipped with luxury leather captain seats and superior shock absorbs.</p>
            <ul className="text-xs space-y-3 text-gray-300 font-medium">
              <li className="flex items-start gap-2"><Check className="w-3.5 h-3.5 text-[#c5a880] mt-0.5" /> Ultra premium leather seats</li>
              <li className="flex items-start gap-2"><Check className="w-3.5 h-3.5 text-[#c5a880] mt-0.5" /> High-speed on-board Wi-Fi</li>
              <li className="flex items-start gap-2"><Check className="w-3.5 h-3.5 text-[#c5a880] mt-0.5" /> Unlimited chilled water &amp; snacks</li>
              <li className="flex items-start gap-2"><Check className="w-3.5 h-3.5 text-[#c5a880] mt-0.5" /> English &amp; Hindi speaking guide</li>
            </ul>
          </div>
          <button 
            onClick={() => onBookCarClass("innova")}
            className="w-full bg-gradient-to-r from-[#c5a880] to-[#8c7355] text-white py-3.5 rounded-xl text-[10px] font-bold uppercase tracking-[0.2em] mt-8 hover:opacity-90 transition-all cursor-pointer shadow-md"
          >
            Select Premium SUV
          </button>
        </div>

        {/* Tier 3 */}
        <div className="bg-white rounded-3xl border border-gray-100 p-8 flex flex-col justify-between hover:border-[#c5a880]/50 transition-all duration-300 luxury-shadow-hover">
          <div className="space-y-6">
            <div className="flex justify-between items-center pb-4 border-b border-gray-100">
              <h4 className="font-display font-bold text-xl text-[#141416]">Luxury Coach</h4>
              <span className="text-[10px] uppercase tracking-widest text-gray-400">Tempo Traveller</span>
            </div>
            <p className="text-xs text-gray-500 leading-relaxed font-light">Curated for larger groups, spiritual group tours and wedding event arrivals. Featuring extensive luggage storage, rear entertainment, and privacy drapes.</p>
            <ul className="text-xs space-y-3 text-gray-600 font-medium">
              <li className="flex items-start gap-2"><Check className="w-3.5 h-3.5 text-[#c5a880] mt-0.5" /> Tinted privacy screens &amp; drapes</li>
              <li className="flex items-start gap-2"><Check className="w-3.5 h-3.5 text-[#c5a880] mt-0.5" /> Heavy dual AC blowers</li>
              <li className="flex items-start gap-2"><Check className="w-3.5 h-3.5 text-[#c5a880] mt-0.5" /> USB charging ports at each seat</li>
              <li className="flex items-start gap-2"><Check className="w-3.5 h-3.5 text-[#c5a880] mt-0.5" /> Professional luggage assistance</li>
            </ul>
          </div>
          <button 
            onClick={() => onBookCarClass("tempo")}
            className="w-full bg-[#f5f2eb] text-[#8c7355] border border-[#e5c299]/50 py-3.5 rounded-xl text-[10px] font-bold uppercase tracking-[0.2em] mt-8 hover:bg-[#c5a880] hover:text-white transition-all cursor-pointer shadow-sm"
          >
            Select Coach
          </button>
        </div>

      </section>

    </div>
  );
}
