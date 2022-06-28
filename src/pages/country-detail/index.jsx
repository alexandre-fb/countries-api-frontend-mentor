import { ContainerPage } from "../../components/ContainerPages";
import { Footer } from "../../components/footer";
import { Header } from "../../components/header";
import { MainCountryDetail } from "../../components/main-detail-page";

export const CountryDetail = () => {
  return (
    <ContainerPage>
      <Header />
      <MainCountryDetail />
      <Footer />
    </ContainerPage>
  );
};
