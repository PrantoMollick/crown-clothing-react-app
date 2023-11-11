import { CartIconContainer, ItemCount, ShoppingIcon } from "./cart-icon.styles";
import { useCart } from "../../hooks/useCart";

const CartIcon = () => {
  const { setIsCartOpen, cartCount, isCartOpen } = useCart();
  const toggleIsCartOpenHandler = () => setIsCartOpen(!isCartOpen);

  return (
    <CartIconContainer onClick={toggleIsCartOpenHandler}>
      <ShoppingIcon />
      <ItemCount>{cartCount}</ItemCount>
    </CartIconContainer>
  );
};

export default CartIcon;
