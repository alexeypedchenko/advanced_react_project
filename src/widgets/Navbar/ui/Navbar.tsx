import React, { useCallback, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getUserAuthData, userActions } from 'entities/User'
import { LoginModal } from 'features/AuthByUsername'
import { classNames } from 'shared/lib/classNames/classNames'
import { Button, ButtonTheme } from 'shared/ui/Button/Button'
import classes from './Navbar.module.scss'

interface NavbarProps {
  className?: string
}

export const Navbar = ({ className }: NavbarProps) => {
  const [isAuthModal, setIsAuthModal] = useState(false)
  const authData = useSelector(getUserAuthData)
  const dispatch = useDispatch()

  const onShowModal = useCallback(() => {
    setIsAuthModal((prev) => !prev)
  }, [])

  const onLogout = useCallback(() => {
    dispatch(userActions.logout())
  }, [dispatch])

  if (authData) {
    return (
      <div className={classNames(classes.Navbar, {}, [className])}>
        <div className={classes.links}>
          <Button theme={ButtonTheme.CLEAR_INVERTED} onClick={onLogout}>
            Выйти
          </Button>
        </div>
      </div>
    )
  }

  return (
    <div className={classNames(classes.Navbar, {}, [className])}>
      <LoginModal isOpen={isAuthModal} onClose={setIsAuthModal} />
      <div className={classes.links}>
        <Button theme={ButtonTheme.CLEAR_INVERTED} onClick={onShowModal}>
          Войти
        </Button>
      </div>
    </div>
  )
}
