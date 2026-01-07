export const getDateInFormat = dateStr => {
    const e = new Date(+dateStr);
    return `${e.getDate()}/${e.getMonth() + 1}/${e.getFullYear()}`;
}
export const getTimeInFormat = dateStr => {
    const e = new Date(+dateStr);
    return e.getHours() + ":" + e.getMinutes();
}

export const createDateFromDDMMYYYY = (dateString) => {
    const parts = dateString.split('.');
    // Note: the month in JavaScript's Date constructor is 0-based (0 for January, 11 for December)
    const day = parseInt(parts[0], 10);
    const monthIndex = parseInt(parts[1], 10) - 1;
    const year = parseInt(parts[2], 10);

    return new Date(year, monthIndex, day);
}

console.log(55555, createDateFromDDMMYYYY('14/3/2021').getTime());
