import { createContext } from "react";

export type PaginateContextData = {
  offset: number;
  setOffset: React.Dispatch<React.SetStateAction<number>>;
  currentPage: number;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
};

const PaginateContext = createContext<PaginateContextData | undefined>(
  undefined
);

export default PaginateContext;
