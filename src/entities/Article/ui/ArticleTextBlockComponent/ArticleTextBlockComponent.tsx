import React, { FC } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'

interface ArticleTextBlockComponentProps {
  className?: ''
}

export const ArticleTextBlockComponent: FC<ArticleTextBlockComponentProps> = ({
  className,
}) => {
  return (
    <div className={classNames('', {}, [className])}>
      ArticleTextBlockComponent
    </div>
  )
}
