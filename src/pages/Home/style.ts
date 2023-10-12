import { styled } from "styled-components";

export const CoffeeListContainer = styled.main`
  display: flex;
  flex-direction: column;
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
`;
