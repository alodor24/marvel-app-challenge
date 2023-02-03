import axios from "axios";
import md5 from "md5";

const timestamp = Date.now();
const BASE_URL = "http://gateway.marvel.com/v1/public";
const PUBLIC_KEY = "53bcde9ea27ef56a6c7504ad9db3c768";
const PRIVATE_KEY = "bc08f8ecce6343e726fcdff6219387d09f38251d";

const hash = md5(String(timestamp) + PRIVATE_KEY + PUBLIC_KEY);

export const get = (endpoint: string, offset?: number) => {
  const url = `${BASE_URL}${endpoint}?ts=${timestamp}&apikey=${PUBLIC_KEY}&hash=${hash}`;

  if (offset) {
    return axios.get(url + `&offset=${offset}`).then((resp) => resp.data.data);
  } else {
    return axios.get(url).then((resp) => resp.data.data);
  }
};
