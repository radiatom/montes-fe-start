'use client'

import dynamic from 'next/dynamic'
import { FC, ReactNode } from 'react'
import { Toaster } from 'react-hot-toast'

import { SettingsQuery, TextInSite } from '@/app/graphql/generated'
import { ScrollToTopComponent } from '@/app/shared/components'

import '@/styles/globals.scss'

import FooterComponent from './elements/footer/footer.component'
import { HeaderComponent } from './elements'
import styles from './root-layout.module.scss'

const ProgressBar = dynamic(() => import('next-nprogress-bar').then((c) => c.AppProgressBar), {
  ssr: false,
})

interface IRootLayoutComponent {
  settings: SettingsQuery
  children: ReactNode
  params: { locale: string; slug: string }
}

// component
const RootLayoutComponent: FC<IRootLayoutComponent> = ({ children, settings }) => {
  // return
  return (
    <body className={styles.root_layout}>
      {settings.settings?.sideBar && (
        <div className={styles.root_layout__header}>
          <HeaderComponent
            sideBar={settings.settings.sideBar[0]}
            textInSite={settings.settings.textInSite as TextInSite[]}
          />
        </div>
      )}

      <div className={styles.root_layout__inner}>{children}</div>

      <div className={styles.root_layout__footer}>
        <FooterComponent settings={settings} />
      </div>

      <ScrollToTopComponent />

      <ProgressBar height={'5px'} color={'#e23047'} shallowRouting />

      <Toaster
        toastOptions={{
          className: '',
          style: {
            zIndex: '1400',
          },
          duration: 5000,
        }}
      />
    </body>
  )
}

export default RootLayoutComponent
