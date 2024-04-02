import ManageAccountsIcon from '@mui/icons-material/ManageAccounts'
import { Drawer } from '@mui/material'
import Button from '@mui/material/Button'
import Tooltip from '@mui/material/Tooltip'
import Image from 'next/image'
import Link from 'next/link'
import { useParams } from 'next/navigation'
import { FC } from 'react'

import { TextInSite } from '@/app/graphql/generated'
import { SideMenuComponent } from '@/app/modules/layouts/root-layout/elements'
import { BurgerBtnComponent, LangSelectComponent } from '@/app/shared/components'
import { ImgLogo } from '@/app/shared/images'
import { shimmer } from '@/app/shared/services'
import { useGlobalStore } from '@/app/shared/stores'

import styles from './header.module.scss'

interface IHeaderComponentProps {
  sideBar: {
    title: string
    pages?: ({ slug: string; pure_title: string } | null)[] | null | undefined
  } | null
  textInSite: TextInSite[]
}

// component
const HeaderComponent: FC<IHeaderComponentProps> = ({ sideBar, textInSite }) => {
  const { locale, slug } = useParams()

  const handleChangeGlobalStore = useGlobalStore((state) => state.handleChangeGlobalStore)

  // return
  return (
    <>
      <header className={`container`}>
        <div className={styles.header}>
          <Link
            href={'/'}
            className={`${styles.header__logo} ${!slug && styles.header__logo__disabled}`}
          >
            <Image
              src={ImgLogo.src}
              alt={'logo header'}
              fill
              placeholder={'blur'}
              blurDataURL={shimmer(100, 100)}
              sizes={'10vw'}
              style={{ objectFit: 'contain' }}
            />
          </Link>

          <nav className={styles.header__menu}>
            {sideBar?.pages?.map((page, index) => (
              <li key={index}>
                <Link
                  href={`/${locale}/${page?.slug}`}
                  className={`${styles.header__menu__item} ${slug === page?.slug && styles.header__menu__item__active}`}
                >
                  {JSON.parse(page?.pure_title || '')[`${locale}`]}
                </Link>
              </li>
            ))}
          </nav>

          <div className={styles.header__right}>
            <LangSelectComponent />

            <div className={styles.header__side_menu}>
              <BurgerBtnComponent />
            </div>
          </div>
        </div>
      </header>

      <Drawer
        sx={{ zIndex: '110' }}
        anchor={'left'}
        color={'secondary'}
        onClose={() => handleChangeGlobalStore({ isMenuOpened: false })}
      >
        <SideMenuComponent sideBar={sideBar} />
      </Drawer>
    </>
  )
}

export default HeaderComponent
