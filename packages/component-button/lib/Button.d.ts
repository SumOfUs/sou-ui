/// <reference types="react" />
import { themes } from '@sumofus/branding';
export interface Props extends React.HTMLProps<HTMLButtonElement> {
    theme?: typeof themes.sumofus;
}
declare const Button: any;
export default Button;
