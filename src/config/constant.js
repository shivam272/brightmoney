export const monthArray = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

export const shortMonthArray = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sept",
  "Oct",
  "Nov",
  "Dec",
];

export const categoryOptions = [
  "Food",
  "Travel",
  "Entertainment",
  "Medical",
  "Education",
  "Others",
];

export const renderDropList = (options) =>
  options.map((el) => (
    <option key={el} value={el}>
      {el}
    </option>
  ));

export const getDateMonthHeader = () => {
  const currentYear = new Date().getFullYear();
  const currentMonth = monthArray[new Date().getMonth()];
  return { currentMonth, currentYear };
};

export const thisMonthIncome = 50000;
