import React, { memo } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import classes from './Loader.module.scss'

interface LoaderProps {
  className?: string
}

export const Loader = memo(({ className }: LoaderProps) => (
  <div className={classNames(classes.Loader, {}, [className])}>
    <div />
    <div />
    <div />
    <div />
    <div />
    <div />
    <div />
    <div />
  </div>
))
