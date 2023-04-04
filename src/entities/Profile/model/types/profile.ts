import { Currency } from 'entities/Currency'
import { Country } from 'entities/Country'

export enum ValidateProfileData {
  NO_DATA = 'NO_DATA',
  SERVER_ERROR = 'SERVER_ERROR',
  INCORRECT_USER_DATA = 'INCORRECT_USER_DATA',
  INCORRECT_AGE = 'INCORRECT_AGE',
}

export interface Profile {
  firstname?: string
  lastname?: string
  age?: number
  currency?: Currency
  country?: Country
  city?: string
  username?: string
  avatar?: string
}

export interface ProfileSchema {
  data?: Profile
  form?: Profile
  isLoading: boolean
  error?: string
  readonly: boolean
  validateErrors?: ValidateProfileData[]
}
