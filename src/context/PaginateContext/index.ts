import { createContext } from "react";

export type PaginateContextData = {
  offsetCharacters: number;
  setOffsetCharacters: React.Dispatch<React.SetStateAction<number>>;
  currentPageCharacters: number;
  setCurrentPageCharacters: React.Dispatch<React.SetStateAction<number>>;
  offsetComics: number;
  setOffsetComics: React.Dispatch<React.SetStateAction<number>>;
  currentPageComics: number;
  setCurrentPageComics: React.Dispatch<React.SetStateAction<number>>;
};

const PaginateContext = createContext<PaginateContextData | undefined>(
  undefined
);

export default PaginateContext;
