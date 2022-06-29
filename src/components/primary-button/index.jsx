import styled from "styled-components";
import { BoxWithShadow } from "../box-with-shadow";

export const PrimaryButton = styled(BoxWithShadow).attrs({ as: 'button'})`
  background: none;
  background-color: ${({ theme }) => theme.colors.secondary};
  border: none;
  padding: 10px 30px;
  box-shadow: 0px 3px 5px rgba(0, 0, 0, 0.2);
  color: ${({ theme }) => theme.colors.primary};
  border-radius: 5px;
  cursor: pointer;
`;
