import { useContext } from "react";
import { CartContext } from "../contexts/cart.context";

export const useCart = () => {
  const { addItemToCart, cartItems, isCartOpen, setIsCartOpen } =
    useContext(CartContext);
  return { addItemToCart, cartItems, isCartOpen, setIsCartOpen };
};
