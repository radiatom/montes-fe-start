import { create } from 'zustand'
import { devtools, persist } from 'zustand/middleware'

import { IDataLogin } from '@/app/shared/apis'

interface IState {
  isMenuOpened: boolean
  user?: IDataLogin
}

interface IStore extends IState {
  handleChangeGlobalStore: (value: Partial<IState>) => void
}

// global store
export const useGlobalStore = create<IStore>()(
  devtools(
    persist(
      (set) => ({
        isMenuOpened: false,
        handleChangeGlobalStore: (value) => set((state) => ({ ...state, ...value })),
      }),
      { name: 'global_store', version: 1 },
    ),
    { enabled: process.env.NODE_ENV !== 'production' },
  ),
)
