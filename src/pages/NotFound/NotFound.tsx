import { Container } from "react-bootstrap";
import { Link, useRouteError } from "react-router-dom";
import Layout from "../../components/Layout";
import FunnyImage from "../../assets/images/funny-image.jpeg";
import * as SC from "./NotFound.styles";

const NotFound = () => {
  const error: any = useRouteError();

  return (
    <Layout>
      <Container>
        <SC.Wrapper>
          <SC.Block>
            <img
              className="img-fluid"
              src={FunnyImage}
              alt="Funny Image"
              loading="lazy"
              width={300}
            />
          </SC.Block>

          <SC.Block>
            <SC.Title>{error.status}</SC.Title>
            <SC.Message>{error.statusText || error.message}</SC.Message>
            <SC.Button to="/">Volver a home</SC.Button>
          </SC.Block>
        </SC.Wrapper>
      </Container>
    </Layout>
  );
};

export default NotFound;
