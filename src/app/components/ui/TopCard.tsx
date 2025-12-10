import Image from "next/image";

export default function TopCard({
  title,
  subtitle,
  img,
}: {
  title: string;
  subtitle: string;
  img: string;
}) {
  return (
    // OUTER CONTAINER: Flex Row -> Puts Icon Left and Text Right
    <div className="flex items-center gap-3 px-2 py-2 hover:bg-white/10 rounded-lg transition cursor-pointer">
      {/* 1. LEFT SIDE: The Icon */}
      {/* flex-shrink-0 prevents the icon from squishing */}
      <div className="relative w-8 h-8 flex-shrink-0">
        <Image
          src={img}
          alt={title}
          fill // This ensures the image fills the 8x8 container perfectly
          className="object-contain"
        />
      </div>

      {/* 2. RIGHT SIDE: The Text Column */}
      <div className="flex flex-col">
        {/* Title: White & Bold */}
        <span className="text-[12px] font-bold text-white leading-tight">
          {title}
        </span>

        {/* Subtitle: Gray & Smaller */}
        <span className="text-[10px] text-gray-400 leading-tight mt-0.5">
          {subtitle}
        </span>
      </div>
    </div>
  );
}
