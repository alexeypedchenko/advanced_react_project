import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Profile, ProfileSchema } from '../types/profile'

const initialState: ProfileSchema = {
  data: undefined,
  isLoading: false,
  readonly: true,
  error: undefined,
}

export const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    // setAuthData: (state, action: PayloadAction<profile>) => {
    //   state.authData = action.payload
    // },
  },
})

export const { actions: profileActions, reducer: profileReducer } = profileSlice
