import axios from "axios";
import md5 from "md5";

const timestamp = Date.now();
const BASE_URL = import.meta.env.VITE_MARVEL_BASE_URL;
const PUBLIC_KEY = import.meta.env.VITE_MARVEL_PUBLIC_KEY;
const PRIVATE_KEY = import.meta.env.VITE_MARVEL_PRIVATE_KEY;

const hash = md5(String(timestamp) + PRIVATE_KEY + PUBLIC_KEY);

export const get = (endpoint: string, offset?: number) => {
  const url = `${BASE_URL}${endpoint}?ts=${timestamp}&apikey=${PUBLIC_KEY}&hash=${hash}`;

  if (offset) {
    return axios.get(url + `&offset=${offset}`).then((resp) => resp.data.data);
  } else {
    return axios.get(url).then((resp) => resp.data.data);
  }
};
