// --- css / scss ---
// declare module '*.module.css'
declare module '*.module.scss'
// declare module '*.scss' {
//   const css: { [key: string]: string }
//   export default css
// }

// --- files ---
declare module '*.png'
declare module '*.jpg'
declare module '*.jpeg'
declare module '*.svg' {
  import React from 'react';

  const SVG: React.VFC<React.SVGProps<SVGSVGElement>>;
  export default SVG;
}

declare const __IS_DEV__: boolean;
