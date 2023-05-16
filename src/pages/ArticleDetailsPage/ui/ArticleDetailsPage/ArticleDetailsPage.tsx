import React, { FC, memo } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import { ArticleDetails } from 'entities/Article'
import { useParams } from 'react-router-dom'
import styles from './ArticleDetailsPage.module.scss'
import { Text, TextTheme } from 'shared/ui/Text/Text'

interface ArticleDetailsPageProps {
  className?: ''
}
export const ArticleDetailsPage: FC<ArticleDetailsPageProps> = ({
  className,
}) => {
  const { id } = useParams<{ id: string }>()

  if (__PROJECT__ === 'storybook') {
    return <ArticleDetails id="1" />
  }

  if (!id) {
    return (
      <div className={classNames('', {}, [className])}>
        <Text theme={TextTheme.ERROR} title="Article not found" />
      </div>
    )
  }

  return (
    <div className={classNames('', {}, [className])}>
      <ArticleDetails id={id} />
    </div>
  )
}

export default memo(ArticleDetailsPage)
