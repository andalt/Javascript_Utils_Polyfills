/**
 * Возможность прописать несколько событий
 * @param {HTMLElement} element
 * @param {string} eventName
 * @param {Function} listener
 * @returns {number}
 */
export const addListenerMulti = (element, eventName, listener) => {
    eventName.split(' ').forEach(e => element.addEventListener(e, listener, false));
};

/**
 * Определение тач устройств
 * Detect touch events
 * @returns {boolean}
 */
export const detectTouchEvents = () => {
    if ('ontouchstart' in window || navigator.maxTouchPoints) {
        return true;
    }

    return false;
};
