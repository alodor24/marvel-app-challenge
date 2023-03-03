import styled from 'styled-components';
import { CommonLinkStyle } from '../../mixins';

export const Footer = styled.footer`
  padding: 2.5rem 0;
  background-color: ${(props) => props.theme.colors.grey[0]};
`;

export const Text = styled.p`
  color: ${(props) => props.theme.colors.grey[1]};
  font-size: ${(props) => props.theme.fontSize[0]};
  margin: 0;
  text-align: center;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
`;

export const ExternalLink = styled.a`
  ${CommonLinkStyle}
  color: ${(props) => props.theme.colors.white[0]};
  transition: ${(props) => props.theme.transition[0]};

  :hover {
    color: ${(props) => props.theme.colors.red[0]};
  }
`;
