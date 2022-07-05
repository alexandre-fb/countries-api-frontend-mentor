import { FaMoon, FaRegMoon } from "react-icons/fa";
import { useTheme } from "styled-components";
import { useContext } from "react";
import { ThemeContext } from "../../contexts/themeContext";
import { HeaderStyled, BackgroundFullWidth, Container } from "./styles";
import { Link } from "react-router-dom";

export const Header = () => {
  const theme = useTheme();
  const { changeTheme } = useContext(ThemeContext);

  return (
    <HeaderStyled>
      <BackgroundFullWidth>
        <Container>
          <Link to="/">
            <h2>Where in the World?</h2>
          </Link>

          <button onClick={() => changeTheme()}>
            {theme.name === "darkTheme" ? <FaMoon /> : <FaRegMoon />}
            <span> Dark Mode </span>
          </button>
        </Container>
      </BackgroundFullWidth>
    </HeaderStyled>
  );
};
