import { notFound } from 'next/navigation'
import { getRequestConfig } from 'next-intl/server'

export const locales = ['uk', 'en']
export const defaultLocales = 'uk'

// export default getRequestConfig(async ({ locale }) => {
//   if (!locales.includes(locale as any)) notFound()
//
//   return {
//     messages: (await import(`./app/translations/${locale}.json`)).default,
//   }
// })
