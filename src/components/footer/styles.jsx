import styled from "styled-components";

export const FooterStyled = styled.footer`
  padding: 15px;
  text-align: center;
  font-size: 14px;

  a {
    color: ${({ theme }) => theme.colors.primary};
    text-decoration: none;

    :hover {
      color: #868686;
    }
  }
`;
