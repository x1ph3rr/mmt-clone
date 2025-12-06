"use client";
import Image from "next/image";
import { useState } from "react";
import categories from "../../../../lib/constants";

export default function CategoryBar() {
  const [active, setActive] = useState("Flights");

  return (
    <div className="w-full">
      <div className="bg-white rounded-xl shadow-sm mx-auto max-w-6xl ">
        <div className="mx-auto px-4 py-2">
          <div className="grid grid-cols-12 gap-4">
            {categories.map((item) => (
              <button
                key={item.label}
                onClick={() => setActive(item.label)}
                className={`
                flex flex-col items-center justify-center text-center whitespace-normal 
                ${
                  active === item.label
                    ? "text-[#008cff] font-bold"
                    : "text-black"
                }
              `}
              >
                <Image
                  src={active === item.label ? item.activeIcon : item.icon}
                  alt={item.label}
                  width={42}
                  height={42}
                  className={`${active === item.label ? null : "opacity-80"}`}
                />
                <span className="text-[13px]">{item.label}</span>
                {active === item.label && (
                  <div className="w-8 h-[3px] bg-blue-600 rounded-full" />
                )}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
