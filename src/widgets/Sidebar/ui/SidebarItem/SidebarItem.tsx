import React, { memo } from 'react'
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink'
import { classNames } from 'shared/lib/classNames/classNames'
import { SidebarItemType } from '../../model/items'
import classes from './SidebarItem.module.scss'

interface SidebarItemProps {
  item?: SidebarItemType
  collapsed?: boolean
}

export const SidebarItem = memo(({ item, collapsed }: SidebarItemProps) => {
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
