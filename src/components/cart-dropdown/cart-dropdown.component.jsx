import { useNavigate } from "react-router-dom";

import Button from "../button/button.component";
import CartItem from "../cart-item/cart-item.component";
import { useCart } from "../../hooks/useCart";

import {
  CarDropdownContainer,
  CartItems,
  EmptyMessage
} from "./cart-dropdown-styles";

const CartDropdown = () => {
  const navigate = useNavigate();
  const { cartItems, setIsCartOpen } = useCart();

  const goToCheckoutHandler = () => {
    navigate("/checkout");
    setIsCartOpen(false);
  };

  return (
    <CarDropdownContainer>
      <CartItems>
        {cartItems.length ? (
          cartItems?.map((item) => <CartItem key={item.id} cartitem={item} />)
        ) : (
          <EmptyMessage>Your Cart is empty</EmptyMessage>
        )}
      </CartItems>
      <Button onClick={goToCheckoutHandler}>Go TO CHECKOUT</Button>
    </CarDropdownContainer>
  );
};

export default CartDropdown;
