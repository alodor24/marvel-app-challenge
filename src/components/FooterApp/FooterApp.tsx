import { Container } from "react-bootstrap";
import LogoMarvel from "../../assets/images/logo-marvel.svg";
import * as SC from "./FooterApp.styles";

const FooterApp = () => {
  return (
    <SC.Footer>
      <Container>
        <SC.Wrapper>
          <img src={LogoMarvel} alt="Logo Marvel" loading="lazy" width={130} />
          <SC.Text>
            Created by José Méndez |{" "}
            <SC.ExternalLink href="" target="_blank">
              Github Repository
            </SC.ExternalLink>
          </SC.Text>
        </SC.Wrapper>
      </Container>
    </SC.Footer>
  );
};

export default FooterApp;
