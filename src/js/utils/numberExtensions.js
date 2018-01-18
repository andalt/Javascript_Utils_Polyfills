import { isValueOnlyNumber } from './validationControls';

/**
 * Преобразование цены в формат 0 000
 * @param {number} value
 * @returns {string} 0 000
 */
export const makeBeautyNumber = (value) => value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');

/**
 * Получение случайного целого числа
 * @param {number} min
 * @param {number} max
 * @returns {number}
 */
export const getRandomInt = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

/**
 * Получает число или undefined
 * @param {string} value Значение
 */
export const getNumberOrUndefined = (value) => {
    if (!isValueOnlyNumber(value)) {
        return undefined;
    }

    return parseInt(value, 10);
};

/**
 * Извлекает число из строки (15qwerty -> 15)
 * @param {string} value Значение
 * @returns {number}
 */
export const extractNumber = (value) => {
    if (!value && value !== 0) {
        return undefined;
    }

    if (isValueOnlyNumber(value)) {
        return getNumberOrUndefined(value);
    }

    return getNumberOrUndefined(value.replace(/\D+/g, ''));
};

/**
 * Проверяет является ли значение римским числом
 * @param {string} value Значение
 * @returns {boolean}
 */
export function isRomanNumber(value) {
    const romanNumbers = ['M', 'D', 'C', 'L', 'X', 'V', 'I', 'm', 'd', 'c', 'l', 'x', 'v', 'i'];

    for (let i = 0, len = value.length; i < len; i++) {
        if (romanNumbers.indexOf(value[i]) === -1) {
            return false;
        }
    }

    return true;
}

/**
 * Преобразует римское число в number
 * @param {string} str Римское число
 * @returns {number}
 */
export const parseRoman = (str) => {
    const upperStr = str.toUpperCase();
    const validator = /^M*(?:D?C{0,3}|C[MD])(?:L?X{0,3}|X[CL])(?:V?I{0,3}|I[XV])$/;
    const token = /[MDLV]|C[MD]?|X[CL]?|I[XV]?/g;
    const key = { M: 1000,
        CM: 900,
        D: 500,
        CD: 400,
        C: 100,
        XC: 90,
        L: 50,
        XL: 40,
        X: 10,
        IX: 9,
        V: 5,
        IV: 4,
        I: 1 };
    let number = 0;
    let m;

    if (!(upperStr && validator.test(upperStr))) {
        return false;
    }

    do {
        m = token.exec(upperStr);
        if (m) {
            number += key[m[0]];
        }
    } while (m);

    return number;
};

/**
 * Добавляет ноль если цифр 1
 * @param {number} number Число
 * @returns {string}
 */
export const addZeroToFirstChar = (number) => {
    const numberString = number.toString();

    if (numberString.length === 1) {
        return `0${numberString}`;
    }

    return numberString;
};

/**
 * Функция для склонения существительного в зависимости от количества элементов
 * @param {number} num Число
 * @param {string} oneName Название одного элемента (1 "ответ")
 * @param {string} twoName Название двух элементов (2 "ответа")
 * @param {string} fiveName Название пяти элементов (5 "ответов")
 */
export const getNumberCase = (num, oneName, twoName, fiveName) => {
    const absNum = Math.abs(num);
    const i = (absNum % 100 > 20) ? absNum % 10 : absNum % 20;

    switch (i) {
        case 1:
            return oneName;

        case 2:
        case 3:
        case 4:
            return twoName;

        default:
            return fiveName;
    }
};

/**
 * Округление числа
 * @param {number} value Число
 * @param {number} digits Кол-во знаков после запятой
 * @returns {number} Общая стоимость заказа.
 */
export const roundNumber = (value, digits = 1) => {
    return Number(value.toFixed(digits));
};
