/**
 * Это Internet Explorer?
 */
export const isIE =
  typeof window === 'object' &&
  window !== null &&
  /MSIE|Trident/.test(window.navigator.userAgent);
