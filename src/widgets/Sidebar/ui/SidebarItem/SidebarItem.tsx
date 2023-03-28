import React, { memo } from 'react'
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink'
import { classNames } from 'shared/lib/classNames/classNames'
import { SidebarItemType } from '../../model/items'
import classes from './SidebarItem.module.scss'
import { useSelector } from 'react-redux'
import { getUserAuthData } from 'entities/User'

interface SidebarItemProps {
  item: SidebarItemType
  collapsed?: boolean
}

export const SidebarItem = memo(({ item, collapsed }: SidebarItemProps) => {
  const isAuth = useSelector(getUserAuthData)

  if (item.authOnly && !isAuth) {
    return null
  }

  return (
    <AppLink
      theme={AppLinkTheme.SECONDARY}
      to={item.path}
      className={classNames(
        classes.SidebarItem,
        { [classes.сollapsed]: collapsed },
        []
      )}
    >
      {item.icon && <item.icon />}
      {!collapsed && item.text}
    </AppLink>
  )
})
