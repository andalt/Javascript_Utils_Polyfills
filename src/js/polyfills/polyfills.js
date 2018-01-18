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
