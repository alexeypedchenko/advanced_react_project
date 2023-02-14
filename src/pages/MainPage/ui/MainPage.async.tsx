import { lazy } from 'react';
// only for test
export const MainPageAsync = lazy(() => new Promise((res) => {
  setTimeout(() => {
    // @ts-ignore
    res(import('./MainPage'));
  }, 1000);
}));
