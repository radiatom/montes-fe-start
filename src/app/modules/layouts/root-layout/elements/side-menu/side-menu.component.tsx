import Image from 'next/image'
import Link from 'next/link'
import { useParams, usePathname } from 'next/navigation'
import { FC } from 'react'

import { BurgerBtnComponent } from '@/app/shared/components'
import { ImgLogo } from '@/app/shared/images'
import { shimmer } from '@/app/shared/services'
import { useGlobalStore } from '@/app/shared/stores'

import styles from './side-menu.module.scss'

interface ISideMenuComponent {
  sideBar: {
    title: string
    pages?: ({ slug: string; pure_title: string } | null)[] | null | undefined
  } | null
}

// component
const SideMenuComponent: FC<Readonly<ISideMenuComponent>> = ({ sideBar }) => {
  const pathname = usePathname()

  const { locale, slug } = useParams()

  const handleChangeGlobalStore = useGlobalStore((state) => state.handleChangeGlobalStore)

  //return
  return (
    <>
      <section className={`${styles.side_menu} `}>
        <div className={styles.side_menu__header}>
          <Link
            onClick={() => handleChangeGlobalStore({ isMenuOpened: false })}
            href={`/${locale}`}
            className={styles.side_menu__logo}
            style={{
              pointerEvents: pathname === `/${locale}` ? 'none' : 'auto',
            }}
          >
            <Image
              src={ImgLogo.src}
              alt={'logo sidebar'}
              fill
              placeholder={'blur'}
              blurDataURL={shimmer(100, 100)}
              sizes={'50vw'}
              style={{ objectFit: 'contain' }}
            />
          </Link>

          <BurgerBtnComponent />
        </div>

        <nav className={styles.side_menu__nav}>
          {sideBar?.pages?.map((page, index) => (
            <li key={index}>
              <Link
                href={`/${locale}/${page?.slug === 'main' ? '' : page?.slug}`}
                onClick={() => handleChangeGlobalStore({ isMenuOpened: false })}
                className={`${styles.side_menu__nav__item} ${(slug === page?.slug || (!slug && page?.slug === 'main')) && styles.side_menu__nav__item__active}`}
              >
                {JSON.parse(page?.pure_title || '')[`${locale}`]}
              </Link>
            </li>
          ))}
        </nav>
      </section>
    </>
  )
}

export default SideMenuComponent
