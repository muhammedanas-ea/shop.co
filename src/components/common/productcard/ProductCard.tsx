import { Link } from "react-router-dom";
import { productProps } from "./types";
import Typography from "../typography/Typography";

const ProductCard = ({ image, name, price, rating }: productProps) => {
  return (
    <Link to={"/productdetails"}>
      <div className="bg-white">
        <div className="md:h-72 h-44 w-full">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover rounded-[20px]"
          />
        </div>
        <Typography tag="h5" className="my-2 truncate">
          {name}
        </Typography>
        <div className="flex flex-col gap-1">
          <p className="text-yellow-500 md:text-sm text-xs">
            ★★★★ <span className="text-black">{rating}</span>
          </p>
          <Typography tag="h3">${price}</Typography>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
