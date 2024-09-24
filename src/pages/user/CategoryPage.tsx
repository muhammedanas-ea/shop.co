import { Suspense, useState, lazy } from "react";
import Filter from "../../components/user/category/filter/Filter";
import Breadcrumb from "../../components/user/common/breadcrumbs/Breadcrumb";
import { BsFilter } from "react-icons/bs";
import useProducts from "../../hooks/useProducts";
import ProductCardSkeleton from "../../components/user/common/productcard/ProductCardSkelton";
import { categoryBreadcrumbItems } from "../../constants/breadcrumbItems";
const ProductCard = lazy(() =>
  import("../../components/user/common/productcard/ProductCard")
);

const CategoryPage = () => {
  const [open, setOpen] = useState<boolean>(false);
  const products = useProducts();

  return products ? (
    <section className="app-container mb-36 max-w-screen-2xl mx-auto">
      <Breadcrumb items={categoryBreadcrumbItems} />
      <div className="flex gap-5 py-2">
        <div
          className={`lg:w-1/4 w-full bg-white lg:block  rounded-[20px] border fixed lg:static top-0 left-0 h-full z-50 lg:z-auto transform ${
            open ? "translate-x-0 overflow-y-scroll" : "-translate-x-full"
          } lg:transform-none transition-transform duration-300 ease-in-out`}
        >
          <Filter open={open} setOpen={setOpen} />
        </div>

        <div className="lg:w-3/4 w-full">
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

          <div className=" grid grid-cols-2 md:grid-cols-3 gap-4 py-6">
            {products &&
              products.map((item) => (
                <Suspense fallback={<ProductCardSkeleton />}>
                  <ProductCard
                    key={item.id}
                    image={item.images[0]}
                    name={item.title}
                    price={item.price}
                    rating={item.rating}
                  />
                </Suspense>
              ))}
          </div>
        </div>
      </div>
    </section>
  ) : (
    <div className="h-screen flex flex-col items-center justify-center bg-gray-100">
      <div className="text-center">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">
          Oops! Product Not Available
        </h1>
        <p className="text-lg text-gray-600 mb-8">
          The product you're looking for is currently unavailable. Please check
          again later or browse similar items below.
        </p>
        <button className="px-6 py-3 bg-blue-600 text-white rounded-full shadow hover:bg-blue-700 transition">
          Back to Homepage
        </button>
      </div>
    </div>
  );
};

export default CategoryPage;
