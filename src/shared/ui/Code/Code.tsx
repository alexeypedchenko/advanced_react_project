import React, { FC, ReactNode, memo, useCallback } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import styles from './Code.module.scss'
import { Button, ButtonTheme } from '../Button/Button'
import CopyIcon from 'shared/assets/icons/copy-20-20.svg'
import { Icon } from '../Icon/Icon'

interface CodeProps {
  className?: ''
  text: string
}

export const Code: FC<CodeProps> = memo(({ className, text }) => {
  const onCopy = useCallback(() => {
    navigator.clipboard.writeText(text)
  }, [text])

  return (
    <pre className={classNames(styles.Code, {}, [className])}>
      <Button
        className={styles.copyBtn}
        theme={ButtonTheme.CLEAR}
        onClick={onCopy}
      >
        <Icon svg={CopyIcon} />
      </Button>
      <code>{text}</code>
    </pre>
  )
})
