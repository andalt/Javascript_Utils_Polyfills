import {
    isStringEmpty,
    stringToNumber
} from './stringExtensions';

/**
 * Валидация email
 * @param {string} email
 * @returns {boolean}
 */
export const isEmailValidate = (email) => {
    if (isStringEmpty(email)) {
        return false;
    }

    return (/\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/g).test(email);
};

/**
 * Валидация на максимальное количество символов
 * @param {string} value
 * @param {number} number
 * @returns {boolean}
 */
export const isValueMaxLength = (value, number) => !(value.length > number);

/**
 * Валидация на минимальное количество символов
 * @param {string} value
 * @param {number} number
 * @returns {boolean}
 */
export const isValueMinLength = (value, number) => !(value.length < number);

/**
 * Валидация на использование только чисел
 * @param {string} value
 * @returns {boolean}
 */
export const isValueOnlyNumber = (value) => (/^\d+$/).test(value);

/**
 * Валидация на использование только латиницы или кириллицы, исключая числа
 * @param {string} value - Only Cyrillic or Latin
 * @returns {boolean}
 */
export const isValueOnlyLettersAlphabet = (value) => (/^[a-zA-Zа-яА-ЯёЁ ]*$/).test(value);

/**
 * Валидация на использование только кириллицы
 * @param {string} value
 * @returns {boolean}
 */
export const isValueOnlyCyrillicAlphabet = (value) => (/^[а-яА-ЯёЁ ]*$/).test(value);

/**
 * Валидация на использование только латиницы
 * @param {string} value
 * @returns {boolean}
 */
export const isValueOnlyLatinAlphabet = (value) => (/^[a-zA-Z ]*$/).test(value);

/**
 * Валидаиця на сивмолы, совпадения значения (1 аргумент) с набором символов (2 аргумент)
 * @param {string} value
 * @param {string} symbols
 * @returns {boolean}
 */
export const isAnySymbols = (value, symbols) => {
    const arrSymbols = [];
    const arrLettersAndNumber = [];

    const newArrays = symbols.split('').reduce((previousValue, el) => {
        if (Number.isInteger(stringToNumber(el)) || isValueOnlyLettersAlphabet(el)) {
            arrLettersAndNumber.push(el);
        } else {
            arrSymbols.push(`\\${el}\|`);
        }

        return {
            arrSymbols,
            arrLettersAndNumber
        };
    }, 0);

    return new RegExp(`^[${newArrays.arrSymbols.join('')}${newArrays.arrLettersAndNumber.join('')}]*$`).test(value);
};

/**
 * Валидация по реулярному выражению указанному в параметре
 * @param {string} value
 * @param {object} template
 * @returns {boolean}
 */
export const isValueInTemplate = (value, template) => template.test(value);

/**
 * Валидация на формат дня рождения 00.00.0000
 * @param {string} birthday - 00.00.0000
 * @returns {boolean}
 */
export const isFormatBirthdayValidate = (birthday) => {
    if (isStringEmpty(birthday)) {
        return false;
    }

    return /^([0-9]{2})\.([0-9]{2})\.([0-9]{4})$/.test(birthday);
};

/**
 * Валидация телефона
 * @param {string} phone - +79043221144
 * @returns {boolean}
 */
export const isPhoneNumberValidate = (phone) => {
    if (isStringEmpty(phone)) {
        return false;
    }

    if (phone.indexOf('+7') === 0) {
        return /^(\+)([0-9]{11,16})$/g.test(phone);
    }

    return /^([0-9]{6,14})$/g.test(phone);
};

/**
 * Валидация url
 * @author Diego Perini <https://gist.github.com/dperini/729294>
 * @param {string} value
 * @returns {boolean}
 */
export const isUrlValidate = (value) => {
    const regExpWebUrl = new RegExp(
        '^' +
        // protocol identifier
        '(?:(?:https?|ftp)://)' +
        // user:pass authentication
        '(?:\\S+(?::\\S*)?@)?' +
        '(?:' +
        // IP address exclusion
        // private & local networks
        '(?!(?:10|127)(?:\\.\\d{1,3}){3})' +
        '(?!(?:169\\.254|192\\.168)(?:\\.\\d{1,3}){2})' +
        '(?!172\\.(?:1[6-9]|2\\d|3[0-1])(?:\\.\\d{1,3}){2})' +
        // IP address dotted notation octets
        // excludes loopback network 0.0.0.0
        // excludes reserved space >= 224.0.0.0
        // excludes network & broacast addresses
        // (first & last IP address of each class)
        '(?:[1-9]\\d?|1\\d\\d|2[01]\\d|22[0-3])' +
        '(?:\\.(?:1?\\d{1,2}|2[0-4]\\d|25[0-5])){2}' +
        '(?:\\.(?:[1-9]\\d?|1\\d\\d|2[0-4]\\d|25[0-4]))' +
        '|' +
        // host name
        '(?:(?:[a-z\\u00a1-\\uffff0-9]-*)*[a-z\\u00a1-\\uffff0-9]+)' +
        // domain name
        '(?:\\.(?:[a-z\\u00a1-\\uffff0-9]-*)*[a-z\\u00a1-\\uffff0-9]+)*' +
        // TLD identifier
        '(?:\\.(?:[a-z\\u00a1-\\uffff]{2,}))' +
        // TLD may end with dot
        '\\.?' +
        ')' +
        // port number
        '(?::\\d{2,5})?' +
        // resource path
        '(?:[/?#]\\S*)?' +
        '$', 'i'
    );

    return regExpWebUrl.test(value);
};
