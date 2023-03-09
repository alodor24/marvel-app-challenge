import { useQuery } from 'react-query';
import { get } from '../utils';
import { ComicsResponse } from './types';

type Props = {
  offset?: number;
  titleStartsWith?: string;
};

export const GET_ALL_COMICS = 'GET_ALL_COMICS';

const getAllComics = (
  offset?: number,
  titleStartsWith?: string
): Promise<ComicsResponse> => get('/comics', { offset, titleStartsWith });

const useGetAllComics = ({ offset, titleStartsWith }: Props) => {
  return useQuery([GET_ALL_COMICS, offset, titleStartsWith], () =>
    getAllComics(offset, titleStartsWith)
  );
};

export default useGetAllComics;
