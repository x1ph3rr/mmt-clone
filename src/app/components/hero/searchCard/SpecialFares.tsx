"use client";
import { useState } from "react";

const fares = [
  { key: "regular", title: "Regular", subtitle: "Regular fares" },
  { key: "student", title: "Student", subtitle: "Extra discounts/baggage" },
  { key: "armed", title: "Armed Forces", subtitle: "Up to ₹600 off" },
  { key: "senior", title: "Senior Citizen", subtitle: "Up to ₹600 off" },
  { key: "doctor", title: "Doctor and Nurses", subtitle: "Up to ₹600 off" },
];

export default function SpecialFares() {
  const [active, setActive] = useState("regular");
  return (
    <div className="py-4">
      <div className="flex gap-3 flex-wrap">
        {fares.map((f) => (
          <button
            key={f.key}
            onClick={() => setActive(f.key)}
            className={`px-3 py-2 border rounded-md text-sm text-left ${
              active === f.key
                ? "border-blue-400 bg-blue-50"
                : "border-gray-200 bg-white"
            }`}
          >
            <div className="font-semibold text-gray-500 text-sm">{f.title}</div>
            <div className="text-xs text-gray-500 mt-0.5">{f.subtitle}</div>
          </button>
        ))}
      </div>
    </div>
  );
}
