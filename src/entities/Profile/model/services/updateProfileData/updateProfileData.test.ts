import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk/TestAsyncThunk'
import { updateProfileData } from './updateProfileData'
import { ValidateProfileData } from '../../types/profile'

const profileData = {
  firstname: 'firstname',
  lastname: 'lastname',
  age: 20,
  city: 'city',
  username: 'username',
}

describe('updateProfileData.test', () => {
  test('success', async () => {
    const thunk = new TestAsyncThunk(updateProfileData, {
      profile: {
        form: profileData,
      },
    })
    thunk.api.put.mockReturnValue(Promise.resolve({ data: profileData }))

    const result = await thunk.callThunk()

    expect(thunk.api.put).toHaveBeenCalled()
    expect(result.meta.requestStatus).toBe('fulfilled')
    expect(result.payload).toEqual(profileData)
  })
  test('error', async () => {
    const thunk = new TestAsyncThunk(updateProfileData, {
      profile: {
        form: profileData,
      },
    })
    thunk.api.put.mockReturnValue(Promise.resolve({ status: 403 }))
    const result = await thunk.callThunk()
    expect(result.meta.requestStatus).toBe('rejected')
    expect(result.payload).toEqual([ValidateProfileData.SERVER_ERROR])
  })
  test('validate error', async () => {
    const thunk = new TestAsyncThunk(updateProfileData, {
      profile: {
        form: {},
      },
    })
    thunk.api.put.mockReturnValue(Promise.resolve({ status: 403 }))
    const result = await thunk.callThunk()
    expect(result.meta.requestStatus).toBe('rejected')
    expect(result.payload).toEqual([
      ValidateProfileData.INCORRECT_USER_DATA,
      ValidateProfileData.INCORRECT_AGE,
    ])
  })
})
