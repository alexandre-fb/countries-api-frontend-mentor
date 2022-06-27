import styled from "styled-components";
import { Header } from "../../components/header";
import { MainHome } from "../../components/main-home";
import { Footer } from "../../components/footer";
export const Home = () => {
  return (
    <Container>
      <Header />
      <MainHome />
      <Footer />
    </Container>
  );
};

const Container = styled.div``;
