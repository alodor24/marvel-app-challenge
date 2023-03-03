import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { CommonLinkButton } from '../../mixins';
import { MEDIA_SIZE } from '../../theme';

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  min-height: ${(props) => props.theme.minHeight};
  padding: 5rem 0;

  @media (${MEDIA_SIZE}) {
    grid-template-columns: 1fr;
  }
`;

export const Block = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.h1`
  font-size: 8rem;
`;

export const Message = styled.p`
  font-size: ${(props) => props.theme.fontSize[1]};
`;

export const Button = styled(Link)`
  ${CommonLinkButton}
`;
