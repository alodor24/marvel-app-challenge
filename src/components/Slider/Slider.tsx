import { Carousel } from 'react-bootstrap';
import { carouselItem } from './constants';
import * as SC from './Slider.styles';

const Slider = () => {
  return (
    <SC.CarouselContainer fade>
      {carouselItem.map((item) => (
        <Carousel.Item key={item.id}>
          <img
            className="d-block w-100"
            src={item.image}
            alt={`slide ${item.id}`}
          />
          <Carousel.Caption>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </SC.CarouselContainer>
  );
};

export default Slider;
