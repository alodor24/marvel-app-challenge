import Layout from "../../components/Layout";
import useGetAllCharacters from "../../hooks/useGetAllCharacters";

const Characters = () => {
  const { data: characters, isLoading } = useGetAllCharacters({});

  return (
    <Layout>{isLoading ? <h1>Loading...</h1> : <div>Characters</div>}</Layout>
  );
};

export default Characters;
