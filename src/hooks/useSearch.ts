import { useEffect, useState } from 'react';

const useSearch = () => {
  const searchValueStored =
    typeof window !== 'undefined' &&
    JSON.parse(localStorage.getItem('searchValue') || '{}');

  const [valueCharacterStored, setValueCharacterStored] = useState(
    searchValueStored.character
  );

  const [valueComicStored, setValueComicStored] = useState(
    searchValueStored.comic
  );

  const searchValueOption = {
    character: valueCharacterStored,
    comic: valueComicStored,
  };

  useEffect(() => {
    localStorage.setItem('searchValue', JSON.stringify(searchValueOption));
  }, [valueCharacterStored, valueComicStored]);

  return {
    valueCharacterStored,
    setValueCharacterStored,
    valueComicStored,
    setValueComicStored,
  };
};

export default useSearch;
