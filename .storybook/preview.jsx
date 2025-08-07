import React from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle, defaultTheme, darkTheme } from '../src/utils';

/** @type { import('@storybook/react').Preview } */
const preview = {
  parameters: {
    backgrounds: {
      default: 'Default Theme',
      values: [
        {
          name: 'Default Theme',
          value: '#F4F5F7',
        },
        {
          name: 'Dark Theme',
          value: '#2C2C2C',
        },
      ],
    },
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
  decorators: [
    (Story) => {
      return (
        <ThemeProvider theme={defaultTheme}>
          <GlobalStyle />
          <div style={{ padding: '20px', backgroundColor: '#f5f5f5' }}>
            <Story />
          </div>
        </ThemeProvider>
      );
    },
  ],
};

export default preview;
