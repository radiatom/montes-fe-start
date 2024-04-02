import { Outfit } from 'next/font/google'

// main font
export const mainFont = Outfit({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
  preload: true,
})
