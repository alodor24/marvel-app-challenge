import { Container, Pagination } from "react-bootstrap";
import * as SC from "./Paginate.styles";

const Paginate = () => {
  const active = 2;
  const items = [];

  for (let number = 1; number <= 3; number++) {
    items.push(
      <Pagination.Item key={number} active={number === active}>
        {number}
      </Pagination.Item>
    );
  }

  return (
    <Container>
      <SC.Wrapper>
        <SC.PaginationWrapper>
          <Pagination.First />
          <Pagination.Prev />
          {items}
          <Pagination.Next />
          <Pagination.Last />
        </SC.PaginationWrapper>
      </SC.Wrapper>
    </Container>
  );
};

export default Paginate;
