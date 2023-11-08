import { Outlet, Link } from "react-router-dom";

import { ReactComponent as CrownLogo } from "../../assets/crown.svg";
import { signOutUser } from "../../utils/firebase/firebase.utils";
import CartIcon from "../../components/cart-icon/cart-icon.component";
import { useUser } from "../../hooks/useUser";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";
import { useCart } from "../../hooks/useCart";

import {
  LogoContainer,
  NavLink,
  NavLinkContainer,
  NavigationContainer
} from "./navigation.styles";

const Navigation = () => {
  const { currentUser } = useUser();
  const { isCartOpen } = useCart();

  return (
    <>
      <NavigationContainer>
        <LogoContainer to="/">
          <CrownLogo className="logo" />
        </LogoContainer>

        <NavLinkContainer>
          <NavLink className="nav-link" to="/shop">
            SHOP
          </NavLink>
          {currentUser ? (
            <span className="nav-link" onClick={signOutUser}>
              SIGN OUT
            </span>
          ) : (
            <NavLink className="nav-link" to="/auth">
              SIGN IN
            </NavLink>
          )}
          <CartIcon />
        </NavLinkContainer>
        {isCartOpen && <CartDropdown />}
      </NavigationContainer>
      <Outlet />
    </>
  );
};

export default Navigation;
