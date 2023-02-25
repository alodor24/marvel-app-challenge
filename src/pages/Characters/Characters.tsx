import { PageViewMode } from "../../components/constants";
import Hero from "../../components/Hero";
import Layout from "../../components/Layout";
import List from "../../components/List";
import Loader from "../../components/Loader";
import Paginate from "../../components/Paginate";
import usePaginateContext from "../../context/PaginateContext/usePaginateContext";
import useGetAllCharacters from "../../hooks/useGetAllCharacters";

const Characters = () => {
  const { offsetCharacters, currentPageCharacters } = usePaginateContext();
  const { data, isLoading } = useGetAllCharacters({
    offset: offsetCharacters,
  });

  const lastPage = data && Math.floor(data.total / 20);

  return (
    <Layout>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <Hero title="Marvel Characters" />
          <List data={data?.results} mode={PageViewMode.CHARACTERS} />
          <Paginate lastPage={lastPage} offset={offsetCharacters} currentPage={currentPageCharacters} mode={PageViewMode.CHARACTERS} />
        </>
      )}
    </Layout>
  );
};

export default Characters;
