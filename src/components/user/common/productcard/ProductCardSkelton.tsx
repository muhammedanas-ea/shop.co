const ProductCardSkeleton = () => {
  return (
    <div className="bg-white animate-pulse">
      <div className="md:h-72 h-44 w-full bg-gray-300 rounded-[20px]"></div>
      <div className="my-2 h-5 w-3/4 bg-gray-300 rounded"></div>
      <div className="flex flex-col gap-1">
        <div className="h-4 w-1/2 bg-gray-300 rounded"></div>
        <div className="h-6 w-1/4 bg-gray-300 rounded"></div>
      </div>
    </div>
  );
};

export default ProductCardSkeleton;
