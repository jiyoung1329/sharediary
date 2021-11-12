const monthNames = [
  'JANUARY',
  'FEBRUARY',
  'MARCH',
  'APRIL',
  'MAY',
  'JUNE',
  'JULY',
  'AUGUST',
  'SEPTEMBER',
  'OCTOBER',
  'NOVEMBER',
  'DECEMBER',
];

const today = new Date();

const getYear = () => today.getFullYear();
const getMonth = () => today.getMonth() + 1;
const getDate = () => today.getDate();
const getMonthName = () => monthNames[today.getMonth()];

const getToday = {
  getYear,
  getMonth,
  getDate,
  getMonthName,
};

export default getToday;
