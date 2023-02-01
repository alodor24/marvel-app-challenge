import { PageViewMode } from "../../components/constants";
import Hero from "../../components/Hero";
import Layout from "../../components/Layout";
import List from "../../components/List";
import Loader from "../../components/Loader";
import useGetAllCharacters from "../../hooks/useGetAllCharacters";

const Characters = () => {
  const { data, isLoading } = useGetAllCharacters();

  return (
    <Layout>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <Hero title="Marvel Characters" />
          <List data={data?.results} mode={PageViewMode.CHARACTERS} />
        </>
      )}
    </Layout>
  );
};

export default Characters;
