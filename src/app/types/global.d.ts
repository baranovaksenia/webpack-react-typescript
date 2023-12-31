/* eslint-disable no-unused-vars */
declare module '*.scss' {
interface IClassNames {
[className: string]: string
}
const classNames: IClassNames;
export = classNames
}

declare module '*.png'
declare module '*.jpg'
declare module '*.jpeg'
declare module '*.svg' {
// eslint-disable-next-line no-tabs
	import React from 'react';

const SVG: React.FC<React.SVGProps<SVGSVGElement>>;
export default SVG;
}

declare const __IS_DEV__: boolean;
