import React, { memo } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import classes from './Text.module.scss'

export enum TextTheme {
  PRIMARY = 'primary',
  ERROR = 'error',
}

interface TextProps {
  className?: string
  title?: string
  text?: string
  theme?: TextTheme
  align?: 'left' | 'right' | 'center'
  size?: 'md' | 'lg'
}

export const Text = memo(
  ({
    className,
    title,
    text,
    theme = TextTheme.PRIMARY,
    align = 'left',
    size = 'md',
  }: TextProps) => {
    return (
      <div
        className={classNames(classes.Text, {}, [
          className,
          classes[theme],
          classes[align],
          classes[size],
        ])}
      >
        {title && <p className={classes.title}>{title}</p>}
        {text && <p className={classes.text}>{text}</p>}
      </div>
    )
  }
)
