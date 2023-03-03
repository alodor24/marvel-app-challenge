import styled from 'styled-components';
import { MEDIA_SIZE } from '../../theme';

export const Title = styled.h1`
  text-align: center;
  color: ${(props) => props.theme.colors.white[0]};
  text-transform: uppercase;
  font-size: 4rem;
  text-shadow: ${(props) => props.theme.shadow[2]};
  padding: 10rem 0;

  @media (${MEDIA_SIZE}) {
    font-size: 2rem;
  }
`;
