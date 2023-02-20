export const getSpecificDateTime = (date: Date) => {
  const today = new Date();
  const timeDiff = Math.abs(date.getTime() - today.getTime());
  const remainingDays = Math.floor(timeDiff / (1000 * 3600 * 24));
  const remainingHours = Math.floor((timeDiff / (1000 * 3600)) % 24);
  const remainingMinutes = Math.floor((timeDiff % (1000 * 3600)) / (1000 * 60));
  const remainingSeconds = Math.floor((timeDiff % (1000 * 60)) / 1000);
  const isDueDate = date.getTime() < today.getTime();

  return {
    remainingDays,
    remainingHours,
    remainingMinutes,
    remainingSeconds,
    isDueDate,
  };
};
