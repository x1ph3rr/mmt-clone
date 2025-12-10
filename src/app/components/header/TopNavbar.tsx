"use client";
import Image from "next/image";
import mmtLogo from "../../../../public/icons/mmt-logo.avif";
import TopCard from "../ui/TopCard";

export default function TopNavbar() {
  return (
    <div className="w-full py-2 relative z-50">
      <div className="mx-auto max-w-7xl px-4 py-2 flex items-center justify-between">
        {/* LEFT LOGO */}
        <div className="flex items-center">
          <Image
            src={mmtLogo}
            alt="mmt logo"
            className="w-28 h-auto object-contain"
            priority
          />
        </div>

        {/* RIGHT SECTION */}
        <div className="hidden md:flex items-center gap-6">
          {/* Navigation Cards */}
          <div className="flex items-center gap-4">
            <TopCard
              img="/icons/topcard2.png"
              title="List your property"
              subtitle="Grow your business"
            />
            <TopCard
              img="/icons/topcard3.png"
              title="Introducing myBiz"
              subtitle="Business Travel Solution"
            />
            <TopCard
              img="/icons/topcard1.png"
              title="MyTrips"
              subtitle="Manage your bookings"
            />
          </div>

          {/* ACTION BUTTONS (Login & Country) */}
          <div className="flex items-center gap-2">
            {/* 1. LOGIN BUTTON */}
            <button className="flex items-center gap-3 pl-2 pr-3 py-1.5 bg-gradient-to-r from-[#53b2fe] to-[#065af3] rounded-lg shadow-md hover:opacity-90 transition cursor-pointer">
              {/* WHITE CIRCLE CONTAINER */}
              <div className="w-7 h-7 bg-white rounded-full flex items-center justify-center p-1.5 flex-shrink-0">
                {/* RELATIVE IMAGE WRAPPER: Forces exact centering */}
                <div className="relative w-full h-full">
                  <Image
                    src="/icons/my-2.png"
                    alt="mmt-my"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>

              {/* TEXT */}
              <span className="text-[11px] font-bold text-white uppercase tracking-wide">
                Login or Create Account
              </span>

              {/* CHEVRON */}
              <span className="text-white text-[8px] font-bold">▼</span>
            </button>

            {/* 2. COUNTRY SELECTOR */}
            <div className="flex items-center gap-2 px-3 py-2 bg-white/15 rounded-lg cursor-pointer hover:bg-white/25 transition h-full border border-transparent hover:border-white/20">
              <div className="text-lg leading-none">🇮🇳</div>
              <div className="flex items-center gap-1 text-[11px] font-bold text-white">
                <span>INR</span>
                <span className="opacity-50 mx-0.5">|</span>
                <span>Eng</span>
              </div>
              <span className="text-white text-[8px] ml-1">▼</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
