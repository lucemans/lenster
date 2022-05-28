import { Profile } from '@generated/types'
import create from 'zustand'
import { persist } from 'zustand/middleware'

interface AppState {
  staffMode: boolean
  setStaffMode: (staffMode: boolean) => void
  currentUserLoading: boolean
  setCurrentUserLoading: (currentUserLoading: boolean) => void
  profiles: Profile[]
  setProfiles: (profiles: Profile[]) => void
}

export const useAppStore = create(
  persist<AppState>(
    (set, _get) => ({
      staffMode: false,
      setStaffMode: (staffMode: boolean) => set(() => ({ staffMode })),
      currentUserLoading: false,
      setCurrentUserLoading: (currentUserLoading: boolean) =>
        set(() => ({ currentUserLoading })),
      profiles: [],
      setProfiles: (profiles) => set(() => ({ profiles }))
    }),
    {
      name: 'app-storage'
    }
  )
)

export default useAppStore
