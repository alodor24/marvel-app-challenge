import axios from "axios";
import md5 from "md5";

const timestamp = Date.now();
const publicKey = import.meta.env.VITE_MARVEL_PUBLIC_KEY;
const privateKey = import.meta.env.VITE_MARVEL_PRIVATE_KEY;

const hash = md5(String(timestamp) + privateKey + publicKey);

export const get = (endpoint: string) => {
  const promise = axios
    .get(
      `${
        import.meta.env.VITE_MARVEL_BASE_URL
      }${endpoint}?ts=${timestamp}&apikey=${publicKey}&hash=${hash}`
    )
    .then((resp) => resp.data.data);

  return promise;
};

export const IMAGE_EXTENSION = "/standard_fantastic.";
