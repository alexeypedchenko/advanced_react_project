import { Profile, ValidateProfileData } from '../../types/profile'

export const validateProfileData = (profile?: Profile) => {
  if (!profile) {
    return [ValidateProfileData.NO_DATA]
  }

  const { firstname, lastname, age } = profile

  const errors = []

  if (!firstname || !lastname) {
    errors.push(ValidateProfileData.INCORRECT_USER_DATA)
  }

  if (!age || !Number.isInteger(age)) {
    errors.push(ValidateProfileData.INCORRECT_AGE)
  }

  return errors
}
