import Lottie from "lottie-react";
import styled from "styled-components";
import spinningGlobe from "../../assets/lottie-animations/spinning-globe.json";

export const Loader = () => {
  return (
    <Container>
      <Lottie animationData={spinningGlobe} autoplay={true} loop={false} />
    </Container>
  );
};

const Container = styled.div`
  width: 100px;
  height: 100px;
`;
