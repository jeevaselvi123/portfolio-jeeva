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

export interface SkeletonType {
  type: string
}

export interface BlogCardType {
  blogData: BlogType
}

export interface SocialMediaType {
  name: string
  url: string
}

export interface SkillCertificationType {
  name: string
  logo: string
}

export interface InfoType {
  _id: string
  aliasName: string
  fullName: string
  mainImg: string
  aboutImg: string
  designation: string
  profileNames: Array<string>
  email: string
  phoneNo: string
  socialMedias: Array<SocialMediaType>
  description: string
  skills: Array<SkillCertificationType>
  certification: Array<SkillCertificationType>
  contactDesc: string
  address: string
}

export interface BlogType {
  _id: string
  infoId: string
  logo: string
  heading: string
  desc: string
  content: string
  author: string
  authorImg: string
  writtenOn: string
}
