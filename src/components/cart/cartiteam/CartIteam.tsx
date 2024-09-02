import { FaMinus, FaPlus } from "react-icons/fa6";
import Typography from "../../common/typography/Typography";
import { RiDeleteBin5Fill } from "react-icons/ri";
import { CartItemProps } from "./types";

const CartItem = ({ item, isLast }: CartItemProps) => {
  const { name, size, color, price, quantity, image } = item;

  return (
    <div className={`pb-4 ${!isLast ? "border-b" : ""}`}>
      <div className="flex gap-3">
        <div className="md:w-28 md:h-28 w-24 h-24">
          <img
            className="w-full h-full object-cover rounded-[8px]"
            src={image}
            alt={name}
          />
        </div>
        <div className="w-[80%]">
          <div className="flex justify-between">
            <Typography tag="h5" className="truncate">
              {name}
            </Typography>
            <RiDeleteBin5Fill
              className="cursor-pointer"
              color="#FF3333"
              size={21}
            />
          </div>
          <p>
            Size: <span className="text-gray-500">{size}</span>
          </p>
          <p>
            Color: <span className="text-gray-500">{color}</span>
          </p>
          <div className="flex justify-between">
            <Typography tag="h3">${price}</Typography>
            <div className="flex items-center gap-4 text-lg py-1 px-5 border bg-[#F0EEED] rounded-[62px]">
              <FaMinus size={15} className="cursor-pointer" />
              <h1>{quantity}</h1>
              <FaPlus size={15} className="cursor-pointer" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
