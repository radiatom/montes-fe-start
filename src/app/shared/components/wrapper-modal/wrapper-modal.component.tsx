import { Dialog, IconButton } from '@mui/material'
import { CloseIcon } from 'next/dist/client/components/react-dev-overlay/internal/icons/CloseIcon'
import { Dispatch, FC, ReactNode } from 'react'

import { FormSubmitProvider } from '@/app/shared/components'

import styles from './wrapper-modal.module.scss'

interface IRequestModalComponentProps {
  openModal: boolean
  setOpenModal: Dispatch<boolean>
  children: ReactNode
}

// component
const WrapperModalComponent: FC<Readonly<IRequestModalComponentProps>> = ({
  openModal,
  setOpenModal,
  children,
}) => {
  // return
  return (
    <Dialog keepMounted open={openModal} onClose={() => setOpenModal(false)}>
      <FormSubmitProvider>
        <div className={styles.wrapper_modal}>{children}</div>
      </FormSubmitProvider>

      <IconButton
        aria-label='close'
        onClick={() => setOpenModal(false)}
        sx={{
          position: 'absolute',
          right: 8,
          top: 8,
          color: (theme) => theme.palette.grey[500],
          zIndex: '9',
        }}
      >
        <CloseIcon />
      </IconButton>
    </Dialog>
  )
}

export default WrapperModalComponent
