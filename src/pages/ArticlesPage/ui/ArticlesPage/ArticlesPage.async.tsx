import { lazy } from 'react'
// only for test
export const ArticlesPageAsync = lazy(
  () =>
    new Promise((res) => {
      setTimeout(() => {
        // @ts-ignore
        res(import('./ArticlesPage'))
      }, 1000)
    })
)
