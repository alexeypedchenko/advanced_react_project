import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { fetchProfileData } from '../services/fetchProfileData/fetchProfileData'
import { updateProfileData } from '../services/updateProfileData/updateProfileData'
import { Profile, ProfileSchema } from '../types/profile'

const initialState: ProfileSchema = {
  data: undefined,
  isLoading: false,
  readonly: true,
  error: undefined,
  validateErrors: undefined,
}

export const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    setReadonly: (state, action: PayloadAction<boolean>) => {
      state.readonly = action.payload
    },
    cancelEdit: (state) => {
      state.readonly = true
      state.form = state.data
      state.validateErrors = undefined
    },
    saveEdit: (state) => {
      state.readonly = true
      state.data = state.form
    },
    updateProfileData: (state, action: PayloadAction<Profile>) => {
      state.form = {
        ...state.form,
        ...action.payload,
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProfileData.pending, (state, action) => {
        state.isLoading = true
        state.error = undefined
      })
      .addCase(
        fetchProfileData.fulfilled,
        (state, action: PayloadAction<Profile>) => {
          state.isLoading = false
          state.data = action.payload
          state.form = action.payload
        }
      )
      .addCase(fetchProfileData.rejected, (state, action) => {
        state.isLoading = false
        state.error = action.payload
      })

    builder
      .addCase(updateProfileData.pending, (state, action) => {
        state.validateErrors = undefined
        state.isLoading = true
      })
      .addCase(
        updateProfileData.fulfilled,
        (state, action: PayloadAction<Profile>) => {
          state.isLoading = false
          state.readonly = true
          state.data = action.payload
          state.form = action.payload
        }
      )
      .addCase(updateProfileData.rejected, (state, action) => {
        console.log('action:', action)
        state.isLoading = false
        state.validateErrors = action.payload
      })
  },
})

export const { actions: profileActions, reducer: profileReducer } = profileSlice
