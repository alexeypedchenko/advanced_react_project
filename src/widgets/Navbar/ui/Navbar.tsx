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

  const onToggleModal = useCallback(() => {
    setIsAuthModal((prev) => !prev)
  }, [])

  return (
    <div className={classNames(classes.Navbar, {}, [className])}>
      <Modal isOpen={isAuthModal} onClose={onToggleModal}>
        hello
      </Modal>
      <div className={classes.links}>
        <Button theme={ButtonTheme.CLEAR_INVERTED} onClick={onToggleModal}>
          Войти
        </Button>
      </div>
    </div>
  )
}
