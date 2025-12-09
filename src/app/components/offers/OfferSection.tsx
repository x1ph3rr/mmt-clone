"use client";
import { useRef } from "react";
import OfferTabs from "./OfferTabs";
import OfferCard from "./OfferCard";
import { offersData } from "./data";

export default function OffersSection() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  // Function to scroll the container
  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const scrollAmount = 400; // Adjust scroll distance as needed
      scrollContainerRef.current.scrollBy({
        left: direction === "right" ? scrollAmount : -scrollAmount,
        behavior: "smooth",
      });
    }
  };

  // Helper to chunk data into pairs of 2 (for the vertical stack)
  // This creates the [Card]
  //                 [Card]  layout per column
  const chunkedOffers = [];
  for (let i = 0; i < offersData.length; i += 2) {
    chunkedOffers.push(offersData.slice(i, i + 2));
  }

  return (
    <div className="bg-white max-w-7xl mx-auto mt-10 px-6 py-8 rounded-2xl shadow-sm">
      {/* Header Row */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex flex-row gap-6">
          <h2 className="text-3xl mt-2 text-black font-extrabold opacity-80">
            Offers
          </h2>
          <OfferTabs />
        </div>

        {/* Navigation Buttons */}
        <div className="flex items-center gap-4">
          <button className="text-blue-600 font-semibold text-sm hover:underline">
            VIEW ALL
          </button>
          <button
            onClick={() => scroll("left")}
            className="w-10 h-10 flex items-center justify-center border border-gray-300 rounded-full shadow-sm hover:bg-gray-50 transition"
          >
            ←
          </button>
          <button
            onClick={() => scroll("right")}
            className="w-10 h-10 flex items-center justify-center border border-gray-300 rounded-full shadow-sm hover:bg-gray-50 transition"
          >
            →
          </button>
        </div>
      </div>

      {/* HORIZONTAL SCROLL CONTAINER */}
      {/* 1. flex: Makes items sit in a row */}
      {/* 2. overflow-x-auto: Allows scrolling */}
      {/* 3. no-scrollbar: Custom class to hide the bar (see CSS below) */}
      <div
        ref={scrollContainerRef}
        className="flex gap-6 overflow-x-auto scroll-smooth pb-4 no-scrollbar"
      >
        {chunkedOffers.map((pair, index) => (
          <div key={index} className="min-w-[450px] flex flex-col gap-6">
            {/* Render the pair of cards stacked vertically */}
            {pair.map((offer) => (
              <OfferCard key={offer.id} {...offer} />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
