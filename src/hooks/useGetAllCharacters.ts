import { useQuery } from 'react-query';
import { get } from '../utils';
import { CharactersResponse } from './types';

type Props = {
  offset?: number;
  nameStartsWith?: string;
};

export const GET_ALL_CHARACTERS = 'GET_ALL_CHARACTERS';

const getAllCharacters = (
  offset?: number,
  nameStartsWith?: string
): Promise<CharactersResponse> => get('/characters', offset, nameStartsWith);

const useGetAllCharacters = ({ offset, nameStartsWith }: Props) => {
  return useQuery([GET_ALL_CHARACTERS, offset, nameStartsWith], () =>
    getAllCharacters(offset, nameStartsWith)
  );
};

export default useGetAllCharacters;
