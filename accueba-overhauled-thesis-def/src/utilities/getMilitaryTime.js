export const getMilitaryTime = (date) => {
  const getHour1 = date.getHours();
  const getMinute1 = date.getMinutes();
  return `${getHour1}:${getMinute1}:00`;
};
