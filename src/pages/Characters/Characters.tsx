import { useCallback, useState } from 'react';
import { debounce } from 'lodash';
import { PageViewMode } from '../../components/constants';
import Hero from '../../components/Hero';
import Layout from '../../components/Layout';
import List from '../../components/List';
import Loader from '../../components/Loader';
import Paginate from '../../components/Paginate';
import Search from '../../components/Search';
import usePaginateContext from '../../context/PaginateContext/usePaginateContext';
import useGetAllCharacters from '../../hooks/useGetAllCharacters';
import useSearch from '../../hooks/useSearch';
import { DEBOUNCE_TIME } from '../../utils';

const Characters = () => {
  const {
    offsetCharacters,
    currentPageCharacters,
    setOffsetCharacters,
    setCurrentPageCharacters,
  } = usePaginateContext();
  const { valueCharacterStored, setValueCharacterStored } = useSearch();
  const [searchValue, setSearchValue] = useState<string>(valueCharacterStored);

  const { data, isLoading } = useGetAllCharacters({
    offset: offsetCharacters,
    nameStartsWith:
      valueCharacterStored && valueCharacterStored !== ''
        ? valueCharacterStored
        : undefined,
  });

  const lastPage = data && Math.ceil(data.total / 20);

  const handleStoreValue = (value: string) => {
    setValueCharacterStored(value);
  };

  const handleStoreValueDebounced = useCallback(
    debounce(handleStoreValue, DEBOUNCE_TIME),
    []
  );

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
    handleStoreValueDebounced(event.target.value);
  };

  const handleClear = () => {
    setSearchValue('');
    setValueCharacterStored('');
    setOffsetCharacters(0);
    setCurrentPageCharacters(1);
  };

  return (
    <Layout>
      <Hero title="Marvel Characters" />
      <Search
        mode={PageViewMode.CHARACTERS}
        value={searchValue}
        onChange={handleChange}
        handlerClear={handleClear}
      />
      {isLoading ? (
        <Loader />
      ) : (
        <List data={data?.results} mode={PageViewMode.CHARACTERS} />
      )}
      {data && data.total > data.count && (
        <Paginate
          lastPage={lastPage}
          offset={offsetCharacters}
          currentPage={currentPageCharacters}
          mode={PageViewMode.CHARACTERS}
        />
      )}
    </Layout>
  );
};

export default Characters;
