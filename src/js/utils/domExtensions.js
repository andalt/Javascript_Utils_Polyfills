/**
 * Получение высоты html блока с учетом внутренних, внешних отступов и границ
 * @param {HTMLElement} element
 * @returns {number}
 */
export const outerHeight = (element) => {
    let height = element.offsetHeight;
    const style = getComputedStyle(element);

    height += parseInt(style.marginTop) + parseInt(style.marginBottom);

    return height;
};

/**
 * Получение соседей html элемента
 * @param {HTMLElement} element
 * @returns {HTMLElement}
 */
export const siblings = (element) => {
    return Array.prototype.filter.call(element.parentNode.children, (child) => {
        return child !== element;
    });
};
