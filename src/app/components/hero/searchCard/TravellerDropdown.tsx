"use client";
import { useState } from "react";

export default function TravellerDropdown() {
  const [open, setOpen] = useState(false);
  return (
    <div className="py-3 relative">
      <div
        className="flex items-center justify-between cursor-pointer"
        onClick={() => setOpen((v) => !v)}
      >
        <div>
          <div className="text-xs text-gray-500">Travellers & Class</div>
          <div className="text-2xl font-extrabold text-black">
            1 <span className="text-lg text-gray-800"> Traveller</span>
          </div>
          <div className="text-xs text-gray-500">Economy/Premium Economy</div>
        </div>
        <div className="ml-4">▾</div>
      </div>

      {open && (
        <div className="absolute right-4 top-full mt-2 w-64 bg-white border rounded-md shadow p-3 z-40">
          {/* basic controls: add/remove travellers, class select */}
          <div className="text-sm">Travellers controls (UI only)</div>
        </div>
      )}
    </div>
  );
}
