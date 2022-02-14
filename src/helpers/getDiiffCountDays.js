export const getDiiffCountDays = (date) => {
  const dateCall = new Date(date);
  const dateNow = new Date();
  const diffDate = Math.ceil((dateNow - dateCall) / (1000 * 3600 * 24));
  return diffDate;
};
