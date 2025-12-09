"use client";
import CategoryBar from "../header/CategoryBar";
import SearchCard from "../hero/searchCard/SearchCard";

export default function FlightSearchWidget() {
  return (
    <div className="relative mx-auto max-w-7xl -mt-12">
      {/* THE MAIN WHITE CARD */}
      <div className="bg-white rounded-xl shadow-lg border border-gray-100 pb-6 relative z-10">
        {/* Top Section: Categories */}
        {/* <div className="pt-2 px-2">
          <CategoryBar />
        </div> */}

        {/* Bottom Section: Inputs */}
        <div className="px-6 pb-4 mt-12">
          <SearchCard />
        </div>
      </div>

      {/* THE FLOATING SEARCH BUTTON */}
      {/* Positioned absolutely relative to the wrapper, centered, and pulled down */}
      <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 z-20">
        <button className="bg-gradient-to-r from-[#53b2fe] to-[#065af3] hover:from-blue-500 hover:to-blue-700 text-white text-2xl font-bold py-2 px-16 rounded-full shadow-xl uppercase transition-transform hover:scale-105 active:scale-95">
          Search
        </button>
      </div>
    </div>
  );
}
