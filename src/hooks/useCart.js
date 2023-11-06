import { useContext } from "react";
import { CartContext } from "../contexts/cart.context";

export const useCart = () => {
  const {
    addItemToCart,
    removeItemFromCart,
    cartItems,
    isCartOpen,
    setIsCartOpen,
    cartCount
  } = useContext(CartContext);
  return {
    addItemToCart,
    cartItems,
    isCartOpen,
    setIsCartOpen,
    removeItemFromCart,
    cartCount
  };
};
