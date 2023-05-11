import React, { CSSProperties, FC, memo } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import styles from './Skeleton.module.scss'

interface SkeletonProps {
  className?: ''
  height?: string | number
  width?: string | number
  radius?: string
}

export const Skeleton: FC<SkeletonProps> = memo((props) => {
  const { className, height, width, radius } = props

  const style: CSSProperties = {
    height,
    width,
    borderRadius: radius,
  }

  return (
    <div
      className={classNames(styles.skeleton, {}, [className])}
      style={style}
    ></div>
  )
})
