import styled from 'styled-components';
import { theme } from '@sumofus/branding';

export interface IProps {
  disabled?: boolean;
  theme: typeof theme;
}
const Button = styled.button`
  max-width: 25ch;
  width: 100%;
  border: 2px solid ${({ theme }) => theme.orange};
  background-color: ${({ theme }) => theme.orange};
  color: white;
  font-weight: bold;
  font-size: 16px;
  text-align: center;
  text-transform: uppercase;
  height: 55px;
  cursor: pointer;
  margin-bottom: 16px;
  user-select: none;
  outline: none;

  &:disabled {
    border: 2px solid #d0d0d0;
    background-color: #d3d3d3;
    box-shadow: none;
  }

  &:hover:not(:disabled) {
    background-color: ${p => p.theme.darkOrange};
    border-color: ${p => p.theme.darkOrange};
  }
`;

export default Button;
