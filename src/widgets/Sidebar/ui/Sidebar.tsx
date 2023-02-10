import React, { useState } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import classes from './Sidebar.module.scss'
import { ThemeSwitcher } from 'widgets/ThemeSwitcher'

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
    >
      <button onClick={onToggle}>toggle</button>
      <div className={classes.switchers}>
        <ThemeSwitcher />
        {/* lang switcher */}
      </div>
    </div>
  )
}
