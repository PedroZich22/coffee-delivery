import styled from "styled-components";

export const Nav = styled.nav`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  padding: 2rem 10rem;

  display: flex;
  justify-content: space-between;
  align-items: center;

  background: ${(props) => props.theme["base-background"]};
`;

export const Actions = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 0.75rem;
`;

export const Location = styled.div`
  display: flex;
  padding: 0.5rem;
  justify-content: center;
  align-items: center;
  gap: 0.25rem;

  border-radius: 0.375rem;
  color: ${(props) => props.theme["brand-purple"]};
  background: ${(props) => props.theme["brand-purple-light"]};

  span {
    color: ${(props) => props.theme["brand-purple"]};

    /* Text/Regular S */
    font-family: Roboto;
    font-size: 0.875rem;
    font-style: normal;
    font-weight: 400;
    line-height: 130%; /* 1.1375rem */
  }
`;

export const Cart = styled.div`
  display: flex;
  padding: 0.5rem;
  justify-content: center;
  align-items: center;
  gap: 0.25rem;

  border-radius: 0.375rem;
  background: ${(props) => props.theme["brand-yellow-light"]};
  color: ${(props) => props.theme["brand-yellow"]};
`;
