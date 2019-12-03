import * as React from 'react';
import { FormattedNumber } from 'react-intl';
import Button, { Props as ButtonProps } from './Button';

interface Props extends ButtonProps {
  currency: string;
  amount: number;
}
const DonateButton = (props: Props) => {
  const { currency, amount, ...buttonProps } = props;
  return (
    <Button {...buttonProps}>
      <FormattedNumber
        style="currency"
        minimumFractionDigits={0}
        maximumFractionDigits={0}
        currency={currency}
        value={amount}
      />
    </Button>
  );
};

export default DonateButton;
