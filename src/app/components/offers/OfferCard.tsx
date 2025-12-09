import Image from "next/image";

type OfferCardProps = {
  img: string;
  title: string;
  subtitle: string;
  category: string;
};

export default function OfferCard({
  img,
  title,
  subtitle,
  category,
}: OfferCardProps) {
  return (
    // Added w-full so it fills the "min-w-[450px]" column defined in parent
    <div className="bg-white border border-gray-200 rounded-xl p-4 shadow-sm hover:shadow-md transition w-full h-full flex">
      <div className="flex gap-4 w-full">
        <Image
          src={img}
          width={130}
          height={130}
          className="rounded-lg object-cover flex-shrink-0"
          alt={title}
        />

        <div className="flex flex-col justify-between w-full">
          <div>
            <p className="text-[10px] text-gray-500 font-semibold uppercase tracking-wide">
              {category}
            </p>
            <p className="font-bold text-black text-lg leading-tight mt-1 line-clamp-2">
              {title}
            </p>
            <p className="text-xs text-gray-500 mt-2 line-clamp-2">
              {subtitle}
            </p>
          </div>

          <button className="text-blue-600 font-bold text-xs self-end uppercase mt-2">
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
}
