import { validateProfileData } from './validateProfileData'
import { ValidateProfileData } from '../../types/profile'

const profileData = {
  firstname: 'firstname',
  lastname: 'lastname',
  age: 20,
  city: 'city',
  username: 'username',
}

describe('validateProfileData.test', () => {
  test('success validation', async () => {
    const result = validateProfileData(profileData)
    expect(result).toEqual([])
  })
  test('without firstname and lastname', async () => {
    const result = validateProfileData({
      ...profileData,
      firstname: '',
      lastname: '',
    })
    expect(result).toEqual([ValidateProfileData.INCORRECT_USER_DATA])
  })
  test('incorrect age', async () => {
    const result = validateProfileData({
      ...profileData,
      age: undefined,
    })
    expect(result).toEqual([ValidateProfileData.INCORRECT_AGE])
  })
  test('incorrect all', async () => {
    const result = validateProfileData({})
    expect(result).toEqual([
      ValidateProfileData.INCORRECT_USER_DATA,
      ValidateProfileData.INCORRECT_AGE,
    ])
  })
})
