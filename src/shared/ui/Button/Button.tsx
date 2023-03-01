import React, { ButtonHTMLAttributes, FC } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import classes from './Button.module.scss'

export enum ButtonTheme {
  CLEAR = 'clear',
  CLEAR_INVERTED = 'clearInverted',
  OUTLINE = 'outline',
  BACKGROUND = 'background',
  BACKGROUND_INVERTED = 'backgroundInverted',
}

export enum ButtonSize {
  M = 'size_m',
  L = 'size_l',
  XL = 'size_xl',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string
  theme?: ButtonTheme
  square?: boolean
  size?: ButtonSize
}

export const Button: FC<ButtonProps> = (props) => {
  const {
    className,
    theme,
    square,
    size = ButtonSize.M,
    children,
    ...otherProps
  } = props

  const mods: Record<string, boolean> = {
    [classes.square]: square,
  }
  return (
    <button
      type="button"
      className={classNames(classes.Button, mods, [
        className,
        classes[theme],
        classes[size],
      ])}
      {...otherProps}
    >
      {children}
    </button>
  )
}
