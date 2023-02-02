import { LazyLoadImage } from "react-lazy-load-image-component";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { CommonLinkStyle } from "../../mixins";

export const ReturnButton = styled(Link)`
  ${CommonLinkStyle}
  display: inline-block;
  color: ${(props) => props.theme.colors.red[0]};
  font-weight: ${(props) => props.theme.fontWeight[0]};
  margin-top: 3rem;
  transition: ${(props) => props.theme.transition};

  ::before {
    content: "< ";
  }

  :hover {
    color: ${(props) => props.theme.colors.red[1]};
  }
`;

export const Wrapper = styled.div`
  padding: 3rem 0;
`;

export const ImageDetail = styled(LazyLoadImage)`
  box-shadow: ${(props) => props.theme.shadow[1]};
  width: 100%;
  margin-bottom: 2rem;
`;

export const Title = styled.h1`
  margin-bottom: 1rem;
`;

export const Description = styled.p`
  font-size: ${(props) => props.theme.fontSize[0]};
  text-align: justify;
`;

export const Sidebar = styled.aside`
  background-color: ${(props) => props.theme.colors.grey[0]};
  padding: 1rem;
  color: ${(props) => props.theme.colors.white[0]};
  position: sticky;
  top: 10rem;
`;

export const Price = styled.span`
  font-size: 1.5rem;
  color: ${(props) => props.theme.colors.red[0]};
  font-weight: ${(props) => props.theme.fontWeight[0]};
`;
