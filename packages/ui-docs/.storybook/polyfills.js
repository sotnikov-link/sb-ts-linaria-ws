/**
 * Полифил для IE11, чтобы работал Webpack HRM
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/API/Server-sent_events#Tools
 * @see https://git.io/JfdmR
 */
const {
  EventSourcePolyfill,
  NativeEventSource,
} = require('event-source-polyfill');
global.EventSource = NativeEventSource || EventSourcePolyfill;
