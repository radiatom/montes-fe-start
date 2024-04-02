import type { Metadata, Viewport } from 'next'
import { FC, ReactNode } from 'react'

import { Settings, SettingsDocument, SettingsQuery } from '@/app/graphql/generated'
import { WrapperWithBannerComponent } from '@/app/shared/components'
import { initialMetadata, initialViewport } from '@/metadata'
import { getClient } from '@/packages/apollo'

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
const ItemLayout: FC<Readonly<IRootLayout>> = async ({ params, children }) => {
  const [settings] = await Promise.all([getSettings()])
  // return
  return (
    <WrapperWithBannerComponent settings={settings.settings as Settings}>
      {children}
    </WrapperWithBannerComponent>
  )
}

export default ItemLayout
