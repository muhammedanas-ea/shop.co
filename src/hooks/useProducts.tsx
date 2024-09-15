import { useEffect, useState } from "react";
import { ProductProps } from "../types/types";

const useProducts = () => {
  const [products, setProducts] = useState<ProductProps[]>([]);
  const fetchProducts = async () => {
    try {
      const res = await fetch("https://api.escuelajs.co/api/v1/products/");
      const json = await res.json();
      if (json) {
        setProducts(json);
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchProducts();
  }, []);
  return products;
};

export default useProducts;
