import { Container } from 'react-bootstrap';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import FunnyImage from '../../assets/images/funny-image.jpeg';
import * as SC from './NotData.styles';

const NotData = () => {
  return (
    <Container>
      <SC.Wrapper>
        <LazyLoadImage
          className="img-fluid"
          src={FunnyImage}
          alt="Funny Image"
          width={250}
        />
        <h4>Data not found</h4>
      </SC.Wrapper>
    </Container>
  );
};

export default NotData;
