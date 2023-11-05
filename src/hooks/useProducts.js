import { useContext } from "react";
import { ProductsContext } from "../contexts/products.context";

export const useProducts = () => {
  const { products } = useContext(ProductsContext);
  return products;
};
