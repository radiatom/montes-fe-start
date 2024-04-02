import Tooltip from '@mui/material/Tooltip'
import Link from 'next/link'
import { useParams } from 'next/navigation'
import { FC } from 'react'

import { SettingsQuery, TextInSite } from '@/app/graphql/generated'
import { IconDomino } from '@/app/shared/icons'

import styles from './footer.module.scss'

interface IFooterComponent {
  settings: SettingsQuery
}

// component
const FooterComponent: FC<IFooterComponent> = ({ settings }) => {
  const { locale, slug } = useParams()

  const footerData = settings.settings?.footer?.find((el) => el?.title === 'footer')

  const textInSite = settings.settings?.textInSite

  const contacts = settings.settings?.contacts

  // return
  return (
    <footer className={`${styles.footer} `}>
      <div className={`${styles.footer__inner} container`}></div>

      <div className={`${styles.footer__develop}`}>
        <div className={'container'}>
          <div className={`${styles.footer__develop_container}`}>
            <p>all-right-reserved</p>

            <Tooltip title={'Розроблено DominoIT'} placement={'top'}>
              <Link
                href={'https://domino-it.agency/'}
                target={'_blank'}
                className={styles.footer__develop_container__logo}
              >
                <IconDomino />

                <p className={styles.footer__develop_container__text}>{'developed'}</p>
              </Link>
            </Tooltip>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default FooterComponent
