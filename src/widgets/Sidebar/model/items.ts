import React from 'react'
import { RoutePath } from 'shared/config/routeConfig/routeConfig'
import MainIcon from 'shared/assets/icons/main-20-20.svg'
import AboutIcon from 'shared/assets/icons/about-20-20.svg'
import ProfileIcon from 'shared/assets/icons/profile-20-20.svg'
import ArticleIcon from 'shared/assets/icons/article-20-20.svg'

export interface SidebarItemType {
  path: string
  text: string
  icon?: React.VFC<React.SVGProps<SVGSVGElement>>
  authOnly?: boolean
}

export const sidebarItemList: SidebarItemType[] = [
  {
    path: RoutePath.main,
    text: 'Home',
    icon: MainIcon,
  },
  {
    path: RoutePath.about,
    text: 'About',
    icon: AboutIcon,
  },
  {
    path: RoutePath.profile,
    text: 'Profile',
    icon: ProfileIcon,
    authOnly: true,
  },
  {
    path: RoutePath.articles,
    text: 'Articles',
    icon: ArticleIcon,
    authOnly: true,
  },
]
