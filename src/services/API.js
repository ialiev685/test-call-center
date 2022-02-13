const axios = require("axios");

// const BASE_URL = "https://api.skilla.ru/apiinfo";
const BASE_URL = "https://api.skilla.ru/";
//https://api.skilla.ru/mango/getRecord

const tokenValid = "qwerty123";

const token = {
  setToken(token) {
    console.log(token);
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
};

export const fetchListCalls = async () => {
  try {
    token.setToken(tokenValid);
    const result = await axios.post(`${BASE_URL}mango/getList`);
    // const result = await axios.get(`${BASE_URL}`);
    console.log("result", result.data);
    return result;
  } catch (error) {
    console.log(error.message);
  }
};

export const fetchRecordCall = async (data) => {
  try {
    token.setToken(tokenValid);
    const result = await axios.post(`${BASE_URL}mango/getRecord`, data);
    console.log(result);
    return result;
  } catch (error) {
    console.log(error.message);
  }
};
