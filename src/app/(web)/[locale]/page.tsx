import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { FC } from 'react'

import { PageDocument, PageQuery } from '@/app/graphql/generated'
import { HomePage } from '@/app/modules'
import { getClient } from '@/packages/apollo'

interface IHomePageProps {
  params: { locale: string }
}

// revalidate
export const revalidate = 0

//metadata
export const generateMetadata = async ({ params }: IHomePageProps): Promise<Metadata> => {
  const { data } = await getClient()
    .query<PageQuery>({
      query: PageDocument,
      variables: { slug: 'main' },
    })
    .catch(() => notFound())

  const title = JSON.parse(data?.page?.data?.pure_meta_title || '')[`${params.locale}`]
  const description = JSON.parse(data?.page?.data?.pure_meta_description || '')[`${params.locale}`]

  // return
  return {
    title: title,
    description: description,
    alternates: {
      canonical: `${params.locale}`,
    },
  }
}

//data
const getPage = async () => {
  const { data } = await getClient().query<PageQuery>({
    query: PageDocument,
    variables: { slug: 'main' },
  })

  return data
}

// page
const Page: FC<Readonly<IHomePageProps>> = async ({ params }) => {
  const [page] = await Promise.all([getPage()])

  // return
  return <HomePage page={page} params={params} />
}

export default Page
