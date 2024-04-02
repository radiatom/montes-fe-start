import type { Metadata, Viewport } from 'next'
import { NextIntlClientProvider } from 'next-intl'
import { FC, ReactNode } from 'react'

import { SettingsDocument, SettingsQuery } from '@/app/graphql/generated'
import { RootLayoutComponent } from '@/app/modules'
import { mainFont } from '@/fonts'
import { initialMetadata, initialViewport } from '@/metadata'
import { ApolloClient, getClient } from '@/packages/apollo'
import { ThemeRegistry } from '@/packages/material-ui'

import 'swiper/css/bundle'
import '@/styles/globals.scss'

interface IRootLayout {
  params: { locale: string; slug: string }
  children: ReactNode
}

// metadata
export const metadata: Metadata = initialMetadata
export const viewport: Viewport = initialViewport
export const revalidate = 0

//data
const getSettings = async () => {
  const { data } = await getClient().query<SettingsQuery>({
    query: SettingsDocument,
  })
  return data
}

//component
const RootLayout: FC<Readonly<IRootLayout>> = async ({ params, children }) => {
  const [settings] = await Promise.all([getSettings()])
  // return
  return (
    <html lang={params.locale} className={mainFont.className}>
      <ThemeRegistry>
        <ApolloClient>
          <NextIntlClientProvider locale={params.locale}>
            <RootLayoutComponent settings={settings} params={params}>
              {children}
            </RootLayoutComponent>
          </NextIntlClientProvider>
        </ApolloClient>
      </ThemeRegistry>
    </html>
  )
}

export default RootLayout
