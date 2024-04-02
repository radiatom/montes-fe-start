import { MetadataRoute } from 'next'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = process.env.APP_URL

  return [
    {
      url: `${baseUrl}`,
      lastModified: new Date(),
    },
  ]
}
