import { Carousel } from "react-bootstrap";
import styled from "styled-components";
import { MEDIA_SIZE } from "../../theme";

export const CarouselContainer = styled(Carousel)`
  margin-bottom: 4rem;

  button.active {
    background-color: ${(props) => props.theme.colors.red[0]};
  }

  @media (min-width: 1024px) {
    .carousel-item {
      height: calc(100vh - 101.9px);
    }

    .carousel-caption {
      background-color: ${(props) => props.theme.colors.grey[2]};
      padding: 1rem;
    }

    .carousel-indicators {
      padding: 0.5rem 0;
    }
  }

  @media (${MEDIA_SIZE}) {
    .carousel-caption {
      display: none;
    }
  }
`;
