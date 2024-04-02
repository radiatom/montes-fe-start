import type { Theme } from '@mui/material'

export const button: Theme['components'] = {
  MuiButton: {
    styleOverrides: {
      root: ({ ownerState }) => ({
        ...(ownerState.variant === 'contained'
          ? {
              ...(ownerState.color === 'info'
                ? {
                    width: 'fit-content',
                    fontWeight: '400',
                    borderRadius: '3rem',
                    lineHeight: '1.8rem',
                    backgroundColor: 'transparent',
                    background: 'linear-gradient(to right, #e23047, #9d1225)',
                    color: 'var(--font-color-white)',
                    borderColor: 'var(--font-color-bright-red)',
                    transition: 'var(--transition)',

                    '&:hover': {
                      backgroundColor: 'transparent',
                      background: 'linear-gradient(to right, #e23047, #9d1225)',
                      color: 'var(--font-color-white)',
                      borderColor: 'var(--font-color-bright-red)',
                      boxShadow: 'none',
                    },
                  }
                : {}),

              ...(ownerState.size === 'small' && {
                fontSize: '1.4rem',
                padding: '1rem 1.8rem',
              }),

              ...(ownerState.size === 'large' && {
                fontSize: '1.6rem',
                padding: '1.7rem 3rem',
              }),
            }
          : {}),

        ...(ownerState.variant === 'outlined'
          ? {
              ...(ownerState.color === 'info'
                ? {
                    width: 'fit-content',
                    borderRadius: '3rem',
                    lineHeight: '1.8rem',
                    color: 'black',
                    background: 'linear-gradient(to right, #ffff, #fff)',
                    borderColor: 'var(--font-color-bright-red)',
                    transition: 'all var(--transition)',

                    '&:hover': {
                      color: 'var(--font-color-white)',
                      background: 'linear-gradient(to right, #e23047, #9d1225)',
                      borderColor: 'var(--font-color-bright-red)',
                      boxShadow: 'none',
                    },
                  }
                : {}),

              ...(ownerState.size === 'small' && {
                fontSize: '1.4rem',
                padding: '1rem 1.8rem',
              }),

              ...(ownerState.size === 'large' && {
                fontSize: '1.6rem',
                padding: '1.7rem 3rem',
              }),
            }
          : {}),
        ...(ownerState.fullWidth && {
          width: '100%',
        }),
      }),
    },
  },
  MuiIconButton: {
    styleOverrides: {
      root: {
        borderRadius: '1rem',
        fontSize: '1.6rem',
        color: 'inherit',
        transition: 'all 0.25s ease',
      },
    },
  },
}
