import type { Theme } from '@mui/material'

export const menu: Theme['components'] = {
  MuiMenu: {
    styleOverrides: {
      root: {
        svg: {
          width: '1.8rem',
          height: '1.8rem',
        },
      },
    },
  },
  MuiList: {
    styleOverrides: {
      root: {
        backgroundColor: '#fff',
      },
    },
  },
  MuiPaper: {
    styleOverrides: {
      root: {
        backgroundColor: 'red !important',
        borderRadius: '1rem',
      },
    },
  },
  MuiMenuItem: {
    styleOverrides: {
      root: {
        borderRadius: '0',
        fontSize: '1.6rem',
        color: 'black',
        transition: 'all 0.25s ease, color 0.25s ease',

        '&: hover': {
          color: 'var(--font-color-bright-red)',
        },
      },
    },
  },
  MuiListItemIcon: {
    styleOverrides: {
      root: {
        minWidth: '36px',
        color: 'inherit',
      },
    },
  },
}
