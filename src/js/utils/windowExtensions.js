/**
 * Метод открытия новго окна с фиксированной шириной и высотой
 * @params {string} url
 * */
export const newWindow = (url) => {
    const winTop = (screen.height / 2) - (400 / 2);
    const winLeft = (screen.width / 2) - (600 / 2);

    window.open(url, 'auth', 'top=' + winTop + ',left=' + winLeft +
        ',toolbar=0,status=0,width=' + 600 + ',height=' + 400);
};
