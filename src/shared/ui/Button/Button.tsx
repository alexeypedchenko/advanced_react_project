import React, { ButtonHTMLAttributes, FC, memo } from 'react'
import { classNames, Mods } from 'shared/lib/classNames/classNames'
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
  disabled?: boolean
}

export const Button: FC<ButtonProps> = memo((props) => {
  const {
    className,
    theme = ButtonTheme.OUTLINE,
    square,
    size = ButtonSize.M,
    children,
    disabled,
    ...otherProps
  } = props

  const mods: Mods = {
    [classes.square]: square,
    [classes.disabled]: disabled,
  }

  return (
    <button
      type="button"
      className={classNames(classes.Button, mods, [
        className,
        classes[theme],
        classes[size],
      ])}
      disabled={disabled}
      {...otherProps}
    >
      {children}
    </button>
  )
})
