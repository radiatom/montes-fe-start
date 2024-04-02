'use client'

import { Experimental_CssVarsProvider as ThemeProvider } from '@mui/material/styles'
import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter'
import { FC, ReactNode } from 'react'

import { Theme } from './theme'

interface IThemeRegistry {
  children: ReactNode
}

// component
const ThemeRegistry: FC<Readonly<IThemeRegistry>> = ({ children }) => {
  // return
  return (
    <ThemeProvider theme={Theme} defaultMode={'light'} disableTransitionOnChange>
      <AppRouterCacheProvider>{children}</AppRouterCacheProvider>
    </ThemeProvider>
  )
}

export default ThemeRegistry
