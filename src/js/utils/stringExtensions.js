/**
 * Проверяет на пустую строку
 * @param {string} value
 * @returns {boolean}
 */
export const isStringEmpty = (value) => typeof (value) === 'undefined' || value === '';

/**
 * Преобразует строку в число
 * @param {string} value
 * @returns {number}
 */
export const stringToNumber = (value) => parseInt(value, 10);

/**
 * Первая буква в слове заглавная, остальные какие были
 * @param {string} str Строка
 * @returns {string}
 */
export const capitalizeFirstLetter = (str) => {
    if (!str) {
        return str;
    }

    return str.charAt(0).toUpperCase() + str.slice(1);
};

/**
 * Только первая буква в слове заглавная, остальные маленькие
 * @param {string} str Строка
 * @returns {string}
 */
export const capitalizeOnlyFirstLetter = (str) => {
    if (!str) {
        return str;
    }

    return str.charAt(0).toUpperCase() + str.toLowerCase().slice(1);
};

/**
 * Полчение случайной строки (хеша)
 * @param {number} stringLength количество символов
 * @returns {string}
 */
export const getRandomHash = (stringLength) => {
    let hash = '';
    const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

    for (let i = 0; i < stringLength; i++)
        hash += possible.charAt(Math.floor(Math.random() * possible.length));

    return hash;
};

/**
 * Строка из одних пробелов
 * @param {string} str Строка
 * @returns {boolean}
 */
export const testOnlySpace = (str) => {
    return !str.replace(/\s/g, '').length;
};
