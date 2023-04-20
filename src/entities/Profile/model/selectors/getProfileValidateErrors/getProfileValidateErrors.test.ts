import { StateSchema } from 'app/providers/StoreProvider'
import { getProfileValidateErrors } from './getProfileValidateErrors'
import { ValidateProfileData } from '../../types/profile'

describe('getProfileValidateErrors.test', () => {
  test('should return error', () => {
    const errors = [ValidateProfileData.INCORRECT_USER_DATA, ,]
    const state: DeepPartial<StateSchema> = {
      profile: {
        validateErrors: errors,
      },
    }
    expect(getProfileValidateErrors(state as StateSchema)).toEqual(errors)
  })
  test('should work with empty state', () => {
    const state: DeepPartial<StateSchema> = {}
    expect(getProfileValidateErrors(state as StateSchema)).toEqual(undefined)
  })
})
