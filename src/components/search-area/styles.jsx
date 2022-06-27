import styled from "styled-components";

export const Container = styled.section`
  height: 60px;
  margin: 50px 0;

  display: flex;
  justify-content: space-between;
  align-items: start;
`;

export const SearchByNameContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.secondary};
  padding: 15px;
  border-radius: 5px;
  width: 400px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  gap: 15px;

  box-shadow: 0px 3px 5px rgba(0, 0, 0, 0.2);

  input {
    background-color: transparent;
    border: none;
    width: 100%;
    padding: 5px;
    color: ${({ theme }) => theme.colors.primary};

    ::placeholder {
      color: ${({ theme }) => theme.colors.primary};
      font-family: "Nunito Sans", sans-serif;
    }
  }
`;

export const SelectByRegionContainer = styled.div`
  width: 200px;
  font-size: 14px;

  position: relative;
  display: flex;
  flex-direction: column;
  gap: 3px;
`;

export const Selector = styled.div`
  height: 60px;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.secondary};

  border-radius: 5px;
  box-shadow: 0px 3px 5px rgba(0, 0, 0, 0.2);

  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 15px;
`;

export const Regions = styled.ul`
  display: ${({ isClicked }) => (isClicked ? "block" : "none")};
  background-color: ${({ theme }) => theme.colors.secondary};

  border-radius: 5px;
  box-shadow: 0px 3px 5px rgba(0, 0, 0, 0.2);

  li {
    padding: 15px;
    cursor: pointer;

    :hover {
      background-color: ${({ theme }) => theme.colors.primary};
      color: ${({ theme }) => theme.colors.secondary};
    }
  }
`;