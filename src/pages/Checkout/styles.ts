import { styled } from "styled-components";
import * as RadioGroup from "@radix-ui/react-radio-group";

export const CheckoutContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  padding: 2rem 10rem 9.8125rem 10rem;
  align-items: flex-start;
  justify-content: space-around;
  gap: 2rem;

  h1 {
    color: ${(props) => props.theme["base-subtitle"]};

    /* Title/Title XS */
    font-family: "Baloo 2";
    font-size: 1.125rem;
    font-style: normal;
    font-weight: 700;
    line-height: 130%; /* 1.4625rem */
  }
`;

export const Frame1 = styled.div`
  width: 40rem;
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1rem;
`;

export const Frame2 = styled.div`
  width: 28rem;
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1rem;
`;

export const CardContainer = styled.div`
  display: flex;
  padding: 2.5rem;
  flex-direction: column;
  align-items: flex-start;
  gap: 2rem;
  align-self: stretch;
  border-radius: 0.375rem;
  background: ${(props) => props.theme["base-card"]};
`;

export const CheckoutFormContainer = styled(CardContainer)``;
export const SelectedCoffeeContainer = styled(CardContainer)`
  border-radius: 0.375rem 2.25rem;
`;
export const PaymentContainer = styled(CardContainer)``;

export const CheckoutFormTitle = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 0.5rem;
  align-self: stretch;

  svg {
    color: ${(props) => props.theme["brand-yellow-dark"]};
  }

  h2 {
    color: ${(props) => props.theme["base-subtitle"]};

    /* Text/Regular M */
    font-family: Roboto;
    font-size: 1rem;
    font-style: normal;
    font-weight: 400;
    line-height: 130%; /* 1.3rem */
  }

  p {
    color: ${(props) => props.theme["base-text"]};

    /* Text/Regular S */
    font-family: Roboto;
    font-size: 0.875rem;
    font-style: normal;
    font-weight: 400;
    line-height: 130%; /* 1.1375rem */
  }
`;

export const CheckoutForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1rem;
  align-self: stretch;

  input {
    display: flex;
    width: 100%;
    padding: 0.75rem;
    align-items: center;
    gap: 0.25rem;

    border-radius: 0.25rem;
    border: 1px solid ${(props) => props.theme["base-button"]};
    background: ${(props) => props.theme["base-input"]};

    color: ${(props) => props.theme["base-text"]};

    &::placeholder {
      color: ${(props) => props.theme["base-label"]};
    }

    &:focus {
      outline: none;
      border: 1px solid ${(props) => props.theme["brand-yellow-dark"]};
    }
  }
`;

export const CheckoutFormRow = styled.div`
  width: 100%;
  display: grid;
  gap: 0.75rem;
  grid-template-columns: 12.5rem auto;
`;

export const CheckoutFormRowCity = styled.div`
  width: 100%;
  display: grid;
  gap: 0.75rem;
  grid-template-columns: 12.5rem auto 3.75rem;
`;

export const TransactionType = styled(RadioGroup.Root)`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 0.75rem;
`;

export const TransactionTypeButton = styled(RadioGroup.Item)`
  border-radius: 0.375rem;
  background: ${(props) => props.theme["base-button"]};
  display: flex;
  border: 0;
  padding: 1rem;
  align-items: center;
  gap: 0.75rem;
  cursor: pointer;

  color: ${(props) => props.theme["base-text"]};

  /* Components/Button S */
  font-family: Roboto;
  font-size: 0.75rem;
  font-style: normal;
  font-weight: 400;
  line-height: 160%; /* 1.2rem */
  text-transform: uppercase;

  svg {
    color: ${(props) => props.theme["brand-purple"]};
  }

  &[data-state="unchecked"]:hover {
    background: ${(props) => props.theme["base-hover"]};
    transition: background-color 0.2s;
  }

  &[data-state="checked"] {
    border-radius: 0.375rem;
    border: 1px solid ${(props) => props.theme["brand-purple"]};
    background: ${(props) => props.theme["brand-purple-light"]};
  }
`;

export const SelectedCoffee = styled.div`
  display: flex;
  padding: 0.5rem 0.25rem;
  justify-content: space-between;
  align-items: flex-start;
  align-self: stretch;

  strong {
    color: ${(props) => props.theme["base-text"]};
    text-align: right;

    /* Text/Bold M */
    font-family: Roboto;
    font-size: 1rem;
    font-style: normal;
    font-weight: 700;
    line-height: 130%; /* 1.3rem */
  }
`;

export const SelectedCoffeeInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 1.25rem;

  img {
    width: 4rem;
    height: 4rem;
    flex-shrink: 0;
  }
`;

export const SelectedCoffeeDetails = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.5rem;

  span {
    color: ${(props) => props.theme["base-subtitle"]};

    /* Text/Regular M */
    font-family: "Roboto";
    font-size: 1rem;
    font-style: normal;
    font-weight: 400;
    line-height: 130%; /* 1.3rem */
  }
`;

export const SelectedCoffeeActions = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

export const RemoveCoffeeButton = styled.button`
  display: flex;
  padding: 0.5rem;
  justify-content: center;
  align-items: center;
  gap: 0.25rem;
  border: 0;

  cursor: pointer;

  border-radius: 0.375rem;
  background: ${(props) => props.theme["base-button"]};

  color: ${(props) => props.theme["base-text"]};

  /* Components/Button S */
  font-family: Roboto;
  font-size: 0.75rem;
  font-style: normal;
  font-weight: 400;
  line-height: 160%; /* 1.2rem */
  text-transform: uppercase;

  svg {
    color: ${(props) => props.theme["brand-purple"]};
  }

  &:hover {
    background: ${(props) => props.theme["base-hover"]};
    transition: background-color 0.2s;
  }
`;

export const Divider = styled.span`
  width: 100%;
  height: 1px;
  background: ${(props) => props.theme["base-button"]};
`;

export const PriceContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 0.75rem;
  align-self: stretch;
`;

export const PriceRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
  align-self: stretch;

  color: ${(props) => props.theme["base-text"]};
  text-align: right;

  /* Text/Regular S */
  font-family: Roboto;

  font-style: normal;
  font-weight: 400;
  line-height: 130%; /* 1.1375rem */

  span {
    font-size: 0.875rem;
  }

  strong {
    font-size: 1rem;
  }
`;

export const PriceRowTotal = styled(PriceRow)`
  color: ${(props) => props.theme["base-subtitle"]};
  text-align: right;

  span,
  strong {
    /* Text/Bold L */
    font-family: "Roboto";
    font-size: 1.25rem;
    font-style: normal;
    font-weight: 700;
    line-height: 130%; /* 1.625rem */
  }
`;

export const ConfirmButton = styled.button`
  display: flex;
  margin-top: 1.5rem;
  padding: 0.75rem 0.5rem;
  justify-content: center;
  align-items: center;
  gap: 0.25rem;
  align-self: stretch;
  border: 0;
  cursor: pointer;
  text-transform: uppercase;

  border-radius: 0.375rem;
  background: ${(props) => props.theme["brand-yellow"]};

  color: ${(props) => props.theme["base-white"]};

  /* Components/Button G */
  font-family: Roboto;
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 700;
  line-height: 160%; /* 1.4rem */
  text-transform: uppercase;

  &:hover {
    background: ${(props) => props.theme["brand-yellow-dark"]};
    transition: background-color 0.2s;
  }
`;
