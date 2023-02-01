import { Card, Container } from "react-bootstrap";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { useNavigate } from "react-router-dom";
import { Character, Comic } from "../../hooks/types";
import { IMAGE_EXTENSION } from "../../utils";
import { PageViewMode } from "../constants";
import * as SC from "./List.styles";

type Props = {
  data?: Character[] | Comic[];
  mode: PageViewMode;
};

const List: React.FC<Props> = ({ data, mode }) => {
  const navigate = useNavigate();

  const handleRedirect = (id: string) => {
    if (mode === PageViewMode.CHARACTERS) {
      navigate(`/characters/${id}`);
    } else {
      navigate(`/comics/${id}`);
    }
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
              alt={item.name || item.title}
            />
            <Card.Body>
              <Card.Title>{item.name || item.title}</Card.Title>
              {item.prices && (
                <SC.Price>
                  Price:{" "}
                  {item.prices[0].price > 0 ? `$${item.prices[0].price}` : "-"}
                </SC.Price>
              )}
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
