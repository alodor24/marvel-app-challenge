import { useQuery } from "react-query";
import { get } from "../utils";
import { CharactersResponse } from "./types";

type Props = {
  characterId?: string;
};

export const GET_CHARACTER = "GET_CHARACTER";

const getCharacter = async (id?: string): Promise<CharactersResponse> => {
  const data = await get(`/characters/${id}`);
  return data;
};

const useGetCharacter = ({ characterId }: Props) => {
  return useQuery([GET_CHARACTER, characterId], () =>
    getCharacter(characterId)
  );
};

export default useGetCharacter;
