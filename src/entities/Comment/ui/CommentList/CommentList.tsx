import React, { FC, memo } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import { Text } from 'shared/ui/Text/Text'
import { Comment } from '../../model/types/comment'
import { CommentCard, CommentCardSkeleton } from '../CommentCard/CommentCard'
import styles from './CommentList.module.scss'

interface CommentListProps {
  className?: ''
  comments?: Comment[]
  isLoading?: boolean
}

export const CommentList: FC<CommentListProps> = memo((props) => {
  const { className, comments, isLoading } = props

  if (isLoading) {
    return <CommentCardSkeleton />
  }

  return (
    <div className={classNames(styles.commentList, {}, [className])}>
      {comments && comments?.length > 0 ? (
        comments.map((comment) => (
          <CommentCard key={comment.id} comment={comment} />
        ))
      ) : (
        <Text text="No comments" />
      )}
    </div>
  )
})
