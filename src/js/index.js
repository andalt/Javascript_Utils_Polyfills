import css from 'Styles/index.scss';
import pug from 'Pug/index.pug';

import { initPolyfills } from './polyfills/initPolyfills';

import {
    isStringEmpty,
    capitalizeFirstLetter,
    capitalizeOnlyFirstLetter,
    getRandomHash,
    testOnlySpace,
    stringToNumber
} from './utils/stringExtensions';

import { getQueryParams } from './utils/locationExtensions';

import {
    isEmailValidate,
    isValueMaxLength,
    isValueMinLength,
    isValueOnlyNumber,
    isValueOnlyLettersAlphabet,
    isValueOnlyCyrillicAlphabet,
    isValueOnlyLatinAlphabet,
    isAnySymbols,
    isValueInTemplate,
    isFormatBirthdayValidate,
    isPhoneNumberValidate,
    isUrlValidate
} from './utils/validationControls';

import {
    intersectOrNotEmpty,
    exceptArray,
    uniqueArray,
    sortArrayIncrease,
    sortArrayDecrease,
    sortArrayByKeyIncreaseObjectValue,
    sortArrayByKeyDecreaseObjectValue,
    getObjectArrayByPropertyValue
} from './utils/arrayExtensions';

import { detectTouchEvents } from './utils/eventExtensions';

import {
    makeBeautyNumber,
    getRandomInt,
    extractNumber,
    isRomanNumber,
    parseRoman,
    addZeroToFirstChar,
    getNumberCase,
    roundNumber,
    getNumberOrUndefined
} from './utils/numberExtensions';

import {
    hasValue,
    getKeyByValue
} from './utils/objectExtensions';

// Init Polyfills

initPolyfills();

// stringExtensions

console.log('-Util stringExtensions');
console.log('isStringEmpty --', '', '-->', isStringEmpty(''));
console.log('isStringEmpty --', 'Hello', '-->', isStringEmpty('Hello'));
console.log('stringToNumber --', '5', '-->', stringToNumber('5'));
console.log('stringToNumber --', '5v', '-->', stringToNumber('5v'));
console.log('capitalizeFirstLetter --', 'helloWorld', '-->', capitalizeFirstLetter('helloWorld'));
console.log('capitalizeOnlyFirstLetter --', 'helloWorld', '-->', capitalizeOnlyFirstLetter('helloWorld'));
console.log('getRandomHash --', '-->', getRandomHash(10));
console.log('testOnlySpace --', '            ', '-->', testOnlySpace('            '));
console.log('testOnlySpace --', '      j      ', '-->', testOnlySpace('      j      '));
console.log('----');

console.log('-Util locationExtensions');
console.log('getQueryParams --', 'id, http://localhost:8088?id=1&a=%2Fadmin&b=2&c=3&d&e', '-->',
    getQueryParams('id', 'http://localhost:8088?id=1&a=%2Fadmin&b=2&c=3&d&e'));
console.log('----');

// validationControls

console.log('-Util validationControls');
console.log('isEmailValidate --', 'hello@gmail.com', '-->', isEmailValidate('hello@gmail.com'));
console.log('isEmailValidate --', 'hello@.com', '-->', isEmailValidate('hello@.com'));
console.log('isEmailValidate --', '', '-->', isEmailValidate(''));
console.log('----');

console.log('-Util validationControls');
console.log('isValueMaxLength --', 'Et harum', '-->', isValueMaxLength('Et harum', 10));
console.log('isValueMaxLength --', 'Et harum quidem', '-->', isValueMaxLength('Et harum quidem', 10));
console.log('----');

console.log('-Util validationControls');
console.log('isValueMinLength --', 'Et harum quidem', '-->', isValueMinLength('Et harum quidem', 10));
console.log('isValueMinLength --', 'Et harum', '-->', isValueMinLength('Et harum', 10));
console.log('----');

console.log('-Util validationControls');
console.log('isValueOnlyNumber --', '48987987', '-->', isValueOnlyNumber('48987987'));
console.log('isValueOnlyNumber --', '1234Et harum', '-->', isValueOnlyNumber('1234Et harum'));
console.log('----');

console.log('-Util validationControls');
console.log('isValueOnlyLettersAlphabet --', 'Lorem ipsum dolor', '-->',
    isValueOnlyLettersAlphabet('Lorem ipsum dolor'));
console.log('isValueOnlyLettersAlphabet --', 'Lorem i1psum dolor', '-->',
    isValueOnlyLettersAlphabet('Lorem i1psum dolor'));
console.log('----');

console.log('-Util validationControls');
console.log('isValueOnlyCyrillicAlphabet --', 'Таким образом', '-->', isValueOnlyCyrillicAlphabet('Таким образом'));
console.log('isValueOnlyCyrillicAlphabet --', 'Lorem ipsum dolor', '-->',
    isValueOnlyCyrillicAlphabet('Lorem ipsum dolor'));
console.log('----');

console.log('-Util validationControls');
console.log('isValueOnlyLatinAlphabet --', 'Lorem ipsum dolor', '-->', isValueOnlyLatinAlphabet('Lorem ipsum dolor'));
console.log('isValueOnlyLatinAlphabet --', 'Таким образом', '-->', isValueOnlyLatinAlphabet('Таким образом'));
console.log('----');

console.log('-Util validationControls');
console.log('isAnySymbols --', '/!*--re#re---*####578!/', '-->',
    isAnySymbols('/!*--re#re---*####578!/', '/!*-1re8457#@t'));
console.log('isAnySymbols --', '/!*-rtr----1*!/', '-->', isAnySymbols('/!*-rtr----1*!/', '/!*-1'));
console.log('----');

console.log('-Util validationControls');
console.log('isValueInTemplate --', 'Lorem ipsum', '-->', isValueInTemplate('Lorem ipsum', /^[a-zA-Z ]*$/));
console.log('isValueInTemplate --', 'Lorem ipsum123', '-->', isValueInTemplate('Lorem ipsum123', /^[a-zA-Z ]*$/));
console.log('----');

console.log('-Util validationControls');
console.log('isFormatBirthdayValidate --', '11.09.1984', '-->', isFormatBirthdayValidate('11.09.1984'));
console.log('isFormatBirthdayValidate --', '11/09/85', '-->', isFormatBirthdayValidate('11/09/85'));
console.log('----');

console.log('-Util validationControls');
console.log('isPhoneNumberValidate --', '+79043221144', '-->', isPhoneNumberValidate('+79043221144'));
console.log('isPhoneNumberValidate --', '89043221144', '-->', isPhoneNumberValidate('89043221144'));
console.log('isPhoneNumberValidate --', '8904', '-->', isPhoneNumberValidate('8904'));
console.log('----');

console.log('-Util validationControls');
console.log('isUrlValidate --', 'http://foo.com/blah_blah', '-->', isUrlValidate('http://foo.com/blah_blah'));
console.log('isUrlValidate --', 'http://foo', '-->', isUrlValidate('http://foo'));
console.log('----');

// arrayExtensions

console.log('-Util arrayExtensions');
console.log('intersectOrNotEmpty --', '[1, 5, 9, 5, 2, 2], [1, 2, 3, 4, 5, 6, 7, 8, 9]', '-->',
    intersectOrNotEmpty([1, 5, 9, 5, 2, 2], [1, 3, 4, 6, 7, 8, 9]));
console.log('intersectOrNotEmpty --', '[1, 5, 9, 5, 2, 2], []', '-->', intersectOrNotEmpty([1, 5, 9, 5, 2, 2], []));
console.log('----');

console.log('-Util arrayExtensions');
console.log('exceptArray --', '[1, 5, 9, 5, 2, 2], [1, 3, 4, 5, 6, 7, 8, 9]', '-->',
    exceptArray([1, 5, 9, 5, 2, 2], [1, 3, 4, 5, 6, 7, 8, 9]));
console.log('exceptArray --', '[1, 5, 9, 5, 2, 2], []', '-->', exceptArray([1, 5, 9, 5, 2, 2], []));
console.log('----');

console.log('-Util arrayExtensions');
console.log('uniqueArray --', '[1, 5, 9, 5, 2, 2]', '-->', uniqueArray([1, 5, 9, 5, 2, 2]));
console.log('uniqueArray --', '[1, 1, 1, 1]', '-->', uniqueArray([1, 1, 1, 1]));
console.log('uniqueArray --', '["sort", "array", "key", "increase", "key", 2, 2]', '-->',
    uniqueArray(['sort', 'array', 'key', 'increase', 'key', 2, 2]));
console.log('----');

console.log('-Util arrayExtensions');
console.log('sortArrayIncrease --', '[1, 5, 9, 5, 2, 2]', '-->', sortArrayIncrease([1, 5, 9, 5, 2, 2]));
console.log('----');

console.log('-Util arrayExtensions');
console.log('sortArrayDecrease --', '[1, 5, 9, 5, 2, 2]', '-->', sortArrayDecrease([1, 5, 9, 5, 2, 2]));
console.log('----');

console.log('-Util arrayExtensions');
console.log('sortArrayByKeyIncreaseObjectValue --',
    '[{number: 111}, {number: 5}, {number: 9}, {number: 5}, {number: 15}, {number: 2}], number', '-->',
    sortArrayByKeyIncreaseObjectValue([{ number: 111 }, { number: 5 }, { number: 9 },
        { number: 5 }, { number: 15 }, { number: 2 }], 'number'));
console.log('----');

console.log('-Util arrayExtensions');
console.log('sortArrayByKeyDecreaseObjectValue --',
    '[{number: 111}, {number: 5}, {number: 9}, {number: 5}, {number: 15}, {number: 2}], number', '-->',
    sortArrayByKeyDecreaseObjectValue([{ number: 111 }, { number: 5 }, { number: 9 },
        { number: 5 }, { number: 15 }, { number: 2 }], 'number'));
console.log('getObjectArrayByPropertyValue --',
    `[{value: "00", name: "00"}, {value: "01", name: "01"}, {value: "02", name: "02"},
    {value: "03", name: "03"}, {value: "04", name: "04"}, 'value', '04']`, '-->',
    getObjectArrayByPropertyValue(
        [
            {
                value: '00',
                name: '00'
            },
            {
                value: '01',
                name: '01'
            },
            {
                value: '02',
                name: '02'
            },
            {
                value: '03',
                name: '03'
            },
            {
                value: '04',
                name: '04'
            }
        ],
        'value', '04'));
console.log('----');

// eventExtensions

console.log('-Util eventExtensions');
console.log('detectTouchEvents --', '-->', detectTouchEvents());
console.log('----');

// numberExtensions

console.log('-Util numberExtensions');
console.log('makeBeautyNumber --', '1000000000', '-->', makeBeautyNumber(1000000000));
console.log('makeBeautyNumber --', '123456', '-->', makeBeautyNumber(123456));
console.log('getRandomInt --', '1 10', '-->', getRandomInt(1, 10));
console.log('getRandomInt --', '0 100', '-->', getRandomInt(0, 100));
console.log('getNumberOrUndefined --', '123', '-->', getNumberOrUndefined('123'));
console.log('getNumberOrUndefined --', '123', '-->', getNumberOrUndefined('123g'));
console.log('extractNumber --', '123qwerty', '-->', extractNumber('123qwerty'));
console.log('extractNumber --', 'qwerty123qwerty', '-->', extractNumber('qwerty123qwerty'));
console.log('isRomanNumber --', 'IV', '-->', isRomanNumber('IV'));
console.log('isRomanNumber --', 'IVe', '-->', isRomanNumber('IVe'));
console.log('parseRoman --', 'IV', '-->', parseRoman('IV'));
console.log('addZeroToFirstChar --', '5', '-->', addZeroToFirstChar(5));
console.log('addZeroToFirstChar --', '5', '-->', addZeroToFirstChar(12));
console.log('getNumberCase --', '12', '-->', getNumberCase(12, 'привет', 'привета', 'приветов'));
console.log('getNumberCase --', '1', '-->', getNumberCase(1, 'привет', 'привета', 'приветов'));
console.log('getNumberCase --', '2', '-->', getNumberCase(2, 'привет', 'привета', 'приветов'));
console.log('roundNumber --', '2.5161681681681, 4', '-->', roundNumber(2.5161681681681, 4));
console.log('----');

// objectExtensions

console.log('-Util objectExtensions');
console.log('hasValue --', '{first: "", second: 5} 5', '-->', hasValue({
    first: '',
    second: 5
}, 5));
console.log('hasValue --', '{first: "", second: 9} 5', '-->', hasValue({
    first: '',
    second: 9
}, 5));
console.log('getKeyByValue --', '{first: "", second: 5} 5', '-->', getKeyByValue({
    first: '',
    second: 5
}, 5));
console.log('----');
