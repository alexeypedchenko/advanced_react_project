import { LoginModal } from 'features/AuthByUsername'
import React, { useCallback, useState } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import { Button, ButtonTheme } from 'shared/ui/Button/Button'
import { Modal } from 'shared/ui/Modal/Modal'
import classes from './Navbar.module.scss'

interface NavbarProps {
  className?: string
}

export const Navbar = ({ className }: NavbarProps) => {
  const [isAuthModal, setIsAuthModal] = useState(false)

  const onShowModal = useCallback(() => {
    setIsAuthModal((prev) => !prev)
  }, [])

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
