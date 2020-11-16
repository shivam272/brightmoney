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

export const thisMonthIncome = 50000;
