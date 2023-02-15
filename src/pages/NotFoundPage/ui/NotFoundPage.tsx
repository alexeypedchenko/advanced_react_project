import React from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import classes from './NotFoundPage.module.scss';

interface NotFoundPageProps {
  className?: string
}

export const NotFoundPage = ({ className }: NotFoundPageProps) => {
  const { t } = useTranslation();

  return (
    <div className={classNames(classes.NotFoundPage, {}, [className])}>
      {t('pageNotFound')}
    </div>
  );
};