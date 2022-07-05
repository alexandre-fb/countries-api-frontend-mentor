import styled from "styled-components";
import { PrimaryButton } from "../primary-button";
import { BoxWithShadow } from "../box-with-shadow";
import { screenSizes } from "../../styles/screenSizes";

export const StyledMain = styled.main`
  padding: 70px 0;
  display: flex;
  flex-direction: column;
  gap: 80px;
`;

export const BackButton = styled(PrimaryButton)`
  display: flex;
  gap: 10px;
  align-items: center;
  justify-content: space-between;
`;

export const FlagAndDataContainer = styled.section`
  display: flex;
  gap: 100px;
  align-items: center;

  @media (max-width: ${screenSizes.smallDesktop}) {
    gap: 50px;
    align-items: flex-start;
  }

  @media (max-width: ${screenSizes.tablet}) {
    flex-direction: column;
    width: 80%;
    margin: 0 auto;
  }

  @media (max-width: ${screenSizes.mobile}) {
    flex-direction: column;
    width: 100%;
  }
`;

export const Flag = styled.img`
  width: 40%;
  min-width: 350px;

  @media (max-width: ${screenSizes.smallDesktop}) {
    min-width: 250px;
  }

  @media (max-width: ${screenSizes.tablet}) {
    width: 100%;
  }
`;

export const DataContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  height: 100%;
  width: 50%;

  @media (max-width: ${screenSizes.tablet}) {
    width: 100%;
  }
`;

export const NameCountry = styled.h2`
  font-size: 1.7rem;
  font-weight: 800;
`;

export const DetailsContainer = styled.div`
  display: flex;
  gap: 20px;

  @media (max-width: ${screenSizes.smallDesktop}) {
    flex-direction: column;
    gap: 60px;
  }
`;

export const FirstColumn = styled.ul`
  display: flex;
  flex-flow: column;
  gap: 10px;

  width: 100%;

  h4 {
    font-weight: 600;
    display: inline-block;
    margin-right: 5px;
  }
`;

export const SecondColumn = styled(FirstColumn)``;

export const BorderCountriesContainer = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
  margin-top: 30px;

  h4 {
    font-weight: 600;
  }

  @media (max-width: ${screenSizes.smallDesktop}) {
    flex-direction: column;
    gap: 10px;
    align-items: start;
  }
`;

export const Countries = styled.ul`
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
`;

export const Country = styled(BoxWithShadow).attrs({ as: "li" })`
  padding: 10px 15px;
`;
