import '@emotion/react';
import { ThemeCustom } from '@/interfaces/themeCustom';

declare module '@emotion/react' {
  export interface Theme {
    text: string;
    background: string;
    colorPrimary: string;
  }
}
