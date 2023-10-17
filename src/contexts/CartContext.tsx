import { ReactNode, createContext, useContext } from "react";
import { api } from "../services/api";
import { CartCoffee } from "../types";
import { useLocalStorage } from "../hooks/useLocalStorage";

interface CartContextProviderProps {
  children: ReactNode;
}

interface UpdateCoffeeAmountProps {
  coffeeId: number;
  amount: number;
}

interface CartContextData {
  cart: CartCoffee[];
  removeCoffee: (coffeeId: number) => void;
  updateCoffeeAmount: ({ coffeeId, amount }: UpdateCoffeeAmountProps) => void;
}

const CartContext = createContext({} as CartContextData);

export function CartProvider({ children }: CartContextProviderProps) {
  const [cart, setCart] = useLocalStorage<CartCoffee[]>(
    "@CoffeeDelivery:cart",
    []
  );

  const removeCoffee = (coffeeId: number) => {
    const coffeeExists = cart.find((c) => c.id === coffeeId);

    if (coffeeExists) {
      const updateCart = cart.filter((coffee) => coffee.id !== coffeeExists.id);

      setCart(updateCart);
    }
  };

  const updateCoffeeAmount = async ({
    coffeeId,
    amount,
  }: UpdateCoffeeAmountProps) => {
    if (amount <= 0) {
      return removeCoffee(coffeeId);
    }

    const { data: coffeeData } = await api.get(`/coffees/${coffeeId}`);

    const coffeeExists = cart.find((c) => c.id === coffeeId);

    if (!coffeeExists) {
      const updateCart: CartCoffee[] = [...cart, { ...coffeeData, amount }];

      setCart(updateCart);
    } else {
      const updateCart: CartCoffee[] = cart.map((coffee) => {
        if (coffee.id === coffeeId) {
          return {
            ...coffeeData,
            amount,
          };
        }

        return coffee;
      });

      setCart(updateCart);
    }
  };

  return (
    <CartContext.Provider
      value={{
        removeCoffee,
        cart,
        updateCoffeeAmount,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart(): CartContextData {
  const context = useContext(CartContext);

  return context;
}
