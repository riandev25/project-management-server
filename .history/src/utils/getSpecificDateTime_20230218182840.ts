export const getSpecificDateTime = (date: Date) => {
  const today = new Date();
  const timeDiff = Math.abs(date.getTime() - today.getTime());
  const remainingDays = Math.floor(timeDiff / (1000 * 3600 * 24));
  const remainingHours = Math.floor((timeDiff / (1000 * 3600)) % 24);

  return { remainingDays, remainingHours };
};
