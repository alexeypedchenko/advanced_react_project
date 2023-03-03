import React from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import { Button } from 'shared/ui/Button/Button'
import { Input } from 'shared/ui/Input/Input'
import classes from './LoginForm.module.scss'

interface LoginFormProps {
  className?: string
}

export const LoginForm = ({ className }: LoginFormProps) => {
  return (
    <div className={classNames(classes.LoginForm, {}, [className])}>
      <Input placeholder="Login" autoFocus />
      <Input placeholder="Password" />
      <Button>Login</Button>
    </div>
  )
}
