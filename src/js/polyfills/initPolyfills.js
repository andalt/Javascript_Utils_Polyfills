import { isNumberInteger, closest } from './polyfills';

/**
 * Init polyfills
 */
export const initPolyfills = () => {
    isNumberInteger();
    closest();
};
