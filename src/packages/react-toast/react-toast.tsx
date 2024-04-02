import { CSSProperties } from 'react'
import toast from 'react-hot-toast'

interface IToast {
  (msg: string, type: 'success' | 'error' | 'custom'): void
}

const style: CSSProperties = {
  backgroundColor: 'var(--bg-color-primary)',
  backdropFilter: 'blur(20px)',
  boxShadow: 'var(--box-shadow-primary)',
  fontFamily: 'inherit, sans-serif',
  fontSize: '1.6rem',
  color: 'inherit',
  wordWrap: 'break-word',
  lineHeight: '1.5',
}

// react toast
const ReactToast = () => {
  const customToast: IToast = (msg, type) => {
    toast[type](msg, {
      position: 'top-center',
      duration: 3000,
      style,
    })
  }

  // return
  return { customToast }
}

export const { customToast } = ReactToast()
