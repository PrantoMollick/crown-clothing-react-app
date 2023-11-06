import { useContext } from "react";
import { CartContext } from "../contexts/cart.context";

export const useCart = () => {
  const {
    addItemToCart,
    removeItemFromCart,
    clearItemFromCart,
    cartItems,
    isCartOpen,
    setIsCartOpen,
    cartCount,
    cartTotal
  } = useContext(CartContext);

  return {
    addItemToCart,
    cartItems,
    isCartOpen,
    setIsCartOpen,
    removeItemFromCart,
    clearItemFromCart,
    cartCount,
    cartTotal
  };
};
