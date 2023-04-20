import React, { memo, useMemo } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import classes from './Select.module.scss'

interface SelectOption {
  value: string
  content: string
}
interface SelectProps {
  className?: string
  label?: string
  options?: SelectOption[]
  readonly?: boolean
  value?: string
  onChange?: (value: string) => void
}

export const Select = memo((props: SelectProps) => {
  const { className, label, options, readonly, value, onChange } = props

  const optionsList = useMemo(() => {
    return options?.map((option) => (
      <option
        key={option.value}
        className={classes.option}
        value={option.value}
      >
        {option.content}
      </option>
    ))
  }, [options])

  const handleOnChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    onChange?.(event.target.value)
  }

  return (
    <div className={classNames(classes.wrapper, {}, [className])}>
      {label && (
        <span className={classes.label}>
          {label} {'>'}
        </span>
      )}
      <select
        className={classes.select}
        value={value}
        disabled={readonly}
        onChange={handleOnChange}
      >
        {optionsList}
      </select>
    </div>
  )
})
