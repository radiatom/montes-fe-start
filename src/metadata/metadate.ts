import type { Metadata, Viewport } from 'next'

export const initialMetadata: Metadata = {
  metadataBase: new URL(`${process.env.NEXT_PUBLIC_APP_URL}`),
  title: {
    default: 'Montes',
    template: '%s | Montes - description',
  },
  description: 'Montes - description',
  keywords: ['News'],
  applicationName: 'Montes',
  openGraph: {
    title: {
      default: 'Montes',
      template: '%s | Montes - description',
    },
    description: 'Montes - description',
    siteName: 'Montes',
    locale: 'en',
    images: '/logo.png',
    type: 'website',
  },
  manifest: '/manifest.json',
}

// initial viewport
export const initialViewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#fff',
}
