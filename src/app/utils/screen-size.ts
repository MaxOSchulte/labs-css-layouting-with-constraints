/**
 * Screen size breakpoints
 */
export enum ScreenSize {
  xs = '(min-width: 0) and (max-width: 599px)',
  s = '(min-width: 600px) and (max-width: 1023px)',
  m = '(min-width: 1024px) and (max-width: 1439px)',
  l = '(min-width: 1440px) and (max-width: 1919px)',
  xl = '(min-width: 1920px)',
}

export type ScreenSizeKeys = keyof typeof ScreenSize;

/**
 * Array of all available {@link ScreenSize}
 */
export const ScreenSizes = [ScreenSize.xs, ScreenSize.s, ScreenSize.m, ScreenSize.l, ScreenSize.xl];
