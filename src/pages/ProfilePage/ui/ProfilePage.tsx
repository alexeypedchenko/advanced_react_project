import React, { memo, useCallback, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { classNames } from 'shared/lib/classNames/classNames'
import {
  DynamicModuleLoader,
  ReducerList,
} from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch'
import {
  fetchProfileData,
  ProfileCard,
  profileReducer,
  getProfileError,
  getProfileIsLoading,
  getProfileReadonly,
  profileActions,
  getProfileForm,
  getProfileValidateErrors,
} from 'entities/Profile'
import { ProfilePageHeader } from './ProfilePageHeader/ProfilePageHeader'
import { Currency } from 'entities/Currency'
import { Country } from 'entities/Country'
import { Text, TextTheme } from 'shared/ui/Text/Text'

const reducers: ReducerList = {
  profile: profileReducer,
}

interface ProfilePageProps {
  className?: string
}

const ProfilePage = memo(({ className }: ProfilePageProps) => {
  const dispatch = useAppDispatch()
  const formData = useSelector(getProfileForm)
  const isLoading = useSelector(getProfileIsLoading)
  const error = useSelector(getProfileError)
  const readonly = useSelector(getProfileReadonly)
  const validateErrors = useSelector(getProfileValidateErrors)

  useEffect(() => {
    if (__PROJECT__ !== 'storybook') {
      dispatch(fetchProfileData())
    }
  }, [dispatch])

  const onChangeFirstname = useCallback(
    (value?: string) => {
      dispatch(profileActions.updateProfileData({ firstname: value }))
    },
    [dispatch]
  )
  const onChangeLastname = useCallback(
    (value?: string) => {
      dispatch(profileActions.updateProfileData({ lastname: value }))
    },
    [dispatch]
  )
  const onChangeAge = useCallback(
    (value?: string) => {
      dispatch(profileActions.updateProfileData({ age: Number(value) }))
    },
    [dispatch]
  )
  const onChangeCity = useCallback(
    (value?: string) => {
      dispatch(profileActions.updateProfileData({ city: value }))
    },
    [dispatch]
  )
  const onChangeUsername = useCallback(
    (value?: string) => {
      dispatch(profileActions.updateProfileData({ username: value }))
    },
    [dispatch]
  )
  const onChangeAvatar = useCallback(
    (value?: string) => {
      dispatch(profileActions.updateProfileData({ avatar: value }))
    },
    [dispatch]
  )
  const onChangeCurrency = useCallback(
    (currency?: Currency) => {
      dispatch(profileActions.updateProfileData({ currency }))
    },
    [dispatch]
  )
  const onChangeCountry = useCallback(
    (country?: Country) => {
      dispatch(profileActions.updateProfileData({ country }))
    },
    [dispatch]
  )

  return (
    <DynamicModuleLoader reducers={reducers}>
      <div className={classNames('', {}, [className])}>
        <ProfilePageHeader />
        {validateErrors?.map((error) => (
          <Text key={error} text={error} theme={TextTheme.ERROR} />
        ))}
        <ProfileCard
          data={formData}
          isLoading={isLoading}
          error={error}
          readonly={readonly}
          onChangeFirstname={onChangeFirstname}
          onChangeLastname={onChangeLastname}
          onChangeAge={onChangeAge}
          onChangeCity={onChangeCity}
          onChangeUsername={onChangeUsername}
          onChangeAvatar={onChangeAvatar}
          onChangeCurrency={onChangeCurrency}
          onChangeCountry={onChangeCountry}
        />
      </div>
    </DynamicModuleLoader>
  )
})

export default ProfilePage
