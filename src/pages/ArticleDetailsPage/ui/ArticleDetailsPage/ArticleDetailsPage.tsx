import React, { FC, memo } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import { ArticleDetails } from 'entities/Article'
import { useParams } from 'react-router-dom'
import styles from './ArticleDetailsPage.module.scss'
import { Text, TextTheme } from 'shared/ui/Text/Text'
import { CommentList } from 'entities/Comment'

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
    <div className={classNames(styles.ArticleDetailsPage, {}, [className])}>
      <ArticleDetails id={id} />
      <Text title="Comments" />
      <CommentList
        comments={[
          {
            id: '1',
            text: 'some text',
            user: {
              id: '1',
              username: 'username',
              avatar:
                'https://t4.ftcdn.net/jpg/05/83/11/41/360_F_583114127_oO0CJqVxaWoqMlRL0QB7owGunBJoPE9L.jpg',
            },
          },
          {
            id: '2',
            text: 'some text',
            user: {
              id: '1',
              username: 'username',
              avatar:
                'https://xakep.ru/wp-content/uploads/2018/05/171485/KuroiSH-hacker.jpg',
            },
          },
          {
            id: '3',
            text: 'some text',
            user: {
              id: '1',
              username: 'username',
            },
          },
        ]}
      />
    </div>
  )
}

export default memo(ArticleDetailsPage)
