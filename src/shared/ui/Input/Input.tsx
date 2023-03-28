import React, {
  ChangeEvent,
  InputHTMLAttributes,
  memo,
  useEffect,
  useRef,
  useState,
} from 'react'
import { classNames, Mods } from 'shared/lib/classNames/classNames'
import classes from './Input.module.scss'

type HTMLInputProps = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  'value' | 'onChange' | 'readOnly'
>

interface InputProps extends HTMLInputProps {
  className?: string
  type?: string
  placeholder?: string
  value?: string | number
  onChange?: (value: string) => void
  autoFocus?: boolean
  readonly?: boolean
}

export const Input = memo((props: InputProps) => {
  const {
    className,
    type = 'text',
    placeholder,
    value,
    onChange,
    autoFocus,
    readonly,
    ...otherProps
  } = props

  const [isFocused, setIsFocused] = useState(false)
  const [caretPosition, setCaretPosition] = useState(0)
  const ref = useRef<HTMLInputElement>(null)

  useEffect(() => {
    if (autoFocus) {
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

  const mods: Mods = {
    [classes.readonly]: readonly,
  }

  const isCaretVisible = isFocused && !readonly

  return (
    <div className={classNames(classes.wrapper, mods, [className])}>
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
          readOnly={readonly}
          ref={ref}
          {...otherProps}
        />
        {/* {isCaretVisible && (
          <span
            className={classes.caret}
            style={{ left: `${caretPosition}px` }}
          />
        )} */}
      </div>
    </div>
  )
})
