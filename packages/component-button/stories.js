import React from 'react';
import { IntlProvider } from 'react-intl';
import { action } from '@storybook/addon-actions';
import { Button, DonateButton } from './index';
import { theme } from '@sumofus/branding';
import { ThemeProvider } from 'styled-components';
import { withA11y } from '@storybook/addon-a11y';
import {
  withKnobs,
  text,
  boolean,
  number,
  select,
} from '@storybook/addon-knobs';

const themeDecorator = storyFn => (
  <ThemeProvider theme={theme}>{storyFn()}</ThemeProvider>
);
export default {
  title: 'Button',
  component: Button,
  decorators: [withKnobs, withA11y, themeDecorator],
};

export const normalButton = () => (
  <Button disabled={boolean('disabled', false)} onClick={action('clicked')}>
    {text('Label', 'Sign Petition')}
  </Button>
);

export const donateButton = () => (
  <IntlProvider
    locale={select(
      'I18n locale',
      {
        'English (USA)': 'en-US',
        'English (Britain)': 'en-GB',
        'English (India)': 'en-IN',
        German: 'de-DE',
        French: 'fr-fr',
        Spanish: 'es-es',
      },
      'en-GB'
    )}
  >
    <DonateButton
      onClick={action('click')}
      onFocus={action('focus')}
      onBlur={action('blur')}
      amount={number('Amount', 100000)}
      currency={select(
        'Currency',
        {
          Euro: 'EUR',
          'Pound Sterling': 'GBP',
          'United States Dollar': 'USD',
          'Canadian Dollar': 'CAD',
          'Australian Dollar': 'AUD',
          'New Zealand Dollar': 'NZD',
          'Indian Rupee': 'INR',
        },
        'EUR'
      )}
    />
  </IntlProvider>
);
