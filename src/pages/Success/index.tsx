import { CurrencyDollar, MapPin, Timer } from "phosphor-react";
import illustrationImg from "../../assets/illustration.svg";
import {
  ItemIcon,
  OrderInfo,
  OrderInfoItem,
  SuccessContainer,
  SuccessContent,
} from "./styles";

export function Success() {
  return (
    <SuccessContainer>
      <SuccessContent>
        <h1>Uhu! Pedido confirmado</h1>
        <p>Agora é só aguardar que logo o café chegará até você</p>
        <OrderInfo>
          <OrderInfoItem>
            <ItemIcon color="purple">
              <MapPin size={24} weight="fill" />
            </ItemIcon>
            <p>
              Entrega em <strong> Rua João Daniel Martinelli, 102</strong>{" "}
              <br /> Farrapos - Porto Alegre, RS
            </p>
          </OrderInfoItem>
          <OrderInfoItem>
            <ItemIcon color="yellow">
              <Timer size={24} weight="fill" />
            </ItemIcon>
            <p>
              Previsão de entrega <br /> <strong> 20 min - 30 min</strong>
            </p>
          </OrderInfoItem>
          <OrderInfoItem>
            <ItemIcon color="yellow-dark">
              <CurrencyDollar size={24} weight="fill" />
            </ItemIcon>
            <p>
              Pagamento na entrega <br /> <strong> Cartão de Crédito</strong>
            </p>
          </OrderInfoItem>
        </OrderInfo>
      </SuccessContent>
      <img src={illustrationImg} alt="" />
    </SuccessContainer>
  );
}
