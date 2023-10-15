import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPin,
  Money,
} from "phosphor-react";
import {
  CheckoutContainer,
  CheckoutForm,
  CheckoutFormContainer,
  CheckoutFormRow,
  CheckoutFormRowCity,
  CheckoutFormTitle,
  Frame1,
  Frame2,
  PaymentContainer,
  SelectedCoffeeContainer,
  TransactionType,
  TransactionTypeButton,
} from "./styles";

import * as zod from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { SelectedCoffees } from "./components/SelectedCoffees";
import { useForm } from "react-hook-form";

const CheckoutFormSchema = zod.object({
  cep: zod.string().min(8, "CEP inválido"),
  street: zod.string().nonempty("Rua inválida"),
  number: zod.string(),
  complement: zod.string(),
  neighborhood: zod.string().nonempty("Bairro inválido"),
  city: zod.string().nonempty("Cidade inválida"),
  state: zod.string().nonempty("UF inválido"),
  payment: zod.string().nonempty("Selecione uma forma de pagamento"),
});

type CheckoutFormData = zod.infer<typeof CheckoutFormSchema>;

export function Checkout() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { isValid },
  } = useForm<CheckoutFormData>({
    resolver: zodResolver(CheckoutFormSchema),
  });

  function handleCheckout(data: CheckoutFormData) {
    console.log(data);

    reset();
  }

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

          <CheckoutForm
            id="checkout-form"
            onSubmit={handleSubmit(handleCheckout)}
          >
            <input
              required
              type="text"
              id="cep"
              placeholder="CEP"
              {...register("cep")}
            />
            <input
              required
              type="text"
              id="street"
              placeholder="Rua"
              {...register("street")}
            />

            <CheckoutFormRow>
              <input
                placeholder="Número"
                {...register("number")}
              />

              <input
                type="text"
                id="complement"
                placeholder="Complemento"
                {...register("complement")}
              />
            </CheckoutFormRow>

            <CheckoutFormRowCity>
              <input
                required
                type="text"
                id="neighborhood"
                placeholder="Bairro"
                {...register("neighborhood")}
              />

              <input
                required
                type="text"
                id="city"
                placeholder="Cidade"
                {...register("city")}
              />

              <input
                required
                type="text"
                id="state"
                placeholder="UF"
                {...register("state")}
              />
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
            <TransactionType {...register("payment")}>
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
          <SelectedCoffees isValid={isValid} />
        </SelectedCoffeeContainer>
      </Frame2>
    </CheckoutContainer>
  );
}
