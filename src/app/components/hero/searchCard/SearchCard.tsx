"use client";
import TripTabs from "./TripTabs";
import InputGroup from "./InputGroup";
import SpecialFares from "./SpecialFares";
import ExtraRow from "./ExtraRow";

export default function SearchCard() {
  return (
    <div className="w-full max-w-7xl mx-auto bg-white p-5 relative">
      <TripTabs />
      <InputGroup />
      <SpecialFares />
      <ExtraRow />
    </div>
  );
}
