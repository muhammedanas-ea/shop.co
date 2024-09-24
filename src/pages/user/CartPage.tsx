import Breadcrumb from "../../components/user/common/breadcrumbs/Breadcrumb";
import Typography from "../../components/user/common/typography/Typography";
import CartItem from "../../components/user/cart/cartiteam/CartIteam";
import OrderSummary from "../../components/user/cart/ordersummary/OrderSummary";
import productImg1 from "../../assets/productImg/image 8 (1).png";
import { cartBreadcrumbItems } from "../../constants/breadcrumbItems";

const CartPage = () => {
  const cartItems = [
    {
      id: 1,
      image: productImg1,
      name: "Gradient Graphic T-shirt",
      size: "Large",
      color: "White",
      price: 145,
      quantity: 1,
    },
    {
      id: 2,
      image: productImg1,
      name: "Gradient Graphic T-shirt",
      size: "Large",
      color: "White",
      price: 145,
      quantity: 1,
    },
    {
      id: 3,
      image: productImg1,
      name: "Gradient Graphic T-shirt",
      size: "Large",
      color: "White",
      price: 145,
      quantity: 1,
    },
  ];

  return (
    <div className="app-container mb-36 max-w-screen-2xl mx-auto">
      <Breadcrumb items={cartBreadcrumbItems} />
      <Typography tag="h4" className="sub-font">
        Your cart
      </Typography>
      <div className="flex flex-col lg:flex-row gap-5 mt-5">
        <div className="lg:w-3/5 w-full">
          <div className="border rounded-[20px] p-5 flex flex-col gap-3">
            {cartItems.map((item, index) => (
              <CartItem
                key={item.id}
                item={item}
                isLast={index === cartItems.length - 1}
              />
            ))}
          </div>
        </div>
        <div className="lg:w-2/5 w-full">
          <OrderSummary subtotal={50} tax={45} shipping={15} total={5000} />
        </div>
      </div>
    </div>
  );
};

export default CartPage;
