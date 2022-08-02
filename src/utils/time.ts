export const getToday = () => {
  const now = new Date();
  return {
    year: now.getFullYear(),
    day: now.getDate(),
    month: now.getMonth() + 1,
  };
};
