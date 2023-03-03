import { css } from 'styled-components';

export const CommonLinkStyle = css`
  text-decoration: none;
`;

export const CommonLinkButton = css`
  text-decoration: none;
  background-color: ${(props) => props.theme.colors.red[0]};
  color: ${(props) => props.theme.colors.white[0]};
  transition: ${(props) => props.theme.transition};
  padding: 1rem 2rem;
  font-weight: ${(props) => props.theme.fontWeight[0]};

  :hover {
    background-color: ${(props) => props.theme.colors.red[1]};
    color: ${(props) => props.theme.colors.white[0]};
  }
`;
