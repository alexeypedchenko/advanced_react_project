import React, { useState } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import { ThemeSwitcher } from 'widgets/ThemeSwitcher'
import { LangSwitcher } from 'widgets/LangSwitcher'
import classes from './Sidebar.module.scss'

interface SidebarProps {
  className?: string
}

export const Sidebar = ({ className }: SidebarProps) => {
  const [collapsed, setCollapsed] = useState(false)
  const onToggle = () => {
    setCollapsed((state) => !state)
  }
  return (
    <div
      className={classNames(
        classes.Sidebar,
        { [classes.collapsed]: collapsed },
        [className]
      )}
      data-testid="sidebar"
    >
      <button type="button" onClick={onToggle} data-testid="sidebar-toggle">
        toggle
      </button>
      <div className={classes.switchers}>
        <ThemeSwitcher />
        <LangSwitcher />
      </div>
    </div>
  )
}
