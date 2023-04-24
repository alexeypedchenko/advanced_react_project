import { lazy } from 'react'
// only for test
export const ArticleDetailsPageAsync = lazy(
  () =>
    new Promise((res) => {
      setTimeout(() => {
        // @ts-ignore
        res(import('./ArticleDetailsPage'))
      }, 1000)
    })
)
