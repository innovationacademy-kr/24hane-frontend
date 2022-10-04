export const todayUtils = () => {
  const now = new Date();
  return {
    year: now.getFullYear(),
    day: now.getDate(),
    month: now.getMonth() + 1,
  };
};

export const secondsFormatKor = (seconds: number) => {
  const tempHours = Math.floor(seconds / 3600);
  const tempMinuts = Math.floor((seconds / 60) % 60);
  const tempSeconds = Math.floor(seconds % 60);

  return `${tempHours < 10 ? `0${tempHours}` : tempHours}시간${
    tempMinuts < 10 ? `0${tempMinuts}` : tempMinuts
  }분${tempSeconds < 10 ? `0${tempSeconds}` : tempSeconds}초`;
};
