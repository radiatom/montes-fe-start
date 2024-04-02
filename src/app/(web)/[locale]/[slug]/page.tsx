// component
import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { FC } from 'react'

import { PageDocument, PageQuery } from '@/app/graphql/generated'
import { SlugPage } from '@/app/modules'
import { getClient } from '@/packages/apollo'

interface ISlugPageProps {
  params: { locale: string; slug: string }
}

// revalidate
export const revalidate = 0

//metadata
export const generateMetadata = async ({ params }: ISlugPageProps): Promise<Metadata> => {
  const { data } = await getClient()
    .query<PageQuery>({
      query: PageDocument,
      variables: { slug: params.slug },
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
const getPage = async (slug: string) => {
  const { data } = await getClient().query<PageQuery>({
    query: PageDocument,
    variables: { slug: slug },
  })

  return data
}

const PageSlug: FC<ISlugPageProps> = async ({ params }) => {
  const [page] = await Promise.all([getPage(params.slug)])

  // return
  return <SlugPage page={page} params={params} />
}

export default PageSlug
