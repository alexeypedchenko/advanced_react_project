import React, { FC, memo } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import { Text } from 'shared/ui/Text/Text'
import { ArticleImageBlock } from '../../model/types/article'
import styles from './ArticleImageBlockComponent.module.scss'

interface ArticleImageBlockComponentProps {
  className?: ''
  block: ArticleImageBlock
}

export const ArticleImageBlockComponent: FC<ArticleImageBlockComponentProps> =
  memo(({ className, block }) => {
    return (
      <div className={classNames('', {}, [className])}>
        <img className={styles.img} src={block.src} alt={block.title} />
        {block.title && <Text align="center" text={block.title} />}
      </div>
    )
  })
