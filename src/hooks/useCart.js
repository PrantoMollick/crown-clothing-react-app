import { useContext } from "react";
import { CartContext } from "../contexts/cart.context";

export const useCart = () => {
  const { isCartOpen, setIsCartOpen } = useContext(CartContext);
  return { isCartOpen, setIsCartOpen };
};
