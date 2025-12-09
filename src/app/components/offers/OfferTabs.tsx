"use client";
import { useState } from "react";

const tabs = [
  "All Offers",
  "Flights",
  "Hotels",
  "Holidays",
  "Trains",
  "Visa",
  "Cabs",
  "Bank Offers",
];

export default function OfferTabs() {
  const [active, setActive] = useState("All Offers");

  return (
    <div className="flex gap-6 mt-4 border-b border-gray-300 pb-2">
      <div>
        <hr className="h-px bg-neutral-quaternary border-0" />
      </div>
      {tabs.map((tab) => (
        <button
          key={tab}
          onClick={() => setActive(tab)}
          className="relative pb-2 text-sm"
        >
          <span
            className={`${
              active === tab ? "text-blue-600 font-semibold" : "text-gray-600"
            }`}
          >
            {tab}
          </span>

          {active === tab && (
            <div className="absolute left-0 right-0 mx-auto h-[2px] bg-blue-600 rounded-full bottom-0"></div>
          )}
        </button>
      ))}
    </div>
  );
}
