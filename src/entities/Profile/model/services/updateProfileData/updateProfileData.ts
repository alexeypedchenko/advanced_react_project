import { createAsyncThunk } from '@reduxjs/toolkit'
import { ThunkConfig } from 'app/providers/StoreProvider'
import { getProfileForm } from '../../selectors/getProfileForm/getProfileForm'
import { Profile, ValidateProfileData } from '../../types/profile'
import { validateProfileData } from '../validateProfileData/validateProfileData'

export const updateProfileData = createAsyncThunk<
  Profile,
  void,
  ThunkConfig<ValidateProfileData[]>
>('profile/updateProfileData', async (_, thunkApi) => {
  const { extra, dispatch, rejectWithValue, getState } = thunkApi

  const formData = getProfileForm(getState())
  const errors = validateProfileData(formData)
  console.log('errors:', errors)

  if (errors.length) {
    return rejectWithValue(errors)
  }

  try {
    const response = await extra.api.put<Profile>('/profile', formData)
    return response.data
  } catch (error) {
    console.log('error:', error)
    return rejectWithValue([ValidateProfileData.SERVER_ERROR])
  }
})
