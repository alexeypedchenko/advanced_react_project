import React, { memo, useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { classNames } from 'shared/lib/classNames/classNames'
import { Button, ButtonTheme } from 'shared/ui/Button/Button'
import { Input } from 'shared/ui/Input/Input'
import { Text, TextTheme } from 'shared/ui/Text/Text'
import { loginByUsername } from '../../model/services/loginByUsername/loginByUsername'
import { loginActions, loginReducer } from '../../model/slice/loginSlice'
import classes from './LoginForm.module.scss'
import { getLoginUsername } from '../../model/selectors/getLoginUsername/getLoginUsername'
import { getLoginPassword } from '../../model/selectors/getLoginPassword/getLoginPassword'
import { getLoginError } from '../../model/selectors/getLoginError/getLoginError'
import { getLoginIsLoading } from '../../model/selectors/getLoginIsLoading/getLoginIsLoading'
import {
  DynamicModuleLoader,
  ReducerList,
} from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'

export interface LoginFormProps {
  className?: string
}

const initialReducers: ReducerList = {
  loginForm: loginReducer,
}

const LoginForm = memo(({ className }: LoginFormProps) => {
  const dispatch = useDispatch()
  const username = useSelector(getLoginUsername)
  const password = useSelector(getLoginPassword)
  const error = useSelector(getLoginError)
  const isLoading = useSelector(getLoginIsLoading)

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
    <DynamicModuleLoader reducers={initialReducers}>
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
    </DynamicModuleLoader>
  )
})

export default LoginForm
