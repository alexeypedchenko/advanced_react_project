import React, { memo, useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { classNames } from 'shared/lib/classNames/classNames'
import { Button, ButtonTheme } from 'shared/ui/Button/Button'
import { Input } from 'shared/ui/Input/Input'
import { Text, TextTheme } from 'shared/ui/Text/Text'
import { getLoginState } from '../../model/selectors/getLoginState/getLoginState'
import { loginByUsername } from '../../model/services/loginByUsername/loginByUsername'
import { loginActions } from '../../model/slice/loginSlice'
import classes from './LoginForm.module.scss'

interface LoginFormProps {
  className?: string
}

export const LoginForm = memo(({ className }: LoginFormProps) => {
  const dispatch = useDispatch()
  const { username, password, error, isLoading } = useSelector(getLoginState)

  const onChangeUsername = useCallback(
    (value: string) => {
      dispatch(loginActions.setUsername(value))
    },
    [dispatch]
  )

  const onChangePassword = useCallback(
    (value: string) => {
      dispatch(loginActions.setPassword(value))
    },
    [dispatch]
  )

  const onLoginClick = useCallback(() => {
    dispatch(
      loginByUsername({
        username,
        password,
      })
    )
  }, [dispatch, username, password])

  return (
    <div className={classNames(classes.LoginForm, {}, [className])}>
      <Text title="Login form" />
      {error && <Text text={error} theme={TextTheme.ERROR} />}
      <Input
        value={username}
        placeholder="Login"
        autoFocus
        onChange={onChangeUsername}
      />
      <Input
        value={password}
        placeholder="Password"
        onChange={onChangePassword}
      />
      <Button
        theme={ButtonTheme.OUTLINE}
        disabled={isLoading}
        onClick={onLoginClick}
      >
        Login
      </Button>
    </div>
  )
})
