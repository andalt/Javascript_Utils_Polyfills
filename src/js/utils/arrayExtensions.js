/**
 * Возвращает массив значений, которые совпадают в двух массивах (пересечение двух массивов)
 * или возвращает тот который не пустой
 * @param  {[]} arr1
 * @param  {[]} arr2
 * @returns {[]}
 */
export const intersectOrNotEmpty = (arr1, arr2) => {
    if (arr1 && !arr2) {
        return arr1;
    }

    if (!arr1 && arr2) {
        return arr2;
    }

    if (arr1.length > 0 && arr2.length === 0) {
        return arr1;
    }

    if (arr1.length === 0 && arr2.length > 0) {
        return arr2;
    }

    return arr1.filter((n) => arr2.indexOf(n) > -1);
};


/**
 * Исключает из первого массива значения второго
 * @param  {[]} arr1
 * @param  {[]} arr2
 * @returns {[]}
 */
export const exceptArray = (arr1, arr2) => {
    if (!arr2) {
        return arr1;
    }

    if (!arr1) {
        return arr1;
    }


    return arr1.filter((n) => arr2.indexOf(n) === -1);
};

/**
 * Оставляет только уникальные значения в массиве
 * @param  {[]} arr
 * @returns {[]}
 */
export const uniqueArray = (arr) => {
    const obj = {};

    for (let i = 0; i < arr.length; i++) {
        const str = arr[i];

        obj[str] = true;
    }

    return Object.keys(obj);
};

/**
 * Сортировка числовых значений в массиве по возрастанию
 * @params {array} array
 * @returns {array}
 * */
export const sortArrayIncrease = (array) => array.sort((a, b) => parseInt(a, 10) - parseInt(b, 10));

/**
 * Сортировка числовых значений по убыванию
 * @params {array} array
 * @returns {array}
 * */
export const sortArrayDecrease = (array) => array.sort((a, b) => parseInt(b, 10) - parseInt(a, 10));

/**
 * Сортировка по числовому значению объекта в массиве по возрастанию
 * @params {array} array
 * @params {string} property
 * @returns {array}
 * */
export const sortArrayByKeyIncreaseObjectValue = (array, property) => {
    return array.sort((a, b) => parseInt(a[property], 10) - parseInt(b[property], 10));
};

/**
 * Сортировка по числовому значению объекта в массиве по убыванию
 * @params {array} array
 * @params {string} property
 * @returns {array}
 * */
export const sortArrayByKeyDecreaseObjectValue = (array, property) => {
    return array.sort((a, b) => parseInt(b[property], 10) - parseInt(a[property], 10));
};

/**
 * Получение объекта в массиве по свойству и его значению
 * @params {array} array
 * @params {string} parameter
 * @params {string} value
 * @returns {object}
 * */
export const getObjectArrayByPropertyValue = (array, parameter, value) => {
    return array.filter((obj) => obj[parameter] === value)[0];
};
