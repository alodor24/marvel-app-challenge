import { useQuery } from "react-query";
import { get } from "../utils";
import { ComicsResponse } from "./types";

export const GET_ALL_COMICS = "GET_ALL_COMICS";

const getAllComics = (): Promise<ComicsResponse> => get("/comics");

const useGetAllComics = () => {
  return useQuery([GET_ALL_COMICS], () => getAllComics());
};

export default useGetAllComics;
