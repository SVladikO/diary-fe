export const getDateInFormat = dateStr => {
    const e = new Date(+dateStr);
    return `${e.getDate()}/${e.getMonth() + 1}/${e.getFullYear()}`;
}
export const getTimeInFormat = dateStr => {
    const e = new Date(+dateStr);
    return e.getHours() + ":" + e.getMinutes();
}