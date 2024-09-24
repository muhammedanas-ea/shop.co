import { memo } from "react";
import { Suspense, lazy } from "react";
import Button from "../../common/button/Button";
import Typography from "../../common/typography/Typography";
import { ProductListProps } from "./types";
import ProductCardSkeletonList from "../../common/productcard/ProductCardSkeltonList";
const ProductCard = lazy(() => import("../../common/productcard/ProductCard"));

const ProductList = memo(({ title, products }: ProductListProps) => {
  return products ? (
    <div className="my-7">
      <Typography tag="h2" className="text-center py-6">
        {title}
      </Typography>
      <Suspense fallback={<ProductCardSkeletonList count={products.length} />}>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 py-4">
          {products.map((product) => (
            <ProductCard
              key={product.image}
              image={product.image}
              name={product.name}
              price={product.price}
              rating={product.rating}
            />
          ))}
        </div>
      </Suspense>
      <div className="flex justify-center py-10">
        <Button
          className="text-sm md:text-base font-medium py-4 w-full md:w-auto px-20"
          variant="outline"
        >
          View All
        </Button>
      </div>
    </div>
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
});

export default ProductList;
