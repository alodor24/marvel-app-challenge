import { Container } from "react-bootstrap";
import { Parallax } from "react-parallax";
import * as SC from "./Hero.styles";
import MarvelMasthead from "../../assets/images/marvel-masthead.jpeg";

type Props = {
  title?: string;
};

const Hero: React.FC<Props> = ({ title }) => {
  return (
    <Parallax
      bgImage={MarvelMasthead}
      bgImageAlt="Marvel Masthead"
      strength={200}
    >
      <Container>
        <SC.Title>{title}</SC.Title>
      </Container>
    </Parallax>
  );
};

export default Hero;
