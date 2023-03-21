import axios from 'axios';
import md5 from 'md5';

const timestamp = Date.now();
const BASE_URL = import.meta.env.VITE_BASE_URL;
const PUBLIC_KEY = import.meta.env.VITE_PUBLIC_KEY;
const PRIVATE_KEY = import.meta.env.VITE_PRIVATE_KEY;

const hash = md5(String(timestamp) + PRIVATE_KEY + PUBLIC_KEY);

export const get = (endpoint: string, options?: {}) => {
  const url = `${BASE_URL}${endpoint}`;

  const customParams = {
    ...options,
    ts: timestamp,
    apikey: PUBLIC_KEY,
    hash: hash,
  };

  return axios
    .get(url, { params: customParams })
    .then((resp) => resp.data.data);
};

export const DEBOUNCE_TIME = 1000;
