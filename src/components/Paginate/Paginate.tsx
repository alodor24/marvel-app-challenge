import { Container, Pagination } from "react-bootstrap";
import usePaginateContext from "../../context/PaginateContext/usePaginateContext";
import { CharactersResponse } from "../../hooks/types";
import * as SC from "./Paginate.styles";

type Props = {
  data?: CharactersResponse;
};

enum OptionPaginateEnum {
  PREV = "prev",
  NEXT = "next",
  FIRST = "first",
  LAST = "last",
}

const Paginate: React.FC<Props> = ({ data }) => {
  const { offset, setOffset, currentPage, setCurrentPage } =
    usePaginateContext();

  const LastPage = data && Math.ceil(data.total / 20);
  const isDisabledPrevButton = offset === 0 ? true : false;
  const isDisabledNextButton = LastPage === currentPage ? true : false;

  const selectedOption = {
    [OptionPaginateEnum.PREV]: () => {
      setOffset((prev) => prev - 20);
      setCurrentPage((prev) => prev - 1);
    },
    [OptionPaginateEnum.NEXT]: () => {
      if (LastPage && LastPage > currentPage) {
        setOffset((prev) => prev + 20);
        setCurrentPage((prev) => prev + 1);
      }
    },
    [OptionPaginateEnum.FIRST]: () => {
      setOffset(0);
      setCurrentPage(1);
    },
    [OptionPaginateEnum.LAST]: () => {
      if (LastPage) {
        setOffset(LastPage - 1 * 20);
        setCurrentPage(LastPage);
      }
    },
  };

  const handlePaginate = (option: OptionPaginateEnum) => {
    selectedOption[option]();
  };

  console.log(offset);

  return (
    <Container>
      <SC.Wrapper>
        <SC.PaginationWrapper>
          <Pagination.First
            onClick={() => handlePaginate(OptionPaginateEnum.FIRST)}
            disabled={isDisabledPrevButton}
          />
          <Pagination.Prev
            onClick={() => handlePaginate(OptionPaginateEnum.PREV)}
            disabled={isDisabledPrevButton}
          />

          <Pagination.Item active>{currentPage}</Pagination.Item>

          <Pagination.Next
            onClick={() => handlePaginate(OptionPaginateEnum.NEXT)}
            disabled={isDisabledNextButton}
          />
          <Pagination.Last
            onClick={() => handlePaginate(OptionPaginateEnum.LAST)}
            disabled={isDisabledNextButton}
          />
        </SC.PaginationWrapper>
      </SC.Wrapper>
    </Container>
  );
};

export default Paginate;
