import Filter from "../components/categoryComponents/filter/Filter";
import Breadcrumb from "../components/common/breadcrumbs/Breadcrumb";
import ProductCard from "../components/common/productcard/ProductCard";
import { BsFilter } from "react-icons/bs";
import product1 from "../assets/productImg/image 10.png";
import product2 from "../assets/productImg/image 8 (1).png";
import product3 from "../assets/productImg/image 8.png";
import product4 from "../assets/productImg/image 9.png";
import { useState } from "react";

const breadcrumbItems = [{ text: "Home", url: "/" }, { text: "Casual" }];

const products = [
  {
    image: product1,
    name: "Gradient Graphic T-shirt",
    price: 145,
    rating: 3.5,
  },
  {
    image: product1,
    name: "Gradient Graphic T-shirt",
    price: 145,
    rating: 3.5,
  },
  {
    image: product1,
    name: "Gradient Graphic T-shirt",
    price: 145,
    rating: 3.5,
  },
  {
    image: product2,
    name: "Polo with Tipping Details",
    price: 180,
    rating: 4.5,
  },
  {
    image: product4,
    name: "Polo with Tipping Details",
    price: 180,
    rating: 4.5,
  },
  {
    image: product3,
    name: "Polo with Tipping Details",
    price: 180,
    rating: 4.5,
  },
  {
    image: product2,
    name: "Polo with Tipping Details",
    price: 180,
    rating: 4.5,
  },
  {
    image: product4,
    name: "Polo with Tipping Details",
    price: 180,
    rating: 4.5,
  },
  {
    image: product3,
    name: "Polo with Tipping Details",
    price: 180,
    rating: 4.5,
  },
];

const CategoryPage = () => {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <section>
      <Breadcrumb items={breadcrumbItems} />
      <div className="flex gap-5 py-2">
        <div
          className={`lg:w-1/4 w-full bg-white lg:block rounded-[20px] border fixed lg:static top-0 left-0 h-full z-50 lg:z-auto transform ${
            open ? "translate-x-0 overflow-y-scroll" : "-translate-x-full"
          } lg:transform-none transition-transform duration-300 ease-in-out`}
        >
          <Filter open={open} setOpen={setOpen} />
        </div>

        <div className="lg:w-3/4 w-full ">
          <div className="flex items-center justify-between py-3">
            <div className="flex items-center gap-4 lg:justify-between lg:gap-0 lg:w-full">
              <h2 className="text-2xl md:text-3xl font-bold">Casual</h2>
              <div className="flex items-center gap-5 text-sm md:text-base text-gray-600">
                <p>Showing 1-10 of 100 Products</p>
                <ul className="hidden lg:block">
                  <li>
                    Sort by: <span className="text-black">Most Popular</span>
                  </li>
                </ul>
              </div>
            </div>
            <button
              onClick={() => setOpen(!open)}
              className="bg-gray-200 lg:hidden w-8 h-8 flex items-center justify-center rounded-full"
            >
              <BsFilter size={16} />
            </button>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 py-6">
            {products.map((item) => (
              <ProductCard
                key={item.image}
                image={item.image}
                name={item.name}
                price={item.price}
                rating={item.rating}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CategoryPage;
