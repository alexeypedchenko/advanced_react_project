import React, { memo, useCallback } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import { Select } from 'shared/ui/Select/Select'
import { Country } from '../model/types/country'

interface CountrySelectProps {
  className?: string
  value?: Country
  readonly?: boolean
  onChange?: (value: Country) => void
}

const options = [
  {
    value: Country.Ukraine,
    content: Country.Ukraine,
  },
  {
    value: Country.Spain,
    content: Country.Spain,
  },
  {
    value: Country.Italy,
    content: Country.Italy,
  },
]

export const CountrySelect = memo(
  ({ className, value, readonly, onChange }: CountrySelectProps) => {
    const handleOnChange = useCallback(
      (value: string) => {
        onChange?.(value as Country)
      },
      [onChange]
    )

    return (
      <Select
        label="Укажите страну"
        className={classNames('', {}, [className])}
        value={value}
        readonly={readonly}
        onChange={handleOnChange}
        options={options}
      />
    )
  }
)
