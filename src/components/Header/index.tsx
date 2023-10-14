import { MapPin, ShoppingCart } from "phosphor-react";
import { Link } from "react-router-dom";
import logoImg from "../../assets/logo.svg";
import { Actions, Cart, CartCount, Location, Nav } from "./styles";
import { useContext } from "react";
import { CoffeesContext } from "../../contexts/CoffeeContext";

export function Header() {
  const { quantity } = useContext(CoffeesContext);

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
            {quantity > 0 && <CartCount>{quantity}</CartCount>}
            <ShoppingCart size={22} weight="fill" />
          </Cart>
        </Link>
      </Actions>
    </Nav>
  );
}
