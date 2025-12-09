"use client";
import { SlArrowDown } from "react-icons/sl";

export default function DateInput({ type }: { type: "departure" | "return" }) {
  return (
    <div className="py-3">
      <div className="flex items-center justify-between">
        <div className="flex flex-row text-xs text-gray-500">
          {type === "departure" ? "Departure" : "Return"}
          <span className="ml-1 mt-0.5 text-xs text-blue-900">
            <SlArrowDown />
          </span>
        </div>
        {/* <div className="text-xs text-black">
          <span className="text-blue-800">
            {" "}
            <SlArrowDown />
          </span>
        </div> */}
      </div>

      <div className="text-2xl font-semibold text-black mt-2">
        9 <span className="text-lg font-light">Dec'25</span>{" "}
      </div>
      <div className="text-xs text-gray-600 font-medium mt-1">
        {type === "departure" ? "Tuesday" : "Tap to add a return date"}
      </div>
    </div>
  );
}
