import { createContext, useContext } from 'react'
import { ActivePathContextType } from 'src/lib/interfaces'

const ActivePathContext = createContext<ActivePathContextType>({
  activePath: 'Home',
  setActivePath: () => {},
})

export default ActivePathContext

export const useActivePath = () => useContext(ActivePathContext)
