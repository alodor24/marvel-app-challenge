import { useQuery } from "react-query";
import { get } from "../utils";
import { CharactersResponse } from "./types";

export const GET_ALL_CHARACTERS = "GET_ALL_CHARACTERS";

const getAllCharacters = (): Promise<CharactersResponse> => get("/characters");

const useGetAllCharacters = () => {
  return useQuery([GET_ALL_CHARACTERS], () => getAllCharacters());
};

export default useGetAllCharacters;
