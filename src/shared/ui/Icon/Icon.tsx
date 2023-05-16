import React, { FC, memo } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import styles from './Icon.module.scss'

interface IconProps {
  className?: ''
  svg: React.VFC<React.SVGProps<SVGSVGElement>>
}

export const Icon: FC<IconProps> = memo(({ className, svg: Svg }) => {
  return <Svg className={classNames(styles.Svg, {}, [className])} />
})
