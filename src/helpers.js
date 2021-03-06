/* global chrome */

// isDevTools
// Returns whether or not we're running in a DevTools instance,
// i.e. an actual extension context.
export const isDevTools = () => {
  return typeof chrome !== 'undefined' &&
    typeof chrome.devtools !== 'undefined';
}

////////////////////////////////
// Browser platform detection
//

// isFirefox
export const isFirefox = () => /Firefox/.test(navigator.userAgent);

// isChrome
export const isChrome = () => !/Firefox/.test(navigator.userAgent);

////////////////////////////////
// Single-function combinations
//

// isFirefoxDevTools
export const isFirefoxDevTools = () => isFirefox() && isDevTools();

// isChromeDevTools
export const isChromeDevTools = () => isChrome() && isDevTools();
