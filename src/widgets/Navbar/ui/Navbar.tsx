import React from 'react'
import { RoutePath } from 'shared/config/routeConfig/routeConfig'
import { classNames } from 'shared/lib/classNames/classNames'
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink'
import classes from './Navbar.module.scss'

interface NavbarProps {
  className?: string
}

export const Navbar = ({ className }: NavbarProps) => (
  <div className={classNames(classes.Navbar, {}, [className])}>
    <div className={classes.links}>
      <AppLink theme={AppLinkTheme.SECONDARY} to={RoutePath.main}>
        Home
      </AppLink>
    </div>
  </div>
)
