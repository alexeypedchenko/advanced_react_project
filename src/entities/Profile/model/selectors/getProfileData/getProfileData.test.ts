import { StateSchema } from 'app/providers/StoreProvider'
import { getProfileData } from './getProfileData'

describe('getProfileData.test', () => {
  test('should return error', () => {
    const data = {
      firstname: 'firstname',
      lastname: 'lastname',
      age: 20,
      city: 'city',
      username: 'username',
    }
    const state: DeepPartial<StateSchema> = {
      profile: {
        data,
      },
    }
    expect(getProfileData(state as StateSchema)).toEqual(data)
  })
  test('should work with empty state', () => {
    const state: DeepPartial<StateSchema> = {}
    expect(getProfileData(state as StateSchema)).toEqual(undefined)
  })
})
