import ProductCardSkeleton from "./ProductCardSkelton";

const ProductCardSkeletonList = ({ count }: { count: number }) => {
    return (
      <>
        {Array.from({ length: count }).map((_, index) => (
          <ProductCardSkeleton key={index} />
        ))}
      </>
    );
  };
export default ProductCardSkeletonList