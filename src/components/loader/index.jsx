import Lottie from "lottie-react";
import styled from "styled-components";
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

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  padding: 150px 0;

  div {
    width: 100px;
    height: 100px;
  }
`;
