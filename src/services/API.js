const axios = require("axios");

// const BASE_URL = "https://api.skilla.ru/apiinfo";
const BASE_URL = "https://api.skilla.ru/";
//https://api.skilla.ru/mango/getRecord

const tokenValid = "qwerty123";

const token = {
  setToken(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
};

export const fetchListCalls = async () => {
  try {
    token.setToken(tokenValid);
    const result = await axios.post(`${BASE_URL}mango/getList`);
    // const result = await axios.get(`${BASE_URL}`);

    return result;
  } catch (error) {
    console.log(error.message);
  }
};

export const fetchRecordCall = async ({ record, partnership_id }) => {
  // const result = await fetch(
  //   `${BASE_URL}mango/getRecord?record=${record}&partnership_id-${partnership_id}`,
  //   {
  //     method: "POST",
  //     header: {
  //       Authorization: `Bearer ${tokenValid}`,
  //     },
  //   }
  // );
  // return result;
  // try {
  //   token.setToken(tokenValid);
  //   const result = await axios.post(
  //     `${BASE_URL}mango/getRecord?record=${record}&partnership_id-${partnership_id}`
  //   );
  //   return result;
  // } catch (error) {
  //   console.log(error.message);
  // }
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open(
      "POST",
      `${BASE_URL}mango/getRecord?record=${record}&partnership_id-${partnership_id}`
    );
    xhr.setRequestHeader("Authorization", `Bearer ${tokenValid}`);
    xhr.onload = () => {
      console.log("status", xhr.response);
      if (xhr.status === 200) {
        console.log(xhr.response);
        const blob = new Blob([xhr.response], { type: "audio/x-mpeg-3" });
        resolve(blob);
      }
    };
    xhr.onerror = () => {
      console.log("error", xhr.response);
    };
    xhr.send();
  });
};
