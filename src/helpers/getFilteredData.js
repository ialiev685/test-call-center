//helpers
import { getDiiffCountDays } from "./getDiiffCountDays";

const getListTypeCalls = (value, data) => {
  const codesArr = [
    { val: "1", name: "Входящие" },
    { val: "0", name: "Исходящие" },
  ];

  if (value.text === "Все") return data;
  // if (value.text === "Все") {
  //   const filteredData = data.filter(
  //     ({ in_out }) => in_out === "0" || in_out === "1"
  //   );

  //   return filteredData;
  // }

  const selectValue = codesArr.find(({ _, name }) => value.text === name);

  const filteredData = data.filter(({ in_out }) => in_out === selectValue.val);

  return filteredData;
};

const getPeriodListCalls = (period, data) => {
  const codesArr = [
    { val: 3, name: "3 дня" },
    { val: 7, name: "Неделя" },
    { val: 31, name: "Месяц" },
    { val: 366, name: "Год" },
  ];

  const selectValue = codesArr.find(({ _, name }) => period.text === name);

  const filteredData = data.filter(({ date_notime }) => {
    return getDiiffCountDays(date_notime) <= selectValue.val;
  });

  return filteredData;
};

const getCurrentClienCall = (client, data) => {
  if (client.text === "Все") return data;

  const selectValue = client.text.split("|");

  if (selectValue[0].trim() !== "" && selectValue[1].trim() !== "") {
    const filteredData = data.filter(({ contact_company, contact_name }) => {
      return (
        contact_name === selectValue[0].trim() &&
        contact_company === selectValue[1].trim()
      );
    });

    return filteredData;
  }

  if (selectValue[0].trim() !== "" && selectValue[1].trim() === "") {
    const filteredData = data.filter(({ contact_company, contact_name }) => {
      return contact_name === selectValue[0].trim() && contact_company === "";
    });

    return filteredData;
  }

  if (selectValue[0].trim() === "" && selectValue[1].trim() !== "") {
    const filteredData = data.filter(({ contact_company, contact_name }) => {
      return contact_name === "" && contact_company === selectValue[1].trim();
    });
    return filteredData;
  }
  return data;
};

export const apiFilter = {
  getListTypeCalls,
  getPeriodListCalls,
  getCurrentClienCall,
};
