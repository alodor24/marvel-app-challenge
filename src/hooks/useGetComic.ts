import { useQuery } from "react-query";
import { get } from "../utils";
import { ComicsResponse } from "./types";

type Props = {
  comicId?: string;
};

export const GET_COMIC = "GET_COMIC";

const getComic = async (id?: string): Promise<ComicsResponse> => {
  const data = await get(`/comics/${id}`);
  return data;
};

const useGetComic = ({ comicId }: Props) => {
  return useQuery([GET_COMIC, comicId], () => getComic(comicId));
};

export default useGetComic;
