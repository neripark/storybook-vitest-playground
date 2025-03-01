import type { Preview } from '@storybook/react';
import { initialize, mswDecorator } from 'msw-storybook-addon';

// MSWの初期化
initialize();

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
  decorators: [mswDecorator],
};

export default preview; 