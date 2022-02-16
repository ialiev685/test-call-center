export const getNormalizeMinute = (data) => {
  const minutes = Math.floor(data / 60);
  const normalizeMinute = minutes < 10 ? "0" + minutes : minutes;
  const seconds = data % 60;
  const normalizeSecond = seconds < 10 ? "0" + seconds : seconds;

  const time = `${normalizeMinute}:${normalizeSecond}`;
  return time;
};
