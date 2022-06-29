import styled from "styled-components";
import { BoxWithShadow } from "../box-with-shadow";

export const HeaderStyled = styled.header`
  height: 70px;
`;

export const BackgroundFullWidth = styled(BoxWithShadow)`
  position: absolute;
  width: 100vw;
  left: 0;
  height: inherit;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 1440px;
  padding: 0 5%;

  h2 {
    font-weight: 800;
    font-size: 1.2rem;
  }

  button {
    display: flex;
    align-items: center;
    gap: 7px;
    background: none;
    border: none;
    cursor: pointer;

    svg {
      color: ${({ theme }) => theme.colors.primary};
    }

    span {
      color: ${({ theme }) => theme.colors.primary};
    }
  }
`;
