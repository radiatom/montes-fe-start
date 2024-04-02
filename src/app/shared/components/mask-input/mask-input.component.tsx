'use client'

import { TextField } from '@mui/material'
import React, { FC } from 'react'
import InputMask from 'react-input-mask'

import styles from './mask-input.module.scss'
interface IProps {
  error?: string
  label: string
  value: any
  onChange: (value: any) => void
  helperText?: string
}

// Will work fine
const MaskInputComponent: FC<IProps> = ({ value, onChange, error, label }) => {
  return (
    <InputMask mask={'+99(999)-999-99-99'} value={value || ''} onChange={onChange}>
      <TextField
        color={error ? 'error' : 'primary'}
        error={!!error}
        type='text'
        label={
          <div className={styles.mask_input__label}>
            {label} <span>*</span>
          </div>
        }
        variant='standard'
        onWheelCapture={(e) => e.currentTarget.blur()}
        helperText={error}
      />
    </InputMask>
  )
}

export default MaskInputComponent
