import { FC } from 'react'

import { PageQuery } from '@/app/graphql/generated'
import { ConstructorComponent } from '@/app/shared/modules'

import styles from './slug.module.scss'

//interface
interface ISlugPageProps {
  page: PageQuery
  params: { locale: string; slug: string }
}

//component
const SlugPage: FC<Readonly<ISlugPageProps>> = ({ params, page }) => {
  //return
  return (
    <div className={styles.slug}>
      <ConstructorComponent page={page} params={params} />
    </div>
  )
}

export default SlugPage
