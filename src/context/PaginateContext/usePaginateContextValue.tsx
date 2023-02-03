import { useState } from "react";
import { PaginateContextData } from ".";

const usePaginateContextValue = (): PaginateContextData => {
  const [offset, setOffset] = useState<number>(0);
  const [currentPage, setCurrentPage] = useState<number>(1);

  return {
    offset,
    setOffset,
    currentPage,
    setCurrentPage,
  };
};

export default usePaginateContextValue;
