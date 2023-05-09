import { Dispatch, ReactNode, SetStateAction } from 'react'

export interface NavBarProps {
  window?: () => Window
  children?: React.ReactElement
}

export interface NavItemsType {
  label: string
  path: string
}

export interface ChildNodePropType {
  children: ReactNode
}

export type NavLinks = '' | 'Home' | 'About' | 'Blog' | 'Blogs' | 'Experience' | 'Contact'

export interface ActivePathContextType {
  activePath: NavLinks
  setActivePath: Dispatch<SetStateAction<NavLinks>>
}
