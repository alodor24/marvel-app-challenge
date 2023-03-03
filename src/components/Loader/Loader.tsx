import { LazyLoadImage } from 'react-lazy-load-image-component';
import Loading from '../../assets/images/loading.gif';
import * as SC from './Loader.styles';

const Loader = () => {
  return (
    <SC.Wrapper>
      <LazyLoadImage
        className="img-fluid"
        src={Loading}
        alt="Marvel Masthead"
        width={300}
      />
      <h4>Loading...!!</h4>
    </SC.Wrapper>
  );
};

export default Loader;
