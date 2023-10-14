import { ShoppingCartSimple } from "phosphor-react";
import {
  BuyButton,
  BuyButtonContainer,
  BuyContainer,
  CoffeeCardContainer,
  CoffeePrice,
  Tag,
  TagsContainer,
} from "./styles";
import { Counter } from "../../../../components/Counter";
import { Link } from "react-router-dom";

type CoffeeCardProps = {
  coffee: {
    id: number;
    name: string;
    description: string;
    tags: string[];
    price: number;
    image: string;
  };
};

export function CoffeeCard({ coffee }: CoffeeCardProps) {
  const priceFormatted = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(coffee.price);

  return (
    <CoffeeCardContainer>
      <img src={coffee.image} alt="" />
      <TagsContainer>
        {coffee.tags.map((tag) => (
          <Tag key={tag}>{tag}</Tag>
        ))}
      </TagsContainer>
      <h2>{coffee.name}</h2>
      <p>{coffee.description}</p>
      <BuyContainer>
        <CoffeePrice>
          <strong>{priceFormatted}</strong>
        </CoffeePrice>
        <BuyButtonContainer>
          <Counter coffee={coffee} />
          <Link to="/checkout">
            <BuyButton>
              <ShoppingCartSimple size={22} weight="fill" />
            </BuyButton>
          </Link>
        </BuyButtonContainer>
      </BuyContainer>
    </CoffeeCardContainer>
  );
}
