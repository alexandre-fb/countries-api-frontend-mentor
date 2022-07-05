import styled from "styled-components";
import { screenSizes } from "../../styles/screenSizes";

export const StyledMain = styled.main``;

export const Countries = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fit, 250px);
  column-gap: 50px;
  row-gap: 70px;
  justify-content: space-between;

  @media (max-width: ${screenSizes.smallDesktop}) {
    justify-content: space-evenly;
  }

  @media (max-width: ${screenSizes.tablet}) {
    grid-template-columns: repeat(auto-fit, 200px);
    column-gap: 20px;
  }

  @media (max-width: ${screenSizes.mobile}) {
    grid-template-columns: 280px;
  }
`;

export const Country = styled.li`
  box-shadow: 0px 3px 5px rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  height: fit-content;
`;

export const Flag = styled.div`
  height: 160px;
  background-image: url(${({ img }) => img});
  background-size: cover;
  background-position: center;

  border-radius: 5px 5px 0 0;

  @media (max-width: ${screenSizes.tablet}) {
    height: 140px;
  }

  @media (max-width: ${screenSizes.mobile}) {
    height: 190px;
  }
`;

export const ContainerData = styled.div`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.secondary};
  padding: 30px 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  border-radius: 0 0 5px 5px;
`;

export const Name = styled.div`
  font-size: 1.1rem;
  font-weight: 800;
`;

export const Data = styled.ul`
  font-size: 14px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
