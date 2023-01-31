import { lazy } from 'react'

export const MainPageAsync = lazy(
  () =>
    // only for test
    new Promise((res) => {
      setTimeout(() => {
        // @ts-ignore
        res(import('./MainPage'))
      }, 1000)
    })
)
