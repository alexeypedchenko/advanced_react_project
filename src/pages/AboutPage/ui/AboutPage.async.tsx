import { lazy } from 'react';

// only for test
export const AboutPageAsync = lazy(() => new Promise((res) => {
  setTimeout(() => {
    // @ts-ignore
    res(import('./AboutPage'));
  }, 1000);
}));
