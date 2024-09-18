import Breadcrumb from "../../components/common/breadcrumbs/Breadcrumb";
import Typography from "../../components/common/typography/Typography";
import CartItem from "../../components/cart/cartiteam/CartIteam";
import OrderSummary from "../../components/cart/ordersummary/OrderSummary";
import productImg1 from "../../assets/productImg/image 8 (1).png"

const CartPage = () => {
  const breadcrumbItems = [{ text: "Home", url: "/" }, { text: "Cart" }];

  const cartItems = [
    { id: 1,image:productImg1, name: "Gradient Graphic T-shirt", size: "Large", color: "White", price: 145, quantity: 1 },
    { id: 2,image:productImg1, name: "Gradient Graphic T-shirt", size: "Large", color: "White", price: 145, quantity: 1 },
    { id: 3,image:productImg1, name: "Gradient Graphic T-shirt", size: "Large", color: "White", price: 145, quantity: 1 },
  ];

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const tax = 45;  
  const shipping = 15; 
  const total = subtotal + tax + shipping;

  return (
    <div className="app-container mb-36 max-w-screen-2xl mx-auto">
      <Breadcrumb items={breadcrumbItems} />
      <Typography tag="h4" className="sub-font">
        Your cart
      </Typography>
      <div className="flex flex-col lg:flex-row gap-5 mt-5">
        <div className="lg:w-3/5 w-full">
          <div className="border rounded-[20px] p-5 flex flex-col gap-3">
            {cartItems.map((item,index) => (
              <CartItem key={item.id} item={item} isLast={index === cartItems.length - 1}/>
            ))}
          </div>
        </div>
        <div className="lg:w-2/5 w-full">
          <OrderSummary subtotal={subtotal} tax={tax} shipping={shipping} total={total} />
        </div>
      </div>
    </div>
  );
};

export default CartPage;
