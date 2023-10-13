import { styled } from "styled-components";

export const SuccessContainer = styled.div`
  width: 100%;
  padding: 5rem 10rem;

  display: flex;
  align-items: center;
  justify-content: space-around;
  gap: 4rem;

  img {
    align-self: flex-end;
  }

  @media (max-width: 1024px) {
    padding: 5rem 5rem;
  }
`;

export const SuccessContent = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  gap: 0.25rem;

  h1 {
    /* Title/Title L */
    font-family: "Baloo 2";
    font-size: 2rem;
    font-style: normal;
    font-weight: 800;
    line-height: 130%; /* 2.6rem */
    color: ${(props) => props.theme["brand-yellow-dark"]};
  }

  p {
    /* Text/Regular L */
    font-family: Roboto;
    font-size: 1.25rem;
    font-style: normal;
    font-weight: 400;
    line-height: 130%; /* 1.625rem */
    color: ${(props) => props.theme["base-subtitle"]};
  }
`;

export const OrderInfo = styled.div`
  display: flex;
  width: 32.875rem;
  padding: 2.5rem;
  flex-direction: column;
  align-items: flex-start;
  gap: 2rem;
  margin-top: 2.5rem;

  border-radius: 0.375rem 2.25rem;
  border: 1px solid #dbac2c;
`;

export const OrderInfoItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;

  p {
    color: ${(props) => props.theme["base-text"]};

    /* Text/Regular M */
    font-family: Roboto;
    font-size: 1rem;
    font-style: normal;
    font-weight: 400;
    line-height: 130%; /* 1.3rem */
  }
`;

interface ItemIconProps {
  color: "purple" | "yellow-dark" | "yellow";
}

export const ItemIcon = styled.div<ItemIconProps>`
  display: flex;
  padding: 0.5rem;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;

  color: ${(props) => props.theme["base-white"]};

  border-radius: 62.5rem;
  background: ${(props) => props.theme[`brand-${props.color}`]};
`;
