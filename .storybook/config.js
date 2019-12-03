import { configure, addParameters } from '@storybook/react';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
import { colors } from '@sumofus/branding';

addParameters({
  backgrounds: [
    { name: 'white', value: '#ffffff', default: true },
    { name: 'night sky', value: colors.nightSky },
    { name: 'chalk gray', value: colors.chalkGray },
    { name: 'dingy gray', value: colors.dingyGray },
    { name: 'overcast gray', value: colors.overcastGray },
    { name: 'slate gray', value: colors.slateGray },
  ],
  viewport: {
    viewports: INITIAL_VIEWPORTS,
  },
});

// automatically import all files ending in *.stories.js
configure(() => [require('../packages/component-button/stories')], module);
