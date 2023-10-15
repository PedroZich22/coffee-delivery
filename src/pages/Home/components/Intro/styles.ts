import { styled } from "styled-components";
import backgroundImg from "/Background.png";

export const IntroContainer = styled.section`
  max-width: 100%;
  height: 34rem;
  padding: 0 10rem;
  background: url(${backgroundImg});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  display: flex;
  align-items: center;
  justify-content: space-between;

  border-bottom: 4px solid ${(props) => props.theme["base-white"]};

  @media (max-width: 1024px) {
    flex-direction: column;
    height: 100%;
    align-items: center;
    padding: 0 5rem;
    justify-content: center;

    margin-bottom: 2rem;
    margin-top: 2rem;

    img {
      display: none;
    }
  }
`;

export const TitleContainer = styled.div`
  display: flex;
  width: 35.75rem;
  flex-direction: column;
  align-items: flex-start;
  gap: 1rem;

  h1 {
    color: ${(props) => props.theme["base-title"]};

    /* Title/Title XL */
    font-family: "Baloo 2", sans-serif;
    font-size: 3rem;
    font-style: normal;
    font-weight: 800;
    line-height: 130%; /* 3.9rem */
  }

  p {
    color: ${(props) => props.theme["base-text"]};

    /* Text/Regular L */
    font-family: "Roboto";
    font-size: 1.25rem;
    font-style: normal;
    font-weight: 400;
    line-height: 130%; /* 1.625rem */
  }
`;

export const ItemsContainer = styled.div`
  height: 5.25rem;
  margin-top: 4rem;

  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    width: 100%;
  }
`;

export const Item = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;

  span {
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
  color: "yellow" | "yellow-dark" | "gray" | "purple";
}

export const ItemIcon = styled.div<ItemIconProps>`
  display: flex;
  padding: 0.5rem;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;

  border-radius: 62.5rem;
  background: ${(props) =>
    (props.color === "yellow" && props.theme["brand-yellow"]) ||
    (props.color === "yellow-dark" && props.theme["brand-yellow-dark"]) ||
    (props.color === "gray" && props.theme["base-text"]) ||
    (props.color === "purple" && props.theme["brand-purple"])};

  svg {
    color: ${(props) => props.theme["base-white"]};
    width: 1rem;
    height: 1rem;
  }
`;
