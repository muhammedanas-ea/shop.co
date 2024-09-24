import { FaArrowRightLong } from "react-icons/fa6";
import Button from "../../common/button/Button";
import Typography from "../../common/typography/Typography";
import { OrderSummaryProps } from "./types";

const OrderSummary = ({
  subtotal,
  tax,
  shipping,
  total,
}: OrderSummaryProps) => {
  return (
    <div className="border rounded-[20px] p-5">
      <Typography tag="h3">Order Summary</Typography>
      <div className="py-4 border-b flex flex-col gap-3">
        <div className="flex justify-between items-center">
          <p className="text-gray-500 text-base md:text-xl">Subtotal</p>
          <Typography tag="h5">
            ${subtotal}
          </Typography>
        </div>
        <div className="flex justify-between items-center">
          <p className="text-gray-500 text-base md:text-xl">Discount (-20%)</p>
          <Typography tag="h5" className="text-[#FF3333]">
            -${tax}
          </Typography>
        </div>
        <div className="flex justify-between items-center">
          <p className="text-gray-500 text-base md:text-xl">Delivery Fee</p>
          <Typography tag="h5">
            ${shipping}
          </Typography>
        </div>
      </div>
      <div className="flex justify-between items-center py-3">
        <p className="text-base md:text-xl">Total</p>
        <Typography tag="h3">${total}</Typography>
      </div>
      <Button className="w-full py-4 mt-3" variant="solid">
        Go to Checkout <FaArrowRightLong />
      </Button>
    </div>
  );
};

export default OrderSummary;
