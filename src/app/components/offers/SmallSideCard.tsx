import Image from "next/image";

type SmallSideCardProps = {
  img: string;
  title: string;
  subtitle: string;
  category: string;
};

export default function SmallSideCard({
  img,
  title,
  subtitle,
  category,
}: SmallSideCardProps) {
  return (
    <div className="bg-white border rounded-xl p-4 shadow-sm hover:shadow-md transition">
      <div className="flex gap-4">
        <Image
          src={img}
          width={120}
          height={120}
          className="rounded-md object-cover"
          alt={title}
        />

        <div className="flex flex-col justify-between">
          <div>
            <p className="text-[10px] text-gray-500 font-semibold">
              {category}
            </p>
            <p className="font-bold text-black text-lg">{title}</p>
            <p className="text-sm text-gray-600 mt-1">{subtitle}</p>
          </div>

          <button className="text-blue-600 font-semibold text-sm self-end">
            BOOK NOW
          </button>
        </div>
      </div>
    </div>
  );
}
