import { styled } from "styled-components";

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
    }
  }
`;
