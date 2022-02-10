const axios = require("axios");

// const BASE_URL = "https://api.skilla.ru/apiinfo";
const BASE_URL = "https://api.skilla.ru/mango/getList";
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
    const result = await axios.post(BASE_URL);
    return result;
  } catch (error) {
    console.log(error.message);
  }
};
