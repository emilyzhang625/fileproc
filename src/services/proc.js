import axios from "axios";
const SERVER_URL = "http://localhost:3001/";

const procText = (text) => {
  return axios.post(SERVER_URL, text);
};

export default procText;
