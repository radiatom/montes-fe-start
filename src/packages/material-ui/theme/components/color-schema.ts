import { CssVarsThemeOptions } from '@mui/material'

export const colorSchema: CssVarsThemeOptions = {
  colorSchemes: {
    dark: {
      palette: {
        mode: 'dark',
        background: {
          default: '#222f3e',
          paper: '#222f3e',
        },
        primary: {
          main: '#e7e6e6',
        },
        secondary: {
          main: '#fff',
        },
        success: {
          main: '#388e3c',
        },
        info: {
          main: '#1971b7',
        },
        text: {
          primary: '#ffffff',
          secondary: '#dcdbdb',
        },
      },
    },
    light: {
      palette: {
        mode: 'light',
        background: {
          default: '#f1f1f1',
          paper: '#ffffff',
        },
        primary: {
          main: '#314759',
        },
        secondary: {
          main: '#364b62',
        },
        success: {
          main: '#388e3c',
        },
        info: {
          main: '#1769aa',
        },
        text: {
          primary: '#314759',
          secondary: '#364b62',
        },
      },
    },
  },
}
