import { useParams } from "react-router-dom";
import { PageViewMode } from "../../components/constants";
import Detail from "../../components/Detail";
import Layout from "../../components/Layout";
import Loader from "../../components/Loader";
import useGetComic from "../../hooks/useGetComic";
import NotFound from "../NotFound";

const ComicDetail = () => {
  const { comicId } = useParams<{ comicId: string }>();
  const { data, isLoading, error } = useGetComic({ comicId: Number(comicId) });

  if (error) {
    return <NotFound />;
  }

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
