import { styled } from "styled-components";

export const CoffeeListContainer = styled.main`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: flex-start;

  padding: 2rem 10rem;
  gap: 4rem;

  h1 {
    color: ${(props) => props.theme["base-title"]};

    /* Title/Title L */
    font-family: "Baloo 2";
    font-size: 2rem;
    font-style: normal;
    font-weight: 800;
    line-height: 130%; /* 2.6rem */
  }

  @media (max-width: 1024px) {
    padding: 2rem 5rem;
    margin-top: 2rem;
  }
`;

export const ListCoffee = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  justify-items: center;
  gap: 2rem;

  @media (max-width: 1240px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 960px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`;
