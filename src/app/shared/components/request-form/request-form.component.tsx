'use client'

import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import { useParams } from 'next/navigation'
import { Dispatch, FC, SetStateAction } from 'react'
import { Controller, useFormContext } from 'react-hook-form'

import { useOrderCreateMutation } from '@/app/graphql/generated'
import { FormComponent, InputMask } from '@/app/shared/components'
import { minLength2Pattern, phonePattern, required } from '@/app/shared/validation'

import styles from './request-form.module.scss'

interface IProps {
  buttonsText: string
  descriptions: { attributes: Record<string, string> }[]
  setOpenSuccessModal: Dispatch<SetStateAction<boolean>>
}

//component
const RequestFormComponent: FC<IProps> = ({ buttonsText, descriptions, setOpenSuccessModal }) => {
  const { locale } = useParams()

  const { reset } = useFormContext()

  const [orderCreate] = useOrderCreateMutation({
    onCompleted: (data) => {
      reset()
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
    <FormComponent
      className={`${styles.request_form}`}
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
                    <div className={styles.request_form__label}>
                      {descriptions[0].attributes[`description_${locale}`]} <span>*</span>
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
                  label={descriptions[1].attributes[`description_${locale}`]}
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
                    <div className={styles.request_form__label}>
                      {descriptions[2].attributes[`description_${locale}`]} <span>*</span>
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
  )
}

export default RequestFormComponent
