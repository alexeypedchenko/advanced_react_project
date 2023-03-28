import { classNames, Mods } from 'shared/lib/classNames/classNames'
import { Input } from 'shared/ui/Input/Input'
import { Text, TextTheme } from 'shared/ui/Text/Text'
import classes from './ProfileCard.module.scss'

import { Profile } from '../../model/types/profile'
import { Loader } from 'shared/ui/Loader'
import { Avatar } from 'shared/ui/Avatar/Avatar'
import { CurrencySelect, Currency } from 'entities/Currency'
import { CountrySelect, Country } from 'entities/Country'

interface ProfileCardProps {
  className?: string
  data?: Profile
  isLoading?: boolean
  error?: string
  readonly?: boolean
  onChangeFirstname?: (value: string) => void
  onChangeLastname?: (value: string) => void
  onChangeAge?: (value: string) => void
  onChangeCity?: (value: string) => void
  onChangeUsername?: (value: string) => void
  onChangeAvatar?: (value: string) => void
  onChangeCurrency?: (value: Currency) => void
  onChangeCountry?: (country: Country) => void
}

export const ProfileCard = (props: ProfileCardProps) => {
  const {
    className,
    data,
    isLoading,
    error,
    readonly,
    onChangeFirstname,
    onChangeLastname,
    onChangeAge,
    onChangeCity,
    onChangeUsername,
    onChangeAvatar,
    onChangeCurrency,
    onChangeCountry,
  } = props

  const mods: Mods = {
    [classes.editing]: !readonly,
  }

  if (isLoading) {
    return (
      <div
        className={classNames(classes.ProfileCard, {}, [
          className,
          classes.isLoading,
        ])}
      >
        <Loader />
      </div>
    )
  }

  if (error) {
    return (
      <div
        className={classNames(classes.ProfileCard, {}, [
          className,
          classes.error,
        ])}
      >
        <Text
          theme={TextTheme.ERROR}
          title={error}
          text="Попробуйте обновить страницу"
          align="center"
        />
      </div>
    )
  }

  return (
    <div className={classNames(classes.ProfileCard, mods, [className])}>
      <div className={classes.data}>
        {data?.avatar && (
          <div className={classes.avatar}>
            <Avatar src={data.avatar} />
          </div>
        )}
        <Input
          value={data?.firstname}
          placeholder="Ваше имя"
          readonly={readonly}
          onChange={onChangeFirstname}
        />
        <Input
          value={data?.lastname}
          placeholder="Ваша фамилия"
          readonly={readonly}
          onChange={onChangeLastname}
        />
        <Input
          value={data?.age}
          placeholder="Ваш возраст"
          readonly={readonly}
          onChange={onChangeAge}
        />
        <Input
          value={data?.city}
          placeholder="Ваш город"
          readonly={readonly}
          onChange={onChangeCity}
        />
        <Input
          value={data?.username}
          placeholder="Ваш username"
          readonly={readonly}
          onChange={onChangeUsername}
        />
        <Input
          value={data?.avatar}
          placeholder="Введите ссылку на ваш аватар"
          readonly={readonly}
          onChange={onChangeAvatar}
        />
        <CurrencySelect
          value={data?.currency}
          readonly={readonly}
          onChange={onChangeCurrency}
        />
        <CountrySelect
          value={data?.country}
          readonly={readonly}
          onChange={onChangeCountry}
        />
      </div>
    </div>
  )
}
