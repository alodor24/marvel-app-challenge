import { LazyLoadImage } from "react-lazy-load-image-component";
import Layout from "../../components/Layout";
import MarvelMasthead from "../../assets/images/marvel-masthead.jpeg";

const Home = () => {
  return (
    <Layout>
      <div>Home</div>
      <div>
        <LazyLoadImage
          className="img-fluid"
          src={MarvelMasthead}
          alt="Marvel Masthead"
        />
      </div>
    </Layout>
  );
};

export default Home;
