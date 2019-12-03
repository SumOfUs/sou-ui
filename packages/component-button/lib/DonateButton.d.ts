/// <reference types="react" />
import { Props as ButtonProps } from './Button';
interface Props extends ButtonProps {
    currency: string;
    amount: number;
}
declare const DonateButton: (props: Props) => JSX.Element;
export default DonateButton;
