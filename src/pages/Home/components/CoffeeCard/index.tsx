import { Minus, Plus, ShoppingCartSimple } from "phosphor-react";
import {
  BuyButton,
  BuyButtonContainer,
  BuyContainer,
  CoffeeCardContainer,
  CoffeePrice,
  Tag,
  TagsContainer,
  CounterContainer,
} from "./styles";
import { formatPrice } from "../../../../utils/format";
import { useState } from "react";
import { CartCoffee } from "../../../../types";
import { useCart } from "../../../../contexts/CartContext";

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
  const { updateCoffeeAmount } = useCart();
  const [selectedCoffees, setSelectedCoffees] = useState<CartCoffee>({
    ...coffee,
    amount: 0,
  });

  function handleAddCoffee() {
    setSelectedCoffees({
      ...selectedCoffees,
      amount: selectedCoffees.amount + 1,
    });
  }

  function handleRemoveCoffee() {
    if (selectedCoffees.amount <= 0) return;
    setSelectedCoffees({
      ...selectedCoffees,
      amount: selectedCoffees.amount - 1,
    });
  }

  function handleUpdateCoffeeCart() {
    updateCoffeeAmount({
      coffeeId: selectedCoffees.id,
      amount: selectedCoffees.amount,
    });
  }

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
          <strong>{formatPrice(coffee.price)}</strong>
        </CoffeePrice>
        <BuyButtonContainer>
          <CounterContainer>
            <button onClick={() => handleRemoveCoffee()}>
              <Minus weight="bold" />
            </button>
            <span>{selectedCoffees.amount}</span>
            <button onClick={() => handleAddCoffee()}>
              <Plus weight="bold" />
            </button>
          </CounterContainer>
          <BuyButton onClick={() => handleUpdateCoffeeCart()}>
            <ShoppingCartSimple size={22} weight="fill" />
          </BuyButton>
        </BuyButtonContainer>
      </BuyContainer>
    </CoffeeCardContainer>
  );
}
