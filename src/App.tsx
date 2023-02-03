import { RouterProvider } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import PaginateContext from "./context/PaginateContext";
import usePaginateContextValue from "./context/PaginateContext/usePaginateContextValue";
import GlobalStyle from "./globalStyles";
import { router } from "./router";
import theme from "./theme";

const App = () => {
  const paginateContextValue = usePaginateContextValue();

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <PaginateContext.Provider value={paginateContextValue}>
        <RouterProvider router={router} />
      </PaginateContext.Provider>
    </ThemeProvider>
  );
};

export default App;
