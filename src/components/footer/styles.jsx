import styled from "styled-components";

export const FooterStyled = styled.footer`
  width: 100%;
  display: flex;
  justify-content: center;
  font-size: 14px;
  padding: 40px;

  a {
    color: ${({ theme }) => theme.colors.primary};
    text-decoration: none;

    :hover {
      color: #868686;
    }
  }
`;
