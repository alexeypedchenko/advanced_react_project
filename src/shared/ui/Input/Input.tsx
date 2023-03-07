import React, {
  ChangeEvent,
  InputHTMLAttributes,
  memo,
  useEffect,
  useRef,
  useState,
} from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import classes from './Input.module.scss'

type HTMLInputProps = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  'value' | 'onChange'
>

interface InputProps extends HTMLInputProps {
  className?: string
  type?: string
  placeholder?: string
  value?: string
  onChange?: (value: string) => void
  autoFocus?: boolean
}

export const Input = memo((props: InputProps) => {
  const {
    className,
    type = 'text',
    placeholder,
    value,
    onChange,
    autoFocus,
    ...otherProps
  } = props

  const [isFocused, setIsFocused] = useState(false)
  const [caretPosition, setCaretPosition] = useState(0)
  const ref = useRef<HTMLInputElement>(null)

  useEffect(() => {
    if (autoFocus) {
      console.log(autoFocus)
      setIsFocused(true)
      ref.current?.focus()
    }
  }, [autoFocus])

  const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target
    onChange?.(value)
    setCaretPosition(value.length * 9)
  }

  const onBlur = () => setIsFocused(false)
  const onFocus = () => setIsFocused(true)
  const onSelect = (event: any) => {
    setCaretPosition(event?.target?.selectionStart * 9 || 0)
  }

  return (
    <div className={classNames(classes.wrapper, {}, [className])}>
      {placeholder && (
        <div className={classes.placeholder}>{`${placeholder}>`}</div>
      )}
      <div className={classes.inputWrapper}>
        <input
          className={classes.input}
          type={type}
          value={value}
          placeholder={placeholder}
          onChange={onChangeHandler}
          onBlur={onBlur}
          onFocus={onFocus}
          onSelect={onSelect}
          ref={ref}
          {...otherProps}
        />
        {isFocused && (
          <span
            className={classes.caret}
            style={{ left: `${caretPosition}px` }}
          />
        )}
      </div>
    </div>
  )
})
