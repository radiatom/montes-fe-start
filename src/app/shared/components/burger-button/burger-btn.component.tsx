import { useGlobalStore } from '@/app/shared/stores'

import styles from './burger-btn.module.scss'

//component
const BurgerBtnComponent = () => {
  const isMenuOpened = useGlobalStore((state) => state.isMenuOpened)
  const handleChangeGlobalStore = useGlobalStore((state) => state.handleChangeGlobalStore)

  //return
  return (
    <div
      className={`${styles.burger_btn} ${isMenuOpened ? styles.burger_btn_active : ''} `}
      onClick={() => handleChangeGlobalStore({ isMenuOpened: !isMenuOpened })}
    >
      <div
        className={`${styles.burger_btn__line} ${
          isMenuOpened ? styles.burger_btn__line_active : ''
        } `}
      ></div>
    </div>
  )
}
export default BurgerBtnComponent
