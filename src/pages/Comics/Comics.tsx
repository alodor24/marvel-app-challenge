import Hero from "../../components/Hero";
import Layout from "../../components/Layout";
import List from "../../components/List";
import Loader from "../../components/Loader";
import useGetAllComics from "../../hooks/useGetAllComics";

const Comics = () => {
  const { data, isLoading } = useGetAllComics();

  return (
    <Layout>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <Hero title="Marvel Comics" />
          <List data={data?.results} />
        </>
      )}
    </Layout>
  );
};

export default Comics;
