import { lazy } from 'react'
// only for test
export const ProfilePageAsync = lazy(
  () =>
    new Promise((res) => {
      setTimeout(() => {
        // @ts-ignore
        res(import('./ProfilePage'))
      }, 1000)
    })
)
