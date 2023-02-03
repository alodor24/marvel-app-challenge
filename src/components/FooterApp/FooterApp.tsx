import { Container } from "react-bootstrap";
import { LazyLoadImage } from "react-lazy-load-image-component";
import LogoMarvel from "../../assets/images/logo-marvel.svg";
import * as SC from "./FooterApp.styles";

const FooterApp = () => {
  return (
    <SC.Footer>
      <Container>
        <SC.Wrapper>
          <LazyLoadImage src={LogoMarvel} alt="Logo Marvel" width={130} />
          <SC.Text>
            Created by José Méndez |{" "}
            <SC.ExternalLink
              href="https://github.com/alodor24/marvel-app-challenge"
              target="_blank"
            >
              Github Repository
            </SC.ExternalLink>
          </SC.Text>
        </SC.Wrapper>
      </Container>
    </SC.Footer>
  );
};

export default FooterApp;
