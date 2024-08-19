import { Link } from "react-router-dom";
import { productProps } from "./types";

const ProductCard = ({ image, name, price, rating }: productProps) => {
  return (
    <Link to={"/productdetails"}><div className="bg-white" >
      <div className="md:h-72 h-44 w-full">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover rounded-[20px]"
        />
      </div>
      <h3 className="font-bold text-base md:text-xl my-2 truncate">{name}</h3>
      <div className="flex flex-col gap-1">
        <p className="text-yellow-500 md:text-sm text-xs">
          ★★★★ <span className="text-black">{rating}</span>
        </p>
        <h3 className="text-black font-bold md:text-2xl text-xl">${price}</h3>
      </div>
    </div>
    </Link>
  );
};

export default ProductCard;
