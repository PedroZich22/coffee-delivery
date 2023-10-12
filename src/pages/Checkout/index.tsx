import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPin,
  Money,
  Trash,
} from "phosphor-react";
import {
  CheckoutContainer,
  CheckoutForm,
  CheckoutFormContainer,
  CheckoutFormRow,
  CheckoutFormRowCity,
  CheckoutFormTitle,
  ConfirmButton,
  Divider,
  Frame1,
  Frame2,
  PaymentContainer,
  PriceContainer,
  PriceRow,
  PriceRowTotal,
  RemoveCoffeeButton,
  SelectedCoffee,
  SelectedCoffeeActions,
  SelectedCoffeeContainer,
  SelectedCoffeeDetails,
  SelectedCoffeeInfo,
  TransactionType,
  TransactionTypeButton,
} from "./styles";
import { Counter } from "../../components/Counter";

import coffeeImg from "../../assets/coffees/americano.png";

export function Checkout() {
  return (
    <CheckoutContainer>
      <Frame1>
        <h1>Complete seu pedido</h1>
        <CheckoutFormContainer>
          <CheckoutFormTitle>
            <MapPin size={22} />
            <div>
              <h2>Endereço de Entrega</h2>
              <p>Informe o endereço onde deseja receber seu pedido</p>
            </div>
          </CheckoutFormTitle>

          <CheckoutForm>
            <input required type="text" id="cep" placeholder="CEP" />
            <input required type="text" id="street" placeholder="Rua" />

            <CheckoutFormRow>
              <input required type="text" id="number" placeholder="Número" />

              <input type="text" id="complement" placeholder="Complemento" />
            </CheckoutFormRow>

            <CheckoutFormRowCity>
              <input
                required
                type="text"
                id="neighborhood"
                placeholder="Bairro"
              />

              <input required type="text" id="city" placeholder="Cidade" />

              <input required type="text" id="state" placeholder="UF" />
            </CheckoutFormRowCity>
          </CheckoutForm>
        </CheckoutFormContainer>

        <PaymentContainer>
          <CheckoutFormTitle>
            <CurrencyDollar size={22} color="#8047F8" />
            <div>
              <h2>Pagamento</h2>
              <p>
                O pagamento é feito na entrega. Escolha a forma que deseja pagar
              </p>
            </div>
          </CheckoutFormTitle>

          <CheckoutForm>
            <TransactionType>
              <TransactionTypeButton value="credit-card">
                <CreditCard size={22} />
                Cartão de crédito
              </TransactionTypeButton>
              <TransactionTypeButton value="debit-card">
                <Bank size={22} />
                cartão de débito
              </TransactionTypeButton>
              <TransactionTypeButton value="money">
                <Money size={22} />
                dinheiro
              </TransactionTypeButton>
            </TransactionType>
          </CheckoutForm>
        </PaymentContainer>
      </Frame1>
      <Frame2>
        <h1>Cafés selecionados</h1>
        <SelectedCoffeeContainer>
          <SelectedCoffee>
            <SelectedCoffeeInfo>
              <img src={coffeeImg} alt="" />
              <SelectedCoffeeDetails>
                <span>Expresso Tradicional</span>
                <SelectedCoffeeActions>
                  <Counter />
                  <RemoveCoffeeButton>
                    <Trash size={22} />
                    remover
                  </RemoveCoffeeButton>
                </SelectedCoffeeActions>
              </SelectedCoffeeDetails>
            </SelectedCoffeeInfo>

            <strong>R$ 9,90</strong>
          </SelectedCoffee>

          <Divider />

          <SelectedCoffee>
            <SelectedCoffeeInfo>
              <img src={coffeeImg} alt="" />
              <SelectedCoffeeDetails>
                <span>Expresso Tradicional</span>
                <SelectedCoffeeActions>
                  <Counter />
                  <RemoveCoffeeButton>
                    <Trash size={22} />
                    remover
                  </RemoveCoffeeButton>
                </SelectedCoffeeActions>
              </SelectedCoffeeDetails>
            </SelectedCoffeeInfo>

            <strong>R$ 9,90</strong>
          </SelectedCoffee>

          <Divider />

          <PriceContainer>
            <PriceRow>
              <span>Total de itens</span>
              <strong>R$ 19,80</strong>
            </PriceRow>
            <PriceRow>
              <span>Entrega</span>
              <strong>R$ 5,00</strong>
            </PriceRow>
            <PriceRowTotal>
              <span>Total</span>
              <strong>R$ 24,80</strong>
            </PriceRowTotal>

            <ConfirmButton type="submit">Confirmar pedido</ConfirmButton>
          </PriceContainer>
        </SelectedCoffeeContainer>
      </Frame2>
    </CheckoutContainer>
  );
}
