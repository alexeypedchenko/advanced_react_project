import React, { FC, memo } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import { Comment } from '../../model/types/comment'
import styles from './CommentCard.module.scss'
import { Avatar } from 'shared/ui/Avatar/Avatar'
import { Text } from 'shared/ui/Text/Text'
import { Skeleton } from 'shared/ui/Skeleton/Skeleton'

interface CommentCardProps {
  className?: ''
  comment: Comment
}

export const CommentCard: FC<CommentCardProps> = memo(
  ({ className, comment }) => {
    return (
      <div className={classNames(styles.commentCard, {}, [className])}>
        <div className={styles.user}>
          {comment.user.avatar && (
            <Avatar size={30} src={comment.user.avatar} />
          )}
          <Text title={comment.user.username} />
        </div>
        <Text text={comment.text} />
      </div>
    )
  }
)

export const CommentCardSkeleton = memo(() => {
  return (
    <div className={classNames(styles.commentCard, {}, [])}>
      <div className={styles.user}>
        <Skeleton radius="50%" height={30} width={30} />
        <Skeleton height={32} width={100} />
      </div>
      <Skeleton height={24 * 3} />
    </div>
  )
})
