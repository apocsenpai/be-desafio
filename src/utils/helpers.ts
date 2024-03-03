export const getMonth = (date: Date) => {
  const displayMonth = date.getMonth() + 1;

  return displayMonth < 10 ? `0${displayMonth}` : displayMonth.toString();
};

export const getDate = (date: Date) => {
  const day = date.getDate();

  return day < 10 ? `0${day}` : day.toString();
};
