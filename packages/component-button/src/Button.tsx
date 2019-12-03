import styled from 'styled-components';
import { themes } from '@sumofus/branding';

export interface Props extends React.HTMLProps<HTMLButtonElement> {
  theme?: typeof themes.sumofus;
}
const Button = styled.button`
  max-width: 25ch;
  width: 100%;
  border: 2px solid ${({ theme }: Props) => (theme ? theme.orange : undefined)};
  background-color: ${({ theme }: Props) => (theme ? theme.orange : undefined)};
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
    background-color: ${({ theme }: Props) =>
      theme ? theme.darkOrange : undefined};
    border-color: ${({ theme }: Props) =>
      theme ? theme.darkOrange : undefined};
  }
`;

export default Button;
