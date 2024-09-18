import { useState } from "react";
import { StatCardProps } from "./types";

const StatCard = ({ icon, hoverColor, color, title, value }: StatCardProps) => {
  const [isHovering, setIsHovering] = useState(false);
  const toggleHover = () => setIsHovering(!isHovering);

  return (
    <div
      onMouseEnter={toggleHover}
      onMouseLeave={toggleHover}
      className={`rounded-2xl shadow-sm border p-6 transition-all duration-300 
        ${isHovering ? `bg-${hoverColor} text-white` : "text-gray-900 bg-white"}`}
    >
      <div
        className={`w-10 h-10 bg-${color} rounded-md flex items-center justify-center mb-2`}
      >
        {icon}
      </div>
      <h1 className="font-bold text-2xl admin-font">{value}</h1>
      <h2 className="text-xl text-gray-800 admin-font">{title}</h2>
    </div>
  );
};

export default StatCard;
