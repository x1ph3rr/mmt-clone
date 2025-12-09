"use client";
import FromInput from "./FromInput";
import ToInput from "./ToInput";
import DateInput from "./DateInput";
import TravellerDropdown from "./TravellerDropdown";

export default function InputGroup() {
  return (
    <div className="border rounded-xl border-gray-300">
      <div className="grid grid-cols-5 gap-0 relative">
        <div
          className="absolute left-[20%] top-1/2 p-3.5 -translate-x-1/2 -translate-y-1/2 
                    w-2 h-2 bg-white rounded-full shadow-lg flex items-center justify-center z-20"
        >
          <span className="text-[#53b2fe]">⇌</span>
        </div>
        <div className="col-span-1 border-r border-gray-300 px-4">
          <FromInput />
        </div>
        <div className="col-span-1 border-r border-gray-300 px-4">
          <ToInput />
        </div>
        <div className="col-span-1 border-r border-gray-300 px-4">
          <DateInput type="departure" />
        </div>
        <div className="col-span-1 border-r border-gray-300 px-4">
          <DateInput type="return" />
        </div>
        <div className="col-span-1 px-4">
          <TravellerDropdown />
        </div>
      </div>
    </div>
  );
}
