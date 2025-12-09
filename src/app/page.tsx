import HeadWrapper from "./components/header/HeaderWrapper";
import FlightSearchWidget from "./components/home/FlightSearchWidget"; // Import the new wrapper
import ExploreSection from "./components/hero/Explore";
import OffersSection from "./components/offers/OfferSection";

export default function Home() {
  return (
    <div className="bg-gray-100 min-h-screen">
      {/* 1. HERO SECTION (Background Image) */}
      {/* We keep the Header inside so it sits on top of the image */}
      <div className="relative h-[690px] bg-[url('/icons/bg6.jpg')] bg-cover ">
        <HeadWrapper />
        <FlightSearchWidget />
        <ExploreSection />
      </div>
      <div className="min-h-screen pt-8">
        <OffersSection />
      </div>
    </div>
  );
}
