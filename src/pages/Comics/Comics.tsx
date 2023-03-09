import { debounce } from 'lodash';
import { useCallback, useState } from 'react';
import { PageViewMode } from '../../components/constants';
import Hero from '../../components/Hero';
import Layout from '../../components/Layout';
import List from '../../components/List';
import Loader from '../../components/Loader';
import Paginate from '../../components/Paginate';
import Search from '../../components/Search';
import usePaginateContext from '../../context/PaginateContext/usePaginateContext';
import useGetAllComics from '../../hooks/useGetAllComics';
import useSearch from '../../hooks/useSearch';
import { DEBOUNCE_TIME } from '../../utils';

const Comics = () => {
  const {
    offsetComics,
    currentPageComics,
    setOffsetComics,
    setCurrentPageComics,
  } = usePaginateContext();
  const { valueComicStored, setValueComicStored } = useSearch();
  const [searchValue, setSearchValue] = useState<string>(valueComicStored);

  const { data, isLoading } = useGetAllComics({
    offset: offsetComics,
    titleStartsWith:
      valueComicStored && valueComicStored !== ''
        ? valueComicStored
        : undefined,
  });

  const lastPage = data && Math.ceil(data.total / 20);

  const handleStoreValue = (value: string) => {
    setValueComicStored(value);
    setOffsetComics(0);
    setCurrentPageComics(1);
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
    setValueComicStored('');
    setOffsetComics(0);
    setCurrentPageComics(1);
  };

  return (
    <Layout>
      <Hero title="Marvel Comics" />
      <Search
        mode={PageViewMode.COMICS}
        value={searchValue}
        onChange={handleChange}
        handlerClear={handleClear}
      />
      {isLoading ? (
        <Loader />
      ) : (
        <List data={data?.results} mode={PageViewMode.COMICS} />
      )}
      {data && data.total > data.count && (
        <Paginate
          lastPage={lastPage}
          offset={offsetComics}
          currentPage={currentPageComics}
          mode={PageViewMode.COMICS}
        />
      )}
    </Layout>
  );
};

export default Comics;
