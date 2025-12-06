import React from "react";

export default function TopCard({
  title,
  subtitle,
}: {
  title: string;
  subtitle: string;
}) {
  return (
    <div className="px-3 py-1.5 bg-gray-50 border rounded-lg shadow-sm hover:shadow-md transition cursor-pointer">
      <div className="text-[13px] font-semibold leading-none">{title}</div>
      <div className="text-[11px] text-gray-500 leading-none mt-0.5">
        {subtitle}
      </div>
    </div>
  );
}
