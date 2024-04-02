import { FC } from 'react'

import { PageQuery, Settings } from '@/app/graphql/generated'

interface IHomeComponent {
  page: PageQuery
  params: { locale: string }
}

const SLUG_CONSTANTS = {
  blokDostavkaPoVsyomuSvitu: 'blok-dostavka-po-vsyomu-svitu',
}

//component
const ConstructorComponent: FC<IHomeComponent> = ({ page, params }) => {
  //return
  return (
    <>
      {/*{page?.page?.data?.blocks?.map((el) => {*/}
      {/*  if (el.slug === SLUG_CONSTANTS.blokDostavkaPoVsyomuSvitu) {*/}
      {/*    return <HeroComponent params={params} blockData={el.content || ''} />*/}
      {/*  }*/}
      {/*})}*/}
    </>
  )
}

export default ConstructorComponent
