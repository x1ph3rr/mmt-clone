"use client";
import Image from "next/image";
export default function ExtraRow() {
  return (
    <div className="mt-5 p-4 rounded-lg border-blue-200 flex items-center gap-3 border border-black">
      {/* Simple checkbox row */}
      <div
        className="
        w-full h-8 rounded-xl overflow-hidden 
        bg-gradient-to-r from-white via-blue-50 to-blue-100
        relative
      "
      >
        {/* DIAGONAL STRIPES */}
        <div className="absolute right-24 top-0 w-8 h-full bg-[linear-gradient(115deg,rgba(255,255,255,0)_40%,rgba(219,234,254,1)_40%)] opacity-60"></div>
        <div className="absolute right-12 top-0 w-8 h-full bg-[linear-gradient(115deg,rgba(255,255,255,0)_40%,rgba(191,219,254,1)_40%)] opacity-60"></div>
        <div className="absolute right-0 top-0 w-8 h-full bg-[linear-gradient(115deg,rgba(255,255,255,0)_40%,rgba(147,197,253,1)_40%)] opacity-60"></div>
        <div className="flex items-center gap-3 w-full">
          <input
            type="checkbox"
            className="w-4 h-4 accent-blue-600 cursor-pointer"
            id="delay-protection"
          />
          <label
            htmlFor="delay-protection"
            className="text-sm text-gray-700 cursor-pointer select-none"
          >
            <span className="font-bold text-black text-sm">
              Add Flight Delay Protection
            </span>{" "}
            Get compensation for delays of 1 hour or more
            <span className="text-blue-600 font-semibold ml-1 hover:underline">
              View Details
            </span>
          </label>

          <div className="absolute right-6 top-1/2 -translate-y-1/2">
            <Image
              src="/icons/tripDelayIcon.png"
              width={32}
              height={32}
              alt="protection icon"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
