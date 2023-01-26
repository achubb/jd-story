/**
 * This is a little workaround just to see if it is 
 * possible to use next/image in the image atom. As
 * we are not loading the optimised images via next
 * I'm just replacing with an un-optimised version.
 */

import * as NextImage from "next/image";

const OriginalNextImage = NextImage.default;

Object.defineProperty(NextImage, "default", {
  configurable: true,
  value: (props) => (
    <OriginalNextImage 
      {...props}
      unoptimized
    />
  ),
})

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}