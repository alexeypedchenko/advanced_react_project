import { fetchProfileData } from '../services/fetchProfileData/fetchProfileData'
import { ProfileSchema } from '../types/profile'
import { profileActions, profileReducer } from './profileSlice'

const profileData = {
  firstname: 'firstname',
  lastname: 'lastname',
  age: 20,
  city: 'city',
  username: 'username',
}

describe('profileSlice.test', () => {
  test('test setReadonly', () => {
    const state: DeepPartial<ProfileSchema> = {
      readonly: false,
    }
    expect(
      profileReducer(state as ProfileSchema, profileActions.setReadonly(true))
    ).toEqual({ readonly: true })
  })
  test('test cancelEdit', () => {
    const state: DeepPartial<ProfileSchema> = {
      data: profileData,
      form: { firstname: '' },
      readonly: false,
    }
    expect(
      profileReducer(state as ProfileSchema, profileActions.cancelEdit())
    ).toEqual({
      data: profileData,
      form: profileData,
      readonly: true,
    })
  })
  test('test saveEdit', () => {
    const state: DeepPartial<ProfileSchema> = {
      data: { ...profileData, firstname: '' },
      form: profileData,
      readonly: false,
    }
    expect(
      profileReducer(state as ProfileSchema, profileActions.saveEdit())
    ).toEqual({
      data: profileData,
      form: profileData,
      readonly: true,
    })
  })
  test('test updateProfileData', () => {
    const state: DeepPartial<ProfileSchema> = {
      form: { ...profileData, firstname: '' },
    }
    expect(
      profileReducer(
        state as ProfileSchema,
        profileActions.updateProfileData(profileData)
      )
    ).toEqual({
      form: profileData,
    })
  })

  test('test fetchProfileData pending', () => {
    const state: DeepPartial<ProfileSchema> = {
      isLoading: false,
      error: 'error',
    }
    expect(
      profileReducer(state as ProfileSchema, fetchProfileData.pending)
    ).toEqual({
      isLoading: true,
      error: undefined,
    })
  })
  test('test fetchProfileData fulfilled', () => {
    const state: DeepPartial<ProfileSchema> = {
      isLoading: true,
    }
    expect(
      profileReducer(
        state as ProfileSchema,
        fetchProfileData.fulfilled(profileData, '')
      )
    ).toEqual({
      isLoading: false,
      data: profileData,
      form: profileData,
    })
  })
})
