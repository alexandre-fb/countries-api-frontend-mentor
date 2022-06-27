import styled from "styled-components";

export const Container = styled.main`
`;

export const Countries = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fit, 250px);
  column-gap: 50px;
  row-gap: 70px;
  justify-content: space-between;
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
