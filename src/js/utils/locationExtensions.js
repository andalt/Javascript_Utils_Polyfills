/**
 * Получение значения по параметру в url
 * @param {string} name
 * @param {string} url
 * @returns {string}
 */
export const getQueryParams = (name, url) => {
    if (!url) url = window.location.href;
    name = name.replace(/[\[]/, '\\\[').replace(/[\]]/, '\\\]');

    const regexS = '[\\?#/&]' + name + '=([^&#]*)';
    const regex = new RegExp(regexS);
    const results = regex.exec(url);

    return results === null ? null : results[1];
};
