import { Trash } from "phosphor-react";
import { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Counter } from "../../../../components/Counter";
import { CoffeesContext, Coffee } from "../../../../contexts/CoffeeContext";
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

interface SelectedCoffeeFiltered {
  coffee: Coffee;
  quantity: number;
}

interface SelectedCoffeesProps {
  isValid: boolean;
}

export function SelectedCoffees({ isValid }: SelectedCoffeesProps) {
  const { selectedCoffees, handleRemoveAllCoffeesFromCart, coffees } =
    useContext(CoffeesContext);

  const selectedCoffeesFiltered: SelectedCoffeeFiltered[] =
    selectedCoffees.reduce<SelectedCoffeeFiltered[]>((acc, coffee) => {
      const coffeeExists = coffees.find(
        (selectedCoffee) => selectedCoffee.id === coffee.id
      );

      if (coffeeExists) {
        return [...acc, { coffee: coffeeExists, quantity: coffee.quantity }];
      }

      return acc;
    }, []);

  const [totalItems, setTotalItems] = useState("");
  const [deliveryPrice] = useState(0);
  const [totalPrice, setTotalPrice] = useState("");

  function handleRemoveAllCoffees(id: number) {
    handleRemoveAllCoffeesFromCart(id);
  }

  useEffect(() => {
    const totalItemsPrice = selectedCoffeesFiltered.reduce(
      (acc, coffee) => acc + coffee.coffee.price * coffee.quantity,
      0
    );

    const totalPrice = totalItemsPrice + Number(deliveryPrice);

    const totalItemsPriceFormatted = new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(totalItemsPrice);

    const totalPriceFormatted = new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(totalPrice);

    setTotalItems(totalItemsPriceFormatted);
    setTotalPrice(totalPriceFormatted);
  }, [selectedCoffees, coffees, deliveryPrice, selectedCoffeesFiltered]);

  if (selectedCoffees.length === 0) {
    return (
      <h1>
        Você ainda não selecionou nenhum item, <Link to="/">clique aqui</Link>{" "}
        para ver os nossos produtos.
      </h1>
    );
  }

  return (
    <>
      {selectedCoffeesFiltered.map((selectedCoffee) => (
        <>
          <SelectedCoffee key={selectedCoffee.coffee.id}>
            <SelectedCoffeeInfo>
              <img src={selectedCoffee.coffee.image} alt="" />
              <SelectedCoffeeDetails>
                <span>{selectedCoffee.coffee.name}</span>
                <SelectedCoffeeActions>
                  <Counter coffee={selectedCoffee.coffee} />
                  <RemoveCoffeeButton
                    onClick={() =>
                      handleRemoveAllCoffees(selectedCoffee.coffee.id)
                    }
                  >
                    <Trash size={22} />
                    remover
                  </RemoveCoffeeButton>
                </SelectedCoffeeActions>
              </SelectedCoffeeDetails>
            </SelectedCoffeeInfo>

            <strong>
              {new Intl.NumberFormat("pt-BR", {
                style: "currency",
                currency: "BRL",
              }).format(selectedCoffee.coffee.price * selectedCoffee.quantity)}
            </strong>
          </SelectedCoffee>
          <Divider />
        </>
      ))}

      <PriceContainer>
        <PriceRow>
          <span>Total de itens</span>
          <strong>{totalItems}</strong>
        </PriceRow>
        <PriceRow>
          <span>Entrega</span>
          <strong>{deliveryPrice}</strong>
        </PriceRow>
        <PriceRowTotal>
          <span>Total</span>
          <strong>{totalPrice}</strong>
        </PriceRowTotal>

        <ConfirmButton disabled={isValid} form="checkout-form" type="submit">
          Confirmar pedido
        </ConfirmButton>
      </PriceContainer>
    </>
  );
}
