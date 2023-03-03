import { useQuery } from 'react-query';
import { get } from '../utils';
import { CharactersResponse } from './types';

type Props = {
  offset?: number;
};

export const GET_ALL_CHARACTERS = 'GET_ALL_CHARACTERS';

const getAllCharacters = (offset?: number): Promise<CharactersResponse> =>
  get('/characters', offset);

const useGetAllCharacters = ({ offset }: Props) => {
  return useQuery([GET_ALL_CHARACTERS, offset], () => getAllCharacters(offset));
};

export default useGetAllCharacters;
