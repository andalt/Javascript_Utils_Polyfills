/**
 * Добавляет в поддержку метод isInteger
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/isInteger
 */
export const isNumberInteger = () => {
    Number.isInteger = Number.isInteger || ((value) => {
        return typeof value === 'number' &&
            isFinite(value) &&
            Math.floor(value) === value;
    });
};

/**
 * Добавляет в поддержку метод closest
 * https://developer.mozilla.org/en-US/docs/Web/API/Element/closest
 */
export const closest = () => {
    if (!Element.prototype.matches)
        Element.prototype.matches = Element.prototype.msMatchesSelector ||
            Element.prototype.webkitMatchesSelector;

    if (!Element.prototype.closest)
        Element.prototype.closest = function (s) {
            let el = this;

            if (!document.documentElement.contains(el)) return null;
            do {
                if (el.matches(s)) return el;
                el = el.parentElement;
            } while (el !== null);

            return null;
        };
};

/**
 * Добавляет в поддержку метод findIndex
 * https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex
 */

export const findIndex = () => {
    if (!Array.prototype.findIndex) {
        Array.prototype.findIndex = function(predicate) {
            if (this == null) {
                throw new TypeError('Array.prototype.findIndex called on null or undefined');
            }
            if (typeof predicate !== 'function') {
                throw new TypeError('predicate must be a function');
            }
            let list = Object(this);
            let length = list.length >>> 0;
            let thisArg = arguments[1];
            let value;

            for (let i = 0; i < length; i++) {
                value = list[i];
                if (predicate.call(thisArg, value, i, list)) {
                    return i;
                }
            }
            return -1;
        };
    }
};
