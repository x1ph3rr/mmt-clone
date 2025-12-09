"use client";
import TripTabs from "./searchCard/TripTabs";
import InputGroup from "./searchCard/InputGroup";
import SpecialFares from "./searchCard/SpecialFares";
import ExtraRow from "./searchCard/ExtraRow";

export default function SearchCard() {
  return (
    <div className="w-full p-8 pt-4">
      <TripTabs />
      <InputGroup />
      <SpecialFares />
      <ExtraRow />
    </div>
  );
}
