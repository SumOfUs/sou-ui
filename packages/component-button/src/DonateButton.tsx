import * as React from 'react';
import { FormattedNumber } from 'react-intl';
import Button, { IProps as IButtonProps } from './Button';

interface IProps extends IButtonProps {
  currency: string;
  amount: number;
  recurring?: boolean;
}
const DonateButton = (props: IProps) => {
  const { currency, amount, recurring, ...buttonProps } = props;
  return (
    <Button {...buttonProps}>
      <FormattedNumber
        style="currency"
        minimumFractionDigits={0}
        maximumFractionDigits={0}
        currency={props.currency}
        value={props.amount}
      />
    </Button>
  );
};

export default DonateButton;
