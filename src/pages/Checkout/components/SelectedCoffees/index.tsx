import { Minus, Plus, Trash } from "phosphor-react";
import { Link } from "react-router-dom";
import {
  SelectedCoffee,
  SelectedCoffeeInfo,
  SelectedCoffeeDetails,
  SelectedCoffeeActions,
  RemoveCoffeeButton,
  Divider,
  PriceContainer,
  PriceRow,
  PriceRowTotal,
  ConfirmButton,
} from "./styles";
import { useCart } from "../../../../contexts/CartContext";
import { CounterContainer } from "../../../Home/components/CoffeeCard/styles";
import { formatPrice } from "../../../../utils/format";

interface SelectedCoffeesProps {
  isValid: boolean;
}

interface CartItemsAmount {
  [key: number]: number;
}

export function SelectedCoffees({ isValid }: SelectedCoffeesProps) {
  const { cart, updateCoffeeAmount, removeCoffee } = useCart();

  const cartFiltered = cart.filter((coffee) => coffee.amount > 0);

  const cartItemsAmount = cart.reduce((sumAmount, product) => {
    sumAmount[product.id] = product.amount;
    return sumAmount;
  }, {} as CartItemsAmount);

  const total = formatPrice(
    cart.reduce((sumTotal, product) => {
      sumTotal += product.amount * product.price;
      return sumTotal;
    }, 0)
  );

  function handleRemoveCoffee(coffeeId: number) {
    const coffeeToAdd = cart.find((c) => c.id === coffeeId);
    if (!coffeeToAdd) return;

    const newAmount = coffeeToAdd.amount - 1;
    updateCoffeeAmount({ coffeeId, amount: newAmount });
  }

  function handleAddCoffee(coffeeId: number) {
    const coffeeToAdd = cart.find((c) => c.id === coffeeId);
    if (!coffeeToAdd) return;

    const newAmount = coffeeToAdd.amount + 1;
    updateCoffeeAmount({ coffeeId, amount: newAmount });
  }

  function handleRemoveAllCoffees(coffeeId: number) {
    removeCoffee(coffeeId);
  }

  if (cartFiltered.length === 0)
    return (
      <h1>
        Você ainda não selecionou nenhum item, <Link to="/">clique aqui</Link>{" "}
        para ver os nossos produtos.
      </h1>
    );

  return (
    <>
      {cartFiltered.map((coffee) => (
        <div key={coffee.id}>
          <SelectedCoffee key={coffee.id}>
            <SelectedCoffeeInfo>
              <img src={coffee.image} alt="" />
              <SelectedCoffeeDetails>
                <span>{coffee.name}</span>
                <SelectedCoffeeActions>
                  <CounterContainer>
                    {" "}
                    <button onClick={() => handleRemoveCoffee(coffee.id)}>
                      <Minus weight="fill" />{" "}
                    </button>
                    <span>{cartItemsAmount[coffee.id]}</span>{" "}
                    <button onClick={() => handleAddCoffee(coffee.id)}>
                      <Plus weight="fill" />{" "}
                    </button>{" "}
                  </CounterContainer>
                  <RemoveCoffeeButton
                    onClick={() => handleRemoveAllCoffees(coffee.id)}
                  >
                    <Trash size={22} />
                    remover
                  </RemoveCoffeeButton>
                </SelectedCoffeeActions>
              </SelectedCoffeeDetails>
            </SelectedCoffeeInfo>

            <strong>{formatPrice(coffee.price)}</strong>
          </SelectedCoffee>
          <Divider />
        </div>
      ))}

      <PriceContainer>
        <PriceRow>
          <span>Total de itens</span>
          <strong>{total}</strong>
        </PriceRow>
        <PriceRow>
          <span>Entrega</span>
          <strong>{0}</strong>
        </PriceRow>
        <PriceRowTotal>
          <span>Total</span>
          <strong>{total}</strong>
        </PriceRowTotal>

        <ConfirmButton disabled={isValid} form="checkout-form" type="submit">
          Confirmar pedido
        </ConfirmButton>
      </PriceContainer>
    </>
  );
}
