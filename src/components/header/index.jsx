import styled from "styled-components";
import { FaMoon, FaRegMoon } from "react-icons/fa";
import { useTheme } from "styled-components";
import { useContext } from "react";
import { ThemeContext } from "../../contexts/themeContext";

export const Header = () => {
  const theme = useTheme();
  const { changeTheme } = useContext(ThemeContext);

  return (
    <HeaderStyled>
      <BackgroundFullWidth>
        <Container>
          <h2>Where in the World?</h2>

          <button onClick={() => changeTheme()}>
            {theme.name === "darkTheme" ? <FaMoon /> : <FaRegMoon />}

            <span> Dark Mode </span>
          </button>
        </Container>
      </BackgroundFullWidth>
    </HeaderStyled>
  );
};

const HeaderStyled = styled.header`
  height: 70px;
`;

const BackgroundFullWidth = styled.div`
  position: absolute;
  width: 100vw;
  background-color: ${({ theme }) => theme.colors.secondary};
  box-shadow: 0px 3px 5px rgba(0, 0, 0, 0.2);
  left: 0;
  height: inherit;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const Container = styled.div`
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
