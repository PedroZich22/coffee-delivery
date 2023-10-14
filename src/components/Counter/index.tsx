import { Minus, Plus } from "phosphor-react";
import { CounterContainer } from "./styles";
import { Coffee, CoffeesContext } from "../../contexts/CoffeeContext";
import { useContext, useEffect, useState } from "react";

interface CounterProps {
  coffee: Coffee;
}

export function Counter({ coffee }: CounterProps) {
  const { selectedCoffees, handleAddCoffeeToCart, handleRemoveCoffeeFromCart } =
    useContext(CoffeesContext);

  const [quantity, setQuantity] = useState(0);

  function handleAddCoffee() {
    handleAddCoffeeToCart(coffee.id);
  }

  function handleRemoveCoffee() {
    handleRemoveCoffeeFromCart(coffee.id);
  }

  useEffect(() => {
    const coffeeExists = selectedCoffees.find(
      (coffeeItem) => coffeeItem.id === coffee.id
    );

    if (coffeeExists) {
      setQuantity(coffeeExists.quantity);
    } else {
      setQuantity(0);
    }
  }, [selectedCoffees, coffee]);

  return (
    <CounterContainer>
      <button onClick={handleRemoveCoffee}>
        <Minus weight="fill" />
      </button>
      <span>{quantity}</span>
      <button onClick={handleAddCoffee}>
        <Plus weight="fill" />
      </button>
    </CounterContainer>
  );
}
