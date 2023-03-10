import { useParams } from 'react-router-dom';
import { PageViewMode } from '../../components/constants';
import Detail from '../../components/Detail';
import Layout from '../../components/Layout';
import Loader from '../../components/Loader';
import useGetCharacter from '../../hooks/useGetCharacter';
import NotFound from '../NotFound';

const CharacterDetail = () => {
  const { characterId } = useParams<{ characterId: string }>();
  const { data, isLoading, error } = useGetCharacter({
    characterId: Number(characterId),
  });

  if (error) {
    return <NotFound />;
  }

  return (
    <Layout>
      {isLoading ? (
        <Loader />
      ) : (
        <Detail data={data?.results} mode={PageViewMode.CHARACTERS} />
      )}
    </Layout>
  );
};

export default CharacterDetail;
