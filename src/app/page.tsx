import HeadWrapper from "./components/header/HeaderWrapper";
import FlightSearchWidget from "./components/home/FlightSearchWidget"; // Import the new wrapper

export default function Home() {
  return (
    <div className="bg-gray-100 min-h-screen">
      {/* 1. HERO SECTION (Background Image) */}
      {/* We keep the Header inside so it sits on top of the image */}
      <div className="relative h-[600px] bg-[url('/icons/bg6.jpg')] bg-cover">
        <div className="absolute inset-0 bg-black/30"></div>{" "}
        {/* Optional: Overlay to make text pop */}
        <HeadWrapper />
        <FlightSearchWidget />
      </div>

      {/* 2. SEARCH WIDGET SECTION (The Overlap) */}
      {/* relative z-10: Ensures it sits ON TOP of the image */}
      {/* -mt-40: Pulls the card UP by 10rem (160px) into the hero section */}
      {/* px-4: Prevents it from touching edges on mobile */}
      {/* <div className="relative z-10 -mt-60 px-4 ">
        <FlightSearchWidget />
      </div> */}
    </div>
  );
}
