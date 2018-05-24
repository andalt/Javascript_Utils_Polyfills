import { isNumberInteger, closest, findIndex } from './polyfills';

/**
 * Init polyfills
 */
export const initPolyfills = () => {
    isNumberInteger();
    closest();
    findIndex();
};
