import { ContainerPage } from "../../components/ContainerPages";
import { Header } from "../../components/header";
import { MainHome } from "../../components/main-home";
import { Footer } from "../../components/footer";
export const Home = () => {
  return (
    <ContainerPage>
      <Header />
      <MainHome />
      <Footer />
    </ContainerPage>
  );
};
