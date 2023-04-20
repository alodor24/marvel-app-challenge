import { Button, Card } from 'react-bootstrap';
import styled from 'styled-components';

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(15rem, 1fr));
  gap: 2rem;
  padding: 5rem 0;
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

  .card-body {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  @media (max-width: 576px) {
    :hover {
      transform: none;
    }
  }
`;

export const Price = styled.p`
  color: ${(props) => props.theme.colors.white[0]};
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
