import Layout from '../../components/Layout';
import MarvelMasthead from '../../assets/images/marvel-masthead.jpeg';
import List from '../../components/List';
import { PageViewMode } from '../../components/constants';
import useGetAllCharacters from '../../hooks/useGetAllCharacters';
import useGetAllComics from '../../hooks/useGetAllComics';
import { Container } from 'react-bootstrap';
import Loader from '../../components/Loader';
import * as SC from './Home.styles';
import Slider from '../../components/Slider';
import { Parallax } from 'react-parallax';

const Home = () => {
  const { data: dataCharacters, isLoading: isLoadingCharacters } =
    useGetAllCharacters({});
  const { data: dataComics, isLoading: isLoadingComics } = useGetAllComics({});

  const dataSliceCharacters = dataCharacters?.results.slice(0, 8);
  const dataSliceComics = dataComics?.results.slice(0, 8);

  return (
    <Layout>
      {isLoadingCharacters || isLoadingComics ? (
        <Loader />
      ) : (
        <>
          <Slider />
          <Container>
            <h2>Characters List</h2>
            <hr />
            <SC.WrapperButton>
              <SC.SectionButton to="/characters">
                View All Characters
              </SC.SectionButton>
            </SC.WrapperButton>
          </Container>
          <List data={dataSliceCharacters} mode={PageViewMode.CHARACTERS} />

          <Container>
            <h2>Comics List</h2>
            <hr />
            <SC.WrapperButton>
              <SC.SectionButton to="/comics">View All Comics</SC.SectionButton>
            </SC.WrapperButton>
          </Container>
          <List data={dataSliceComics} mode={PageViewMode.COMICS} />

          <Parallax
            bgImage={MarvelMasthead}
            bgImageAlt="Marvel Masthead"
            strength={200}
          >
            <div style={{ padding: '10rem 0' }} />
          </Parallax>
        </>
      )}
    </Layout>
  );
};

export default Home;
