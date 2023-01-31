import { Container } from "react-bootstrap";
import { Link, useRouteError } from "react-router-dom";
import Layout from "../../components/Layout";
import { LazyLoadImage } from "react-lazy-load-image-component";
import FunnyImage from "../../assets/images/funny-image.jpeg";
import * as SC from "./NotFound.styles";

const NotFound = () => {
  const error: any = useRouteError();

  return (
    <Layout>
      <Container>
        <SC.Wrapper>
          <SC.Block>
            <LazyLoadImage
              className="img-fluid"
              src={FunnyImage}
              alt="Funny Image"
              width={300}
            />
          </SC.Block>

          <SC.Block>
            <SC.Title>{error.status}</SC.Title>
            <SC.Message>{error.statusText || error.message}</SC.Message>
            <SC.Button to="/">Back to Home</SC.Button>
          </SC.Block>
        </SC.Wrapper>
      </Container>
    </Layout>
  );
};

export default NotFound;
