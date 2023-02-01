import { Button, Card, Container } from "react-bootstrap";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Character } from "../../hooks/types";
import { IMAGE_EXTENSION } from "../../utils";
import * as SC from "./List.styles";

type Props = {
  data?: Character[];
};

const List: React.FC<Props> = ({ data }) => {
  const handleRedirect = (id: string) => {
    // TODO: Code here
  };

  return (
    <Container>
      <SC.Wrapper>
        {(data || []).map((item) => (
          <SC.CardList key={item.id}>
            <LazyLoadImage
              src={
                item.thumbnail.path + IMAGE_EXTENSION + item.thumbnail.extension
              }
              alt={item.name}
            />
            <Card.Body>
              <Card.Title>{item.name}</Card.Title>
              <SC.ButtonList onClick={() => handleRedirect(String(item.id))}>
                View Detail
              </SC.ButtonList>
            </Card.Body>
          </SC.CardList>
        ))}
      </SC.Wrapper>
    </Container>
  );
};

export default List;
