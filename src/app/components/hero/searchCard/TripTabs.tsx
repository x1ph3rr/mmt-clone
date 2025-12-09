"use client";
import { useState } from "react";

export default function TripTabs() {
  const [type, setType] = useState<"One Way"|"Round Trip"|"Multi City">("One Way");
  const options = ["One Way", "Round Trip", "Multi City"] as const;


  return (
    <div className="mb-4 flex items-center gap-6">
    {options.map((opt) => (
      <button
        key={opt}
        onClick={() => setType(opt)}
        className="flex items-center gap-2 cursor-pointer select-none"
      >
        {/* Radio Circle */}
        <span
          className={`
            w-4 h-4 rounded-full border flex items-center justify-center
            ${
              type === opt
                ? "border-blue-600 bg-blue-600"
                : "border-gray-400 bg-white"
            }
          `}
        >
          {/* Inner white circle when active */}
          {type === opt && (
            <span className="block w-1.5 h-1.5 bg-white rounded-full"></span>
          )}
        </span>

        {/* Label */}
        <span
          className={`text-sm font-medium ${
            type === opt ? "text-blue-600" : "text-gray-600"
          }`}
        >
          {opt}
        </span>
      </button>
    ))}
  </div>
  );
}
