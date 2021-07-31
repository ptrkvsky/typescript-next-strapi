import { addDecorator } from '@storybook/react';
import { ThemeProvider } from '@emotion/react';
import { withThemes } from '@react-theming/storybook-addon';
import { themeDark, themeLight } from '../src/styles/theme';

const themes = [themeDark, themeLight];

addDecorator(withThemes(ThemeProvider, themes));

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
