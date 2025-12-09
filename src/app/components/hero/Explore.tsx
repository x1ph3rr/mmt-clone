"use client";
import Image from "next/image";

const exploreItems = [
  {
    title: "Where2Go",
    subtitle: "",
    icon: "/icons/pillimg5.png",
  },
  {
    title: "Insurance",
    subtitle: "For International Trips",
    icon: "/icons/pillimg2.png",
  },
  {
    title: "Explore International Flights",
    subtitle: "Cheapest Flights to Paris, Bali, Tokyo & more",
    icon: "/icons/pillimg3.png",
  },
  {
    title: "MICE",
    subtitle: "Offsites, Events & Meetings",
    icon: "/icons/pillimg4.png",
  },
  {
    title: "Gift Cards",
    subtitle: "",
    icon: "/icons/pillimg1.png",
  },
];

export default function ExploreSection() {
  return (
    // Adjusted top margin to sit closer to the Search button
    <div className="relative w-full flex flex-col items-center">
      {/* Top Text with Arrow */}
      <div className="flex flex-row items-center gap-1 mt-10 cursor-pointer group">
        <span className="text-white text-[10px]">▼</span>
        <p className="text-xs text-white font-bold uppercase tracking-wider group-hover:opacity-90">
          Explore More
        </p>
        <span className="text-white text-[10px]">▼</span>
      </div>

      {/* Floating card - Added p-1 to create a tight white border around content */}
      <div className="bg-white rounded-full shadow-lg max-w-5xl w-full">
        {/* Grid Container */}
        <div className="grid grid-cols-5 divide-x divide-gray-200">
          {exploreItems.map((item, idx) => (
            <div
              key={idx}
              className="flex items-center gap-3 px-3 py-2 hover:bg-gray-50 transition cursor-pointer first:rounded-l-full last:rounded-r-full"
            >
              {/* Icon - Reduced size to 24px to keep height low */}
              <Image
                src={item.icon}
                alt={item.title}
                width={24}
                height={24}
                className="flex-shrink-0 object-contain"
              />

              {/* Text - Tighter leading and smaller font */}
              <div className="flex flex-col">
                <p className="font-bold text-[11px] text-gray-800 leading-3 mb-0.5">
                  {item.title}
                </p>
                {item.subtitle && (
                  <p className="text-[10px] text-gray-500 leading-3 truncate max-w-[140px]">
                    {item.subtitle}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
