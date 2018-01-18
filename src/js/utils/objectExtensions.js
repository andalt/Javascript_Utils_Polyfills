/**
 * Проверяет есть ли значение у какого либо свойства в объекте
 * @param {Object} obj Объект
 * @param {Object} value значение
 * @returns {boolean}
 */
export const hasValue = (obj, value) => {
    for (const key in obj) {
        if (obj.hasOwnProperty(key) && obj[key] === value) {
            return true;
        }
    }

    return false;
};

/**
 * Получает название свойства по значению в объекте
 * @param {Object} obj Объект
 * @param {Object} value значение
 * @returns {string}
 */
export const getKeyByValue = (obj, value) => {
    for (const key in obj) {
        if (obj.hasOwnProperty(key) && obj[key] === value) {
            return key;
        }
    }

    throw new Error(`Unknown value: ${value}`);
};
