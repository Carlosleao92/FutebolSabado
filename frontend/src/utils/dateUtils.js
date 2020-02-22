export const MONTH_ARRAY = ['JAN', 'FEB', 'MAR', 'APR', 'MAI', 'JUN', 'JUL', 'AUG', 'SET', 'OCT', 'NOV', 'DEZ'];

export const getFormattedDate = (dateString) => {
    let date = new Date(dateString);
    return `${MONTH_ARRAY[date.getMonth()]}`;
}