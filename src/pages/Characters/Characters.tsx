import Layout from "../../components/Layout";
import Loader from "../../components/Loader";
import useGetAllCharacters from "../../hooks/useGetAllCharacters";

const Characters = () => {
  const { data, isLoading } = useGetAllCharacters();

  return <Layout>{isLoading ? <Loader /> : <div>Characters</div>}</Layout>;
};

export default Characters;
