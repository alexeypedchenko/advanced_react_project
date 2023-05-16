import { StateSchema } from 'app/providers/StoreProvider'
import {
  getArticleDetailsData,
  getArticleDetailsError,
  getArticleDetailsIsLoading,
} from './getArticleDetails'

describe('getArticleDetails.test', () => {
  test('should return error', () => {
    const data = {
      title: 'title',
    }
    const state: DeepPartial<StateSchema> = {
      articleDetails: {
        data,
      },
    }
    expect(getArticleDetailsData(state as StateSchema)).toEqual(data)
  })
  test('should return error', () => {
    const state: DeepPartial<StateSchema> = {
      articleDetails: {
        error: 'error',
      },
    }
    expect(getArticleDetailsError(state as StateSchema)).toEqual('error')
  })
  test('should return isLoading true', () => {
    const state: DeepPartial<StateSchema> = {
      articleDetails: {
        isLoading: true,
      },
    }
    expect(getArticleDetailsIsLoading(state as StateSchema)).toEqual(true)
  })
  test('should work with empty state', () => {
    const state: DeepPartial<StateSchema> = {}
    expect(getArticleDetailsData(state as StateSchema)).toEqual(undefined)
  })
})
