import { Coffee, Package, ShoppingCart, Timer } from "phosphor-react";
import introImg from "../../../../assets/Imagem.png";
import {
  IntroContainer,
  Item,
  ItemIcon,
  ItemsContainer,
  TitleContainer,
} from "./styles";

export function Intro() {
  return (
    <IntroContainer>
      <div>
        <TitleContainer>
          <h1>Encontre o café perfeito para qualquer hora do dia</h1>
          <p>
            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
            hora
          </p>
        </TitleContainer>

        <ItemsContainer>
          <Item>
            <ItemIcon color="yellow-dark">
              <ShoppingCart size={24} weight="fill" />
            </ItemIcon>
            <span>Compra simples e segura</span>
          </Item>
          <Item>
            <ItemIcon color="gray">
              <Package size={24} weight="fill" />
            </ItemIcon>
            <span>Embalagem mantém o café intacto</span>
          </Item>
          <Item>
            <ItemIcon color="yellow">
              <Timer size={24} weight="fill" />
            </ItemIcon>
            <span>Entrega rápida e rastreada</span>
          </Item>
          <Item>
            <ItemIcon color="purple">
              <Coffee size={24} weight="fill" />
            </ItemIcon>
            <span>O café chega fresquinho até você</span>
          </Item>
        </ItemsContainer>
      </div>
      <img src={introImg} alt="Coffee" />
    </IntroContainer>
  );
}
