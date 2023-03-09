import axios from 'axios';
import md5 from 'md5';

const timestamp = Date.now();
const BASE_URL = 'https://gateway.marvel.com:443/v1/public';
const PUBLIC_KEY = '53bcde9ea27ef56a6c7504ad9db3c768';
const PRIVATE_KEY = 'bc08f8ecce6343e726fcdff6219387d09f38251d';

const hash = md5(String(timestamp) + PRIVATE_KEY + PUBLIC_KEY);

export const get = (
  endpoint: string,
  offset?: number,
  nameStartsWith?: string
) => {
  const url = `${BASE_URL}${endpoint}`;

  const customParams = {
    offset: offset,
    nameStartsWith: nameStartsWith,
    ts: timestamp,
    apikey: PUBLIC_KEY,
    hash: hash,
  };

  return axios
    .get(url, { params: customParams })
    .then((resp) => resp.data.data);
};

export const DEBOUNCE_TIME = 1000;
