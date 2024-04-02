import { FC } from 'react'

import { PageQuery } from '@/app/graphql/generated'
import { ConstructorComponent } from '@/app/shared/modules'

import styles from './home.module.scss'

//interface
interface IHomeProps {
  page: PageQuery
  params: { locale: string }
}

//component
const HomePage: FC<Readonly<IHomeProps>> = ({ page, params }) => {
  //return
  return (
    <div className={styles.home}>
      <ConstructorComponent page={page} params={params} />
    </div>
  )
}

export default HomePage
