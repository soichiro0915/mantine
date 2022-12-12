import create from 'zustand'
import { Session } from '@supabase/supabase-js'

type State = {
  session: Session | null
  setSession: (session: Session | null) => void
}

const useStore = create<State>((set) => ({
  session: null,
  setSession: (payload) => set({ session: payload }),
}))

export default useStore
