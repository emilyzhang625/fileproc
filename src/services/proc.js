import axios from "axios";
const SERVER_URL = "http://localhost:3001/";

const procText = (text) => {
  console.log(text);
  const req = axios.post(SERVER_URL, text, {
    headers: {
      "Content-Type": "text/plain",
    },
  });
  return req.then((res) => res.data);
};

const delText = () => {
  axios.delete(SERVER_URL);
};

export default { procText, delText };
