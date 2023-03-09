import { PageViewMode } from '../../components/constants';
import Hero from '../../components/Hero';
import Layout from '../../components/Layout';
import List from '../../components/List';
import Loader from '../../components/Loader';
import Paginate from '../../components/Paginate';
import usePaginateContext from '../../context/PaginateContext/usePaginateContext';
import useGetAllComics from '../../hooks/useGetAllComics';

const Comics = () => {
  const { offsetComics, currentPageComics } = usePaginateContext();
  const { data, isLoading } = useGetAllComics({ offset: offsetComics });

  const lastPage = data && Math.ceil(data.total / 20);

  return (
    <Layout>
      <Hero title="Marvel Comics" />
      {isLoading ? (
        <Loader />
      ) : (
        <List data={data?.results} mode={PageViewMode.COMICS} />
      )}
      <Paginate
        lastPage={lastPage}
        offset={offsetComics}
        currentPage={currentPageComics}
        mode={PageViewMode.COMICS}
      />
    </Layout>
  );
};

export default Comics;
