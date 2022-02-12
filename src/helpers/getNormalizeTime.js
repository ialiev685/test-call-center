export const getNormalizeTime = (date) => {
  const getTimeArr = date.split(" ")[1].split(":");
  const getTimeNormalize = `${getTimeArr[0]}:${getTimeArr[1]}`;
  return getTimeNormalize;
};
