import { useState } from 'react';
import { PaginateContextData } from '.';

const usePaginateContextValue = (): PaginateContextData => {
  const [offsetCharacters, setOffsetCharacters] = useState<number>(0);
  const [currentPageCharacters, setCurrentPageCharacters] = useState<number>(1);

  const [offsetComics, setOffsetComics] = useState<number>(0);
  const [currentPageComics, setCurrentPageComics] = useState<number>(1);

  return {
    offsetCharacters,
    setOffsetCharacters,
    currentPageCharacters,
    setCurrentPageCharacters,
    offsetComics,
    setOffsetComics,
    currentPageComics,
    setCurrentPageComics,
  };
};

export default usePaginateContextValue;
