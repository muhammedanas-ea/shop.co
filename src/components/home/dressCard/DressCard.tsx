import { memo } from "react";
import { dressCardProps } from "./types";

const DressCard = memo(({ src, title, className}:dressCardProps) => {
  return (
    <div className={className}>
      <div className="h-48 lg:h-64 relative">
        <img
          className="w-full h-full object-cover rounded-[20px] shadow-md border border-[#00000033]"
          src={src}
          alt={title}
        />
        <h1 className="absolute top-0 px-9 py-6 font-bold text-2xl lg:text-4xl">
          {title}
        </h1>
      </div>
    </div>
  );
});

export default DressCard;
