import styled from "styled-components";
import MarvelMasthead from "../../assets/images/marvel-masthead.jpeg";
import { MEDIA_SIZE } from "../../theme";

export const Wrapper = styled.div`
  background-image: url(${MarvelMasthead});
  background-size: cover;
  background-position: center;
  min-height: 70vh;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (${MEDIA_SIZE}) {
    min-height: 40vh;
  }
`;

export const Title = styled.h1`
  text-align: center;
  color: ${(props) => props.theme.colors.white[0]};
  text-transform: uppercase;
  font-size: 4rem;
  text-shadow: ${(props) => props.theme.shadow[2]};

  @media (${MEDIA_SIZE}) {
    font-size: 2rem;
  }
`;
