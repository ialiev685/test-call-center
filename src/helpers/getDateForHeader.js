export const getDateForHeader = () => {
  const arrMonth = [
    "Январь",
    "Февраль",
    "Март",
    "Апрель",
    "Май",
    "Июнь",
    "Июль",
    "Август",
    "Сентябрь",
    "Октябрь",
    "Ноябрь",
    "Декабрь",
  ];
  const arrDay = [
    "Воскресенье",
    "Понедельник",
    "Вторник",
    "Среда",
    "Четверг",
    "Пятница",
    "Суббота",
  ];

  const dateNow = new Date();

  const date = dateNow.getDate();
  const day = dateNow.getDay();
  const month = dateNow.getMonth();

  return `${arrDay[day]}, ${date} ${arrMonth[month]}`;
};
