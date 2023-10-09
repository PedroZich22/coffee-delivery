import { MapPin, ShoppingCart } from "phosphor-react";
import { Link } from "react-router-dom";
import logoImg from "../../assets/logo.svg";
import { Actions, Cart, Location, Nav } from "./styles";

export function Header() {
  return (
    <Nav>
      <img src={logoImg} alt="Logo" />
      <Actions>
        <Location>
          <MapPin size={22} weight="fill" />
          <span>São Paulo, SP</span>
        </Location>
        <Link to="/checkout">
          <Cart>
            <ShoppingCart size={22} weight="fill" />
          </Cart>
        </Link>
      </Actions>
    </Nav>
  );
}
