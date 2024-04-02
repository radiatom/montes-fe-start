'use client'
import Button from '@mui/material/Button'
import Image from 'next/image'
import Link from 'next/link'
import { FC, useMemo } from 'react'

import { TitleComponent } from '@/app/shared/components'
import { shimmer } from '@/app/shared/services'

import styles from './hero.module.scss'

interface IHeroComponentProps {
  blockData: string
  params: { locale: string }
}

// component
const HeroComponent: FC<Readonly<IHeroComponentProps>> = ({ blockData, params }) => {
  const blockContent = useMemo(() => JSON.parse(blockData), [blockData])

  const image = useMemo(
    () =>
      blockContent.find((item: { layout: string }) => item.layout === 'image').attributes.image[0]
        .original,
    [blockContent],
  )

  const title = useMemo(
    () => blockContent.find((item: { layout: string }) => item.layout === 'title').attributes,
    [blockContent],
  )

  const descriptions = useMemo(
    () => blockContent.filter((item: { layout: string }) => item.layout === 'description'),
    [blockContent],
  )

  const buttons = useMemo(
    () => blockContent.filter((item: { layout: string }) => item.layout === 'button'),
    [blockContent],
  )
  // return
  return (
    <div className={'container'}>
      <div className={`${styles.hero} `}>
        <div className={styles.hero__main}>
          <TitleComponent
            size={title[`size`]}
            title={title[`title_${params.locale}`]}
            className={styles.hero__main__title}
          />

          <p className={styles.hero__main__text}>
            {descriptions[0].attributes[`description_${params.locale}`]}
          </p>

          <Link
            href={buttons[0].attributes[`link_${params.locale}`]}
            className={styles.hero__buttons_container}
          >
            <Button variant='outlined' size={'large'} color={'info'}>
              {buttons[0].attributes[`text_${params.locale}`]}
            </Button>
          </Link>
        </div>

        <div className={styles.hero__image_wrapper}>
          <Image
            src={image}
            alt={`hero banner`}
            fill
            sizes={'50vw'}
            blurDataURL={shimmer(100, 100)}
            // placeholder={'blur'}
            style={{ objectFit: 'contain' }}
          />
        </div>
      </div>
    </div>
  )
}

export default HeroComponent
