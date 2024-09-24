import { memo } from "react";
import Button from "../../common/button/Button";
import ProductCard from "../../common/productcard/ProductCard";
import Typography from "../../common/typography/Typography";
import { ProductListProps } from "./types";

const ProductList = memo(({ title, products }: ProductListProps) => {
  return (
    <div className="my-7">
      <Typography tag="h2" className="text-center py-6">
        {title}
      </Typography>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 py-4">
        {products?.map((product) => (
          <ProductCard
            key={product.image}
            image={product.image}
            name={product.name}
            price={product.price}
            rating={product.rating}
          />
        ))}
      </div>
      <div className="flex justify-center py-10">
        <Button className="text-sm md:text-base font-medium py-4 w-full md:w-auto px-20" variant="outline">View All</Button>
      </div>
    </div>
  );
});

export default ProductList;
