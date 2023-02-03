import { useContext } from "react";
import PaginateContext, { PaginateContextData } from ".";

const usePaginateContext = (): PaginateContextData => {
  const paginateContext = useContext(PaginateContext);

  if (!paginateContext) {
    throw new Error(
      "usePaginateContext must be used within the PaginateContext.Provider"
    );
  }

  return paginateContext;
};

export default usePaginateContext;
