# Набор javascript утилит (сниппетов) и полифиллов

[gitlab source](http://gitlab.smarthead.ru/frontend/Javascript_utils.git)

Набор наиболее часто используемых функций в javascript

## Папки проекта

* polyfills - Javascript_utils\src\js\polyfills
* utils - Javascript_utils\src\js\utils

## Инструкция

Инструкции по использованию нет, можно брать (копировать) полностью папку, или отдельно категорию или конкретный метод и подстраивать под себя как угодно.

## Документация

### Полифиллы

__isNumberInteger__

Полифилл для поддержк в ie метода isInteger

```javascript
isNumberInteger(0.1); // false
isNumberInteger(1);   // true
```

__closest__

Полифилл для поддержк в ie метода closest

```javascript
document.querySelector('block').closest('parent'); // parent
```

### Утилиты

#### Методы для строк

__isStringEmpty__

Проверяет на пустую строку

```javascript
isStringEmpty('');      // true
isStringEmpty('Hello'); // false
```

__stringToNumber__

Преобразует строку в число

```javascript
stringToNumber('10');  // 10
stringToNumber('10v'); // 10
```

__capitalizeFirstLetter__

Первая буква в слове заглавная, остальные какие были

```javascript
capitalizeFirstLetter ('helloWorld'); // HelloWorld
```

__capitalizeOnlyFirstLetter__

Только первая буква в слове заглавная, остальные маленькие

```javascript
capitalizeOnlyFirstLetter  ('helloWorld'); // Helloworld
```

__getRandomHash__

Получение случайной строки (хеша)

```javascript
getRandomHash(10); // xIUYY7jFws
```

__testOnlySpace__

Строка из одних пробелов

```javascript
testOnlySpace('            ');  // true
testOnlySpace('      j      '); // false
```

#### Методы для location

__getQueryParams__

Получение значения по параметру в url

```javascript
getQueryParams('id', 'http://localhost:8088?id=1&a=%2Fadmin&b=2&c=3&d&e');  // 1
```

#### Методы валидации

__isEmailValidate__

Валидация email

```javascript
isEmailValidate('hello@gmail.com'); // true
isEmailValidate('hello@.com');      // false
isEmailValidate('');                // false
```

__isValueMaxLength__

Валидация на максимальное количество символов

```javascript
isValueMaxLength('Et harum', 10);        // true
isValueMaxLength('Et harum quidem', 10); // false
```

__isValueMinLength__

Валидация на минимальное количество символов

```javascript
isValueMinLength('Et harum quidem', 10); // true
isValueMinLength('Et harum', 10);        // false
```

__isValueOnlyNumber__

Валидация на использование только чисел

```javascript
isValueOnlyNumber('48987987');     // true
isValueOnlyNumber('1234Et harum'); // false
```

__isValueOnlyLettersAlphabet__

Валидация на использование только латиницы или кириллицы, исключая числа

```javascript
isValueOnlyLettersAlphabet('Lorem ipsum dolor');  // true
isValueOnlyLettersAlphabet('Lorem i1psum dolor'); // false
```

__isValueOnlyCyrillicAlphabet__

Валидация на использование только кириллицы

```javascript
isValueOnlyCyrillicAlphabet('Таким образом');     // true
isValueOnlyCyrillicAlphabet('Lorem ipsum dolor'); // false
```

__isValueOnlyLatinAlphabet__

Валидация на использование только латиницы

```javascript
isValueOnlyLatinAlphabet('Lorem ipsum dolor'); // true
isValueOnlyLatinAlphabet('Таким образом');     // false
```

__isAnySymbols__

Валидаиця на сивмолы, совпадения значения (1 аргумент) с набором символов (2 аргумент)

```javascript
isAnySymbols('/!*--re#re---*####578!/', '/!*-1re8457#@t'); // true
isAnySymbols('/!*-rtr----1*!/', '/!*-1');                  // false
```

__isValueInTemplate__

Валидация по реулярному выражению указанному в параметре

```javascript
isValueInTemplate('Lorem ipsum', /^[a-zA-Z ]*$/);    // true
isValueInTemplate('Lorem ipsum123', /^[a-zA-Z ]*$/); // false
```

__isFormatBirthdayValidate__

Валидация на формат дня рождения 00.00.0000

```javascript
isFormatBirthdayValidate('11.09.1984'); // true
isFormatBirthdayValidate('11/09/85'); // false
```

__isPhoneNumberValidate__

Валидация телефона

```javascript
isPhoneNumberValidate('+79043221144'); // true
isPhoneNumberValidate('89043221144');  // false
isPhoneNumberValidate('8904');         // false
```

__isUrlValidate__

Валидация url

```javascript
isUrlValidate('http://foo.com/blah_blah'); // true
isUrlValidate('http://foo');               // false
```

#### Методы для массивов

__intersectOrNotEmpty__

Возвращает массив значений, которые совпадают в двух массивах (пересечение двух массивов) или возвращает тот который не пустой

```javascript
intersectOrNotEmpty([1, 5, 9, 5, 2, 2], [1, 3, 4, 6, 7, 8, 9]); // [1, 9]
intersectOrNotEmpty([1, 5, 9, 5, 2, 2], []);                    // [1, 5, 9, 5, 2, 2]
```

__exceptArray__

Исключает из первого массива значения второго

```javascript
exceptArray([1, 5, 9, 5, 2, 2], [1, 3, 4, 5, 6, 7, 8, 9]); // [2, 2]
exceptArray([1, 5, 9, 5, 2, 2], []);                       // [1, 5, 9, 5, 2, 2]
```

__uniqueArray__

Оставляет только уникальные значения в массиве

```javascript
uniqueArray([1, 5, 9, 5, 2, 2]); // [1, 2, 5, 9]
uniqueArray([1, 1, 1, 1]);       // [1]
uniqueArray(['sort', 'array', 'key', 'increase', 'key', 2, 2]); // ['2', 'sort', 'array', 'key', 'increase']
```

__sortArrayIncrease__

Сортировка числовых значений в массиве по возрастанию

```javascript
sortArrayIncrease([1, 5, 9, 5, 2, 2]); // [1, 2, 2, 5, 5, 9]
```

__sortArrayDecrease__

Сортировка числовых значений по убыванию

```javascript
sortArrayDecrease([1, 5, 9, 5, 2, 2]); // [9, 5, 5, 2, 2, 1]
```

__sortArrayByKeyIncreaseObjectValue__

Сортировка по числовому значению объекта в массиве по возрастанию

```javascript
sortArrayByKeyIncreaseObjectValue([{ number: 111 }, { number: 5 }, { number: 9 }, { number: 5 }, { number: 15 }, { number: 2 }], 'number'); // [{ number: 2 }, { number: 5 }, { number: 5 }, { number: 9 }, { number: 15 }, { number: 111 }]
```

__sortArrayByKeyDecreaseObjectValue__

Сортировка по числовому значению объекта в массиве по убыванию

```javascript
sortArrayByKeyDecreaseObjectValue([{ number: 111 }, { number: 5 }, { number: 9 }, { number: 5 }, { number: 15 }, { number: 2 }], 'number'); // [{ number: 111 }, { number: 15 }, { number: 9 }, { number: 5 }, { number: 5 }, { number: 2 }]
```

__getObjectArrayByPropertyValue__

Получение объекта в массиве по свойству и его значению

```javascript
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
        'value', '04'); // [{ value: '04', name: '04' }]
```

#### Методы для событий

__addListenerMulti__

Возможность прописать несколько событий

```javascript
addListenerMulti('html element', 'input blur', (event) => {});
```

__detectTouchEvents__

Определение тач устройств

```javascript
detectTouchEvents();
```

#### Методы для чисел

__makeBeautyNumber__

Преобразование цены в формат 0 000

```javascript
makeBeautyNumber(1000000000); // 1 000 000 000
makeBeautyNumber(123456);     // 123 456
```

__getRandomInt__

Получение случайного целого числа

```javascript
getRandomInt(1, 10);  // 5
getRandomInt(0, 100); // 44
```

__getNumberOrUndefined__

Получает число или undefined

```javascript
getNumberOrUndefined(123);    // 123
getNumberOrUndefined('123g'); // undefined
```

__extractNumber__

Извлекает число из строки (15qwerty -> 15)

```javascript
extractNumber('123qwerty');       // 123
extractNumber('qwerty123qwerty'); // 123
```

__isRomanNumber__

Проверяет является ли значение римским числом

```javascript
isRomanNumber('IV');  // true
isRomanNumber('IVe'); // false
```

__parseRoman__

Преобразует римское число в number

```javascript
parseRoman('IV'); // 4
```

__addZeroToFirstChar__

Добавляет ноль если цифр 1

```javascript
addZeroToFirstChar(5);  // 05
addZeroToFirstChar(12); // 12
```

__getNumberCase__

Функция для склонения существительного в зависимости от количества элементов

```javascript
getNumberCase(12, 'привет', 'привета', 'приветов'); // приветов
getNumberCase(1, 'привет', 'привета', 'приветов');  // привет
getNumberCase(2, 'привет', 'привета', 'приветов');  // привета
```

__roundNumber__

Округление числа

```javascript
roundNumber(2.5161681681681, 4); // 2.5162
```

#### Методы для объектов

__hasValue__

Проверяет есть ли значение у какого либо свойства в объекте

```javascript
hasValue({
    first: '',
    second: 5
}, 5); // true
hasValue({
    first: '',
    second: 9
}, 5); // false
```

__getKeyByValue__

Получает название свойства по значению в объекте

```javascript
getKeyByValue({
    first: '',
    second: 5
}, 5); // second
```


### Схожие инструменты

- [Underscore](http://underscorejs.org/)
- [Lodash](https://lodash.com/)
- [Sugar](https://sugarjs.com/)
- [Lazy](http://danieltao.com/lazy.js/)

## Support

Please open an issue for support.
