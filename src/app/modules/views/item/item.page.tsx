import { FC } from 'react'

import { PageQuery } from '@/app/graphql/generated'
import { ConstructorComponent } from '@/app/shared/modules'

import styles from './item.module.scss'

//interface
interface IItemPageProps {
  page: PageQuery
  params: { locale: string; slug: string }
}

//component
const ItemPage: FC<Readonly<IItemPageProps>> = ({ params, page }) => {
  //return
  return (
    <div className={styles.item}>
      <ConstructorComponent page={page} params={params} />
    </div>
  )
}

export default ItemPage
