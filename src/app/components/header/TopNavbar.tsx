"use client";
import Image from "next/image";
import mmtLogo from "../../../../public/mmt-logo.avif";
import TopCard from "../ui/TopCard";

export default function topNavbar() {
  return (
    <div className="w-full bg-white/80 backdrop-blur-md border-b border-gray-200">
      <div className="mx-auto max-w-7xl px-4 py-2 flex items-center justify-between">
        {/* LEFT LOGO */}
        <div className="flex items-center">
          <Image src={mmtLogo} alt="mmt logo" className="w-32 h-10" />
        </div>

        {/* middle card */}
        <div className="hidden md:flex items-center gap-4">
          <TopCard title="List your property" subtitle="Grow your business" />
          <TopCard
            title="Introducing myBiz"
            subtitle="Business Travel Solution"
          />
          <TopCard title="MyTrips" subtitle="Manage your bookings" />
          <div className="flex items-center gap-4">
            <button className="flex items-center gap-1 px-4 py-1.5 rounded-md border text-sm font-medium hover:bg-gray-100 transition">
              Login or Create Account
            </button>
            {/* middle card */}
            <div className="hidden sm:flex items-center gap-1 cursor-pointer">
              <span>India</span>
            </div>

            <div className="hidden sm:flex items-center gap-1 cursor-pointer">
              <span>INR</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
