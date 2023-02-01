import { Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { CommonLinkStyle } from "../../mixins";
import { MEDIA_SIZE } from "../../theme";

export const Wrapper = styled(Navbar)`
  padding: 1rem 0;
  background-color: ${(props) => props.theme.colors.grey[0]};
  backdrop-filter: blur(1rem);
  box-shadow: ${(props) => props.theme.shadow[0]};

  .navbar-toggler {
    background-color: ${(props) => props.theme.colors.green[0]};
    border: none;
    border-radius: 0;
    height: 50px;
  }
`;

export const ContainerNav = styled(Nav)`
  gap: 1rem;

  @media (${MEDIA_SIZE}) {
    margin: 3rem 0 1rem 0;
  }
`;

export const LinkNav = styled(NavLink)`
  ${CommonLinkStyle}
  font-size: ${(props) => props.theme.fontSize[1]};
  color: ${(props) => props.theme.colors.white[0]};
  transition: ${(props) => props.theme.transition[0]};

  :hover {
    color: ${(props) => props.theme.colors.red[0]};
  }

  &.active {
    color: ${(props) => props.theme.colors.red[0]};
  }
`;
