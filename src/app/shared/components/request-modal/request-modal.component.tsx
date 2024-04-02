'use client'

import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import { useParams } from 'next/navigation'
import { Dispatch, FC, SetStateAction } from 'react'
import { Controller, useFormContext } from 'react-hook-form'

import { useOrderCreateMutation } from '@/app/graphql/generated'
import { FormComponent, InputMask } from '@/app/shared/components'
import getText from '@/app/shared/services/getText'
import { minLength2Pattern, phonePattern, required } from '@/app/shared/validation'

import styles from './request-modal.module.scss'

interface IProps {
  title: string
  buttonsText: string
  descriptions: { attributes: Record<string, string> }[]
  setIsModalOpen: Dispatch<SetStateAction<boolean>>
  setOpenSuccessModal: Dispatch<SetStateAction<boolean>>
}

//component
const RequestModalComponent: FC<IProps> = ({
  title,
  buttonsText,
  descriptions,
  setIsModalOpen,
  setOpenSuccessModal,
}) => {
  const { locale } = useParams()

  const { reset } = useFormContext()

  const [orderCreate] = useOrderCreateMutation({
    onCompleted: (data) => {
      reset()
      setIsModalOpen(false)
      setOpenSuccessModal(true)
    },

    onError: (error) => {
      console.log('error:', error)
    },
  })
  const sendForm = async (values: { name: string; email: string; comment: string }) => {
    await orderCreate({ variables: { input: values } })
  }
  //return
  return (
    <>
      <h3 className={styles.request_modal__title}>{title}</h3>

      <FormComponent
        className={`${styles.request_modal__form}`}
        onSubmit={sendForm}
        formMethods={({ control }) => {
          return (
            <>
              <Controller
                control={control}
                name={'name'}
                render={({ field: { value, onChange }, fieldState: { error } }) => (
                  <TextField
                    color={error?.message?.toString() ? 'error' : 'primary'}
                    error={!!error?.message?.toString()}
                    type='text'
                    label={
                      <div className={styles.request_modal__label}>
                        {descriptions[1].attributes[`description_${locale}`]} <span>*</span>
                      </div>
                    }
                    variant='standard'
                    value={value || ''}
                    onChange={onChange}
                    helperText={error?.message?.toString()}
                  />
                )}
                rules={{
                  required: required(locale as string),
                  pattern: minLength2Pattern(locale as string),
                }}
              />

              <Controller
                control={control}
                name={'phone'}
                render={({ field: { value, onChange }, fieldState: { error } }) => (
                  <InputMask
                    error={error?.message?.toString()}
                    label={descriptions[2].attributes[`description_${locale}`]}
                    value={value || ''}
                    onChange={onChange}
                    helperText={error?.message?.toString()}
                  />
                )}
                rules={{
                  required: required(locale as string),
                  pattern: phonePattern(locale as string),
                }}
              />

              <Controller
                control={control}
                name={'comment'}
                render={({ field: { value, onChange }, fieldState: { error } }) => (
                  <TextField
                    color={error?.message?.toString() ? 'error' : 'primary'}
                    error={!!error?.message?.toString()}
                    type='text'
                    label={
                      <div className={styles.request_modal__label}>
                        {descriptions[3].attributes[`description_${locale}`]} <span>*</span>
                      </div>
                    }
                    variant='standard'
                    value={value || ''}
                    onChange={onChange}
                    helperText={error?.message?.toString()}
                  />
                )}
              />

              <div>
                <Button variant={'outlined'} type={'submit'} color={'info'} size={'small'}>
                  {buttonsText}
                </Button>
              </div>
            </>
          )
        }}
      />
    </>
  )
}

export default RequestModalComponent
