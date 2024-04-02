'use client'

import { ToString } from '@formatjs/ecma402-abstract'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import Link from 'next/link'
import { useParams, usePathname } from 'next/navigation'
import { FC, useState } from 'react'

import { locales } from '@/i18n'

import styles from './lang-select.module.scss'

//interface
interface ILangSelect {
  type?: 'default' | 'mobile'
}

//component
export const LangSelectComponent: FC<Readonly<ILangSelect>> = ({ type = 'default' }) => {
  const { locale } = useParams()
  const pathname = usePathname()
  const [anchorElLang, setAnchorElLang] = useState<null | HTMLElement>(null)

  //return
  return (
    <>
      <div
        className={`${styles.lang_select} ${type === 'mobile' && styles.mobile} ${Boolean(anchorElLang) && styles.expanded}`}
        onClick={(event) => setAnchorElLang(event.currentTarget)}
      >
        <div>{ToString(locale).toUpperCase()}</div>

        <ExpandMoreIcon />
      </div>

      <Menu
        className={type ?? ''}
        anchorEl={anchorElLang}
        open={Boolean(anchorElLang)}
        onClose={() => setAnchorElLang(null)}
        onClick={() => setAnchorElLang(null)}
        transformOrigin={{ horizontal: 'center', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'center', vertical: 'bottom' }}
      >
        {locales
          .filter((item) => item !== locale)
          .map((item) => (
            <Link
              key={item}
              href={pathname.replace(/\/([^\/]+)/, `/${item}`)}
              replace
              locale={ToString(locale)}
            >
              <MenuItem>{item.toUpperCase()}</MenuItem>
            </Link>
          ))}
      </Menu>
    </>
  )
}
export default LangSelectComponent
