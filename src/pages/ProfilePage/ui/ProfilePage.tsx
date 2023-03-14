import { profileReducer } from 'entities/Profile'
import React, { memo } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import {
  DynamicModuleLoader,
  ReducerList,
} from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'

const reducers: ReducerList = {
  profile: profileReducer,
}

interface ProfilePageProps {
  className?: string
}

const ProfilePage = memo(({ className }: ProfilePageProps) => {
  return (
    <DynamicModuleLoader reducers={reducers}>
      <div className={classNames('', {}, [className])}>ProfilePage</div>
    </DynamicModuleLoader>
  )
})

export default ProfilePage
