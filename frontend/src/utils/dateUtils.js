export const MONTH_ARRAY = ['JAN', 'FEB', 'MAR', 'APR', 'MAI', 'JUN', 'JUL', 'AUG', 'SET', 'OCT', 'NOV', 'DEZ'];

export const getFormattedDate = (dateString) => {
    let date = new Date(dateString);
    return `${date.getDay()} / ${MONTH_ARRAY[date.getMonth()]} / ${date.getYear()}`;
}

export const getSimplifiedDate = (dateString) => {
    let date = new Date(dateString);
    return `${date.getDay()} ${MONTH_ARRAY[date.getMonth()]}`;
}

export const getFormattedMonth = (dateString) => {
    let date = new Date(dateString);
    return `${MONTH_ARRAY[date.getMonth()]}`;
}