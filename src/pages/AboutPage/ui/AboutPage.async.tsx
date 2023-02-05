import { lazy } from 'react'

export const AboutPageAsync = lazy(
  () =>
    // only for test
    new Promise((res) => {
      setTimeout(() => {
        // @ts-ignore
        res(import('./AboutPage'))
      }, 1000)
    })
)
