import { styled } from "styled-components";

export const CoffeeCardContainer = styled.div`
  width: 16rem;
  height: 19.375rem;
  flex-shrink: 0;
  margin-top: 2rem;

  border-radius: 0.375rem 2.25rem;
  background: ${(props) => props.theme["base-card"]};

  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1.5rem 1.5rem 1.25rem 1.5rem;

  img {
    margin-top: -3rem;
    display: flex;
    width: 7.5rem;
    height: 7.5rem;
    justify-content: center;
    align-items: center;
    flex-shrink: 0;
  }

  h2 {
    margin-top: 1rem;
    color: ${(props) => props.theme["base-subtitle"]};
    text-align: center;

    /* Title/Title S */
    font-family: "Baloo 2";
    font-size: 1.25rem;
    font-style: normal;
    font-weight: 700;
    line-height: 130%; /* 1.625rem */
  }

  p {
    margin-top: 0.5rem;
    color: ${(props) => props.theme["base-label"]};
    text-align: center;

    /* Text/Regular S */
    font-family: Roboto;
    font-size: 0.875rem;
    font-style: normal;
    font-weight: 400;
    line-height: 130%; /* 1.1375rem */
  }
`;

export const TagsContainer = styled.div`
  margin-top: 1rem;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  gap: 0.25rem;
`;

export const Tag = styled.span`
  display: flex;
  padding: 0.25rem 0.5rem;
  justify-content: center;
  align-items: center;

  border-radius: 6.25rem;
  background: ${(props) => props.theme["brand-yellow-light"]};

  color: ${(props) => props.theme["brand-yellow"]};

  /* Components/Tag */
  font-family: Roboto;
  font-size: 0.625rem;
  font-style: normal;
  font-weight: 700;
  line-height: 130%; /* 0.8125rem */
  text-transform: uppercase;
`;

export const BuyContainer = styled.div`
  margin-top: 2rem;
  display: flex;
  width: 13rem;
  justify-content: space-between;
  align-items: center;
`;

export const CoffeePrice = styled.span`
  color: ${(props) => props.theme["base-label"]};
  text-align: right;

  /* Text/Regular S */
  font-family: Roboto;
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 400;
  line-height: 130%; /* 1.1375rem */

  strong {
    color: ${(props) => props.theme["base-text"]};

    /* Title/Title M */
    font-family: "Baloo 2";
    font-size: 1.5rem;
    font-style: normal;
    font-weight: 800;
    line-height: 130%;
  }
`;

export const BuyButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 0.5rem;
`;

export const BuyButton = styled.button`
  display: flex;
  padding: 0.5rem;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;

  border: none;
  outline: none;

  border-radius: 0.375rem;
  background: ${(props) => props.theme["brand-purple-dark"]};

  cursor: pointer;

  svg {
    color: ${(props) => props.theme["base-white"]};
  }

  &:hover {
    background: ${(props) => props.theme["brand-purple"]};
    transition: 0.2s;
  }
`;

export const CounterContainer = styled.div`
  display: flex;
  height: 2.375rem;
  padding: 0.5rem;
  justify-content: center;
  align-items: center;
  gap: 0.25rem;

  border-radius: 0.375rem;
  background: ${(props) => props.theme["base-button"]};

  span {
    width: 1.25rem;
    color: ${(props) => props.theme["base-title"]};
    text-align: center;

    /* Text/Regular M */
    font-family: Roboto;
    font-size: 1rem;
    font-style: normal;
    font-weight: 400;
    line-height: 130%; /* 1.3rem */
  }

  button {
    display: flex;
    justify-content: center;
    align-items: center;

    border: none;
    outline: none;
    background: transparent;

    cursor: pointer;

    svg {
      width: 0.875rem;
      height: 0.875rem;
      color: ${(props) => props.theme["base-title"]};

      &:hover {
        color: ${(props) => props.theme["brand-purple-dark"]};
        transition: 0.2s;
      }
    }
  }
`;
