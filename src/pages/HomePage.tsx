import Hero from "../components/home/hero/Hero";
import ProductList from "../components/home/productList/ProductList";
import DressCard from "../components/home/dressCard/DressCard";
import dress1 from "../assets/dressStyleImg/image 11.png";
import dress2 from "../assets/dressStyleImg/image 12.png";
import dress3 from "../assets/dressStyleImg/image 13.png";
import dress4 from "../assets/dressStyleImg/image 14.png";
import product1 from "../assets/productImg/image 10.png";
import product2 from "../assets/productImg/image 8 (1).png";
import product3 from "../assets/productImg/image 8.png";
import product4 from "../assets/productImg/image 9.png";
import ReviewCard from "../components/common/reviewCard/ReviewCard";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";

const products = [
  {
    image: product1,
    name: "Gradient Graphic T-shirt",
    price: 145,
    rating: 3.5,
  },
  {
    image: product2,
    name: "Gradient Graphic T-shirt",
    price: 145,
    rating: 3.5,
  },
  {
    image: product3,
    name: "Gradient Graphic T-shirt",
    price: 145,
    rating: 3.5,
  },
  {
    image: product4,
    name: "Polo with Tipping Details",
    price: 180,
    rating: 4.5,
  },
];

const HomePage = () => {
  return (
    <section>
      <Hero />
      <div className="app-container">
        <ProductList title="New Arrivals" products={products} />
        <ProductList title="Top Selling" products={products} />
        <div className="bg-[#F0F0F0] rounded-[40px] py-8 px-6 md:px-14">
          <h1 className="font-bold text-[32px] md:text-5xl sub-font text-center px-3">
            BROWSE BY DRESS STYLE
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 rounded-[20px] pt-10">
            <DressCard src={dress1} title="Casual" />
            <DressCard src={dress2} title="Formal" className="col-span-2" />
            <DressCard src={dress3} title="Party" className="col-span-2" />
            <DressCard src={dress4} title="Gym" />
          </div>
        </div>
        <div className="flex justify-between items-end py-12">
          <h1 className="font-bold text-[32px] md:text-5xl sub-font">
            OUR HAPPY CUSTOMERS
          </h1>
          <div className="flex items-center gap-4">
            <FaArrowLeft size={22} />
            <FaArrowRight size={22} />
          </div>
        </div>
        <div className="flex gap-5 overflow-x-scroll max-w-[100vw] mb-36">
          <ReviewCard />
          <ReviewCard />
          <ReviewCard />
          <ReviewCard />
          <ReviewCard />
        </div>
      </div>
    </section>
  );
};

export default HomePage;
