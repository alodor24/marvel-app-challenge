import { Button, Card } from "react-bootstrap";
import styled from "styled-components";

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;
  padding: 5rem 0;

  @media (max-width: 767px) {
    grid-template-columns: 1fr;
  }

  @media (min-width: 768px) and (max-width: 991px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 992px) and (max-width: 1199px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

export const CardList = styled(Card)`
  background-color: ${(props) => props.theme.colors.grey[0]};
  border-radius: 0.3rem;
  border: none;
  transition: ${(props) => props.theme.transition};
  box-shadow: ${(props) => props.theme.shadow[1]};

  :hover {
    transform: scale(1.05);
    box-shadow: ${(props) => props.theme.shadow[0]};
  }

  img {
    border-radius: 0.3rem 0.3rem 0 0;
  }

  .card-title {
    color: ${(props) => props.theme.colors.white[0]};
    margin-bottom: 1rem;
  }
`;

export const ButtonList = styled(Button)`
  border-radius: 0;
  border: none;
  background-color: ${(props) => props.theme.colors.red[0]};
  transition: ${(props) => props.theme.transition};

  :hover {
    background-color: ${(props) => props.theme.colors.red[1]};
  }
`;
