import { createContext, useEffect, useState } from "react";
import coffeesData from "../utils/coffees.json";
import { useLocalStorage } from "../hooks/useLocalStorage";

type CoffeesContextProviderProps = {
  children: React.ReactNode;
};

export interface Coffee {
  id: number;
  name: string;
  description: string;
  tags: string[];
  price: number;
  image: string;
}

interface SelectedCoffee {
  id: number;
  quantity: number;
}

interface CoffeesContextData {
  quantity: number;
  coffees: Coffee[];
  selectedCoffees: SelectedCoffee[];
  handleAddCoffeeToCart: (id: number) => void;
  handleRemoveCoffeeFromCart: (id: number) => void;
  handleRemoveAllCoffeesFromCart: (id: number) => void;
}

export const CoffeesContext = createContext({} as CoffeesContextData);

export function CoffeesContextProvider({
  children,
}: CoffeesContextProviderProps) {
  const [coffees, setCoffees] = useState<Coffee[]>([]);

  const [selectedCoffees, setSelectedCoffees] = useLocalStorage<
    SelectedCoffee[]
  >("@coffee-delivery", []);

  const [quantity, setQuantity] = useState(0);

  function handleAddCoffeeToCart(id: number) {
    const coffeeExists = selectedCoffees.find((coffee) => coffee.id === id);

    if (coffeeExists) {
      const updatedCoffee = selectedCoffees.map((coffee) =>
        coffee.id === id
          ? {
              ...coffee,
              quantity: coffee.quantity + 1,
            }
          : coffee
      );

      setSelectedCoffees(updatedCoffee);
    } else {
      setSelectedCoffees((prev) => [
        ...prev,
        {
          id,
          quantity: 1,
        },
      ]);
    }
  }

  function handleRemoveCoffeeFromCart(id: number) {
    const coffeeExists = selectedCoffees.find((coffee) => coffee.id === id);

    if (coffeeExists && coffeeExists.quantity > 1) {
      const updatedCoffee = selectedCoffees.map((coffee) =>
        coffee.id === id
          ? {
              id,
              quantity: coffee.quantity - 1,
            }
          : coffee
      );

      setSelectedCoffees(updatedCoffee);
    } else if (coffeeExists && coffeeExists.quantity === 1) {
      const updatedCoffee = selectedCoffees.filter(
        (coffee) => coffee.id !== id
      );

      setSelectedCoffees(updatedCoffee);
    }
  }

  function handleRemoveAllCoffeesFromCart(id: number) {
    const coffeeExists = selectedCoffees.find((coffee) => coffee.id === id);

    if (coffeeExists) {
      const updatedCoffee = selectedCoffees.filter(
        (coffee) => coffee.id !== id
      );

      setSelectedCoffees(updatedCoffee);
    }
  }

  useEffect(() => {
    const quantity = selectedCoffees.reduce((acc, selectedCoffee) => {
      return acc + selectedCoffee.quantity;
    }, 0);

    setQuantity(quantity);
    setCoffees(coffeesData.coffees);
  }, [selectedCoffees, quantity, setQuantity]);

  return (
    <CoffeesContext.Provider
      value={{
        coffees,
        selectedCoffees,
        handleAddCoffeeToCart,
        handleRemoveCoffeeFromCart,
        handleRemoveAllCoffeesFromCart,
        quantity,
      }}
    >
      {children}
    </CoffeesContext.Provider>
  );
}
