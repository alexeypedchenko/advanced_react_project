import React, { FC } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'

interface ArticleImageBlockComponentProps {
  className?: ''
}

export const ArticleImageBlockComponent: FC<ArticleImageBlockComponentProps> =
  ({ className }) => {
    return (
      <div className={classNames('', {}, [className])}>
        ArticleImageBlockComponent
      </div>
    )
  }
