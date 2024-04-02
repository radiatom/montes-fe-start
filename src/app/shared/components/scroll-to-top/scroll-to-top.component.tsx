'use client'

import KeyboardDoubleArrowUpIcon from '@mui/icons-material/KeyboardDoubleArrowUp'
import Button from '@mui/material/Button'
import { AnimatePresence, motion } from 'framer-motion'
import { usePathname } from 'next/navigation'
import { FC, useEffect, useState } from 'react'

import styles from './scroll-to-top.module.scss'

// component
const ScrollToTopComponent: FC = () => {
  const pathname = usePathname()

  const [buttonActive, setButtonActive] = useState<boolean>(false)

  const handleGoToTop = () => {
    typeof window !== 'undefined' &&
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      })
  }

  useEffect(() => {
    // prev position
    let prevScrollPosition = window.scrollY
    // on scroll
    window.onscroll = () => {
      // container
      const header = document.getElementById('header')
      // current position
      const currentScrollPosition = window.scrollY

      if (header) {
        // button to top control
        if (
          prevScrollPosition > currentScrollPosition &&
          currentScrollPosition > header.clientHeight * 1.28
        ) {
          setButtonActive(true)
        } else setButtonActive(false)
        // container control
        if (prevScrollPosition < currentScrollPosition && currentScrollPosition > 10) {
          header.style.top = `-${header.clientHeight + 2}px`
        } else {
          header.style.top = `0`
        }
      } else {
        // button to top control
        if (prevScrollPosition > currentScrollPosition && currentScrollPosition > 10) {
          setButtonActive(true)
        } else setButtonActive(false)
      }

      // return
      prevScrollPosition = currentScrollPosition
    }
  }, [pathname])

  // return
  return (
    <AnimatePresence>
      {buttonActive && (
        <motion.div
          className={`${styles.scroll_tot_top} pointer`}
          onClick={handleGoToTop}
          variants={anim_visible}
          initial={'initial'}
          animate={'animate'}
          exit={'exit'}
        >
          <Button
            variant={'contained'}
            color={'info'}
            sx={{ p: '0', minWidth: '34px', minHeight: '34px' }}
          >
            <KeyboardDoubleArrowUpIcon />
          </Button>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default ScrollToTopComponent

// component animate
const anim_visible = {
  initial: {
    opacity: 0,
    bottom: '-70px',
  },
  animate: {
    opacity: 1,
    bottom: '20px',
    transition: { default: { duration: 0.25, type: 'spring', stiffness: 100 } },
  },
  exit: {
    opacity: 0,
    bottom: '-70px',
    transition: { default: { duration: 0.25 } },
  },
}
