import React, { memo } from 'react'
import { useTranslation } from 'react-i18next'
import { classNames } from 'shared/lib/classNames/classNames'
import { Button } from 'shared/ui/Button/Button'
import classes from './PageError.module.scss'

interface PageErrorProps {
  className?: string
}

export const PageError = memo(({ className }: PageErrorProps) => {
  const { t } = useTranslation()

  const reloadPage = () => {
    /* eslint-disable-next-line */
    location.reload()
  }

  return (
    <div className={classNames(classes.PageError, {}, [className])}>
      <h1>{t('page-error')}</h1>
      <Button onClick={reloadPage}>{t('reload-page')}</Button>
    </div>
  )
})
