import { Minus, Plus, ShoppingCartSimple } from "phosphor-react";
import {
  BuyButton,
  BuyButtonContainer,
  BuyContainer,
  CoffeeCardContainer,
  CoffeePrice,
  Counter,
  Tag,
  TagsContainer,
} from "./styles";
import coffeeImg from "../../../../assets/coffees/americano.png";

export function CoffeeCard() {
  return (
    <CoffeeCardContainer>
      <img src={coffeeImg} alt="" />
      <TagsContainer>
        <Tag>Tradicional</Tag>
      </TagsContainer>
      <h2>Expresso Tradicional</h2>
      <p>O tradicional café feito com água quente e grãos moídos</p>
      <BuyContainer>
        <CoffeePrice>
          R$ <strong>9,90</strong>
        </CoffeePrice>
        <BuyButtonContainer>
          <Counter>
            <button>
              <Minus weight="fill" />
            </button>
            <span>0</span>
            <button>
              <Plus weight="fill" />
            </button>
          </Counter>
          <BuyButton>
            <ShoppingCartSimple size={22} weight="fill" />
          </BuyButton>
        </BuyButtonContainer>
      </BuyContainer>
    </CoffeeCardContainer>
  );
}
