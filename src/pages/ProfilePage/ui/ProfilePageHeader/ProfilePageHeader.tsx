import React, { useCallback } from 'react'
import { useSelector } from 'react-redux'
import { classNames } from 'shared/lib/classNames/classNames'
import { Button, ButtonTheme } from 'shared/ui/Button/Button'
import { Text } from 'shared/ui/Text/Text'
import {
  getProfileReadonly,
  profileActions,
  updateProfileData,
} from 'entities/Profile'
import classes from './ProfilePageHeader.module.scss'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch'

interface ProfilePageHeaderProps {
  className?: string
}

export const ProfilePageHeader = ({ className }: ProfilePageHeaderProps) => {
  const readonly = useSelector(getProfileReadonly)
  const dispatch = useAppDispatch()

  const onEdit = useCallback(() => {
    dispatch(profileActions.setReadonly(false))
  }, [dispatch])

  const onCancelEdit = useCallback(() => {
    dispatch(profileActions.cancelEdit())
  }, [dispatch])
  const onSaveEdit = useCallback(() => {
    dispatch(updateProfileData())
  }, [dispatch])

  return (
    <div className={classNames(classes.ProfilePageHeader, {}, [className])}>
      <Text title="Профиль" />
      <div className={classes.buttons}>
        {readonly ? (
          <Button theme={ButtonTheme.OUTLINE} onClick={onEdit}>
            Редактировать
          </Button>
        ) : (
          <>
            <Button theme={ButtonTheme.OUTLINE_RED} onClick={onCancelEdit}>
              Отменить
            </Button>
            <Button theme={ButtonTheme.OUTLINE} onClick={onSaveEdit}>
              Сохранить
            </Button>
          </>
        )}
      </div>
    </div>
  )
}
