import styled from "styled-components";

export const BoxWithShadow = styled.div`
  background-color: ${({ theme }) => theme.colors.secondary};
  border-radius: 5px;
  box-shadow: 0px 3px 5px rgba(0, 0, 0, 0.2);
`;
