import { QueryObserverResult, useQuery } from "react-query";
import { get } from "../utils";

export const GET_ALL_CHARACTERS = "GET_ALL_CHARACTERS";

const getAllCharacters = () => get("/characters");

const useGetAllCharacters = ({
  ...queryOptions
}): QueryObserverResult<unknown[]> => {
  return useQuery([GET_ALL_CHARACTERS], () => getAllCharacters(), {
    ...queryOptions,
  });
};

export default useGetAllCharacters;
