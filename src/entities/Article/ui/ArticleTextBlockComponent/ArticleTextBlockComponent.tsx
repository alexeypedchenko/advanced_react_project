import React, { FC, memo } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import { ArticleTextBlock } from '../../model/types/article'
import { Text } from 'shared/ui/Text/Text'
import styles from './ArticleTextBlockComponent.module.scss'

interface ArticleTextBlockComponentProps {
  className?: ''
  block: ArticleTextBlock
}

export const ArticleTextBlockComponent: FC<ArticleTextBlockComponentProps> =
  memo((props) => {
    const { className, block } = props

    return (
      <div
        className={classNames(styles.ArticleTextBlockComponent, {}, [
          className,
        ])}
      >
        {block.title && <Text className={styles.title} title={block.title} />}
        {block.paragraphs.map((paragraph, idx) => (
          <Text className={styles.paragraph} key={idx} text={paragraph} />
        ))}
      </div>
    )
  })
