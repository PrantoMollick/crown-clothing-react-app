import { CartIconContainer, ItemCount, ShoppingIcon } from "./cart-icon.styles";
import { useCart } from "../../hooks/useCart";

const CartIcon = () => {
  const { setIsCartOpen, cartCount } = useCart();
  const toggleIsCartOpenHandler = () => setIsCartOpen((isOpen) => !isOpen);

  return (
    <CartIconContainer onClick={toggleIsCartOpenHandler}>
      <ShoppingIcon />
      <ItemCount>{cartCount}</ItemCount>
    </CartIconContainer>
  );
};

export default CartIcon;
