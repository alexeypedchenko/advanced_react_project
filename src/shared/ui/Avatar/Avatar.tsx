import React, { useMemo } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import classes from './Avatar.module.scss'

interface AvatarProps {
  className?: string
  src?: string
  size?: number
  alt?: string
}

export const Avatar = ({ className, src, size = 100, alt }: AvatarProps) => {
  const styles = useMemo<React.CSSProperties>(
    () => ({
      width: size,
      height: size,
    }),
    [size]
  )

  return (
    <img
      className={classNames(classes.Avatar, {}, [className])}
      src={src}
      style={styles}
      alt={alt}
    />
  )
}
