import { useParams } from "react-router-dom";
import { PageViewMode } from "../../components/constants";
import Detail from "../../components/Detail";
import Layout from "../../components/Layout";
import Loader from "../../components/Loader";
import useGetComic from "../../hooks/useGetComic";

const ComicDetail = () => {
  const { comicId } = useParams<{ comicId: string }>();
  const { data, isLoading } = useGetComic({ comicId });

  return (
    <Layout>
      {isLoading ? (
        <Loader />
      ) : (
        <Detail data={data?.results} mode={PageViewMode.COMICS} />
      )}
    </Layout>
  );
};

export default ComicDetail;
