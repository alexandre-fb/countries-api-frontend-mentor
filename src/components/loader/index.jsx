import Lottie from "lottie-react";
import { Container } from "./styles";
import globe from "../../assets/lottie-animations/earth-globe.json";


export const Loader = () => {
  return (
    <Container>
      <div>
        <Lottie animationData={globe} autoplay={true} loop={true} />
        <p>Carregando...</p>
      </div>
    </Container>
  );
};