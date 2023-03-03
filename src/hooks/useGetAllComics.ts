import { useQuery } from 'react-query';
import { get } from '../utils';
import { ComicsResponse } from './types';

type Props = {
  offset?: number;
};

export const GET_ALL_COMICS = 'GET_ALL_COMICS';

const getAllComics = (offset?: number): Promise<ComicsResponse> =>
  get('/comics', offset);

const useGetAllComics = ({ offset }: Props) => {
  return useQuery([GET_ALL_COMICS, offset], () => getAllComics(offset));
};

export default useGetAllComics;
