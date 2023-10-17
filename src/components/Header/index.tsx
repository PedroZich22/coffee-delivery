import { MapPin, ShoppingCart } from "phosphor-react";
import { Link } from "react-router-dom";
import logoImg from "/logo.svg";
import { Actions, Cart, CartCount, Location, Nav } from "./styles";
import { useCart } from "../../contexts/CartContext";

export function Header() {
  const { cart } = useCart();

  const cartSize = cart.reduce((acc, product) => {
    if (!acc.includes(product.id)) {
      acc.push(product.id);
    }
    return acc;
  }, [] as number[]).length;

  return (
    <Nav>
      <Link to="/">
        <img src={logoImg} alt="Logo" />
      </Link>
      <Actions>
        <Location>
          <MapPin size={22} weight="fill" />
          <span>São Paulo, SP</span>
        </Location>
        <Link to="/checkout">
          <Cart>
            {cartSize > 0 && <CartCount>{cartSize}</CartCount>}
            <ShoppingCart size={22} weight="fill" />
          </Cart>
        </Link>
      </Actions>
    </Nav>
  );
}
