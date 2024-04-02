import type { Theme } from '@mui/material'

export const pagination: Theme['components'] = {
  MuiTablePagination: {
    styleOverrides: {
      root: {
        '& .MuiInputBase-root': {
          svg: {
            width: '2rem',
            height: '2rem',
            top: 'calc(50% - 1rem)',
            transition: 'all 0.25s ease',
          },

          '& .MuiSelect-select': {
            borderRadius: '0.4rem',
          },
        },

        '& .MuiTablePagination-input': {
          marginLeft: '8px',
          marginRight: '14px',
        },
      },
    },
  },
  MuiPaginationItem: {
    styleOverrides: {
      root: {
        fontSize: '1.4rem',
        fontWeight: 500,

        svg: {
          width: '2rem',
          height: '2rem',
        },
      },
    },
  },
}
