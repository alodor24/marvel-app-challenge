import { Container, Pagination } from "react-bootstrap";
import usePaginateContext from "../../context/PaginateContext/usePaginateContext";
import { PageViewMode } from "../constants";
import * as SC from "./Paginate.styles";

type Props = {
  lastPage?: number;
  offset: number;
  currentPage: number;
  mode: PageViewMode;
};

enum OptionPaginateEnum {
  PREV = "prev",
  NEXT = "next",
  FIRST = "first",
  LAST = "last",
}

const Paginate: React.FC<Props> = ({ lastPage, offset, currentPage, mode }) => {
  const { setOffsetCharacters, setCurrentPageCharacters, setOffsetComics, setCurrentPageComics } =
    usePaginateContext();
  
  const isDisabledPrevButton = offset === 0 ? true : false;
  const isDisabledNextButton = lastPage === currentPage ? true : false;

  const handlePrev = () => {
    if (mode === PageViewMode.CHARACTERS) {
      setOffsetCharacters((prev) => prev - 20);
      setCurrentPageCharacters((prev) => prev - 1);
    } else {
      setOffsetComics((prev) => prev - 20);
      setCurrentPageComics((prev) => prev - 1);
    }
  };

  const handleNext = () => {
    if (lastPage && lastPage > currentPage) {
      if (mode === PageViewMode.CHARACTERS) {
        setOffsetCharacters((prev) => prev + 20);
        setCurrentPageCharacters((prev) => prev + 1);
      } else {
        setOffsetComics((prev) => prev + 20);
        setCurrentPageComics((prev) => prev + 1);
      }
    }
  };

  const handleFirst = () => {
    if (mode === PageViewMode.CHARACTERS) {
      setOffsetCharacters(0);
      setCurrentPageCharacters(1);
    } else {
      setOffsetComics(0);
      setCurrentPageComics(1);
    }
  };

  const handleLast = () => {
    if (lastPage) {
      if (mode === PageViewMode.CHARACTERS) {
        setOffsetCharacters(lastPage * 20);
        setCurrentPageCharacters(lastPage);
      } else {
        setOffsetComics(lastPage * 20);
        setCurrentPageComics(lastPage);
      }
    }
  };

  const selectedOption = {
    [OptionPaginateEnum.PREV]: () => {
      handlePrev();
    },
    [OptionPaginateEnum.NEXT]: () => {
      handleNext();
    },
    [OptionPaginateEnum.FIRST]: () => {
      handleFirst();
    },
    [OptionPaginateEnum.LAST]: () => {
      handleLast();
    },
  };

  const handlePaginate = (option: OptionPaginateEnum) => {
    selectedOption[option]();
  };

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
