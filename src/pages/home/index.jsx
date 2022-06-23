import { useContext } from "react";
import styled from "styled-components";
import { ThemeContext } from "../../contexts/themeContext";

export const Home = () => {
  const { changeTheme } = useContext(ThemeContext);

  return (
    <Container>
      <h1>Ola</h1>
      <button onClick={() => changeTheme()}> Mudar tema</button>
    </Container>
  );
};

const Container = styled.div`
  background-color: ${({ theme }) => theme.colors.backgroundColor};
  color: ${({ theme }) => theme.colors.textColor};
`;
