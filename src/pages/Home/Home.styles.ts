import { Parallax } from "react-parallax";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { CommonLinkButton } from "../../mixins";

export const WrapperButton = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const SectionButton = styled(Link)`
  ${CommonLinkButton}
`;

export const SectionParallax = styled(Parallax)`
  @media (min-width: 1280px) {
    height: 300px;
  }
`;
