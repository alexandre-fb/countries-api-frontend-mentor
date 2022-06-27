
import styled from "styled-components";
import { Header } from "../../components/header";
import { MainHome } from "../../components/main-home";


export const Home = () => {

  return (
    <Container>
      <Header />
      <MainHome />
    </Container>
  );
};

const Container = styled.div``;
