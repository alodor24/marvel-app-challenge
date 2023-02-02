import { Col, Container, ListGroup, Row } from "react-bootstrap";
import { Character, Comic } from "../../hooks/types";
import { ImageExtensionEnum, PageViewMode } from "../constants";
import * as SC from "./Detail.styles";

type Props = {
  data?: Character[] | Comic[];
  mode: PageViewMode;
};

const Detail: React.FC<Props> = ({ data, mode }) => {
  const pathToReturn =
    mode === PageViewMode.CHARACTERS ? "/characters" : "/comics";

  return (
    <Container>
      <SC.ReturnButton to={pathToReturn}>Go back</SC.ReturnButton>
      <SC.Wrapper>
        {(data || []).map((item) => (
          <Row key={item.id}>
            <Col md={5} lg={3}>
              <SC.ImageDetail
                className="img-fluid"
                src={
                  item.thumbnail.path +
                  ImageExtensionEnum.PORTRAIT_INCREDIBLE +
                  item.thumbnail.extension
                }
                alt={item.name || item.title}
              />
            </Col>

            <Col md={7} lg={6}>
              <SC.Title>{item.name || item.title}</SC.Title>
              <SC.Description>
                {item.description ? item.description : "No Data"}
              </SC.Description>
            </Col>

            <Col lg={3}>
              <SC.Sidebar>
                {mode === PageViewMode.CHARACTERS ? (
                  <>
                    <h4>Related Comics</h4>
                    <hr />
                    <ListGroup variant="flush">
                      {item.comics.items.map((comic, index) => (
                        <ListGroup.Item key={index}>
                          {comic.name}
                        </ListGroup.Item>
                      ))}
                    </ListGroup>
                  </>
                ) : (
                  <>
                    <h4>Sale Information</h4>
                    <hr />
                    {item.prices && (
                      <p>
                        Price:{" "}
                        {item.prices[0].price > 0 ? (
                          <SC.Price>${item.prices[0].price}</SC.Price>
                        ) : (
                          "-"
                        )}
                      </p>
                    )}
                  </>
                )}
              </SC.Sidebar>
            </Col>
          </Row>
        ))}
      </SC.Wrapper>
    </Container>
  );
};

export default Detail;
