import { PageViewMode } from "../../components/constants";
import Hero from "../../components/Hero";
import Layout from "../../components/Layout";
import List from "../../components/List";
import Loader from "../../components/Loader";
import useGetAllComics from "../../hooks/useGetAllComics";

const Comics = () => {
  const { data, isLoading } = useGetAllComics({ offset: 0 });

  return (
    <Layout>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <Hero title="Marvel Comics" />
          <List data={data?.results} mode={PageViewMode.COMICS} />
        </>
      )}
    </Layout>
  );
};

export default Comics;
