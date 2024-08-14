import ProductCard from "../../common/productcard/ProductCard";
import { ProductListProps } from "./types";

const ProductList = ({ title, products }: ProductListProps) => {
  return (
    <div className="my-7">
      <h1 className="font-bold text-3xl md:text-5xl sub-font text-center py-6">
        {title}
      </h1>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 py-4">
        {products?.map((product) => (
          <ProductCard
            key={product.name}
            image={product.image}
            name={product.name}
            price={product.price}
            rating={product.rating}
          />
        ))}
      </div>
      <div className="flex justify-center py-10">
        <button className="border w-full md:w-auto px-20 rounded-[62px] text-sm md:text-base font-medium py-4">
          View All
        </button>
      </div>
    </div>
  );
};

export default ProductList;
