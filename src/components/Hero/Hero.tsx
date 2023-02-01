import { Container } from "react-bootstrap";
import * as SC from "./Hero.styles";

type Props = {
  title?: string;
};

const Hero: React.FC<Props> = ({ title }) => {
  return (
    <SC.Wrapper>
      <Container>
        <SC.Title>{title}</SC.Title>
      </Container>
    </SC.Wrapper>
  );
};

export default Hero;
