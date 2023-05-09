import { useState } from 'react'
import ActivePathContext from '.'
import { ActivePathProviderType, NavLinks } from 'src/lib/interfaces'

const ActivePathProvider = ({ children }: ActivePathProviderType) => {
  const [activeLink, setActiveLink] = useState<NavLinks>('')

  return <ActivePathContext.Provider value={{ activePath: activeLink, setActivePath: setActiveLink }}>{children}</ActivePathContext.Provider>
}

export default ActivePathProvider
